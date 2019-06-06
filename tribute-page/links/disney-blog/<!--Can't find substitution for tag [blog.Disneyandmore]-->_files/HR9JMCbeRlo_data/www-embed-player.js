(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca;
if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={a:!0},fa={};try{fa.__proto__=ea;da=fa.a;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ha=ca;
function r(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ha)ha(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ja="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ka(a,b){if(b){for(var c=ja,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ia(c,d,{configurable:!0,writable:!0,value:f})}}
function la(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ka("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=la(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ka("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=la(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function ma(){ma=function(){};
ja.Symbol||(ja.Symbol=na)}
function oa(a,b){this.f=a;ia(this,"description",{configurable:!0,writable:!0,value:b})}
oa.prototype.toString=function(){return this.f};
var na=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new oa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function pa(){ma();var a=ja.Symbol.iterator;a||(a=ja.Symbol.iterator=ja.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
pa=function(){}}
function ra(a){pa();a={next:a};a[ja.Symbol.iterator]=function(){return this};
return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
ka("Object.assign",function(a){return a||ta});
ka("Promise",function(a){function b(h){this.g=0;this.h=void 0;this.f=[];var g=this.i();try{h(g.resolve,g.reject)}catch(k){g.reject(k)}}
function c(){this.f=null}
function d(h){return h instanceof b?h:new b(function(g){g(h)})}
if(a)return a;c.prototype.g=function(h){if(null==this.f){this.f=[];var g=this;this.h(function(){g.j()})}this.f.push(h)};
var e=ja.setTimeout;c.prototype.h=function(h){e(h,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var h=this.f;this.f=[];for(var g=0;g<h.length;++g){var k=h[g];h[g]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(h){this.h(function(){throw h;})};
b.prototype.i=function(){function h(l){return function(n){k||(k=!0,l.call(g,n))}}
var g=this,k=!1;return{resolve:h(this.B),reject:h(this.j)}};
b.prototype.B=function(h){if(h===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(h instanceof b)this.D(h);else{a:switch(typeof h){case "object":var g=null!=h;break a;case "function":g=!0;break a;default:g=!1}g?this.A(h):this.l(h)}};
b.prototype.A=function(h){var g=void 0;try{g=h.then}catch(k){this.j(k);return}"function"==typeof g?this.G(g,h):this.l(h)};
b.prototype.j=function(h){this.w(2,h)};
b.prototype.l=function(h){this.w(1,h)};
b.prototype.w=function(h,g){if(0!=this.g)throw Error("Cannot settle("+h+", "+g+"): Promise already settled in state"+this.g);this.g=h;this.h=g;this.o()};
b.prototype.o=function(){if(null!=this.f){for(var h=0;h<this.f.length;++h)f.g(this.f[h]);this.f=null}};
var f=new c;b.prototype.D=function(h){var g=this.i();h.W(g.resolve,g.reject)};
b.prototype.G=function(h,g){var k=this.i();try{h.call(g,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(h,g){function k(t,p){return"function"==typeof t?function(B){try{l(t(B))}catch(K){n(K)}}:p}
var l,n,u=new b(function(t,p){l=t;n=p});
this.W(k(h,l),k(g,n));return u};
b.prototype["catch"]=function(h){return this.then(void 0,h)};
b.prototype.W=function(h,g){function k(){switch(l.g){case 1:h(l.h);break;case 2:g(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(h){return new b(function(g,k){k(h)})};
b.race=function(h){return new b(function(g,k){for(var l=q(h),n=l.next();!n.done;n=l.next())d(n.value).W(g,k)})};
b.all=function(h){var g=q(h),k=g.next();return k.done?d([]):new b(function(l,n){function u(B){return function(K){t[B]=K;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).W(u(t.length-1),n),k=g.next();while(!k.done)})};
return b});
ka("WeakMap",function(a){function b(g){this.f=(h+=Math.random()+1).toString();if(g){g=q(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(g){if(!sa(g,f)){var k=new c;ia(g,f,{value:k})}}
function e(g){var k=Object[g];k&&(Object[g]=function(l){if(l instanceof c)return l;d(l);return k(l)})}
if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),l=new a([[g,2],[k,3]]);if(2!=l.get(g)||3!=l.get(k))return!1;l["delete"](g);l.set(k,4);return!l.has(g)&&4==l.get(k)}catch(n){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var h=0;b.prototype.set=function(g,k){d(g);if(!sa(g,f))throw Error("WeakMap key fail: "+g);g[f][this.f]=k;return this};
b.prototype.get=function(g){return sa(g,f)?g[f][this.f]:void 0};
b.prototype.has=function(g){return sa(g,f)&&sa(g[f],this.f)};
b.prototype["delete"]=function(g){return sa(g,f)&&sa(g[f],this.f)?delete g[f][this.f]:!1};
return b});
ka("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return ra(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var n=g.g[l];if(n&&sa(g.g,l))for(var u=0;u<n.length;u++){var t=n[u];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:n,index:u,u:t}}return{id:l,list:n,index:-1,u:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=q(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(q([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=g||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(u){return!1}}())return a;
pa();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.u&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.u.previous.next=g.u.next,g.u.next.previous=g.u.previous,g.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).u};
e.prototype.get=function(g){return(g=d(this,g).u)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,g.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
ka("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
pa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ka("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==la(this,b,"includes").indexOf(b,c||0)}});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ba(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ka("Reflect.construct",function(){return ua});
var v=this||self;function w(a){return void 0!==a}
function x(a){return"string"==typeof a}
function y(a,b,c){a=a.split(".");c=c||v;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&w(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function z(a,b){for(var c=a.split("."),d=b||v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.da=void 0;a.getInstance=function(){return a.da?a.da:a.da=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ga:A=Ha;return A.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var C=Date.now||function(){return+new Date};
function Ja(a,b){y(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.lb=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}}
;var E=window;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
D(F,Error);F.prototype.name="CustomError";var Ka=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(x(a))return x(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=x(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var g=f[h];
b.call(void 0,g,h,a)&&(d[e++]=g)}return d},Na=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=x(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Oa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Pa(a,b){a:{var c=a.length;for(var d=x(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:x(a)?a.charAt(c):a[c]}
function Qa(a,b){var c=Ka(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
;function Ta(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Va(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a){for(var b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function ab(a){var b={},c;for(c in a)b[c]=a[c];return b}
function bb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=bb(a[c]);return b}return a}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(a,b){this.f=a===fb&&b||"";this.g=gb}
eb.prototype.J=!0;eb.prototype.I=function(){return this.f};
eb.prototype.toString=function(){return"Const{"+this.f+"}"};
var gb={},fb={},hb;hb=new eb(fb,"");function ib(){this.f="";this.g=jb}
ib.prototype.J=!0;ib.prototype.I=function(){return this.f.toString()};
ib.prototype.ca=!0;ib.prototype.Z=function(){return 1};
function kb(a){if(a instanceof ib&&a.constructor===ib&&a.g===jb)return a.f;za(a);return"type_error:TrustedResourceUrl"}
var jb={};function lb(a){var b=new ib;b.f=a;return b}
;var mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function nb(a,b){if(b)a=a.replace(ob,"&amp;").replace(pb,"&lt;").replace(qb,"&gt;").replace(rb,"&quot;").replace(sb,"&#39;").replace(tb,"&#0;");else{if(!ub.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ob,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(rb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(tb,"&#0;"))}return a}
var ob=/&/g,pb=/</g,qb=/>/g,rb=/"/g,sb=/'/g,tb=/\x00/g,ub=/[\x00&<>"']/;function H(){this.f="";this.g=vb}
H.prototype.J=!0;H.prototype.I=function(){return this.f.toString()};
H.prototype.ca=!0;H.prototype.Z=function(){return 1};
function wb(a){if(a instanceof H&&a.constructor===H&&a.g===vb)return a.f;za(a);return"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new H;b.f=a;return b}
zb("about:blank");var Ab;a:{var Bb=v.navigator;if(Bb){var Cb=Bb.userAgent;if(Cb){Ab=Cb;break a}}Ab=""}function I(a){return-1!=Ab.indexOf(a)}
;function Db(){this.f="";this.h=Eb;this.g=null}
Db.prototype.ca=!0;Db.prototype.Z=function(){return this.g};
Db.prototype.J=!0;Db.prototype.I=function(){return this.f.toString()};
function Gb(a){if(a instanceof Db&&a.constructor===Db&&a.h===Eb)return a.f;za(a);return"type_error:SafeHtml"}
var Eb={};function Hb(a,b){var c=new Db;c.f=a;c.g=b;return c}
Hb("<!DOCTYPE html>",0);var Ib=Hb("",0);Hb("<br>",0);function Jb(a,b){var c=b instanceof H?b:yb(b);a.href=wb(c)}
function Kb(a){var b=lb(hb instanceof eb&&hb.constructor===eb&&hb.g===gb?hb.f:"type_error:Const");a.src=kb(b).toString()}
function Lb(a,b){a.src=kb(b);if(null===wa)b:{var c=v.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Mb(a){return a=nb(a,void 0)}
function Nb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ob=I("Opera"),Pb=I("Trident")||I("MSIE"),Qb=I("Edge"),Rb=I("Gecko")&&!(-1!=Ab.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Sb=-1!=Ab.toLowerCase().indexOf("webkit")&&!I("Edge");function Tb(){var a=v.document;return a?a.documentMode:void 0}
var Ub;a:{var Vb="",Wb=function(){var a=Ab;if(Rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Qb)return/Edge\/([\d\.]+)/.exec(a);if(Pb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sb)return/WebKit\/(\S+)/.exec(a);if(Ob)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wb&&(Vb=Wb?Wb[1]:"");if(Pb){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Yb=Ub,Zb;var $b=v.document;Zb=$b&&Pb?Tb()||("CSS1Compat"==$b.compatMode?parseInt(Yb,10):5):void 0;var ac=null,bc=null;function cc(a){this.f=a||{cookie:""}}
m=cc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');w(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=mb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=w(this.get(a));this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var dc=new cc("undefined"==typeof document?null:document);function ec(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(x(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||v.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,fc[b]?b=fc[b]:(b=String(b),fc[b]||(c=/function\s+([^\(]+)/m.exec(b),fc[b]=c?c[1]:"[Anonymous]"),b=fc[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var fc={};var gc=!Pb||9<=Number(Zb);function hc(a,b){this.x=w(a)?a:0;this.y=w(b)?b:0}
m=hc.prototype;m.clone=function(){return new hc(this.x,this.y)};
m.equals=function(a){return a instanceof hc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function ic(a,b){this.width=a;this.height=b}
m=ic.prototype;m.clone=function(){return new ic(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function jc(a){var b=document;return x(a)?b.getElementById(a):a}
function kc(a,b){Ua(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:lc.hasOwnProperty(d)?a.setAttribute(lc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var lc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function mc(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!gc&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',Mb(h.name),'"');if(h.type){f.push(' type="',Mb(h.type),'"');var g={};db(g,h);delete g.type;h=g}f.push(">");f=f.join("")}f=e.createElement(f);h&&(x(h)?f.className=h:Aa(h)?f.className=h.join(" "):kc(f,h));2<d.length&&nc(e,f,d);return f}
function nc(a,b,c){function d(h){h&&b.appendChild(x(h)?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Da(f)&&0<f.nodeType?d(f):G(oc(f)?Ra(f):f,d)}}
function oc(a){if(a&&"number"==typeof a.length){if(Da(a))return"function"==typeof a.item||"string"==typeof a.item;if(Ca(a))return"function"==typeof a.item}return!1}
function pc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function qc(a){rc();return lb(a)}
var rc=xa;function sc(a){var b=tc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function uc(){var a=[];sc(function(b){a.push(b)});
return a}
var tc={Xa:"allow-forms",Ya:"allow-modals",Za:"allow-orientation-lock",ab:"allow-pointer-lock",bb:"allow-popups",cb:"allow-popups-to-escape-sandbox",eb:"allow-presentation",fb:"allow-same-origin",gb:"allow-scripts",hb:"allow-top-navigation",ib:"allow-top-navigation-by-user-activation"},vc=Ta(function(){return uc()});
function wc(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};G(vc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function yc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var zc=(new Date).getTime();function Ac(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Bc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(u){for(var t=h,p=0;64>p;p+=4)t[p/4]=u[p]<<24|u[p+1]<<16|u[p+2]<<8|u[p+3];for(p=16;80>p;p++)u=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(u<<1|u>>>31)&4294967295;u=e[0];var B=e[1],K=e[2],qa=e[3],xc=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var La=qa^B&(K^qa);var Fb=1518500249}else La=B^K^qa,Fb=1859775393;else 60>p?(La=B&K|qa&(B|K),Fb=2400959708):(La=B^K^qa,Fb=3395469782);La=((u<<5|u>>>27)&4294967295)+La+xc+Fb+t[p]&4294967295;xc=qa;qa=K;K=(B<<30|B>>>2)&4294967295;B=u;u=La}e[0]=e[0]+u&4294967295;e[1]=
e[1]+B&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+qa&4294967295;e[4]=e[4]+xc&4294967295}
function c(u,t){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var p=[],B=0,K=u.length;B<K;++B)p.push(u.charCodeAt(B));u=p}t||(t=u.length);p=0;if(0==l)for(;p+64<t;)b(u.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=u[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(u.slice(p,p+64)),p+=64,n+=64}
function d(){var u=[],t=8*n;56>l?c(g,56-l):c(g,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var B=24;0<=B;B-=8)u[t++]=e[p]>>B&255;return u}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,n;a();return{reset:a,update:c,digest:d,sa:function(){for(var u=d(),t="",p=0;p<u.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(u[p]/16))+"0123456789ABCDEF".charAt(u[p]%16);return t}}}
;function Cc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],G(d,function(g){e.push(g)}),Dc(e.join(" "));
var f=[],h=[];G(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(g){e.push(g)});
a=Dc(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function Dc(a){var b=Bc();b.update(a);return b.sa().toLowerCase()}
;function Ec(a){var b=Ac(String(v.location.href)),c=v.__OVERRIDE_SID;null==c&&(c=(new cc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?v.__SAPISID:v.__APISID,null==b&&(b=(new cc(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(v.location.href);return d&&b&&c?[c,Cc(Ac(d),b,a||null)].join(" "):null}return null}
;function Fc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Fc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Gc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Hc(a){v.setTimeout(function(){throw a;},0)}
var Ic;
function Jc(){var a=v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Kb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Gb(Ib));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(k){if(("*"==g||k.origin==g)&&k.data==
h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(w(c.next)){c=c.next;var e=c.ga;c.ga=null;e()}};
return function(e){d.next={ga:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){v.setTimeout(e,0)}}
;function Kc(){this.g=this.f=null}
var Mc=new Fc(function(){return new Lc},function(a){a.reset()});
Kc.prototype.add=function(a,b){var c=Mc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Kc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Lc(){this.next=this.scope=this.f=null}
Lc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Lc.prototype.reset=function(){this.next=this.scope=this.f=null};function Nc(a,b){Oc||Pc();Qc||(Oc(),Qc=!0);Rc.add(a,b)}
var Oc;function Pc(){if(v.Promise&&v.Promise.resolve){var a=v.Promise.resolve(void 0);Oc=function(){a.then(Sc)}}else Oc=function(){var b=Sc;
!Ca(v.setImmediate)||v.Window&&v.Window.prototype&&!I("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(Ic||(Ic=Jc()),Ic(b)):v.setImmediate(b)}}
var Qc=!1,Rc=new Kc;function Sc(){for(var a;a=Rc.remove();){try{a.f.call(a.scope)}catch(b){Hc(b)}Gc(Mc,a)}Qc=!1}
;function Tc(){this.g=-1}
;function Uc(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(Uc,Tc);Uc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Vc(a,b,c){c||(c=0);var d=a.w;if(x(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):(f=c^h^g,l=
3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
Uc.prototype.update=function(a,b){if(null!=a){w(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Vc(this,a,d),d+=this.g;if(x(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Vc(this,e);f=0;break}}this.h=f;this.j+=b}};
Uc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Vc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function J(){this.g=this.g;this.w=this.w}
J.prototype.g=!1;J.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Wc(a,b){a.g?w(void 0)?b.call(void 0):b():(a.w||(a.w=[]),a.w.push(w(void 0)?A(b,void 0):b))}
J.prototype.m=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Xc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Yc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?Yc.apply(null,d):Xc(d)}}
;function Zc(a){if(a.classList)return a.classList;a=a.className;return x(a)&&a.match(/\S+/g)||[]}
function $c(a,b){if(a.classList)var c=a.classList.contains(b);else c=Zc(a),c=0<=Ka(c,b);return c}
function ad(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):$c(a,"inverted-hdpi")&&(a.className=Ma(Zc(a),function(b){return"inverted-hdpi"!=b}).join(" "))}
;var bd="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function cd(){}
cd.prototype.next=function(){throw bd;};
cd.prototype.H=function(){return this};
function dd(a){if(a instanceof cd)return a;if("function"==typeof a.H)return a.H(!1);if(Ba(a)){var b=0,c=new cd;c.next=function(){for(;;){if(b>=a.length)throw bd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ed(a,b){if(Ba(a))try{G(a,b,void 0)}catch(c){if(c!==bd)throw c;}else{a=dd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==bd)throw c;}}}
function fd(a){if(Ba(a))return Ra(a);a=dd(a);var b=[];ed(a,function(c){b.push(c)});
return b}
;function gd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof gd)for(c=hd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function hd(a){id(a);return a.f.concat()}
m=gd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||jd;id(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function jd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.i=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&id(this),!0):!1};
function id(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
m.forEach=function(a,b){for(var c=hd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new gd(this)};
m.H=function(a){id(this);var b=0,c=this.i,d=this,e=new cd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw bd;var f=d.f[b++];return a?f:d.h[f]};
return e};function kd(a){var b=[];ld(new md,a,b);return b.join("")}
function md(){}
function ld(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ld(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),nd(d,c),c.push(":"),ld(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":nd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var od={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function nd(a,b){b.push('"',a.replace(pd,function(c){var d=od[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),od[c]=d);return d}),'"')}
;function qd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function L(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){rd(b,2,c)},function(c){rd(b,3,c)})}catch(c){rd(this,3,c)}}
function sd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
sd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var td=new Fc(function(){return new sd},function(a){a.reset()});
function ud(a,b,c){var d=td.get();d.g=a;d.onRejected=b;d.context=c;return d}
function vd(a){return new L(function(b,c){c(a)})}
L.prototype.then=function(a,b,c){return wd(this,Ca(a)?a:null,Ca(b)?b:null,c)};
L.prototype.$goog_Thenable=!0;function xd(a,b){return wd(a,null,b,void 0)}
L.prototype.cancel=function(a){0==this.f&&Nc(function(){var b=new yd(a);zd(this,b)},this)};
function zd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.h||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?zd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Ad(c),Bd(c,e,3,b)))}a.h=null}else rd(a,3,b)}
function Cd(a,b){a.g||2!=a.f&&3!=a.f||Dd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function wd(a,b,c,d){var e=ud(null,null,null);e.f=new L(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);!w(k)&&g instanceof yd?h(g):f(k)}catch(l){h(l)}}:h});
e.f.h=a;Cd(a,e);return e.f}
L.prototype.A=function(a){this.f=0;rd(this,2,a)};
L.prototype.B=function(a){this.f=0;rd(this,3,a)};
function rd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.B;if(d instanceof L){Cd(d,ud(e||xa,f||null,a));var h=!0}else if(qd(d))d.then(e,f,a),h=!0;else{if(Da(d))try{var g=d.then;if(Ca(g)){Ed(d,g,e,f,a);h=!0;break a}}catch(k){f.call(a,k);h=!0;break a}h=!1}}h||(a.w=c,a.f=b,a.h=null,Dd(a),3!=b||c instanceof yd||Fd(a,c))}}
function Ed(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function Dd(a){a.l||(a.l=!0,Nc(a.o,a))}
function Ad(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
L.prototype.o=function(){for(var a;a=Ad(this);)Bd(this,a,this.f,this.w);this.l=!1};
function Bd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Gd(b,c,d);else try{b.h?b.g.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}Gc(td,b)}
function Gd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Fd(a,b){a.j=!0;Nc(function(){a.j&&Hd.call(null,b)})}
var Hd=Hc;function yd(a){F.call(this,a)}
D(yd,F);yd.prototype.name="cancel";function M(a){J.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
D(M,J);m=M.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Id(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Pa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.M(b)}}
m.M=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Qa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.L=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var h=c[e];Jd(this.f[h+1],this.f[h+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.M(c)}}return 0!=e}return!1};
function Jd(a,b,c){Nc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.M,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){M.C.m.call(this);this.clear();this.i.length=0};function Kd(a){this.f=a}
Kd.prototype.set=function(a,b){w(b)?this.f.set(a,kd(b)):this.f.remove(a)};
Kd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Kd.prototype.remove=function(a){this.f.remove(a)};function Ld(a){this.f=a}
D(Ld,Kd);function Md(a){this.data=a}
function Nd(a){return!w(a)||a instanceof Md?a:new Md(a)}
Ld.prototype.set=function(a,b){Ld.C.set.call(this,a,Nd(b))};
Ld.prototype.g=function(a){a=Ld.C.get.call(this,a);if(!w(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ld.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!w(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Od(a){this.f=a}
D(Od,Ld);Od.prototype.set=function(a,b,c){if(b=Nd(b)){if(c){if(c<C()){Od.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}Od.C.set.call(this,a,b)};
Od.prototype.g=function(a){var b=Od.C.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())Od.prototype.remove.call(this,a);else return b}};function Pd(){}
;function Qd(){}
D(Qd,Pd);Qd.prototype.clear=function(){var a=fd(this.H(!0)),b=this;G(a,function(c){b.remove(c)})};function Rd(a){this.f=a}
D(Rd,Qd);m=Rd.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.H=function(a){var b=0,c=this.f,d=new cd;d.next=function(){if(b>=c.length)throw bd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Sd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
D(Sd,Rd);function Td(a,b){this.g=a;this.f=null;if(Pb&&!(9<=Number(Zb))){Ud||(Ud=new gd);this.f=Ud.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ud.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
D(Td,Qd);var Vd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ud=null;function Wd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Vd[b]})}
m=Td.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Wd(a),b);Xd(this)};
m.get=function(a){a=this.f.getAttribute(Wd(a));if(!x(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Wd(a));Xd(this)};
m.H=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new cd;d.next=function(){if(b>=c.length)throw bd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if(!x(e))throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Xd(this)};
function Xd(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Yd(a,b){this.g=a;this.f=b+"::"}
D(Yd,Qd);Yd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Yd.prototype.get=function(a){return this.g.get(this.f+a)};
Yd.prototype.remove=function(a){this.g.remove(this.f+a)};
Yd.prototype.H=function(a){var b=this.g.H(!0),c=this,d=new cd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Zd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function N(a){return a?decodeURI(a):a}
function O(a,b){return b.match(Zd)[a]||null}
function $d(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)$d(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ae(a){var b=[],c;for(c in a)$d(c,a[c],b);return b.join("&")}
function be(a,b){var c=ae(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var ce=/#|$/;function de(a,b){var c=a.search(ce);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function ee(){this.g=[];this.f=-1}
ee.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
ee.prototype.get=function(a){return!!this.g[a]};
function fe(a){-1==a.f&&(a.f=Oa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
function ge(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var P=function(){var a=window.performance&&window.performance.timing&&window.performance.timing.navigationStart;return a&&window.performance.now?function(){return a+window.performance.now()}:function(){return(new Date).getTime()}}();var he=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",he,void 0);function Q(a){ge(he,arguments)}
function R(a,b){return a in he?he[a]:b}
function ie(a){return R(a,void 0)}
function je(){return R("PLAYER_CONFIG",{})}
;function ke(){var a=le;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function me(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;function ne(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){S(b)}}:a}
function S(a,b,c,d,e){var f=z("yt.logging.errors.log");f?f(a,b,c,d,e):(f=R("ERRORS",[]),f.push([a,b,c,d,e]),Q("ERRORS",f))}
function oe(a){S(a,"WARNING",void 0,void 0,void 0)}
;function pe(){var a=qe(),b=[];Ua(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];G(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function re(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Sa(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){var g=Error("Error decoding URL component");g.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?oe(g):S(g)}}return b}
function se(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=re(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return be(a,e)+d}
;function qe(a){var b=te;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ue(b),ve(b));b.ca_type="image";a&&(b.bid=a);return b}
function ue(a){var b={};b.dt=zc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?E:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!E.navigator&&"unknown"!==typeof E.navigator.javaEnabled&&!!E.navigator.javaEnabled&&E.navigator.javaEnabled();E.screen&&(b.u_h=E.screen.height,b.u_w=E.screen.width,b.u_ah=E.screen.availHeight,b.u_aw=E.screen.availWidth,b.u_cd=E.screen.colorDepth);
E.navigator&&E.navigator.plugins&&(b.u_nplug=E.navigator.plugins.length);E.navigator&&E.navigator.mimeTypes&&(b.u_nmime=E.navigator.mimeTypes.length);return b}
function ve(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(u){}try{var e=b.outerWidth;var f=b.outerHeight}catch(u){}try{var h=b.innerWidth;var g=b.innerHeight}catch(u){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new ic(l.clientWidth,l.clientHeight)).round()}catch(u){n=new ic(-12245933,-12245933)}k=n;n={};l=new ee;v.SVGElement&&
v.document.createElementNS&&l.set(0);c=wc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);v.crypto&&v.crypto.subtle&&l.set(3);v.TextDecoder&&v.TextEncoder&&l.set(4);l=fe(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!E.WebGLRenderingContext,n}
var te=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(){return pe()},void 0);C();function we(a,b){var c=T(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function T(a){return R("EXPERIMENT_FLAGS",{})[a]}
;var xe=w(XMLHttpRequest)?function(){return new XMLHttpRequest}:w(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ye(){if(!xe)return null;var a=xe();return"open"in a?a:null}
function ze(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function U(a,b){Ca(a)&&(a=ne(a));return window.setTimeout(a,b)}
function V(a){window.clearTimeout(a)}
;var Ae={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Be="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ce=!1;
function De(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=O(1,a),e=N(O(3,a));d&&e?(d=c,c=a.match(Zd),d=d.match(Zd),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?N(O(3,c))==e&&(Number(O(4,c))||null)==(Number(O(4,a))||null):!0;d=!!T("web_ajax_ignore_global_headers_if_set");for(var f in Ae)e=R(Ae[f]),!e||!c&&!Ee(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ee(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();(T("pass_biscotti_id_in_header_ajax")||T("pass_biscotti_id_in_header_ajax_tv"))&&(c||
Ee(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=pe());return b}
function Fe(a){var b=window.location.search,c=N(O(3,a)),d=N(O(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=re(b),f={};G(Be,function(h){e[h]&&(f[h]=e[h])});
return se(a,f||{},!1)}
function Ee(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=N(O(3,a));return d?(c=c[d])?0<=Ka(c,b):!1:!0}
function Ge(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=He(a,b);var d=Ie(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&V(f);var g=h.ok,k=function(l){l=l||{};var n=b.context||v;g?b.onSuccess&&b.onSuccess.call(n,l,h):b.onError&&b.onError.call(n,l,h);b.ea&&b.ea.call(n,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.ia&&0<b.timeout&&(f=U(function(){e||(e=!0,V(f),b.ia.call(b.context||v))},b.timeout))}else Je(a,b)}
function Je(a,b){var c=b.format||"JSON";a=He(a,b);var d=Ie(a,b),e=!1,f,h=Ke(a,function(g){if(!e){e=!0;f&&V(f);var k=ze(g),l=null,n=400<=g.status&&500>g.status,u=500<=g.status&&600>g.status;if(k||n||u)l=Le(c,g,b.nb);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||v;k?b.onSuccess&&b.onSuccess.call(n,g,l):b.onError&&b.onError.call(n,g,l);b.ea&&b.ea.call(n,g,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.N&&0<b.timeout&&(f=U(function(){e||(e=!0,h.abort(),V(f),b.N.call(b.context||v,h))},b.timeout));
return h}
function He(a,b){b.xa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.Wa;d&&(d[c]&&delete d[c],a=se(a,d||{},!0));return a}
function Ie(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.F,h=ie("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.ob||N(O(3,a))&&!b.withCredentials&&N(O(3,a))!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.F&&b.F[h]||(f||(f={}),f[c]=d);f&&x(e)&&(e=re(e),db(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):ae(e));f=e||f&&!Ya(f);!Ce&&f&&"POST"!=b.method&&(Ce=!0,S(Error("AJAX request with postData should use POST")));
return e}
function Le(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Me(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ne(e)})}c&&Oe(d);
return d}
function Oe(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Hb(a[b],null);a[c]=d}else Oe(a[b])}}
function Me(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ne(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Pe(a,b){b.method="POST";b.F||(b.F={});Je(a,b)}
function Ke(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ne(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ye();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;T("debug_forward_web_query_parameters")&&(a=Fe(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=De(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Qe={},Re=0;
function Se(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ab,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),xb.test(a)||(a="about:invalid#zClosurez"),a=zb(a)),b=wb(a).toString(),"about:invalid#zClosurez"===b?a="":(b instanceof Db?a=b:(d="object"==typeof b,a=null,d&&b.ca&&(a=b.Z()),b=nb(d&&b.J?b.I():String(b)),a=Hb(b,a)),a=Gb(a).toString(),a=encodeURIComponent(String(kd(a)))),/^[\s\xa0]*$/.test(a)||(a=mc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ke(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ke(a,b,"GET","",d):((d=he.EXPERIMENT_FLAGS)&&d.web_use_beacon_api_for_ad_click_server_pings&&-1!=N(O(5,a)).indexOf("/aclk")&&"1"===de(a,"ae")&&"1"===de(a,"act")?Te(a)?(b&&b(),d=!0):d=!1:d=!1,d||Ue(a,b)))}
function Te(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Ue(a,b){var c=new Image,d=""+Re++;Qe[d]=c;c.onload=c.onerror=function(){b&&Qe[d]&&b();delete Qe[d]};
c.src=a}
;var Ve={},We=0;
function Xe(a,b,c,d,e,f){f=f||{};f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=We||(T("console_log_js_exceptions")&&(e=a,c=[],c.push("Name: "+e.name),c.push("Message: "+e.message),e.hasOwnProperty("params")&&c.push("Error Params: "+JSON.stringify(e.params)),c.push("File name: "+e.fileName),c.push("Stacktrace: "+e.stack),
window.console.log(c.join("\n"),e)),e=a.stacktrace,c=a.columnNumber,a.hasOwnProperty("params")&&(d=String(JSON.stringify(a.params)),f.params=d.substr(0,500)),a=ec(a),e=e||a.stack,d=a.lineNumber.toString(),isNaN(d)||isNaN(c)||(d=d+":"+c),window.yterr&&Ca(window.yterr)&&window.yterr(a),Ve[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js")))){b={Wa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:d,level:b,"client.name":f.name},F:{url:R("PAGE_NAME",window.location.href),
file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);e&&(b.F.stack=e);for(var h in f)b.F["client."+h]=f[h];if(h=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var g in h)b.F[g]=h[g];Je(R("ECATCHER_REPORT_HOST","")+"/error_204",b);Ve[a.message]=!0;We++}}
;var Ye=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",Ye,void 0);function Ze(a){ge(Ye,arguments)}
;function $e(a){a&&(a.dataset?a.dataset[af("loaded")]="true":a.setAttribute("data-loaded","true"))}
function bf(a,b){return a?a.dataset?a.dataset[af(b)]:a.getAttribute("data-"+b):null}
var cf={};function af(a){return cf[a]||(cf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var df=z("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.M;M.prototype.publish=M.prototype.L;M.prototype.clear=M.prototype.clear;y("ytPubsubPubsubInstance",df,void 0);var ef=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",ef,void 0);var ff=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",ff,void 0);var gf=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",gf,void 0);
function hf(a,b){var c=jf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){ef[d]&&b.apply(window,e)};
try{gf[a]?f():U(f,0)}catch(h){S(h)}},void 0);
ef[d]=!0;ff[a]||(ff[a]=[]);ff[a].push(d);return d}return 0}
function kf(a){var b=jf();b&&("number"==typeof a?a=[a]:x(a)&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete ef[c]}))}
function lf(a,b){var c=jf();c&&c.publish.apply(c,arguments)}
function mf(a){var b=jf();if(b)if(b.clear(a),a)nf(a);else for(var c in ff)nf(c)}
function jf(){return z("ytPubsubPubsubInstance")}
function nf(a){ff[a]&&(a=ff[a],G(a,function(b){ef[b]&&delete ef[b]}),a.length=0)}
;var of=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function qf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(of,""),c=c.replace(pf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else rf(a,b,c)}
function rf(a,b,c){c=void 0===c?null:c;var d=sf(a),e=document.getElementById(d),f=e&&bf(e,"loaded"),h=e&&!f;f?b&&b():(b&&(f=hf(d,b),b=""+(b[Ea]||(b[Ea]=++Fa)),tf[b]=f),h||(e=uf(a,d,function(){bf(e,"loaded")||($e(e),lf(d),U(Ia(mf,d),0))},c)))}
function uf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,qc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function vf(a){a=sf(a);var b=document.getElementById(a);b&&(mf(a),b.parentNode.removeChild(b))}
function wf(a,b){if(a&&b){var c=""+(b[Ea]||(b[Ea]=++Fa));(c=tf[c])&&kf(c)}}
function sf(a){var b=document.createElement("a");Jb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nb(a)}
var tf={};function xf(){}
function yf(a,b){return zf(a,1,b)}
;function Af(){}
r(Af,xf);function zf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):U(a,c||0)}
function Bf(a){if(!isNaN(a)){var b=z("yt.scheduler.instance.cancelJob");b?b(a):V(a)}}
Af.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
Af.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
ya(Af);Af.getInstance();var Cf=[],Df=!1;function Ef(){if("1"!=Va(je(),"args","privembed")){var a=function(){Df=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
qf("//static.doubleclick.net/instream/ad_status.js",a);Cf.push(yf(function(){Df||"google_ad_status"in window||(wf("//static.doubleclick.net/instream/ad_status.js",a),Df=!0,Q("DCLKSTAT",3))},5E3))}}
function Ff(){return parseInt(R("DCLKSTAT",0),10)}
;function Gf(){this.g=!1;this.f=null}
Gf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,qf(b,function(){f.g=!1;if(window.botguard)Hf(f,c,d);else{vf(b);var h=Error("Unable to load Botguard");h.params="from "+b;oe(h)}},e)):a&&(eval(a),window.botguard?Hf(this,c,d):oe(Error("Unable to load Botguard from JS")))};
function Hf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){oe(d)}c&&c(b)}
Gf.prototype.dispose=function(){this.f=null};var If=new Gf,Jf=!1,Kf=0,Lf="";function Mf(a){T("botguard_periodic_refresh")?Kf=P():T("botguard_always_refresh")&&(Lf=a)}
function Nf(a){if(a){if(If.g)return!1;if(T("botguard_periodic_refresh"))return 72E5<P()-Kf;if(T("botguard_always_refresh"))return Lf!=a}else return!1;return!Jf}
function Of(){return!!If.f}
function Pf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return If.f?If.f.invoke(void 0,void 0,a):null}
;var Qf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Qf},void 0);var Rf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in Rf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}
function Tf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Xa,void 0);var Uf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Uf,void 0);
function Vf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,h=Da(e[4])&&Da(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
var Wf=Ta(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function W(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Vf(a,b,c,d);if(e)return e;e=++Uf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new Sf(g);if(!pc(g.relatedTarget,function(k){return k==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Sf(g);
g.currentTarget=a;return c.call(a,g)};
h=ne(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wf()||"boolean"==typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);Xa[e]=[a,b,c,h,d];return e}
function Xf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in Xa){var c=Xa[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wf()||"boolean"==typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[b]}}))}
;function Yf(a){this.A=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=W(window,"mousemove",A(this.G,this));a=A(this.B,this);Ca(a)&&(a=ne(a));this.K=window.setInterval(a,25)}
D(Yf,J);Yf.prototype.G=function(a){w(a.f)||Tf(a);var b=a.f;w(a.g)||Tf(a);this.f=new hc(b,a.g)};
Yf.prototype.B=function(){if(this.f){var a=P();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Yf.prototype.m=function(){window.clearInterval(this.K);Xf(this.D)};var Zf={};
function $f(a){var b=void 0===a?{}:a;a=void 0===b.ya?!0:b.ya;b=void 0===b.La?!1:b.La;if(null==z("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?C()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&ag();W(document,"keydown",ag);W(document,"keyup",ag);W(document,"mousedown",ag);W(document,"mouseup",ag);a&&(b?W(window,"touchmove",function(){bg("touchmove",200)},{passive:!0}):(W(window,"resize",function(){bg("resize",200)}),W(window,"scroll",function(){bg("scroll",200)})));
new Yf(function(){bg("mouse",100)});
W(document,"touchstart",ag,{passive:!0});W(document,"touchend",ag,{passive:!0})}}
function bg(a,b){Zf[a]||(Zf[a]=!0,yf(function(){ag();Zf[a]=!1},b))}
function ag(){null==z("_lact",window)&&$f();var a=C();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function cg(){var a=z("_lact",window);return null==a?-1:Math.max(C()-a,0)}
;var dg=Math.pow(2,16)-1,eg=null,fg=0,gg={log_event:"events",log_interaction:"interactions"},hg=Object.create(null);hg.log_event="GENERIC_EVENT_LOGGING";hg.log_interaction="INTERACTION_LOGGING";var ig=new Set(["log_event"]),jg={},kg=0,lg=0,X=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",X,void 0);var mg=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",mg,void 0);var ng=z("ytLoggingTransportDispatchedStats_")||{};
y("ytLoggingTransportDispatchedStats_",ng,void 0);y("ytytLoggingTransportCapturedTime_",z("ytLoggingTransportCapturedTime_")||{},void 0);function og(){V(kg);V(lg);lg=0;if(!Ya(X)){for(var a in X){var b=jg[a];b&&(pg(a,b),delete X[a])}Ya(X)||qg()}}
function qg(){T("web_gel_timeout_cap")&&!lg&&(lg=U(og,3E4));V(kg);kg=U(og,R("LOGGING_BATCH_TIMEOUT",we("web_gel_debounce_ms",1E4)))}
function rg(a,b){b=void 0===b?"":b;X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
function pg(a,b){var c=gg[a],d=ng[a]||{};ng[a]=d;var e=Math.round(P());for(l in X[a]){var f=bb,h=b.f;h={client:{hl:h.Ea,gl:h.Da,clientName:h.Ba,clientVersion:h.Ca}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(h.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=rg(a,l);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=mg[l])a:{var k=l;if(h.videoId)g=
"VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:g}]}delete mg[l];f.requestTimeMs=e;if(h=ie("EVENT_ID"))g=(R("BATCH_CLIENT_COUNTER",void 0)||0)+1,g>dg&&(g=1),Q("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,eg&&fg&&T("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:eg,roundtripMs:fg}),
eg=h,fg=0;sg(b,a,f,{retry:ig.has(a),onSuccess:A(tg,this,P())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var l=d.diffCount||0;d.averageTimeBetweenDispatchesMs=l?(d.averageTimeBetweenDispatchesMs*l+c)/(l+1):c;d.diffCount=l+1}d.previousDispatchMs=e}
function tg(a){fg=Math.round(P()-a)}
;function ug(a,b,c,d,e){e={timestamp:d,ra:e};e=void 0===e?{}:e;d={};d.eventTimeMs=Math.round(e.timestamp||P());d[a]=b;d.context={lastActivityMs:String(e.timestamp?-1:cg())};(a=e.ra)?(b={},a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId),mg[a.token]=b,a=rg("log_event",a.token)):a=rg("log_event");a.push(d);c&&(jg.log_event=new c);a.length>=(we("web_logging_max_batch")||20)?og():qg()}
;function vg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.kb||R("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().jb:b=Ec([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),T("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function wg(a){a=Object.assign({},a);delete a.Authorization;var b=Ec();if(b){var c=new Uc;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();Ba(b);if(!ac)for(ac={},bc={},c=0;65>c;c++)ac[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),bc[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=bc;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],h=e+1<b.length,g=h?b[e+1]:0,k=e+2<b.length,l=k?b[e+2]:0,n=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<
2|l>>6;l&=63;k||(l=64,h||(g=64));d.push(c[n],c[f],c[g],c[l])}a.hash=d.join("")}return a}
;function xg(a,b,c,d){dc.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function yg(){var a=new Sd;(a=a.isAvailable()?new Yd(a,"yt.innertube"):null)||(a=new Td("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Od(a):null;this.g=document.domain||window.location.hostname}
yg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(kd(b))}catch(f){return}else e=escape(b);xg(a,e,c,this.g)};
yg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=dc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;dc.remove(""+a,"/",void 0===b?"youtube.com":b)};var zg=new yg;function Ag(a,b,c,d){if(d)return null;d=zg.get("nextId",!0)||1;var e=zg.get("requests",!0)||{};e[d]={method:a,request:b,authState:wg(c),requestTime:Math.round(P())};zg.set("nextId",d+1,86400,!0);zg.set("requests",e,86400,!0);return d}
function Bg(a){var b=zg.get("requests",!0)||{};delete b[a];zg.set("requests",b,86400,!0)}
function Cg(a){var b=zg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=wg(vg(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),sg(a,d.method,e,{}));delete b[c]}}zg.set("requests",b,86400,!0)}}
;function Dg(a){var b=this;this.f=a||{za:ie("INNERTUBE_API_KEY"),Aa:ie("INNERTUBE_API_VERSION"),Ba:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ca:ie("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ea:ie("INNERTUBE_CONTEXT_HL"),Da:ie("INNERTUBE_CONTEXT_GL"),Fa:ie("INNERTUBE_HOST_OVERRIDE")||"",Ga:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};zf(function(){Cg(b)},0,5E3)}
function sg(a,b,c,d){!R("VISITOR_DATA")&&.01>Math.random()&&S(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",F:c,ja:"JSON",N:function(){d.N()},
ia:d.N,onSuccess:function(t,p){if(d.onSuccess)d.onSuccess(p)},
ha:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,p){if(d.onError)d.onError(p)},
pb:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.Fa;h&&(f=h);h=a.f.Ga||!1;var g=vg(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=""+f+("/youtubei/"+a.f.Aa+"/"+b)+"?alt=json&key="+a.f.za,l;if(d.retry&&T("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Ag(b,c,g,h))){var n=e.onSuccess,u=e.ha;e.onSuccess=function(t,p){Bg(l);n(t,p)};
c.ha=function(t,p){Bg(l);u(t,p)}}try{T("use_fetch_for_op_xhr")?Ge(k,e):Pe(k,e)}catch(t){if("InvalidAccessError"==t)l&&(Bg(l),l=0),S(Error("An extension is blocking network request."),"WARNING");
else throw t;}l&&zf(function(){Cg(a)},0,5E3)}
;var Eg=C().toString();
function Fg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=C();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Eg)for(a=1,b=0;b<Eg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Eg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Gg=z("ytLoggingTimeDocumentNonce_")||Fg();y("ytLoggingTimeDocumentNonce_",Gg,void 0);function Hg(a){this.f=a}
function Ig(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Ig(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
Hg.prototype.toString=function(){return JSON.stringify(Ig(this))};
var Jg=1;function Kg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Lg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Mg(a){return R(Lg(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Mg,void 0);function Ng(){var a=Mg(0),b;a?b=new Hg({veType:a,youtubeData:void 0}):b=null;return b}
function Og(a){a=void 0===a?0:a;var b=R(Kg(a));b||0!=a||(b=R("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",Og,void 0);function Pg(a,b,c){c=void 0===c?0:c;if(a!==R(Kg(c))||b!==R(Lg(c)))Q(Kg(c),a),Q(Lg(c),b),0==c&&(b=function(){setTimeout(function(){a&&ug("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Gg,clientScreenNonce:a},Dg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
y("yt_logging_screen.setCurrentScreen",Pg,void 0);function Qg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=N(O(3,window.location.href));f&&e.push(f);f=N(O(3,d));if(0<=Ka(e,f)||!f&&0==d.lastIndexOf("/",0))if(T("autoescape_tempdata_url")&&(e=document.createElement("a"),Jb(e,d),d=e.href),d){f=d.match(Zd);d=f[5];e=f[6];f=f[7];var h="";d&&(h+=d);e&&(h+="?"+e);f&&(h+="#"+f);d=h;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||Og();if(g){var g=
parseInt(g,10);isFinite(g)&&0<g&&(d="ST-"+Nb(d).toString(36),b=b?ae(b):"",xg(d,b,g||5))}else g="ST-"+Nb(d).toString(36),b=b?ae(b):"",xg(g,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var l=void 0===l?"":l;var n=void 0===n?window:n;c=n.location;a=be(a,k)+l;a=a instanceof H?a:yb(a);c.href=wb(a)}return!0}
;function Rg(a,b,c){a={csn:a,parentVe:Ig(b),childVes:Na(c,function(d){return Ig(d)})};
c=q(c);for(b=c.next();!b.done;b=c.next())b=Ig(b.value),(Ya(b)||!b.trackingParams&&!b.veType)&&Xe(Error("Child VE logged with no data"),"WARNING");ug("visualElementAttached",a,Dg,void 0,void 0)}
;function Sg(a){a=a||{};var b={enablejsapi:1},c={};this.url=a.url||"";this.args=a.args||ab(b);this.assets=a.assets||{};this.attrs=a.attrs||ab(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Sg.prototype.clone=function(){var a=new Sg,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=ab(c):a[b]=c}return a};function Tg(){J.call(this);this.f=[]}
r(Tg,J);Tg.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.mb)}J.prototype.m.call(this)};var Ug=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Vg(a){a=a||"";if(window.spf){var b=a.match(Ug);spf.style.load(a,b?b[1]:"",void 0)}else Wg(a)}
function Wg(a){var b=Xg(a),c=document.getElementById(b),d=c&&bf(c,"loaded");d||c&&!d||(c=Yg(a,b,function(){bf(c,"loaded")||($e(c),lf(b),U(Ia(mf,b),0))}))}
function Yg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=qc(a);d.rel="stylesheet";d.href=kb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Xg(a){var b=document.createElement("A");a=zb(a);Jb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nb(b)}
;function Zg(a,b){J.call(this);this.l=this.T=a;this.D=b;this.o=!1;this.api={};this.R=this.B=null;this.G=new M;Wc(this,Ia(Xc,this.G));this.i={};this.O=this.S=this.h=this.Y=this.f=null;this.K=!1;this.j=this.A=null;this.U={};this.na=["onReady"];this.X=null;this.fa=NaN;this.P={};$g(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Ia.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ja.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.oa=new Tg(this);Wc(this,Ia(Xc,this.oa))}
r(Zg,J);m=Zg.prototype;m.getId=function(){return this.D};
m.loadNewVideoConfig=function(a){if(!this.g){a instanceof Sg||(a=new Sg(a));this.Y=a;this.f=a.clone();this.h=this.f.attrs.id||this.h;"video-player"==this.h&&(this.h=this.D,this.f.attrs.id=this.D);this.l.id==this.h&&(this.h+="-player",this.f.attrs.id=this.h);this.f.args.enablejsapi="1";this.f.args.playerapiid=this.D;this.S||(this.S=ah(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=yc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=
yc(Number(a)||a);bh(this);this.o&&ch(this)}};
m.ua=function(){return this.Y};
function ch(a){a.f.loaded||(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function dh(a){var b=!0,c=eh(a);c&&a.f&&(a=a.f,b=bf(c,"version")==a.assets.js);return b&&!!z("yt.player.Application.create")}
function bh(a){if(!a.g&&!a.K){var b=dh(a);if(b&&"html5"==(eh(a)?"html5":null))a.O="html5",a.o||fh(a);else if(gh(a),a.O="html5",b&&a.j)a.T.appendChild(a.j),fh(a);else{a.f.loaded=!0;var c=!1;a.A=function(){c=!0;var d=a.f.clone();z("yt.player.Application.create")(a.T,d);fh(a)};
a.K=!0;b?a.A():(qf(a.f.assets.js,a.A),Vg(a.f.assets.css),hh(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function eh(a){var b=jc(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function fh(a){if(!a.g){var b=eh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&b.isNotServable(a.f.args.video_id)||ih(a)):a.fa=U(function(){fh(a)},50)}}
function ih(a){$g(a);a.o=!0;var b=eh(a);b.addEventListener&&(a.B=jh(a,b,"addEventListener"));b.removeEventListener&&(a.R=jh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=jh(a,b,e))}for(var f in a.i)a.B(f,a.i[f]);ch(a);a.S&&a.S(a.api);a.G.L("onReady",a.api)}
function jh(a,b,c){var d=b[c];return function(){try{return a.X=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.X=e,oe(e))}}}
function $g(a){a.o=!1;if(a.R)for(var b in a.i)a.R(b,a.i[b]);for(var c in a.P)V(parseInt(c,10));a.P={};a.B=null;a.R=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Na.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.va.bind(a);a.api.getPlayerType=a.wa.bind(a);a.api.getCurrentVideoConfig=a.ua.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ha.bind(a)}
m.Ha=function(){return this.o};
m.V=function(a,b){var c=this,d=ah(this,b);if(d){if(!(0<=Ka(this.na,a)||this.i[a])){var e=kh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.o&&U(function(){d(c.api)},0)}};
m.Na=function(a,b){if(!this.g){var c=ah(this,b);c&&Id(this.G,a,c)}};
function ah(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var d=z(b);d&&d.apply(v,arguments)};
a.U[b]=c}return c?c:null}
function kh(a,b){var c="ytPlayer"+b+a.D;a.i[b]=c;v[c]=function(d){var e=U(function(){if(!a.g){a.G.L(b,d);var f=a.P,h=String(e);h in f&&delete f[h]}},0);
Za(a.P,String(e))};
return c}
m.qa=function(a){lf("a11y-announce",a)};
m.Ia=function(a){lf("WATCH_LATER_VIDEO_ADDED",a)};
m.Ja=function(a){lf("WATCH_LATER_VIDEO_REMOVED",a)};
m.wa=function(){return this.O||(eh(this)?"html5":null)};
m.va=function(){return this.X};
function gh(a){a.cancel();$g(a);a.O=null;a.f&&(a.f.loaded=!1);var b=eh(a);b&&(dh(a)||!hh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&wf(this.f.assets.js,this.A);V(this.fa);this.K=!1};
m.m=function(){gh(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){S(b)}this.U=null;for(var a in this.i)v[this.i[a]]=null;this.Y=this.f=this.api=null;delete this.T;delete this.l;J.prototype.m.call(this)};
function hh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var lh={},mh="player_uid_"+(1E9*Math.random()>>>0);function nh(a){var b="player";b=x(b)?jc(b):b;var c=mh+"_"+(b[Ea]||(b[Ea]=++Fa)),d=lh[c];if(d)return d.loadNewVideoConfig(a),d.api;d=new Zg(b,c);lh[c]=d;lf("player-added",d.api);Wc(d,Ia(oh,d));U(function(){d.loadNewVideoConfig(a)},0);
return d.api}
function oh(a){delete lh[a.getId()]}
;function ph(a,b,c){var d=Dg;R("ytLoggingEventsDefaultDisabled",!1)&&Dg==Dg&&(d=null);ug(a,b,d,c,void 0)}
;var qh=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",qh,void 0);var rh=0;function sh(a){qh[a]=qh[a]||{count:0};var b=qh[a];b.count++;b.time=P();rh||(rh=zf(th,0,5E3));if(5<b.count){if(6==b.count&&1>1E5*Math.random()){b=0==a.indexOf("info")?"WARNING":"ERROR";var c=Error("CSI data exceeded logging limit with key");c.params=a;Xe(c,b)}return!0}return!1}
function th(){var a=P(),b;for(b in qh)6E4<a-qh[b].time&&delete qh[b];rh=0}
;function uh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!vh(a)||c.some(function(e){return!vh(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())wh(a,d.value)}
function wh(a,b){for(var c in b)if(vh(b[c])){if(c in a&&!vh(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});wh(a[c],b[c])}else if(xh(b[c])){if(c in a&&!xh(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);yh(a[c],b[c])}else a[c]=b[c];return a}
function yh(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,vh(d)?a.push(wh({},d)):xh(d)?a.push(yh([],d)):a.push(d);return a}
function vh(a){return"object"===typeof a&&!Array.isArray(a)}
function xh(a){return"object"===typeof a&&Array.isArray(a)}
;function zh(a,b){this.version=a;this.args=b}
;function Ah(a){this.topic=a}
Ah.prototype.toString=function(){return this.topic};var Bh=z("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.M;M.prototype.publish=M.prototype.L;M.prototype.clear=M.prototype.clear;y("ytPubsub2Pubsub2Instance",Bh,void 0);y("ytPubsub2Pubsub2SubscribedKeys",z("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);y("ytPubsub2Pubsub2TopicToKeys",z("ytPubsub2Pubsub2TopicToKeys")||{},void 0);y("ytPubsub2Pubsub2IsAsync",z("ytPubsub2Pubsub2IsAsync")||{},void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ch(a,b){var c=z("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Dh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Eh(){var a=R("TIMING_TICK_EXPIRATION");a||(a={},Q("TIMING_TICK_EXPIRATION",a));return a}
function Fh(){var a=Eh(),b;for(b in a)Bf(a[b]);Q("TIMING_TICK_EXPIRATION",{})}
;function Gh(a,b){zh.call(this,1,arguments)}
r(Gh,zh);function Hh(a,b){zh.call(this,1,arguments)}
r(Hh,zh);var Ih=new Ah("aft-recorded"),Jh=new Ah("timing-sent");var Kh={vc:!0},Y={},Lh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",
Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Mh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Nh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),Oh={},Ph=(Oh.pa="LATENCY_ACTION_",Oh.yt_pt="LATENCY_PLAYER_",Oh.yt_vst="VIDEO_STREAM_TYPE_",Oh),Qh=!1;
function Rh(){Sh().info.yt_lt="hot_bg";if(Th()){var a="hot_bg";Uh().info_yt_lt=a;if("yt_lt"in Lh){var b=Lh.yt_lt;0<=Ka(Nh,b)&&(a=!!a);"yt_lt"in Ph&&(a=Ph.yt_lt+a.toUpperCase());var c={};b=b.split(".");for(var d=c,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=a;Th()&&(a=Sh(),"gelInfo"in a||(a.gelInfo={}),uh(a.gelInfo,c),a=Vh(),b=Object.keys(c).join(""),sh("info_"+b+"_"+a)||(c.clientActionNonce=a,ph("latencyActionInfo",c)))}else 0<=Ka(Mh,"yt_lt")||(c=Error("Unknown label logged with GEL CSI"),
c.params="yt_lt",oe(c))}}
function Wh(){var a=Xh();if(a.aft)return a.aft;for(var b=R("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
A(Dh.clearResourceTimings||Dh.webkitClearResourceTimings||Dh.mozClearResourceTimings||Dh.msClearResourceTimings||Dh.oClearResourceTimings||xa,Dh);function Vh(){var a=Sh().nonce;a||(a=Fg(),Sh().nonce=a);return a}
function Xh(){return Sh().tick}
function Uh(){var a=Sh();"gel"in a||(a.gel={});return a.gel}
function Sh(){var a;(a=z("ytcsi.data_"))||(a={tick:{},info:{}},Ja("ytcsi.data_",a));return a}
function Yh(){var a=Xh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Sh().info.yt_pvis}
function Th(){return!!T("csi_on_gel")||!!Sh().useGel}
function Zh(){Fh();if(!Th()){var a=Xh(),b=Sh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&Aa(a[f])){var d=f.slice(1);if(d in Kh){var e=Na(a[f],function(l){return Math.round(l-c)});
b["all_"+d]=e.join()}delete a[f]}e=R("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:R("TIMING_ACTION",void 0)};d=Rh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var h=window.location.protocol+z("ytplayer.config.assets.js");(h=Dh.getEntriesByName?Dh.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=Wh();Yh()&&"youtube"==e&&(Rh(),e=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-e));for(var g in b)"_"!=g.charAt(0)&&(f[g]=b[g]);a.ps=P();g={};e=[];for(var k in a)"_"!=
k.charAt(0)&&(h=Math.round(a[k]-c),g[k]=h,e.push(k+"."+h));f.rt=e.join(",");(a=z("ytdebug.logTiming"))&&a(f,g);$h(f,!!b.ap);Ch(Jh,new Hh(g.aft+(d||0),void 0))}}
function $h(a,b){if(T("debug_csi_data")){var c=z("yt.timing.csiData");c||(c=[],y("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;Te(d,e)||Se(d,void 0,void 0,void 0,e)}else Se(d);Ja("yt.timing.pingSent_",!0)}
;function ai(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function bi(a,b,c){x(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return ci(a)}
function ci(a,b,c){if(Da(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function di(a,b,c,d){if(Da(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};x(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function ei(a){J.call(this);this.f=a;this.f.subscribe("command",this.ka,this);this.h={};this.j=!1}
D(ei,J);m=ei.prototype;m.start=function(){this.j||this.g||(this.j=!0,fi(this.f,"RECEIVING"))};
m.ka=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":x(d.event)&&(a=d.event,a in this.h||(c=A(this.Pa,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":x(d.event)&&gi(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=hi(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=ii(a,c))&&this.j&&!this.g&&fi(this.f,a,c))}}};
m.Pa=function(a,b){this.j&&!this.g&&fi(this.f,a,this.aa(a,b))};
m.aa=function(a,b){if(null!=b)return{value:b}};
function gi(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||Id(a.f,"command",this.ka,this);this.f=null;for(var b in this.h)gi(this,b);ei.C.m.call(this)};function ji(a,b){ei.call(this,b);this.i=a;this.start()}
D(ji,ei);ji.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
ji.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function hi(a,b){switch(a){case "loadVideoById":return b=ci(b),[b];case "cueVideoById":return b=ci(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=di(b),[b];case "cuePlaylist":return b=di(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey]}return[]}
function ii(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ji.prototype.aa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ji.C.aa.call(this,a,b)};
ji.prototype.m=function(){ji.C.m.call(this);delete this.i};function ki(a,b,c,d){J.call(this);this.h=b||null;this.A="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.o=A(this.B,this);window.addEventListener("message",this.o)}
r(ki,J);ki.prototype.B=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.h&&a.source!=this.h)&&x(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.i=this.A=a.origin);this.h=a.source;this.sessionId=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.j&&(!this.l||0<=Ka(this.l,b.func))&&this.j(b.func,b.args,a.origin)}}};
ki.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=kd(a);c.postMessage(d,this.A)}catch(e){S(e,"WARNING")}}};
ki.prototype.m=function(){window.removeEventListener("message",this.o);J.prototype.m.call(this)};function li(a,b,c){ki.call(this,a,b,c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.f=this.j=null}
r(li,ki);function mi(){var a=this.g=new li(!!R("WIDGET_ID_ENFORCE")),b=A(this.Ma,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=mi.prototype;m.Ma=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,ni(this,a)),this.j[a]=!0)):this.ma(a,b,c)};
m.ma=function(){};
function ni(a,b){return A(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.ta=function(){this.l=!0;this.sendMessage("initialDelivery",this.ba());this.sendMessage("onReady");G(this.i,this.la,this);this.i=[]};
m.ba=function(){return null};
function oi(a,b){a.sendMessage("infoDelivery",b)}
m.la=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.la({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function pi(a){mi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",A(this.Ka,this));this.addEventListener("onVideoProgress",A(this.Ta,this));this.addEventListener("onVolumeChange",A(this.Ua,this));this.addEventListener("onApiChange",A(this.Oa,this));this.addEventListener("onPlaybackQualityChange",A(this.Qa,this));this.addEventListener("onPlaybackRateChange",A(this.Ra,this));this.addEventListener("onStateChange",A(this.Sa,this));this.addEventListener("onWebglSettingsChanged",A(this.Va,
this))}
D(pi,mi);m=pi.prototype;m.ma=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ai(a)){var d=b;if(Da(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=ci.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=bi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=di.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);ai(a)&&oi(this,this.ba())}};
m.Ka=function(){var a=A(this.ta,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.ba=function(){if(!this.f)return null;var a=this.f.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var h=0;0==f.search("get")?h=3:0==f.search("is")&&(h=2);f=f.charAt(h).toLowerCase()+f.substr(h+1);try{var g=this.f[e]();b[f]=g}catch(k){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=C()/1E3;return b};
m.Sa=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());oi(this,a)};
m.Qa=function(a){oi(this,{playbackQuality:a})};
m.Ra=function(a){oi(this,{playbackRate:a})};
m.Oa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var h=0,g=f.length;h<g;h++){var k=f[h],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ua=function(){oi(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Ta=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());oi(this,a)};
m.Va=function(){var a={sphericalProperties:this.f.getSphericalProperties()};oi(this,a)};
m.dispose=function(){pi.C.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function qi(a){a=void 0===a?!1:a;J.call(this);this.f=new M(a);Wc(this,Ia(Xc,this.f))}
D(qi,J);qi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
qi.prototype.j=function(a,b){this.g||this.f.L.apply(this.f,arguments)};function ri(a,b,c){qi.call(this);this.h=a;this.i=b;this.l=c}
D(ri,qi);function fi(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(kd(a),d.i))}}
ri.prototype.m=function(){this.i=this.h=null;ri.C.m.call(this)};function si(a,b,c){J.call(this);this.f=a;this.i=c;this.j=W(window,"message",A(this.l,this));this.h=new ri(this,a,b);Wc(this,Ia(Xc,this.h))}
D(si,J);si.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,x(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
si.prototype.m=function(){Xf(this.j);this.f=null;si.C.m.call(this)};function ti(){var a=ab(ui),b;return xd(new L(function(c,d){a.onSuccess=function(e){ze(e)?c(e):d(new vi("Request failed, status="+e.status,"net.badstatus",e))};
a.onError=function(e){d(new vi("Unknown request error","net.unknown",e))};
a.N=function(e){d(new vi("Request timed out","net.timeout",e))};
b=Je("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof yd&&b.abort();
return vd(c)})}
function vi(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
r(vi,F);function wi(){this.g=0;this.f=null}
wi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),qd(a)?a:xi(a)):2===this.g&&b?(a=b.call(c,this.f),qd(a)?a:yi(a)):this};
wi.prototype.getValue=function(){return this.f};
wi.prototype.$goog_Thenable=!0;function yi(a){var b=new wi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function xi(a){var b=new wi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function zi(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ai;this.isTimeout=a instanceof vi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof yd}
r(zi,F);zi.prototype.name="BiscottiError";function Ai(){F.call(this,"Biscotti ID is missing from server")}
r(Ai,F);Ai.prototype.name="BiscottiMissingError";var ui={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Bi=null;function le(){if("1"===Va(je(),"args","privembed"))return vd(Error("Biscotti ID is not available in private embed mode"));Bi||(Bi=xd(ti().then(Ci),function(a){return Di(2,a)}));
return Bi}
function Ci(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ai;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ai;a=a.id;me(a);Bi=xi(a);Ei(18E5,2);return a}
function Di(a,b){var c=new zi(b);me("");Bi=yi(c);0<a&&Ei(12E4,a-1);throw c;}
function Ei(a,b){U(function(){xd(ti().then(Ci,function(c){return Di(b,c)}),xa)},a)}
function Fi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():le()}catch(b){return vd(b)}}
;function Gi(a){if("1"!==Va(je(),"args","privembed")){a&&ke();try{Fi().then(function(b){T("pass_biscotti_id_in_header_ajax_tv")||T("pass_biscotti_id_in_header_ajax")||(b=qe(b),b.bsq=Hi++,Pe("//www.youtube.com/ad_data_204",{xa:!1,F:b,withCredentials:!0}))},function(){}),U(Gi,18E5)}catch(b){S(b)}}}
var Hi=0;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ii(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=dc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=Ii.prototype;m.get=function(a,b){Ji(a);Ki(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Ji(a);Ki(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){Ji(a);Ki(a);delete Z[a]};
m.save=function(){xg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ki(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ji(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Li(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(Ii);var Mi=null,Ni=null,Oi=null,Pi={};function Qi(a){var b=a.id;a=a.ve_type;var c=Jg++;a=new Hg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Pi[b]=a;b=Og();c=Ng();b&&c&&Rg(b,c,[a])}
function Ri(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Pg(b,a),a=Ng()))for(var c in Pi){var d=Pi[c];d&&Rg(b,a,[d])}}
function Si(a){Pi[a.id]=new Hg({trackingParams:a.tracking_params})}
function Ti(a){var b=Og();a=Pi[a.id];b&&a&&ug("visualElementGestured",{csn:b,ve:Ig(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},Dg,void 0,void 0)}
function Ui(a){a=a.ids;var b=Og();if(b)for(var c=0;c<a.length;c++){var d=Pi[a[c]];d&&ug("visualElementShown",{csn:b,ve:Ig(d),eventType:1},Dg,void 0,void 0)}}
;y("yt.setConfig",Q,void 0);y("yt.config.set",Q,void 0);y("yt.setMsg",Ze,void 0);y("yt.msgs.set",Ze,void 0);y("yt.logging.errors.log",Xe,void 0);
y("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);Gi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Mi=a=nh(a);a.addEventListener("onScreenChanged",Ri);a.addEventListener("onLogClientVeCreated",Qi);a.addEventListener("onLogServerVeCreated",Si);a.addEventListener("onLogVeClicked",Ti);a.addEventListener("onLogVesShown",
Ui);b=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Oi=new pi(a):R("ENABLE_POST_API")&&x(b)&&x(c)&&(Ni=new si(window.parent,b,c),Oi=new ji(a,Ni.h));c=ie("BG_P");Nf(c)&&(R("BG_I")||R("BG_IU"))&&(Jf=!0,If.initialize(R("BG_I",null),R("BG_IU",null),c,Mf,void 0));Ef()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){Se(a+"mac_204?action_fcts=1");return!0},void 0);
var Vi=ne(function(){var a="ol";Dh.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),Dh.mark(a));a=Xh();var b=P();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=Eh();if(b=a.ol)Bf(b),a.ol=0;Uh().tick_ol=void 0;P();Th()?(a=Vh(),sh("tick_ol_"+a)||ph("latencyActionTicked",{tickName:"ol",clientActionNonce:a},void 0),a=!0):a=!1;if(a=!a)a=!z("yt.timing.pingSent_");if(a&&(b=R("TIMING_ACTION",void 0),a=Xh(),z("ytglobal.timingready_")&&b&&a._start&&(b=Wh()))){Qh||(Ch(Ih,new Gh(Math.round(b-a._start),void 0)),
Qh=!0);b=!0;var c=R("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Zh()}a=Ii.getInstance();c=!!((Li("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&$c(document.body,"exp-invert-logo")&&(b&&!$c(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):$c(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&$c(document.body,"inverted-hdpi")&&ad());
c!=b&&(c="f"+(Math.floor(119/31)+1),d=Li(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:(b=d.toString(16),Z[c]=b.toString()),a.save())}),Wi=ne(function(){var a=Mi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&If.dispose();a=0;for(var b=Cf.length;a<b;a++)Bf(Cf[a]);Cf.length=0;vf("//static.doubleclick.net/instream/ad_status.js");Df=!1;Q("DCLKSTAT",0);Yc(Oi,Ni);if(a=Mi)a.removeEventListener("onScreenChanged",Ri),a.removeEventListener("onLogClientVeCreated",Qi),a.removeEventListener("onLogServerVeCreated",Si),a.removeEventListener("onLogVeClicked",Ti),a.removeEventListener("onLogVesShown",Ui),a.destroy();Pi={}});
window.addEventListener?(window.addEventListener("load",Vi),window.addEventListener("unload",Wi)):window.attachEvent&&(window.attachEvent("onload",Vi),window.attachEvent("onunload",Wi));Ja("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Of);Ja("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Pf);Ja("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||Ff);
Ja("yt.player.exports.navigate",z("yt.player.exports.navigate")||Qg);Ja("yt.util.activity.init",z("yt.util.activity.init")||$f);Ja("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||cg);Ja("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||ag);}).call(this);
