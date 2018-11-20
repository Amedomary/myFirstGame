(function(t){function e(e){for(var o,c,i=e[0],l=e[1],u=e[2],s=0,v=[];s<i.length;s++)c=i[s],a[c]&&v.push(a[c][0]),a[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(v.length)v.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0be7589b"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=o);var r,l=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t),r=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[t]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,l.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),a=n.n(o);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c=(n("034f"),n("2877")),i={},l=Object(c["a"])(i,a,r,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{attrs:{id:"background"}}),n("canvas",{attrs:{id:"canvas",width:"1100",height:"500"}},[t._v("Go canvas")]),n("canvas",{attrs:{id:"canvas_bg",width:"1100",height:"500"}},[t._v("Go canvas")]),n("h1",{attrs:{id:"controller_amount"}},[t._v("\n    Please use keyboard or connect controller\n  ")]),n("div",{staticClass:"select-player"})])}],d=(n("ac6a"),n("456d"),n("7f7f"),{name:"home",mounted:function(){var t=[];function e(){navigator.getGamepads();for(var e=0;e<t.length;e++){for(var n=t[e].gamepad,o=0;o<n.buttons.length;o++)n.buttons[o].pressed;w.SPACE=n.buttons[0].pressed,n.axes[0]<-.2?(w.LEFT=!0,w.RIGHT=!1):n.axes[0]>.2?(w.LEFT=!1,w.RIGHT=!0):(w.LEFT=!1,w.RIGHT=!1)}}function n(t){return t.indexOf("09cc")>-1?{schema:"ps",name:"PS4 Controller",button_leave:"O",button_leave_index:0==t.indexOf("Wireless")?1:2,button_join:"X",button_join_index:0==t.indexOf("Wireless")?0:1}:{schema:"xbox",name:"XBOX Controller",button_leave:"B",button_leave_index:1,button_join:"A",button_join_index:0}}window.addEventListener("gamepadconnected",function(e){var o=navigator.getGamepads()[e.gamepad.index],a=document.createElement("div");a.classList.add("player");var r=n(o.id);t.length<4&&t.push({gamepad:o,config:r}),"ps"==r.schema&&a.classList.add("ps"),a.setAttribute("data-button-join",r.button_join),a.setAttribute("data-button-leave",r.button_leave),a.setAttribute("data-info",r.name),document.getElementsByClassName("select-player")[0].appendChild(a),document.getElementById("controller_amount").innerHTML="".concat(t.length," controller(s) is connected")||"no controller(s)"});var o,a=document.getElementById("canvas"),r=a.getContext("2d"),c=document.getElementById("canvas_bg"),i=c.getContext("2d"),l=performance.now(),u=30,s=1/u,f=0,v=10,d=60/u,h=9,p=14,m={x:100,y:100,height:50,width:25,stateIn:"air",actionIn:"stay",jumpCounter:0,vX:0,vY:0,color:"#6affcb",onPlatform:!1},b={},x={x:15*v,y:30*v,w:15*v,h:.5*v},y={x:60*v,y:20*v,w:15*v,h:.5*v},g=2;r.fillStyle="#fff",r.font="17px sans-serif",r.textAlign="right";var T=function(t){i.strokeStyle="#fff",i.fillStyle="#fff",i.lineWidth=1,i.strokeRect(-10,-10,922,600),i.fillRect(t.x,t.y,t.w,t.h)};T(x),T(y);var w={UP:!1,DOWN:!1,LEFT:!1,RIGHT:!1,SPACE:!1},_={},E=!0,I=function(t,e){switch(t){case 65:w.LEFT=e;break;case 87:w.UP=e;break;case 68:w.RIGHT=e;break;case 83:w.DOWN=e;break;case 32:w.SPACE=e;break}},P=function(t){I(t.which,!0)},j=function(t){I(t.which,!1)};document.addEventListener("keydown",P),document.addEventListener("keyup",j);var X=function(t,e,n){return t+(e-t)*n};function C(t,e){var n=e.x,o=e.x+e.w,a=e.y,r=e.y+e.h+t.height;n<t.x&&o>t.x&&a<t.y&&t.y<r&&t.vY>0?(t.y=a,t.stateIn="ground"):n<t.x&&t.x<o&&a<t.y&&t.y<r&&t.vY<0&&(t.y=a+e.h+t.height,t.vY=0)}function M(t,e){var n=t.x,o=t.x+t.w;return e.y===t.y&&n<e.x&&e.x<o}function O(t){0!==t.vX&&(t.x+=t.vX*d),"air"===t.stateIn&&(t.y+=t.vY*d)}function S(){function t(){b.x=m.x,b.y=m.y,_.SPACE=w.SPACE}M(x,m)||M(y,m)?m.onPlatform=!0:m.onPlatform=!1,_.SPACE&&!w.SPACE&&(E=!0),t(),O(m),w.LEFT&&(m.vX-=.5*d),w.RIGHT&&(m.vX+=.5*d),0!==m.vX&&(!w.RIGHT&&!w.LEFT&&0!==m.vX||w.RIGHT&&w.LEFT)&&(m.vX>0?m.vX-=.5*d:m.vX+=.5*d),"air"===m.stateIn?m.vY+=.5*d:"ground"===m.stateIn&&(m.vY=0),w.SPACE&&("ground"===m.stateIn&&E&&(m.vY=-10,m.y-=1),"air"===m.stateIn&&!E&&m.vY<0&&(m.vY-=.2*d),"air"===m.stateIn&&m.jumpCounter<=g&&E&&(m.vY=-10,m.jumpCounter+=1,E=!1)),0!==m.vY&&(m.width=25-Math.abs(m.vY)/3),0!==m.vX&&(m.height=50-Math.abs(m.vX)/3),m.y<460&&!m.onPlatform?m.stateIn="air":(m.stateIn="ground",m.width=25,m.jumpCounter=0),0!==m.vX?m.actionIn="run":0===m.vX&&(m.actionIn="stay",m.height=50),C(m,x),C(m,y),m.y>460&&(m.y=460),m.y<40&&(m.y=40),m.x>900&&(m.x=900,m.vX=0),m.x<15&&(m.x=15,m.vX=0),m.vX>h&&(m.vX=h),m.vX<-h&&(m.vX=-h),m.vY>p&&(m.vY=p),m.vY<-p&&(m.vY=-p)}function A(t){var e=X(b.y,m.y,t),n=X(b.x,m.x,t);r.clearRect(0,0,a.width,a.height),r.save(),r.translate(n,e),r.translate(-m.width/2,-m.height),r.fillStyle=m.color,r.fillRect(0,0,m.width,m.height),r.restore()}for(var Y=Object.keys(m),k=[],L=20,G=0;G<Y.length;G++)k.push(L+21),L+=21;function R(){r.fillText("".concat(Y[0]," = ").concat(Math.floor(m[Y[0]])),1090,k[0]),r.fillText("".concat(Y[1]," = ").concat(Math.floor(m[Y[1]])),1090,k[1]),r.fillText("".concat(Y[2]," = ").concat(Math.floor(m[Y[2]])),1090,k[2]),r.fillText("".concat(Y[3]," = ").concat(Math.floor(m[Y[3]])),1090,k[3]),r.fillText("".concat(Y[4]," = ").concat(m[Y[4]]),1090,k[4]),r.fillText("".concat(Y[5]," = ").concat(m[Y[5]]),1090,k[5]),r.fillText("".concat(Y[6]," = ").concat(m[Y[6]]),1090,k[6]),r.fillText("".concat(Y[7]," = ").concat(Math.floor(m[Y[7]])),1090,k[7]),r.fillText("".concat(Y[8]," = ").concat(Math.floor(m[Y[8]])),1090,k[8]),r.fillText("".concat(Y[9]," = ").concat(Math.floor(m[Y[9]])),1090,k[9]),r.fillText("".concat(Y[10]," = ").concat(Math.floor(m[Y[10]])),1090,k[10]),r.fillText("".concat(Y[11]," = ").concat(Math.floor(m[Y[11]])),1090,k[11]),r.fillText("".concat(Y[12]," = ").concat(Math.floor(m[Y[12]])),1090,k[12]),r.fillText("".concat(Y[13]," = ").concat(Math.floor(m[Y[13]])),1090,k[13]),r.fillText("".concat(Y[14]," = ").concat(Math.floor(m[Y[14]])),1090,k[14]),r.fillText("".concat(Y[15]," = ").concat(Math.floor(m[Y[15]])),1090,k[15])}var F=function t(){o=performance.now(),f+=(o-l)/1e3;while(f>s)f-=s,e(),S();l=o,A(f*u),R(),requestAnimationFrame(t)};requestAnimationFrame(F)}}),h=d,p=(n("cccb"),Object(c["a"])(h,f,v,!1,null,null,null));p.options.__file="Home.vue";var m=p.exports;o["a"].use(s["a"]);var b=new s["a"]({routes:[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),x=n("2f62");o["a"].use(x["a"]);var y=new x["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:b,store:y,render:function(t){return t(u)}}).$mount("#app")},"8f59":function(t,e,n){},c21b:function(t,e,n){},cccb:function(t,e,n){"use strict";var o=n("8f59"),a=n.n(o);a.a}});
//# sourceMappingURL=app.2cd2b06c.js.map