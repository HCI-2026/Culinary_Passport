/* =========================================================
   Around the World in 80 Dishes: script.js
   Part 1: the culinary passport (stamps, filters, globe spin, country info,
           postcards, passport stats, boarding passes, dish photos)
   Part 2: gastronomy & gastrodiplomacy (food stories, fusion, ingredient journeys,
           etiquette, phrases, quiz, diplomacy, UNESCO) and the passport pages
   ========================================================= */
"use strict";

/* =========================================================
   PART 1: culinary passport
   ========================================================= */
const REG={AS:"Asia",ME:"Middle East",AF:"Africa",EU:"Europe",AM:"Americas",OC:"Oceania"};
const RCODE={AS:"ASI",ME:"MDE",AF:"AFR",EU:"EUR",AM:"AMR",OC:"OCE"};
/* name | country | ISO code | region | spice 0–3 | description | best paired with */
const RAW=`Pad Thai|Thailand|TH|AS|1|Rice noodles stir-fried with tamarind, egg, tofu and shrimp, finished with crushed peanuts and a squeeze of lime.|Thai iced tea or a cold Singha beer
Tom Yum Goong|Thailand|TH|AS|3|A hot and sour shrimp soup perfumed with lemongrass, galangal, kaffir lime leaf and bird's eye chili.|Steamed jasmine rice and lemongrass iced tea
Som Tam|Thailand|TH|AS|3|Green papaya pounded in a clay mortar with chili, lime, fish sauce, palm sugar and peanuts.|Sticky rice and gai yang grilled chicken
Ramen|Japan|JP|AS|1|Springy wheat noodles in broth simmered for hours, topped with chashu pork, a soft egg and nori.|Pan-fried gyoza and a cold Japanese lager
Sushi|Japan|JP|AS|0|Seasoned vinegared rice paired with raw fish, shaped by hand in a few quick, precise moves.|Green tea or chilled junmai sake
Okonomiyaki|Japan|JP|AS|0|Osaka's savory cabbage pancake, griddled and brushed with sweet sauce, mayo and bonito flakes.|A whisky highball or cold Japanese beer
Pho|Vietnam|VN|AS|1|Beef broth spiced with star anise and cinnamon, poured over rice noodles and topped with fresh herbs.|Vietnamese iced coffee (cà phê sữa đá)
Bánh Mì|Vietnam|VN|AS|1|A crackly baguette stuffed with pâté, grilled pork, pickled carrot, cilantro and chili.|Fresh sugarcane juice with kumquat
Bibimbap|South Korea|KR|AS|2|Rice topped with seasoned vegetables, beef and a fried egg, stirred together with gochujang.|Doenjang soup and roasted barley tea
Kimchi Jjigae|South Korea|KR|AS|2|A bubbling stew of well-aged kimchi, pork belly and tofu, served in its stone pot.|Steamed rice and a chilled shot of soju
Peking Duck|China|CN|AS|0|Lacquered roast duck carved tableside and wrapped in thin pancakes with scallion and hoisin.|Jasmine tea or a light Chinese lager
Xiaolongbao|China|CN|AS|0|Shanghai soup dumplings with 18 pleats, each holding a mouthful of hot pork broth.|Black vinegar with ginger, and oolong tea
Mapo Tofu|China|CN|AS|3|Silken tofu in Sichuan chili bean sauce with minced pork and numbing peppercorns.|Steamed rice and chrysanthemum tea
Nasi Lemak|Malaysia|MY|AS|2|Coconut rice with sambal, fried anchovies, peanuts, cucumber and a boiled egg, often wrapped in banana leaf.|Teh tarik (frothy pulled milk tea)
Rendang|Indonesia|ID|AS|2|Beef slow-cooked for hours in coconut milk and spices until nearly dry and deeply caramelized.|Steamed rice and es teh manis (sweet iced tea)
Adobo|Philippines|PH|AS|0|Chicken or pork braised in vinegar, soy sauce, garlic and bay leaf. Every family has its own version.|Garlic fried rice and calamansi juice
Butter Chicken|India|IN|AS|1|Tandoor-charred chicken folded into a velvety tomato, butter and cream sauce from Delhi.|Garlic naan and a mango lassi
Masala Dosa|India|IN|AS|1|A thin, crisp fermented rice crêpe wrapped around spiced potato, served with sambar and chutney.|Coconut chutney and South Indian filter coffee
Hyderabadi Biryani|India|IN|AS|2|Layers of saffron basmati and marinated meat sealed in a pot and cooked slowly over low heat.|Mirchi ka salan and cooling cucumber raita
Momo|Nepal|NP|AS|2|Steamed dumplings filled with spiced meat or vegetables, dipped in a fiery tomato achar.|Masala chiya (spiced milk tea)
Hainanese Chicken Rice|Singapore|SG|AS|1|Poached chicken over rice cooked in chicken fat, with chili, ginger and dark soy on the side.|Clear chicken broth and barley water
Plov|Uzbekistan|UZ|AS|0|Rice cooked in a huge kazan with lamb, yellow carrots, cumin and whole heads of garlic.|Green tea and achichuk tomato-onion salad
Hummus|Lebanon|LB|ME|0|Chickpeas blended smooth with tahini, lemon and garlic, swirled and topped with olive oil.|Warm pita and fresh mint lemonade
Tabbouleh|Lebanon|LB|ME|0|A bright salad of finely chopped parsley, mint, tomato and a little bulgur, dressed with lemon.|Grilled halloumi and a glass of arak
Shawarma|Syria|SY|ME|1|Spiced meat stacked on a vertical spit, shaved thin and rolled into flatbread with garlic sauce.|Pickled turnips and ayran
Mansaf|Jordan|JO|ME|0|Lamb cooked in fermented dried yogurt, served over rice and flatbread for celebrations.|Arabic coffee spiced with cardamom
Kebab Koobideh|Iran|IR|ME|0|Minced lamb kebabs grilled over charcoal, served with saffron rice and a charred tomato.|Doogh (minty yogurt drink) and grilled tomato
Fesenjan|Iran|IR|ME|0|Chicken stewed in ground walnuts and pomegranate molasses, sweet and tart at once.|Saffron chelow rice and black tea
Lahmacun|Turkey|TR|ME|1|Paper-thin flatbread spread with spiced minced meat, rolled up with parsley and lemon.|Cold ayran and a squeeze of lemon
Baklava|Turkey|TR|ME|0|Layers of buttered filo and pistachios soaked in syrup, cut into neat diamonds.|Turkish coffee
Kabsa|Saudi Arabia|SA|ME|1|Spiced rice with chicken or lamb, dried lime, raisins and toasted almonds.|Laban and Medjool dates
Masgouf|Iraq|IQ|ME|0|Carp split open and grilled upright beside an open fire, a Baghdad riverside tradition.|Amba mango pickle and Iraqi chai
Jollof Rice|Nigeria|NG|AF|2|Rice cooked in a smoky tomato and pepper base. West Africa argues over whose is best.|Fried plantain and zobo hibiscus drink
Suya|Nigeria|NG|AF|3|Skewered beef rubbed with a peanut and chili spice blend, grilled at night street stalls.|Sliced raw onion, tomato and a cold lager
Doro Wat|Ethiopia|ET|AF|3|Chicken and eggs stewed in berbere spice and spiced butter, scooped up with spongy injera.|Injera and tej honey wine
Tagine|Morocco|MA|AF|1|Lamb with preserved lemon and olives, slow-cooked under a cone-shaped clay lid.|Khobz bread and Moroccan mint tea
Koshari|Egypt|EG|AF|1|Rice, lentils and macaroni layered with tomato sauce, chickpeas and crispy fried onions.|Karkadeh (chilled hibiscus tea)
Ful Medames|Egypt|EG|AF|0|Fava beans simmered overnight, mashed with cumin, lemon and olive oil for breakfast.|Aish baladi bread and sweet black tea
Bobotie|South Africa|ZA|AF|1|Curried minced meat with dried fruit, baked under a golden egg custard.|Yellow raisin rice and a South African Chenin Blanc
Bunny Chow|South Africa|ZA|AF|3|A hollowed-out loaf of bread filled with curry, born in Durban's Indian community.|Grated carrot salad and ginger beer
Shakshuka|Tunisia|TN|AF|2|Eggs poached in a spiced tomato and pepper sauce, served in the pan with bread.|Crusty bread and mint tea
Thieboudienne|Senegal|SN|AF|1|Senegal's national dish of fish, broken rice and vegetables in a rich tomato sauce.|Bissap (sweet hibiscus juice)
Nyama Choma|Kenya|KE|AF|1|Goat or beef roasted slowly over coals, eaten with kachumbari salad and ugali.|Ugali, kachumbari and a cold Kenyan lager
Piri-Piri Chicken|Mozambique|MZ|AF|3|Chicken marinated in African bird's eye chili, garlic and lemon, then flame-grilled.|Fries and a crisp, ice-cold lager
Paella|Spain|ES|EU|0|Saffron rice cooked wide and shallow in Valencia, prized for its crisp socarrat crust.|Valencian horchata or a crisp white wine
Gazpacho|Spain|ES|EU|0|A chilled Andalusian soup of blended tomato, cucumber, pepper, garlic and olive oil.|Jamón ibérico and a glass of fino sherry
Pizza Napoletana|Italy|IT|EU|0|A soft, blistered crust baked for 90 seconds at about 485°C, topped with San Marzano and mozzarella.|A cold Italian lager or a glass of Aglianico
Carbonara|Italy|IT|EU|0|Pasta with guanciale, egg yolk, pecorino and black pepper. No cream in the Roman original.|A glass of Frascati white wine
Risotto alla Milanese|Italy|IT|EU|0|Carnaroli rice stirred slowly with stock, saffron and butter until creamy and golden.|Osso buco and a Lombardy red
Coq au Vin|France|FR|EU|0|Chicken braised in red Burgundy with lardons, mushrooms and pearl onions.|A glass of red Burgundy
Bouillabaisse|France|FR|EU|0|Marseille's fisherman's stew with saffron and fennel, served with rouille on toast.|Rouille toast and a Provence rosé
Fish and Chips|United Kingdom|GB|EU|0|Battered cod or haddock with thick-cut chips, salt and malt vinegar, wrapped in paper.|Mushy peas and a pint of bitter
Moussaka|Greece|GR|EU|0|Layers of fried aubergine and spiced lamb under a thick blanket of béchamel.|Greek salad and a glass of Agiorgitiko
Pierogi|Poland|PL|EU|0|Half-moon dumplings stuffed with potato and cheese, boiled then fried with onions.|Sour cream and kompot (fruit drink)
Goulash|Hungary|HU|EU|1|Beef and paprika soup-stew from the herdsmen of the Hungarian plains.|Crusty bread and Egri Bikavér red
Wiener Schnitzel|Austria|AT|EU|0|Veal pounded thin, breaded and fried until the crust puffs away from the meat.|Potato salad and Grüner Veltliner
Pastel de Nata|Portugal|PT|EU|0|Flaky custard tarts, blistered black on top, best eaten warm with cinnamon.|A bica (Lisbon espresso)
Borscht|Ukraine|UA|EU|0|Beetroot soup with cabbage and potato, ruby red and topped with sour cream and dill.|Pampushky garlic buns
Cheese Fondue|Switzerland|CH|EU|0|Gruyère and vacherin melted with white wine in a shared pot, for dipping bread cubes.|Hot black tea or a Swiss white wine
Smørrebrød|Denmark|DK|EU|0|Open sandwiches on dense rye, topped with herring, egg, shrimp or roast beef.|Aquavit and a cold Danish pilsner
Irish Stew|Ireland|IE|EU|0|Lamb, potatoes, onions and carrots cooked slowly in one pot.|Soda bread and a pint of stout
Moules-Frites|Belgium|BE|EU|0|A pot of mussels steamed in white wine and shallots, with crisp fries for dipping.|A Belgian blonde ale
Tacos al Pastor|Mexico|MX|AM|2|Achiote-marinated pork shaved from a trompo with pineapple, onion and cilantro.|Horchata or agua de jamaica
Mole Poblano|Mexico|MX|AM|1|A dark sauce of over 20 ingredients, including chilies, spices and chocolate, over turkey.|Mexican red rice and hot chocolate
Ceviche|Peru|PE|AM|2|Raw fish cured in lime juice with ají, red onion and sweet potato on the side.|A pisco sour
Lomo Saltado|Peru|PE|AM|1|A Chinese-Peruvian stir-fry of beef, onion and tomato served with fries and rice.|Chicha morada (purple corn drink)
Feijoada|Brazil|BR|AM|0|Black bean stew with assorted pork, served with rice, collards and orange slices.|Farofa, orange slices and a caipirinha
Pão de Queijo|Brazil|BR|AM|0|Chewy cheese bread rolls made with cassava flour, naturally gluten-free.|A cafezinho (small, strong coffee)
Asado|Argentina|AR|AM|0|A weekend gathering around the parrilla, with beef ribs, chorizo and chimichurri.|Chimichurri and a glass of Malbec
Arepas|Venezuela|VE|AM|0|Griddled cornmeal cakes split open and stuffed with shredded beef, black beans or cheese.|Papelón con limón (cane sugar lemonade)
Poutine|Canada|CA|AM|0|Fries topped with squeaky cheese curds and smothered in hot gravy. A Québec classic.|A cold Canadian lager
Texas Brisket|United States|US|AM|0|Beef brisket smoked over post oak for 12 hours or more until it has a dark bark.|Pickles, white bread and sweet tea
Gumbo|United States|US|AM|2|A Louisiana stew built on a dark roux with okra, sausage and seafood, served over rice.|Potato salad and a cold Louisiana lager
Jerk Chicken|Jamaica|JM|AM|3|Chicken marinated in scotch bonnet and allspice, smoked over pimento wood.|Rice and peas with sorrel drink
Ropa Vieja|Cuba|CU|AM|0|Shredded beef braised with peppers, onion and tomato. The name means "old clothes."|Black beans, white rice and a mojito
Pupusas|El Salvador|SV|AM|1|Thick corn tortillas stuffed with cheese, beans or pork, served with curtido slaw.|Curtido slaw and horchata
Meat Pie|Australia|AU|OC|0|A hand-sized pastry filled with minced beef and gravy, eaten at the footy with tomato sauce.|Tomato sauce and a flat white
Pavlova|New Zealand|NZ|OC|0|A crisp meringue with a marshmallow center, topped with cream and kiwifruit.|Passionfruit and a glass of sparkling wine
Hāngī|New Zealand|NZ|OC|0|A Māori feast of meat and vegetables cooked for hours in an earth oven over hot stones.|Rēwena (Māori potato bread)
Kokoda|Fiji|FJ|OC|1|Raw fish marinated in citrus and finished in fresh coconut cream with chili and tomato.|Fresh coconut water`;
/* ISO code | capital | currency code | currency name */
const COUNTRY_RAW=`TH|Bangkok|THB|Thai baht
JP|Tokyo|JPY|Japanese yen
VN|Hanoi|VND|Vietnamese dong
KR|Seoul|KRW|South Korean won
CN|Beijing|CNY|Chinese yuan
MY|Kuala Lumpur|MYR|Malaysian ringgit
ID|Jakarta|IDR|Indonesian rupiah
PH|Manila|PHP|Philippine peso
IN|New Delhi|INR|Indian rupee
NP|Kathmandu|NPR|Nepalese rupee
SG|Singapore|SGD|Singapore dollar
UZ|Tashkent|UZS|Uzbekistani som
LB|Beirut|LBP|Lebanese pound
SY|Damascus|SYP|Syrian pound
JO|Amman|JOD|Jordanian dinar
IR|Tehran|IRR|Iranian rial
TR|Ankara|TRY|Turkish lira
SA|Riyadh|SAR|Saudi riyal
IQ|Baghdad|IQD|Iraqi dinar
NG|Abuja|NGN|Nigerian naira
ET|Addis Ababa|ETB|Ethiopian birr
MA|Rabat|MAD|Moroccan dirham
EG|Cairo|EGP|Egyptian pound
ZA|Pretoria|ZAR|South African rand
TN|Tunis|TND|Tunisian dinar
SN|Dakar|XOF|West African CFA franc
KE|Nairobi|KES|Kenyan shilling
MZ|Maputo|MZN|Mozambican metical
ES|Madrid|EUR|Euro
IT|Rome|EUR|Euro
FR|Paris|EUR|Euro
GB|London|GBP|Pound sterling
GR|Athens|EUR|Euro
PL|Warsaw|PLN|Polish złoty
HU|Budapest|HUF|Hungarian forint
AT|Vienna|EUR|Euro
PT|Lisbon|EUR|Euro
UA|Kyiv|UAH|Ukrainian hryvnia
CH|Bern|CHF|Swiss franc
DK|Copenhagen|DKK|Danish krone
IE|Dublin|EUR|Euro
BE|Brussels|EUR|Euro
MX|Mexico City|MXN|Mexican peso
PE|Lima|PEN|Peruvian sol
BR|Brasília|BRL|Brazilian real
AR|Buenos Aires|ARS|Argentine peso
VE|Caracas|VES|Venezuelan bolívar
CA|Ottawa|CAD|Canadian dollar
US|Washington, D.C.|USD|US dollar
JM|Kingston|JMD|Jamaican dollar
CU|Havana|CUP|Cuban peso
SV|San Salvador|USD|US dollar
AU|Canberra|AUD|Australian dollar
NZ|Wellington|NZD|New Zealand dollar
FJ|Suva|FJD|Fijian dollar`;
const DISHES=RAW.split("\n").map((l,i)=>{const [n,c,cc,r,s,d,p]=l.split("|");return{i,n,c,cc,r,s:+s,d,p}});
const CINFO={};COUNTRY_RAW.split("\n").forEach(l=>{const [cc,cap,cur,curName]=l.split("|");CINFO[cc]={cap,cur,curName}});

const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* ---------- state: {index:{s:"wish"|"tasted", d:"08 OCT 26", t:ms}} ---------- */
const KEY="80dishes_v2",OLD_KEY="80dishes";
const today=()=>new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"2-digit"}).toUpperCase();
function loadState(){
  try{const v=JSON.parse(store.get(KEY)||"null");if(v&&typeof v==="object")return v}catch(e){}
  const st={};  // migrate v1 stamps ({index:"date"}); the old key is left untouched as a backup
  try{const o=JSON.parse(store.get(OLD_KEY)||"{}")||{};for(const k in o){if(DISHES[+k])st[k]={s:"tasted",d:String(o[k]),t:Date.now()}}}catch(e){}
  return st;
}
let ST=loadState();
const save=()=>store.set(KEY,JSON.stringify(ST));
save();
const status=i=>ST[i]?ST[i].s:"none";
const countOf=s=>Object.values(ST).filter(v=>v.s===s).length;
const regionDishes=r=>DISHES.filter(d=>d.r===r);
const regionDone=r=>regionDishes(r).every(d=>status(d.i)==="tasted");
function regionDate(r){let best=null;regionDishes(r).forEach(d=>{const v=ST[d.i];if(v&&v.s==="tasted"&&(!best||(v.t||0)>=(best.t||0)))best=v});return best?best.d:today()}

/* ---------- elements ---------- */
const grid=$("#grid"),chips=$("#chips"),q=$("#q");
let region="ALL";
if(reduce){const f=$("#fly");f&&f.remove();$("#plane").setAttribute("transform","translate(420 90) rotate(-30)")}

let tt;function toast(m,special){const t=$("#toast");t.textContent=m;t.classList.toggle("special",!!special);t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),special?4200:2400)}

/* ---------- chips ---------- */
function chipHTML(){
  const list=[["ALL","All",null,80],...Object.entries(REG).map(([k,v])=>[k,v,`var(--r-${k})`,regionDishes(k).length]),["WISH","Wishlist","var(--blue)",countOf("wish")]];
  chips.innerHTML=list.map(([k,v,c,n])=>`<button class="chip${k==="WISH"?" wishchip":""}" type="button" data-r="${k}" aria-pressed="${k===region}" ${c?`style="--c:${c}"`:""}>${c?'<span class="dot"></span>':""}${v} <span class="n">${n}</span></button>`).join("");
}

/* ---------- cards ---------- */
const chili=s=>[0,1,2].map(k=>k<s?"●":`<span class="off">●</span>`).join("");
const TURN_SVG='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>';
const pm=(d,fresh)=>`<div class="postmark${fresh?" thud":""}" aria-hidden="true"><div>TASTED<span>✓</span>${esc(ST[d.i].d)}</div></div>`;
function label(d,flipped){const s=status(d.i);return `${d.n}, ${d.c}${s==="tasted"?", tasted":s==="wish"?", on your wishlist":""}. ${flipped?"Turn back":"Turn over"}`}
function cardHTML(d,k,o={}){
  const s=status(d.i),tilt=((d.i*37)%5-2)+"deg";
  const seg=[["none","Untasted"],["wish","Wishlist"],["tasted","Tasted"]].map(([v,t])=>`<button type="button" data-act="${v}" aria-pressed="${s===v}">${t}</button>`).join("");
  return `<div class="card${s==="tasted"?" done":""}${s==="wish"?" wish":""}${o.flipped?" flipped":""}" tabindex="0" role="button" aria-label="${esc(label(d,o.flipped))}" data-i="${d.i}" style="--i:${k};--tilt:${tilt};--tone:var(--r-${d.r})">
  <div class="inner">
    <div class="face front">
      <div class="no"><span>No. ${String(d.i+1).padStart(2,"0")}</span><span>${REG[d.r].toUpperCase()}</span></div>
      <div class="plate${PHOTOS[d.i]?" has":""}"><div class="rays"></div>${photoHTML(d)}<div class="cc">${d.cc}</div><span class="flip-hint" aria-hidden="true">${TURN_SVG}<em>Turn over</em></span></div>
      <h3>${esc(d.n)}</h3>
      <div class="where"><span>${esc(d.c)}</span><span class="chili" title="Spice ${d.s} of 3">${chili(d.s)}</span></div>
      ${s==="tasted"?pm(d,o.fresh):""}
      ${s==="wish"?'<div class="ribbon" aria-hidden="true">Want to try</div>':""}
    </div>
    <div class="face back"${o.flipped?"":" inert"}>
      <div class="bk-top"><span class="lbl">${esc(d.c)} · Spice ${d.s}/3</span><button type="button" class="turn" data-act="turn" aria-label="Turn ${esc(d.n)} back to the front" title="Turn back">${TURN_SVG}</button></div>
      <h4>${esc(d.n)}</h4>
      <p class="desc">${esc(d.d)}</p>
      <div class="pair"><span>Best paired with</span>${esc(d.p)}</div>
      <div class="seg" role="group" aria-label="Your status for ${esc(d.n)}">${seg}</div>
      <div class="acts"><button type="button" class="story" data-act="story">Read the food story</button><button type="button" data-act="info">Country info</button><button type="button" data-act="share">Share postcard</button></div>
    </div>
  </div></div>`;
}
/* search matches dish, country, region and the dish's key ingredient (from the food stories) */
function hay(d){const s=typeof STORY!=="undefined"&&STORY[d.i];return (d.n+" "+d.c+" "+REG[d.r]+" "+(s?s.ing:"")).toLowerCase()}
function visible(){
  const t=q.value.trim().toLowerCase();
  return DISHES.filter(d=>(region==="ALL"||(region==="WISH"?status(d.i)==="wish":d.r===region))&&(!t||hay(d).includes(t)));
}
/* the grid shows a few rows at a time so the page stays short; "Show more" adds the next rows */
let shown=0;
/* columns follow the grid rule: auto-fill, 205px minimum, 22px gap */
const pageSize=()=>{const w=grid.clientWidth||$("#pages").clientWidth;return Math.max(8,Math.max(1,Math.floor((w+22)/227))*4)};
function moreHTML(n,total){
  const p=Math.min(pageSize(),total-n);
  return `<div class="more-row"><p>Showing ${n} of ${total} dishes</p><div class="more-btns"><button type="button" class="more" data-more="page">Show ${p} more</button>${total-n>p?`<button type="button" class="more ghost" data-more="all">Show all ${total}</button>`:""}</div></div>`;
}
function updateShowing(n){
  const t=q.value.trim(),scope=region==="ALL"?"all regions":region==="WISH"?"your wishlist":REG[region],filtered=region!=="ALL"||t;
  $("#showing").innerHTML=`<span><b>${n}</b> ${n===1?"dish":"dishes"}${t?` matching “${esc(t)}”`:""} in ${scope}</span>${filtered?`<button type="button" class="reset" data-clear>Show all 80 dishes</button>`:`<span class="showing-tip">Tap a stamp to turn it over</span>`}`;
}
function render(animate=true,keep=false){
  if(!keep)shown=pageSize();
  const go=()=>{
    const v=visible(),list=v.slice(0,shown);
    grid.innerHTML=v.length?list.map((d,k)=>cardHTML(d,Math.min(k,40))).join("")+(v.length>list.length?moreHTML(list.length,v.length):""):
      `<div class="empty"><p>${region==="WISH"&&!q.value?"Your wishlist is empty. Turn over a stamp and tap “Wishlist” to save a dish for later.":"No dishes match that search. Try a country, like “Peru”, or an ingredient, like “saffron”."}</p>${region!=="ALL"||q.value?`<button type="button" class="btn" data-clear>Show all 80 dishes</button>`:""}</div>`;
    updateShowing(v.length);
  };
  const old=grid.querySelectorAll(".card");
  if(animate&&old.length&&!reduce){old.forEach(c=>c.classList.add("out"));setTimeout(go,220)}else go();
}
function showMore(all){
  const v=visible(),start=grid.querySelectorAll(".card").length;
  shown=all?v.length:Math.min(v.length,start+pageSize());
  grid.querySelector(".more-row")?.remove();
  grid.insertAdjacentHTML("beforeend",v.slice(start,shown).map((d,k)=>cardHTML(d,k)).join("")+(v.length>shown?moreHTML(shown,v.length):""));
  grid.querySelectorAll(".card")[start]?.focus({preventScroll:true});
}
/* make sure a dish's stamp is on the page (used by Spin the globe and by links from other sections) */
function ensureShown(i){
  const v=visible(),p=v.findIndex(d=>d.i===i);
  if(p<0||p<grid.querySelectorAll(".card").length)return;
  const ps=pageSize();shown=Math.ceil((p+1)/ps)*ps;render(false,true);
}
function clearFilters(){q.value="";if(region!=="ALL")setRegion("ALL");else render(false);q.focus({preventScroll:true})}
document.addEventListener("click",e=>{if(e.target.closest("[data-clear]"))clearFilters()});
function updateLog(){
  const n=countOf("tasted");
  $("#count").textContent=n;$("#meter").style.width=(n/80*100)+"%";
  $("#wishCount").textContent=countOf("wish");
}
function flip(card,force){
  const on=force===undefined?!card.classList.contains("flipped"):force;
  card.classList.toggle("flipped",on);
  const back=card.querySelector(".back");if(back)back.inert=!on;
  const d=DISHES[+card.dataset.i];card.setAttribute("aria-label",label(d,on));
}
function replaceCard(card,i,o){
  const tmp=document.createElement("div");tmp.innerHTML=cardHTML(DISHES[i],card.style.getPropertyValue("--i"),o);
  const nc=tmp.firstElementChild;nc.style.animation="none";card.replaceWith(nc);nc.focus({preventScroll:true});
}
function changeStatus(i,s,card){
  const d=DISHES[i],prev=status(i);if(prev===s)return;
  const wasDone=regionDone(d.r);
  if(s==="none")delete ST[i];else ST[i]={s,d:today(),t:Date.now()};
  save();updateLog();chipHTML();
  replaceCard(card,i,s==="tasted"?{fresh:true}:{flipped:true});
  if(s==="tasted"){
    const n=countOf("tasted");
    toast(n===80?"All 80 dishes. You've eaten your way around the world!":`Stamped: ${d.n}, ${d.c}`,n===80);
    if(!wasDone&&regionDone(d.r))setTimeout(()=>openPass(d.r,true),reduce?0:900);
  }else toast(s==="wish"?`Added ${d.n} to your wishlist`:`${d.n} is back to untasted`);
}

grid.addEventListener("click",e=>{
  const m=e.target.closest("[data-more]");if(m){showMore(m.dataset.more==="all");return}
  const b=e.target.closest("[data-act]");
  if(b){
    e.stopPropagation();
    const card=b.closest(".card"),i=+card.dataset.i,a=b.dataset.act;
    if(a==="turn"){flip(card,false);card.focus({preventScroll:true});return}
    if(a==="info")openInfo(i);else if(a==="share")openShare(i);else if(a==="story")openStory(i);else changeStatus(i,a,card);
    return;
  }
  if(e.target.closest("a"))return;
  const c=e.target.closest(".card");if(c)flip(c);
});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("card")){e.preventDefault();flip(e.target)}});

/* ---------- hero: clickable World ---------- */
const HERO={ALL:["World",true],AS:["Asia",false],ME:["Middle East",true],AF:["Africa",false],EU:["Europe",false],AM:["Americas",true],OC:["Oceania",false]};
let numNow=80,numRaf;
function countTo(n){
  const el=$("#num"),from=numNow,t0=performance.now(),dur=reduce?0:700;numNow=n;
  cancelAnimationFrame(numRaf);el.classList.remove("bump");void el.offsetWidth;el.classList.add("bump");
  const tick=t=>{const p=dur?Math.min(1,(t-t0)/dur):1,e=1-Math.pow(1-p,3);el.textContent=Math.round(from+(n-from)*e);if(p<1)numRaf=requestAnimationFrame(tick)};
  numRaf=requestAnimationFrame(tick);
}
function setHero(r){
  const [word,useThe]=HERO[r],w=$("#wtxt"),btn=$("#world");
  btn.style.setProperty("--wc",r==="ALL"?"var(--ink)":`var(--r-${r})`);
  btn.setAttribute("aria-label",`${word}. Tap to travel to a random region`);
  $("#the").classList.toggle("gone",!useThe);
  const swap=()=>{w.textContent=word;w.classList.remove("out");if(!reduce){w.classList.add("in");setTimeout(()=>w.classList.remove("in"),500)}};
  if(reduce)swap();else{w.classList.add("out");setTimeout(swap,280)}
  countTo(r==="ALL"?80:regionDishes(r).length);
}
const CULT={
  ALL:[["🌍","Globe"],["✈️","Flight"],["🧳","Suitcase"],["🧭","Compass"],["🗺️","Map"],["📮","Postbox"]],
  AM:[["🗽","Statue of Liberty"],["🍔","Burger"],["🌮","Taco"],["🦙","Andean llama"],["🍁","Maple leaf"],["🌵","Saguaro cactus"]],
  AS:[["🏯","Japanese castle"],["🐉","Chinese dragon"],["🐘","Thai elephant"],["🛕","Hindu temple"],["🏮","Paper lantern"],["🍜","Noodle soup"]],
  ME:[["🕌","Mosque"],["🐪","Camel"],["🧿","Nazar amulet"],["☕","Arabic coffee"],["🏜️","Desert dunes"],["🫓","Flatbread"]],
  AF:[["🦁","Lion"],["🦒","Giraffe"],["🪘","Djembe drum"],["🦓","Zebra"],["🏺","Egyptian amphora"],["🌶️","Piri-piri chili"]],
  EU:[["🗼","Eiffel Tower"],["🍕","Pizza"],["💂","Royal guard"],["🥐","Croissant"],["🏰","Castle"],["🧀","Swiss cheese"]],
  OC:[["🦘","Kangaroo"],["🐨","Koala"],["🥝","Kiwifruit"],["🏄","Surfing"],["🏝️","Pacific island"],["🐚","Seashell"]]
};
function setCulture(r,first){
  const L=$("#sideL"),R=$("#sideR"),tone=r==="ALL"?"var(--muted)":`var(--r-${r})`;
  const fill=()=>{
    if(r==="ALL"){L.innerHTML=R.innerHTML="";return}  // the whole world shows no regional icons
    const it=CULT[r];
    const html=(arr,off)=>arr.map(([e,t],k)=>`<div class="ci" title="${t}" style="--d:${(k*2+off)*110+(first?500:0)}ms;--rot:${(k%2?1:-1)*(18+k*8)}deg;--rt:${tone}"><span class="em" aria-hidden="true">${e}</span><span class="tag">${t}</span></div>`).join("");
    L.innerHTML=html(it.filter((_,k)=>k%2===0),0);
    R.innerHTML=html(it.filter((_,k)=>k%2===1),1);
  };
  const old=document.querySelectorAll(".ci");
  if(old.length&&!reduce){old.forEach(c=>{c.style.setProperty("--d","0ms");c.classList.add("leave")});setTimeout(fill,300)}else fill();
}
function setRegion(r,anim=true){
  if(r===region)return;region=r;chipHTML();
  if(r!=="WISH"){setHero(r);setCulture(r)}
  render(anim);
}
$("#world").addEventListener("click",()=>{
  const opts=Object.keys(HERO).filter(k=>k!==region&&k!=="ALL");
  setRegion(region!=="ALL"&&region!=="WISH"&&Math.random()<.2?"ALL":opts[Math.floor(Math.random()*opts.length)]);
  toast(region==="ALL"?"Back to the whole world: 80 dishes":`Now exploring ${REG[region]}: ${numNow} dishes`);
});
chips.addEventListener("click",e=>{const b=e.target.closest(".chip");if(b)setRegion(b.dataset.r)});
let qt;q.addEventListener("input",()=>{clearTimeout(qt);qt=setTimeout(()=>render(false),120)});

/* ---------- spin the globe: big dotted globe overlay ---------- */
const BLOBS={ /* rough continent shapes as [lon, lat, radiusLon, radiusLat] ellipses */
  AM:[[-100,48,28,15],[-118,60,22,9],[-150,63,12,6],[-102,23,10,8],[-88,14,7,5],[-62,-8,16,17],[-67,-33,8,14],[-76,2,6,8],[-77,21,5,1.5]],
  EU:[[10,50,15,7],[28,53,13,8],[-4,40,6,4],[13,43,3,5],[18,63,7,9],[-2,54,3,4],[-8,53,2,2],[23,39,3,2]],
  AF:[[15,8,22,12],[25,-12,13,14],[23,-28,8,6],[47,-19,3,6],[8,24,22,8],[38,9,8,6]],
  ME:[[45,24,11,8],[53,32,9,6],[36,33,3,4],[34,39,9,3],[44,33,5,4]],
  AS:[[95,50,40,14],[105,30,18,12],[79,22,8,10],[101,15,5,8],[114,-2,13,5],[138,37,3,6],[122,12,3,5],[65,42,10,6],[135,62,25,10],[127,37,2,3]],
  OC:[[134,-25,17,10],[172,-41,3,6],[178,-17,2.5,2],[145,-6,7,3]]
};
const RCENTER={AS:[100,28],ME:[45,28],AF:[20,2],EU:[12,48],AM:[-82,12],OC:[140,-24]};
let GDOTS=null;
function globeDots(){
  if(GDOTS)return GDOTS;GDOTS=[];
  for(let lat=-78;lat<=80;lat+=3.2){
    const n=Math.max(6,Math.round(360*Math.cos(lat*Math.PI/180)/3.2));
    for(let k=0;k<n;k++){
      const lon=-180+k*360/n;let reg=null;
      for(const [R,bl] of Object.entries(BLOBS)){
        if(bl.some(([x,y,rx,ry])=>{const dx=((lon-x+540)%360)-180;return (dx/rx)**2+((lat-y)/ry)**2<=1})){reg=R;break}
      }
      GDOTS.push({lat,lon,r:reg});
    }
  }
  return GDOTS;
}
function drawGlobe(cv,viewLon,viewLat,hi,pulse){
  const g=cv.getContext("2d"),W=cv.width,R=W/2*0.9,cx=W/2,cy=W/2,cs=getComputedStyle(document.documentElement);
  const col=k=>cs.getPropertyValue(k).trim();
  const tones={};Object.keys(REG).forEach(r=>tones[r]=col("--r-"+r));
  g.clearRect(0,0,W,W);
  const grad=g.createRadialGradient(cx-R*.35,cy-R*.4,R*.1,cx,cy,R);
  grad.addColorStop(0,col("--card"));grad.addColorStop(1,col("--paper"));
  g.fillStyle=grad;g.beginPath();g.arc(cx,cy,R,0,Math.PI*2);g.fill();
  g.strokeStyle=col("--rule");g.lineWidth=W/260;g.stroke();
  const p0=viewLat*Math.PI/180,sp0=Math.sin(p0),cp0=Math.cos(p0),unit=W/520,muted=col("--muted");
  for(const d of globeDots()){
    const l=(d.lon-viewLon)*Math.PI/180,p=d.lat*Math.PI/180,cp=Math.cos(p),spp=Math.sin(p);
    const z=sp0*spp+cp0*cp*Math.cos(l);if(z<=0.02)continue;
    const x=cx+R*cp*Math.sin(l),y=cy-R*(cp0*spp-sp0*cp*Math.cos(l));
    let rad,c,a;
    if(d.r){c=tones[d.r];rad=(2.6+(hi===d.r?pulse*2.2:0))*unit;a=hi&&hi!==d.r?.25:1}
    else{c=muted;rad=1.2*unit;a=.22}
    g.globalAlpha=a*(.35+.65*z);g.fillStyle=c;g.beginPath();g.arc(x,y,rad*(.55+.45*z),0,Math.PI*2);g.fill();
  }
  g.globalAlpha=1;
  const hl=g.createRadialGradient(cx-R*.4,cy-R*.45,0,cx-R*.4,cy-R*.45,R*.9);
  hl.addColorStop(0,"rgba(255,255,255,.22)");hl.addColorStop(1,"rgba(255,255,255,0)");
  g.fillStyle=hl;g.beginPath();g.arc(cx,cy,R,0,Math.PI*2);g.fill();
}
function facing(lon,lat){
  let best=null,bd=1e9;
  for(const [r,[x,y]] of Object.entries(RCENTER)){const dx=Math.abs(((lon-x+540)%360)-180)*Math.cos(lat*Math.PI/180),dd=dx+Math.abs(lat-y);if(dd<bd){bd=dd;best=r}}
  return best;
}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function globeSpin(target){
  return new Promise(resolve=>{
    const ov=$("#globeOv"),cv=$("#globeCv"),lab=$("#globeLabel"),sub=$("#globeSub");
    const S=Math.round(Math.min(innerWidth*.8,innerHeight*.58,520)),dpr=Math.min(2,devicePixelRatio||1);
    cv.style.width=cv.style.height=S+"px";cv.width=cv.height=Math.round(S*dpr);
    ov.className="globe-ov";ov.hidden=false;ov.style.removeProperty("--lc");
    lab.textContent="Spinning…";sub.textContent="Choosing your next region";
    const [tLon,tLat]=RCENTER[target],startLon=Math.random()*360-180,startLat=12;
    let endLon=tLon;while(endLon<startLon+760)endLon+=360;
    const dur=3600;let t0=null,last="";
    drawGlobe(cv,startLon,startLat);
    requestAnimationFrame(()=>ov.classList.add("on"));
    let skip=false;const onKey=e=>{if(e.key==="Escape")skip=true};document.addEventListener("keydown",onKey);
    ov.onclick=()=>{skip=true};
    const spinFrame=t=>{
      if(t0===null)t0=t+350;
      const p=skip?1:Math.max(0,Math.min(1,(t-t0)/dur)),e=1-Math.pow(1-p,4);
      const lon=startLon+(endLon-startLon)*e,lat=startLat+(tLat-startLat)*e;
      drawGlobe(cv,lon,lat);
      const f=facing(lon,lat);if(f!==last&&p<1){last=f;lab.textContent=REG[f];lab.style.setProperty("--lc",`var(--r-${f})`)}
      if(p<1)requestAnimationFrame(spinFrame);else land(lon,lat);
    };
    const land=(lon,lat)=>{
      lab.textContent=REG[target];lab.style.setProperty("--lc",`var(--r-${target})`);
      sub.textContent=`${regionDishes(target).length} dishes to discover`;
      ov.classList.add("landed");
      const l0=performance.now(),pd=skip?300:1300;
      const pulseFrame=t=>{
        const k=Math.min(1,(t-l0)/pd);drawGlobe(cv,lon,lat,target,Math.sin(k*Math.PI*3)*.5+.5);
        if(k<1)requestAnimationFrame(pulseFrame);
        else{ov.classList.add("out");document.removeEventListener("keydown",onKey);ov.onclick=null;
          setTimeout(()=>{ov.hidden=true;ov.className="globe-ov";resolve(target)},450)}
      };
      requestAnimationFrame(pulseFrame);
    };
    requestAnimationFrame(spinFrame);
  });
}
let spinning=false;
$("#spin").addEventListener("click",async()=>{
  if(spinning)return;spinning=true;
  const btn=$("#spin");btn.classList.remove("go");void btn.offsetWidth;btn.classList.add("go");
  const opts=Object.keys(REG).filter(r=>r!==region),target=opts[Math.floor(Math.random()*opts.length)];
  if(!reduce)await globeSpin(target);
  q.value="";
  if(region!==target)setRegion(target,false);
  await wait(reduce?0:300);
  const pool=visible();
  if(!pool.length){spinning=false;return}
  const pickD=pool[Math.floor(Math.random()*pool.length)];ensureShown(pickD.i);
  const cards=[...grid.querySelectorAll(".card")],win=grid.querySelector(`.card[data-i="${pickD.i}"]`);
  win.scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"});
  await wait(reduce?0:500);
  const hops=reduce?0:8;let prev;
  for(let h=0;h<hops;h++){prev&&prev.classList.remove("pick");const c=h===hops-1?win:cards[Math.floor(Math.random()*Math.min(cards.length,8))];c.classList.add("pick");prev=c;await wait(70+h*22)}
  prev&&prev.classList.remove("pick");
  win.classList.add("winner");flip(win,true);win.focus({preventScroll:true});
  const d=DISHES[+win.dataset.i];toast(`Destination ${REG[target]}: next stop ${d.c} for ${d.n}`);
  spinning=false;
});
$("#reset").addEventListener("click",function(){
  if(this.dataset.arm){ST={};save();updateLog();chipHTML();render(false);this.textContent="Clear passport";delete this.dataset.arm;toast("Passport cleared");return}
  this.dataset.arm="1";this.textContent="Tap again to clear stamps and wishlist";
  setTimeout(()=>{if(this.dataset.arm){delete this.dataset.arm;this.textContent="Clear passport"}},3000);
});

/* ---------- dialogs ---------- */
function openDlg(id){const d=$(id);if(!d.open)d.showModal();return d}
document.querySelectorAll("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));

/* ---------- 1. Country info + live currency ---------- */
const BASES=["THB","USD","EUR","GBP","JPY","CNY","KRW","SGD","MYR","INR","AUD","CAD"];
let base=store.get("80d_base")||"THB";if(!BASES.includes(base))base="THB";
const rateMem={};
async function getRates(b){
  if(rateMem[b])return rateMem[b];
  const ck="80d_rates_"+b;
  try{const c=JSON.parse(store.get(ck)||"null");if(c&&c.rates&&Date.now()-c.t<864e5)return(rateMem[b]={...c,cached:true})}catch(e){}
  const res=await fetch(`https://open.er-api.com/v6/latest/${encodeURIComponent(b)}`);
  if(!res.ok)throw new Error("HTTP "+res.status);
  const j=await res.json();
  if(j.result!=="success"||!j.rates)throw new Error("Bad response");
  const v={t:Date.now(),rates:j.rates,updated:j.time_last_update_utc||""};
  store.set(ck,JSON.stringify(v));
  return(rateMem[b]={...v,cached:false});
}
function fmt(x){
  if(!isFinite(x))return"—";
  const a=Math.abs(x);
  return x.toLocaleString("en-US",a>=1000?{maximumFractionDigits:0}:a>=1?{maximumFractionDigits:2}:{maximumSignificantDigits:4});
}
let infoIdx=0;
function openInfo(i){
  infoIdx=i;const d=DISHES[i],ci=CINFO[d.cc];
  const dlg=openDlg("#infoDlg");dlg.style.setProperty("--tone",`var(--r-${d.r})`);
  $("#infoBody").innerHTML=`
    <p class="eyebrow">${REG[d.r]} · ${d.cc}</p>
    <h2 id="infoTitle">${esc(d.c)}</h2>
    <dl class="facts">
      <div><dt>Capital</dt><dd>${esc(ci.cap)}</dd></div>
      <div><dt>Currency</dt><dd><b>${ci.cur}</b> · ${esc(ci.curName)}</dd></div>
      <div><dt>Featured dish</dt><dd>${esc(d.n)}</dd></div>
    </dl>
    <section class="fx" aria-labelledby="fxTitle">
      <div class="fx-head"><h3 id="fxTitle">Live exchange rate</h3>
        <label class="basesel">Base currency
          <select id="baseSel">${BASES.map(b=>`<option${b===base?" selected":""}>${b}</option>`).join("")}</select></label></div>
      <div id="fxOut" class="fx-out" aria-live="polite"><p class="fx-status">Loading rates…</p></div>
    </section>`;
  $("#baseSel").addEventListener("change",e=>{base=e.target.value;store.set("80d_base",base);loadFx()});
  loadFx();
}
async function loadFx(){
  const d=DISHES[infoIdx],cur=CINFO[d.cc].cur,out=$("#fxOut");
  out.innerHTML=`<p class="fx-status">Loading ${base} rates…</p>`;
  if(cur===base){out.innerHTML=`<p class="fx-big">1 ${cur} = 1 ${base}</p><p class="fx-status">${esc(d.c)} uses your base currency, so prices convert one to one.</p>`;return}
  try{
    const r=await getRates(base);
    if(!$("#infoDlg").open||DISHES[infoIdx]!==d)return;
    const perBase=r.rates[cur];
    if(!perBase){out.innerHTML=`<p class="fx-status">The rate service doesn't publish a ${cur} rate right now.</p>`;return}
    const localToBase=1/perBase;
    out.innerHTML=`
      <p class="fx-big"><span>1 ${cur}</span> = <b>${fmt(localToBase)}</b> ${base}</p>
      <p class="fx-rev">1 ${base} = ${fmt(perBase)} ${cur}</p>
      <div class="conv">
        <label for="amt">Amount in ${cur}</label>
        <div class="conv-row"><input id="amt" type="number" min="0" step="any" value="100" inputmode="decimal"><span class="eq">≈ <b id="amtOut">${fmt(100*localToBase)}</b> ${base}</span></div>
      </div>
      <p class="fx-status">${r.cached?"Saved rates":"Fresh rates"} · updated ${esc(r.updated.replace(/ \+0000$/,"").replace(/^\w+, /,""))} UTC · refreshed every 24 hours</p>`;
    $("#amt").addEventListener("input",e=>{$("#amtOut").textContent=fmt((+e.target.value||0)*localToBase)});
  }catch(err){
    out.innerHTML=`<p class="fx-status err">Live rates couldn't load. ${window.top!==window?"This preview blocks outside data, so open the downloaded index.html to see live rates.":"Check your internet connection, then try again."}</p><button type="button" class="btn" id="fxRetry">Try again</button>`;
    $("#fxRetry").addEventListener("click",loadFx);
  }
}

/* ---------- 3. Share postcard ---------- */
let shareIdx=0;
function shareText(d){
  const s=status(d.i),n=countOf("tasted");
  const lead=s==="tasted"?`✈ I just tasted ${d.n} from ${d.c}!`:s==="wish"?`🧭 ${d.n} from ${d.c} is next on my must-try list!`:`🍽 Discovering ${d.n} from ${d.c}.`;
  const url=location.protocol.startsWith("http")&&window.top===window?`\n${location.href.split("#")[0]}`:"";
  return `${lead} ${d.d}\nBest paired with: ${d.p}.\n\nCheck out my culinary passport: ${n}/80 dishes tasted. #AroundTheWorldIn80Dishes${url}`;
}
function openShare(i){
  shareIdx=i;const d=DISHES[i],dlg=openDlg("#shareDlg");
  dlg.style.setProperty("--tone",`var(--r-${d.r})`);
  const ph=PHOTOS[d.i];$("#pcStamp").textContent=ph?"":d.cc;$("#pcStamp").style.backgroundImage=ph?`url("${ph.src}")`:"";$("#pcTitle").textContent=d.n;$("#pcFrom").textContent=`${d.c} · ${REG[d.r]}`;
  const s=status(d.i);$("#pcState").textContent=s==="tasted"?"Tasted":s==="wish"?"On my wishlist":"Discovering";
  $("#shareTxt").value=shareText(d);updateLine();
  $("#shareNative").hidden=!navigator.share;
}
function updateLine(){$("#shareLine").href="https://line.me/R/msg/text/?"+encodeURIComponent($("#shareTxt").value)}
$("#shareTxt").addEventListener("input",updateLine);
$("#shareNative").addEventListener("click",()=>{
  const text=$("#shareTxt").value;
  navigator.share({title:"Around the World in 80 Dishes",text}).then(()=>toast("Postcard shared")).catch(err=>{if(err&&err.name==="AbortError")return;toast("Sharing isn't available here. Use Copy text or LINE instead.")});
});
$("#shareCopy").addEventListener("click",()=>{
  const ta=$("#shareTxt"),text=ta.value;
  const fallback=()=>{ta.focus();ta.select();toast("Text selected. Press Ctrl+C (or ⌘C) to copy.")};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(()=>toast("Postcard text copied"),fallback);else fallback();
});

/* ---------- 4. Passport stats ---------- */
function spiceWord(a){return a<.75?"Mild":a<1.5?"Warm":a<2.25?"Hot":"Fiery"}
function openStats(){
  const tasted=DISHES.filter(d=>status(d.i)==="tasted"),wish=countOf("wish"),pct=Math.round(tasted.length/80*100);
  const avg=tasted.length?tasted.reduce((a,d)=>a+d.s,0)/tasted.length:0;
  const dist=[0,1,2,3].map(k=>tasted.filter(d=>d.s===k).length),maxD=Math.max(1,...dist);
  const L=Math.PI*80;
  const rows=Object.keys(REG).map(r=>{
    const all=regionDishes(r),done=all.filter(d=>status(d.i)==="tasted").length,p=Math.round(done/all.length*100),ok=done===all.length;
    return `<li style="--tone:var(--r-${r})"><div class="rb-top"><span class="rb-name"><i class="dot"></i>${REG[r]}</span><span class="rb-num">${done}/${all.length} · ${p}%</span></div>
      <div class="rb-track" role="progressbar" aria-label="${REG[r]} completion" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${p}"><i style="--w:${p}%"></i></div>
      ${ok?`<button type="button" class="passlink" data-pass="${r}">✈ View boarding pass</button>`:""}</li>`}).join("");
  const ang=-90+180*avg/3;
  const ticks=[0,1,2,3].map(k=>{const th=Math.PI-k*Math.PI/3;return `<text x="${(100+98*Math.cos(th)).toFixed(1)}" y="${(104-98*Math.sin(th)).toFixed(1)}">${k}</text>`}).join("");
  $("#statsBody").innerHTML=`
    <p class="eyebrow">Passport stats</p>
    <h2 id="statsTitle">Your journey so far</h2>
    <div class="tiles">
      <div class="tile"><span class="tl">Tasted</span><b>${tasted.length}<small>/80</small></b></div>
      <div class="tile"><span class="tl">Wishlist</span><b class="blue">${wish}</b></div>
      <div class="tile"><span class="tl">Journey</span><b class="red">${pct}<small>%</small></b></div>
    </div>
    <section><h3>Regional breakdown</h3><ul class="rbars">${rows}</ul></section>
    <section class="spice"><h3>Spice footprint</h3>
      ${tasted.length?`<div class="spice-row">
        <svg class="gauge" viewBox="-12 0 224 120" role="img" aria-label="Average spice ${avg.toFixed(1)} out of 3, ${spiceWord(avg)}">
          <path d="M20 100 A80 80 0 0 1 180 100" class="g-bg"/>
          <path d="M20 100 A80 80 0 0 1 180 100" class="g-val" style="stroke-dasharray:${L.toFixed(1)};--off:${(L*(1-avg/3)).toFixed(1)};--full:${L.toFixed(1)}"/>
          <g class="g-ticks">${ticks}</g>
          <g class="needle" style="--a:${ang.toFixed(1)}deg"><line x1="100" y1="100" x2="100" y2="34"/><circle cx="100" cy="100" r="6"/></g>
        </svg>
        <div class="spice-txt"><b>${avg.toFixed(1)}<small> / 3</small></b><span>${spiceWord(avg)} on average</span>
          <ul class="dist">${dist.map((n,k)=>`<li><span class="chili">${chili(k)}</span><i style="--w:${n/maxD*100}%"></i><em>${n}</em></li>`).join("")}</ul>
        </div></div>`:`<p class="muted">Stamp your first dish to see how much heat you can handle.</p>`}
    </section>`;
  const dlg=openDlg("#statsDlg");
  dlg.querySelectorAll("[data-pass]").forEach(b=>b.addEventListener("click",()=>{dlg.close();openPass(b.dataset.pass,false)}));
  requestAnimationFrame(()=>requestAnimationFrame(()=>dlg.classList.add("go")));
}
$("#statsBtn").addEventListener("click",openStats);
$("#statsDlg").addEventListener("close",()=>$("#statsDlg").classList.remove("go"));

/* ---------- 5. Boarding pass ---------- */
function barcode(seed){
  let h=2166136261;for(const ch of seed){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}
  const bars=[];let x=0;
  while(x<236){h^=h<<13;h^=h>>>17;h^=h<<5;const w=1+((h>>>0)%3),gap=1+((h>>>3)%3);bars.push([x,w]);x+=w+gap}
  return bars;
}
let passR="AS";
function openPass(r,fresh){
  passR=r;const n=regionDishes(r).length,date=regionDate(r),code=RCODE[r];
  const bars=barcode(r+date+n).map(([x,w])=>`<rect x="${x}" y="0" width="${w}" height="44"/>`).join("");
  $("#passBody").innerHTML=`
  <div class="bpass" style="--tone:var(--r-${r})">
    <div class="bp-main">
      <div class="bp-head"><span>Boarding pass</span><span>80 Dishes Air</span></div>
      <div class="bp-route"><div><b>BKK</b><small>Bangkok</small></div><div class="bp-plane" aria-hidden="true">✈</div><div><b>${code}</b><small>${REG[r]}</small></div></div>
      <div class="bp-grid">
        <div><dt>Passenger</dt><dd>Culinary Traveler</dd></div>
        <div><dt>Flight</dt><dd>80D-${r}${String(n).padStart(2,"0")}</dd></div>
        <div><dt>Date</dt><dd>${esc(date)}</dd></div>
        <div><dt>Dishes</dt><dd>${n}/${n}</dd></div>
        <div><dt>Class</dt><dd>Gourmet</dd></div>
        <div><dt>Seat</dt><dd>${n}A</dd></div>
      </div>
      <svg class="bp-bar" viewBox="0 0 236 44" preserveAspectRatio="none" aria-hidden="true">${bars}</svg>
    </div>
    <div class="bp-stub">
      <span class="bp-done">${REG[r]}<br>Completed</span>
      <div><dt>Gate</dt><dd>${code}</dd></div>
      <div><dt>Boarding</dt><dd>Now</dd></div>
    </div>
  </div>`;
  $("#passTitle").textContent=`Boarding pass: ${REG[r]} completed`;
  const dlg=openDlg("#passDlg");
  dlg.classList.toggle("fresh",!!fresh);
  if(fresh){toast(`✈ ${REG[r]} complete! All ${n} dishes stamped. Your boarding pass is ready.`,true);confetti(r)}
}
function confetti(r){
  if(reduce)return;
  const box=$("#passDlg"),c=document.createElement("div");c.className="confetti";c.setAttribute("aria-hidden","true");
  const cols=["var(--red)","var(--blue)",`var(--r-${r})`];
  c.innerHTML=Array.from({length:36},(_,k)=>`<i style="--x:${Math.random()*100}%;--dx:${(Math.random()*2-1)*120}px;--d:${Math.random()*400}ms;--c:${cols[k%3]};--r:${Math.random()*720}deg"></i>`).join("");
  box.appendChild(c);setTimeout(()=>c.remove(),2600);
}
$("#passSave").addEventListener("click",async()=>{
  const r=passR,n=regionDishes(r).length,date=regionDate(r),code=RCODE[r];
  const tones={AS:"#B5462F",ME:"#9C6B1F",AF:"#4A7535",EU:"#2F5E9E",AM:"#8A3D78",OC:"#1F7C7A"},tone=tones[r];
  try{await document.fonts.ready}catch(e){}
  const W=1000,H=400,cv=document.createElement("canvas");cv.width=W*2;cv.height=H*2;
  const g=cv.getContext("2d");g.scale(2,2);
  const serif='"Bodoni Moda", Georgia, serif',mono='"Courier Prime", "Courier New", monospace';
  g.fillStyle="#F9FAFB";g.beginPath();g.roundRect(0,0,W,H,22);g.fill();
  g.fillStyle=tone;g.beginPath();g.roundRect(0,0,W,64,[22,22,0,0]);g.fill();
  g.fillStyle="#fff";g.font=`700 22px ${mono}`;g.fillText("BOARDING PASS",36,41);g.textAlign="right";g.fillText("80 DISHES AIR",W-36,41);g.textAlign="left";
  g.fillStyle="#1C2A48";g.font=`800 92px ${serif}`;g.fillText("BKK",36,180);g.fillText(code,420,180);
  g.fillStyle=tone;g.font=`48px ${serif}`;g.fillText("✈",300,168);
  g.fillStyle="#5A6580";g.font=`18px ${mono}`;g.fillText("BANGKOK",40,210);g.fillText(REG[r].toUpperCase(),424,210);
  const fields=[["PASSENGER","Culinary Traveler"],["FLIGHT",`80D-${r}${String(n).padStart(2,"0")}`],["DATE",date],["DISHES",`${n}/${n}`]];
  fields.forEach(([k,v],j)=>{const x=40+j*175;g.fillStyle="#5A6580";g.font=`14px ${mono}`;g.fillText(k,x,262);g.fillStyle="#1C2A48";g.font=`700 20px ${mono}`;g.fillText(v,x,290)});
  g.fillStyle="#1C2A48";barcode(r+date+n).forEach(([x,w])=>g.fillRect(40+x*2.9,318,w*2.9,52));
  g.setLineDash([6,8]);g.strokeStyle="#CCD3DE";g.lineWidth=2;g.beginPath();g.moveTo(760,64);g.lineTo(760,H);g.stroke();g.setLineDash([]);
  g.save();g.translate(880,230);g.rotate(-0.25);g.strokeStyle="#C23B2E";g.lineWidth=4;g.beginPath();g.arc(0,0,82,0,Math.PI*2);g.stroke();
  g.lineWidth=1.5;g.beginPath();g.arc(0,0,72,0,Math.PI*2);g.stroke();
  g.fillStyle="#C23B2E";g.textAlign="center";g.font=`700 20px ${mono}`;g.fillText(REG[r].toUpperCase(),0,-6);g.fillText("COMPLETED",0,20);g.font=`14px ${mono}`;g.fillText(date,0,44);g.restore();
  const filename=`boarding-pass-${REG[r].toLowerCase().replace(/\s+/g,"-")}.png`;
  const blob=await new Promise(res=>cv.toBlob(res,"image/png"));
  const dl=window.claude&&window.claude.use?await window.claude.use("downloads"):null;
  if(dl){
    try{await dl.save({filename,data:blob});toast("Boarding pass saved",true)}
    catch(err){if(err&&err.code==="declined")return;toast(err&&err.code==="rate_limited"?"A save prompt is already open.":"Saving isn't available here. Take a screenshot of the pass instead.")}
    return;
  }
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=filename;
  document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  toast("Boarding pass image downloaded",true);
});


/* ---------- dish photos: lead images from each dish's Wikipedia article (Wikimedia Commons) ---------- */
/* [image URL, Wikipedia article title] — linked straight from Wikimedia, no lookups at runtime */
const PHOTO_DATA=[["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/500px-Phat_Thai_kung_Chang_Khien_street_stall.jpg", "Pad thai"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Tom_yam_kung_maenam.jpg/500px-Tom_yam_kung_maenam.jpg", "Tom yum"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/2013_Tam_Lao.jpg/500px-2013_Tam_Lao.jpg", "Green papaya salad"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/500px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg", "Ramen"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/500px-Sushi_platter.jpg", "Sushi"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/500px-Okonomiyaki_001.jpg", "Okonomiyaki"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Bowl_of_Meatball_pho.jpg/500px-Bowl_of_Meatball_pho.jpg", "Pho"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png/500px-B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png", "Bánh mì"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/500px-Dolsot-bibimbap.jpg", "Bibimbap"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Korean_stew_dish_-_Kimchi-jjigae_Kimchi_Stew_2019_%2801%29.jpg/500px-Korean_stew_dish_-_Kimchi-jjigae_Kimchi_Stew_2019_%2801%29.jpg", "Kimchi-jjigae"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Peking_Duck%2C_2014_%2802%29.jpg/500px-Peking_Duck%2C_2014_%2802%29.jpg", "Peking duck"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/A_Xiaolongbao_from_The_Modern_Shanghai.jpg/500px-A_Xiaolongbao_from_The_Modern_Shanghai.jpg", "Xiaolongbao"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Chen_Mapo_Tofu.jpg/500px-Chen_Mapo_Tofu.jpg", "Mapo tofu"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg/500px-Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg", "Nasi lemak"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Rendang_daging_sapi_asli_Padang.JPG/500px-Rendang_daging_sapi_asli_Padang.JPG", "Rendang"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Adobo_DSCF4391.jpg/500px-Adobo_DSCF4391.jpg", "Adobo (Filipino dish)"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/500px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg", "Butter chicken"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Masala_Dosa_2023.jpg/500px-Masala_Dosa_2023.jpg", "Masala dosa"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/500px-Hyderabadi_Chicken_Biryani.jpg", "Hyderabadi biryani"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/500px-Momo_nepal.jpg", "Momo (food)"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/500px-Hainanese_Chicken_Rice.jpg", "Hainanese chicken rice"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Afghan_Palo.jpg/500px-Afghan_Palo.jpg", "Pilaf"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/500px-Lebanese_style_hummus.jpg", "Hummus"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Tabouleh_1.JPG/500px-Tabouleh_1.JPG", "Tabbouleh"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Shawarma_2.jpg/500px-Shawarma_2.jpg", "Shawarma"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Mansaf%2C_the_traditional_dish_of_Jordan.jpg/500px-Mansaf%2C_the_traditional_dish_of_Jordan.jpg", "Mansaf"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Kabab_koobideh_bbq_persian_food.jpg/500px-Kabab_koobideh_bbq_persian_food.jpg", "Kabab koobideh"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Khoresht-e_fesenjan.jpg/500px-Khoresht-e_fesenjan.jpg", "Fesenjān"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Lahmacun.jpg/500px-Lahmacun.jpg", "Lahmacun"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%281%29.png/500px-Baklava%281%29.png", "Baklava"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Machboos_%28cropped%29.JPG/500px-Machboos_%28cropped%29.JPG", "Kabsa"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Masgouf.jpg/500px-Masgouf.jpg", "Masgouf"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Jollof_Rice_with_Stew.jpg/500px-Jollof_Rice_with_Stew.jpg", "Jollof rice"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/SuyavarietiesTX.JPG/500px-SuyavarietiesTX.JPG", "Suya"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Ethiopian_wat.jpg/500px-Ethiopian_wat.jpg", "Wat (food)"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Tajine-marocain-un-plat-varie-et-sain_%28cropped%29.jpg/500px-Tajine-marocain-un-plat-varie-et-sain_%28cropped%29.jpg", "Tagine"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Egyptian_food_Koshary.jpg/500px-Egyptian_food_Koshary.jpg", "Koshary"], ["https://upload.wikimedia.org/wikipedia/commons/b/bf/Ful_medames_%28arabic_meal%29.jpg", "Ful medames"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Bobotie%2C_South_African_dish.jpg/500px-Bobotie%2C_South_African_dish.jpg", "Bobotie"], ["https://upload.wikimedia.org/wikipedia/commons/7/70/Quarter_Mutton_Bunny_Chow.jpg", "Bunny chow"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Shakshuka_by_Calliopejen1.jpg/500px-Shakshuka_by_Calliopejen1.jpg", "Shakshouka"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Thieboudienne.JPG/500px-Thieboudienne.JPG", "Thieboudienne"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Goat_meat_being_roasted.jpg/500px-Goat_meat_being_roasted.jpg", "Nyama choma"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/African_Piri_Piri_Chicken.jpg/500px-African_Piri_Piri_Chicken.jpg", "Galinha à africana"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/500px-01_Paella_Valenciana_original.jpg", "Paella"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg/500px-Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg", "Gazpacho"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg/500px-Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg", "Neapolitan pizza"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/500px-Espaguetis_carbonara.jpg", "Carbonara"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg/500px-Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg", "Risotto"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Gourmet_coq_au_vin.jpg/500px-Gourmet_coq_au_vin.jpg", "Coq au vin"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Bullabessa.jpg/500px-Bullabessa.jpg", "Bouillabaisse"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Fish_and_chips_blackpool.jpg/500px-Fish_and_chips_blackpool.jpg", "Fish and chips"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/MussakasMeMelitsanesKePatates01.JPG/500px-MussakasMeMelitsanesKePatates01.JPG", "Moussaka"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Pierogi_z_mas%C5%82em_-_2023.03.31.jpg/500px-Pierogi_z_mas%C5%82em_-_2023.03.31.jpg", "Pierogi"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Gulyas080.jpg/500px-Gulyas080.jpg", "Goulash"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/500px-Wiener-Schnitzel02.jpg", "Wiener schnitzel"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Pasteis_de_Belem.jpg/500px-Pasteis_de_Belem.jpg", "Pastel de nata"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/500px-Borscht_served.jpg", "Borscht"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Fondue_dish.jpg/500px-Fondue_dish.jpg", "Fondue"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/Ida_Davidsen_udsnit_af_glasmontren.JPG/500px-Ida_Davidsen_udsnit_af_glasmontren.JPG", "Smørrebrød"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Irish_Beef_Stew_%2834046928633%29.jpg/500px-Irish_Beef_Stew_%2834046928633%29.jpg", "Irish stew"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Moules-frites_at_Chez_Leon_in_Brussels.jpg/500px-Moules-frites_at_Chez_Leon_in_Brussels.jpg", "Moules-frites"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Tacos-al-Pastor.jpg/500px-Tacos-al-Pastor.jpg", "Al pastor"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/ChickRedMole.JPG/500px-ChickRedMole.JPG", "Mole (sauce)"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cebiche_de_corvina.JPG/500px-Cebiche_de_corvina.JPG", "Ceviche"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Lomo_Saltado_-_Lima%2C_Peru_Miraflores_%28Tiendecita_Blanca%29.jpg/500px-Lomo_Saltado_-_Lima%2C_Peru_Miraflores_%28Tiendecita_Blanca%29.jpg", "Lomo saltado"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Feijoada_%C3%A0_transmontada.jpg/500px-Feijoada_%C3%A0_transmontada.jpg", "Feijoada"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Cheesebread.jpg/500px-Cheesebread.jpg", "Pão de queijo"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Asado_2005.jpg/500px-Asado_2005.jpg", "Asado"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Arepitas_Food_Macro.jpg/500px-Arepitas_Food_Macro.jpg", "Arepa"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Food_at_WIkimanian_2017_02.jpg/500px-Food_at_WIkimanian_2017_02.jpg", "Poutine"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Central_Texas_Style_Barbecue_in_Pearland%2C_TX.jpg/500px-Central_Texas_Style_Barbecue_in_Pearland%2C_TX.jpg", "Barbecue in Texas"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Gumbo.JPG/500px-Gumbo.JPG", "Gumbo"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/BBQJerk_Chicken.jpg/500px-BBQJerk_Chicken.jpg", "Jerk (cooking)"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/RealRopaVieja.jpg/500px-RealRopaVieja.jpg", "Ropa vieja"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Pupusas_El_Salvador_Centro_America.JPG/500px-Pupusas_El_Salvador_Centro_America.JPG", "Pupusa"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Meat_pie.jpg/500px-Meat_pie.jpg", "Meat pie (Australia and New Zealand)"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Pavlova_dessert.JPG/500px-Pavlova_dessert.JPG", "Pavlova"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Hangi_prepare.jpg/500px-Hangi_prepare.jpg", "Hāngī"], ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Poisson_cru_au_lait_de_coco.jpg/500px-Poisson_cru_au_lait_de_coco.jpg", "'Ota 'ika"]];
const PHOTOS={};PHOTO_DATA.forEach(([src,title],i)=>{PHOTOS[i]={src,page:"https://en.wikipedia.org/wiki/"+encodeURIComponent(title.replace(/ /g,"_"))}});
const okPage=u=>typeof u==="string"&&/^https:\/\/en\.wikipedia\.org\//.test(u);
function photoHTML(d){
  const p=PHOTOS[d.i];if(!p)return"";
  return `<img class="photo" src="${esc(p.src)}" alt="${esc(d.n)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="this.classList.add('ok')" onerror="photoErr(this)">`+
    `<a class="credit" href="${esc(p.page)}" target="_blank" rel="noopener" tabindex="-1" title="Photo from Wikipedia. Opens the article and image credits.">Photo · Wikipedia</a>`;
}
/* if the resized copy fails, try the original file on upload.wikimedia.org, then fall back to the stamp design */
function original(u){const m=u.match(/^https:\/\/(?:thumb|upload)\.wikimedia\.org\/wikipedia\/([^/]+)\/thumb\/(.+)\/[^/]+$/);return m?`https://upload.wikimedia.org/wikipedia/${m[1]}/${m[2]}`:null}
function photoErr(img){
  if(!img.dataset.tried){img.dataset.tried="1";const o=original(img.getAttribute("src"));if(o){img.src=o;return}}
  const plate=img.parentNode;plate.classList.remove("has");plate.querySelector(".credit")?.remove();img.remove();
}
window.photoErr=photoErr;

/* =========================================================
   PART 2: Gastronomy & gastrodiplomacy: food stories, fusion cuisine, ingredient journeys,
   dining etiquette and food diplomacy. Every entry refers to a real dish, place,
   program or event; where an origin is disputed, the text says so.
   ========================================================= */

/* per dish, same order as RAW: global flavors | hero ingredient | its journey | how to eat it | UNESCO link | ingredient-journey key */
const STORY_RAW=`Plaek Phibunsongkhram's government promoted it in the late 1930s and 1940s as a national dish built on rice noodles. Six decades later it led Thailand's 2002 Global Thai campaign and became one of the best-known Thai dishes abroad.|Tamarind|Native to tropical Africa, tamarind reached India in ancient times and travelled on to Southeast Asia. Its sour pulp gives pad thai its tang.|Thais eat most meals with a fork and spoon, but noodle dishes are the exception where chopsticks are fine. Season it yourself from the table caddy (khrueang phrung) of sugar, chili flakes, fish sauce and vinegar.||
In December 2024 UNESCO added tom yum kung to its Intangible Cultural Heritage list. Its flavor now travels as instant noodles and snacks, and Thai restaurants abroad serve both the clear (nam sai) and creamy (nam khon) styles.|Lemongrass|Native to tropical Asia, lemongrass is now farmed from India to Central America. Its lemony oil, citral, also scents soaps, perfumes and teas.|Tom yum is shared: it arrives in a pot or big bowl and everyone spoons some over their rice. The lemongrass, galangal and lime leaves are there for aroma, so leave them in the bowl.|Tom yum kung, Thailand (2024)|
Born in Laos and Thailand's northeast (Isan), som tam came to Bangkok with Isan workers and is now sold nationwide. Abroad it's often made milder, and cooks without green papaya swap in carrot, cucumber or green mango.|Papaya|Papaya is native to southern Mexico and Central America. Spanish and Portuguese ships carried it to Asia in the 1500s, where cooks began eating it unripe, as a vegetable.|Eat it with sticky rice by hand: pinch off a small ball with your right hand, press it flat and use it to scoop up the salad.||
Ramen began as Chinese-style wheat noodles (shina soba) in Yokohama's Chinatown. Momofuku Ando's Chicken Ramen (1958) and Cup Noodles (1971) took it worldwide; people now eat over 100 billion servings of instant noodles a year.|Kansui|Kansui, alkaline mineral water borrowed from Chinese noodle-making, is what makes ramen springy and yellow without any egg.|Slurp. In Japan it's polite, shows you're enjoying it and cools the noodles. Eat quickly before they go soft; lifting the bowl to drink the broth is fine.||
Sushi began as fish fermented in rice; quick hand-pressed nigiri was fast food in 1820s Edo (Tokyo). Abroad it became the inside-out California roll with avocado and crab, credited to chefs in Los Angeles or Vancouver in the 1960s and 70s.|Nori|Japan's nori harvests were failing until British scientist Kathleen Drew-Baker worked out the seaweed's life cycle in 1949. Farmers in Uto, Kumamoto still honor her as "Mother of the Sea."|Nigiri can be eaten by hand or with chopsticks. Dip the fish side, not the rice, lightly in soy sauce and eat each piece in one bite. Pickled ginger cleans your palate between pieces.|Washoku, traditional Japanese food culture (2013)|
The name means "grilled as you like it." Osaka mixes everything into the batter while Hiroshima layers it with noodles, and many restaurants let you cook your own on a griddle built into the table.|Katsuobushi|Katsuobushi is skipjack tuna that's simmered, smoked and dried until hard as wood, then shaved. The thin flakes seem to dance on hot okonomiyaki.|Cut it on the griddle with a small metal spatula (kote) and eat straight from it. In Osaka many people skip chopsticks entirely.||
Pho emerged around Hanoi and Nam Định in the early 1900s. Vietnamese refugees after 1975 carried it to the US, France and Australia, where it became an everyday comfort food.|Star anise|Star anise grows mainly in southern China and northern Vietnam. It's also the main source of shikimic acid, the starting material for the flu drug Tamiflu.|Chopsticks in one hand, soup spoon in the other. Taste the broth before adding herbs, lime or sauces; lifting noodles to slurp is normal.||
A fusion born under French rule: the baguette, made lighter and crispier by Vietnamese bakers and filled with local ingredients. "Banh mi" entered the Oxford English Dictionary in 2011.|Wheat flour|Wheat grows poorly in Vietnam's tropical climate, so flour arrived as an import under French rule. Local bakers developed a thin-crusted, airy loaf suited to the heat.|It's street food, eaten on the go from a paper wrap. Ask for "không cay" if you want it without chili.||
Korean Air began serving bibimbap on flights in 1997 and won a Mercury Award for in-flight catering in 1998, making it many travellers' first taste of Korean food.|Gochujang|Chili peppers reached Korea around the late 1500s. Fermented with glutinous rice and soybeans they became gochujang, and in 2024 UNESCO recognized Korea's jang-making tradition.|Mix everything thoroughly with your spoon before eating; "bibim" means mixing. In Korea rice is eaten with a spoon and the bowl stays on the table.|Jang-making in Korea (2024)|chili
Kimchi went global as a health food. Korea named 22 November Kimchi Day in 2020, and California adopted the same date in 2021.|Napa cabbage kimchi|Early kimchi was mostly salted radish and vegetables. Red chili and napa cabbage only became standard in the 1700s and 1800s.|The stew is often shared from one pot in the middle. Wait for the eldest at the table to lift their spoon before you start.|Kimjang, making and sharing kimchi (2013)|
Beijing's Quanjude, founded in 1864, made roast duck a state-banquet dish served to visiting leaders, including Henry Kissinger on his secret 1971 trip.|Pekin duck|In 1873 a handful of these white ducks were shipped from China to New York; their descendants became America's Long Island duckling.|Lay duck, scallion and cucumber on a thin pancake with hoisin, roll it up and eat by hand. The crisp skin is sometimes served first, dipped in sugar.||
Created in Nanxiang, near Shanghai, in the 1870s. Taiwan's Din Tai Fung began selling them in 1972 and took them worldwide; one of its Hong Kong branches earned a Michelin star in 2010.|Pork aspic|The soup inside starts as jellied pork stock folded into the filling. It melts into hot broth as the dumpling steams.|Lift it gently onto your spoon, nibble a small hole, sip the soup, then eat the rest with ginger and black vinegar. Biting straight in can scald your mouth.||
Named after a pockmarked Chengdu cook, "Mapo," in the 1860s. Chef Chen Kenmin brought a milder Sichuan cooking to Japan in the 1950s, and mapo tofu became a Japanese home staple.|Sichuan pepper|It isn't a chili but the husk of a prickly ash, and it makes lips tingle (má) by triggering touch receptors. The US banned its import from 1968 to 2005 over a citrus disease.|Spoon it over rice a little at a time. At a shared table, use the serving spoon, not your own chopsticks, for communal dishes.||
Malaysia's unofficial national dish is everywhere, from roadside stalls to McDonald's Malaysia, which launched a Nasi Lemak Burger in 2020.|Pandan|Pandan leaves scent the coconut rice. The leaf has spread into cafés worldwide, where it's sometimes called "the vanilla of Southeast Asia."|Traditionally eaten with the right hand, mixing rice and sambal with your fingertips. A spoon and fork are just as common.||
From the Minangkabau of West Sumatra, rendang travelled with Minang migrants (merantau) across Indonesia and Malaysia through Padang restaurants. It's a flagship of the 2021 "Indonesia Spice Up the World" program.|Coconut milk|Slow-cooking beef in coconut milk and spices until nearly dry preserves it, so dry rendang keeps for weeks, ideal for long journeys.|At a Padang restaurant, many small dishes may arrive at once (hidang style) and you pay only for what you eat. Eating with your right hand is traditional.||
Spanish colonizers named it after their own adobo marinade, but braising in vinegar was already a Filipino technique. Filipino migrants have made it a fixture from California to the Gulf.|Cane vinegar|Filipino cooks use local vinegars made from sugarcane (sukang Iloko), coconut sap or nipa palm, each giving adobo a different tang.|Filipinos usually eat with a spoon in the right hand and a fork in the left to push food onto it. At home you'll hear "kain tayo!" meaning "let's eat!"||
Widely credited to Delhi's Moti Mahal after 1947, when cooks simmered tandoori chicken in tomato, butter and cream. Its cousin chicken tikka masala went British; in 2001 Foreign Secretary Robin Cook called it "a true British national dish."|Tomato|Tomatoes, now basic to North Indian gravies, came from the Americas and only became common in Indian cooking in the last few centuries.|Tear naan with your right hand only and use it to scoop the sauce. In India the left hand traditionally stays away from food.||tomato
Udupi-style restaurants carried dosa from Karnataka across India. Chains like Saravana Bhavan now serve it from Chennai to London, Singapore and New York.|Potato|The spiced potato filling is relatively new: potatoes reached India with Portuguese traders in the 1600s.|Eat with your right hand: tear off a piece, wrap it around some potato and dip it in chutney or sambar.||potato
Linked to the kitchens of Hyderabad's Nizams, biryani is now India's favorite delivery dish; Swiggy has named it its most-ordered dish year after year.|Saffron|Saffron, threads picked by hand from crocus flowers, gives the rice its golden streaks. Iran grows most of the world's supply.|When serving, dig to the bottom of the pot so each plate gets both rice and meat. Eat with your right hand or a spoon.||saffron
Momo reached Nepal with Newar traders who travelled to Tibet. Nepali and Tibetan migrants now run momo shops from Delhi to Jackson Heights in New York.|Timur|Timur, a Himalayan cousin of Sichuan pepper, gives momo achar its numbing, citrusy kick.|A plate of momo is usually shared among friends and eaten by hand or with a fork, dipped in achar.||
Hainanese migrants adapted Wenchang chicken from Hainan Island into this dish in Singapore and Malaysia. Singapore's hawker culture joined UNESCO's heritage list in 2020.|Ginger|Ginger was domesticated in Island Southeast Asia, and Austronesian sailors carried it across the Pacific as far as Hawaii.|At a hawker centre, locals "chope" (reserve) a table with a packet of tissues. Return your tray when you finish; since 2021 it's required by law.|Hawker culture in Singapore (2020)|
Plov belongs to a family of rice dishes, including Persian polow, Indian pulao and Turkish pilav, that spread along the Silk Road.|Yellow carrot|Carrots were first domesticated in Central Asia, around today's Afghanistan, and were purple or yellow. Uzbek plov still uses yellow carrots.|Plov is a social dish: it's cooked in a giant kazan for weddings and holidays and eaten from a shared platter (lagan).|Palov culture and tradition, Uzbekistan (2016)|
Hummus went from Levantine mezze to a supermarket staple across Europe and North America. In 2009 and 2010 Lebanon and Israel traded Guinness records for the world's largest plate.|Chickpea|Chickpeas were domesticated in southeastern Turkey roughly 10,000 years ago. Today India grows most of the world's chickpeas.|Use torn pita as your spoon and scoop from the side of the shared plate nearest you.||
Western versions often turn it into a mostly-bulgur salad; in Lebanon it's a parsley salad with only a little bulgur. Lebanon marks National Tabbouleh Day on the first Saturday of July.|Bulgur|Bulgur is wheat that's parboiled, dried and cracked, an ancient way of storing grain across the Middle East.|In Lebanon it's often scooped up with crisp lettuce or cabbage leaves instead of a fork.||
Shawarma comes from the Ottoman vertical rotisserie. Lebanese immigrants carried it to Mexico, where it became tacos al pastor, and Turkish immigrants made döner kebab a German fast-food favorite.|Toum|Toum, the whipped garlic sauce, is an emulsion of garlic, oil, lemon and salt, with no eggs.|Street shawarma is eaten wrapped, on the go. Across the region, eat and pass food with your right hand.||
Jordan's national dish is served at weddings and to honor guests. UNESCO inscribed it in 2022.|Jameed|Jameed is sheep or goat yogurt, salted and sun-dried into hard balls, a Bedouin way to keep milk for months. The town of Karak is famous for it.|Traditionally eaten standing around a shared platter, rolling rice and lamb into a ball with your right hand only. The left hand stays behind your back.|Al-Mansaf in Jordan (2022)|
Persian kebab houses became landmarks of the Iranian diaspora, especially in Los Angeles's Westwood, nicknamed "Tehrangeles."|Saffron|Iran grows most of the world's saffron, mainly in Khorasan. A pinch bloomed in hot water turns chelow rice gold.|Eat with a fork and spoon, or wrap pieces in lavash. Expect taarof: your host will insist you take more, and it's polite to decline once before accepting.||saffron
A centerpiece of Persian weddings and celebrations. In Gilan, by the Caspian Sea, it's traditionally made with duck, and diaspora cooks sometimes use meatballs.|Pomegranate|Native to the region from Iran to northern India, pomegranates spread west to the Mediterranean and east to China. Spain's city of Granada shares its name.|Serve the stew beside saffron rice. The crisp rice crust from the pot, tahdig, is the most fought-over part of the meal.||
Lahmacun spread across Europe with Turkish communities and is often sold beside döner. Abroad it's called "Turkish pizza," though it has no cheese.|Urfa pepper|Isot, or Urfa pepper, from Şanlıurfa is sun-dried and wrapped overnight so it turns dark, smoky and raisin-like.|Squeeze lemon over it, add parsley and onion, roll it up and eat by hand.||
Perfected in Ottoman palace kitchens, baklava was the sultan's gift to the Janissaries during Ramadan. Gaziantep baklava gained EU protected status in 2013.|Pistachio|Pistachios came from Iran and Central Asia; Gaziantep's bright-green "Antep fıstığı" are prized for baklava. In 2024 a viral Dubai chocolate bar filled with pistachio cream sent global pistachio demand soaring.|Eat it in small pieces with Turkish coffee or tea, by hand or with a small fork.||
Saudi Arabia's national dish is a cousin of the Gulf's machboos, and every household tweaks its spice mix (baharat).|Dried lime|Loomi are limes boiled in salt water and sun-dried until black, giving Gulf dishes a sour, smoky note.|Kabsa is often served on one large platter. Eat with your right hand, from the part nearest you. To refuse more Arabic coffee, gently shake your cup.||
Once the pride of Baghdad's Abu Nuwas Street along the Tigris, it's served by Iraqi restaurants abroad as the taste of home.|River carp|Masgouf is made with carp, traditionally from the Tigris and Euphrates. Today much of it comes from fish farms.|Share it at the table, pulling the fish apart with bread and your right hand.||
Named after the Wolof (Jolof) Empire of Senegambia, jollof spread across West Africa. Nigeria and Ghana's friendly "Jollof Wars" play out online, and World Jollof Rice Day is 22 August.|African rice|West Africa domesticated its own rice, Oryza glaberrima, in the inland Niger Delta around 3,000 years ago. Enslaved West Africans later brought rice-growing skills to the Americas.|Party jollof cooked over firewood is prized for its smoky flavor and the crispy "bottom pot." Eat with a spoon or your right hand.||
Created by Hausa grill masters in northern Nigeria, suya now has followings in London, Houston and Toronto, and its spice blend, yaji, is sold as a seasoning.|Peanut|The yaji rub is built on ground roasted peanuts, a crop from South America that Portuguese traders brought to West Africa.|Buy it at night from the mai suya, wrapped in paper with raw onion and extra yaji, and eat it with your fingers.||peanut
The feast dish for Ethiopian holidays such as Genna (Christmas) and Fasika (Easter), after long fasts. Washington, D.C.'s large Ethiopian community introduced it to many Americans.|Teff|Teff, a tiny grain native to the Ethiopian highlands, makes injera. As it became a gluten-free "superfood" abroad, Ethiopia restricted raw teff exports to protect local prices.|Tear injera with your right hand and scoop up the stew. Feeding someone a mouthful by hand, gursha, shows friendship and respect.||
The cone-lidded pot gave the dish its name. Moroccan communities made tagine and couscous everyday dishes in France, and Maghreb couscous joined UNESCO's list in 2020.|Preserved lemon|Lemons packed in salt and their own juice for weeks become soft, fragrant and essential to tagine.|Shared from one central dish: use bread and three fingers of your right hand, and eat from the section in front of you.|Mediterranean diet (2010, extended 2013)|
A 19th-century fusion: Indian khichdi (rice and lentils) met Italian pasta and tomato sauce, possibly through British-Indian soldiers and Italian immigrants. It's now Egypt's national street food.|Lentils|Lentils are among the first crops ever domesticated, in the Fertile Crescent more than 9,000 years ago.|Add garlic vinegar (da'a) and hot sauce to taste and eat with a spoon. Koshari shops are fast, cheap and busy.||
Egypt's breakfast for centuries, ful spread across the Arab world and Sudan and is now sold canned worldwide.|Fava beans|Fava beans have been found in ancient Egyptian tombs. Carts selling ful from big copper pots (qidra) still fill Cairo streets each morning.|Scoop it up with torn aish baladi using your right hand. During Ramadan it's a common suhoor meal before dawn.||
Brought to the Cape by enslaved people and settlers from Indonesia and Malaysia in the Dutch East India Company era, it was shaped by the Cape Malay community into a South African classic.|Turmeric|Turmeric, from South Asia, colors bobotie's yellow rice. Its compound curcumin later inspired the global "golden latte" trend.|Served family-style with yellow rice and a spoon of fruit chutney (blatjang) on the side.||
Created in Durban by Indian South Africans around the 1940s. One story says the loaf was a way to serve takeaway when apartheid-era rules kept some customers out of restaurants.|Durban curry|Indian indentured workers arrived in Natal from 1860, bringing masala blends that became Durban's famously red, hot curries.|Eat it with your hands: tear pieces from the bread lid and walls to scoop the curry. Order a "quarter" if you're not very hungry.||
Maghrebi in origin, shakshuka became a brunch favorite in Israel and then in cafés from London to New York.|Harissa|Tunisia's chili paste harissa is made from sun-dried peppers, garlic and spices. UNESCO inscribed it in 2022.|Eat it straight from the pan, mopping up the sauce with bread.|Harissa, Tunisia (2022)|chili
Credited to Saint-Louis, Senegal, ceebu jën is often called the ancestor of jollof. UNESCO inscribed it in 2021.|Broken rice|Under colonial rule, Senegal imported cheap broken rice from French Indochina. It became the heart of Senegalese cooking.|Shared from a large bowl: everyone eats from the section in front of them, with a spoon or right hand, and the host hands out the best pieces of fish.|Ceebu jën, Senegal (2021)|
Kenya's social meal is often ordered by the kilo at a butcher-grill. Nairobi's Carnivore restaurant made it famous with visitors.|Maize|Maize, from Mexico, arrived in East Africa with Portuguese traders and became the region's staple; ugali is stiff maize porridge.|Shared on a wooden board and eaten by hand. Pinch some ugali, press a dent with your thumb and use it to scoop kachumbari. Hosts may welcome you with "karibu chakula."||
An Afro-Portuguese fusion: the chili came from the Americas, Portuguese traders brought it to Mozambique, and Nando's, founded in Johannesburg in 1987, took it worldwide.|Bird's eye chili|African bird's eye chili descends from American chilies spread by Portuguese ships. Piri-piri is often translated from Swahili as "pepper-pepper."|It's finger food: pull it apart with your hands and keep napkins close.||chili
Valencians insist real paella has no chorizo; when Jamie Oliver added it in 2016, Spanish social media erupted. Paella valenciana uses chicken, rabbit and green beans.|Saffron|Moorish rule brought rice and saffron to Spain. Valencia's Albufera lagoon is still rice country.|In Valencia friends often eat straight from the pan with their own spoons, each from their own slice. Paella is a lunch dish.|Mediterranean diet (2010, extended 2013)|saffron
Originally a peasant soup of bread, oil, vinegar and garlic; tomatoes and peppers from the Americas came later. It's now sold chilled in cartons across Europe.|Olive oil|Spain produces more olive oil than any other country, often around 40% of world supply. Drought in 2022–23 halved its harvest and pushed prices to records.|On hot days it's often served in a glass and drunk, not just spooned from a bowl.|Mediterranean diet (2010, extended 2013)|
Italian immigrants brought pizza to the US; Lombardi's in New York, licensed in 1905, is often called America's first pizzeria. The art of the Neapolitan pizzaiuolo joined UNESCO's list in 2017.|San Marzano tomato|Tomatoes came from the Americas, and Naples printed one of Europe's first tomato sauce recipes in 1692. San Marzano tomatoes from the plains near Vesuvius have EU protected status.|In Naples everyone gets a whole pizza; it's not for sharing. Use a knife and fork, or fold it "a libretto," like a book.|Art of the Neapolitan pizzaiuolo (2017)|tomato
Carbonara first appears after World War II; one theory credits US soldiers' bacon and eggs. Abroad it often gained cream, which Romans reject. Carbonara Day is 6 April.|Black pepper|Pepper comes from India's Malabar Coast. It was so valuable in medieval Europe that it was used to pay rents and taxes.|Twirl spaghetti with your fork; never cut it. Italians traditionally skip cappuccino after lunch or dinner.||
Legend dates it to 1574, when a glazier decorating Milan Cathedral's windows added saffron to rice. Risotto is now made worldwide with Italian carnaroli and arborio rice.|Saffron|Saffron reached Europe through Moorish Spain and the spice trade; around 150,000 crocus flowers make one kilogram.|Spread the risotto from the center toward the rim with your fork and eat from the cooler edge inward.||saffron
Julia Child's 1961 book "Mastering the Art of French Cooking" and her TV show made coq au vin a dinner-party classic in the US.|Burgundy wine|Burgundy's vineyards were mapped by medieval monks; its patchwork of plots, the "climats," became a UNESCO World Heritage Site in 2015.|Keep your wrists on the table, not in your lap. Bread sits on the tablecloth beside your plate, and wiping up sauce with it is fine at casual meals.|Gastronomic meal of the French (2010)|
In 1980 Marseille restaurants signed a Bouillabaisse Charter defining the real recipe to protect it from imitations.|Rascasse|True bouillabaisse uses bony Mediterranean rockfish such as rascasse (scorpionfish), once the catch fishermen couldn't sell.|It's served in two stages: first the saffron broth with rouille-topped croutons, then the fish, often presented whole and filleted at the table.|Gastronomic meal of the French (2010)|
Fried fish came to Britain with Sephardic Jewish refugees from Portugal and Spain, and Portuguese battered frying also inspired Japan's tempura. Fish and chips was never rationed in WWII Britain.|Potato|Potatoes from the Andes became Britain's cheap staple by the 1800s, just in time for chip shops to spread.|From a chippy, eat with your fingers or a little wooden fork, straight from the paper.||potato
Greek chef Nikolaos Tselementes created the béchamel-topped version in the 1920s under French influence. Versions without béchamel exist across the Balkans and the Middle East.|Aubergine|Eggplant was domesticated in Asia and spread west with Persian and Arab traders.|Raise your glass with "Yamas!" (to our health). Moussaka is often eaten warm rather than piping hot, so it holds its layers.|Mediterranean diet (2010, extended 2013)|
Polish and Ukrainian migrants took pierogi to North America; the Pittsburgh Pirates even stage a Great Pierogi Race. Kraków holds a pierogi festival every August.|Potato|Potato-and-cheese "ruskie" filling took off after potatoes became common in Polish fields in the 1700s and 1800s.|Before eating, Poles wish each other "Smacznego!" (enjoy your meal).||potato
Gulyás means "herdsman"; 19th-century Hungarian nationalists embraced the cowherds' stew as a symbol of identity. Abroad it's often a thick stew, while in Hungary it's a soup.|Paprika|Chilies from the Americas became Hungary's sweet paprika. Albert Szent-Györgyi isolated vitamin C from Szeged paprika and won the 1937 Nobel Prize.|Many Hungarians still avoid clinking beer glasses, a custom tied to the 1849 executions of 13 Hungarian generals.||chili
Austria's official food codex reserves the name for veal; pork versions are sold as "Schnitzel Wiener Art."|Clarified butter|Fried in plenty of clarified butter or lard, the breadcrumb coat puffs up and away from the meat in soft waves.|Eat continental style: fork in your left hand, knife in your right, without switching. Squeeze the lemon over it first.||
Monks at Lisbon's Jerónimos Monastery created it; Pastéis de Belém has baked their recipe since 1837. In 1989 Englishman Andrew Stow opened a bakery in Macau with his version, which spread across Asia, partly via KFC.|Egg yolks|Convents used egg whites to starch clothes, leaving a surplus of yolks for sweets.|Dust it with cinnamon and powdered sugar and eat it warm at the counter with a bica.||
In 2022 UNESCO inscribed the culture of Ukrainian borscht cooking as heritage in need of urgent safeguarding. Versions spread across Eastern Europe and to Jewish communities in North America.|Beetroot|Beets colored the soup long before Prussian chemists made sugar from them in the 1700s. Sugar beet now supplies about a fifth of the world's sugar.|Add a spoon of sour cream (smetana) and eat with pampushky. Bread and salt are traditional symbols of welcome.|Culture of Ukrainian borscht cooking (2022)|
The Swiss Cheese Union promoted fondue as a national dish from the 1930s, and the fondue party boomed abroad in the 1960s and 70s.|Gruyère|Swiss Gruyère has protected (AOP) status at home, but in 2022 a US court ruled that "gruyere" is a generic name in the United States.|Lose your bread in the pot and tradition says you buy the next round. Swiss custom pairs it with white wine or tea, not cold water.||
Copenhagen's Ida Davidsen, run by the same family since 1888, is famous for its long smørrebrød list. The New Nordic movement led by Noma (opened 2003) put Danish food on the world map.|Rye|Rugbrød is a dense sourdough rye bread; rye thrives in cold, poor soils where wheat struggles.|Use a knife and fork, never your hands. Start with herring, then other fish, then meat and cheese. After the meal, say "tak for mad" (thanks for the food).||
Irish emigrants took the stew to Britain, North America and Australia. Pubs worldwide now serve it, often with stout added, a modern twist.|Potato|Ireland came to depend on potatoes; when blight struck in 1845–52, about a million people died and a million more emigrated.|At the pub, drinks come in rounds: if someone buys you one, you buy the next.||potato
Belgium claims frites as its own invention, though France disputes it. Belgian beer culture, the usual pairing, joined UNESCO's list in 2016.|Mussels|Many mussels eaten in Belgium come from Zeeland in the Netherlands. Farmed mussels filter seawater and need no feed, one reason they're seen as sustainable seafood.|Use an empty shell as tongs to pick out the rest, and leave any mussels that didn't open.|Belgian beer culture (2016)|
A Lebanese-Mexican fusion: immigrants in Puebla in the 1930s brought spit-roasted meat as tacos árabes, which became pork al pastor with pineapple in Mexico City.|Achiote|Achiote (annatto) seeds from the tropical Americas give al pastor its red color; annatto also colors cheddar and other cheeses.|Eat tacos with your hands, never a knife and fork. Lean your head toward the taco, not the taco toward you, so the filling stays put.||
Legend credits nuns at Puebla's Santa Rosa convent. In 2010 traditional Mexican cuisine became one of the first food traditions on UNESCO's heritage list.|Cacao|Cacao was drunk by the Maya and Aztecs long before Europe sweetened it. A little chocolate in mole adds depth, not sweetness.|Mole is for celebrations: weddings, baptisms, Day of the Dead. Mop up the sauce with warm tortillas.|Traditional Mexican cuisine (2010)|cacao
Japanese immigrants in Peru shortened the marinating time to minutes, creating the modern style; the same Nikkei influence produced tiradito. UNESCO inscribed Peruvian ceviche in 2023.|Ají amarillo|Peru's yellow chili has been grown in the Andes for thousands of years and gives ceviche its fruity heat.|Peruvians eat ceviche at lunch, when the fish is freshest. Drink the leftover marinade, leche de tigre, often served as a shot.|Ceviche in Peru (2023)|chili
A chifa (Chinese-Peruvian) dish: Cantonese immigrants arriving from 1849 brought wok stir-frying and soy sauce to Peru.|Potato|Peru has around 3,000 native potato varieties, and Lima's International Potato Center keeps a gene bank of thousands of them.|Eat it with a fork and knife, letting the fries soak up the soy-and-tomato juices.||potato
Popular history links it to enslaved Africans, while historians also trace it to Portuguese bean-and-meat stews. Many Brazilians eat it as a long Saturday lunch.|Black beans|Common beans were domesticated in Mesoamerica and the Andes thousands of years ago; Brazil is one of the world's biggest bean eaters.|Feijoada is a slow lunch with friends; orange slices on the side help cut the richness.||
From Minas Gerais, where cooks baked with cassava starch instead of wheat. Frozen pão de queijo is now exported worldwide as a gluten-free snack.|Cassava|Cassava was domesticated in the Amazon and now feeds hundreds of millions of people, especially in Africa.|Eat it warm with coffee at breakfast or as an afternoon snack (lanche).||
Rooted in the gaucho culture of the pampas, Argentine parrillas now operate worldwide. Argentines eat more beef per person than almost anyone.|Chimichurri|Parsley, garlic, oregano, oil and vinegar: a sauce whose name's origin is still debated.|When the meal ends, give "un aplauso para el asador," a round of applause for the grill master.||
Venezuelan migrants have opened arepa bars from Bogotá to Madrid and Miami. Venezuela and Colombia both claim the dish.|Pre-cooked corn flour|Harina P.A.N., launched in Venezuela in 1960, made arepas quick to cook at home.|Eat it by hand, like a sandwich.||
Born in rural Québec in the late 1950s. Canadians now top it with everything from pulled pork to butter chicken, and it's on McDonald's Canada's menu.|Cheese curds|Fresh curds squeak against your teeth; the squeak fades within a day or so.|Eat it fast with a fork, before the fries go soft.||
Central Texas barbecue grew out of meat markets run by German and Czech immigrants in the late 1800s. Franklin Barbecue in Austin made brisket a national obsession.|Post oak|Slow-burning post oak, plentiful in Central Texas, gives brisket its clean smoke.|Brisket is ordered by weight and served on butcher paper; in Central Texas, good brisket is meant to be eaten without sauce.||
A Louisiana melting pot: West African okra, a French roux and Choctaw filé powder.|Okra|Okra came from Africa with the transatlantic slave trade; the word gumbo itself comes from a Bantu word for okra.|Served over rice and eaten with a spoon. Families argue over tomatoes: Creole cooks often add them, Cajun cooks usually don't.||
Jerk comes from Jamaica's Maroons, Africans who escaped slavery and cooked with Taíno techniques. Jamaican migrants made it a fixture of London's Notting Hill Carnival.|Allspice|Allspice (pimento) is native to the Caribbean, and Jamaica remains a leading producer. Smoking over pimento wood is what makes jerk taste like jerk.|Eat it with your hands, ideally from a roadside jerk pan made from an old oil drum.||
Ropa vieja came to Cuba from Spain's Canary Islands. Cuban exiles made it a staple of Miami restaurants.|Sofrito|Onion, green pepper and garlic cooked slowly in oil: sofrito is the base of Cuban and much Spanish cooking.|Serve with white rice and black beans; cooked together they're called moros y cristianos.||
El Salvador's national dish has its own national day, the second Sunday of November. Salvadoran migrants made pupuserías a staple in Los Angeles and Washington, D.C.|Loroco|Loroco, an edible flower bud native to Central America, is a favorite pupusa filling.|Eat with your hands, tearing off pieces and topping each with curtido and tomato salsa.||
British settlers brought the pie; brands like Four'N Twenty became fixtures at Australian rules football.|Beef|Cattle arrived with the First Fleet in 1788; Australia is now one of the world's largest beef exporters.|At the footy, eat it by hand with tomato sauce squeezed on top.||
Named after Russian ballerina Anna Pavlova's 1926 tour, it's claimed by both Australia and New Zealand. Food historian Helen Leach traced early versions to New Zealand.|Kiwifruit|Kiwifruit came from China, where it's called yangtao. New Zealand growers renamed it in 1959 for export.|It's a Christmas and summer favorite; slice it soon after topping so the cream doesn't soften the meringue.||
Hāngī is cooked for gatherings on marae. In Rotorua, visitors can share hāngī meals at Māori cultural centers.|Kūmara|Kūmara, the sweet potato, came from South America; Polynesian voyagers carried it across the Pacific long before Europeans.|Māori meals often begin with a karakia (blessing). Never sit on tables: food is noa (ordinary) and must stay apart from things that are tapu (sacred).||
Fiji's take on a Pacific raw-fish dish also known as Tahiti's poisson cru, Samoa's oka and Tonga's 'ota 'ika.|Coconut|Coconut palms spread across the Pacific with Austronesian voyagers; fresh-squeezed coconut cream finishes kokoda.|Often served with a kava (yaqona) ceremony: clap once, say "bula," drink in one go, then clap three times.||`;
const STORY=STORY_RAW.split("\n").map(l=>{const [g,ing,ij,e,u,k]=l.split("|");return{g,ing,ij,e,u:u||"",k:k||""}});

/* ---------- fusion: real dishes born where two cuisines met. a/b = [code, cuisine, region tone] ---------- */
const FUSION=[
  {id:"gcs",n:"Green curry spaghetti",a:["TH","Thai","AS"],b:["IT","Italian","EU"],kind:"mash",born:"Thai cafés and home kitchens",blend:"Thai green curry paste, coconut milk and Thai basil + Italian spaghetti",story:"Thai curries are traditionally eaten over khanom jeen, fresh rice noodles, so trading them for spaghetti was a short step. Spaghetti with green curry is now a regular on Thai café menus."},
  {id:"kogi",n:"Kimchi & Korean BBQ tacos",a:["KR","Korean","AS"],b:["MX","Mexican","AM"],kind:"mash",born:"Kogi BBQ truck, Los Angeles, 2008",blend:"Korean short rib, kimchi and gochujang + corn tortillas, salsa and cilantro",story:"Chef Roy Choi and partners sold Korean-Mexican tacos and kimchi quesadillas from a truck and posted its stops on Twitter. The late-night lines helped spark America's gourmet food-truck boom."},
  {id:"ctm",n:"Chicken tikka masala",a:["IN","Indian","AS"],b:["GB","British","EU"],kind:"adapt",born:"Commonly credited to Shish Mahal, Glasgow, 1970s",blend:"Tandoori chicken tikka + a creamy tomato sauce for British tastes",story:"The best-known story says chef Ali Ahmed Aslam added a tomato-cream sauce after a customer called his chicken tikka too dry. Its Delhi cousin is butter chicken.",dish:16},
  {id:"cali",n:"California roll",a:["JP","Japanese","AS"],b:["US","North American","AM"],kind:"adapt",born:"Los Angeles or Vancouver, 1960s–70s",blend:"Sushi rice and nori + avocado, imitation crab and cucumber",story:"Rolled inside-out to hide the seaweed and made without raw fish, it eased North American diners into sushi. Chefs in Los Angeles and Vancouver, notably Hidekazu Tojo, both claim it.",dish:4},
  {id:"napo",n:"Spaghetti Napolitan",a:["IT","Italian","EU"],b:["JP","Japanese","AS"],kind:"adapt",born:"Hotel New Grand, Yokohama, after 1945",blend:"Spaghetti + ketchup, onion, green pepper and sausage",story:"Chef Shigetada Irie is credited with refining the ketchup spaghetti US occupation troops ate. It's named after Naples but unknown there, and remains a retro favorite in Japanese cafés."},
  {id:"mentai",n:"Mentaiko spaghetti",a:["JP","Japanese","AS"],b:["IT","Italian","EU"],kind:"mash",born:"Kabe no Ana, Tokyo, 1960s",blend:"Spicy pollock roe, butter and nori + spaghetti",story:"Tokyo's Kabe no Ana is credited with early wafū (Japanese-style) pastas, served with chopsticks. Mentaiko itself was adapted in Fukuoka from Korean myeongnan-jeot."},
  {id:"doner",n:"Döner kebab sandwich",a:["TR","Turkish","ME"],b:["DE","German","EU"],kind:"adapt",born:"West Berlin, early 1970s",blend:"Ottoman spit-roasted meat + bread, salad and garlic-yogurt sauce",story:"Turkish workers in Berlin turned döner into a handheld sandwich; Kadir Nurman claimed the idea in 1972. It became one of Germany's favorite fast foods and spread across Europe.",dish:24},
  {id:"budae",n:"Budae jjigae (army stew)",a:["US","American","AM"],b:["KR","Korean","AS"],kind:"mash",born:"Uijeongbu, South Korea, 1950s",blend:"Spam, sausages and baked beans + gochujang broth, kimchi and ramen",story:"In the hungry years after the Korean War, cooks near US Army bases stretched surplus processed meat into a spicy stew. Uijeongbu now has a whole street of budae jjigae restaurants."},
  {id:"kare",n:"Japanese curry rice",a:["IN","Anglo-Indian","AS"],b:["JP","Japanese","AS"],kind:"adapt",born:"Meiji-era Japan, via the British Navy",blend:"Curry powder from British India + a thick roux with carrot, potato and rice",story:"Curry reached Japan in the late 1800s as a British dish, and the Imperial Navy adopted it. Japan's Maritime Self-Defense Force still serves curry every Friday."},
  {id:"manch",n:"Chicken Manchurian",a:["CN","Chinese","AS"],b:["IN","Indian","AS"],kind:"mash",born:"Cricket Club of India, Mumbai, 1975",blend:"Soy sauce and cornflour batter + Indian garlic, ginger and green chili",story:"Chef Nelson Wang, from Kolkata's Chinese community, improvised it when a customer asked for something new. Indo-Chinese dishes like gobi Manchurian and Hakka noodles are now everywhere in India."},
  {id:"tempura",n:"Tempura",a:["PT","Portuguese","EU"],b:["JP","Japanese","AS"],kind:"adapt",born:"Nagasaki, 16th century",blend:"Portuguese battered frying + Japanese seafood and vegetables",story:"Portuguese missionaries and traders fried battered vegetables, much like Portugal's peixinhos da horta, on Catholic fasting days, the Latin \"tempora.\" Japanese cooks lightened the batter into tempura."},
  {id:"tart",n:"Macau egg tart",a:["PT","Portuguese","EU"],b:["MO","Macanese","AS"],kind:"adapt",born:"Lord Stow's Bakery, Macau, 1989",blend:"Lisbon's pastel de nata + English custard-tart baking",story:"Englishman Andrew Stow fell for pastéis de nata in Portugal and opened a bakery in Macau. His former wife Margaret later sold her recipe to KFC, which spread Portuguese-style tarts across Asia.",dish:56},
  {id:"massaman",n:"Massaman curry",a:["IR","Persian","ME"],b:["TH","Thai","AS"],kind:"adapt",born:"Ayutthaya court, likely 17th century",blend:"Cardamom, cinnamon and cloves + Thai curry paste, coconut milk and peanuts",story:"The name likely comes from \"Mussulman\" (Muslim). Persian and Muslim traders brought dry spices to Siam, and King Rama II later praised massaman in a poem."},
  {id:"patty",n:"Jamaican beef patty",a:["GB","British","EU"],b:["JM","Jamaican","AM"],kind:"mash",born:"Jamaica, colonial era",blend:"Cornish pasty pastry + Indian curry spices and scotch bonnet",story:"British turnovers met curry spices brought by Indian indentured workers, who arrived from 1845, plus fiery local scotch bonnet. Turmeric turns the crust golden."},
  {id:"pastor",n:"Tacos al pastor",a:["LB","Lebanese","ME"],b:["MX","Mexican","AM"],kind:"adapt",born:"Puebla and Mexico City, 1930s–60s",blend:"Shawarma's vertical spit + pork, achiote, pineapple and corn tortillas",story:"Lebanese immigrants sold spit-roasted meat in Puebla as tacos árabes. Mexico City cooks swapped in pork marinated with achiote and topped it with pineapple.",dish:62},
  {id:"banhmi",n:"Bánh mì",a:["FR","French","EU"],b:["VN","Vietnamese","AS"],kind:"adapt",born:"Saigon, 1950s",blend:"French baguette and pâté + pickled vegetables, herbs and chili",story:"After the 1954 partition, Saigon bakers loaded the colonial baguette with Vietnamese fillings, shaping the sandwich the world knows today.",dish:7},
  {id:"koshari",n:"Koshari",a:["IN","Indian","AS"],b:["EG","Egyptian","AF"],kind:"adapt",born:"Egypt, late 1800s",blend:"Indian khichdi (rice and lentils) + Italian pasta and tomato sauce",story:"Rice-and-lentil khichdi may have arrived with British-Indian troops, while Italian immigrants brought pasta. Egypt combined them into its cheapest, most filling street food.",dish:36},
  {id:"chifa",n:"Chifa & lomo saltado",a:["CN","Cantonese","AS"],b:["PE","Peruvian","AM"],kind:"adapt",born:"Lima, from the late 1800s",blend:"Wok stir-frying and soy sauce + Peruvian beef, ají and potatoes",story:"Cantonese workers arrived in Peru from 1849. Their cooking became chifa, now served in thousands of restaurants across Lima; lomo saltado is its best-known dish.",dish:65},
  {id:"tiradito",n:"Nikkei tiradito",a:["JP","Japanese","AS"],b:["PE","Peruvian","AM"],kind:"mash",born:"Lima, 20th century",blend:"Sashimi-style slicing + Peruvian ají and lime",story:"Japanese immigration to Peru began in 1899. Nikkei cooks cut fish like sashimi and dressed it with ají and lime. Lima's Nikkei restaurant Maido has topped the Latin America's 50 Best Restaurants list.",dish:64}
];

/* ---------- ingredient journeys: real stops, in order ---------- */
const JOURNEY=[
  {id:"chili",n:"Chili pepper",from:"Mexico",code:"CHL",r:"AM",lon:-99,lat:19,origin:"Mexico",now:"India (dried chilies)",sum:"One Mexican plant became the heat of Thai, Korean, Sichuan, Ethiopian and Hungarian cooking.",stops:[
    ["c. 4000 BCE","Mexico","Chili peppers were domesticated in Mexico at least 6,000 years ago."],
    ["1493","Spain","Columbus brought them back and named them after black pepper (pimienta)."],
    ["1500s","Goa, India","Portuguese traders carried chilies to Goa and along their sea routes to Africa and Southeast Asia."],
    ["Late 1500s","Korea & Siam","Chilies reached Korea and Siam; within two centuries they defined kimchi and Thai curries."],
    ["1700s–1800s","Hungary","Hungarian growers bred chilies into sweet paprika, the soul of goulash."]],
    dishes:[2,1,9,8,12,34,43,73,54,33,64]},
  {id:"tomato",n:"Tomato",from:"the Andes & Mexico",code:"TOM",r:"AM",lon:-97,lat:18,origin:"Andes, domesticated in Mexico",now:"China",sum:"A wild Andean berry that Mexico domesticated and Naples made famous.",stops:[
    ["Ancient","Andes & Mexico","Wild tomatoes grow in the Andes; Mesoamericans domesticated them, and the Aztecs called the fruit xitomatl."],
    ["1544","Italy","Botanist Pietro Andrea Mattioli described them as pomi d'oro, golden apples. Many Europeans suspected they were poisonous."],
    ["1692","Naples","Antonio Latini printed one of the first tomato sauce recipes, \"alla spagnola,\" in Spanish-ruled Naples."],
    ["1800s","Middle East, India & West Africa","Through trade and empire, tomatoes spread into shakshuka, curry gravies and jollof."],
    ["Today","China","China grows more tomatoes than any other country."]],
    dishes:[46,45,40,32,16,36,41,65]},
  {id:"potato",n:"Potato",from:"the Andes",code:"POT",r:"AM",lon:-69,lat:-16,origin:"Andes, near Lake Titicaca",now:"China",sum:"The Andean tuber that fed Europe's cities, and starved Ireland when it failed.",stops:[
    ["c. 8,000 years ago","Lake Titicaca","Andean farmers domesticated potatoes and invented chuño, freeze-dried potato that keeps for years."],
    ["1560s","Spain","Spanish ships brought potatoes to Europe by way of the Canary Islands."],
    ["1756","Prussia","Frederick the Great ordered farmers to plant potatoes as insurance against famine."],
    ["1845–1852","Ireland","Potato blight caused the Great Famine: about a million people died and a million more emigrated."],
    ["Today","China & India","China and India are now the world's biggest potato growers."]],
    dishes:[60,53,51,17,70,65,57]},
  {id:"peanut",n:"Peanut",from:"South America",code:"PNT",r:"AM",lon:-63,lat:-18,origin:"South America (Bolivia & Argentina)",now:"China",sum:"A South American legume that became West Africa's groundnut and Asia's crunchy topping.",stops:[
    ["c. 7,000 years ago","South America","Peanuts were domesticated east of the Andes, in today's Bolivia and northern Argentina."],
    ["1500s","West Africa & Asia","Portuguese and Spanish ships carried peanuts to Africa, India, the Philippines and China."],
    ["1800s","Senegal","Groundnuts became Senegal's colonial cash crop, shipped to France for oil."],
    ["Early 1900s","United States","George Washington Carver promoted peanuts to restore worn-out soil in the US South."],
    ["Today","China, India & Nigeria","China grows the most peanuts, followed by India and Nigeria."]],
    dishes:[0,2,33,13]},
  {id:"saffron",n:"Saffron",from:"Persia & the Aegean",code:"SAF",r:"ME",lon:57,lat:34,origin:"Iran & the eastern Mediterranean",now:"Iran (about 90%)",sum:"The world's most expensive spice, picked by hand, thread by thread.",stops:[
    ["c. 1600 BCE","Santorini, Greece","Bronze Age frescoes at Akrotiri show women gathering saffron crocus."],
    ["Ancient","Persia","Persians used saffron as a dye, perfume and medicine as well as in food."],
    ["900s","Al-Andalus, Spain","Moorish farmers brought saffron growing to Spain, the root of paella's color."],
    ["1500s","Mughal India","Mughal kitchens perfumed biryani and pulao with saffron; Kashmir still grows it."],
    ["Today","Iran","Iran grows about 90% of the world's saffron. Around 150,000 flowers make one kilogram."]],
    dishes:[44,48,18,26,27,50]},
  {id:"coffee",n:"Coffee",dl:"Poured beside these stamps",from:"Ethiopia",code:"COF",r:"AF",lon:38,lat:7,origin:"Ethiopian highlands",now:"Brazil",sum:"Ethiopian forest berries that became the world's morning ritual.",stops:[
    ["Before 1400s","Ethiopia","Wild arabica grows in Ethiopia's forests; legend credits a goatherd named Kaldi with noticing its effect."],
    ["1400s","Yemen","Sufis brewed coffee to stay awake for night prayers, and the port of Mocha shipped it out."],
    ["1550s","Istanbul","The city's first coffeehouses opened, and Turkish coffee culture was born."],
    ["1727","Brazil","Francisco de Melo Palheta smuggled seedlings in from French Guiana."],
    ["1857","Vietnam","French missionaries planted coffee; Vietnam is now the world's second-largest producer."]],
    dishes:[6,67,56,29,25,17,76]},
  {id:"cacao",n:"Cacao",from:"the Amazon",code:"CAC",r:"AM",lon:-78,lat:-4,origin:"Upper Amazon, Ecuador",now:"Côte d'Ivoire",sum:"The Amazonian bean that was money for the Aztecs and a luxury for Europe.",stops:[
    ["c. 5,300 years ago","Ecuador","The Mayo-Chinchipe people of the upper Amazon left the oldest known traces of cacao use."],
    ["Maya & Aztec eras","Mesoamerica","Cacao was drunk bitter and spiced, and the beans were used as money."],
    ["1500s","Spain","Spaniards sweetened it with sugar, and hot chocolate spread through Europe's courts."],
    ["1828","Netherlands","Coenraad van Houten's press made cocoa powder, opening the way to solid chocolate bars."],
    ["Today","Côte d'Ivoire & Ghana","The two countries grow about 60% of the world's cocoa; poor harvests sent prices to record highs in 2024."]],
    dishes:[63]},
  {id:"quinoa",n:"Quinoa",era:"modern",from:"the Andes",code:"QUI",r:"AM",lon:-68,lat:-17,origin:"Andes, near Lake Titicaca",now:"Peru",sum:"An Andean staple turned global superfood, and a lesson in what that boom can cost.",stops:[
    ["c. 7,000 years ago","Lake Titicaca","Andean farmers domesticated quinoa; the Inca called it chisaya mama, mother of all grains."],
    ["1500s","Spanish colonies","Colonial rule favored wheat and barley, and quinoa survived mainly in highland villages."],
    ["1993","NASA","A NASA report proposed quinoa as a crop for long space missions."],
    ["2013","United Nations","The UN declared the International Year of Quinoa. Prices had roughly tripled since 2006, sparking debate about Andean farmers."],
    ["Today","Peru & Bolivia","Peru and Bolivia still grow most quinoa, but it's now farmed from the US to India."]],
    dishes:[],none:"No passport dish uses quinoa yet. It's on the list as a story about what global demand can do to a local staple."},
  {id:"matcha",n:"Matcha",era:"modern",dl:"Poured beside these stamps",from:"China & Japan",code:"MAT",r:"AS",lon:135.8,lat:34.9,origin:"Song China, perfected in Uji, Japan",now:"Japan",sum:"A Zen monk's whisked tea that became the world's favorite shade of green.",stops:[
    ["1191","Japan","Zen monk Eisai returned from Song China with tea seeds and the practice of whisking powdered tea."],
    ["1500s","Kyoto","Tea master Sen no Rikyū shaped the tea ceremony (chanoyu) around a bowl of whisked matcha."],
    ["Late 1500s","Uji","Farmers began shading tea bushes before harvest (ōishita), deepening the leaves' color and savory flavor."],
    ["2000s","Worldwide","Matcha lattes, ice cream and Japan's matcha-flavored Kit Kats carried the taste far beyond the tea room."],
    ["2024–25","Worldwide","Global demand outran supply, and some Kyoto tea shops limited how much matcha each customer could buy."]],
    dishes:[4]},
  {id:"sriracha",n:"Sriracha",era:"modern",from:"Thailand",code:"SRI",r:"AS",lon:100.9,lat:13.2,origin:"Si Racha, Thailand",nowL:"Best-known maker today",now:"Huy Fong Foods, California",sum:"A seaside Thai town's chili sauce that a refugee turned into a global icon.",stops:[
    ["Origin","Si Racha, Thailand","Cooks in this town on the Gulf of Thailand made a tangy chili-garlic sauce, later bottled under brands like Sriraja Panich."],
    ["1980","Los Angeles","David Tran, a refugee from Vietnam, founded Huy Fong Foods, named after the freighter that carried him out, and launched his rooster-bottle sriracha."],
    ["2010s","Worldwide","Sriracha became a pop-culture flavor, showing up in potato chips, burger sauces and cookbooks."],
    ["2022","United States","Drought in Mexico cut the red jalapeño harvest; Huy Fong paused production and store shelves ran empty."]],
    dishes:[6]},
  {id:"avocado",n:"Avocado",era:"modern",from:"Mexico",code:"AVO",r:"AM",lon:-97.4,lat:18.4,origin:"Puebla & central Mexico",now:"Mexico (mostly Michoacán)",sum:"An ancient Mexican fruit turned global brunch staple, at a cost to Mexico's forests.",stops:[
    ["c. 9,000 years ago","Puebla, Mexico","Avocado remains in Coxcatlán Cave, in the Tehuacán Valley, show people were already eating the fruit."],
    ["Aztec era","Mexico","The Nahuatl word āhuacatl gave us \"avocado,\" and āhuacamōlli, avocado sauce, gave us guacamole."],
    ["1935","California","Postman Rudolph Hass patented the Hass variety, now the most widely grown avocado in the world."],
    ["1997","United States","The US began admitting Mexican avocados again after a ban dating to 1914, fully opening in 2007; avocado toast followed."],
    ["Today","Michoacán, Mexico","Mexico grows the most avocados, mostly in Michoacán, where the boom has been linked to forest loss."]],
    dishes:[],none:"No passport dish uses avocado. It's on the list as a local fruit that became a global brunch icon."}
];

const TRENDS=[
  ["1994","Nose-to-tail cooking","Fergus Henderson's St. JOHN in London made cooking the whole animal, from bone marrow to trotters, a chef's ethic copied worldwide.","EU"],
  ["2004","New Nordic & foraging","Chefs including Noma's René Redzepi signed a manifesto for seasonal, local and wild Nordic food, inspiring foraging menus everywhere.","OC"],
  ["2013","Edible insects","A landmark FAO report pitched insects as efficient protein. Thailand has around 20,000 insect farms, and the EU approved dried mealworms as food in 2021.","AS"],
  ["2020","Alternative proteins","Plant-based burgers went mainstream, and in December 2020 Singapore became the first country to approve lab-grown (cultivated) meat for sale.","AM"],
  ["2023","International Year of Millets","Proposed by India and declared by the UN, it championed hardy grains like sorghum and finger millet that need little water.","ME"],
  ["2024","Cutting food waste","The UN's Food Waste Index found 1.05 billion tonnes of food wasted in 2022, about a fifth of what reached consumers. Apps like Too Good To Go sell surplus meals cheaply.","AF"]
];

/* ---------- etiquette: [code, country, region, do|avoid|custom, rule, why] ---------- */
const ETI=[
  {id:"slurp",t:"Noodles & slurping",items:[
    ["JP","Japan","AS","do","Slurp your ramen and soba out loud.","Slurping cools hot noodles, carries the aroma and tells the cook you're enjoying it."],
    ["IT","Italy","EU","avoid","Don't slurp or cut your spaghetti.","Twirl a few strands with your fork against the plate. Many Italians see using a spoon as a habit for children."],
    ["CN","China","AS","custom","Don't cut birthday noodles.","Long noodles (chángshòu miàn) stand for a long life, so they're served and eaten whole."],
    ["KR","South Korea","AS","custom","\"When will you feed us noodles?\" means \"When's the wedding?\"","Janchi guksu, banquet noodles, are traditionally served at weddings for a long marriage."],
    ["TH","Thailand","AS","custom","Pick up chopsticks for noodle soup, and mostly only then.","Thais eat most meals with a spoon and fork; chopsticks came with Chinese noodle dishes."]]},
  {id:"chop",t:"Chopsticks",items:[
    ["JP","Japan","AS","avoid","Never stand chopsticks upright in rice, or pass food chopstick to chopstick.","Both echo funeral rites: rice offered to the dead, and passing cremated bones. Rest them on a holder (hashioki)."],
    ["KR","South Korea","AS","custom","Use flat metal chopsticks for side dishes and a spoon for rice and soup.","The set is called sujeo. Leave your rice bowl on the table; lifting it is considered impolite."],
    ["JP","Japan","AS","do","Lift your rice bowl toward your mouth.","In Japan, as in China, holding the bowl up is correct, the opposite of Korea."],
    ["CN","China","AS","avoid","Don't tap your bowl with your chopsticks.","It's associated with begging. Use serving chopsticks or a spoon for shared dishes."],
    ["VN","Vietnam","AS","do","Invite your elders to eat before you start.","Younger diners say \"mời\" (please) to each elder before lifting their chopsticks."]]},
  {id:"hands",t:"Eating with your hands",items:[
    ["IN","India","AS","do","Eat with your right hand only.","In the north, use your fingertips; in the south, the whole hand mixes rice and curry. On a banana leaf, folding it toward you at the end often signals you enjoyed the meal."],
    ["ET","Ethiopia","AF","do","Tear injera with your right hand, and feed a friend.","Gursha, placing a mouthful in someone else's mouth, shows respect and affection."],
    ["MA","Morocco","AF","do","Eat with three fingers of your right hand, using bread as a scoop.","From a shared tagine, eat only from the section in front of you."],
    ["JO","Jordan","ME","custom","Eat mansaf standing, left hand behind your back.","Roll rice and lamb into a ball with your right hand and push it into your mouth with your thumb."],
    ["NG","Nigeria","AF","custom","Pinch off \"swallow\" and dip it into the soup.","Fufu, eba and pounded yam are shaped with the fingers and usually swallowed rather than chewed."],
    ["PH","Philippines","AS","do","Join a kamayan feast on banana leaves.","Military \"boodle fights\" made eating by hand from one long table a celebration."],
    ["MX","Mexico","AM","do","Eat tacos with your hands.","A knife and fork marks you as a newcomer. Lean in, not the taco."]]},
  {id:"cutlery",t:"Fork, knife & spoon",items:[
    ["TH","Thailand","AS","avoid","Don't put your fork in your mouth.","The fork only pushes food onto the spoon, and the spoon goes in your mouth."],
    ["FR","France","EU","do","Keep both wrists on the table, and your bread on the tablecloth.","Hands in your lap look odd at a French table, and there's usually no bread plate."],
    ["GB","United Kingdom","EU","custom","Spoon your soup away from you.","Tilt the bowl away to get the last of it, and sip from the side of the spoon."],
    ["AT","Austria","EU","custom","Fork stays in your left hand, knife in your right.","This is the continental style. Americans often switch the fork to the right hand after cutting."],
    ["DK","Denmark","EU","do","Eat smørrebrød with a knife and fork.","Never by hand, and start with herring before moving on to meat and cheese."]]},
  {id:"drinks",t:"Toasts & drinks",items:[
    ["KR","South Korea","AS","do","Accept a drink with both hands and turn away from elders to sip.","It shows respect to the person pouring and to the seniors at the table."],
    ["JP","Japan","AS","do","Pour for others, never for yourself.","Watch your neighbors' glasses and someone will fill yours. Toast with \"kanpai!\""],
    ["CN","China","AS","custom","Clink with your glass lower than your host's or elder's.","\"Gānbēi\" literally means \"dry cup,\" so expect to empty it."],
    ["HU","Hungary","EU","avoid","Many Hungarians won't clink beer glasses.","Legend says Austrian officers toasted with beer after executing 13 Hungarian generals in 1849."],
    ["SA","Saudi Arabia","ME","custom","Gently shake your cup to say \"no more\" Arabic coffee.","Otherwise your host keeps refilling, a small pour at a time."],
    ["ET","Ethiopia","AF","custom","Stay for all three rounds of coffee.","The rounds are abol, tona and baraka; the third is said to bestow a blessing."],
    ["FJ","Fiji","OC","custom","At a kava ceremony, clap once, say \"bula,\" and drink in one go.","Then clap three times. Kava (yaqona) is shared from a single coconut-shell cup."]]},
  {id:"plate",t:"Clean plate or not?",items:[
    ["CN","China","AS","custom","Traditionally, leave a little food on your plate.","An empty plate could suggest the host didn't serve enough, though China's 2020 Clean Plate Campaign now urges diners to cut waste."],
    ["JP","Japan","AS","do","Finish every grain of rice.","Wasting food is \"mottainai.\" End with \"gochisōsama deshita\" to thank the cook."],
    ["IN","India","AS","avoid","Don't offer food from your own plate.","Food that has touched your plate or mouth (jootha) is considered impure for others."],
    ["FR","France","EU","custom","Asking for a doggy bag is now normal.","Since 2021, French restaurants must provide a container for leftovers when diners ask."],
    ["IR","Iran","ME","custom","Decline seconds once or twice before accepting.","Taarof, Persian politeness, means hosts insist and guests modestly refuse at first."],
    ["AR","Argentina","AM","do","Applaud the grill master.","\"Un aplauso para el asador\" closes every good asado."]]}
];

/* ---------- before-you-eat phrases: [code, region, native, romanized, meaning, BCP-47 lang, language name] ---------- */
const SAY=[
  ["JP","AS","いただきます","Itadakimasu","\"I humbly receive.\" Said before eating.","ja-JP","Japanese"],
  ["KR","AS","잘 먹겠습니다","Jal meokgesseumnida","\"I will eat well.\" Said to the host or cook.","ko-KR","Korean"],
  ["TH","AS","กินข้าวหรือยัง","Kin khao rue yang?","\"Have you eaten rice yet?\" An everyday greeting.","th-TH","Thai"],
  ["CN","AS","慢慢吃","Màn man chī","\"Eat slowly.\" A host's way of saying enjoy.","zh-CN","Chinese"],
  ["ID","AS","Selamat makan","Selamat makan","\"Enjoy your meal\" in Indonesian and Malay.","id-ID","Indonesian"],
  ["PH","AS","Kain tayo!","Kain tayo","\"Let's eat!\" An invitation to anyone nearby.","fil-PH","Filipino"],
  ["LB","ME","صحتين","Sahtein","\"Two healths.\" To your health, in Levantine Arabic.","ar-LB","Arabic"],
  ["IR","ME","نوش جان","Nush-e jan","\"May it nourish your soul.\"","fa-IR","Persian"],
  ["TR","ME","Afiyet olsun","Afiyet olsun","\"May it bring you health.\"","tr-TR","Turkish"],
  ["ET","AF","እንብላ","Enebla","\"Let's eat!\" An invitation in Amharic.","am-ET","Amharic"],
  ["KE","AF","Karibu chakula","Karibu chakula","\"Welcome to the food.\" Come and eat, in Swahili.","sw-KE","Swahili"],
  ["FR","EU","Bon appétit","Bon appétit","\"Good appetite.\"","fr-FR","French"],
  ["IT","EU","Buon appetito","Buon appetito","\"Good appetite.\"","it-IT","Italian"],
  ["PL","EU","Smacznego!","Smacznego","\"Tasty!\" Enjoy your meal.","pl-PL","Polish"],
  ["DK","EU","Tak for mad","Tak for mad","\"Thanks for the food.\" Said after the meal.","da-DK","Danish"],
  ["MX","AM","¡Buen provecho!","Buen provecho","\"Enjoy.\" Said even to strangers who are eating.","es-MX","Spanish"]
];

/* ---------- quiz: [situation, isPolite, explanation] ---------- */
const QUIZ=[
  ["Slurping your ramen loudly at a Tokyo noodle bar.",true,"In Japan slurping shows you're enjoying the noodles, and it cools them down."],
  ["Standing your chopsticks upright in a bowl of rice in Japan.",false,"It resembles rice offered to the dead at funerals. Rest them on a chopstick holder instead."],
  ["Scooping injera with your left hand in Ethiopia.",false,"Eat with your right hand; the left is traditionally kept away from food."],
  ["Lifting your rice bowl to your mouth at a Korean meal.",false,"In Korea the bowl stays on the table and rice is eaten with a spoon. In Japan and China, lifting it is correct."],
  ["Putting your fork in your mouth in Thailand.",false,"The fork pushes food onto the spoon; only the spoon goes in your mouth."],
  ["Clinking beer glasses with Hungarian friends.",false,"Many Hungarians avoid it because of a legend tied to the executions of 1849."],
  ["Applauding the grill master at an Argentine asado.",true,"\"Un aplauso para el asador\" is a beloved tradition."],
  ["Gently shaking your empty cup when served Arabic coffee.",true,"It tells your host you've had enough."],
  ["Cutting your spaghetti with a knife in Rome.",false,"Twirl it with your fork instead."],
  ["Resting your hands in your lap during a French dinner.",false,"In France, keep your wrists on the table."],
  ["Feeding a friend a mouthful of injera in Ethiopia.",true,"Gursha is a gesture of friendship and respect."],
  ["Pouring your own drink first at a dinner in Japan.",false,"Pour for others and let them fill your glass."],
  ["Saying \"¡Buen provecho!\" as you pass people eating in Mexico.",true,"It's an everyday courtesy toward anyone at the table."],
  ["Saying \"tak for mad\" to your host after a meal in Denmark.",true,"It means \"thanks for the food,\" and it's expected."]
];

/* ---------- gastrodiplomacy timeline ---------- */
const DIPLO=[
  ["2002","TH","Thailand","AS","Global Thai","The government set out to grow the number of Thai restaurants abroad from about 5,500 to 8,000 by 2003, and later created the Thai SELECT label for authentic Thai restaurants. The Economist called it \"gastro-diplomacy.\"",[0,1,2]],
  ["2008","PE","Peru","AM","Mistura & Marca Perú","Chef Gastón Acurio and the Peruvian Gastronomy Society launched Mistura, a huge food fair in Lima. Peru declared 28 June National Ceviche Day that year, and the Marca Perú country brand (2011) put food at the center of its image.",[64,65]],
  ["2009","KR","South Korea","AS","Global Hansik","Korea's government aimed to make hansik one of the world's top five cuisines, funding cooking schools, translated menus and Korean restaurants abroad. The Korean Food Foundation followed in 2010.",[8,9]],
  ["2010","MY","Malaysia","AS","Malaysia Kitchen for the World","The trade agency MATRADE promoted Malaysian restaurants and products in cities such as London, New York and Sydney with food festivals and support for restaurateurs.",[13]],
  ["2010","MX","Mexico & France","AM","Cuisine joins UNESCO's list","In November 2010, UNESCO inscribed traditional Mexican cuisine, the gastronomic meal of the French and the Mediterranean diet, the first food traditions on its Intangible Cultural Heritage list.",[63,49,44]],
  ["2012","US","United States","AM","Diplomatic Culinary Partnership","The State Department enlisted more than 80 chefs into an American Chef Corps to cook at embassies, host foreign leaders and lead culinary exchanges.",[71,72]],
  ["2013","JP","Japan","AS","Washoku goes global","UNESCO inscribed washoku in 2013, and Japan's agriculture ministry later began naming Japanese Cuisine Goodwill Ambassadors. Japanese restaurants abroad grew from about 24,000 in 2006 to around 187,000 in 2023.",[4,3]],
  ["2015","FR","France","EU","Goût de France / Good France","On 19 March 2015, more than 1,000 chefs on five continents served French dinners on the same night, organized by France's foreign ministry with chef Alain Ducasse.",[49,50]],
  ["2016","IT","Italy","EU","Week of Italian Cuisine in the World","Every November, Italy's embassies and cultural institutes host dinners, classes and talks promoting authentic Italian food abroad.",[46,47,48]],
  ["2021","ID","Indonesia","AS","Indonesia Spice Up the World","A government program targeting 4,000 Indonesian restaurants abroad by 2024, with rendang among its flagship dishes.",[14]],
  ["2023","NG","Nigeria","AF","A cook-a-thon goes viral","Chef Hilda Baci cooked for 93 hours and 11 minutes in Lagos, setting a Guinness World Record that put jollof and Nigerian food in global headlines.",[32,33]]
];

/* ---------- UNESCO Intangible Cultural Heritage linked to passport dishes ---------- */
const UNESCO=[
  ["2010","Traditional Mexican cuisine","Mexico",[63]],
  ["2010","Gastronomic meal of the French","France",[49,50]],
  ["2010","Mediterranean diet (extended 2013)","Spain, Greece, Morocco and others",[44,45,52,35]],
  ["2013","Washoku","Japan",[4]],
  ["2013","Kimjang, making kimchi","South Korea",[9]],
  ["2016","Palov culture","Uzbekistan",[21]],
  ["2016","Beer culture","Belgium",[61]],
  ["2017","Art of the Neapolitan pizzaiuolo","Italy",[46]],
  ["2020","Hawker culture","Singapore",[20]],
  ["2021","Ceebu jën","Senegal",[41]],
  ["2022","Al-Mansaf","Jordan",[25]],
  ["2022","Harissa","Tunisia",[40]],
  ["2022","Ukrainian borscht cooking","Ukraine",[57]],
  ["2023","Ceviche","Peru",[64]],
  ["2024","Tom yum kung","Thailand",[1]],
  ["2024","Jang-making","South Korea",[8]]
];

/* ---------- shared helpers ---------- */
const pad2=n=>String(n).padStart(2,"0");
const dchip=i=>{const d=DISHES[i];return `<button type="button" class="dchip" data-dish="${i}" style="--tone:var(--r-${d.r})"><span>${d.cc}</span>${esc(d.n)}</button>`};
const shuffle=a=>{a=a.slice();for(let k=a.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[a[k],a[j]]=[a[j],a[k]]}return a};
const ICO={
  globe:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  route:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="5" r="2.2"/><path d="M7.2 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7.8" stroke-dasharray="2.5 2.5"/></svg>',
  bowl:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 12h18a9 9 0 0 1-18 0Z"/><path d="M9 8 12 2M13.5 8 18 3"/></svg>',
  speak:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>'
};

/* jump from any section to a stamp in the passport grid and turn it over */
function jumpToDish(i){
  document.querySelectorAll("dialog[open]").forEach(d=>d.close());
  goPush("stamps",{noTurn:true});
  q.value="";
  if(region!=="ALL")setRegion("ALL",false);else render(false);
  ensureShown(i);
  const c=grid.querySelector(`.card[data-i="${i}"]`);if(!c)return;
  c.scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"});
  flip(c,true);c.focus({preventScroll:true});
  c.classList.remove("winner");void c.offsetWidth;c.classList.add("winner");
  toast(`Stamp No. ${pad2(i+1)}: ${DISHES[i].n}, ${DISHES[i].c}`);
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-dish]");if(b){e.preventDefault();jumpToDish(+b.dataset.dish)}});

/* long lists start short; "Show all" expands them and "Show fewer" folds them back */
const EXP={fz:false,say:false,gd:false,un:false},LIMIT={fz:6,say:99,gd:99,un:99};
const cap=(key,list)=>EXP[key]?list:list.slice(0,LIMIT[key]);
function moreBtn(id,key,total,noun){
  $("#"+id).innerHTML=total>LIMIT[key]?`<button type="button" class="more" data-exp="${key}" aria-expanded="${EXP[key]}">${EXP[key]?`Show fewer ${noun}`:`Show all ${total} ${noun}`}</button>`:"";
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-exp]");if(!b)return;
  const k=b.dataset.exp;EXP[k]=!EXP[k];({fz:renderFusion,say:renderSay,gd:renderDiplo,un:renderDiplo})[k]();
  const nb=$(`[data-exp="${k}"]`);if(nb){nb.focus({preventScroll:true});if(!EXP[k])nb.scrollIntoView({block:"center"})}
});

/* ---------- food story dialog ---------- */
let storyIdx=0;
function openStory(i){
  storyIdx=i;const d=DISHES[i],s=STORY[i],ph=PHOTOS[i],j=s.k?JOURNEY.find(x=>x.id===s.k):null;
  const dlg=openDlg("#storyDlg");dlg.style.setProperty("--tone",`var(--r-${d.r})`);
  $("#storyBody").innerHTML=`
    ${ph?`<figure class="st-hero"><img src="${esc(ph.src)}" alt="${esc(d.n)}" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"><a class="credit" href="${esc(ph.page)}" target="_blank" rel="noopener">Photo · Wikipedia</a></figure>`:""}
    <p class="eyebrow">Food story · ${esc(d.c)}</p>
    <h2 id="storyTitle">${esc(d.n)}</h2>
    ${s.u?`<p class="st-unesco"><b>UNESCO</b><span>Intangible Cultural Heritage: ${esc(s.u)}</span></p>`:""}
    <div class="st-secs">
      <section class="st-sec"><span class="st-ic">${ICO.globe}</span><div><h3>Global flavors</h3><p>${esc(s.g)}</p></div></section>
      <section class="st-sec"><span class="st-ic">${ICO.route}</span><div><h3>Journey of an ingredient</h3><b class="st-ing">${esc(s.ing)}</b><p>${esc(s.ij)}</p>${j?`<button type="button" class="passlink" data-ing="${j.id}">Follow the ${esc(j.n.toLowerCase())} around the world</button>`:""}</div></section>
      <section class="st-sec"><span class="st-ic">${ICO.bowl}</span><div><h3>How to eat it</h3><p>${esc(s.e)}</p></div></section>
    </div>
    <div class="st-nav"><button type="button" class="btn" data-step="-1" aria-label="Previous dish">‹ Previous</button><span>No. ${pad2(i+1)} of 80</span><button type="button" class="btn" data-step="1" aria-label="Next dish">Next ›</button></div>`;
  dlg.scrollTop=0;
}
function stepStory(n){openStory((storyIdx+n+80)%80);const b=$(`#storyBody [data-step="${n}"]`);b&&b.focus()}
$("#storyBody").addEventListener("click",e=>{
  const st=e.target.closest("[data-step]");if(st){stepStory(+st.dataset.step);return}
  const ing=e.target.closest("[data-ing]");
  if(ing){$("#storyDlg").close();jrRevealed=true;goPush("journeys",{scroll:true});pickJourney(ing.dataset.ing,true)}
});
$("#storyDlg").addEventListener("keydown",e=>{
  if((e.key==="ArrowRight"||e.key==="ArrowLeft")&&!e.target.closest("input,textarea,select")){e.preventDefault();stepStory(e.key==="ArrowRight"?1:-1)}
});

/* ---------- fusion kitchen ---------- */
let fzF="all";
function renderFusion(){
  const n=k=>FUSION.filter(f=>k==="all"||(k==="pass"?f.dish!=null:f.kind===k)).length;
  $("#fzTabs").innerHTML=[["all","All fusions"],["mash","Creative menus"],["adapt","Adapted for new palates"],["pass","In your passport"]]
    .map(([k,t])=>`<button class="chip" type="button" data-f="${k}" aria-pressed="${k===fzF}">${t} <span class="n">${n(k)}</span></button>`).join("");
  const list=FUSION.filter(f=>fzF==="all"||(fzF==="pass"?f.dish!=null:f.kind===fzF));
  moreBtn("fzMore","fz",list.length,"fusion dishes");
  $("#fzGrid").innerHTML=cap("fz",list).map((f,k)=>`
    <article class="fz" id="fz-${f.id}" style="--a:var(--r-${f.a[2]});--b:var(--r-${f.b[2]});--i:${k}">
      <div class="fz-band" aria-hidden="true"></div>
      <p class="fz-codes"><span class="a">${f.a[0]}</span><span class="x" aria-hidden="true">×</span><span class="b">${f.b[0]}</span><span class="fz-cu">${esc(f.a[1])} meets ${esc(f.b[1])}</span></p>
      <h3>${esc(f.n)}</h3>
      <p class="fz-born">${esc(f.born)}</p>
      <p class="fz-blend"><span>The blend</span>${esc(f.blend)}</p>
      <p class="fz-story">${esc(f.story)}</p>
      <div class="fz-foot"><span class="kind">${f.kind==="mash"?"Creative menu":"Adapted abroad"}</span>${f.dish!=null?`<button type="button" class="passlink" data-dish="${f.dish}">See stamp No. ${pad2(f.dish+1)}</button>`:""}</div>
    </article>`).join("");
}
$("#fzTabs").addEventListener("click",e=>{const b=e.target.closest("[data-f]");if(b&&b.dataset.f!==fzF){fzF=b.dataset.f;renderFusion()}});
function setReel(el,txt,reg){
  el.innerHTML=`<span>${esc(txt)}</span>`;el.style.setProperty("--rc",reg?`var(--r-${reg})`:"var(--ink)");
  if(!reduce){el.classList.remove("tick");void el.offsetWidth;el.classList.add("tick")}
}
let wokBusy=false;
$("#wokBtn").addEventListener("click",async()=>{
  if(wokBusy)return;wokBusy=true;
  const btn=$("#wokBtn");btn.classList.remove("go");void btn.offsetWidth;btn.classList.add("go");
  const pick=FUSION[Math.floor(Math.random()*FUSION.length)],names=[...new Set(FUSION.flatMap(f=>[f.a[1],f.b[1]]))];
  if(fzF!=="all"||(!EXP.fz&&FUSION.indexOf(pick)>=LIMIT.fz)){fzF="all";if(FUSION.indexOf(pick)>=LIMIT.fz)EXP.fz=true;renderFusion()}
  const A=$("#reelA"),B=$("#reelB"),rnd=()=>names[Math.floor(Math.random()*names.length)];
  for(let t=0,n=reduce?0:14;t<n;t++){setReel(A,rnd());setReel(B,rnd());await wait(50+t*13)}
  setReel(A,pick.a[1],pick.a[2]);await wait(reduce?0:180);setReel(B,pick.b[1],pick.b[2]);
  $("#wokOut").innerHTML=`<b>${esc(pick.n)}</b> · ${esc(pick.born)}`;
  await wait(reduce?0:500);
  const c=$("#fz-"+pick.id);
  if(c){c.scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"});c.classList.remove("hit");void c.offsetWidth;c.classList.add("hit");setTimeout(()=>c.classList.remove("hit"),2200)}
  wokBusy=false;
});

/* ---------- ingredient journeys ---------- */
let jrId="chili",jrView={lon:-150,lat:10},jrRaf=0,jrHi=null;
const ERAS=[["old","Crops that crossed oceans"],["modern","Local favorites gone global"]];
function renderJourneyList(){
  $("#jrList").innerHTML=ERAS.map(([e,t])=>`<p class="jr-era">${t}</p>`+JOURNEY.filter(j=>(j.era||"old")===e).map(j=>`<button type="button" class="cargo" data-j="${j.id}" aria-pressed="${j.id===jrId}" style="--tone:var(--r-${j.r})"><span class="cg-ic" aria-hidden="true">${j.code}</span><b>${esc(j.n)}</b><small>From ${esc(j.from)}</small></button>`).join("")).join("");
}
function pickJourney(id,anim){
  jrId=id;const j=JOURNEY.find(x=>x.id===id);if(!j)return;
  $("#jrList").querySelectorAll(".cargo").forEach(b=>b.setAttribute("aria-pressed",b.dataset.j===id));
  $("#jrPanel").style.setProperty("--tone",`var(--r-${j.r})`);
  $("#jrMain").innerHTML=`
    <p class="eyebrow">Cargo ${j.code} · ${j.stops.length} stops</p>
    <h3 class="jr-name">${esc(j.n)}</h3>
    <p class="jr-sum">${esc(j.sum)}</p>
    <ol class="jr-stops${anim&&!reduce?" go":""}">${j.stops.map(([w,p,t],k)=>`<li style="--k:${k}"><span class="yr">${esc(w)}</span><b>${esc(p)}</b><p>${esc(t)}</p></li>`).join("")}</ol>
    ${j.dishes.length?`<div class="jr-dishes"><h4 class="mini-h">${j.dl||"Find it in your passport"}</h4><div class="dchips">${j.dishes.map(dchip).join("")}</div></div>`:`<div class="jr-dishes"><h4 class="mini-h">In your passport</h4><p class="muted">${esc(j.none)}</p></div>`}`;
  $("#jrOrigin").textContent=j.origin;$("#jrNow").textContent=j.now;$("#jrNowL").textContent=j.nowL||"Biggest grower today";
  $("#jrCv").setAttribute("aria-label",`Globe turned toward ${j.origin}, where ${j.n.toLowerCase()} began`);
  if(anim)globeTo(j.lon,j.lat,j.r);else{jrView={lon:j.lon,lat:j.lat};jrHi=j.r;drawJr(0)}
}
function drawJr(p){const cv=$("#jrCv");if(cv&&cv.width)drawGlobe(cv,jrView.lon,jrView.lat,jrHi,p)}
function globeTo(lon,lat,hi){
  cancelAnimationFrame(jrRaf);
  const from={...jrView},dl=((lon-from.lon+540)%360)-180,t0=performance.now(),dur=reduce?0:1300,pin=$("#jrPin");
  jrHi=hi;pin.classList.remove("ping");
  const pulse=()=>{const l0=performance.now();const f=t=>{const k=Math.min(1,(t-l0)/1200);drawJr((1-Math.cos(k*Math.PI*4))/2);if(k<1)jrRaf=requestAnimationFrame(f)};jrRaf=requestAnimationFrame(f)};
  const tick=t=>{
    const p=dur?Math.min(1,(t-t0)/dur):1,e=1-Math.pow(1-p,3);
    jrView={lon:from.lon+dl*e,lat:from.lat+(lat-from.lat)*e};drawJr(0);
    if(p<1)jrRaf=requestAnimationFrame(tick);
    else{jrView.lon=((jrView.lon+540)%360)-180;if(!reduce){void pin.offsetWidth;pin.classList.add("ping");pulse()}}
  };
  jrRaf=requestAnimationFrame(tick);
}
$("#jrList").addEventListener("click",e=>{const b=e.target.closest("[data-j]");if(b)pickJourney(b.dataset.j,true)});
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",()=>drawJr(0));
function renderTrends(){
  $("#trGrid").innerHTML=TRENDS.map(([y,t,p,r])=>`<article class="tr" style="--tone:var(--r-${r})"><span class="yr">${y}</span><h4>${esc(t)}</h4><p>${esc(p)}</p></article>`).join("");
}

/* ---------- dining etiquette ---------- */
let etT="slurp";
const VERDICT={do:["✓","Do"],avoid:["✕","Avoid"],custom:["•","Local custom"]};
function renderEti(){
  $("#etTabs").innerHTML=ETI.map(t=>`<button class="chip" type="button" data-t="${t.id}" aria-pressed="${t.id===etT}">${esc(t.t)}</button>`).join("");
  const topic=ETI.find(t=>t.id===etT);
  $("#etGrid").innerHTML=topic.items.map(([cc,c,r,v,rule,why],k)=>`
    <article class="et" style="--tone:var(--r-${r});--i:${k}">
      <span class="et-cc" aria-hidden="true">${cc}</span>
      <div class="et-top"><span>${esc(c)}</span><span class="verdict ${v}"><span aria-hidden="true">${VERDICT[v][0]}</span>${VERDICT[v][1]}</span></div>
      <h4>${esc(rule)}</h4>
      <p>${esc(why)}</p>
    </article>`).join("");
}
$("#etTabs").addEventListener("click",e=>{const b=e.target.closest("[data-t]");if(b&&b.dataset.t!==etT){etT=b.dataset.t;renderEti()}});

/* spotlight: slurping in Japan, chopstick etiquette, and eating with your hands in India */
const SPOT_ART={
  slurp:'<svg viewBox="0 0 160 110" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 58h116a58 38 0 0 1-116 0Z" fill="currentColor" fill-opacity=".12"/><path d="M62 104h36"/><path d="M96 8 136 2M92 16 134 12"/><path d="M100 14c-6 12 6 22-2 40M108 13c-5 12 7 22 0 41M116 12c-4 12 8 23 2 42"/><path d="M44 46c-6-7 6-12 0-20M58 44c-6-7 6-12 0-20" opacity=".55"/></svg>',
  chop:'<svg viewBox="0 0 160 124" fill="currentColor" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><g fill-opacity=".18"><path d="M27 4h6l-1.2 96h-3.6z"/><path d="M38 4h6l-1.2 96h-3.6z"/></g><g fill-opacity=".18"><path d="M72 26h6l-2.4 74h-1.2z"/><path d="M83 26h6l-2.4 74h-1.2z"/></g><g fill-opacity=".4"><rect x="117" y="18" width="4.5" height="82" rx="1"/><rect x="128" y="18" width="4.5" height="82" rx="1"/></g><g stroke="none" font-family="Courier Prime,Courier New,monospace" font-size="11" font-weight="700" text-anchor="middle"><text x="35.5" y="118">CN</text><text x="80.5" y="118">JP</text><text x="125" y="118">KR</text></g></svg>',
  hands:'<svg viewBox="0 0 160 110" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 78C30 30 104 10 154 26C132 72 62 100 8 78Z" fill="currentColor" fill-opacity=".14"/><path d="M12 76C58 58 106 40 150 28"/><path d="M40 66l-6 10M66 57l-4 14M92 47l-2 16M118 38l2 14" stroke-width="1.4" opacity=".5"/><circle cx="50" cy="49" r="5"/><circle cx="70" cy="41" r="5.5"/><circle cx="94" cy="34" r="5"/><circle cx="116" cy="29" r="4"/><path d="M62 72c4-12 28-12 32 0Z" fill="currentColor" fill-opacity=".3"/></svg>'
};
const SPOTS=[
  {id:"slurp",r:"AS",kick:"Japan · Noodles",t:"Why slurping is polite in Japan",more:"More noodle manners",pts:[
    "Slurping (susuru) ramen, soba and udon is normal and polite. It cools hot noodles and draws in the broth's aroma.",
    "A hearty slurp is often taken as a sign that you're enjoying the bowl.",
    "On New Year's Eve many families eat toshikoshi soba: long noodles for a long life.",
    "In 2017 Nissin unveiled the Otohiko, a fork that masks slurping sounds for diners worried about bothering others."],
    extra:'<div class="spot-vs"><span class="verdict do"><span aria-hidden="true">✓</span>Polite in Japan</span><span class="verdict avoid"><span aria-hidden="true">✕</span>Rude in much of Europe &amp; North America</span></div>'},
  {id:"chop",r:"OC",kick:"China · Japan · Korea",t:"Chopsticks: three countries, three shapes",more:"More chopstick rules",pts:[
    "China: the longest, with blunt tips, handy for reaching shared dishes across a round table.",
    "Japan: shorter, with pointed tips that make it easier to pick fish off the bone.",
    "Korea: flat and metal, usually stainless steel, paired with a long-handled spoon (the set is called sujeo).",
    "Japan even names its chopstick taboos (kirai-bashi): sashi-bashi is spearing food, mayoi-bashi is hovering over dishes, neburi-bashi is licking your chopsticks.",
    "Bronze chopsticks more than 3,000 years old have been found at Yinxu, the Shang dynasty capital in China."]},
  {id:"hands",r:"ME",kick:"India · Eating with your hands",t:"The art of eating with your hands",more:"More on eating with your hands",pts:[
    "Use only your right hand, and wash your hands before and after the meal.",
    "In the north, food stays on your fingertips; in the south, the whole hand mixes rice with sambar or rasam.",
    "Many people say touch makes food taste better: your fingers feel its heat and texture first.",
    "At a Kerala sadya, two dozen or more dishes are laid out on a banana leaf in set places. Fold the leaf toward you to say you enjoyed it."],
    extra:'<p class="spot-note">Ayurvedic tradition links each finger to one of the five elements:</p><div class="spot-chips"><span><b>Thumb</b> fire (agni)</span><span><b>Index</b> air (vayu)</span><span><b>Middle</b> space (akasha)</span><span><b>Ring</b> earth (prithvi)</span><span><b>Little</b> water (jala)</span></div>'}
];
function renderSpots(){
  $("#spots").innerHTML=SPOTS.map(x=>`<article class="spot" style="--tone:var(--r-${x.r})">
    <div class="spot-art" aria-hidden="true">${SPOT_ART[x.id]}</div>
    <div class="spot-body"><p class="eyebrow">${esc(x.kick)}</p><h3>${esc(x.t)}</h3>
      <ul>${x.pts.map(t=>`<li>${esc(t)}</li>`).join("")}</ul>${x.extra||""}
      <button type="button" class="passlink" data-etopic="${x.id}">${esc(x.more)}</button></div>
  </article>`).join("");
}
$("#spots").addEventListener("click",e=>{
  const b=e.target.closest("[data-etopic]");if(!b)return;
  etT=b.dataset.etopic;renderEti();$("#etSub").scrollIntoView({behavior:reduce?"auto":"smooth"});
});

/* phrases, read aloud with the Web Speech API when the device has a matching voice */
function renderSay(){
  moreBtn("sayMore","say",SAY.length,"phrases");
  $("#sayGrid").innerHTML=cap("say",SAY).map(([cc,r,nat,rom,mean,lang,ln],k)=>`
    <button type="button" class="say" data-say="${k}" style="--tone:var(--r-${r})" aria-label="Hear ${esc(rom)}, ${esc(ln)}: ${esc(mean)}">
      <span class="nat" lang="${lang}">${esc(nat)}</span><span class="spk">${ICO.speak}</span>
      <span class="rom">${esc(rom)}</span>
      <span class="mean">${esc(mean)}</span>
      <span class="cc">${cc} · ${esc(ln)}</span>
    </button>`).join("");
}
try{speechSynthesis.getVoices()}catch(e){}
$("#sayGrid").addEventListener("click",e=>{
  const b=e.target.closest("[data-say]");if(!b)return;
  const [,,nat,rom,,lang,ln]=SAY[+b.dataset.say];
  if(!("speechSynthesis" in window)||typeof SpeechSynthesisUtterance==="undefined"){toast("This browser can't read phrases aloud. The pronunciation is on the card.");return}
  const ss=speechSynthesis;ss.cancel();
  document.querySelectorAll(".say.talking").forEach(x=>x.classList.remove("talking"));
  const vs=ss.getVoices(),L=lang.toLowerCase(),base=L.split("-")[0];
  const v=vs.find(x=>x.lang.toLowerCase().replace("_","-")===L)||vs.find(x=>x.lang.toLowerCase().startsWith(base));
  const u=new SpeechSynthesisUtterance(v?nat:rom);
  if(v){u.voice=v;u.lang=v.lang}else{u.lang="en-US";toast(`No ${ln} voice on this device, so you'll hear the romanized spelling.`)}
  u.rate=.85;b.classList.add("talking");
  u.onend=u.onerror=()=>b.classList.remove("talking");
  ss.speak(u);
});

/* quiz: polite or faux pas? */
let QZ={deck:[],i:0,score:0,answered:false};
function quizStart(){QZ={deck:shuffle(QUIZ).slice(0,8),i:0,score:0,answered:false};quizRender()}
function quizRender(){
  const box=$("#quiz"),n=QZ.deck.length;
  if(QZ.i>=n){
    const s=QZ.score,rank=s>=8?"Ambassador":s>=6?"Diplomat":s>=4?"Seasoned traveler":"Tourist in training";
    box.innerHTML=`<div class="qz-end">
      <div class="qz-visa${s>=6?"":" fail"}" aria-hidden="true"><div>Etiquette visa<b>${s}/${n}</b>${s>=6?"Approved":"Pending"}</div></div>
      <div><p class="eyebrow">Your result</p><p class="qz-q">${rank}</p><p class="muted">${s>=6?"Your etiquette visa is approved. You'd be welcome at tables from Tokyo to Addis Ababa.":"Score six or more for an approved visa. Browse the table-manner cards above and try again."}</p>
      <div class="qz-again"><button type="button" class="btn primary" data-qz="again">Take a new set of questions</button></div></div></div>`;
    return;
  }
  const [txt,ok,why]=QZ.deck[QZ.i];
  box.innerHTML=`
    <div class="qz-top"><span>Question ${QZ.i+1} of ${n}</span><div class="meter"><i style="width:${QZ.i/n*100}%"></i></div><span>Score ${QZ.score}</span></div>
    <p class="qz-q">${esc(txt)}</p>
    <div class="qz-btns"><button type="button" class="btn" data-qz="1">Polite</button><button type="button" class="btn" data-qz="0">Faux pas</button></div>
    <div class="qz-fb" id="qzFb" aria-live="polite"></div>`;
}
$("#quiz").addEventListener("click",e=>{
  const b=e.target.closest("[data-qz]");if(!b)return;
  const a=b.dataset.qz;
  if(a==="again"){quizStart();$("#quiz [data-qz]")?.focus();return}
  if(a==="next"){QZ.i++;QZ.answered=false;quizRender();$("#quiz [data-qz]")?.focus();return}
  if(QZ.answered)return;QZ.answered=true;
  const [,ok,why]=QZ.deck[QZ.i],right=(a==="1")===ok;if(right)QZ.score++;
  $("#quiz").querySelectorAll(".qz-btns .btn").forEach(x=>{x.disabled=true;if((x.dataset.qz==="1")===ok)x.classList.add("right");else if(x===b)x.classList.add("wrong")});
  $("#qzFb").innerHTML=`<p><b>${right?"Correct.":"Not quite."}</b> ${ok?"Polite.":"Faux pas."} ${esc(why)}</p><button type="button" class="btn primary" data-qz="next">${QZ.i+1>=QZ.deck.length?"See my visa":"Next question"}</button>`;
  $("#qzFb [data-qz]").focus();
});

/* ---------- gastrodiplomacy ---------- */
function renderDiplo(){
  moreBtn("gdMore","gd",DIPLO.length,"moments");moreBtn("unMore","un",UNESCO.length,"listings");
  $("#gdList").innerHTML=cap("gd",DIPLO).map(([y,cc,c,r,t,p,ds])=>`
    <li class="gd-item" style="--tone:var(--r-${r})">
      <span class="gd-yr">${y}</span>
      <div class="gd-card"><p class="gd-meta"><b>${cc}</b>${esc(c)}</p><h3>${esc(t)}</h3><p>${esc(p)}</p><div class="dchips">${ds.map(dchip).join("")}</div></div>
    </li>`).join("");
  $("#unList").innerHTML=cap("un",UNESCO).map(([y,t,c,ds])=>`<li style="--tone:var(--r-${DISHES[ds[0]].r})"><span class="y">${y}</span><div><b>${esc(t)}</b><span class="un-c">${esc(c)}</span><div class="dchips">${ds.map(dchip).join("")}</div></div></li>`).join("");
}

/* =========================================================
   Passport pages: each feature lives on its own page. Tabs and a contents index switch pages,
   the URL hash remembers the page (so Back works), and each first visit earns an entry stamp.
   ========================================================= */
const PAGES=[
  {id:"stamps",tab:"Stamps",t:"Passport stamps",g:"Passport",d:`${DISHES.length} dishes to turn over, read and stamp`,r:"red"},
  {id:"fusion",tab:"Fusion",t:"Fusion kitchen",g:"Global flavors",d:`${FUSION.length} real dishes born where two cuisines met`,r:"r-AM"},
  {id:"journeys",tab:"Journeys",t:"Ingredient journeys",g:"Ingredients",d:`${JOURNEY.length} ingredients traced from where they began`,r:"r-AF"},
  {id:"trends",tab:"Trends",t:"Sustainable trends",g:"Ingredients",d:`${TRENDS.length} ideas changing how the world eats`,r:"r-OC"},
  {id:"manners",tab:"Manners",t:"Table manners",g:"Etiquette",d:`${ETI.length} topics, from slurping to clean plates`,r:"r-AS"},
  {id:"phrases",tab:"Phrases",t:"Say it before you eat",g:"Etiquette",d:`${SAY.length} mealtime phrases, read aloud`,r:"r-ME"},
  {id:"quiz",tab:"Quiz",t:"Polite or faux pas?",g:"Etiquette",d:"8 questions for your etiquette visa",r:"red"},
  {id:"diplomacy",tab:"Diplomacy",t:"Gastrodiplomacy",g:"Diplomacy",d:`${DIPLO.length} campaigns that used food as soft power`,r:"blue"},
  {id:"unesco",tab:"UNESCO",t:"UNESCO heritage",g:"Diplomacy",d:`${UNESCO.length} food traditions on UNESCO's lists`,r:"r-EU"}
];
const itin=$("#itin"),navwrap=$("#navwrap"),pIdx=id=>PAGES.findIndex(p=>p.id===id);
let curPage=null,VISITED={};
try{VISITED=JSON.parse(store.get("80d_pages")||"{}")||{}}catch(e){VISITED={}}
const setNavH=()=>document.documentElement.style.setProperty("--navh",navwrap.offsetHeight+"px");
ICO.book='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 21.5V4.5M9 7h7M9 11h5"/></svg>';

/* the machine-readable zone printed along the bottom of every passport page */
function mrz(p,k){
  const L=44,f=x=>x.toUpperCase().normalize("NFD").replace(/[^A-Z0-9]+/g,"<");
  const a=("P<WLD"+f(p.t)+"<<"+f(p.g)).padEnd(L,"<").slice(0,L),b=("80D"+pad2(k+1)+"<<"+f(p.d)).padEnd(L,"<").slice(0,L);
  return esc(a)+"<br>"+esc(b);
}
function buildPages(){
  let html=`<button type="button" class="toc-btn" id="tocBtn" aria-haspopup="dialog">${ICO.book}<span>Contents</span></button>`,lastG="";
  PAGES.forEach((p,k)=>{
    if(k&&p.g!==lastG)html+=`<span class="tab-sep" aria-hidden="true"></span>`;lastG=p.g;
    html+=`<a href="#${p.id}" class="tab${VISITED[p.id]?" seen":""}" data-p="${p.id}" style="--tone:var(--${p.r})" title="${esc(p.t)}"><small>${pad2(k+1)}</small>${p.tab}</a>`;
    const sec=$("#page-"+p.id),head=sec.querySelector(".page-head"),prev=PAGES[k-1],next=PAGES[k+1]||PAGES[0];
    sec.style.setProperty("--tone",`var(--${p.r})`);
    head.querySelector(".ph-title").insertAdjacentHTML("afterbegin",`<p class="eyebrow">${esc(p.g)} · Page ${pad2(k+1)} of ${pad2(PAGES.length)}</p>`);
    head.insertAdjacentHTML("beforeend",`<span class="page-no" aria-hidden="true">${pad2(k+1)}</span><div class="entry" aria-hidden="true"><small>Admitted</small><b>${esc(p.t)}</b><span class="entry-d"></span><small>80D · P${pad2(k+1)}</small></div>`);
    sec.insertAdjacentHTML("beforeend",`<div class="mrz" aria-hidden="true">${mrz(p,k)}</div>
      <nav class="pager" aria-label="Previous and next pages">${prev?`<a class="pg prev" href="#${prev.id}" style="--tone:var(--${prev.r})"><span>‹ Page ${pad2(k)}</span><b>${esc(prev.t)}</b></a>`:"<span></span>"}<a class="pg next" href="#${next.id}" style="--tone:var(--${next.r})"><span>${PAGES[k+1]?`Page ${pad2(k+2)}`:"Back to page 01"} ›</span><b>${esc(next.t)}</b></a></nav>`);
  });
  itin.innerHTML=html;
}
function centerTab(){
  const a=itin.querySelector(".tab[aria-current]");
  if(a&&itin.scrollWidth>itin.clientWidth)itin.scrollTo({left:a.offsetLeft-(itin.clientWidth-a.offsetWidth)/2,behavior:reduce?"auto":"smooth"});
}
function scrollToPages(instant){
  const top=$("#pages").getBoundingClientRect().top+scrollY-navwrap.offsetHeight-6;
  window.scrollTo({top:Math.max(0,top),behavior:reduce||instant?"auto":"smooth"});
}
function go(id,o={}){
  if(pIdx(id)<0)id="stamps";
  const k=pIdx(id),p=PAGES[k],prev=curPage;
  if(prev!==id){
    document.querySelectorAll(".page").forEach(sec=>{sec.hidden=sec.dataset.page!==id;sec.classList.remove("turn-next","turn-prev")});
    const sec=$("#page-"+id);
    if(prev&&!reduce&&!o.noTurn){void sec.offsetWidth;sec.classList.add(pIdx(prev)<k?"turn-next":"turn-prev")}
    curPage=id;
    itin.querySelectorAll(".tab").forEach(a=>{if(a.dataset.p===id)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
    const first=!VISITED[id];
    if(first){VISITED[id]=today();store.set("80d_pages",JSON.stringify(VISITED));itin.querySelector(`.tab[data-p="${id}"]`).classList.add("seen")}
    const ent=sec.querySelector(".entry");ent.querySelector(".entry-d").textContent=VISITED[id];
    ent.classList.remove("thud");if(first&&prev&&!reduce){void ent.offsetWidth;ent.classList.add("thud")}
    document.title=k?`${p.t} · Around the World in 80 Dishes`:"Around the World in 80 Dishes";
    if(first&&prev&&PAGES.every(x=>VISITED[x.id]))setTimeout(()=>toast(`All ${PAGES.length} pages stamped. Your culinary passport is complete!`,true),900);
    requestAnimationFrame(centerTab);
  }
  if(o.scroll)scrollToPages(o.instant);
  prog();
}
/* change page from code (links from dialogs and other pages) and keep the URL in step */
function goPush(id,o={}){if(location.hash.slice(1)!==id)history.pushState(null,"","#"+id);go(id,o)}
addEventListener("hashchange",()=>go(location.hash.slice(1),{scroll:true}));
itin.addEventListener("click",e=>{
  if(e.target.closest("#tocBtn")){openToc();return}
  const a=e.target.closest(".tab");if(a&&a.dataset.p===curPage){e.preventDefault();scrollToPages()}
});

/* contents: the passport's index page, with a visited stamp for every page you've opened */
function openToc(){
  const n=PAGES.filter(p=>VISITED[p.id]).length;
  const groups=[...new Set(PAGES.map(p=>p.g))];
  $("#tocBody").innerHTML=`<p class="eyebrow">Passport contents</p><h2 id="tocTitle">Where to next?</h2>
    <div class="toc-prog"><span>${n} of ${PAGES.length} pages visited</span><div class="meter"><i style="width:${n/PAGES.length*100}%"></i></div></div>
    ${groups.map(g=>`<div class="toc-group"><h3>${esc(g)}</h3><ol>${PAGES.map((p,k)=>p.g!==g?"":`<li><a href="#${p.id}" class="toc-item${p.id===curPage?" here":""}" style="--tone:var(--${p.r})"${p.id===curPage?' aria-current="page"':""}><span class="toc-no">${pad2(k+1)}</span><span class="toc-t"><b>${esc(p.t)}</b><span>${esc(p.d)}</span></span>${VISITED[p.id]?`<span class="toc-seen">Visited <em>${esc(VISITED[p.id])}</em></span>`:`<span class="toc-new">Not yet visited</span>`}</a></li>`).join("")}</ol></div>`).join("")}`;
  openDlg("#tocDlg");
}
$("#tocBody").addEventListener("click",e=>{
  const a=e.target.closest("a");if(!a)return;$("#tocDlg").close();
  if(a.getAttribute("href")==="#"+curPage){e.preventDefault();scrollToPages()}
});

/* reading progress for the page you're on, drawn under the tab bar */
let progRaf=0;
function prog(){
  progRaf=0;const sec=curPage&&$("#page-"+curPage);if(!sec)return;
  const r=sec.getBoundingClientRect(),nh=navwrap.offsetHeight,span=Math.max(1,r.height-(innerHeight-nh));
  navwrap.style.setProperty("--prog",Math.min(1,Math.max(0,(nh-r.top)/span)).toFixed(3));
}
addEventListener("scroll",()=>{if(!progRaf)progRaf=requestAnimationFrame(prog)},{passive:true});
addEventListener("resize",()=>{if(!progRaf)progRaf=requestAnimationFrame(prog)});
/* tapping "World" in the title changes the stamps, so show the stamps page */
$("#world").addEventListener("click",()=>{if(curPage!=="stamps")goPush("stamps")});

/* how-to tips: hidden for good once dismissed, and can be brought back from the footer */
function setGuide(show){$("#guide").hidden=!show;$("#guideShow").hidden=show;store.set("80d_guide",show?"":"hidden")}
if(store.get("80d_guide")==="hidden"){$("#guide").hidden=true;$("#guideShow").hidden=false}
$("#guideHide").addEventListener("click",()=>{setGuide(false);toast("Tips hidden. You can bring them back from the bottom of the page.")});
$("#guideShow").addEventListener("click",()=>{setGuide(true);goPush("stamps",{scroll:true})});

/* ---------- start ---------- */
buildPages();setNavH();
if("ResizeObserver" in window)new ResizeObserver(setNavH).observe(navwrap);else addEventListener("resize",setNavH);
go(location.hash.slice(1)||"stamps",{scroll:!!location.hash,instant:true});
chipHTML();render(false);updateLog();
renderFusion();renderJourneyList();renderTrends();renderSpots();renderEti();renderSay();quizStart();renderDiplo();
(()=>{const cv=$("#jrCv"),S=230,dpr=Math.min(2,devicePixelRatio||1);cv.width=cv.height=Math.round(S*dpr)})();
pickJourney(jrId,false);jrView={lon:-150,lat:10};jrHi=null;drawJr(0);
/* one reveal: the first time the ingredients page is on screen, the globe turns to the chili's origin */
let jrRevealed=false;
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();if(!jrRevealed){jrRevealed=true;pickJourney(jrId,true)}}},{threshold:.35});
  io.observe($("#jrPanel"));
}else pickJourney(jrId,true);
