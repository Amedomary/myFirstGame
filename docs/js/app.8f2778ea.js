(function(e){function t(t){for(var o,c,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)c=i[l],a[c]&&d.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0be7589b"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e),r=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:u})},12e4);u.onerror=u.onload=r,s.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("c21b"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c=(n("034f"),n("2877")),i={},s=Object(c["a"])(i,a,r,!1,null,null,null);s.options.__file="App.vue";var u=s.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{attrs:{id:"background"}}),n("canvas",{attrs:{id:"canvas",width:"1100",height:"500"}},[e._v("Go canvas")]),n("canvas",{attrs:{id:"canvas_2",width:"1100",height:"500"}},[e._v("Go canvas")])])}],p=(n("ac6a"),n("456d"),{name:"home",mounted:function(){var e,t=document.getElementById("canvas"),n=t.getContext("2d"),o=document.getElementById("canvas_2"),a=o.getContext("2d"),r=performance.now(),c=1/60,i=0,s=10,u=60*c,l={x:100,y:100,height:50,width:25,stateIn:"air",actionIn:"stay",jumpCounter:0,speedX:0,speedY:0,aX:0,aY:0,color:"#6affcb"},f=2;n.fillStyle="#fff",n.font="17px sans-serif",n.textAlign="right",a.strokeStyle="#fff",a.lineWidth=1,a.strokeRect(-10,-10,922,600);var d={UP:!1,DOWN:!1,LEFT:!1,RIGHT:!1,SPACE:!1},p=function(e,t){switch(e){case 65:d.LEFT=t;break;case 87:d.UP=t;break;case 68:d.RIGHT=t;break;case 83:d.DOWN=t;break;case 32:d.SPACE=t;break}},h=function(e){p(e.which,!0)},v=function(e){p(e.which,!1)},m=!0,b=function(){m=!0};function y(){d.LEFT&&(l.speedX-=1),d.RIGHT&&(l.speedX+=1),d.ROTATE&&(l.y-=s),0!==l.speedX&&(l.x+=l.speedX,(!d.RIGHT&&!d.LEFT&&0!==l.speedX||d.RIGHT&&d.LEFT)&&(l.speedX>0?l.speedX-=.5*u:l.speedX+=.5*u)),"air"===l.stateIn?(l.speedY+=.5*u,l.y+=l.speedY):"ground"===l.stateIn&&(l.speedY=0),d.SPACE&&("ground"===l.stateIn&&m&&(l.speedY=-10,l.y-=1),"air"===l.stateIn&&!m&&l.speedY<0&&(l.speedY-=.2),"air"===l.stateIn&&l.jumpCounter<=f&&m&&(l.speedY=-10,l.jumpCounter+=1,m=!1)),0!==l.speedY&&(l.width=25-Math.abs(l.speedY)/3),0!==l.speedX&&(l.height=50-Math.abs(l.speedX)/3),l.y<460?l.stateIn="air":(l.y=460)&&(l.stateIn="ground",l.width=25,l.jumpCounter=0),0!==l.speedX?l.actionIn="run":0===l.speedX&&(l.actionIn="stay",l.height=50),l.y>460&&(l.y=460),l.y<40&&(l.y=40),l.x>900&&(l.x=900,l.speedX=0),l.x<15&&(l.x=15,l.speedX=0),l.speedX>12&&(l.speedX=12),l.speedX<-12&&(l.speedX=-12),l.speedY>20&&(l.speedY=20),l.speedY<-20&&(l.speedY=-20)}function g(){n.clearRect(0,0,t.width,t.height),n.save(),n.translate(l.x,l.y),n.translate(-l.width/2,-l.height),n.fillStyle=l.color,n.fillRect(0,0,l.width,l.height),n.restore()}document.onkeyup=function(e){switch(e.keyCode){case 32:b();break}},document.addEventListener("keydown",h),document.addEventListener("keyup",v);for(var x=Object.keys(l),T=[],w=20,_=0;_<x.length;_++)T.push(w+21),w+=21;function X(){n.fillText("".concat(x[0]," = ").concat(Math.floor(l[x[0]])),1090,T[0]),n.fillText("".concat(x[1]," = ").concat(Math.floor(l[x[1]])),1090,T[1]),n.fillText("".concat(x[2]," = ").concat(Math.floor(l[x[2]])),1090,T[2]),n.fillText("".concat(x[3]," = ").concat(Math.floor(l[x[3]])),1090,T[3]),n.fillText("".concat(x[4]," = ").concat(l[x[4]]),1090,T[4]),n.fillText("".concat(x[5]," = ").concat(l[x[5]]),1090,T[5]),n.fillText("".concat(x[6]," = ").concat(l[x[6]]),1090,T[6]),n.fillText("".concat(x[7]," = ").concat(Math.floor(l[x[7]])),1090,T[7]),n.fillText("".concat(x[8]," = ").concat(Math.floor(l[x[8]])),1090,T[8]),n.fillText("".concat(x[9]," = ").concat(Math.floor(l[x[9]])),1090,T[9]),n.fillText("".concat(x[10]," = ").concat(Math.floor(l[x[10]])),1090,T[10]),n.fillText("".concat(x[11]," = ").concat(Math.floor(l[x[11]])),1090,T[11]),n.fillText("".concat(x[12]," = ").concat(Math.floor(l[x[12]])),1090,T[12]),n.fillText("".concat(x[13]," = ").concat(Math.floor(l[x[13]])),1090,T[13]),n.fillText("".concat(x[14]," = ").concat(Math.floor(l[x[14]])),1090,T[14]),n.fillText("".concat(x[15]," = ").concat(Math.floor(l[x[15]])),1090,T[15])}var E=function t(){e=performance.now(),i+=(e-r)/1e3;while(i>c)i-=c,y();r=e,g(),X(),requestAnimationFrame(t)};requestAnimationFrame(E)}}),h=p,v=(n("cccb"),Object(c["a"])(h,f,d,!1,null,null,null));v.options.__file="Home.vue";var m=v.exports;o["a"].use(l["a"]);var b=new l["a"]({routes:[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),y=n("2f62");o["a"].use(y["a"]);var g=new y["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:b,store:g,render:function(e){return e(u)}}).$mount("#app")},"8f59":function(e,t,n){},c21b:function(e,t,n){},cccb:function(e,t,n){"use strict";var o=n("8f59"),a=n.n(o);a.a}});
//# sourceMappingURL=app.8f2778ea.js.map