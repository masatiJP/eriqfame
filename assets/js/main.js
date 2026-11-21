var $=function(i){return document.getElementById(i)},ver=VER[0],cat="Все";
function ico(l){return '<svg viewBox="0 0 24 24">'+l.i+'</svg>'}
function lst(v){return A.filter(function(a){return a.v.indexOf(v)>-1})}

/* links */
$('tiles').innerHTML=LINKS.map(function(l){return '<a class="tile" href="'+l.u+'" target="_blank" rel="noopener">'+ico(l)+'<h3 class="gold">'+l.n+'</h3><p>'+l.d+'</p></a>'}).join('');
$('stats').innerHTML=[[A.length,'аддонов'],[VER.length,'версии игры'],[1,'класс — разбойник']].map(function(x){return '<div><b class="gold">'+x[0]+'</b><small>'+x[1]+'</small></div>'}).join('');

/* menu */
$('burger').onclick=function(){$('menu').classList.toggle('on')};
$('menu').onclick=function(){$('menu').classList.remove('on')};
addEventListener('scroll',function(){$('hd').classList.toggle('sc',scrollY>30)},{passive:true});
var links=document.querySelectorAll('.lk a[href^="#"]:not(.chip)');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});
['realm','ui','addons','guides','links','live'].forEach(function(i){io.observe($(i))});

/* scene filler */
document.querySelectorAll('[data-f]').forEach(function(el){var t=el.dataset.f,n=+el.dataset.n,h='',k=0;
  for(;k<n;k++){h+=t==='sl'?'<span class="sl">'+['C','S1','F2','Q','R','4','5','6'][k%8]+'</span>':'<u style="background:linear-gradient(135deg,hsl('+((k*47+20)%360)+',55%,'+(30+k%3*8)+'%),#0b0b0b)"></u>'}
  el.insertAdjacentHTML(t==='sl'?'beforeend':'afterbegin',h)});
document.querySelector('.dk').style.cssText+=';padding:.4cqw';

/* toast */
var toast=$('toast'),tt;function say(m){toast.textContent=m;toast.classList.add('show');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('show')},1800)}
function sets(a){return '<ul class="set">'+a.s.map(function(r){return '<li>'+r[0]+'<b>'+r[1]+'</b></li>'}).join('')+'</ul>'}

/* realms */
function realms(){$('realms').innerHTML=VER.map(function(v){return '<button class="rm" role="radio" aria-checked="'+(v.id===ver.id)+'" data-v="'+v.id+'" style="--c:'+v.c+'"><span class="rimg"><img src="'+v.img+'" alt=""></span><h3>'+v.n.toUpperCase()+'</h3><p>'+v.s+'</p><em>'+(v.id===ver.id?'● ВЫБРАНО':lst(v.id).length+' АДДОНОВ')+'</em></button>'}).join('')}
$('realms').addEventListener('click',function(e){var b=e.target.closest('.rm');if(b)setVer(b.dataset.v,true)});
function setVer(id,sc){ver=VER.filter(function(v){return v.id===id})[0]||VER[0];
  var r=document.documentElement.style;r.setProperty('--ac',ver.c);r.setProperty('--acr',ver.r);
  $('chip').textContent=ver.n.toUpperCase();$('csub').textContent='Профили для версии «'+ver.n+'». Скачайте аддон и вставьте строку внутри игры.';
  try{localStorage.setItem('ef-ver',ver.id)}catch(e){}
  realms();grid();pick(cur0);if(sc)say('ВЕРСИЯ: '+ver.n.toUpperCase())}

/* showcase */
var cur0=0;
function pick(i){cur0=i;var a=A[i];document.querySelectorAll('.hs').forEach(function(h){h.classList.toggle('on',+h.dataset.a===i)});
  $('info').innerHTML='<div><span class="tag">'+a.c.toUpperCase()+' · '+ver.n.toUpperCase()+'</span><h3 class="gold">'+a.n+'</h3><p>'+a.d+'</p><div class="btns" style="justify-content:flex-start"><a class="btn" href="'+a.dl+'" target="_blank" rel="noopener">СКАЧАТЬ</a><a class="btn main" href="'+addonUrl(a)+'">ПОДРОБНЕЕ</a></div></div><div>'+sets(a)+'</div>'}
$('scene').addEventListener('click',function(e){var h=e.target.closest('.hs');if(h)pick(+h.dataset.a)});

/* catalog */
function tabs(){$('tabs').innerHTML=CATS.map(function(c){return '<button class="tab" aria-pressed="'+(c===cat)+'" data-c="'+c+'">'+c.toUpperCase()+'</button>'}).join('')}
function em(a){return '<span class="em"><div>'+(a.img?'<img src="'+a.img+'" alt="">':'<svg viewBox="0 0 24 24">'+a.g+'</svg>')+'</div></span>'}
function dots(a){return '<span class="dots">'+VER.filter(function(v){return a.v.indexOf(v.id)>-1}).map(function(v){return '<i title="'+v.n+'" style="background:'+v.c+';box-shadow:0 0 8px '+v.c+'"></i>'}).join('')+'</span>'}
function grid(){var h=A.filter(function(a){return a.v.indexOf(ver.id)>-1&&(cat==="Все"||a.c===cat)}).map(function(a){
 return '<article class="card" data-k="'+a.k+'"><div class="ban"><span class="tag">'+a.c.toUpperCase()+'</span>'+dots(a)+em(a)+'</div><h3 class="gold">'+a.n+'</h3><p>'+a.d+'</p><span class="mt">'+a.pf+'</span><div class="acts"><a class="btn main" href="'+addonUrl(a)+'">ПОДРОБНЕЕ</a><a class="btn" href="'+a.dl+'" target="_blank" rel="noopener">СКАЧАТЬ</a></div></article>'}).join('');
 $('grid').innerHTML=h||'<div class="empty">Для этой версии аддонов пока нет.</div>'}
$('tabs').addEventListener('click',function(e){var b=e.target.closest('.tab');if(b){cat=b.dataset.c;tabs();grid()}});
$('grid').addEventListener('click',function(e){if(e.target.closest('a'))return;var c=e.target.closest('.card');if(c)location.href=addonUrl(A.filter(function(a){return a.k===c.dataset.k})[0])});
$('grid').addEventListener('mousemove',function(e){var c=e.target.closest('.card');if(!c)return;var r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')});
tabs();var saved='wotlk';try{saved=localStorage.getItem('ef-ver')||'wotlk'}catch(e){}
setVer(saved,false);

/* hero: cursor light + embers */
var hero=$('hero');hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
 var cv=$('em'),cx=cv.getContext('2d'),P=[],W,H;
 function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}rs();addEventListener('resize',rs);
 for(var k=0;k<55;k++)P.push({x:Math.random()*2000,y:Math.random()*1200,r:Math.random()*1.8+.4,v:Math.random()*.5+.15,a:Math.random()*6.28});
 (function f(){cx.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.v;p.a+=.02;p.x+=Math.sin(p.a)*.35;if(p.y<-10){p.y=H+10;p.x=Math.random()*W}
  cx.beginPath();cx.arc(p.x%W,p.y,p.r,0,6.28);cx.fillStyle='rgba(243,214,140,'+(.25+.4*Math.abs(Math.sin(p.a)))+')';cx.shadowColor='#c8a661';cx.shadowBlur=8;cx.fill()});requestAnimationFrame(f)})()}


/* twitch */
function twLoad(){var p=$('twp');if(p.querySelector('iframe'))return;var hs=[location.hostname,'claude.ai'].filter(function(x,k,a){return x&&a.indexOf(x)===k});
 var f=document.createElement('iframe');f.src='https://player.twitch.tv/?channel=eriqfame&muted=true&autoplay=true&'+hs.map(function(x){return 'parent='+encodeURIComponent(x)}).join('&');f.allowFullscreen=true;f.title='Twitch: eriqfame';p.appendChild(f)}
$('twp').addEventListener('click',twLoad);$('twp').addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();twLoad()}});
