(function(t){function e(e){for(var o,a,i=e[0],u=e[1],l=e[2],s=0,f=[];s<i.length;s++)a=i[s],r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},a={app:0},r={app:0},c=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fb8bf924"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"0581cecb"}[t]+".css",r=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===r))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===o||s===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.request=o,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(d)}).then(function(){a[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t),l=function(e){s.onerror=s.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}r[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},4948:function(t,e,n){"use strict";var o=n("7cff"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c=(n("034f"),n("2877")),i={},u=Object(c["a"])(i,a,r,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{attrs:{id:"background"}}),n("canvas",{attrs:{id:"canvas",width:"1100",height:"500"}},[t._v("Go canvas")]),n("canvas",{attrs:{id:"canvas_bg",width:"1100",height:"500"}},[t._v("Go canvas")]),n("nav",[n("ul",[n("li",[n("router-link",{attrs:{to:"/fractus"}},[t._v("Перейти к frectus")]),n("router-link",{attrs:{to:"/sort"}},[t._v("Перейти к sort")]),n("router-link",{attrs:{to:"/xcom"}},[t._v("Перейти к xcom")])],1)])]),n("h1",{attrs:{id:"controller_amount"}},[t._v("\n    Please use keyboard or connect controller\n  ")]),n("div",{staticClass:"select-player"})])},d=[],v=n("a4bb"),h=n.n(v),p=(n("7f7f"),{name:"home",mounted:function(){var t=[];function e(){navigator.getGamepads();for(var e=0;e<t.length;e++){for(var n=t[e].gamepad,o=0;o<n.buttons.length;o++)n.buttons[o].pressed;_.SPACE=n.buttons[0].pressed,n.axes[0]<-.2?(_.LEFT=!0,_.RIGHT=!1):n.axes[0]>.2?(_.LEFT=!1,_.RIGHT=!0):(_.LEFT=!1,_.RIGHT=!1)}}function n(t){return t.indexOf("09cc")>-1?{schema:"ps",name:"PS4 Controller",button_leave:"O",button_leave_index:0==t.indexOf("Wireless")?1:2,button_join:"X",button_join_index:0==t.indexOf("Wireless")?0:1}:{schema:"xbox",name:"XBOX Controller",button_leave:"B",button_leave_index:1,button_join:"A",button_join_index:0}}window.addEventListener("gamepadconnected",function(e){var o=navigator.getGamepads()[e.gamepad.index],a=document.createElement("div");a.classList.add("player");var r=n(o.id);t.length<4&&t.push({gamepad:o,config:r}),"ps"==r.schema&&a.classList.add("ps"),a.setAttribute("data-button-join",r.button_join),a.setAttribute("data-button-leave",r.button_leave),a.setAttribute("data-info",r.name),document.getElementsByClassName("select-player")[0].appendChild(a),document.getElementById("controller_amount").innerHTML="".concat(t.length," controller(s) is connected")||!1});var o,a=document.getElementById("canvas"),r=a.getContext("2d"),c=document.getElementById("canvas_bg"),i=c.getContext("2d"),u=performance.now(),l=30,s=1/l,f=0,d=10,v=60/l,p=9,m=14,b={x:100,y:100,height:50,width:25,stateIn:"air",actionIn:"stay",jumpCounter:0,vX:0,vY:0,color:"#6affcb",onPlatform:!1},g={},x={x:15*d,y:30*d,w:15*d,h:.5*d},y={x:60*d,y:20*d,w:15*d,h:.5*d},T=2;r.fillStyle="#fff",r.font="17px sans-serif",r.textAlign="right";var w=function(t){i.strokeStyle="#fff",i.fillStyle="#fff",i.lineWidth=1,i.strokeRect(-10,-10,922,600),i.fillRect(t.x,t.y,t.w,t.h)};w(x),w(y);var _={UP:!1,DOWN:!1,LEFT:!1,RIGHT:!1,SPACE:!1},E={},P=!0,I=function(t,e){switch(t){case 65:_.LEFT=e;break;case 87:_.UP=e;break;case 68:_.RIGHT=e;break;case 83:_.DOWN=e;break;case 32:_.SPACE=e;break}},C=function(t){I(t.which,!0)},X=function(t){I(t.which,!1)};document.addEventListener("keydown",C),document.addEventListener("keyup",X);var j=function(t,e,n){return t+(e-t)*n};function k(t,e){var n=e.x,o=e.x+e.w,a=e.y,r=e.y+e.h+t.height;n<t.x&&o>t.x&&a<t.y&&t.y<r&&t.vY>0?(t.y=a,t.stateIn="ground"):n<t.x&&t.x<o&&a<t.y&&t.y<r&&t.vY<0&&(t.y=a+e.h+t.height,t.vY=0)}function S(t,e){var n=t.x,o=t.x+t.w;return e.y===t.y&&n<e.x&&e.x<o}function A(t){0!==t.vX&&(t.x+=t.vX*v),"air"===t.stateIn&&(t.y+=t.vY*v)}function M(){function t(){g.x=b.x,g.y=b.y,E.SPACE=_.SPACE}S(x,b)||S(y,b)?b.onPlatform=!0:b.onPlatform=!1,E.SPACE&&!_.SPACE&&(P=!0),t(),A(b),_.LEFT&&(b.vX-=.5*v),_.RIGHT&&(b.vX+=.5*v),0!==b.vX&&(!_.RIGHT&&!_.LEFT&&0!==b.vX||_.RIGHT&&_.LEFT)&&(b.vX>0?b.vX-=.5*v:b.vX+=.5*v),"air"===b.stateIn?b.vY+=.5*v:"ground"===b.stateIn&&(b.vY=0),_.SPACE&&("ground"===b.stateIn&&P&&(b.vY=-10,b.y-=1),"air"===b.stateIn&&!P&&b.vY<0&&(b.vY-=.2*v),"air"===b.stateIn&&b.jumpCounter<=T&&P&&(b.vY=-10,b.jumpCounter+=1,P=!1)),0!==b.vY&&(b.width=25-Math.abs(b.vY)/3),0!==b.vX&&(b.height=50-Math.abs(b.vX)/3),b.y<460&&!b.onPlatform?b.stateIn="air":(b.stateIn="ground",b.width=25,b.jumpCounter=0),0!==b.vX?b.actionIn="run":0===b.vX&&(b.actionIn="stay",b.height=50),k(b,x),k(b,y),b.y>460&&(b.y=460),b.y<40&&(b.y=40),b.x>900&&(b.x=900,b.vX=0),b.x<15&&(b.x=15,b.vX=0),b.vX>p&&(b.vX=p),b.vX<-p&&(b.vX=-p),b.vY>m&&(b.vY=m),b.vY<-m&&(b.vY=-m)}function O(t){var e=j(g.y,b.y,t),n=j(g.x,b.x,t);r.clearRect(0,0,a.width,a.height),r.save(),r.translate(n,e),r.translate(-b.width/2,-b.height),r.fillStyle=b.color,r.fillRect(0,0,b.width,b.height),r.restore()}for(var Y=h()(b),L=[],G=20,R=0;R<Y.length;R++)L.push(G+21),G+=21;function F(){r.fillText("".concat(Y[0]," = ").concat(Math.floor(b[Y[0]])),1090,L[0]),r.fillText("".concat(Y[1]," = ").concat(Math.floor(b[Y[1]])),1090,L[1]),r.fillText("".concat(Y[2]," = ").concat(Math.floor(b[Y[2]])),1090,L[2]),r.fillText("".concat(Y[3]," = ").concat(Math.floor(b[Y[3]])),1090,L[3]),r.fillText("".concat(Y[4]," = ").concat(b[Y[4]]),1090,L[4]),r.fillText("".concat(Y[5]," = ").concat(b[Y[5]]),1090,L[5]),r.fillText("".concat(Y[6]," = ").concat(b[Y[6]]),1090,L[6]),r.fillText("".concat(Y[7]," = ").concat(Math.floor(b[Y[7]])),1090,L[7]),r.fillText("".concat(Y[8]," = ").concat(Math.floor(b[Y[8]])),1090,L[8]),r.fillText("".concat(Y[9]," = ").concat(Math.floor(b[Y[9]])),1090,L[9]),r.fillText("".concat(Y[10]," = ").concat(Math.floor(b[Y[10]])),1090,L[10]),r.fillText("".concat(Y[11]," = ").concat(Math.floor(b[Y[11]])),1090,L[11]),r.fillText("".concat(Y[12]," = ").concat(Math.floor(b[Y[12]])),1090,L[12]),r.fillText("".concat(Y[13]," = ").concat(Math.floor(b[Y[13]])),1090,L[13]),r.fillText("".concat(Y[14]," = ").concat(Math.floor(b[Y[14]])),1090,L[14]),r.fillText("".concat(Y[15]," = ").concat(Math.floor(b[Y[15]])),1090,L[15])}var H=function t(){o=performance.now(),f+=(o-u)/1e3;while(f>s)f-=s,e(),M();u=o,O(f*l),F(),requestAnimationFrame(t)};requestAnimationFrame(H)}}),m=p,b=(n("4948"),Object(c["a"])(m,f,d,!1,null,"32c5423a",null));b.options.__file="Home.vue";var g=b.exports;o["a"].use(s["a"]);var x=new s["a"]({routes:[{path:"/",name:"home",component:g},{path:"/sort",name:"sort",component:function(){return n.e("about").then(n.bind(null,"66a7"))}},{path:"/xcom",name:"xcom",component:function(){return n.e("about").then(n.bind(null,"d2a2"))}},{path:"/fractus",name:"fractus",component:function(){return n.e("about").then(n.bind(null,"bf43"))}}]}),y=n("2f62");o["a"].use(y["a"]);var T=new y["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:x,store:T,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"7cff":function(t,e,n){}});
//# sourceMappingURL=app.d23b210d.js.map