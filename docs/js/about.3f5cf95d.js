(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var r=n("3a38"),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),o=n("4630"),i=n("6821"),c=n("6a99"),a=n("69a8"),u=n("c69a"),f=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?f:function(t,e){if(t=i(t),e=c(e,!0),u)try{return f(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},1654:function(t,e,n){"use strict";var r=n("71c1")(!0);n("30f1")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,e,n){var r=n("63b6");r(r.S,"Array",{isArray:n("9003")})},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),o=n("e53d").document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},"20fd":function(t,e,n){"use strict";var r=n("d9f6"),o=n("aebd");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"241e":function(t,e,n){var r=n("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"30f1":function(t,e,n){"use strict";var r=n("b8e3"),o=n("63b6"),i=n("9138"),c=n("35e8"),a=n("481b"),u=n("8f60"),f=n("45f2"),s=n("53e2"),l=n("5168")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",h="values",y=function(){return this};t.exports=function(t,e,n,b,g,m,x){u(n,e,b);var _,w,S,O=function(t){if(!p&&t in I)return I[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},A=e+" Iterator",E=g==h,T=!1,I=t.prototype,P=I[l]||I[d]||g&&I[g],k=P||O(g),N=g?E?O("entries"):k:void 0,j="Array"==e&&I.entries||P;if(j&&(S=s(j.call(new t)),S!==Object.prototype&&S.next&&(f(S,A,!0),r||"function"==typeof S[l]||c(S,l,y))),E&&P&&P.name!==h&&(T=!0,k=function(){return P.call(this)}),r&&!x||!p&&!T&&I[l]||c(I,l,k),a[e]=k,a[A]=y,g)if(_={values:E?k:O(h),keys:m?k:O(v),entries:N},x)for(w in _)w in I||i(I,w,_[w]);else o(o.P+o.F*(p||T),e,_);return _}},"32fc":function(t,e,n){var r=n("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,e,n){var r=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"35e8":function(t,e,n){var r=n("d9f6"),o=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"36bd":function(t,e,n){"use strict";var r=n("4bf8"),o=n("77f1"),i=n("9def");t.exports=function(t){var e=r(this),n=i(e.length),c=arguments.length,a=o(c>1?arguments[1]:void 0,n),u=c>2?arguments[2]:void 0,f=void 0===u?n:o(u,n);while(f>a)e[a++]=t;return e}},"36c3":function(t,e,n){var r=n("335c"),o=n("25eb");t.exports=function(t){return r(o(t))}},3702:function(t,e,n){var r=n("481b"),o=n("5168")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},"3a38":function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},"40c3":function(t,e,n){var r=n("6b4c"),o=n("5168")("toStringTag"),i="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},"45f2":function(t,e,n){var r=n("d9f6").f,o=n("07e3"),i=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},"481b":function(t,e){t.exports={}},4876:function(t,e,n){"use strict";var r=n("9db6"),o=n.n(r);o.a},"4ee1":function(t,e,n){var r=n("5168")("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:n=!0}},i[r]=function(){return a},t(i)}catch(c){}return n}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5168:function(t,e,n){var r=n("dbdb")("wks"),o=n("62a0"),i=n("e53d").Symbol,c="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))};a.store=r},"53e2":function(t,e,n){var r=n("07e3"),o=n("241e"),i=n("5559")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"549b":function(t,e,n){"use strict";var r=n("d864"),o=n("63b6"),i=n("241e"),c=n("b0dc"),a=n("3702"),u=n("b447"),f=n("20fd"),s=n("7cd6");o(o.S+o.F*!n("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,b=0,g=s(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||d==Array&&a(g))for(e=u(p.length),n=new d(e);e>b;b++)f(n,b,y?h(p[b],b):p[b]);else for(l=g.call(p),n=new d;!(o=l.next()).done;b++)f(n,b,y?c(l,h,[o.value,b],!0):o.value);return n.length=b,n}})},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},5559:function(t,e,n){var r=n("dbdb")("keys"),o=n("62a0");t.exports=function(t){return r[t]||(r[t]=o(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var r=n("36c3"),o=n("b447"),i=n("0fc9");t.exports=function(t){return function(e,n,c){var a,u=r(e),f=o(u.length),s=i(c,f);if(t&&n!=n){while(f>s)if(a=u[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}}},"5dbc":function(t,e,n){var r=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var i,c=e.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&r(i)&&o&&o(t,i),t}},"62a0":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},"63b6":function(t,e,n){var r=n("e53d"),o=n("584a"),i=n("d864"),c=n("35e8"),a=n("07e3"),u="prototype",f=function(t,e,n){var s,l,p,d=t&f.F,v=t&f.G,h=t&f.S,y=t&f.P,b=t&f.B,g=t&f.W,m=v?o:o[e]||(o[e]={}),x=m[u],_=v?r:h?r[e]:(r[e]||{})[u];for(s in v&&(n=e),n)l=!d&&_&&void 0!==_[s],l&&a(m,s)||(p=l?_[s]:n[s],m[s]=v&&"function"!=typeof _[s]?n[s]:b&&l?i(p,r):g&&_[s]==p?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((m.virtual||(m.virtual={}))[s]=p,t&f.R&&x&&!x[s]&&c(x,s,p)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},"667b":function(t,e,n){},"66a7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],i=n("a745"),c=n.n(i);function a(t){if(c()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var u=n("774e"),f=n.n(u),s=n("c8bb"),l=n.n(s);function p(t){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return f()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(t){return a(t)||p(t)||d()}var h={mounted:function(){var t=0,e=[10,919,.2,-4,-53,-820,.13,5,8,1,3,717,81,28,471,2,2,2,2,167,23,123,3,23,123,3,213,12,3,14,12,31,3,3,21,4,214,1,21,3,4,124,12,3,1],n=function e(n){if(n.length<2)return n;var r=n[Math.floor(Math.random()*n.length)],o=n.filter(function(t){return t<r}),i=n.filter(function(t){return t>r});return t+=1,[].concat(v(e(o)),[r],v(e(i)))};console.log(n(e),t)}},y=h,b=n("2877"),g=Object(b["a"])(y,r,o,!1,null,null,null);e["default"]=g.exports},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var r=n("e53d"),o=n("35e8"),i=n("481b"),c=n("5168")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var f=a[u],s=r[f],l=s&&s.prototype;l&&!l[c]&&o(l,c,f),i[f]=i.Array}},"6c7b":function(t,e,n){var r=n("5ca1");r(r.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},"71c1":function(t,e,n){var r=n("3a38"),o=n("25eb");t.exports=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),f=a.length;return u<0||u>=f?t?"":void 0:(i=a.charCodeAt(u),i<55296||i>56319||u+1===f||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536)}}},"774e":function(t,e,n){t.exports=n("d2d5")},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7cd6":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},"7e90":function(t,e,n){var r=n("d9f6"),o=n("e4ae"),i=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){o(t);var n,c=i(e),a=c.length,u=0;while(a>u)r.f(t,n=c[u++],e[n]);return t}},8436:function(t,e){t.exports=function(){}},"8b97":function(t,e,n){var r=n("d3f4"),o=n("cb7c"),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8f60":function(t,e,n){"use strict";var r=n("a159"),o=n("aebd"),i=n("45f2"),c={};n("35e8")(c,n("5168")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9093:function(t,e,n){var r=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},9138:function(t,e,n){t.exports=n("35e8")},"95d5":function(t,e,n){var r=n("40c3"),o=n("5168")("iterator"),i=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},"9db6":function(t,e,n){},a159:function(t,e,n){var r=n("e4ae"),o=n("7e90"),i=n("1691"),c=n("5559")("IE_PROTO"),a=function(){},u="prototype",f=function(){var t,e=n("1ec9")("iframe"),r=i.length,o="<",c=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+c+"document.F=Object"+o+"/script"+c),t.close(),f=t.F;while(r--)delete f[u][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[u]=r(t),n=new a,a[u]=null,n[c]=t):n=f(),void 0===e?n:o(n,e)}},a745:function(t,e,n){t.exports=n("f410")},aa77:function(t,e,n){var r=n("5ca1"),o=n("be13"),i=n("79e5"),c=n("fdef"),a="["+c+"]",u="​",f=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),l=function(t,e,n){var o={},a=i(function(){return!!c[t]()||u[t]()!=u}),f=o[t]=a?e(p):c[t];n&&(o[n]=f),r(r.P+r.F*a,"String",o)},p=l.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(s,"")),t};t.exports=l},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0dc:function(t,e,n){var r=n("e4ae");t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(c){var i=t["return"];throw void 0!==i&&r(i.call(t)),c}}},b447:function(t,e,n){var r=n("3a38"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},bf43:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("Фракталы")]),t._m(0),n("form",{attrs:{action:""}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.d_ungle,expression:"d_ungle"}],attrs:{placeholder:"Введите кол-во углов",type:"number",min:"3"},domProps:{value:t.d_ungle},on:{input:function(e){e.target.composing||(t.d_ungle=e.target.value)}}}),n("p",[t._v("Углы: "+t._s(t.d_ungle))])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.d_deepers,expression:"d_deepers"}],attrs:{placeholder:"Введите глубину",type:"number"},domProps:{value:t.d_deepers},on:{input:function(e){e.target.composing||(t.d_deepers=e.target.value)}}}),n("p",[t._v("Глубина: "+t._s(t.d_deepers))])]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.d_triangleColor,expression:"d_triangleColor"}],attrs:{placeholder:"Введите цвет (число)",type:"number"},domProps:{value:t.d_triangleColor},on:{input:function(e){e.target.composing||(t.d_triangleColor=e.target.value)}}}),n("p",[t._v("Цвет: "+t._s(t.d_triangleColor))])])]),n("canvas",{attrs:{id:"canvas",width:"900",height:"900"}},[t._v("Go canvas")])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("a",{attrs:{to:"/"}},[t._v("to Home page")])])}],i=(n("c5f6"),{name:"xcom",data:function(){return{d_ungle:3,d_deepers:10,d_triangleColor:0}},mounted:function(){var t,e=this,n=document.getElementById("canvas"),r=n.getContext("2d"),o=performance.now(),i=30,c=1/i,a=0;r.strokeStyle="#ffffff",r.lineWidth=2;var u=.25,f=10,s=0;function l(t,e,n){for(var r=2*Math.PI/e,o=[],i={},c=1;c<=e;c++)o.push(r*c+s);return o.forEach(function(e,r){i[r]=[t[0]+n*Math.cos(e),t[1]+n*Math.sin(e)]}),i}function p(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!(e<1)&&t[0]){for(var o in r.strokeStyle="hsl(".concat(n,", 100%, 50%)"),r.beginPath(),r.moveTo(t[0][0],t[0][1]),t)r.lineTo(t[o][0],t[o][1]);r.lineTo(t[0][0],t[0][1]),r.stroke();var i={};for(var c in t)t[Number(c)+1]?i[c]=[(1-u)*t[c][0]+u*t[Number(c)+1][0],(1-u)*t[c][1]+u*t[Number(c)+1][1]]:i[c]=[(1-u)*t[c][0]+u*t[0][0],(1-u)*t[c][1]+u*t[0][1]];p(i,e-1,n+f)}}function d(){u>1&&(u=0),u+=.006,20===f&&(f=0),f+=.1,1}p(l([650,200],5,180),12);var v=function i(){t=performance.now(),a+=(t-o)/1e3;while(a>c)a-=c,d();o=t,r.clearRect(0,0,n.width,n.height),p(l([425,200],e.d_ungle,180),e.d_deepers,e.d_triangleColor),p(l([200,650],5,180),8,180),p(l([650,650],6,180),12,270),requestAnimationFrame(i)};requestAnimationFrame(v)},updated:function(){}}),c=i,a=(n("4876"),n("2877")),u=Object(a["a"])(c,r,o,!1,null,"9dfbd762",null);e["default"]=u.exports},c014:function(t,e,n){"use strict";var r=n("667b"),o=n.n(r);o.a},c367:function(t,e,n){"use strict";var r=n("8436"),o=n("50ed"),i=n("481b"),c=n("36c3");t.exports=n("30f1")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,e,n){var r=n("e6f3"),o=n("1691");t.exports=Object.keys||function(t){return r(t,o)}},c5f6:function(t,e,n){"use strict";var r=n("7726"),o=n("69a8"),i=n("2d95"),c=n("5dbc"),a=n("6a99"),u=n("79e5"),f=n("9093").f,s=n("11e9").f,l=n("86cc").f,p=n("aa77").trim,d="Number",v=r[d],h=v,y=v.prototype,b=i(n("2aeb")(y))==d,g="trim"in String.prototype,m=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var n,r,o,i=e.charCodeAt(0);if(43===i||45===i){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var c,u=e.slice(2),f=0,s=u.length;f<s;f++)if(c=u.charCodeAt(f),c<48||c>o)return NaN;return parseInt(u,r)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(b?u(function(){y.valueOf.call(n)}):i(n)!=d)?c(new h(m(e)),n,v):m(e)};for(var x,_=n("9e1e")?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)o(h,x=_[w])&&!o(v,x)&&l(v,x,s(h,x));v.prototype=y,y.constructor=v,n("2aba")(r,d,v)}},c8bb:function(t,e,n){t.exports=n("54a1")},d2a2:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is X-com game")]),n("div",{attrs:{id:"background"}}),n("canvas",{attrs:{id:"canvas_bg",width:"1100",height:"500"}},[t._v("Go canvas")]),n("canvas",{attrs:{id:"canvas_alert",width:"1100",height:"500"}},[t._v("Go canvas")]),n("canvas",{attrs:{id:"canvas",width:"1100",height:"500"}},[t._v("Go canvas")]),n("nav",[n("a",{attrs:{to:"/"}},[t._v("to Home page")]),n("router-link",{attrs:{to:"/fractus"}},[t._v("to Frectus")]),n("router-link",{attrs:{to:"/"}},[t._v("to 2D game")])],1),t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("h2",[t._v("About the game:")]),n("p",[t._v("Interface, 2nd unit, animation, gameLoop - comming soon")])])}],i=(n("c5f6"),n("ac6a"),n("6c7b"),{name:"xcom",mounted:function(){var t=document.getElementById("canvas"),e=t.getContext("2d"),n=document.getElementById("canvas_bg"),r=n.getContext("2d"),o=document.getElementById("canvas_alert"),i=o.getContext("2d"),c=50,a=[],u={0:[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],1:[0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],2:[0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1],3:[0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1],4:[1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0],5:[1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0],6:[1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],7:[1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],8:[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],9:[1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},f=function(t){u[t].forEach(function(e,n){1===e&&a.push([Number(n),Number(t)])})};for(var s in u)f(s);var l,p={x:null,y:null},d={x:null,y:null},v={unitIsSelected:!1},h={x:18,y:7,selected:!1};function y(t){var e={x:t.x*c+c/2,y:t.y*c+c/2};r.fillStyle="#fff",r.beginPath(),r.arc(e.x,e.y,c/5,0,2*Math.PI),r.fillRect(e.x-c/3,e.y,2*c/3,2),r.fill()}function b(){var t=0,e=0;r.strokeStyle="rgba(0,0,0,.1)",r.save(),r.clearRect(0,0,n.width,n.height),r.translate(0,0);while(t<=n.width-c){while(e<=n.height-c)r.strokeRect(t,e,c,c),e+=c;r.strokeRect(t,e,c,c),e=0,t+=c}r.restore()}function g(){i.fillStyle="rgba(100,0,0,.5)",a.forEach(function(t){i.fillRect(t[0]*c,t[1]*c,c,c)}),clearTimeout(l),l=setTimeout(function(){i.clearRect(0,0,t.width,t.height)},400)}function m(){a.some(w)?e.strokeStyle="rgba(255, 0, 100, .9)":e.strokeStyle="rgba(255, 255, 255, 1)",e.lineWidth=2,e.clearRect(0,0,t.width,t.height),e.strokeRect(p.x*c,p.y*c,c,c)}function x(){d.x===p.x&&d.y===p.y||null===d.x||e.strokeRect(d.x*c,d.y*c,c,c)}function _(){if(null!==d.x&&(d.x!==p.x||d.y!==p.y)){var t=p.x-d.x,n=p.y-d.y,r={x:d.x*c+c/2,y:d.y*c+c/2};e.lineWidth=2,e.beginPath(),e.moveTo(r.x,r.y),Math.abs(t)<=Math.abs(n)?e.lineTo(r.x+t*c,r.y):e.lineTo(r.x,r.y+n*c),e.lineTo(r.x+t*c,r.y+n*c),e.stroke()}}function w(t){return t[0]===p.x&&t[1]===p.y}function S(t){p.x===h.x&&p.y===h.y&&(v.unitIsSelected=!0,h.selected=!0,d.x=~~(t.layerX/c),d.y=~~(t.layerY/c))}function O(){r.clearRect(h.x*c+2,h.y*c+2,c-4,c-4),v.unitIsSelected=!1,h.selected=!1,h.x=p.x,h.y=p.y,y(h),d={x:null,y:null}}t.onmousedown=function(t){a.some(w)?g():v.unitIsSelected?(O(),m(),x()):S(t)},t.onmousemove=function(t){var e=p.x,n=p.y;p.x=~~(t.layerX/c),p.y=~~(t.layerY/c),p.x===e&&p.y===n||(m(),x(),v.unitIsSelected&&_())},b(),y(h)}}),c=i,a=(n("c014"),n("2877")),u=Object(a["a"])(c,r,o,!1,null,"2cf3f208",null);e["default"]=u.exports},d2d5:function(t,e,n){n("1654"),n("549b"),t.exports=n("584a").Array.from},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),o=n("794b"),i=n("1bc3"),c=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var r=n("584a"),o=n("e53d"),i="__core-js_shared__",c=o[i]||(o[i]={});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var r=n("07e3"),o=n("36c3"),i=n("5b4e")(!1),c=n("5559")("IE_PROTO");t.exports=function(t,e){var n,a=o(t),u=0,f=[];for(n in a)n!=c&&r(a,n)&&f.push(n);while(e.length>u)r(a,n=e[u++])&&(~i(f,n)||f.push(n));return f}},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=about.3f5cf95d.js.map