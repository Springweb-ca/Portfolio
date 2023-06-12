(function(_ds){var window=this;var wY=function(){return(0,_ds.R)('<button class="devsite-book-nav-toggle" aria-haspopup="menu"><span class="material-icons devsite-book-nav-toggle-icon"></span></button>')},xY=function(){return(0,_ds.R)('<div class="devsite-book-nav-blur"></div>')},yY=function(a){a=a.Sv;a=_ds.DB(new _ds.zB("{NUMBER_OF_MATCHING_DESCENDANTS,plural,=1{{XXX_1} match}other{{XXX_2} matches}}"),{NUMBER_OF_MATCHING_DESCENDANTS:a,XXX_1:_ds.S(_ds.Xq(1)),XXX_2:_ds.S(_ds.Xq(a))});return(0,_ds.R)('<span class="devsite-nav-filter-match-count"> (<mark>'+
a+"</mark>)</span>")};var zY="onpointerover"in window?"pointerover":"mouseover",AY=function(a){const b=0<a.querySelectorAll(".devsite-nav-item").length,c=document.querySelector("#devsite-hamburger-menu");c&&(b?c.removeAttribute("visually-hidden"):_ds.C(a,"visually-hidden","",c))},IY=function(a){a.eventHandler.listen(a,"click",b=>void BY(a,b));a.eventHandler.listen(a,"keypress",b=>{13===b.keyCode&&BY(a,b)});a.eventHandler.listen(a,[zY,"focusin"],b=>void CY(a,b));a.eventHandler.listen(document.body,"devsite-sitemask-hidden",
()=>{a.h&&(DY(a,"_book")?a.removeAttribute("top-level-nav"):_ds.C(a,"top-level-nav",""))});a.eventHandler.listen(document.body,"devsite-page-loaded",()=>void a.ua.Qa());a.eventHandler.listen(a,"devsite-content-updated",()=>{a.ua.Qa()});a.eventHandler.listen(a,"scroll",()=>{_ds.C(a,"user-scrolled","")});a.eventHandler.listen(a.Wb,"click",()=>{EY(a)});a.g&&(a.eventHandler.listen(a.g,"keyup",()=>void a.Ea.Qa()),a.eventHandler.listen(a.g,"focus",()=>void FY(a,"focus")));a.ma&&a.eventHandler.listen(a.ma,
["click","keydown"],b=>{if("click"===b.type||13===b.keyCode||27===b.keyCode){a.g&&(a.g.value="",a.g.focus());let c;null==(c=a.ma)||c.classList.add("hidden");GY(a);HY(a);FY(a,b.type)}})},KY=function(a,b=a,c=!0){b=Array.from(b.querySelectorAll(".devsite-nav-title"));a.ea=new Set(b);if(!_ds.E().hash&&c)JY(a,a.ea);else{c=new _ds.LJ;for(const d of a.ea)_ds.KJ(c,d)}},LY=async function(a){const b=await _ds.w();for(const c of a.ea)b.unregisterIntersectionForElement(c)},BY=function(a,b){if(!b.defaultPrevented){var c=
b.target;"devsite-close-nav"===c.getAttribute("id")&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.hasAttribute("top-level-nav")?a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})):_ds.C(a,"top-level-nav",""));if(c.hasAttribute("menu")){var d=c.getAttribute("menu");d&&DY(a,d)&&(b.preventDefault(),b.stopPropagation(),a.scrollTop=0,a.removeAttribute("top-level-nav"))}var e=c.closest(".devsite-expandable-nav");if(e&&(d=c.closest(".devsite-nav-title, .devsite-nav-toggle"))){let f=
b.target,g,h;if(!(null==(g=f)?0:null==(h=g.closest(".devsite-nav-title"))?0:h.hasAttribute("href"))){for(b="click"===b.type||"touchend"===b.type;f&&f!==e;){if(f.classList.contains("devsite-nav-title-no-path")&&b){f.blur();break}f=f.parentNode}e.querySelector(".devsite-nav-section")&&(b=e.classList.toggle("expanded"),(e=e.querySelector(".devsite-nav-title"))&&_ds.C(a,"aria-expanded",`${b}`,e))}if(d.matches(".devsite-nav-toggle"))return}c.closest(".devsite-nav-title-no-path")||(a.h&&(d=a.h.querySelector("[menu=_book]"))&&
d.contains(c)&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})),(c=c.closest("a.devsite-nav-title"))&&!c.classList.contains("devsite-nav-has-children")&&a.dispatchEvent(new CustomEvent("devsite-sitemask-hide",{bubbles:!0})))}},CY=function(a,b){b.defaultPrevented||(b=_ds.zj(b.target,c=>c instanceof HTMLAnchorElement&&c.hasAttribute("href")||c===a,!0),b!==a&&_ds.td(b,_ds.Ld(_ds.wk(b.href).href)))},EY=async function(a){var b=document.documentElement.scrollHeight-document.documentElement.clientHeight;
const c=b?document.documentElement.scrollTop/b:0;_ds.Vl(a.eventHandler,a,_ds.mg,()=>{a.removeAttribute("animatable");a.background.removeAttribute("animatable");a.o.removeAttribute("animatable")});_ds.C(a,"animatable","");b=_ds.yd(a.j`animatable`);b(a.background,"animatable","");b(a.o,"animatable","");a.hasAttribute("collapsed")?(_ds.C(a,"aria-expanded","true",a.Wb),_ds.C(a,"aria-label","Hide side navigation",a.Wb),_ds.C(a,"data-title","Hide side navigation",a.Wb),a.removeAttribute("collapsed"),MY(a,
"Expanded book nav")):(a.Wb.removeAttribute("aria-expanded"),_ds.C(a,"aria-label","Show side navigation",a.Wb),_ds.C(a,"data-title","Show side navigation",a.Wb),_ds.C(a,"collapsed",""),MY(a,"Collapsed book nav"));await _ds.Ek();b=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop=Math.round(c*b)},FY=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:b,label:"focus"===
b?"devsite-book-nav-filter input":"devsite-book-nav-filter filter-clear-button"},bubbles:!0}))},NY=function(a){a.oa=Array.from(a.querySelectorAll(".devsite-mobile-nav-bottom .devsite-nav-list[menu=_book] .devsite-nav-item:not(.devsite-nav-heading)"))},PY=function(a){const b=_ds.E().searchParams.get("nf");a.g&&b&&(a.g.value=b,OY(a))},OY=function(a){if(a.oa.length){GY(a);HY(a);var b,c,d=null==(b=a.g)?void 0:null==(c=b.value)?void 0:c.trim().toLowerCase();if(d){var e;null==(e=a.ma)||e.classList.remove("hidden");
for(const g of a.oa){c=g.querySelectorAll(".devsite-nav-text");b=g.classList.contains("devsite-nav-expandable");var f=e=!1;a=0;let h,k;if(d&&b&&(null==(h=g.querySelector(".devsite-nav-text"))?0:null==(k=h.textContent)?0:k.toLowerCase().includes(d)))f=e=!0;else for(const l of c){let m;d&&(null==(m=l.textContent)?0:m.toLowerCase().includes(d))&&(e=!0,++a)}if(!0===e){g.classList.remove("hidden");if(f){c=Array.from(g.querySelectorAll(".devsite-nav-item"));for(const l of c){l.classList.remove("hidden");
let m;d&&(null==(m=l.textContent)?0:m.toLowerCase().includes(d))&&++a}}c=void 0;(f=g.querySelector(".devsite-nav-text"))&&(e=null==(c=f.textContent)?void 0:c.replace(new RegExp(`(${d})`,"ig"),"<mark>$1</mark>"))&&_ds.wd(f,_ds.Td(e))}b&&0<a&&(b=g.querySelector(".devsite-nav-text"))&&(a=_ds.O(yY,{Sv:a}),b.appendChild(a))}}else null==(f=a.ma)||f.classList.add("hidden")}},GY=function(a){for(const b of a.oa){let c;b.classList.toggle("hidden",!(null==(c=a.g)||!c.value))}},HY=function(a){if(a.querySelector("mark")){var b=
[...a.querySelectorAll(".devsite-nav-text > .devsite-nav-filter-match-count")];for(const c of b)c.remove();a=[...a.querySelectorAll(".devsite-nav-text > mark")];for(const c of a){a=c.parentElement;let d;b=null==(d=a)?void 0:d.textContent;a&&b&&_ds.wd(a,_ds.Td(b))}}},JY=async function(a,b){if(a.v){var c=await _ds.w(),d=new _ds.LJ,e=f=>{f=f.target;_ds.KJ(d,f);a.ea.delete(f);c.unregisterIntersectionForElement(f)};for(const f of b)try{c.registerIntersectionForElement(f,e)}catch(g){e({target:f})}}},DY=
function(a,b){let c=!1;if(a.h)for(const d of a.h.querySelectorAll("[menu]"))d.getAttribute("menu")===b?(d.removeAttribute("hidden"),c=!0):_ds.C(a,"hidden","",d);return c},QY=function(a,b=a){b||(b=a);for(const c of b.querySelectorAll(".devsite-nav-active"))c.classList.remove("devsite-nav-active");a=_ds.Lk(_ds.E().pathname);a=`[href="${_ds.wk(a).href}"], [href="${a}"],
        [alt-paths~="${a}"]`;for(const c of b.querySelectorAll(a))c.classList.add("devsite-nav-active")},RY=function(a,b=a){b||(b=a);if(a=b.querySelector(".devsite-mobile-nav-bottom"))for(a=a.querySelector(".devsite-nav-active");a&&a.parentElement&&a.parentElement!==b;)a.matches(".devsite-expandable-nav:not(.expanded)")&&a.classList.add("expanded"),a=a.parentElement},TY=async function(a){a.v&&(a.removeAttribute("user-scrolled"),await _ds.Ek(),await SY(a),await a.Ba,await _ds.w(),await _ds.Ek(),await SY(a))},
SY=async function(a){if(a.v&&a.h){await _ds.w();var b=a.h.querySelector(".devsite-nav-active");b&&(a.hasAttribute("user-scrolled")||await UY(a,b))}},UY=async function(a,b){if(a.v){var c=a.hasAttribute("user-scrolled");a.scrollTop=_ds.km(b,a,!0).y;await _ds.Ek();c&&_ds.C(a,"user-scrolled","")}},MY=function(a,b){a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",action:"click",label:b},bubbles:!0}))},VY=class extends _ds.D{static get observedAttributes(){return["collapsed",
"fixed","hidden"]}constructor(){super();this.v=!1;this.ma=this.g=this.qa=this.h=null;this.oa=[];this.eventHandler=new _ds.F;this.ra=()=>{};this.ea=new Set;this.va=this.xa=!1;this.background=document.createElement("div");this.background.classList.add("devsite-book-nav-bg");this.Wb=_ds.O(wY);this.o=_ds.O(xY);this.Ba=new Promise(a=>{this.ra=a});this.ua=new _ds.Rl(()=>{this.v&&AY(this)},20);this.Ea=new _ds.Rl(()=>{OY(this)},20)}async connectedCallback(){this.v=!0;_ds.di(this,this.j`animatable`,this.j`aria-expanded`,
this.j`aria-label`,this.j`collapsed`,this.j`data-title`,this.j`fixed`,this.j`has-book-nav`,this.j`hidden`,this.j`top-level-nav`,this.j`user-scrolled`,this.j`visually-hidden`);_ds.hj(this.background,this);this.hasAttribute("hidden")&&(_ds.C(this,"hidden","",this.Wb),_ds.C(this,"hidden","",this.o));const a=await _ds.w();if(this.xa=a.hasMendelFlagAccess("BookNav","enable_collapsible_book_nav")){let b;null==(b=this.parentElement)||b.insertBefore(this.Wb,this.nextSibling);_ds.C(this,"aria-label","Hide side navigation",
this.Wb);_ds.C(this,"data-title","Hide side navigation",this.Wb);_ds.C(this,"aria-expanded","true",this.Wb);let c;null==(c=this.parentElement)||c.insertBefore(this.o,this.nextSibling)}if(this.va=a.hasMendelFlagAccess("BookNav","enable_book_nav_filtering"))if(this.qa=this.querySelector(".devsite-book-nav-filter"))this.g=this.qa.querySelector("input[type=text]"),this.ma=this.qa.querySelector(".filter-clear-button"),NY(this),PY(this);AY(this);IY(this);await this.init();KY(this)}disconnectedCallback(){this.v=
!1;_ds.H(this.eventHandler);LY(this);this.ea.clear();var a=document.querySelector("#devsite-hamburger-menu");a&&_ds.C(this,"visually-hidden","",a);a=[this.background,this.Wb,this.o];for(const b of a)b&&_ds.jj(b);this.removeAttribute("animatable");this.background.removeAttribute("animatable");this.o.removeAttribute("animatable");this.o.style.removeProperty("--devsite-js-book-nav-scrollbar-width")}attributeChangedCallback(a){"hidden"===a&&this.dispatchEvent(new CustomEvent(this.hasAttribute("hidden")?
"devsite-element-hidden":"devsite-element-visible",{bubbles:!0}));if("hidden"===a||"collapsed"===a){var b=document.querySelector(".devsite-main-content");b&&(this.hasAttribute("collapsed")||this.hasAttribute("hidden")?b.removeAttribute("has-book-nav"):_ds.C(this,"has-book-nav","",b))}if("fixed"===a||"hidden"===a||"collapsed"===a){b=this.hasAttribute(a);const c=[this.background,this.Wb,this.o];for(const d of c)d&&(b?_ds.C(this,a,"",d):d.removeAttribute(a))}"fixed"===a&&this.ra()}async init(a=!0){if(this.v){this.o.style.setProperty("--devsite-js-book-nav-scrollbar-width",
`${this.offsetWidth-this.clientWidth}px`);this.h=this.querySelector(".devsite-mobile-nav-bottom");_ds.C(this,"top-level-nav","");this.h&&this.h.querySelector("[menu=_book]")&&this.removeAttribute("top-level-nav");0===this.children.length&&_ds.C(this,"hidden","");if(this.background)for(const b of["hidden","fixed","animatable"])this.hasAttribute(b)&&_ds.C(this,b,"",this.background);!this.hasAttribute("hidden")&&a?(QY(this),RY(this),await TY(this)):(await _ds.Ek(),await SY(this))}}async Xb(a){a?(a=a.querySelector("nav")||
null,QY(this,a),RY(this,a),a&&(await LY(this),this.ea.clear(),KY(this,a,!1)),_ds.gi(this,this.querySelector("nav"),a)):_ds.gj(this);if(this.va&&(NY(this),this.g)){this.g.value="";let b;null==(b=this.ma)||b.classList.add("hidden");PY(this)}await _ds.Ek();await this.init(!1)}};VY.prototype.updateContent=VY.prototype.Xb;VY.prototype.attributeChangedCallback=VY.prototype.attributeChangedCallback;VY.prototype.disconnectedCallback=VY.prototype.disconnectedCallback;VY.prototype.connectedCallback=VY.prototype.connectedCallback;try{window.customElements.define("devsite-book-nav",VY)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteBookNav",a)};})(_ds_www);