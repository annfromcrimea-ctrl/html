/* Reading Adventure — EXTENSION. Подключить перед </body>, ПОСЛЕ основного <script>:
   <script src="reading-extension.js"></script> */
(function () {
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const rnd = a => a[Math.random() * a.length | 0];
const shuf = a => [...a].sort(() => Math.random() - .5);
const P = (s, c) => s.split(';').map(x => { const [w, e, ru] = x.trim().split('|'); const o = {w, e, ru}; if (c) o.p = w.split(''); return o; });
const add = (o, k, s, c) => o[k].push(...P(s, c));

// ================= 1. БОЛЬШЕ СЛОВ В СУЩЕСТВУЮЩИХ РАЗДЕЛАХ =================
add(cvcData,'a','sad|😢|грустный;dad|👨|папа;nap|😴|вздремнуть;cap|🧢|кепка;gap|🕳️|промежуток;lap|🧎|колени;ram|🐏|баран;yam|🍠|батат;wag|🐕|вилять',1);
add(cvcData,'e','get|🫴|получать;vet|🩺|ветеринар;web|🕸️|паутина;yes|✅|да;beg|🙏|просить;peg|📍|колышек;gem|💎|самоцвет;set|🧩|набор',1);
add(cvcData,'i','kid|🧒|ребёнок;lid|🥫|крышка;rip|📄|рвать;sip|🥤|глоток;tip|💡|совет;dim|🔅|тусклый;kit|🧰|набор;mix|🥣|смешивать;six|6️⃣|шесть',1);
add(cvcData,'o','mop|🧹|швабра;hop|🐇|прыгать;cop|👮|полицейский;sob|😭|рыдать;rod|🎣|удочка;nod|🙂|кивать;job|💼|работа',1);
add(cvcData,'u','jug|🫗|кувшин;gum|🍬|жвачка;hum|🎶|напевать;sum|➕|сумма;hut|🛖|хижина;mud|🟤|грязь;bud|🌱|бутон;cub|🦁|детёныш;tub|🛁|ванна',1);
add(digraphData,'sh','shark|🦈|акула;sheet|📄|простыня;shirt|👕|рубашка;shout|📢|кричать;sharp|🔪|острый');
add(digraphData,'ch','chop|🪓|рубить;chain|⛓️|цепь;cheek|😊|щека;child|🧒|ребёнок;beach|🏖️|пляж;peach|🍑|персик;bench|🪑|скамейка');
add(digraphData,'th','bath|🛁|ванна;path|🛤️|тропа;teeth|🦷|зубы;month|📅|месяц;cloth|🧵|ткань');
add(digraphData,'ph','trophy|🏆|кубок;phantom|👻|призрак;orphan|🧒|сирота');
add(digraphData,'ck','chicken|🐔|курица;pocket|👖|карман;jacket|🧥|куртка;stick|🪵|палка;quick|⚡|быстрый;kick|🦵|пинать');
add(digraphData,'wh','wheat|🌾|пшеница;wheelchair|♿|инвалидная коляска');
add(blendsData,'l','block|🧱|блок;blanket|🛏️|одеяло;cloud|☁️|облако;clown|🤡|клоун;flower|🌸|цветок;flute|🎵|флейта;globe|🌍|глобус;plant|🪴|растение;plum|🍑|слива;sled|🛷|санки');
add(blendsData,'r','bridge|🌉|мост;branch|🌿|ветка;cream|🍦|сливки;crayon|🖍️|мелок;draw|🖍️|рисовать;dragon|🐉|дракон;fruit|🍎|фрукт;grapes|🍇|виноград;princess|👸|принцесса;truck|🚚|грузовик;tractor|🚜|трактор');
add(blendsData,'s','scarf|🧣|шарф;skate|⛸️|коньки;ski|⛷️|лыжи;smell|👃|нюхать;spider|🕷️|паук;sponge|🧽|губка;stamp|📮|марка;stick|🪵|палка;swing|🎠|качели;sweater|🧶|свитер;splash|💦|брызги;street|🛣️|улица');
add(vowelTeamsData,'ai','chain|⛓️|цепь;paint|🎨|краска;snail|🐌|улитка;wait|⏳|ждать;tray|🍽️|поднос;clay|🏺|глина;gray|🩶|серый');
add(vowelTeamsData,'ee','queen|👸|королева;wheel|🛞|колесо;teeth|🦷|зубы;beach|🏖️|пляж;leaf|🍃|лист;peach|🍑|персик;seal|🦭|тюлень;jeans|👖|джинсы');
add(vowelTeamsData,'oa','soap|🧼|мыло;soak|💦|мочить;float|🛟|плавать;toast|🍞|тост;yellow|🟡|жёлтый;window|🪟|окно;pillow|🛏️|подушка');
add(vowelTeamsData,'oo','broom|🧹|метла;roof|🏠|крыша;tooth|🦷|зуб;boot|🥾|ботинок;balloon|🎈|шарик;kangaroo|🦘|кенгуру;stood|🧍|стоял');
add(vowelTeamsData,'ou','flower|🌸|цветок;shower|🚿|душ;owl|🦉|сова;clown|🤡|клоун;crown|👑|корона;mountain|⛰️|гора;sound|🔊|звук;ground|🌱|земля');
add(vowelTeamsData,'ar','garden|🌷|сад;barn|🛖|сарай;jar|🫙|банка;scarf|🧣|шарф;arm|💪|рука;shark|🦈|акула;market|🛒|рынок');
add(vowelTeamsData,'or','born|👶|рождённый;torch|🔦|факел;fork|🍴|вилка;stork|🦩|аист;door|🚪|дверь;floor|🟫|пол;four|4️⃣|четыре');
syllablesLeData.push(...[['bottle','🍼','бутылка','bot·tle'],['puzzle','🧩','головоломка','puz·zle'],['jungle','🌴','джунгли','jun·gle'],['castle','🏰','замок','cas·tle'],['giggle','😆','хихикать','gig·gle'],['needle','🪡','игла','nee·dle'],['eagle','🦅','орёл','ea·gle'],['bicycle','🚲','велосипед','bi·cy·cle']].map(a => ({w:a[0], e:a[1], ru:a[2], dots:a[3]})));
syllablesTwoData.push(...[['window','🪟','окно','win·dow'],['flower','🌸','цветок','flow·er'],['dinner','🍽️','ужин','din·ner'],['tiger','🐯','тигр','ti·ger'],['pizza','🍕','пицца','piz·za'],['robot','🤖','робот','ro·bot'],['banana','🍌','банан','ba·na·na'],['elephant','🐘','слон','el·e·phant'],['umbrella','☂️','зонт','um·brel·la'],['butterfly','🦋','бабочка','but·ter·fly'],['computer','💻','компьютер','com·pu·ter'],['potato','🥔','картофель','po·ta·to']].map(a => ({w:a[0], e:a[1], ru:a[2], dots:a[3]})));
add(vocabData,'animals','owl|🦉|сова;camel|🐫|верблюд;zebra|🦓|зебра;kangaroo|🦘|кенгуру;penguin|🐧|пингвин;octopus|🐙|осьминог;crab|🦀|краб;snail|🐌|улитка;ladybug|🐞|божья коровка;squirrel|🐿️|белка;hedgehog|🦔|ёж;donkey|🫏|осёл;parrot|🦜|попугай;swan|🦢|лебедь;eagle|🦅|орёл;crocodile|🐊|крокодил;hippo|🦛|бегемот;rhino|🦏|носорог;seal|🦭|тюлень;bat|🦇|летучая мышь');
add(vocabData,'food','pear|🍐|груша;pineapple|🍍|ананас;mango|🥭|манго;kiwi|🥝|киви;coconut|🥥|кокос;avocado|🥑|авокадо;cucumber|🥒|огурец;onion|🧅|лук;garlic|🧄|чеснок;mushroom|🍄|гриб;salad|🥗|салат;soup|🍲|суп;sandwich|🥪|бутерброд;burger|🍔|бургер;pasta|🍝|паста;pancake|🥞|блин;honey|🍯|мёд;salt|🧂|соль;sausage|🌭|сосиска;donut|🍩|пончик;popcorn|🍿|попкорн');
add(vocabData,'home','sofa|🛋️|диван;mirror|🪞|зеркало;clock|🕰️|часы;fridge|🧊|холодильник;oven|♨️|плита;shower|🚿|душ;stairs|🪜|лестница;roof|🏠|крыша;wall|🧱|стена;floor|🟫|пол;key|🔑|ключ;towel|🧻|полотенце');
add(vocabData,'school','eraser|🧽|ластик;notebook|📓|тетрадь;board|🧑‍🏫|доска;map|🗺️|карта;globe|🌍|глобус;marker|🖊️|маркер;library|📚|библиотека;recess|🛝|перемена;grade|💯|оценка;exam|📝|экзамен');
sightWordsData[5] = 'because these give most even new want use how two way find tell very after work first well again always before every great never often right still where write world'.split(' ');
sightWordsData[6] = 'against around between both change different does found large learn number once place small sound study together under until water while above almost along enough family friend important might paper sentence'.split(' ');

// ================= 2. ХЕЛПЕРЫ UI =================
function bindSub(t) { t.addEventListener('click', () => { const c = t.closest('.card'); c.querySelectorAll('.subtab').forEach(x => x.classList.remove('active')); t.classList.add('active'); c.querySelectorAll('.subcontent').forEach(x => x.classList.remove('active')); document.getElementById(t.dataset.sub).classList.add('active'); }); }
function addSub(card, id, label, html) {
  const b = document.createElement('button'); b.className = 'subtab'; b.dataset.sub = id; b.textContent = label;
  (card.querySelector('.subtabs') || card).appendChild(b); bindSub(b);
  const d = document.createElement('div'); d.id = id; d.className = 'subcontent'; if (html) d.innerHTML = html; card.appendChild(d); return d;
}
function fillWords(el, items, title, fn) {
  if (title) el.insertAdjacentHTML('beforeend', `<h3>${title}</h3>`);
  const g = document.createElement('div'); g.className = 'word-grid';
  items.forEach(i => { const d = document.createElement('div'); d.className = 'word-card'; d.innerHTML = `<div class="emoji">${i.e}</div><div class="word">${i.w}</div><div class="trans">${i.ru}</div>`; d.onclick = () => fn ? fn(i) : speak(i.w); g.appendChild(d); });
  el.appendChild(g);
}
function addSection(id, label, before) {
  const b = document.createElement('button'); b.className = 'nav-btn'; b.dataset.target = id; b.textContent = label;
  $('nav').insertBefore(b, $(`nav [data-target=${before}]`));
  const s = document.createElement('section'); s.id = id; s.className = 'section'; s.innerHTML = '<div class="card"></div>'; $('main').appendChild(s); return s.firstChild;
}
// навигация для новых кнопок (и выравнивание active у старых)
document.addEventListener('click', e => {
  const b = e.target.closest('nav .nav-btn[data-target]'); if (!b) return;
  $$('nav .nav-btn').forEach(x => x.classList.toggle('active', x === b));
  $$('.section').forEach(s => s.classList.toggle('active', s.id === b.dataset.target));
});

// ================= 3. НОВЫЕ ПОДРАЗДЕЛЫ =================
const dg = $('#digraphs .card');
fillWords(addSub(dg, 'dig-qu', 'qu'), P('queen|👸|королева;quiet|🤫|тихий;quick|⚡|быстрый;quilt|🛏️|лоскутное одеяло;quiz|📝|викторина;question|❓|вопрос;quack|🦆|кря-кря;square|🟥|квадрат'), 'qu = /kw/');
fillWords(addSub(dg, 'dig-silent', 'Silent letters'), P('knee|🦵|колено;knife|🔪|нож;knot|🪢|узел;knock|🚪|стучать;know|🧠|знать;write|✍️|писать;wrap|🎁|заворачивать;wrong|❌|неверный;wrist|⌚|запястье;lamb|🐑|ягнёнок;comb|🪮|расчёска;climb|🧗|лазить;gnome|🧙|гном;sign|🪧|знак'), 'kn, wr, mb, gn — одна буква молчит');
fillWords(addSub(dg, 'dig-ng', 'ng / nk'), P('ring|💍|кольцо;king|🤴|король;song|🎵|песня;sing|🎤|петь;long|📏|длинный;wing|🪽|крыло;bank|🏦|банк;pink|🩷|розовый;sink|🚰|раковина;trunk|🐘|хобот;skunk|🦨|скунс;monkey|🐒|обезьяна'), 'ng /ŋ/ и nk /ŋk/');
const vw = $('#vowels .card');
fillWords(addSub(vw, 'vt-igh', 'igh / ie / y'), P('light|💡|свет;night|🌙|ночь;right|✅|правильный;high|⬆️|высокий;sky|☁️|небо;fly|🪰|летать;cry|😢|плакать;pie|🥧|пирог;tie|👔|галстук;knight|🛡️|рыцарь;sight|👀|зрение;flight|✈️|полёт'), 'Long I: igh, ie, y');
fillWords(addSub(vw, 'vt-ew', 'ew / ue / ui'), P('new|🆕|новый;clue|🔍|улика;fruit|🍎|фрукт;suit|🤵|костюм;grew|🌱|вырос;chew|🦷|жевать;blue|🔵|синий;glue|🧴|клей;juice|🧃|сок;screw|🔩|шуруп;true|✅|правда;Tuesday|2️⃣|вторник'), 'Long U/OO: ew, ue, ui');
fillWords(addSub(vw, 'vt-aw', 'aw / au'), P('saw|🪚|пила;paw|🐾|лапа;draw|🖍️|рисовать;claw|🦞|коготь;straw|🥤|соломинка;lawn|🌿|газон;yawn|🥱|зевать;sauce|🍝|соус;August|📅|август;launch|🚀|запуск;astronaut|🧑‍🚀|космонавт;dinosaur|🦖|динозавр'), '/ɔː/: aw, au');
fillWords(addSub(vw, 'vt-er', 'er / ir / ur'), P('her|👩|её;fern|🌿|папоротник;bird|🐦|птица;girl|👧|девочка;shirt|👕|рубашка;first|🥇|первый;turn|🔄|поворот;nurse|🧑‍⚕️|медсестра;burn|🔥|гореть;fur|🧸|мех;tiger|🐯|тигр;butter|🧈|масло;purple|🟣|фиолетовый;thirsty|🥵|хочет пить'), 'Все три сочетания = /ɜː/');
const sg = $('#sight .card');
[5, 6].forEach(n => { const d = addSub(sg, 'sw-' + n, 'Level ' + n, `<div class="sight-grid" id="sw${n}Grid"></div>`); sightWordsData[n].forEach(w => { const c = document.createElement('div'); c.className = 'sight-card'; c.innerText = w; c.onclick = () => speak(w); d.firstChild.appendChild(c); }); });
const vc = $('#vocab .card');
const newVocab = {
  Transport: 'car|🚗|машина;bus|🚌|автобус;train|🚆|поезд;plane|✈️|самолёт;ship|🚢|корабль;boat|⛵|лодка;bike|🚲|велосипед;taxi|🚕|такси;truck|🚚|грузовик;subway|🚇|метро;helicopter|🚁|вертолёт;rocket|🚀|ракета;tractor|🚜|трактор;scooter|🛴|самокат;ambulance|🚑|скорая;fire truck|🚒|пожарная машина;motorcycle|🏍️|мотоцикл',
  Jobs: 'doctor|👩‍⚕️|врач;nurse|🧑‍⚕️|медсестра;teacher|👩‍🏫|учитель;farmer|🧑‍🌾|фермер;cook|👨‍🍳|повар;pilot|🧑‍✈️|пилот;police officer|👮|полицейский;firefighter|🧑‍🚒|пожарный;artist|🧑‍🎨|художник;singer|🎤|певец;driver|🚖|водитель;builder|👷|строитель;scientist|🧑‍🔬|учёный;astronaut|🧑‍🚀|космонавт;dentist|🦷|стоматолог;baker|🥖|пекарь;judge|⚖️|судья',
  Places: 'park|🌳|парк;zoo|🦁|зоопарк;library|📚|библиотека;hospital|🏥|больница;shop|🏪|магазин;market|🛒|рынок;bank|🏦|банк;museum|🏛️|музей;cinema|🎬|кинотеатр;farm|🚜|ферма;beach|🏖️|пляж;airport|🛫|аэропорт;station|🚉|вокзал;church|⛪|церковь;bakery|🥐|пекарня;restaurant|🍽️|ресторан;hotel|🏨|отель;castle|🏰|замок',
  'Days & Months': 'Monday|1️⃣|понедельник;Tuesday|2️⃣|вторник;Wednesday|3️⃣|среда;Thursday|4️⃣|четверг;Friday|5️⃣|пятница;Saturday|6️⃣|суббота;Sunday|7️⃣|воскресенье;January|❄️|январь;February|💝|февраль;March|🌱|март;April|🌦️|апрель;May|🌷|май;June|☀️|июнь;July|🏖️|июль;August|🍉|август;September|🎒|сентябрь;October|🎃|октябрь;November|🍂|ноябрь;December|🎄|декабрь;morning|🌅|утро;afternoon|🌞|день;evening|🌇|вечер;night|🌙|ночь',
  Shapes: 'circle|⭕|круг;square|🟥|квадрат;triangle|🔺|треугольник;rectangle|▬|прямоугольник;star|⭐|звезда;heart|❤️|сердце;diamond|🔷|ромб;oval|🥚|овал;cube|🧊|куб;sphere|🔮|шар;cone|🍦|конус',
  Nature: 'tree|🌳|дерево;flower|🌸|цветок;leaf|🍃|лист;grass|🌿|трава;mountain|⛰️|гора;river|🏞️|река;sea|🌊|море;forest|🌲|лес;desert|🏜️|пустыня;island|🏝️|остров;volcano|🌋|вулкан;moon|🌙|луна;planet|🪐|планета;earth|🌍|Земля;fire|🔥|огонь;ice|🧊|лёд;sand|🏖️|песок;rock|🪨|камень',
  Hobbies: 'football|⚽|футбол;basketball|🏀|баскетбол;tennis|🎾|теннис;swimming|🏊|плавание;skiing|⛷️|лыжи;running|🏃|бег;dancing|💃|танцы;singing|🎤|пение;drawing|🎨|рисование;reading|📖|чтение;cooking|🍳|готовка;cycling|🚴|велоспорт;chess|♟️|шахматы;fishing|🎣|рыбалка;camping|⛺|поход;music|🎵|музыка;guitar|🎸|гитара;piano|🎹|пианино;video game|🎮|видеоигра'
};
Object.entries(newVocab).forEach(([k, s]) => { const key = k.toLowerCase().replace(/\W+/g, ''); vocabData[key] = P(s); fillWords(addSub(vc, 'v-' + key, k), vocabData[key]); });

// ================= 4. ФРАЗЫ =================
const ph = addSection('phrases', 'Phrases', 'story');
ph.innerHTML = '<h2>Everyday Phrases</h2><p class="desc">Нажми на фразу — услышишь её.</p><div class="subtabs"></div>';
const phrases = {
  Greetings: 'Hello!|Привет!;Good morning!|Доброе утро!;Good night!|Спокойной ночи!;How are you?|Как дела?;I am fine, thank you.|Хорошо, спасибо.;Nice to meet you.|Приятно познакомиться.;See you later!|Увидимся!;Goodbye!|До свидания!',
  Politeness: 'Please.|Пожалуйста.;Thank you very much.|Большое спасибо.;You are welcome.|Не за что.;Excuse me.|Извините.;I am sorry.|Мне жаль.;Can you help me?|Вы можете мне помочь?;No problem.|Без проблем.;After you.|После вас.',
  Classroom: 'May I come in?|Можно войти?;I do not understand.|Я не понимаю.;Can you repeat, please?|Повторите, пожалуйста.;How do you spell it?|Как это пишется?;What does it mean?|Что это значит?;Open your book.|Откройте книгу.;Raise your hand.|Поднимите руку.;I have a question.|У меня вопрос.',
  Questions: 'What is your name?|Как тебя зовут?;How old are you?|Сколько тебе лет?;Where are you from?|Откуда ты?;Where is the toilet?|Где туалет?;What time is it?|Который час?;Who is that?|Кто это?;Do you speak English?|Вы говорите по-английски?;What is your favourite colour?|Какой твой любимый цвет?',
  Shopping: 'How much is it?|Сколько это стоит?;I would like a coffee.|Я бы хотел кофе.;Can I have the menu?|Можно меню?;The bill, please.|Счёт, пожалуйста.;I am just looking.|Я просто смотрю.;It is too expensive.|Это слишком дорого.;Do you take cards?|Вы принимаете карты?;I will take it.|Я это возьму.',
  Travel: 'Where is the station?|Где вокзал?;One ticket, please.|Один билет, пожалуйста.;I am lost.|Я заблудился.;Turn left.|Поверните налево.;Go straight.|Идите прямо.;Is it far?|Это далеко?;I have a reservation.|У меня бронь.;Help!|На помощь!'
};
Object.entries(phrases).forEach(([k, s], n) => {
  const d = addSub(ph, 'ph-' + k, k); const g = document.createElement('div'); g.className = 'word-grid'; g.style.gridTemplateColumns = 'repeat(auto-fill,minmax(250px,1fr))';
  s.split(';').forEach(x => { const [en, ru] = x.split('|'); const c = document.createElement('div'); c.className = 'syllable-card'; c.innerHTML = `<div class="syl-word" style="font-size:1.25rem">🔊 ${en}</div><div class="trans">${ru}</div>`; c.onclick = () => speak(en, 0.8); g.appendChild(c); });
  d.appendChild(g); if (!n) { d.classList.add('active'); ph.querySelector('.subtab').classList.add('active'); }
});

// ================= 5. ГРАММАТИКА =================
const gr = addSection('grammar', 'Grammar', 'story');
gr.innerHTML = '<h2>Mini Grammar</h2><p class="desc">Правило → примеры. Нажимай на примеры, чтобы послушать.</p>';
const grammar = [
  ['a / an', 'Перед согласным звуком — a, перед гласным — an.', 'a cat|кот;an apple|яблоко;an egg|яйцо;a dog|собака;an hour|час;a university|университет'],
  ['Plurals', 'Обычно +s. После s, x, sh, ch — +es. Согласная+y → ies. Есть исключения.', 'cat → cats|кошки;box → boxes|коробки;baby → babies|малыши;leaf → leaves|листья;man → men|мужчины;child → children|дети;foot → feet|ступни;mouse → mice|мыши'],
  ['To be', 'I am · he / she / it is · we / you / they are', 'I am happy.|Я счастлив.;You are my friend.|Ты мой друг.;He is a boy.|Он мальчик.;She is a teacher.|Она учитель.;It is a cat.|Это кошка.;We are at school.|Мы в школе.;They are tired.|Они устали.'],
  ['Have / Has', 'I, you, we, they — have; he, she, it — has.', 'I have a bike.|У меня есть велосипед.;She has a cat.|У неё есть кот.;We have a house.|У нас есть дом.;He has two sisters.|У него две сестры.'],
  ['This · That · These · Those', 'this / these — близко; that / those — далеко.', 'This is a pen.|Это ручка.;That is a tree.|То дерево.;These are my shoes.|Это мои туфли.;Those are birds.|То птицы.'],
  ['Simple Present', 'Привычки и факты. С he / she / it добавляем -s / -es.', 'I play tennis.|Я играю в теннис.;She plays tennis.|Она играет в теннис.;He goes to school.|Он ходит в школу.;My mom studies English.|Моя мама учит английский.;Do you like milk?|Ты любишь молоко?;She does not like fish.|Она не любит рыбу.'],
  ['Present Continuous', 'Что происходит сейчас: am / is / are + глагол-ing.', 'I am reading.|Я читаю.;He is running.|Он бежит.;They are swimming.|Они плавают.;It is raining.|Идёт дождь.'],
  ['Past Simple', 'Правильные глаголы: +ed. Неправильные нужно запомнить.', 'I walked home.|Я шёл домой.;She played outside.|Она играла на улице.;We went to the zoo.|Мы ходили в зоопарк.;He saw a bear.|Он видел медведя.;They ate pizza.|Они ели пиццу.;I had a dog.|У меня была собака.'],
  ['Prepositions of Place', 'in — внутри · on — на · under — под · next to — рядом · behind — за · between — между', 'The cat is in the box.|Кот в коробке.;The book is on the table.|Книга на столе.;The ball is under the chair.|Мяч под стулом.;The dog is behind the door.|Собака за дверью.;The bank is next to the shop.|Банк рядом с магазином.;I sit between Mom and Dad.|Я сижу между мамой и папой.'],
  ['Possessives', 'my · your · his · her · its · our · their', 'This is my bag.|Это моя сумка.;Is that your hat?|Это твоя шляпа?;His name is Tom.|Его зовут Том.;Her dress is pink.|Её платье розовое.;Our house is big.|Наш дом большой.;Their dog is funny.|Их собака смешная.'],
  ['Question Words', 'what — что · who — кто · where — где · when — когда · why — почему · how — как', 'What is this?|Что это?;Who is she?|Кто она?;Where is my bag?|Где моя сумка?;When is your birthday?|Когда твой день рождения?;Why are you sad?|Почему ты грустный?;How are you?|Как дела?'],
  ['Can / Cannot', 'can + глагол = умею, могу.', 'I can swim.|Я умею плавать.;Birds can fly.|Птицы умеют летать.;Fish cannot walk.|Рыбы не умеют ходить.;Can you help me?|Ты можешь мне помочь?']
];
grammar.forEach(([t, rule, ex]) => {
  const box = document.createElement('div'); box.className = 'family-row';
  box.innerHTML = `<span class="fam-label">${t}</span><div class="info-box" style="margin:0 0 12px">${rule}</div><div class="fam-words"></div>`;
  ex.split(';').forEach(x => { const [en, ru] = x.split('|'); const c = document.createElement('span'); c.className = 'fam-word'; c.innerHTML = `${en}<br><small style="font-weight:400;color:#95a5a6">${ru}</small>`; c.onclick = () => speak(en.split('→').pop().trim()); box.lastChild.appendChild(c); });
  gr.appendChild(box);
});

// ================= 6. ИСТОРИИ (4–7) =================
const sc = $('#story .card');
const stories = {
  'At School': [['I go to school every morning.', 'Я хожу в школу каждое утро.'], ['My teacher is kind.', 'Моя учительница добрая.'], ['We read books and write words.', 'Мы читаем книги и пишем слова.'], ['At lunch I eat an apple and bread.', 'На обед я ем яблоко и хлеб.'], ['I like my school.', 'Мне нравится моя школа.']],
  'Rainy Day': [['Today it is rainy and cold.', 'Сегодня дождливо и холодно.'], ['I put on my coat and boots.', 'Я надеваю пальто и сапоги.'], ['My little brother has a yellow umbrella.', 'У моего младшего брата жёлтый зонт.'], ['We jump in the puddles.', 'Мы прыгаем по лужам.'], ['Then we drink hot tea at home.', 'Потом мы пьём горячий чай дома.']],
  'On the Farm': [['The farm is big and green.', 'Ферма большая и зелёная.'], ['A cow eats grass near the barn.', 'Корова ест траву возле сарая.'], ['The hens lay eggs every day.', 'Куры несут яйца каждый день.'], ['The farmer rides a red tractor.', 'Фермер едет на красном тракторе.'], ['The pigs are muddy but happy.', 'Свиньи грязные, но счастливые.']],
  'My Family': [['I have a small family.', 'У меня маленькая семья.'], ['My mom is a doctor and my dad is a driver.', 'Моя мама врач, а папа водитель.'], ['My sister is ten years old.', 'Моей сестре десять лет.'], ['On Saturday we cook dinner together.', 'В субботу мы вместе готовим ужин.'], ['I love my family very much.', 'Я очень люблю свою семью.']]
};
Object.entries(stories).forEach(([title, sents]) => {
  const d = addSub(sc, 'story-' + title.replace(/\W/g, ''), title, `<h3>${title}</h3><div class="story-text"></div><div style="text-align:center;margin-top:20px"><button class="reset-btn">Play Full Story</button> <button class="reset-btn">Show Translation</button></div>`);
  const t = d.querySelector('.story-text'), [b1, b2] = d.querySelectorAll('button');
  sents.forEach(([en, ru]) => {
    const row = document.createElement('div'); row.style.marginBottom = '6px';
    en.split(' ').forEach(w => { const s = document.createElement('span'); s.className = 'story-word'; s.textContent = w; s.onclick = () => speak(w.replace(/[.,!?]/g, '')); row.append(s, ' '); });
    row.insertAdjacentHTML('beforeend', `<div class="tr" style="display:none;font-size:1rem;color:#95a5a6;line-height:1.4">${ru}</div>`); t.appendChild(row);
  });
  b1.onclick = () => speak(sents.map(s => s[0]).join(' '), 0.75);
  b2.onclick = () => { const v = b2.textContent === 'Show Translation'; d.querySelectorAll('.tr').forEach(x => x.style.display = v ? 'block' : 'none'); b2.textContent = v ? 'Hide Translation' : 'Show Translation'; };
});

// ================= 7. ПРЕДЛОЖЕНИЯ =================
[['My mother is a doctor.', 'Моя мама врач.'], ['The bird can fly high.', 'Птица умеет летать высоко.'], ['We play in the garden.', 'Мы играем в саду.'], ['He eats bread and cheese.', 'Он ест хлеб и сыр.'], ['I do not like rain.', 'Я не люблю дождь.'], ['The little frog jumps into the lake.', 'Маленькая лягушка прыгает в озеро.'], ['She is reading a long book.', 'Она читает длинную книгу.'], ['Where is my red hat?', 'Где моя красная шляпа?'], ['There are five apples on the table.', 'На столе пять яблок.'], ['My brother and I walk to the park.', 'Мы с братом идём в парк.'], ['It is cold in winter.', 'Зимой холодно.'], ['Can you help me please?', 'Помоги мне, пожалуйста.']]
  .forEach(([en, ru]) => sentencesData.push({en, ru, words: en.replace(/[.?!]/g, '').split(' ')}));

// ================= 8. НОВЫЕ ВИКТОРИНЫ =================
function mkQuiz(el, bank, pts) {
  const load = () => {
    const [q, o, a] = rnd(bank); el.innerHTML = `<div class="quiz-question">${q}</div><div class="quiz-options"></div>`;
    const box = el.querySelector('.quiz-options');
    shuf(o.map((_, i) => i)).forEach(i => { const b = document.createElement('button'); b.className = 'quiz-option'; b.textContent = o[i];
      b.onclick = () => { if (i === a) { b.classList.add('correct'); speak(o[a]); addScore(pts); quizCorrect++; setTimeout(load, 1400); } else { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 500); } };
      box.appendChild(b); });
  }; load();
}
const qc = $('#quiz .card');
mkQuiz(addSub(qc, 'quiz-grammar', 'Grammar', '<div class="quiz-container"></div>').firstChild, [
  ['She ___ a red ball.', ['has', 'have'], 0], ['I ___ happy.', ['am', 'is', 'are'], 0], ['They ___ at school.', ['is', 'are', 'am'], 1],
  ['He ___ football every day.', ['play', 'plays'], 1], ['This is ___ apple.', ['a', 'an'], 1], ['I have two ___.', ['box', 'boxes'], 1],
  ['There are three ___ in the room.', ['child', 'children'], 1], ['___ is your name?', ['What', 'Where', 'Who'], 0], ['The book is ___ the bag. (внутри)', ['in', 'on', 'under'], 0],
  ['We ___ playing now.', ['is', 'are', 'am'], 1], ['Yesterday I ___ to school.', ['go', 'went', 'goes'], 1], ['___ you swim? — Yes, I can.', ['Can', 'Is', 'Are'], 0],
  ['___ are my shoes. (эти)', ['These', 'This'], 0], ['My sister ___ English.', ['study', 'studies'], 1], ['One mouse — two ___', ['mouses', 'mice'], 1],
  ['She ___ not like milk.', ['do', 'does'], 1], ['I see ___ bird in the tree.', ['a', 'an'], 0], ['___ is your birthday? — In May.', ['When', 'Who', 'Why'], 0]], 10);
mkQuiz(addSub(qc, 'quiz-reading', 'Reading', '<div class="quiz-container"></div>').firstChild, [
  ['Spring Day: What is shining?', ['the sun', 'the moon', 'the rain'], 0], ['Spring Day: Where are flowers blooming?', ['in the garden', 'at school', 'in the sea'], 0],
  ['My Cat Tom: What is the cat’s name?', ['Tom', 'Sam', 'Max'], 0], ['My Cat Tom: What does Tom play with?', ['a ball', 'a fish', 'a book'], 0],
  ['In the Park: Where do we go on Sunday?', ['to the park', 'to school', 'to the zoo'], 0], ['In the Park: Who is playing on the grass?', ['children', 'cats', 'birds'], 0],
  ['At School: What does the child eat at lunch?', ['an apple and bread', 'pizza', 'fish'], 0], ['Rainy Day: What do they drink at home?', ['hot tea', 'milk', 'juice'], 0],
  ['Rainy Day: What colour is the umbrella?', ['yellow', 'red', 'blue'], 0], ['On the Farm: Who eats grass?', ['a cow', 'a hen', 'a farmer'], 0],
  ['On the Farm: What colour is the tractor?', ['red', 'green', 'black'], 0], ['My Family: What is the mom?', ['a doctor', 'a teacher', 'a farmer'], 0],
  ['My Family: How old is the sister?', ['ten', 'five', 'twelve'], 0]], 15);

// ================= 9. НОВЫЕ ИГРЫ =================
const gc = $('#games .card'), gsw = $('.game-switcher'), gm = {};
function addGame(key, label, html, loader) {
  const b = document.createElement('button'); b.className = 'nav-btn'; b.id = 'btn_' + key; b.textContent = label; b.onclick = () => switchGame(key); gsw.appendChild(b);
  const d = document.createElement('div'); d.id = 'game_' + key; d.className = 'game-area'; d.style.display = 'none'; d.innerHTML = html; gc.appendChild(d); gm[key] = loader; return d;
}
const pool = () => [cvcData, cvceData, digraphData, blendsData, vowelTeamsData, vocabData].flatMap(o => Object.values(o).flat()).filter(x => x.e && /^[a-z]+$/i.test(x.w));
const win = (pts, next) => { addScore(pts); gamesWon++; setTimeout(next, 1400); };

let dw; const dd = addGame('dict', 'Dictation', '<p class="desc">Послушай слово и напиши его.</p><div class="game-emoji">🎧</div><input id="dIn" autocomplete="off" autocapitalize="off" spellcheck="false" style="font:700 1.8rem var(--font-main);padding:10px 16px;border:3px solid var(--accent-blue);border-radius:12px;text-align:center;width:min(90%,320px)"><div class="game-options"><button class="game-btn">🔊 Hear</button><button class="game-btn">Check</button></div><div class="quiz-question" id="dMsg" style="min-height:70px"></div>', () => {
  dw = rnd(pool()); $('#dIn').value = ''; $('#dMsg').textContent = ''; speak(dw.w, .7); $('#dIn').focus();
});
const dCheck = () => { const v = $('#dIn').value.trim().toLowerCase(); if (!v) return;
  if (v === dw.w.toLowerCase()) { $('#dMsg').textContent = `✅ ${dw.w} — ${dw.ru}`; win(15, gm.dict); } else { $('#dMsg').textContent = `❌ Начинается на «${dw.w[0]}», букв: ${dw.w.length}`; speak(dw.w, .6); } };
const [dHear, dChk] = dd.querySelectorAll('button'); dHear.onclick = () => speak(dw.w, .6); dChk.onclick = dCheck; $('#dIn').addEventListener('keydown', e => e.key === 'Enter' && dCheck());

const opts = (el, items, correct, pts, next, label) => { el.innerHTML = ''; shuf(items).forEach(it => { const b = document.createElement('button'); b.className = 'game-btn'; b.textContent = label(it);
  b.onclick = () => { if (it === correct) { b.classList.add('correct'); speak('Great!'); win(pts, next); } else { b.classList.add('wrong'); speak('Try again'); setTimeout(() => b.classList.remove('wrong'), 500); } }; el.appendChild(b); }); };

addGame('rhyme', 'Rhyme Time', '<p class="desc">Найди слово, которое рифмуется.</p><div class="game-emoji">🎵</div><div class="quiz-question" id="rQ"></div><div class="game-options" id="rO"></div>', () => {
  const fam = rnd(wordFamiliesData.filter(f => f.words.length > 2)), w = rnd(fam.words), c = rnd(fam.words.filter(x => x !== w));
  const others = shuf(wordFamiliesData.filter(f => f !== fam)).slice(0, 3).map(f => rnd(f.words));
  $('#rQ').textContent = `Что рифмуется со словом “${w}”?`; speak(w); opts($('#rO'), [c, ...others], c, 15, gm.rhyme, x => x);
});
addGame('odd', 'Odd One Out', '<p class="desc">Какое слово лишнее?</p><div class="game-emoji">🧐</div><div class="game-options" id="oO"></div>', () => {
  const ks = ['animals', 'food', 'clothes', 'transport', 'body', 'school', 'home', 'places', 'jobs', 'nature', 'hobbies', 'emotions'];
  const [a, b] = shuf(ks); const three = shuf(vocabData[a]).slice(0, 3), odd = rnd(vocabData[b]);
  opts($('#oO'), [...three, odd], odd, 15, gm.odd, x => `${x.e} ${x.w}`);
});
addGame('sight', 'Sight Flash', '<p class="desc">Прочитай слово — потом проверь себя звуком.</p><div class="quiz-question" id="sF" style="font-family:var(--font-display);font-size:3.5rem;color:var(--accent-purple)"></div><div class="game-options"><button class="game-btn">🔊 Check</button><button class="game-btn">Next ➜ (+5)</button></div>', () => {
  $('#sF').textContent = rnd(Object.values(sightWordsData).flat());
});
const [sB1, sB2] = $('#game_sight').querySelectorAll('button'); sB1.onclick = () => speak($('#sF').textContent); sB2.onclick = () => { addScore(5); gm.sight(); };

const _sg = window.switchGame;
window.switchGame = function (t) {
  if (typeof speedTimerInterval !== 'undefined' && t !== 'speed' && speedTimerInterval) clearInterval(speedTimerInterval);
  _sg(t); Object.keys(gm).forEach(k => { $('#game_' + k).style.display = k === t ? 'block' : 'none'; $('#btn_' + k).classList.toggle('active', k === t); });
  if (gm[t]) gm[t]();
};

// ================= 10. ДОСТИЖЕНИЯ, СЧЁТЧИК СЛОВ, СОХРАНЕНИЕ =================
const learned = new Set();
const _sp = window.speak;
window.speak = function (t, r) { if (typeof t === 'string' && /^[A-Za-z']{2,}$/.test(t)) learned.add(t.toLowerCase()); return _sp(t, r); };
achievementsData.push(
  {id:'stars_250', badge:'🌠', name:'250 Stars', desc:'Collect 250 stars', condition: () => score >= 250},
  {id:'level_20', badge:'🚀', name:'Level 20', desc:'Reach level 20', condition: () => level >= 20},
  {id:'quiz_50', badge:'🧠', name:'Quiz Pro', desc:'Answer 50 correctly', condition: () => quizCorrect >= 50},
  {id:'games_25', badge:'🕹️', name:'Game Pro', desc:'Win 25 games', condition: () => gamesWon >= 25},
  {id:'words_50', badge:'📗', name:'Explorer', desc:'Hear 50 different words', condition: () => learned.size >= 50},
  {id:'words_200', badge:'📚', name:'Word Wizard', desc:'Hear 200 different words', condition: () => learned.size >= 200},
  {id:'words_500', badge:'🎓', name:'Professor', desc:'Hear 500 different words', condition: () => learned.size >= 500}
);
const KEY = 'readingAdventure_v2';
try { const s = JSON.parse(localStorage.getItem(KEY) || '{}'); score = s.score || 0; flowers = s.flowers || 0; level = Math.floor(score / 50) + 1; quizCorrect = s.q || 0; gamesWon = s.g || 0;
  (s.a || []).forEach(x => unlockedAchievements.add(x)); (s.l || []).forEach(x => learned.add(x)); } catch (e) {}
const _as = window.addScore;
window.addScore = function (v) { _as(v); try { localStorage.setItem(KEY, JSON.stringify({score, flowers, q: quizCorrect, g: gamesWon, a: [...unlockedAchievements], l: [...learned]})); } catch (e) {} };
const rb = document.createElement('button'); rb.className = 'reset-btn'; rb.textContent = 'Reset progress';
rb.onclick = () => { if (confirm('Стереть весь прогресс?')) { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); } };
const ac = $('#achievements .card'); ac.insertAdjacentHTML('beforeend', '<div style="text-align:center"></div>'); ac.lastChild.appendChild(rb);

// ================= 11. ЕЩЁ: КАРТОЧКИ, ГЛАГОЛЫ, ИГРЫ, СЕРИЯ ДНЕЙ =================
const LS = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
const SV = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };

// --- Серия дней подряд ---
(() => {
  const today = new Date().toDateString(), s = LS('ra_streak', {n: 0, last: ''});
  if (s.last !== today) { const y = new Date(Date.now() - 864e5).toDateString(); s.n = s.last === y ? s.n + 1 : 1; s.last = today; SV('ra_streak', s); }
  $('.stats-board').insertAdjacentHTML('beforeend', `<div class="stat-item">🔥 Streak: ${s.n}</div>`);
  achievementsData.push({id:'streak_3', badge:'🔥', name:'3-Day Streak', desc:'Learn 3 days in a row', condition: () => s.n >= 3},
    {id:'streak_7', badge:'🏅', name:'Week Streak', desc:'Learn 7 days in a row', condition: () => s.n >= 7});
})();

// --- Карточки с интервальным повторением (Leitner) ---
const fc = addSection('review', 'Review', 'quiz');
fc.innerHTML = '<h2>Flashcards</h2><p class="desc">Слова, которые ты знаешь хуже, показываются чаще.</p><div class="game-area"><div class="game-emoji" id="fcE"></div><div class="quiz-question" id="fcW" style="min-height:76px"></div><div class="game-options"><button class="game-btn">👀 Show</button><button class="game-btn" style="display:none">✅ I know (+3)</button><button class="game-btn" style="display:none">🔁 Again</button></div><p class="desc" id="fcS" style="margin-top:20px"></p></div>';
const [fShow, fOk, fNo] = fc.querySelectorAll('button'); let fCur, fBox = LS('ra_cards', {});
const fNext = () => {
  const p = pool(), bag = []; p.forEach(x => { const w = 6 - (fBox[x.w] || 0); for (let i = 0; i < w; i++) bag.push(x); });
  fCur = rnd(bag); $('#fcE').textContent = fCur.e; $('#fcW').textContent = '❓'; fShow.style.display = ''; fOk.style.display = fNo.style.display = 'none';
  const v = Object.values(fBox); $('#fcS').textContent = `Выучено (коробка 4–5): ${v.filter(x => x >= 4).length} · в работе: ${v.filter(x => x > 0 && x < 4).length} · всего слов: ${p.length}`;
};
fShow.onclick = () => { $('#fcW').innerHTML = `${fCur.w}<br><small style="color:#95a5a6">${fCur.ru}</small>`; speak(fCur.w); fShow.style.display = 'none'; fOk.style.display = fNo.style.display = ''; };
fOk.onclick = () => { fBox[fCur.w] = Math.min(5, (fBox[fCur.w] || 0) + 1); SV('ra_cards', fBox); addScore(3); fNext(); };
fNo.onclick = () => { fBox[fCur.w] = 1; SV('ra_cards', fBox); fNext(); };
fNext();

// --- Неправильные глаголы ---
const iv = document.createElement('div'); iv.className = 'family-row';
iv.innerHTML = '<span class="fam-label">Irregular Verbs</span><div class="info-box" style="margin:0 0 12px">Три формы: инфинитив → past → participle. Нажми — услышишь все три.</div><div class="fam-words"></div>';
'be|was/were|been|быть;have|had|had|иметь;do|did|done|делать;go|went|gone|идти;see|saw|seen|видеть;eat|ate|eaten|есть;drink|drank|drunk|пить;write|wrote|written|писать;read|read|read|читать;run|ran|run|бежать;swim|swam|swum|плавать;sing|sang|sung|петь;take|took|taken|брать;make|made|made|делать;give|gave|given|давать;come|came|come|приходить;buy|bought|bought|покупать;get|got|got|получать;know|knew|known|знать;fly|flew|flown|летать;sit|sat|sat|сидеть;speak|spoke|spoken|говорить;sleep|slept|slept|спать;find|found|found|находить;say|said|said|говорить;tell|told|told|рассказывать;begin|began|begun|начинать;break|broke|broken|ломать;draw|drew|drawn|рисовать'.split(';').forEach(x => {
  const [a, b, c, ru] = x.split('|'), s = document.createElement('span'); s.className = 'fam-word';
  s.innerHTML = `${a} → ${b} → ${c}<br><small style="font-weight:400;color:#95a5a6">${ru}</small>`; s.onclick = () => speak(`${a}, ${b.split('/')[0]}, ${c}`, .75); iv.lastChild.appendChild(s);
});
gr.appendChild(iv);

// --- Новые игры ---
let sd; const sdG = addGame('sdict', 'Sentence Dictation', '<p class="desc">Послушай предложение и напиши его целиком.</p><div class="game-emoji">✍️</div><input id="sdIn" autocomplete="off" autocapitalize="off" spellcheck="false" style="font:600 1.3rem var(--font-main);padding:10px 16px;border:3px solid var(--accent-purple);border-radius:12px;text-align:center;width:min(94%,560px)"><div class="game-options"><button class="game-btn">🔊 Hear</button><button class="game-btn">🐢 Slow</button><button class="game-btn">Check</button></div><div class="quiz-question" id="sdMsg" style="min-height:70px"></div>', () => {
  sd = rnd(sentencesData); $('#sdIn').value = ''; $('#sdMsg').textContent = 'Подсказка: ' + sd.ru; speak(sd.en, .8);
});
const norm = s => s.toLowerCase().replace(/[^a-z' ]/g, '').replace(/\s+/g, ' ').trim();
const sdCheck = () => { if (norm($('#sdIn').value) === norm(sd.en)) { $('#sdMsg').textContent = '✅ ' + sd.en; win(20, gm.sdict); } else { $('#sdMsg').textContent = `❌ Слов в предложении: ${sd.en.split(' ').length}. Попробуй ещё!`; speak(sd.en, .6); } };
const [sd1, sd2, sd3] = sdG.querySelectorAll('button'); sd1.onclick = () => speak(sd.en, .8); sd2.onclick = () => speak(sd.en, .5); sd3.onclick = sdCheck;
$('#sdIn').addEventListener('keydown', e => e.key === 'Enter' && sdCheck());

let sw_; const scG = addGame('scr', 'Unscramble', '<p class="desc">Собери слово из перемешанных букв.</p><div class="game-emoji" id="scE"></div><div class="quiz-question" id="scL" style="letter-spacing:8px;font-family:var(--font-display);font-size:2.4rem"></div><input id="scIn" autocomplete="off" autocapitalize="off" spellcheck="false" style="font:700 1.8rem var(--font-main);padding:10px 16px;border:3px solid var(--accent-coral);border-radius:12px;text-align:center;width:min(90%,320px)"><div class="game-options"><button class="game-btn">Check</button><button class="game-btn">🔊 Hint</button></div><div class="quiz-question" id="scM" style="min-height:60px"></div>', () => {
  const p = pool().filter(x => x.w.length >= 4 && x.w.length <= 7); sw_ = rnd(p); let l; do { l = shuf(sw_.w.split('')); } while (l.join('') === sw_.w);
  $('#scE').textContent = sw_.e; $('#scL').textContent = l.join(' ').toUpperCase(); $('#scIn').value = ''; $('#scM').textContent = sw_.ru;
});
const scCheck = () => { if ($('#scIn').value.trim().toLowerCase() === sw_.w.toLowerCase()) { $('#scM').textContent = '✅ ' + sw_.w; speak(sw_.w); win(15, gm.scr); } else { $('#scM').textContent = '❌ Ещё раз!'; } };
const [sc1, sc2] = scG.querySelectorAll('button'); sc1.onclick = scCheck; sc2.onclick = () => speak(sw_.w, .6); $('#scIn').addEventListener('keydown', e => e.key === 'Enter' && scCheck());

let lp; addGame('lpic', 'Listen & Pick', '<p class="desc">Послушай слово и выбери картинку.</p><div class="game-emoji">👂</div><div class="game-options" id="lpO"></div><button class="reset-btn" id="lpH">🔊 Again</button>', () => {
  const p = pool(), seen = new Set(); const four = []; shuf(p).forEach(x => { if (four.length < 4 && !seen.has(x.e) && !seen.has(x.w)) { four.push(x); seen.add(x.e); seen.add(x.w); } });
  lp = four[0]; speak(lp.w, .7); opts($('#lpO'), four, lp, 12, gm.lpic, x => x.e); $$('#lpO .game-btn').forEach(b => b.style.fontSize = '2.6rem');
});
$('#lpH').onclick = () => speak(lp.w, .7);

const MP = [['ship', 'sheep'], ['sit', 'seat'], ['bit', 'beat'], ['full', 'fool'], ['pull', 'pool'], ['pen', 'pan'], ['bed', 'bad'], ['cat', 'cut'], ['luck', 'lock'], ['hat', 'hut'], ['three', 'free'], ['think', 'sink'], ['west', 'vest'], ['berry', 'very'], ['light', 'right'], ['live', 'leave'], ['fill', 'feel'], ['cap', 'cup']];
addGame('mp', 'Minimal Pairs', '<p class="desc">Похожие слова: какое из двух ты услышал? Тренирует слух на трудные звуки.</p><div class="game-emoji">👂</div><div class="game-options" id="mpO"></div><button class="reset-btn" id="mpH">🔊 Again</button>', () => {
  const pr = rnd(MP), w = rnd(pr); window._mpW = w; speak(w, .65); opts($('#mpO'), pr, w, 12, gm.mp, x => x);
});
$('#mpH').onclick = () => speak(window._mpW, .65);


// ================= 12. ЕЩЁ ШИРЕ: ЧАСЫ, ДИАЛОГИ, СЛОВАРИ, ИГРЫ, ТЁМНАЯ ТЕМА =================
// --- Тёмная тема ---
document.head.insertAdjacentHTML('beforeend', '<style>:root.dark{--bg-paper:#1e2327;--card-white:#2a3238;--ink-dark:#ecf0f1;--border-color:#3a444b}.dark .story-text,.dark .spell-zone,.dark .sentence-zone{background:#2b333a!important;border-color:#4a5760!important}.dark .info-box{background:#3b3524;color:#f3e3b5}.dark .progress-bar{background:#3a444b}.dark p.desc,.dark header .subtitle{color:#aab7b8}.dark .quiz-option:hover{background:#34404a}</style>');
if (LS('ra_dark', false)) document.documentElement.classList.add('dark');
const dmb = document.createElement('button'); dmb.className = 'reset-btn'; dmb.textContent = '🌙'; dmb.title = 'Тёмная тема'; dmb.style.cssText = 'position:absolute;top:10px;right:10px;margin:0;padding:6px 12px';
dmb.onclick = () => SV('ra_dark', document.documentElement.classList.toggle('dark')); $('header').appendChild(dmb);

// --- Слово дня ---
(() => { const p = pool(), wd = p[Math.floor(Date.now() / 864e5) % p.length];
  $('#phonics .info-box').insertAdjacentHTML('afterend', `<div class="info-box" id="wod" style="cursor:pointer;background:#e8f5e9;border-color:#6ab04c;color:#2c3e50">🌟 <strong>Word of the Day:</strong> ${wd.e} ${wd.w} — ${wd.ru} (нажми, чтобы послушать)</div>`); $('#wod').onclick = () => speak(wd.w); })();

// --- Ещё словари ---
const more = {
  Kitchen: 'knife|🔪|нож;fork|🍴|вилка;plate|🍽️|тарелка;bowl|🥣|миска;cup|☕|чашка;glass|🥛|стакан;pot|🍲|кастрюля;pan|🍳|сковорода;kettle|🫖|чайник;fridge|🧊|холодильник;oven|♨️|духовка;sink|🚰|раковина;toaster|🍞|тостер;chopsticks|🥢|палочки;jar|🫙|банка;bottle|🍼|бутылка',
  Space: 'sun|☀️|солнце;moon|🌙|луна;star|⭐|звезда;planet|🪐|планета;Earth|🌍|Земля;rocket|🚀|ракета;astronaut|🧑‍🚀|космонавт;comet|☄️|комета;galaxy|🌌|галактика;telescope|🔭|телескоп;alien|👽|инопланетянин;satellite|🛰️|спутник;UFO|🛸|НЛО',
  'Sea Life': 'fish|🐟|рыба;shark|🦈|акула;whale|🐳|кит;dolphin|🐬|дельфин;octopus|🐙|осьминог;crab|🦀|краб;shrimp|🦐|креветка;jellyfish|🪼|медуза;turtle|🐢|черепаха;shell|🐚|ракушка;wave|🌊|волна;anchor|⚓|якорь;lobster|🦞|омар;squid|🦑|кальмар',
  'Tech & Tools': 'computer|💻|компьютер;phone|📱|телефон;camera|📷|камера;headphones|🎧|наушники;keyboard|⌨️|клавиатура;mouse|🖱️|мышь;robot|🤖|робот;battery|🔋|батарея;lamp|💡|лампа;television|📺|телевизор;printer|🖨️|принтер;watch|⌚|часы;hammer|🔨|молоток;screwdriver|🪛|отвёртка;saw|🪚|пила;key|🔑|ключ',
  Holidays: 'birthday|🎂|день рождения;gift|🎁|подарок;party|🎉|вечеринка;balloon|🎈|шарик;candle|🕯️|свеча;Christmas|🎄|Рождество;Easter|🐣|Пасха;Halloween|🎃|Хэллоуин;costume|🦸|костюм;card|💌|открытка;fireworks|🎇|фейерверк;wedding|💒|свадьба',
  Verbs: 'eat|🍽️|есть;drink|🥤|пить;sleep|😴|спать;run|🏃|бегать;walk|🚶|ходить;jump|🤸|прыгать;swim|🏊|плавать;read|📖|читать;write|✍️|писать;draw|🎨|рисовать;sing|🎤|петь;dance|💃|танцевать;laugh|😂|смеяться;cry|😭|плакать;open|📂|открывать;close|📕|закрывать;think|🤔|думать;listen|👂|слушать;look|👀|смотреть;speak|🗣️|говорить;cook|🍳|готовить;wash|🧼|мыть;climb|🧗|лазить;throw|🤾|бросать;catch|🧤|ловить',
  Adjectives: 'big|🐘|большой;small|🐜|маленький;tall|🦒|высокий;short|📏|короткий;long|🐍|длинный;fast|🐆|быстрый;slow|🐌|медленный;hot|🔥|горячий;cold|🧊|холодный;new|🆕|новый;old|👴|старый;clean|✨|чистый;dirty|🐷|грязный;happy|😊|счастливый;loud|📢|громкий;quiet|🤫|тихий;heavy|🏋️|тяжёлый;light|🪶|лёгкий;soft|🧸|мягкий;hard|🧱|твёрдый;wet|💧|мокрый;dry|🏜️|сухой;full|🍽️|полный;empty|🫙|пустой'
};
Object.entries(more).forEach(([k, s]) => { const key = k.toLowerCase().replace(/\W+/g, ''); vocabData[key] = P(s); fillWords(addSub(vc, 'v-' + key, k), vocabData[key]); });

// --- Часы ---
const cl = addSection('clock', 'Clock', 'quiz');
cl.innerHTML = '<h2>What Time Is It?</h2><p class="desc">Посмотри на часы и выбери правильную фразу.</p><div class="game-area"><svg id="clk" viewBox="0 0 200 200" width="240" height="240"></svg><div class="quiz-question" id="clkD" style="font-size:1.2rem;min-height:56px"></div><div class="quiz-options" id="clkO"></div></div>';
const NW = 'twelve one two three four five six seven eight nine ten eleven'.split(' '), MW = {5: 'five', 10: 'ten', 20: 'twenty', 25: 'twenty-five'};
const tt = (h, m) => { const H = NW[h % 12], N = NW[(h + 1) % 12]; return m === 0 ? `It is ${H} o'clock` : m === 15 ? `It is a quarter past ${H}` : m === 30 ? `It is half past ${H}` : m === 45 ? `It is a quarter to ${N}` : m < 30 ? `It is ${MW[m]} past ${H}` : `It is ${MW[60 - m]} to ${N}`; };
const MIN = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], rh = () => 1 + Math.random() * 12 | 0;
const drawClock = (h, m) => { let s = '<circle cx="100" cy="100" r="94" fill="#fff" stroke="#5b9bd5" stroke-width="6"/>';
  for (let i = 1; i <= 12; i++) { const a = i * Math.PI / 6; s += `<text x="${100 + 74 * Math.sin(a)}" y="${106 - 74 * Math.cos(a)}" text-anchor="middle" font-size="16" font-weight="700" fill="#2c3e50">${i}</text>`; }
  s += `<line x1="100" y1="100" x2="100" y2="58" stroke="#2c3e50" stroke-width="6" stroke-linecap="round" transform="rotate(${(h % 12 + m / 60) * 30} 100 100)"/><line x1="100" y1="100" x2="100" y2="30" stroke="#ff7f50" stroke-width="4" stroke-linecap="round" transform="rotate(${m * 6} 100 100)"/><circle cx="100" cy="100" r="5" fill="#2c3e50"/>`; $('#clk').innerHTML = s; };
const loadClock = () => { const h = rh(), m = rnd(MIN), ans = tt(h, m), set = new Set([ans]); drawClock(h, m); $('#clkD').textContent = '';
  while (set.size < 4) set.add(tt(rh(), rnd(MIN)));
  const box = $('#clkO'); box.innerHTML = ''; shuf([...set]).forEach(t => { const b = document.createElement('button'); b.className = 'quiz-option'; b.style.fontSize = '1.1rem'; b.textContent = t;
    b.onclick = () => { if (t === ans) { b.classList.add('correct'); $('#clkD').textContent = `${h}:${String(m).padStart(2, '0')}`; speak(ans, .8); addScore(10); quizCorrect++; setTimeout(loadClock, 2200); } else { b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 500); } }; box.appendChild(b); }); };
loadClock();

// --- Диалоги ---
const dl = addSection('dialogs', 'Dialogues', 'story');
dl.innerHTML = '<h2>Dialogues</h2><p class="desc">Нажми на реплику — услышишь её. «Play Dialogue» читает диалог двумя голосами.</p><div class="subtabs"></div>';
const dialogs = {
  'Meeting': `Hi! My name is Anna.|Привет! Меня зовут Анна.;Hello, Anna! I am Tom.|Здравствуй, Анна! Я Том.;Nice to meet you, Tom.|Приятно познакомиться, Том.;Where are you from?|Откуда ты?;I am from Russia. And you?|Я из России. А ты?;I am from England. Let us play!|Я из Англии. Давай играть!`,
  'Cafe': `Good afternoon. What would you like?|Добрый день. Что бы вы хотели?;I would like a cup of tea, please.|Я бы хотел чашку чая, пожалуйста.;Would you like some cake?|Хотите немного торта?;Yes, please. How much is it?|Да, пожалуйста. Сколько это стоит?;It is five dollars.|Это пять долларов.;Here you are. Thank you!|Вот, пожалуйста. Спасибо!`,
  'School': `Good morning, class!|Доброе утро, класс!;Good morning, teacher!|Доброе утро, учитель!;Open your books, please.|Откройте книги, пожалуйста.;Excuse me, I do not understand.|Простите, я не понимаю.;Let me explain again.|Позвольте объяснить ещё раз.;Now I understand. Thank you!|Теперь я понял. Спасибо!`,
  'Directions': `Excuse me, where is the library?|Извините, где библиотека?;Go straight and turn left.|Идите прямо и поверните налево.;Is it far from here?|Это далеко отсюда?;No, it is five minutes on foot.|Нет, это пять минут пешком.;Thank you very much!|Большое спасибо!;You are welcome.|Не за что.`,
  'Phone': `Hello? Is this Max?|Алло? Это Макс?;Yes, speaking. Who is this?|Да, слушаю. Кто это?;It is Anna. Can you come to my party?|Это Анна. Ты сможешь прийти на мою вечеринку?;When is it?|Когда это?;On Saturday at six o'clock.|В субботу в шесть часов.;Great! See you there!|Здорово! Увидимся там!`
};
const playAll = a => { if (!('speechSynthesis' in window)) return; speechSynthesis.cancel(); a.forEach((t, i) => { const u = new SpeechSynthesisUtterance(t); u.lang = 'en-US'; u.rate = .8; u.pitch = i % 2 ? .8 : 1.35; speechSynthesis.speak(u); }); };
Object.entries(dialogs).forEach(([k, s], n) => {
  const d = addSub(dl, 'dl-' + k, k), lines = s.split(';').map(x => x.split('|')); const w = document.createElement('div'); w.style.cssText = 'max-width:640px;margin:0 auto';
  lines.forEach(([en, ru], i) => { const b = document.createElement('div'); b.style.cssText = `padding:12px 16px;margin:10px 0;border-radius:16px;cursor:pointer;width:85%;border:2px solid ${i % 2 ? 'var(--accent-green)' : 'var(--accent-blue)'};${i % 2 ? 'margin-left:auto' : ''}`;
    b.innerHTML = `<strong>${i % 2 ? 'B' : 'A'}:</strong> ${en}<br><small style="color:#95a5a6">${ru}</small>`; b.onclick = () => speak(en, .8); w.appendChild(b); });
  const pb = document.createElement('button'); pb.className = 'reset-btn'; pb.textContent = '▶ Play Dialogue'; pb.onclick = () => playAll(lines.map(l => l[0])); d.append(w, Object.assign(document.createElement('div'), {style: 'text-align:center'}));
  d.lastChild.appendChild(pb); if (!n) { d.classList.add('active'); dl.querySelector('.subtab').classList.add('active'); }
});

// --- Скороговорки и ещё истории ---
const tw = [['She sells seashells by the seashore.', 's / sh'], ['Peter Piper picked a peck of pickled peppers.', 'p'], ['How much wood would a woodchuck chuck if a woodchuck could chuck wood?', 'w / ch'], ['Red lorry, yellow lorry.', 'r / l'], ['Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.', 'f / z / w'], ['I scream, you scream, we all scream for ice cream.', 'sc / cr'], ['Betty Botter bought some butter.', 'b / t'], ['Three thin thieves thought a thousand thoughts.', 'th']];
const twd = addSub(sc, 'story-tw', 'Tongue Twisters', '<h3>Tongue Twisters</h3><p class="desc">Скороговорки — лучший тренажёр произношения. Сначала медленно, потом быстрее!</p><div class="word-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))"></div>');
tw.forEach(([t, s]) => { const c = document.createElement('div'); c.className = 'syllable-card'; c.innerHTML = `<div class="syl-word" style="font-size:1.15rem">🔊 ${t}</div><div class="trans">тренируем: ${s}</div>`; c.onclick = () => speak(t, .65); twd.lastChild.appendChild(c); });
function mkStory(title, sents) {
  const d = addSub(sc, 'story-' + title.replace(/\W/g, ''), title, `<h3>${title}</h3><div class="story-text"></div><div style="text-align:center;margin-top:20px"><button class="reset-btn">Play Full Story</button> <button class="reset-btn">Show Translation</button></div>`);
  const t = d.querySelector('.story-text'), [b1, b2] = d.querySelectorAll('button');
  sents.forEach(([en, ru]) => { const row = document.createElement('div'); row.style.marginBottom = '6px';
    en.split(' ').forEach(w => { const s = document.createElement('span'); s.className = 'story-word'; s.textContent = w; s.onclick = () => speak(w.replace(/[.,!?"]/g, '')); row.append(s, ' '); });
    row.insertAdjacentHTML('beforeend', `<div class="tr" style="display:none;font-size:1rem;color:#95a5a6;line-height:1.4">${ru}</div>`); t.appendChild(row); });
  b1.onclick = () => speak(sents.map(s => s[0]).join(' '), .75);
  b2.onclick = () => { const v = b2.textContent === 'Show Translation'; d.querySelectorAll('.tr').forEach(x => x.style.display = v ? 'block' : 'none'); b2.textContent = v ? 'Hide Translation' : 'Show Translation'; };
}
mkStory('Birthday Party', [['Today is my birthday.', 'Сегодня мой день рождения.'], ['I am eight years old.', 'Мне восемь лет.'], ['My friends come to my house.', 'Мои друзья приходят ко мне домой.'], ['We eat cake and play games.', 'Мы едим торт и играем в игры.'], ['Mom gives me a big red balloon.', 'Мама даёт мне большой красный шарик.'], ['It is the best day!', 'Это лучший день!']]);
mkStory('The Lost Hat', [['Ben has a blue hat.', 'У Бена синяя шапка.'], ['One day the wind blows it away.', 'Однажды ветер уносит её.'], ['The hat flies over the trees.', 'Шапка летит над деревьями.'], ['A little dog finds it near the lake.', 'Маленькая собака находит её возле озера.'], ['The dog brings the hat to Ben.', 'Собака приносит шапку Бену.'], ['Ben says, "Thank you, my friend!"', 'Бен говорит: «Спасибо, мой друг!»']]);
mkStory('Zoo Trip', [['On Saturday we go to the zoo.', 'В субботу мы идём в зоопарк.'], ['First we see the lions. They are very loud.', 'Сначала мы видим львов. Они очень громкие.'], ['Then we see tall giraffes and funny monkeys.', 'Потом мы видим высоких жирафов и забавных обезьян.'], ['The penguins swim in cold water.', 'Пингвины плавают в холодной воде.'], ['I eat an ice cream near the elephants.', 'Я ем мороженое возле слонов.'], ['We are tired but happy.', 'Мы устали, но счастливы.']]);
mkQuiz(addSub(qc, 'quiz-read2', 'Reading 2', '<div class="quiz-container"></div>').firstChild, [
  ['Birthday Party: How old is the child?', ['eight', 'ten', 'five'], 0], ['Birthday Party: What does Mom give?', ['a red balloon', 'a book', 'a dog'], 0],
  ['The Lost Hat: What colour is the hat?', ['blue', 'red', 'green'], 0], ['The Lost Hat: Who finds the hat?', ['a dog', 'a cat', 'a bird'], 0],
  ['Zoo Trip: When do they go to the zoo?', ['on Saturday', 'on Monday', 'on Sunday'], 0], ['Zoo Trip: Which animals are loud?', ['lions', 'penguins', 'giraffes'], 0],
  ['Zoo Trip: Where do the penguins swim?', ['in cold water', 'in a river', 'on the grass'], 0]], 15);

// --- Новые игры ---
const OPP = 'big|small;tall|short;hot|cold;fast|slow;new|old;clean|dirty;happy|sad;loud|quiet;heavy|light;hard|soft;wet|dry;full|empty;day|night;up|down;open|close;in|out;yes|no;young|old;good|bad;early|late;rich|poor;easy|difficult;thick|thin;left|right;black|white;boy|girl'.split(';').map(x => x.split('|'));
addGame('opp', 'Opposites', '<p class="desc">Найди слово с противоположным значением.</p><div class="game-emoji">↔️</div><div class="quiz-question" id="opQ"></div><div class="game-options" id="opO"></div>', () => {
  const pr = rnd(OPP), [a, b] = Math.random() < .5 ? pr : [pr[1], pr[0]], others = shuf(OPP.flat().filter(x => x !== a && x !== b)).slice(0, 3);
  $('#opQ').textContent = `Opposite of “${a}”?`; speak(a); opts($('#opO'), [b, ...new Set(others)], b, 12, gm.opp, x => x);
});
addGame('ml', 'Missing Letter', '<p class="desc">Какой буквы не хватает?</p><div class="game-emoji" id="mlE"></div><div class="quiz-question" id="mlQ" style="font-family:var(--font-display);font-size:3rem;letter-spacing:6px"></div><div class="game-options" id="mlO"></div>', () => {
  const x = rnd(pool().filter(y => y.w.length >= 3)), i = Math.random() * x.w.length | 0, L = x.w[i].toLowerCase(), ls = new Set([L]);
  while (ls.size < 4) ls.add('abcdefghijklmnopqrstuvwxyz'[Math.random() * 26 | 0]);
  $('#mlE').textContent = x.e; $('#mlQ').textContent = x.w.slice(0, i) + '_' + x.w.slice(i + 1); speak(x.w); opts($('#mlO'), [...ls], L, 12, gm.ml, y => y);
});
const U = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' '), T = ',,twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',');
const nw = n => n === 100 ? 'one hundred' : n < 20 ? U[n] : T[n / 10 | 0] + (n % 10 ? '-' + U[n % 10] : ''), cn = s => s.toLowerCase().replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
let nn; const nG = addGame('num', 'Number Words', '<p class="desc">Напиши число словами (от 0 до 100).</p><div class="quiz-question" id="nQ" style="font-family:var(--font-display);font-size:4rem"></div><input id="nIn" autocomplete="off" autocapitalize="off" spellcheck="false" style="font:700 1.6rem var(--font-main);padding:10px 16px;border:3px solid var(--accent-green);border-radius:12px;text-align:center;width:min(90%,340px)"><div class="game-options"><button class="game-btn">Check</button><button class="game-btn">🔊 Hint</button></div><div class="quiz-question" id="nM" style="min-height:60px"></div>', () => {
  nn = Math.random() < .5 ? Math.random() * 21 | 0 : 21 + Math.random() * 80 | 0; $('#nQ').textContent = nn; $('#nIn').value = ''; $('#nM').textContent = '';
});
const nChk = () => { if (cn($('#nIn').value) === cn(nw(nn))) { $('#nM').textContent = '✅ ' + nw(nn); speak(nw(nn)); win(12, gm.num); } else $('#nM').textContent = '❌ Ещё раз! (двузначные пишутся через дефис: twenty-one)'; };
const [n1, n2] = nG.querySelectorAll('button'); n1.onclick = nChk; n2.onclick = () => speak(nw(nn)); $('#nIn').addEventListener('keydown', e => e.key === 'Enter' && nChk());
let sy; const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const syG = addGame('say', 'Say It!', '<p class="desc">Нажми 🎤 и произнеси слово вслух (лучше всего работает в Chrome).</p><div class="game-emoji" id="syE"></div><div class="quiz-question" id="syW"></div><div class="game-options"><button class="game-btn">🎤 Speak</button><button class="game-btn">🔊 Listen</button><button class="game-btn">Skip</button></div><div class="quiz-question" id="syM" style="min-height:60px"></div>', () => {
  sy = rnd(pool()); $('#syE').textContent = sy.e; $('#syW').textContent = sy.w; $('#syM').textContent = ''; });
const [sy1, sy2, sy3] = syG.querySelectorAll('button'); sy2.onclick = () => speak(sy.w, .7); sy3.onclick = () => gm.say();
sy1.onclick = () => { if (!SR) { $('#syM').textContent = 'В этом браузере нет распознавания речи. Попробуй Chrome или Edge.'; return; }
  const r = new SR(); r.lang = 'en-US'; r.maxAlternatives = 5; $('#syM').textContent = '🎧 Слушаю…';
  r.onresult = e => { const a = [...e.results[0]].map(x => x.transcript.toLowerCase()); if (a.some(t => t.includes(sy.w.toLowerCase()))) { $('#syM').textContent = '✅ Отлично!'; win(15, gm.say); } else $('#syM').textContent = `❌ Я услышал: «${a[0]}». Попробуй ещё!`; };
  r.onerror = () => $('#syM').textContent = 'Не получилось. Разреши доступ к микрофону и попробуй снова.'; r.start(); };


// ================= 13. БУКВЫ ПО ОТДЕЛЬНОСТИ =================
const LTR = addSection('letters', 'Letters', 'cvc');
LTR.innerHTML = '<h2>Letter by Letter</h2><p class="desc">Выбери букву: звук, слова, пропись пальцем и мини-тест.</p><div id="ltBar" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:20px"></div><div id="ltBody"></div>';
const NOTES = {A:'A читается по-разному: /æ/ cat, /eɪ/ cake, /ɑː/ car.', E:'Короткий /ɛ/ — egg. В конце слова E часто молчит: make.', I:'Короткий /ɪ/ — sit; длинный /aɪ/ — bike.', O:'Короткий /ɒ/ — dog; длинный /oʊ/ — home.', U:'Короткий /ʌ/ — sun; длинный /juː/ — cube.', C:'C = /k/ перед a, o, u (cat); C = /s/ перед e, i, y (city).', G:'G = /g/ (go) или /dʒ/ перед e, i (giraffe).', Q:'Q почти всегда с U: qu = /kw/ (queen).', X:'X в конце слова = /ks/ (fox, box).', Y:'Y — согласная в yes /j/, но гласная в sky, happy.', W:'/w/ — губы трубочкой, это не русское «в»! (water)', H:'/h/ — просто выдох, не русское «х».', J:'/dʒ/ — как «дж» (jam).', R:'Английское /r/ — язык не касается нёба, это не русское «р».', T:'/t/ — с лёгким придыханием.', L:'/l/ — кончик языка на бугорке за верхними зубами.', V:'/v/ — верхние зубы касаются нижней губы.', Z:'/z/ — звонкое жужжание, как у пчелы.', S:'/s/ — шипение змеи.'};
const visited = new Set(LS('ra_letters', []));
achievementsData.push({id:'abc_all', badge:'🔤', name:'ABC Master', desc:'Open all 26 letters', condition: () => visited.size >= 26});
function trace(cv, ch) {
  const x = cv.getContext('2d'); let d = false;
  const guide = () => { x.clearRect(0, 0, cv.width, cv.height); x.fillStyle = '#d9dee3'; x.font = 'bold 190px Lexend,sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(ch, cv.width / 2, cv.height / 2 + 8); };
  const pos = e => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * cv.width / r.width, (e.clientY - r.top) * cv.height / r.height]; };
  cv.onpointerdown = e => { d = true; cv.setPointerCapture(e.pointerId); const [p, q] = pos(e); x.beginPath(); x.moveTo(p, q); x.lineTo(p + .1, q); x.strokeStyle = '#ff7f50'; x.lineWidth = 10; x.lineCap = x.lineJoin = 'round'; x.stroke(); };
  cv.onpointermove = e => { if (!d) return; const [p, q] = pos(e); x.lineTo(p, q); x.stroke(); };
  cv.onpointerup = cv.onpointercancel = () => d = false; guide(); return guide;
}
function showLetter(L) {
  const l = L.toLowerCase(), a = alphabetData.find(x => x.l === L); LTR.dataset.cur = L; visited.add(L); SV('ra_letters', [...visited]);
  $$('#ltBar .subtab').forEach(b => b.classList.toggle('active', b.dataset.l === L));
  const all = [...new Map(pool().map(x => [x.w.toLowerCase(), x])).values()];
  let ws = all.filter(x => x.w[0].toLowerCase() === l); const nStart = ws.length;
  if (ws.length < 8) ws = ws.concat(all.filter(x => x.w[0].toLowerCase() !== l && x.w.toLowerCase().includes(l)).slice(0, 8 - ws.length));
  ws = ws.slice(0, 16);
  $('#ltBody').innerHTML = `<div style="text-align:center"><div style="font-family:var(--font-display);font-size:6.5rem;color:var(--accent-blue);line-height:1.1">${L}${l}</div><div class="game-emoji" style="font-size:4.5rem;margin:5px">${a.e}</div><div class="word" style="font-weight:700;font-size:1.3rem">${a.w} <span style="color:var(--accent-coral)">[${a.s}]</span></div><div class="game-options" style="margin-top:12px"><button class="game-btn" style="min-width:0;padding:10px 18px">🔊 Sound</button><button class="game-btn" style="min-width:0;padding:10px 18px">🔊 Word</button></div></div><div class="info-box">${NOTES[L] || `Звук [${a.s}] — как в слове ${a.w}.`}</div><h3>Trace it ✍️</h3><div style="text-align:center"><canvas width="320" height="240" style="touch-action:none;border:3px dashed var(--accent-blue);border-radius:16px;background:var(--card-white);max-width:100%"></canvas><div class="game-options" style="margin-top:10px"><button class="reset-btn" style="margin:0">${L}</button><button class="reset-btn" style="margin:0">${l}</button><button class="reset-btn" style="margin:0">🧽 Clear</button></div></div><h3>${nStart ? 'Words with' : 'Words that contain'} “${L}”</h3><div class="word-grid"></div><h3>Quick test</h3><div class="quiz-container" id="ltQ"></div>`;
  const [s1, s2] = $$('#ltBody .game-btn'); s1.onclick = () => { speak(L); setTimeout(() => speak(a.s), 500); }; s2.onclick = () => speak(a.w);
  let g = trace($('#ltBody canvas'), L); const [t1, t2, t3] = $$('#ltBody .reset-btn'); t1.onclick = () => g = trace($('#ltBody canvas'), L); t2.onclick = () => g = trace($('#ltBody canvas'), l); t3.onclick = () => g();
  const grid = $('#ltBody .word-grid'); ws.forEach(i => { const d = document.createElement('div'); d.className = 'word-card'; d.innerHTML = `<div class="emoji">${i.e}</div><div class="word">${i.w}</div><div class="trans">${i.ru}</div>`; d.onclick = () => speak(i.w); grid.appendChild(d); });
  const st = all.filter(x => x.w[0].toLowerCase() === l), no = all.filter(x => x.w[0].toLowerCase() !== l);
  if (st.length) mkQuiz($('#ltQ'), shuf(st).slice(0, 6).map(c => [`Which word starts with “${L}”?`, [c.w, ...shuf(no).slice(0, 3).map(x => x.w)], 0]), 8); else $('#ltQ').innerHTML = '<p class="desc">Для этой буквы пока мало слов — потренируйся в прописи!</p>';
}
'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(L => { const b = document.createElement('button'); b.className = 'subtab'; b.dataset.l = L; b.textContent = L + L.toLowerCase(); b.onclick = () => showLetter(L); $('#ltBar').appendChild(b); });
showLetter('A');

// ================= 14. РЕЖИМ ДЛЯ РОДИТЕЛЕЙ =================
const ST = LS('ra_stats', {}), DY = LS('ra_days', {}), day = () => new Date().toISOString().slice(0, 10);
Object.keys(DY).sort().slice(0, -30).forEach(k => delete DY[k]);
const cur = () => { const s = $('.section.active'); let id = s ? s.id : '?';
  if (id === 'games') { const b = $('.game-switcher .active'); id += ':' + (b ? b.textContent : ''); } else if (id === 'quiz') { const t = $('#quiz .subtab.active'); id += ':' + (t ? t.textContent : ''); } else if (id === 'letters') id += ':' + (LTR.dataset.cur || ''); return id; };
const lab = k => { const [id, sub] = k.split(':'), b = $(`nav [data-target=${id}]`); return (b ? b.textContent : id) + (sub ? ' · ' + sub : ''); };
const bump = (f, v) => { const k = cur(); if (k === 'parent' || k === '?') return; (ST[k] = ST[k] || {t: 0, ok: 0, bad: 0})[f] += v; const d = DY[day()] = DY[day()] || {t: 0, ok: 0, bad: 0}; d[f] += v; };
const saveSt = () => { SV('ra_stats', ST); SV('ra_days', DY); };
let lastAct = Date.now(); ['pointerdown', 'keydown', 'scroll'].forEach(ev => addEventListener(ev, () => lastAct = Date.now(), {passive: true}));
setInterval(() => { if (!document.hidden && Date.now() - lastAct < 60000) bump('t', 1); }, 1000); setInterval(saveSt, 10000);
addEventListener('pagehide', saveSt); document.addEventListener('visibilitychange', () => document.hidden && saveSt());
new MutationObserver(ms => ms.forEach(m => { const n = m.target.getAttribute('class') || '', o = m.oldValue || '';
  if (/\bwrong\b/.test(n) && !/\bwrong\b/.test(o)) bump('bad', 1); if (/\bcorrect\b/.test(n) && !/\bcorrect\b/.test(o)) bump('ok', 1); })).observe(document.body, {attributes: true, attributeFilter: ['class'], subtree: true, attributeOldValue: true});
let RATE = LS('ra_rate', 1); const _sp3 = window.speak; window.speak = (t, r) => _sp3(t, (r || .85) * RATE);
const askPin = () => { const p = LS('ra_pin', ''); if (!p) { const n = prompt('Придумайте PIN из 4 цифр для режима родителей (защита от случайных нажатий ребёнка):'); if (!/^\d{4}$/.test(n || '')) return false; SV('ra_pin', n); return true; } return prompt('PIN родителя:') === p; };
rb.onclick = () => { if (!askPin()) return; if (confirm('Стереть весь прогресс и статистику?')) { try { ['readingAdventure_v2', 'ra_cards', 'ra_stats', 'ra_days', 'ra_streak', 'ra_letters'].forEach(k => localStorage.removeItem(k)); } catch (e) {} location.reload(); } };
document.head.insertAdjacentHTML('beforeend', '<style>@media print{header,nav,.noprint,.section:not(#parent){display:none!important}#parent{display:block!important}}</style>');
const PNL = document.createElement('section'); PNL.id = 'parent'; PNL.className = 'section'; PNL.innerHTML = '<div class="card"></div>'; $('main').appendChild(PNL);
const showSec = id => { $$('nav .nav-btn').forEach(x => x.classList.remove('active')); $$('.section').forEach(s => s.classList.toggle('active', s.id === id)); scrollTo(0, 0); };
function renderParent() {
  saveSt(); const t = DY[day()] || {t: 0, ok: 0, bad: 0}, goal = LS('ra_goal', 15), min = Math.round(t.t / 60);
  const rows = Object.entries(ST).map(([k, v]) => ({k, ...v, n: v.ok + v.bad, acc: v.ok + v.bad ? Math.round(100 * v.ok / (v.ok + v.bad)) : null})).sort((a, b) => b.t - a.t);
  const ok = rows.reduce((s, r) => s + r.ok, 0), bad = rows.reduce((s, r) => s + r.bad, 0), acc = ok + bad ? Math.round(100 * ok / (ok + bad)) : '—';
  const days = [...Array(7)].map((_, i) => { const d = new Date(Date.now() - (6 - i) * 864e5); return [d.toLocaleDateString('ru', {weekday: 'short'}), Math.round(((DY[d.toISOString().slice(0, 10)] || {}).t || 0) / 60)]; }), mx = Math.max(goal, ...days.map(d => d[1]), 1);
  const weak = rows.filter(r => r.n >= 5 && r.acc < 70), strong = rows.filter(r => r.n >= 10 && r.acc >= 90), idle = Object.keys(NOTES).length && ['cvc', 'cvce', 'digraphs', 'blends', 'vowels', 'syllables', 'sight', 'vocab', 'story'].filter(id => !rows.some(r => r.k.split(':')[0] === id)).map(lab);
  const box = PNL.firstChild;
  box.innerHTML = `<h2>👨‍👩‍👧 Parent Dashboard</h2><p class="desc">Статистика хранится только в этом браузере.</p>
  <div class="stats-board" style="margin-bottom:20px"><div class="stat-item">⏱ Сегодня: ${min} / ${goal} мин</div><div class="stat-item">✅ Точность: ${acc}${acc === '—' ? '' : '%'}</div><div class="stat-item">⭐ ${score}</div><div class="stat-item">📚 Слов услышано: ${learned.size}</div><div class="stat-item">🔤 Букв открыто: ${visited.size}/26</div></div>
  <h3>Последние 7 дней (минуты)</h3><div style="display:flex;gap:10px;align-items:flex-end;height:140px;padding:10px 0;border-bottom:2px solid var(--border-color)">${days.map(([n, m]) => `<div style="flex:1;text-align:center;font-size:.85rem"><div style="font-weight:700">${m}</div><div style="height:${Math.round(90 * m / mx)}px;min-height:3px;background:${m >= goal ? 'var(--accent-green)' : 'var(--accent-blue)'};border-radius:6px 6px 0 0"></div>${n}</div>`).join('')}</div>
  <h3>Что стоит повторить</h3><div class="info-box">${weak.length ? weak.map(r => `🔴 ${lab(r.k)} — ${r.acc}% (${r.n} ответов)`).join('<br>') : 'Пока нет тем с низкой точностью (нужно хотя бы 5 ответов в теме).'}</div>
  ${strong.length ? `<div class="info-box" style="background:#e8f5e9;border-color:#6ab04c;color:#2c3e50">🟢 Уверенно: ${strong.map(r => lab(r.k)).join(', ')}</div>` : ''}
  ${idle.length ? `<div class="info-box" style="background:#e3f2fd;border-color:#5b9bd5;color:#2c3e50">🆕 Ещё не открывали: ${idle.join(', ')}</div>` : ''}
  <h3>По темам</h3><div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.95rem"><tr style="text-align:left;color:#7f8c8d"><th>Тема</th><th>Мин</th><th>✅</th><th>❌</th><th>%</th></tr>${rows.map(r => `<tr style="border-top:1px solid var(--border-color)"><td style="padding:6px 4px">${r.acc !== null && r.n >= 5 ? (r.acc < 70 ? '🔴 ' : r.acc >= 90 ? '🟢 ' : '🟡 ') : ''}${lab(r.k)}</td><td>${Math.round(r.t / 60)}</td><td>${r.ok}</td><td>${r.bad}</td><td>${r.acc === null ? '—' : r.acc}</td></tr>`).join('') || '<tr><td colspan="5" style="padding:10px">Данных пока нет — позанимайтесь!</td></tr>'}</table></div>
  <h3>Настройки</h3><div class="noprint" style="display:grid;gap:14px;max-width:420px"><label>Дневная цель (мин): <input id="pGoal" type="number" min="5" max="120" value="${goal}" style="width:80px;padding:6px;font:inherit"></label><label>Скорость речи: <input id="pRate" type="range" min="0.5" max="1.3" step="0.05" value="${RATE}"> <span id="pRateV">${RATE}×</span></label>
  <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="reset-btn" style="margin:0">🖨 Распечатать отчёт</button><button class="reset-btn" style="margin:0">🔑 Сменить PIN</button><button class="reset-btn" style="margin:0">← Вернуться</button></div></div>`;
  $('#pGoal').onchange = e => { SV('ra_goal', Math.max(5, +e.target.value || 15)); renderParent(); };
  $('#pRate').oninput = e => { RATE = +e.target.value; SV('ra_rate', RATE); $('#pRateV').textContent = RATE + '×'; };
  const [b1, b2, b3] = box.querySelectorAll('.noprint button'); b1.onclick = () => window.print(); b2.onclick = () => { SV('ra_pin', ''); if (askPin()) alert('PIN изменён'); }; b3.onclick = () => { showSec('phonics'); $('nav [data-target=phonics]').classList.add('active'); };
}
const pb = document.createElement('button'); pb.className = 'reset-btn'; pb.textContent = '🔒'; pb.title = 'Режим для родителей'; pb.style.cssText = 'position:absolute;top:10px;left:10px;margin:0;padding:6px 12px';
pb.onclick = () => { if (!askPin()) return; renderParent(); showSec('parent'); }; $('header').appendChild(pb);


// ================= 15. ЕЩЁ ШИРЕ: ПАТТЕРНЫ СЛОВ, БЕГЛОСТЬ, ИГРЫ, ЗАДАНИЯ ДНЯ =================
// --- Страны ---
vocabData.countries = P('Russia|🇷🇺|Россия;Ukraine|🇺🇦|Украина;Belarus|🇧🇾|Беларусь;Kazakhstan|🇰🇿|Казахстан;Germany|🇩🇪|Германия;France|🇫🇷|Франция;Italy|🇮🇹|Италия;Spain|🇪🇸|Испания;Britain|🇬🇧|Британия;USA|🇺🇸|США;Canada|🇨🇦|Канада;Mexico|🇲🇽|Мексика;Brazil|🇧🇷|Бразилия;China|🇨🇳|Китай;Japan|🇯🇵|Япония;India|🇮🇳|Индия;Turkey|🇹🇷|Турция;Egypt|🇪🇬|Египет;Australia|🇦🇺|Австралия;Poland|🇵🇱|Польша;Greece|🇬🇷|Греция;Sweden|🇸🇪|Швеция;Norway|🇳🇴|Норвегия;Finland|🇫🇮|Финляндия');
fillWords(addSub(vc, 'v-countries', 'Countries'), vocabData.countries);

// --- Раздел Word Patterns ---
const PT = addSection('patterns', 'Patterns', 'sight');
PT.innerHTML = '<h2>Word Patterns</h2><p class="desc">Как устроены слова: части, сокращения, похожие звучания.</p><div class="subtabs"></div>';
const pc = (el, items) => { const g = document.createElement('div'); g.className = 'word-grid'; g.style.gridTemplateColumns = 'repeat(auto-fill,minmax(200px,1fr))';
  items.forEach(([t, s, say, e]) => { const c = document.createElement('div'); c.className = 'syllable-card'; c.innerHTML = `${e ? `<div style="font-size:2rem">${e}</div>` : ''}<div class="syl-word" style="font-size:1.15rem">${t}</div><div class="trans">${s}</div>`; c.onclick = () => speak(say, .8); g.appendChild(c); }); el.appendChild(g); };
const ptab = (id, label, intro, items, first) => { const d = addSub(PT, 'pt-' + id, label, `<div class="info-box">${intro}</div>`); pc(d, items); if (first) { d.classList.add('active'); PT.querySelector('.subtab').classList.add('active'); } };
const COMP = 'sun|flower|🌻|подсолнух;rain|bow|🌈|радуга;snow|man|⛄|снеговик;foot|ball|⚽|футбол;cup|cake|🧁|кекс;tooth|brush|🪥|зубная щётка;bed|room|🛏️|спальня;butter|fly|🦋|бабочка;sail|boat|⛵|парусник;air|plane|✈️|самолёт;pop|corn|🍿|попкорн;note|book|📓|блокнот;home|work|📝|домашка;pan|cake|🥞|блин;back|pack|🎒|рюкзак;birth|day|🎂|день рождения;week|end|📅|выходные;bath|room|🛁|ванная;gold|fish|🐠|золотая рыбка;lady|bug|🐞|божья коровка;star|fish|⭐|морская звезда;sun|set|🌇|закат'.split(';').map(x => x.split('|'));
ptab('comp', 'Compound', '<strong>Compound words:</strong> два слова склеиваются в одно: sun + flower = sunflower.', COMP.map(c => [`${c[0]} + ${c[1]}`, `= ${c[0] + c[1]} — ${c[3]}`, c[0] + c[1], c[2]]), 1);
ptab('contr', 'Contractions', '<strong>Сокращения:</strong> апостроф заменяет пропущенные буквы: do not → don’t. Запомни особый случай: will not → <strong>won’t</strong>.',
  `I am|I'm;it is|it's;do not|don't;can not|can't;will not|won't;he is|he's;we are|we're;they are|they're;you are|you're;I will|I'll;let us|let's;is not|isn't;are not|aren't;does not|doesn't;did not|didn't;what is|what's;that is|that's;there is|there's`.split(';').map(x => x.split('|')).map(([a, b]) => [`${a} → ${b}`, 'сокращение', b]));
ptab('hom', 'Homophones', '<strong>Омофоны:</strong> звучат одинаково, пишутся и значат по-разному. Смотри на контекст!',
  'to|two|к / два;there|their|там / их;see|sea|видеть / море;sun|son|солнце / сын;no|know|нет / знать;write|right|писать / правый;hear|here|слышать / здесь;one|won|один / выиграл;blue|blew|синий / дул;flower|flour|цветок / мука;tail|tale|хвост / сказка;meat|meet|мясо / встречать;sale|sail|распродажа / парус;bear|bare|медведь / голый;knight|night|рыцарь / ночь;wait|weight|ждать / вес;pair|pear|пара / груша;dear|deer|дорогой / олень;hole|whole|дыра / целый;eye|I|глаз / я'.split(';').map(x => x.split('|')).map(([a, b, r]) => [`${a} = ${b}`, r, `${a}. ${b}`]));
ptab('pre', 'Prefixes', '<strong>Приставки</strong> меняют смысл: <strong>un-</strong>/<strong>dis-</strong>/<strong>mis-</strong> — «не, наоборот», <strong>re-</strong> — «снова», <strong>pre-</strong> — «до».',
  'un|happy|несчастный;un|lock|открыть;un|do|отменить;un|fair|нечестный;re|do|переделать;re|tell|пересказать;re|play|переиграть;re|write|переписать;re|build|перестроить;dis|like|не любить;dis|agree|не соглашаться;dis|appear|исчезать;pre|view|предпросмотр;pre|school|дошкольный;mis|spell|писать с ошибкой;mis|take|ошибка'.split(';').map(x => x.split('|')).map(([a, b, r]) => [`${a}- + ${b}`, `= ${a + b} — ${r}`, a + b]));
ptab('suf', 'Suffixes', '<strong>Суффиксы:</strong> -er (тот, кто делает), -ful (полный), -less (без), -ly (как? — наречие), -ness (качество), -est (самый). Внимание: y → i, двойные согласные.',
  'teach|er|teacher|учитель;sing|er|singer|певец;farm|er|farmer|фермер;help|ful|helpful|полезный;colour|ful|colourful|красочный;care|ful|careful|осторожный;home|less|homeless|бездомный;care|less|careless|беспечный;hope|less|hopeless|безнадёжный;slow|ly|slowly|медленно;quick|ly|quickly|быстро;kind|ness|kindness|доброта;happy|ness|happiness|счастье;fast|est|fastest|самый быстрый;big|est|biggest|самый большой;read|able|readable|читаемый'.split(';').map(x => x.split('|')).map(([a, b, res, r]) => [`${a} + -${b}`, `= ${res} — ${r}`, res]));
const sgd = addSub(PT, 'pt-soft', 'Soft C & G', '<div class="info-box"><strong>Мягкие C и G:</strong> перед <strong>e, i, y</strong> C = /s/ (city), G = /dʒ/ (giraffe). В остальных случаях C = /k/, G = /g/ (cat, go).</div>');
fillWords(sgd, P('city|🏙️|город;circle|⭕|круг;face|😊|лицо;ice|🧊|лёд;pencil|✏️|карандаш;cent|🪙|цент;giraffe|🦒|жираф;gem|💎|самоцвет;giant|🧌|великан;page|📄|страница;cage|🐦|клетка;magic|🪄|магия'));

// --- Игры: сортировка, составные слова, поиск слов ---
const SORT = [['short a', 'long a', cvcData.a, cvceData.a], ['short i', 'long i', cvcData.i, cvceData.i], ['short o', 'long o', cvcData.o, cvceData.o], ['sh', 'ch', digraphData.sh, digraphData.ch], ['th', 'ck', digraphData.th, digraphData.ck], ['ai / ay', 'ee / ea', vowelTeamsData.ai, vowelTeamsData.ee], ['ar', 'or', vowelTeamsData.ar, vowelTeamsData.or]];
addGame('sort', 'Sort It', '<p class="desc">К какой группе относится слово?</p><div class="game-emoji" id="soE"></div><div class="quiz-question" id="soW"></div><div class="game-options" id="soO"></div>', () => {
  const [la, lb, A, B] = rnd(SORT), inA = Math.random() < .5, x = rnd(inA ? A : B); $('#soE').textContent = x.e; $('#soW').textContent = x.w; speak(x.w); opts($('#soO'), [la, lb], inA ? la : lb, 12, gm.sort, y => y);
});
addGame('comp', 'Compound Words', '<p class="desc">Какая вторая часть составного слова?</p><div class="game-emoji" id="cpE"></div><div class="quiz-question" id="cpQ"></div><div class="game-options" id="cpO"></div>', () => {
  const c = rnd(COMP), ot = [...new Set(shuf(COMP).map(x => x[1]).filter(x => x !== c[1]))].slice(0, 3); $('#cpE').textContent = c[2]; $('#cpQ').textContent = `${c[0]} + ___  (${c[3]})`; opts($('#cpO'), [c[1], ...ot], c[1], 12, () => { speak(c[0] + c[1]); setTimeout(gm.comp, 600); }, x => x);
});
let wsW = [], wsF = new Set(), wsS = [];
addGame('ws', 'Word Search', '<p class="desc">Найди слова: нажимай на буквы по порядку (по горизонтали или вертикали).</p><div id="wsL" style="font-weight:700;margin:10px;font-size:1.1rem"></div><div id="wsG" style="display:grid;grid-template-columns:repeat(8,1fr);gap:4px;max-width:360px;margin:0 auto"></div><button class="reset-btn" id="wsN">New puzzle</button>', () => {
  wsW = shuf([...new Set(pool().filter(x => x.w.length >= 3 && x.w.length <= 6).map(x => x.w.toUpperCase()))]).slice(0, 5); wsF = new Set(); wsS = [];
  const g = Array(64).fill('');
  wsW.forEach(w => { for (let t = 0; t < 80; t++) { const v = Math.random() < .5, r = Math.random() * (v ? 9 - w.length : 8) | 0, c = Math.random() * (v ? 8 : 9 - w.length) | 0, ix = [...w].map((_, i) => (r + (v ? i : 0)) * 8 + c + (v ? 0 : i));
    if (ix.every((p, i) => !g[p] || g[p] === w[i])) { ix.forEach((p, i) => g[p] = w[i]); break; } } });
  for (let i = 0; i < 64; i++) if (!g[i]) g[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.random() * 26 | 0];
  const box = $('#wsG'); box.innerHTML = ''; const cells = g.map((ch, i) => { const d = document.createElement('div'); d.textContent = ch; d.style.cssText = 'aspect-ratio:1;display:flex;align-items:center;justify-content:center;font:700 1.2rem var(--font-main);border:2px solid var(--border-color);border-radius:8px;cursor:pointer;user-select:none;background:var(--card-white)';
    d.onclick = () => { if (d.dataset.f) return; const k = wsS.indexOf(i); if (k >= 0) { wsS.forEach(j => cells[j].style.background = 'var(--card-white)'); wsS = []; return; } wsS.push(i); d.style.background = '#ffe0b2';
      const s = wsS.map(j => g[j]).join(''), rs = [...s].reverse().join(''), hit = wsW.find(w => !wsF.has(w) && (w === s || w === rs));
      if (hit) { wsF.add(hit); wsS.forEach(j => { cells[j].style.background = '#c8e6c9'; cells[j].dataset.f = 1; }); wsS = []; speak(hit.toLowerCase()); showWL(); if (wsF.size === wsW.length) win(25, gm.ws); }
      else if (wsS.length > 6) { wsS.forEach(j => cells[j].style.background = 'var(--card-white)'); wsS = []; } };
    box.appendChild(d); return d; });
  showWL();
});
const showWL = () => $('#wsL').innerHTML = wsW.map(w => wsF.has(w) ? `<s style="color:#6ab04c">${w}</s>` : w).join(' · ');
$('#wsN').onclick = () => gm.ws();

// --- Раздел Fluency (скорость чтения) ---
const FL = addSection('fluency', 'Fluency', 'quiz');
FL.innerHTML = '<h2>Reading Speed</h2><p class="desc">Прочитай текст вслух. Нажми Start, а закончив — Stop.</p><div style="text-align:center;margin-bottom:14px"><select id="flS" style="font:inherit;padding:8px 12px;border-radius:8px"></select></div><div class="story-text" id="flT" style="font-size:1.3rem;line-height:1.9;text-align:left"></div><div class="game-options"><button class="game-btn">▶ Start</button><button class="game-btn" disabled>■ Stop</button></div><div class="quiz-question" id="flR" style="min-height:70px"></div>';
const allSt = {...stories, 'Birthday Party': null}; delete allSt['Birthday Party'];
Object.keys(allSt).forEach(k => $('#flS').insertAdjacentHTML('beforeend', `<option>${k}</option>`));
const flTxt = () => stories[$('#flS').value].map(s => s[0]).join(' '); let flT0 = 0;
const flShow = () => { $('#flT').textContent = flTxt(); const b = LS('ra_wpm', {})[$('#flS').value]; $('#flR').textContent = b ? `Рекорд: ${b} слов/мин` : ''; }; $('#flS').onchange = flShow; flShow();
const [fl1, fl2] = FL.querySelectorAll('.game-btn');
fl1.onclick = () => { flT0 = Date.now(); fl1.disabled = true; fl2.disabled = false; $('#flR').textContent = '⏱ Читай!'; };
fl2.onclick = () => { const sec = (Date.now() - flT0) / 1000, n = flTxt().split(' ').length; fl1.disabled = false; fl2.disabled = true;
  if (sec < 3) { $('#flR').textContent = 'Слишком быстро — прочитай текст целиком 🙂'; return; }
  const w = Math.round(n / (sec / 60)), all = LS('ra_wpm', {}), k = $('#flS').value, nb = !all[k] || w > all[k]; if (nb) { all[k] = w; SV('ra_wpm', all); }
  $('#flR').innerHTML = `${n} слов за ${Math.round(sec)} с = <strong>${w} слов/мин</strong> ${nb ? '🏆 новый рекорд!' : ''}<br><small>${w < 30 ? 'Хорошее начало — повтори ещё раз!' : w < 60 ? 'Отлично!' : 'Супер-скорость!'}</small>`; addScore(5); };

// --- Ещё истории ---
mkStory('Magic Garden', [['Lily has a magic garden.', 'У Лили есть волшебный сад.'], ['The flowers sing in the morning.', 'Цветы поют по утрам.'], ['A green frog lives under a big leaf.', 'Зелёная лягушка живёт под большим листом.'], ['At night the stars fall into the pond.', 'Ночью звёзды падают в пруд.'], ['Lily makes a wish and smiles.', 'Лили загадывает желание и улыбается.']]);
mkStory('Space Trip', [['Sam is an astronaut.', 'Сэм — космонавт.'], ['He flies to the moon in a silver rocket.', 'Он летит на луну в серебряной ракете.'], ['The moon is quiet and cold.', 'Луна тихая и холодная.'], ['Sam jumps very high there.', 'Там Сэм прыгает очень высоко.'], ['Then he goes home to Earth.', 'Потом он возвращается домой на Землю.']]);
mkQuiz(addSub(qc, 'quiz-read3', 'Reading 3', '<div class="quiz-container"></div>').firstChild, [
  ['Magic Garden: What do the flowers do in the morning?', ['sing', 'dance', 'sleep'], 0], ['Magic Garden: Where does the frog live?', ['under a big leaf', 'in a house', 'in a tree'], 0],
  ['Space Trip: What is Sam?', ['an astronaut', 'a pilot', 'a doctor'], 0], ['Space Trip: How is the moon?', ['quiet and cold', 'hot and loud', 'green'], 0], ['Space Trip: What colour is the rocket?', ['silver', 'red', 'blue'], 0]], 15);

// --- Задания дня ---
const MS = document.createElement('div'); MS.className = 'info-box'; MS.style.cssText = 'background:#fff3e0;border-color:#ff7f50;color:#2c3e50'; $('#wod').after(MS);
const TW = LS('ra_tw', {d: '', w: []}); if (TW.d !== day()) { TW.d = day(); TW.w = []; } const twS = new Set(TW.w);
const _s5 = window.speak; window.speak = (t, r) => { if (typeof t === 'string' && /^[A-Za-z']{2,}$/.test(t)) twS.add(t.toLowerCase()); return _s5(t, r); };
const refreshM = () => { const d = DY[day()] || {t: 0, ok: 0}, m = [['⏱ 10 минут занятий', d.t >= 600], ['✅ 15 правильных ответов', d.ok >= 15], ['👂 20 разных слов', twS.size >= 20]];
  MS.innerHTML = '<strong>🎯 Задания дня:</strong><br>' + m.map(x => (x[1] ? '✅ ' : '⬜ ') + x[0]).join('<br>');
  if (m.every(x => x[1])) { if (LS('ra_mdone', '') !== day()) { SV('ra_mdone', day()); addScore(20); } MS.innerHTML += '<br>🎉 Все задания выполнены! (+20 ⭐)'; } TW.w = [...twS]; SV('ra_tw', TW); };
refreshM(); setInterval(refreshM, 5000);

// --- Звуки ---
let AC; const beep = (f, d) => { if (LS('ra_snd', 'on') === 'off') return; try { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); const o = AC.createOscillator(), g = AC.createGain(); o.frequency.value = f; g.gain.value = .07; o.connect(g); g.connect(AC.destination); o.start(); o.stop(AC.currentTime + d); } catch (e) {} };
new MutationObserver(ms => ms.forEach(m => { const n = m.target.getAttribute('class') || '', o = m.oldValue || '';
  if (/\bwrong\b/.test(n) && !/\bwrong\b/.test(o)) beep(200, .25); if (/\bcorrect\b/.test(n) && !/\bcorrect\b/.test(o)) { beep(660, .1); setTimeout(() => beep(990, .15), 110); } })).observe(document.body, {attributes: true, attributeFilter: ['class'], subtree: true, attributeOldValue: true});

// --- Родитель: звуки, отчёт, резервная копия ---
const _rp = renderParent;
renderParent = function () {
  _rp(); const x = document.createElement('div'); x.className = 'noprint'; x.style.cssText = 'display:flex;gap:10px;flex-wrap:wrap;margin-top:14px';
  x.innerHTML = `<button class="reset-btn" style="margin:0">🔊 Звуки: ${LS('ra_snd', 'on') === 'off' ? 'выкл' : 'вкл'}</button><button class="reset-btn" style="margin:0">📋 Скопировать отчёт</button><button class="reset-btn" style="margin:0">💾 Экспорт прогресса</button><button class="reset-btn" style="margin:0">📂 Импорт</button><input type="file" accept=".json" style="display:none">`;
  PNL.firstChild.appendChild(x); const [s, c, e, i] = x.querySelectorAll('button'), f = x.querySelector('input');
  s.onclick = () => { SV('ra_snd', LS('ra_snd', 'on') === 'off' ? 'on' : 'off'); renderParent(); };
  c.onclick = () => { const t = DY[day()] || {t: 0, ok: 0, bad: 0}, txt = `Reading Adventure — ${day()}\nСегодня: ${Math.round(t.t / 60)} мин, верно ${t.ok}, ошибок ${t.bad}\nЗвёзд: ${score}, уровень ${level}, серия ${LS('ra_streak', {n: 0}).n} дн.\nСлов услышано: ${learned.size}, букв открыто: ${visited.size}/26`; (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => alert('Отчёт скопирован'), () => prompt('Скопируйте отчёт:', txt)); };
  const KS = ['readingAdventure_v2', 'ra_cards', 'ra_stats', 'ra_days', 'ra_streak', 'ra_letters', 'ra_goal', 'ra_rate', 'ra_dark', 'ra_snd', 'ra_wpm', 'ra_tw', 'ra_mdone'];
  e.onclick = () => { saveSt(); const o = {}; KS.forEach(k => { const v = localStorage.getItem(k); if (v !== null) o[k] = v; }); const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(o)], {type: 'application/json'})); a.download = 'reading-adventure-progress.json'; a.click(); };
  i.onclick = () => f.click(); f.onchange = () => { const r = new FileReader(); r.onload = () => { try { const o = JSON.parse(r.result); Object.keys(o).filter(k => KS.includes(k)).forEach(k => localStorage.setItem(k, o[k])); alert('Прогресс загружен'); location.reload(); } catch (er) { alert('Не удалось прочитать файл'); } }; r.readAsText(f.files[0]); };
};

})();
