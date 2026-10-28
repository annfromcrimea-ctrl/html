# Серверлесс-функция Яндекс Облака для записи форм в две Яндекс Таблицы.
# Важно: URL таблиц и секреты задаются переменными окружения, а не в коде.
import json
import os
import re
import urllib.error
import urllib.request
from datetime import datetime, timezone

# Адрес метаданных сервисного аккаунта для получения IAM-токена.
METADATA_TOKEN_URL = "http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token"
MAX_BODY = 32_000


def response(status, body, origin=None):
    """Возвращает единый JSON-ответ с безопасными CORS-заголовками."""
    allowed = os.environ.get("ALLOWED_ORIGIN", "").strip()
    headers = {"Content-Type": "application/json; charset=utf-8", "X-Content-Type-Options": "nosniff"}
    if origin and allowed and origin == allowed:
        headers["Access-Control-Allow-Origin"] = allowed
        headers["Vary"] = "Origin"
    return {"statusCode": status, "headers": headers, "body": json.dumps(body, ensure_ascii=False)}


def clean(value, max_len=1000):
    """Удаляет управляющие символы и HTML-подобные скобки из входной строки."""
    if value is None:
        return ""
    value = str(value).strip().replace("<", "").replace(">", "")
    value = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]", "", value)
    return value[:max_len]


def valid_email(value):
    """Проверяет необязательный адрес электронной почты без попытки доставить письмо."""
    return not value or bool(re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", value))


def valid_date(value):
    """Проверяет календарную дату в формате YYYY-MM-DD."""
    try:
        datetime.strptime(value, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def get_iam_token():
    """Получает короткоживущий IAM-токен сервисного аккаунта из метаданных ВМ."""
    request = urllib.request.Request(METADATA_TOKEN_URL, headers={"Metadata-Flavor": "Google"})
    with urllib.request.urlopen(request, timeout=4) as result:
        data = json.loads(result.read().decode("utf-8"))
    token = data.get("access_token", "")
    if not token:
        raise RuntimeError("IAM-токен не получен")
    return token


def append_to_table(table_url, columns, token):
    """Передаёт одну строку в настроенный API таблиц."""
    if not table_url:
        raise RuntimeError("Не задан URL таблицы")
    api_key = os.environ.get("API_KEY", "").strip()
    if not api_key:
        raise RuntimeError("Не задан API_KEY")
    # Тело намеренно содержит только заранее разрешённые колонки.
    payload = json.dumps({"columns": columns}, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        table_url,
        data=payload,
        method="POST",
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {token}",
            "X-API-Key": api_key,
        },
    )
    with urllib.request.urlopen(request, timeout=8) as result:
        if result.status < 200 or result.status >= 300:
            raise RuntimeError(f"API таблиц вернул статус {result.status}")


def handler(event, context):
    """Точка входа функции Яндекс Облака."""
    headers = event.get("headers") or {}
    origin = headers.get("origin") or headers.get("Origin") or ""
    allowed = os.environ.get("ALLOWED_ORIGIN", "").strip()
    # Origin обязателен: пустой ALLOWED_ORIGIN не должен случайно открыть API всему интернету.
    if not allowed or origin != allowed:
        return response(403, {"ok": False, "error": "Недопустимый источник запроса"}, origin)

    method = (event.get("httpMethod") or event.get("requestContext", {}).get("http", {}).get("method") or "POST").upper()
    if method == "OPTIONS":
        result = response(204, {}, origin)
        result["headers"]["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        result["headers"]["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-Origin"
        return result
    if method != "POST":
        return response(405, {"ok": False, "error": "Разрешён только POST"}, origin)

    raw_body = event.get("body") or "{}"
    if len(raw_body) > MAX_BODY:
        return response(413, {"ok": False, "error": "Слишком большой запрос"}, origin)
    try:
        data = json.loads(raw_body)
    except (TypeError, json.JSONDecodeError):
        return response(400, {"ok": False, "error": "Некорректный JSON"}, origin)
    if not isinstance(data, dict):
        return response(400, {"ok": False, "error": "Ожидался JSON-объект"}, origin)

    form_type = clean(data.get("type"), 20)
    if form_type not in {"consent", "booking"}:
        return response(400, {"ok": False, "error": "Неизвестный тип формы"}, origin)

    common = {
        "firstName": clean(data.get("firstName"), 80),
        "lastName": clean(data.get("lastName"), 80),
        "email": clean(data.get("email"), 160),
    }
    if not common["firstName"] or not common["lastName"] or not valid_email(common["email"]):
        return response(422, {"ok": False, "error": "Проверьте имя, фамилию и e-mail"}, origin)

    if form_type == "consent":
        if not clean(data.get("consentNumber"), 40) or not clean(data.get("consentDate"), 80):
            return response(422, {"ok": False, "error": "Не хватает реквизитов согласия"}, origin)
        columns = {
            "Имя": common["firstName"],
            "Фамилия": common["lastName"],
            "E-mail": common["email"],
            "Дата согласия": clean(data.get("consentDate"), 80),
            "№ согласия": clean(data.get("consentNumber"), 40),
            "Рассылка": "Да" if bool(data.get("newsletter")) else "Нет",
        }
        table_url = os.environ.get("CONSENTS_TABLE_URL", "")
    else:
        phone = clean(data.get("phone"), 30)
        lesson = clean(data.get("lesson"), 120)
        date = clean(data.get("date"), 10)
        time = clean(data.get("time"), 10)
        if not phone or not lesson or not valid_date(date) or not re.fullmatch(r"\d{2}:\d{2}", time):
            return response(422, {"ok": False, "error": "Проверьте обязательные поля записи"}, origin)
        columns = {
            "Имя": common["firstName"],
            "Фамилия": common["lastName"],
            "Телефон": phone,
            "E-mail": common["email"],
            "Занятие": lesson,
            "Дата": date,
            "Время": time,
            "Комментарий": clean(data.get("comment"), 1000),
            "№ заявки": clean(data.get("bookingNumber"), 40),
            "Отправлена": clean(data.get("sentAt"), 80) or datetime.now(timezone.utc).isoformat(),
        }
        table_url = os.environ.get("BOOKINGS_TABLE_URL", "")

    try:
        token = get_iam_token()
        append_to_table(table_url, columns, token)
    except (urllib.error.URLError, TimeoutError, RuntimeError, json.JSONDecodeError) as error:
        # Подробности ошибки не выдаём посетителю, чтобы не раскрывать инфраструктуру.
        print(f"Ошибка записи в таблицу: {error}")
        return response(502, {"ok": False, "error": "Временная ошибка записи"}, origin)
    return response(200, {"ok": True}, origin)


# Яндекс Облако ожидает функцию с именем handler.
