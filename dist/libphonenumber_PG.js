(function(){var aa=this;function k(a){return"string"==typeof a}function l(a,b){a=a.split(".");var c=aa;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function n(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.aa=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var p=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ba=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,g=k(a)?a.split(""):a,f=0;f<c;f++)if(f in g){var h=g[f];b.call(void 0,h,f,a)&&(d[e++]=h)}return d};
function ca(a,b){a.sort(b||da)}function da(a,b){return a>b?1:a<b?-1:0};function ea(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};function fa(a,b){this.a=a;this.h=!!b.i;this.c=b.b;this.m=b.type;this.l=!1;switch(this.c){case ha:case ia:case ja:case la:case ma:case na:case oa:this.l=!0}this.g=b.defaultValue}var oa=1,na=2,ha=3,ia=4,ja=6,la=16,ma=18;function pa(a,b){this.c=a;this.a={};for(a=0;a<b.length;a++){var c=b[a];this.a[c.a]=c}}function qa(a){a=ea(a.a);ca(a,function(a,c){return a.a-c.a});return a};function q(){this.c={};this.g=this.f().a;this.a=this.h=null}q.prototype.has=function(a){return r(this,a.a)};q.prototype.get=function(a,b){return t(this,a.a,b)};q.prototype.set=function(a,b){u(this,a.a,b)};q.prototype.add=function(a,b){ra(this,a.a,b)};
function sa(a,b){for(var c=qa(a.f()),d=0;d<c.length;d++){var e=c[d],g=e.a;if(r(b,g)){a.a&&delete a.a[e.a];var f=11==e.c||10==e.c;if(e.h){e=v(b,g);for(var h=0;h<e.length;h++)ra(a,g,f?e[h].clone():e[h])}else e=w(b,g),f?(f=w(a,g))?sa(f,e):u(a,g,e.clone()):u(a,g,e)}}}q.prototype.clone=function(){var a=new this.constructor;a!=this&&(a.c={},a.a&&(a.a={}),sa(a,this));return a};function r(a,b){return null!=a.c[b]}
function w(a,b){var c=a.c[b];if(null==c)return null;if(a.h){if(!(b in a.a)){var d=a.h,e=a.g[b];if(null!=c)if(e.h){for(var g=[],f=0;f<c.length;f++)g[f]=d.c(e,c[f]);c=g}else c=d.c(e,c);return a.a[b]=c}return a.a[b]}return c}function t(a,b,c){var d=w(a,b);return a.g[b].h?d[c||0]:d}function x(a,b){if(r(a,b))a=t(a,b,void 0);else a:{a=a.g[b];if(void 0===a.g)if(b=a.m,b===Boolean)a.g=!1;else if(b===Number)a.g=0;else if(b===String)a.g=a.l?"0":"";else{a=new b;break a}a=a.g}return a}
function v(a,b){return w(a,b)||[]}function y(a,b){return a.g[b].h?r(a,b)?a.c[b].length:0:r(a,b)?1:0}function u(a,b,c){a.c[b]=c;a.a&&(a.a[b]=c)}function ra(a,b,c){a.c[b]||(a.c[b]=[]);a.c[b].push(c);a.a&&delete a.a[b]}function ta(a,b){delete a.c[b];a.a&&delete a.a[b]}function z(a,b){var c=[],d;for(d in b)0!=d&&c.push(new fa(d,b[d]));return new pa(a,c)};function A(){}A.prototype.a=function(a){new a.c;throw Error("Unimplemented");};A.prototype.c=function(a,b){if(11==a.c||10==a.c)return b instanceof q?b:this.a(a.m.prototype.f(),b);if(14==a.c)return k(b)&&ua.test(b)&&(a=Number(b),0<a)?a:b;if(!a.l)return b;a=a.m;if(a===String){if("number"==typeof b)return String(b)}else if(a===Number&&k(b)&&("Infinity"===b||"-Infinity"===b||"NaN"===b||ua.test(b)))return Number(b);return b};var ua=/^-?[0-9]+$/;function va(){}n(va,A);va.prototype.a=function(a,b){a=new a.c;a.h=this;a.c=b;a.a={};return a};function B(){}n(B,va);B.prototype.c=function(a,b){return 8==a.c?!!b:A.prototype.c.apply(this,arguments)};B.prototype.a=function(a,b){return B.o.a.call(this,a,b)};function C(a,b){null!=a&&this.a.apply(this,arguments)}C.prototype.c="";C.prototype.set=function(a){this.c=""+a};C.prototype.a=function(a,b,c){this.c+=String(a);if(null!=b)for(var d=1;d<arguments.length;d++)this.c+=arguments[d];return this};C.prototype.toString=function(){return this.c};/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function D(){q.call(this)}n(D,q);var wa=null;function E(){q.call(this)}n(E,q);var xa=null;function F(){q.call(this)}n(F,q);var ya=null;
D.prototype.f=function(){var a=wa;a||(wa=a=z(D,{0:{name:"NumberFormat",j:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,b:9,type:String},2:{name:"format",required:!0,b:9,type:String},3:{name:"leading_digits_pattern",i:!0,b:9,type:String},4:{name:"national_prefix_formatting_rule",b:9,type:String},6:{name:"national_prefix_optional_when_formatting",b:8,defaultValue:!1,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",b:9,type:String}}));return a};D.f=D.prototype.f;
E.prototype.f=function(){var a=xa;a||(xa=a=z(E,{0:{name:"PhoneNumberDesc",j:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",b:9,type:String},9:{name:"possible_length",i:!0,b:5,type:Number},10:{name:"possible_length_local_only",i:!0,b:5,type:Number},6:{name:"example_number",b:9,type:String}}));return a};E.f=E.prototype.f;
F.prototype.f=function(){var a=ya;a||(ya=a=z(F,{0:{name:"PhoneMetadata",j:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",b:11,type:E},2:{name:"fixed_line",b:11,type:E},3:{name:"mobile",b:11,type:E},4:{name:"toll_free",b:11,type:E},5:{name:"premium_rate",b:11,type:E},6:{name:"shared_cost",b:11,type:E},7:{name:"personal_number",b:11,type:E},8:{name:"voip",b:11,type:E},21:{name:"pager",b:11,type:E},25:{name:"uan",b:11,type:E},27:{name:"emergency",b:11,type:E},28:{name:"voicemail",b:11,type:E},
24:{name:"no_international_dialling",b:11,type:E},9:{name:"id",required:!0,b:9,type:String},10:{name:"country_code",b:5,type:Number},11:{name:"international_prefix",b:9,type:String},17:{name:"preferred_international_prefix",b:9,type:String},12:{name:"national_prefix",b:9,type:String},13:{name:"preferred_extn_prefix",b:9,type:String},15:{name:"national_prefix_for_parsing",b:9,type:String},16:{name:"national_prefix_transform_rule",b:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",b:8,defaultValue:!1,
type:Boolean},19:{name:"number_format",i:!0,b:11,type:D},20:{name:"intl_number_format",i:!0,b:11,type:D},22:{name:"main_country_for_code",b:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",b:9,type:String},26:{name:"leading_zero_possible",b:8,defaultValue:!1,type:Boolean}}));return a};F.f=F.prototype.f;function G(){q.call(this)}n(G,q);var za=null,Aa={$:0,w:1,v:5,u:10,s:20};
G.prototype.f=function(){var a=za;a||(za=a=z(G,{0:{name:"PhoneNumber",j:"i18n.phonenumbers.PhoneNumber"},1:{name:"country_code",required:!0,b:5,type:Number},2:{name:"national_number",required:!0,b:4,type:Number},3:{name:"extension",b:9,type:String},4:{name:"italian_leading_zero",b:8,type:Boolean},8:{name:"number_of_leading_zeros",b:5,defaultValue:1,type:Number},5:{name:"raw_input",b:9,type:String},6:{name:"country_code_source",b:14,defaultValue:0,type:Aa},7:{name:"preferred_domestic_carrier_code",
b:9,type:String}}));return a};G.ctor=G;G.ctor.f=G.prototype.f;var H={675:["PG"]},Ba={PG:[null,[null,null,"[1-9]\\d{6,7}",null,null,null,null,null,null,[7,8]],[null,null,"(?:3[0-2]\\d|4[257]\\d|5[34]\\d|64[1-9]|77(?:[0-24]\\d|30)|85[02-46-9]|9[78]\\d)\\d{4}",null,null,null,null,null,null,[7]],[null,null,"7(?:[0-689]\\d|75)\\d{5}",null,null,null,null,null,null,[8]],[null,null,"180\\d{4}",null,null,null,null,null,null,[7]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,
null,null,[-1]],[null,null,"2(?:0[0-47]|7[568])\\d{4}",null,null,null,null,null,null,[7]],"PG",675,"140[1-3]|00",null,null,null,null,null,"00",null,[[null,"(\\d{3})(\\d{4})","$1 $2",["[13-689]|27"]],[null,"(\\d{4})(\\d{4})","$1 $2",["20|7"]]],null,[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]],[null,null,null,null,null,null,null,null,null,[-1]],null,null,[null,null,null,null,null,null,null,null,null,[-1]]]};/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function I(){this.a={}}I.a=void 0;I.c=function(){return I.a?I.a:I.a=new I};
var J={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9"},Ca={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",
7:"7",8:"8",9:"9","+":"+","*":"*","#":"#"},Da={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","\uff10":"0","\uff11":"1","\uff12":"2","\uff13":"3","\uff14":"4","\uff15":"5","\uff16":"6","\uff17":"7","\uff18":"8","\uff19":"9","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u06f0":"0","\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9",A:"2",
B:"2",C:"2",D:"3",E:"3",F:"3",G:"4",H:"4",I:"4",J:"5",K:"5",L:"5",M:"6",N:"6",O:"6",P:"7",Q:"7",R:"7",S:"7",T:"8",U:"8",V:"8",W:"9",X:"9",Y:"9",Z:"9"},Ea=/[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/,K=/^[+\uff0b]+/,Fa=/([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9])/,Ga=/[+\uff0b0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]/,Ha=/[\\\/] *x/,Ia=/[^0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9A-Za-z#]+$/,Ja=/(?:.*?[A-Za-z]){3}.*/,Ka=/(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)$/i,
La=/^[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{2}$|^[+\uff0b]*(?:[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*]*[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]){3,}[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e*A-Za-z0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]*(?:;ext=([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})|[ \u00a0\t,]*(?:e?xt(?:ensi(?:o\u0301?|\u00f3))?n?|\uff45?\uff58\uff54\uff4e?|[;,x\uff58#\uff03~\uff5e]|int|anexo|\uff49\uff4e\uff54)[:\.\uff0e]?[ \u00a0\t,-]*([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,7})#?|[- ]+([0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]{1,5})#)?$/i,
Ma=/(\$\d)/,Na=/\$NP/,Oa=/\$FG/,Pa=/\$CC/;function Qa(a){var b=a.search(Ga);0<=b?(a=a.substring(b),a=a.replace(Ia,""),b=a.search(Ha),0<=b&&(a=a.substring(0,b))):a="";return a}function Ra(a){return 2>a.length?!1:L(La,a)}function Sa(a){return L(Ja,a)?M(a,Da):M(a,J)}function Ta(a){var b=Sa(a.toString());a.c="";a.a(b)}function Ua(){return ba(Object.keys(Ba),function(a){return isNaN(a)})}function Va(a){return null!=a&&(1!=y(a,9)||-1!=v(a,9)[0])}
function M(a,b){for(var c=new C,d,e=a.length,g=0;g<e;++g)d=a.charAt(g),d=b[d.toUpperCase()],null!=d&&c.a(d);return c.toString()}function N(a){return null!=a&&isNaN(a)&&a.toUpperCase()in Ba}function O(a,b,c){if(0==t(b,2)&&r(b,5)){var d=x(b,5);if(0<d.length)return d}d=x(b,1);var e=P(b);if(0==c)return R(d,0,e,"");if(!(d in H))return e;a=S(a,d,T(d));b=Wa(b,a,c);e=Xa(e,a,c);return R(d,c,e,b)}function S(a,b,c){return"001"==c?U(a,""+b):U(a,c)}
function Ya(a,b,c){if(!N(c))return O(a,b,1);var d=x(b,1),e=P(b);if(!(d in H))return e;if(1==d){if(null!=c&&0<=p(H[1],c.toUpperCase()))return d+" "+O(a,b,2)}else if(d==Za(a,c))return O(a,b,2);var g=U(a,c),f=x(g,11);c="";L(Ea,f)?c=f:r(g,17)&&(c=x(g,17));a=S(a,d,T(d));e=Xa(e,a,1);b=Wa(b,a,1);return 0<c.length?c+" "+d+" "+e+b:R(d,1,e,b)}function P(a){if(!r(a,2))return"";var b=""+t(a,2);return r(a,4)&&t(a,4)&&0<x(a,8)?Array(x(a,8)+1).join("0")+b:b}
function R(a,b,c,d){switch(b){case 0:return"+"+a+c+d;case 1:return"+"+a+" "+c+d;case 3:return"tel:+"+a+"-"+c+d;default:return c+d}}function Xa(a,b,c){b=0==v(b,20).length||2==c?v(b,19):v(b,20);b=V(b,a);return null==b?a:$a(a,b,c,void 0)}function V(a,b){for(var c,d=a.length,e=0;e<d;++e){c=a[e];var g=y(c,3);if(0==g||0==b.search(t(c,3,g-1)))if(g=new RegExp(t(c,1)),L(g,b))return c}return null}
function $a(a,b,c,d){var e=x(b,2),g=new RegExp(t(b,1)),f=x(b,5);2==c&&null!=d&&0<d.length&&0<f.length?(b=f.replace(Pa,d),e=e.replace(Ma,b),a=a.replace(g,e)):(b=x(b,4),a=2==c&&null!=b&&0<b.length?a.replace(g,e.replace(Ma,b)):a.replace(g,e));3==c&&(a=a.replace(/^[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/,""),a=a.replace(/[-x\u2010-\u2015\u2212\u30fc\uff0d-\uff0f \u00a0\u00ad\u200b\u2060\u3000()\uff08\uff09\uff3b\uff3d.\[\]/~\u2053\u223c\uff5e]+/g,
"-"));return a}function Wa(a,b,c){return r(a,3)&&0!=t(a,3).length?3==c?";ext="+t(a,3):r(b,13)?t(b,13)+x(a,3):" ext. "+x(a,3):""}function ab(a,b){switch(b){case 4:return t(a,5);case 3:return t(a,4);case 1:return t(a,3);case 0:case 2:return t(a,2);case 5:return t(a,6);case 6:return t(a,8);case 7:return t(a,7);case 8:return t(a,21);case 9:return t(a,25);case 10:return t(a,28);default:return t(a,1)}}
function bb(a,b){return W(a,t(b,1))?W(a,t(b,5))?4:W(a,t(b,4))?3:W(a,t(b,6))?5:W(a,t(b,8))?6:W(a,t(b,7))?7:W(a,t(b,21))?8:W(a,t(b,25))?9:W(a,t(b,28))?10:W(a,t(b,2))?t(b,18)||W(a,t(b,3))?2:0:!t(b,18)&&W(a,t(b,3))?1:-1:-1}function U(a,b){if(null==b)return null;b=b.toUpperCase();var c=a.a[b];if(null==c){c=Ba[b];if(null==c)return null;c=(new B).a(F.f(),c);a.a[b]=c}return c}function W(a,b){var c=a.length;return 0<y(b,9)&&-1==p(v(b,9),c)?!1:L(x(b,2),a)}function cb(a,b){var c=db(a,b);return eb(a,b,c)}
function eb(a,b,c){var d=x(b,1),e=S(a,d,c);if(null==e||"001"!=c&&d!=Za(a,c))return!1;a=P(b);return-1!=bb(a,e)}function db(a,b){if(null==b)return null;var c=x(b,1);c=H[c];if(null==c)a=null;else if(1==c.length)a=c[0];else a:{b=P(b);for(var d,e=c.length,g=0;g<e;g++){d=c[g];var f=U(a,d);if(r(f,23)){if(0==b.search(t(f,23))){a=d;break a}}else if(-1!=bb(b,f)){a=d;break a}}a=null}return a}function T(a){a=H[a];return null==a?"ZZ":a[0]}
function Za(a,b){a=U(a,b);if(null==a)throw Error("Invalid region code: "+b);return x(a,10)}function X(a,b,c,d){var e=ab(c,d),g=0==y(e,9)?v(t(c,1),9):v(e,9);e=v(e,10);if(2==d)if(Va(ab(c,0)))a=ab(c,1),Va(a)&&(g=g.concat(0==y(a,9)?v(t(c,1),9):v(a,9)),ca(g),0==e.length?e=v(a,10):(e=e.concat(v(a,10)),ca(e)));else return X(a,b,c,1);if(-1==g[0])return 5;b=b.length;if(-1<p(e,b))return 4;c=g[0];return c==b?0:c>b?2:g[g.length-1]<b?3:-1<p(g,b,1)?0:5}
function fb(a){var b=Y,c=P(a);a=x(a,1);if(!(a in H))return 1;a=S(b,a,T(a));return X(b,c,a,-1)}
function gb(a,b,c,d,e,g){if(0==b.length)return 0;b=new C(b);var f;null!=c&&(f=t(c,11));null==f&&(f="NonMatch");var h=b.toString();if(0==h.length)f=20;else if(K.test(h))h=h.replace(K,""),b.c="",b.a(Sa(h)),f=1;else{h=new RegExp(f);Ta(b);f=b.toString();if(0==f.search(h)){h=f.match(h)[0].length;var m=f.substring(h).match(Fa);m&&null!=m[1]&&0<m[1].length&&"0"==M(m[1],J)?f=!1:(b.c="",b.a(f.substring(h)),f=!0)}else f=!1;f=f?5:20}e&&u(g,6,f);if(20!=f){if(2>=b.c.length)throw Error("Phone number too short after IDD");
a:{a=b.toString();if(0!=a.length&&"0"!=a.charAt(0))for(e=a.length,b=1;3>=b&&b<=e;++b)if(c=parseInt(a.substring(0,b),10),c in H){d.a(a.substring(b));d=c;break a}d=0}if(0!=d)return u(g,1,d),d;throw Error("Invalid country calling code");}if(null!=c&&(f=x(c,10),h=""+f,m=b.toString(),0==m.lastIndexOf(h,0)&&(h=new C(m.substring(h.length)),m=t(c,1),m=new RegExp(x(m,2)),hb(h,c,null),h=h.toString(),!L(m,b.toString())&&L(m,h)||3==X(a,b.toString(),c,-1))))return d.a(h),e&&u(g,6,10),u(g,1,f),f;u(g,1,0);return 0}
function hb(a,b,c){var d=a.toString(),e=d.length,g=t(b,15);if(0!=e&&null!=g&&0!=g.length){var f=new RegExp("^(?:"+g+")");if(e=f.exec(d)){g=new RegExp(x(t(b,1),2));var h=L(g,d),m=e.length-1;b=t(b,16);if(null==b||0==b.length||null==e[m]||0==e[m].length){if(!h||L(g,d.substring(e[0].length)))null!=c&&0<m&&null!=e[m]&&c.a(e[1]),a.set(d.substring(e[0].length))}else if(d=d.replace(f,b),!h||L(g,d))null!=c&&0<m&&c.a(e[1]),a.set(d)}}}
function Z(a,b){var c=Y;if(!N(b)&&0<a.length&&"+"!=a.charAt(0))throw Error("Invalid country calling code");return ib(c,a,b,!0)}
function ib(a,b,c,d){if(null==b)throw Error("The string supplied did not seem to be a phone number");if(250<b.length)throw Error("The string supplied is too long to be a phone number");var e=new C,g=b.indexOf(";phone-context=");if(0<=g){var f=g+15;if("+"==b.charAt(f)){var h=b.indexOf(";",f);0<h?e.a(b.substring(f,h)):e.a(b.substring(f))}f=b.indexOf("tel:");e.a(b.substring(0<=f?f+4:0,g))}else e.a(Qa(b));g=e.toString();f=g.indexOf(";isub=");0<f&&(e.c="",e.a(g.substring(0,f)));if(!Ra(e.toString()))throw Error("The string supplied did not seem to be a phone number");
g=e.toString();if(!(N(c)||null!=g&&0<g.length&&K.test(g)))throw Error("Invalid country calling code");g=new G;d&&u(g,5,b);a:{b=e.toString();f=b.search(Ka);if(0<=f&&Ra(b.substring(0,f))){h=b.match(Ka);for(var m=h.length,Q=1;Q<m;++Q)if(null!=h[Q]&&0<h[Q].length){e.c="";e.a(b.substring(0,f));b=h[Q];break a}}b=""}0<b.length&&u(g,3,b);f=U(a,c);b=new C;h=0;m=e.toString();try{h=gb(a,m,f,b,d,g)}catch(ka){if("Invalid country calling code"==ka.message&&K.test(m)){if(m=m.replace(K,""),h=gb(a,m,f,b,d,g),0==h)throw ka;
}else throw ka;}0!=h?(e=T(h),e!=c&&(f=S(a,h,e))):(Ta(e),b.a(e.toString()),null!=c?(h=x(f,10),u(g,1,h)):d&&ta(g,6));if(2>b.c.length)throw Error("The string supplied is too short to be a phone number");null!=f&&(c=new C,e=new C(b.toString()),hb(e,f,c),a=X(a,e.toString(),f,-1),2!=a&&4!=a&&5!=a&&(b=e,d&&0<c.toString().length&&u(g,7,c.toString())));d=b.toString();a=d.length;if(2>a)throw Error("The string supplied is too short to be a phone number");if(17<a)throw Error("The string supplied is too long to be a phone number");
if(1<d.length&&"0"==d.charAt(0)){u(g,4,!0);for(a=1;a<d.length-1&&"0"==d.charAt(a);)a++;1!=a&&u(g,8,a)}u(g,2,parseInt(d,10));return g}function L(a,b){return(a="string"==typeof a?b.match("^(?:"+a+")$"):b.match(a))&&a[0].length==b.length?!0:!1};var Y=I.c();l("phoneUtils.countryCodeToRegionCodeMap",function(){return H});l("phoneUtils.isPossibleNumber",function(a,b){a=Z(a,b||"us");a=fb(a);return 0==a||4==a});l("phoneUtils.isPossibleNumberWithReason",function(a,b){a=Z(a,b||"us");return fb(a)});l("phoneUtils.isValidNumber",function(a,b){a=Z(a,b||"us");return cb(Y,a)});l("phoneUtils.isValidNumberForRegion",function(a,b){b=b||"us";a=Z(a,b);return eb(Y,a,b)});
l("phoneUtils.getCountryCodeForRegion",function(a){a=a||"us";var b=Y;return N(a)?Za(b,a):0});l("phoneUtils.getRegionCodeForNumber",function(a,b){a=Z(a,b||"us");return db(Y,a)});
l("phoneUtils.getNumberType",function(a,b){a=Z(a,b||"us");b=Y;var c=db(b,a);b=S(b,x(a,1),c);null==b?a=-1:(a=P(a),a=bb(a,b));switch(a){case 0:var d="FIXED_LINE";break;case 1:d="MOBILE";break;case 2:d="FIXED_LINE_OR_MOBILE";break;case 3:d="TOLL_FREE";break;case 4:d="PREMIUM_RATE";break;case 5:d="SHARED_COST";break;case 6:d="VOIP";break;case 7:d="PERSONAL_NUMBER";break;case 8:d="PAGER";break;case 9:d="UAN";break;case -1:d="UNKNOWN"}return d});l("phoneUtils.getSupportedRegions",function(){return Ua()});
l("phoneUtils.formatE164",function(a,b){a=Z(a,b||"us");return O(Y,a,0)});l("phoneUtils.formatNational",function(a,b){a=Z(a,b||"us");return O(Y,a,2)});l("phoneUtils.formatInternational",function(a,b){a=Z(a,b||"us");return O(Y,a,1)});
l("phoneUtils.formatInOriginalFormat",function(a,b){b=b||"us";a=Z(a,b);var c=b;b=Y;var d;if(d=r(a,5)){d=x(a,1);d=S(b,d,T(d));if(null==d)d=!1;else{var e=P(a);d=null!=V(v(d,19),e)}d=!d}if(d)a=x(a,5);else if(r(a,6)){switch(t(a,6)){case 1:b=O(b,a,1);break;case 5:b=Ya(b,a,c);break;case 10:b=O(b,a,1).substring(1);break;default:d=T(x(a,1));c=U(b,d);if(null==c)var g=null;else c=x(c,12),g=0==c.length?null:c=c.replace("~","");c=O(b,a,2);if(null==g||0==g.length)b=c;else{b:{e=x(a,5);e=M(e,J);if(0==e.lastIndexOf(g,
0))try{var f=cb(b,ib(b,e.substring(g.length),d,!1));break b}catch(h){}f=!1}f?b=c:(f=U(b,d),d=P(a),f=V(v(f,19),d),null==f?b=c:(d=x(f,4),e=d.indexOf("$1"),0>=e?b=c:(d=d.substring(0,e),d=M(d,J),0==d.length?b=c:(f=f.clone(),ta(f,4),d=[f],f=x(a,1),c=P(a),f in H?(b=S(b,f,T(f)),e=V(d,c),null!=e&&(d=e.clone(),e=x(e,4),0<e.length&&(g=x(b,12),0<g.length?(e=e.replace(Na,g).replace(Oa,"$1"),u(d,4,e)):ta(d,4)),c=$a(c,d,2)),b=Wa(a,b,2),b=R(f,2,c,b)):b=c))))}}a=x(a,5);null!=b&&0<a.length&&(f=M(b,Ca),c=M(a,Ca),f!=
c&&(b=a));a=b}else a=O(b,a,2);return a});l("phoneUtils.formatOutOfCountryCallingNumber",function(a,b,c){if(c)return a=Z(a,b),Ya(Y,a,c)});})();
