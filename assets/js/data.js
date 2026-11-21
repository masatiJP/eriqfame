/* ===== ДАННЫЕ: замените на реальные ===== */
var VER=[
{id:"wotlk",n:"WotLK",s:"Wrath of the Lich King",c:"#7fc8ff",r:"127,200,255",img:"assets/img/wotlk.webp"},
{id:"sirus",n:"WotLK Sirus",s:"Сервер Sirus",c:"#e0525f",r:"224,82,95",img:"assets/img/sirus.webp"},
{id:"forever",n:"WoW Forever",s:"World of Warcraft Forever",c:"#4fd1c5",r:"79,209,197",img:"assets/img/forever.webp"}];
var LINKS=[
{n:"TWITCH",d:"Стримы и живой геймплей",u:"https://www.twitch.tv/eriqfame",i:'<path d="M4 3 3 6.5V19h4.5v3H10l3-3h4l5-5V3H4zm16 10-3 3h-4.5l-3 3v-3H6V5h14v8zm-3-5h-2v5h2V8zm-5 0h-2v5h2V8z"/>'},
{n:"YOUTUBE",d:"Записи, разборы, гайды",u:"https://youtube.com/",i:'<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3-5.2 3z"/>'},
{n:"TELEGRAM",d:"Анонсы и обновления профилей",u:"https://t.me/",i:'<path d="M21.5 4.3 2.9 11.5c-1.3.5-1.3 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.1.8.7.8.5 0 .7-.2 1-.5l2.3-2.3 4.7 3.5c.9.5 1.5.2 1.7-.8L22.9 5.8c.3-1.2-.5-1.8-1.4-1.5zM8.5 13.7l9.3-5.9c.4-.3.8-.1.5.2l-7.7 7-.3 3.2-1.8-4.5z"/>'}];
var CATS=["Все","Интерфейс","Бой","Информация"];
var ALL=["wotlk","sirus","forever"];
var A=[
{k:"xperl",n:"X-Perl UnitFrames",c:"Интерфейс",v:ALL,d:"Рамки персонажа и цели с портретами, процентами и числами здоровья и маны.",pf:"Профиль Эрика",s:[["Портрет", "Слева от рамки"], ["Здоровье", "Зелёное, проценты и число"], ["Мана", "Синяя, число справа"], ["Размер", "Компактный"]],g:"<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M7 10h10M7 14h6\"/>",dl:"https://www.curseforge.com/wow/search?search=X-Perl+UnitFrames"},
{k:"bartender",n:"Bartender4",c:"Интерфейс",v:ALL,d:"Нижняя панель в два ряда и вертикальная панель справа с подписями клавиш.",pf:"Профиль Эрика",s:[["Нижняя панель", "2 ряда по 12"], ["Правая панель", "8 кнопок, мелкий шрифт"], ["Фон", "Без фона"], ["Подсказки", "Над панелью"]],g:"<rect x=\"3\" y=\"4\" width=\"4\" height=\"4\"/><rect x=\"10\" y=\"4\" width=\"4\" height=\"4\"/><rect x=\"17\" y=\"4\" width=\"4\" height=\"4\"/><rect x=\"3\" y=\"11\" width=\"4\" height=\"4\"/><rect x=\"10\" y=\"11\" width=\"4\" height=\"4\"/><rect x=\"17\" y=\"11\" width=\"4\" height=\"4\"/><path d=\"M3 19h18\"/>",dl:"https://www.curseforge.com/wow/search?search=Bartender4"},
{k:"tidyplates",n:"TidyPlates",c:"Бой",v:ALL,d:"Таблички над целями: полоса здоровья, уровень и имя.",pf:"Профиль Эрика",s:[["Ширина", "Узкая"], ["Имя", "Над полосой"], ["Цвет", "По классу"]],g:"<path d=\"M4 9h16v6H4zM8 9V6h8v3\"/><path d=\"M7 12h6\"/>",dl:"https://www.curseforge.com/wow/search?search=TidyPlates"},
{k:"chinchilla",n:"Chinchilla",c:"Интерфейс",v:ALL,d:"Круглая миникарта с названием зоны и часами.",pf:"Настройки",s:[["Форма", "Круглая"], ["Размер", "Средний"], ["Часы", "Снизу справа"]],g:"<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 5v3M12 16v3M5 12h3M16 12h3M12 12l3-4\"/>",dl:"https://www.curseforge.com/wow/search?search=Chinchilla"},
{k:"prat",n:"Prat",c:"Информация",v:ALL,d:"Чат с прозрачным фоном и метками каналов.",pf:"Настройки",s:[["Фон", "Градиент слева"], ["Время", "Показывается"], ["Каналы", "Цветные метки"]],g:"<path d=\"M4 5h16v11H11l-4 4v-4H4z\"/><path d=\"M8 9h8M8 12h5\"/>",dl:"https://www.curseforge.com/wow/search?search=Prat"},
{k:"details",n:"Details!",c:"Информация",v:ALL,d:"Счётчик урона и лечения в компактном окне.",pf:"Профиль Эрика",s:[["Окно", "Одно, справа внизу"], ["Фон", "Прозрачность 85%"], ["Режим", "Урон и прерывания"]],g:"<path d=\"M4 20V10M10 20V4M16 20v-7M2 20h20\"/>",dl:"https://www.curseforge.com/wow/search?search=Details"},
{k:"dbm",n:"DBM",c:"Информация",v:ALL,d:"Таймеры боссов и предупреждения в рейде.",pf:"Настройки",s:[["Полосы", "Сверху по центру"], ["Звуки", "Только смертельные механики"]],g:"<circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M12 8v5l3 2M9 3h6\"/>",dl:"https://www.curseforge.com/wow/search?search=DBM"}];

/* Страница аддона: поменяйте адрес, когда она будет готова */
function addonUrl(a){return 'addon.html?id='+a.k}
