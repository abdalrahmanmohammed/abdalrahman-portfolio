/* بيانات تجريبية مشتركة بين المتجر ولوحة التاجر — كل الأرقام والأسماء أمثلة وليست حقيقية */
(function(){
const SEED_VERSION = 3;
const KEY = 'aziziyah_demo_v2';

const CATEGORIES = [
  {id:'appliances', name:'أجهزة كهربائية', emoji:'1f50c'},
  {id:'kitchen',    name:'مطبخ وأواني',    emoji:'1f373'},
  {id:'outdoor',    name:'فحم ومشاوي ورحلات', emoji:'26fa'},
  {id:'toys',       name:'ألعاب أطفال',    emoji:'1f9f8'},
  {id:'bags',       name:'شنط وحقائب',     emoji:'1f392'},
  {id:'shoes',      name:'أحذية',          emoji:'1f45f'},
  {id:'clothes',    name:'ملابس',          emoji:'1f455'},
  {id:'household',  name:'أدوات منزلية',   emoji:'1f3e0'}
];

/* السعر المعروض سعر تجريبي — شرائح الجملة: كل ما زادت الكمية قل السعر */
const PRODUCTS = [
 {id:'p01',name:'مكواة بخار 2200 واط',cat:'appliances',price:89, tiers:[[1,89],[6,79],[24,69]],emoji:'1f50c',bg:['#E8F4F0','#FDF3E0','#EDEFFD'],stock:140,rating:4.6,sold:320,sku:'AZ-EL-001',desc:'مكواة بخار قوية بقاعدة سيراميك وخزان ماء كبير. مناسبة للاستخدام المنزلي اليومي.'},
 {id:'p02',name:'مروحة عمود 16 بوصة بريموت',cat:'appliances',price:119,tiers:[[1,119],[6,105],[24,95]],emoji:'1f300',bg:['#EDEFFD','#E8F4F0','#FDECEC'],stock:96,rating:4.4,sold:210,sku:'AZ-EL-002',desc:'مروحة عمود بثلاث سرعات وريموت تحكم ومؤقت. صوت هادئ واستهلاك منخفض.'},
 {id:'p03',name:'سشوار شعر احترافي',cat:'appliances',price:65,tiers:[[1,65],[12,55],[48,47]],emoji:'2668',bg:['#FDF3E0','#EDEFFD','#E8F4F0'],stock:210,rating:4.3,sold:540,sku:'AZ-EL-003',desc:'سشوار بقوة عالية وفوهة تجميع، سرعتان وثلاث درجات حرارة.'},
 {id:'p04',name:'غلاية كهربائية ستانلس 1.8 لتر',cat:'appliances',price:49,tiers:[[1,49],[12,42],[48,36]],emoji:'1f372',bg:['#E8F4F0','#FDF3E0','#EDEFFD'],stock:180,rating:4.7,sold:610,sku:'AZ-EL-004',desc:'غلاية ستانلس ستيل بفصل تلقائي وقاعدة دوارة 360 درجة.'},
 {id:'p05',name:'طقم قدور جرانيت 10 قطع',cat:'kitchen',price:249,tiers:[[1,249],[4,229],[12,205]],emoji:'1f373',bg:['#FDECEC','#E8F4F0','#FDF3E0'],stock:64,rating:4.8,sold:190,sku:'AZ-KT-001',desc:'طقم قدور جرانيت غير لاصق بمقابض مريحة وأغطية زجاج، يصلح لكل أنواع المواقد.'},
 {id:'p06',name:'طقم سكاكين مطبخ 6 قطع مع حامل',cat:'kitchen',price:79,tiers:[[1,79],[10,69],[40,59]],emoji:'1f52a',bg:['#EDEFFD','#FDECEC','#E8F4F0'],stock:150,rating:4.5,sold:380,sku:'AZ-KT-002',desc:'سكاكين ستانلس حادة مع حامل خشبي أنيق. تشمل سكين الشيف والتقطيع والخبز.'},
 {id:'p07',name:'محضرة طعام متعددة الاستخدام',cat:'kitchen',price:189,tiers:[[1,189],[6,169],[20,149]],emoji:'1f964',bg:['#E8F4F0','#EDEFFD','#FDF3E0'],stock:45,rating:4.6,sold:150,sku:'AZ-KT-003',desc:'محضرة طعام بملحقات فرم وعصر وتقطيع، وعاء سعة 2 لتر.'},
 {id:'p08',name:'فحم برتقال نيجيري 10 كجم',cat:'outdoor',price:38,tiers:[[1,38],[20,33],[100,29]],emoji:'1f525',bg:['#FDF3E0','#FDECEC','#EDEFFD'],stock:400,rating:4.7,sold:1250,sku:'AZ-OT-001',desc:'فحم برتقال أصلي سريع الاشتعال وطويل البقاء. الأنسب للشوي والكبسات.'},
 {id:'p09',name:'شواية فحم قابلة للطي',cat:'outdoor',price:99,tiers:[[1,99],[6,89],[24,79]],emoji:'1f356',bg:['#FDECEC','#FDF3E0','#E8F4F0'],stock:70,rating:4.4,sold:260,sku:'AZ-OT-002',desc:'شواية فحم عملية قابلة للطي سهلة الحمل للرحلات والبر.'},
 {id:'p10',name:'خيمة رحلات 4 أشخاص',cat:'outdoor',price:219,tiers:[[1,219],[4,199],[12,179]],emoji:'26fa',bg:['#E8F4F0','#EDEFFD','#FDECEC'],stock:38,rating:4.5,sold:95,sku:'AZ-OT-003',desc:'خيمة مقاومة للماء بتركيب سريع، تتسع لأربعة أشخاص مع شنطة حمل.'},
 {id:'p11',name:'دبدوب قطيفة كبير',cat:'toys',price:45,tiers:[[1,45],[12,39],[48,33]],emoji:'1f9f8',bg:['#FDF3E0','#EDEFFD','#FDECEC'],stock:220,rating:4.8,sold:700,sku:'AZ-TY-001',desc:'دبدوب قطيفة ناعم بحجم كبير، آمن للأطفال وخامة ممتازة.'},
 {id:'p12',name:'لعبة تركيب وبازل 500 قطعة',cat:'toys',price:35,tiers:[[1,35],[12,30],[48,26]],emoji:'1f9e9',bg:['#EDEFFD','#E8F4F0','#FDF3E0'],stock:160,rating:4.3,sold:340,sku:'AZ-TY-002',desc:'بازل تركيب ينمي التركيز والمهارات، مناسب من عمر 5 سنوات.'},
 {id:'p13',name:'شنطة ظهر رجالية جلد',cat:'bags',price:129,tiers:[[1,129],[6,115],[24,99]],emoji:'1f392',bg:['#FDECEC','#EDEFFD','#E8F4F0'],stock:85,rating:4.6,sold:230,sku:'AZ-BG-001',desc:'شنطة ظهر جلد صناعي فاخر بجيب لابتوب وجيوب متعددة، تصميم عملي.'},
 {id:'p14',name:'شنطة سفر بعجلات مقاس وسط',cat:'bags',price:189,tiers:[[1,189],[4,169],[12,149]],emoji:'1f5c4',bg:['#E8F4F0','#FDF3E0','#EDEFFD'],stock:52,rating:4.5,sold:140,sku:'AZ-BG-002',desc:'شنطة سفر خفيفة بعجلات 360 وقفل رقمي، خامة مقاومة للخدش.'},
 {id:'p15',name:'حذاء رياضي رجالي',cat:'shoes',price:99,tiers:[[1,99],[6,89],[24,79]],emoji:'1f45f',bg:['#EDEFFD','#FDECEC','#FDF3E0'],stock:130,rating:4.4,sold:410,sku:'AZ-SH-001',desc:'حذاء رياضي مريح بنعل مرن، مناسب للمشي والاستخدام اليومي.',variants:{label:'المقاس',options:['40','41','42','43','44','45']}},
 {id:'p16',name:'صندل رجالي طبي',cat:'shoes',price:59,tiers:[[1,59],[10,52],[40,45]],emoji:'1fa74',bg:['#FDF3E0','#E8F4F0','#EDEFFD'],stock:170,rating:4.2,sold:290,sku:'AZ-SH-002',desc:'صندل طبي مريح بفرش داخلي ناعم، مثالي للبيت والمشاوير القريبة.',variants:{label:'المقاس',options:['40','41','42','43','44','45']}},
 {id:'p17',name:'تيشيرت قطن رجالي (3 قطع)',cat:'clothes',price:75,tiers:[[1,75],[8,67],[30,58]],emoji:'1f455',bg:['#E8F4F0','#EDEFFD','#FDECEC'],stock:200,rating:4.5,sold:520,sku:'AZ-CL-001',desc:'باقة 3 تيشيرتات قطن 100% بألوان أساسية، خياطة ممتازة.',variants:{label:'المقاس',options:['M','L','XL','XXL']}},
 {id:'p18',name:'ثوب رجالي فاخر',cat:'clothes',price:149,tiers:[[1,149],[5,135],[20,119]],emoji:'1f458',bg:['#FDF3E0','#EDEFFD','#E8F4F0'],stock:75,rating:4.7,sold:180,sku:'AZ-CL-002',desc:'ثوب رجالي بقماش ياباني فاخر وخياطة دقيقة، متوفر بألوان موسمية.',variants:{label:'المقاس',options:['54','56','58','60','62']}},
 {id:'p19',name:'طقم أواني تخزين 12 قطعة',cat:'household',price:69,tiers:[[1,69],[10,61],[40,53]],emoji:'1f9fa',bg:['#EDEFFD','#FDF3E0','#FDECEC'],stock:190,rating:4.4,sold:360,sku:'AZ-HH-001',desc:'أواني تخزين محكمة الإغلاق بأحجام متنوعة، آمنة للفريزر والميكروويف.'},
 {id:'p20',name:'طقم تنظيف منزلي متكامل',cat:'household',price:39,tiers:[[1,39],[12,34],[48,29]],emoji:'1f4e6',bg:['#E8F4F0','#FDECEC','#EDEFFD'],stock:0,rating:4.1,sold:260,sku:'AZ-HH-002',desc:'طقم تنظيف منزلي متكامل: مكنسة وجاروف وفرشاة. (نفد حالياً — مخزون تجريبي)'}
];

const FIRST=['أبو فهد','أبو سالم','أبو راكان','أبو ماجد','أبو نايف','أبو تركي','أبو سلطان','أبو بدر','أبو خالد','أبو يزيد','أبو فهد','أبو مشعل'];
const LAST=['العتيبي','القحطاني','الدوسري','الشمري','الحربي','الغامدي','المطيري','السبيعي','العنزي','الرشيدي'];
const CITIES=['الرياض','الرياض','الرياض','جدة','الدمام','مكة','الخرج'];
const STATUS=['new','preparing','shipped','transit','delivered'];
const PAY=['الدفع عند الاستلام','بطاقة (تجريبي)','مدى (تجريبي)','Apple Pay (تجريبي)','تمارا (تجريبي)'];
const SHIP=['شحن قياسي','شحن سريع','استلام من المستودع'];

function ri(a,b){return a+Math.floor(Math.random()*(b-a+1));}
function pick(arr){return arr[Math.floor(Math.random()*arr.length)];}

function seed(){
  const products = PRODUCTS.map(p=>({...p}));
  const customers=[]; const orders=[];
  for(let i=0;i<12;i++){
    customers.push({id:'c'+(i+1),name:FIRST[i]+' '+pick(LAST),city:pick(CITIES),phone:'05XXXXXXXX',orders:0,total:0,wholesale:i<3,demo:true});
  }
  const now=Date.now();
  for(let i=0;i<22;i++){
    const dAgo=ri(0,13)*86400000 + ri(0,20)*3600000;
    const c=pick(customers);
    const n=ri(1,3); const items=[]; let sub=0;
    for(let j=0;j<n;j++){
      const p=pick(products); const qty=ri(1,4);
      const pr=unitPrice(p,qty);
      items.push({pid:p.id,name:p.name,qty,price:pr,emoji:p.emoji,bg:p.bg[0],variant:p.variants?pick(p.variants.options):null});
      sub+=pr*qty;
    }
    const ship=pick(SHIP); const shipFee=ship==='شحن سريع'?45:(ship==='شحن قياسي'?25:0);
    const stIdx=Math.min(4,Math.max(0,4-Math.floor(dAgo/(86400000*2))+ri(-1,1)));
    const st = dAgo>11*86400000 ? (Math.random()<.15?'cancelled':'delivered') : STATUS[Math.max(0,Math.min(4,stIdx))];
    const o={id:'AZ-'+(10240+i),created:now-dAgo,customerId:c.id,customer:c.name,city:c.city,items,sub,ship,shipFee,discount:0,total:sub+shipFee,pay:pick(PAY),status:st,demo:true};
    orders.push(o);
    if(st!=='cancelled'){c.orders++;c.total+=o.total;}
  }
  orders.sort((a,b)=>b.created-a.created);
  const wholesaleRequests=[
    {id:'w1',name:'أبو سلطان العنزي',city:'الرياض',business:'محل أدوات منزلية',qty:'حوالي 200 قطعة شهرياً',status:'new',demo:true},
    {id:'w2',name:'أبو نايف القحطاني',city:'جدة',business:'متجر إلكتروني',qty:'500 قطعة للبداية',status:'new',demo:true},
    {id:'w3',name:'أبو بدر الشمري',city:'الدمام',business:'بقالة وتموينات',qty:'100 قطعة',status:'approved',demo:true},
    {id:'w4',name:'أبو مشعل الحربي',city:'مكة',business:'محل هدايا وألعاب',qty:'150 قطعة',status:'rejected',demo:true}
  ];
  const coupons=[
    {code:'AZIZ10',pct:10,min:100,active:true,demo:true},
    {code:'JOMLA5',pct:5,min:500,active:true,demo:true},
    {code:'AHLAN15',pct:15,min:200,active:false,demo:true}
  ];
  const settings={storeName:'مستودع العزيزية',announce:'شحن مجاني للطلبات فوق 300 ريال — أسعار تجريبية للعرض فقط',whatsapp:'966500000000',maintenance:false,ga4:'',social:{tiktok:'https://vt.tiktok.com/ZSsR8X66J/',instagram:'',x:'',snapchat:'',youtube:''}};
  const analytics={visitors:{},views:{},productViews:{},sources:{},daily:{}};
  const st={v:SEED_VERSION,products,customers,orders,wholesaleRequests,coupons,settings,analytics,cart:[],nextOrder:10262};
  localStorage.setItem(KEY,JSON.stringify(st));
  return st;
}

function unitPrice(p,qty){
  let pr=p.price;
  (p.tiers||[]).forEach(t=>{ if(qty>=t[0]) pr=t[1]; });
  return pr;
}
function load(){
  try{
    const s=JSON.parse(localStorage.getItem(KEY));
    if(s&&s.v===SEED_VERSION) return s;
  }catch(e){}
  return seed();
}
function save(s){ localStorage.setItem(KEY,JSON.stringify(s)); }
function fmt(n){ return (Math.round(n*100)/100).toLocaleString('ar-SA-u-nu-latn',{maximumFractionDigits:2}); }
function sar(n){ return fmt(n)+' ر.س'; }
function emojiUrl(e){ return 'emoji/'+e+'.svg'; }
function ago(ts){
  const d=(Date.now()-ts)/1000;
  if(d<3600) return 'قبل '+Math.max(1,Math.floor(d/60))+' دقيقة';
  if(d<86400) return 'قبل '+Math.floor(d/3600)+' ساعة';
  return 'قبل '+Math.floor(d/86400)+' يوم';
}
function dateAr(ts){ return new Date(ts).toLocaleDateString('ar-SA',{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}); }
const STATUS_AR={new:'جديد',preparing:'قيد التجهيز',shipped:'تم الشحن',transit:'في الطريق',delivered:'تم التوصيل',cancelled:'ملغي'};
const STATUS_FLOW=['new','preparing','shipped','transit','delivered'];

/* تتبع مشاهدات تجريبي داخل المتصفح + خطاف GA4 عند ربطه من الإعدادات */
function dayKey(ts){return new Date(ts||Date.now()).toISOString().slice(0,10);}
function trackView(s,page){
  if(!s.analytics)s.analytics={visitors:{},views:{},productViews:{},sources:{},daily:{}};
  const a=s.analytics;
  let vid=localStorage.getItem(KEY+'_vid');
  if(!vid){vid='v'+Math.random().toString(36).slice(2,10);localStorage.setItem(KEY+'_vid',vid);}
  const now=Date.now();
  const dk=dayKey(now);
  const v=a.visitors[vid]||(a.visitors[vid]={first:now,visits:0});
  if(!v.last||now-v.last>30*60000)v.visits++;
  v.last=now;
  a.views[page]=(a.views[page]||0)+1;
  if(page.indexOf('product:')===0){var pid=page.slice(8);a.productViews[pid]=(a.productViews[pid]||0)+1;}
  const dk0=a.daily[dk]||(a.daily[dk]={views:0,visitors:[]});
  dk0.views++;
  if(dk0.visitors.indexOf(vid)<0)dk0.visitors.push(vid);
  let src='مباشر';
  try{var r=document.referrer;if(r){var h=new URL(r).hostname;src=h.indexOf('tiktok')>=0?'تيك توك':(h.indexOf('instagram')>=0?'انستقرام':(h.indexOf('twitter')>=0||h.indexOf('x.com')>=0?'إكس (تويتر)':(h.indexOf('google')>=0?'قوقل':h)));}}catch(e){}
  a.sources[src]=(a.sources[src]||0)+1;
  return vid;
}
function ga4Hook(s){
  const id=s.settings&&s.settings.ga4;
  if(!id||!/^G-[A-Z0-9]+$/i.test(id))return;
  const g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);
  document.head.appendChild(g);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
  window.gtag('js',new Date());window.gtag('config',id);
}

window.AZ={KEY,CATEGORIES,load,save,unitPrice,fmt,sar,emojiUrl,ago,dateAr,STATUS_AR,STATUS_FLOW,seed,trackView,ga4Hook,dayKey};
})();
