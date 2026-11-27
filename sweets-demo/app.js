const WA='966500000000'; // رقم تجريبي: يستبدله العميل برقمه
const P=[
{id:1,n:'كيك الشوكولاتة',c:'كيك',d:'طبقات شوكولاتة غنية بكريمة ناعمة',p:85},
{id:2,n:'كيك الفانيلا والفراولة',c:'كيك',d:'إسفنج خفيف مع فراولة طازجة',p:75},
{id:3,n:'كوكيز الشوكولاتة',c:'كوكيز',d:'علبة 12 قطعة مقرمشة من الخارج وطرية من الداخل',p:45},
{id:4,n:'كوكيز اللوتس',c:'كوكيز',d:'علبة 12 قطعة بحشوة اللوتس',p:55},
{id:5,n:'تشيز كيك التوت',c:'تشيز كيك',d:'قاعدة بسكويت وكريمة جبن مع صوص التوت',p:95},
{id:6,n:'تشيز كيك اللوتس',c:'تشيز كيك',d:'كريمة اللوتس مع بسكويت مفتت',p:95},
{id:7,n:'بسبوسة بالقشطة',c:'حلويات شرقية',d:'صينية صغيرة تكفي 4 أشخاص',p:60},
{id:8,n:'كنافة ناعمة',c:'حلويات شرقية',d:'كنافة بالجبن مع القطر',p:70},
{id:9,n:'بقلاوة مشكلة',c:'حلويات شرقية',d:'نصف كيلو بالفستق والجوز',p:120}];
const ICON={'كيك':'<svg width="90" height="90" viewBox="0 0 64 64"><rect x="10" y="30" width="44" height="22" rx="4" fill="#8a5a3b"/><rect x="10" y="26" width="44" height="8" rx="4" fill="#f6d5dc"/><rect x="30" y="14" width="4" height="12" fill="#e8a0a8"/><circle cx="32" cy="12" r="3" fill="#f2b84b"/></svg>','كوكيز':'<svg width="90" height="90" viewBox="0 0 64 64"><circle cx="32" cy="32" r="22" fill="#c98a4b"/><circle cx="24" cy="26" r="3" fill="#4a2c17"/><circle cx="38" cy="24" r="3" fill="#4a2c17"/><circle cx="30" cy="38" r="3" fill="#4a2c17"/><circle cx="42" cy="38" r="3" fill="#4a2c17"/></svg>','تشيز كيك':'<svg width="90" height="90" viewBox="0 0 64 64"><path d="M8 48 L32 14 L56 48 Z" fill="#f7e2b5"/><path d="M8 48 L56 48 L56 54 L8 54 Z" fill="#b5703c"/><circle cx="32" cy="22" r="4" fill="#c2415b"/></svg>','حلويات شرقية':'<svg width="90" height="90" viewBox="0 0 64 64"><rect x="12" y="20" width="40" height="28" rx="5" fill="#d9a441"/><path d="M12 30 H52 M12 38 H52" stroke="#a8761d" stroke-width="2"/><circle cx="32" cy="34" r="4" fill="#5c8a3a"/></svg>'};
const cats=['الكل','كيك','كوكيز','تشيز كيك','حلويات شرقية'];
let cart=JSON.parse(localStorage.getItem('cart')||'{}');
const sar=n=>n.toLocaleString('ar-SA')+' ر.س';
const save=()=>{localStorage.setItem('cart',JSON.stringify(cart));renderCart()};
function wa(text){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(text)}
function card(x){return `<div class="card"><div class="ph" style="background:hsl(${x.id*37%360},60%,88%)">${ICON[x.c]}</div><div class="b"><h3>${x.n}</h3><p>${x.d}</p><div class="price">${sar(x.p)}</div><div class="row"><button class="btn" onclick="add(${x.id})">أضف للسلة</button><a class="btn wa" target="_blank" rel="noopener" href="${wa('مرحباً، أرغب بطلب: '+x.n+' - السعر: '+x.p+' ر.س')}">اطلب عبر واتساب</a></div></div></div>`}
function add(id){cart[id]=(cart[id]||0)+1;save();document.getElementById('cart').classList.add('open')}
function chg(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];save()}
function rem(id){delete cart[id];save()}
function total(){return Object.entries(cart).reduce((s,[id,q])=>s+P.find(p=>p.id==id).p*q,0)}
function renderCart(){const el=document.getElementById('cartItems');if(!el)return;
const ids=Object.keys(cart);document.getElementById('cartCount').textContent=ids.reduce((s,i)=>s+cart[i],0);
el.innerHTML=ids.length?ids.map(i=>{const p=P.find(x=>x.id==i);return `<div class="ci"><span>${p.n}</span><span><button onclick="chg(${i},-1)">−</button> ${cart[i]} <button onclick="chg(${i},1)">+</button></span><span>${sar(p.p*cart[i])}</span><button onclick="rem(${i})" title="حذف">×</button></div>`}).join(''):'<p>السلة فارغة</p>';
document.getElementById('cartTotal').textContent=sar(total());document.getElementById('sendCart').style.display=ids.length?'inline-block':'none'}
function sendCart(){const lines=Object.entries(cart).map(([i,q])=>{const p=P.find(x=>x.id==i);return `- ${p.n} × ${q} = ${p.p*q} ر.س`});
window.open(wa('مرحباً، أرغب بطلب:\n'+lines.join('\n')+'\nالإجمالي: '+total()+' ر.س'),'_blank')}
function toggleCart(){document.getElementById('cart').classList.toggle('open')}
function menu(){const f=document.getElementById('filters'),g=document.getElementById('menuGrid');if(!f)return;
f.innerHTML=cats.map((c,i)=>`<button class="${i?'':'on'}" data-c="${c}">${c}</button>`).join('');
const show=c=>{g.innerHTML=P.filter(p=>c=='الكل'||p.c==c).map(card).join('')};show('الكل');
f.onclick=e=>{if(e.target.dataset.c){[...f.children].forEach(b=>b.classList.remove('on'));e.target.classList.add('on');show(e.target.dataset.c)}}}
function featured(){const g=document.getElementById('featured');if(g)g.innerHTML=P.slice(0,6).map(card).join('')}
function contact(){const f=document.getElementById('cf');if(!f)return;f.onsubmit=e=>{e.preventDefault();
const n=f.n.value.trim(),ph=f.ph.value.trim(),m=f.m.value.trim();let ok=true;
const set=(id,t)=>{document.getElementById(id).textContent=t;if(t)ok=false};
set('en',n.length<2?'الرجاء إدخال الاسم':'');set('ep',/^(\+?966|0)?5\d{8}$/.test(ph.replace(/\s/g,''))?'':'أدخل رقم جوال سعودي صحيح مثل 0500000000');set('em',m.length<5?'اكتب رسالتك (5 أحرف على الأقل)':'');
if(ok){const s=document.getElementById('done');s.textContent='تم تجهيز رسالتك، سيفتح واتساب لإرسالها.';
window.open(wa('الاسم: '+n+'\nالجوال: '+ph+'\nالرسالة: '+m),'_blank');f.reset()}}}
document.addEventListener('DOMContentLoaded',()=>{renderCart();menu();featured();contact()});
