(self.webpackChunkRegisterApp=self.webpackChunkRegisterApp||[]).push([[8592],{8225:(t,e,n)=>{"use strict";n.d(e,{c:()=>s});var i=n(3150),o=n(2954),r=n(9461);const s=(t,e)=>{let n,s;const c=(t,i,o)=>{if("undefined"==typeof document)return;const r=document.elementFromPoint(t,i);r&&e(r)?r!==n&&(l(),a(r,o)):l()},a=(t,e)=>{n=t,s||(s=n);const o=n;(0,i.c)(()=>o.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;(0,i.c)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return(0,r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,o.a),onMove:t=>c(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),(0,o.h)(),s=void 0}})}},7330:(t,e,n)=>{"use strict";n.d(e,{a:()=>o,d:()=>r});var i=n(2377);const o=async(t,e,n,o,r)=>{if(t)return t.attachViewToDom(e,n,r,o);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return o&&o.forEach(t=>s.classList.add(t)),r&&Object.assign(s,r),e.appendChild(s),await new Promise(t=>(0,i.c)(s,t)),s},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},2954:(t,e,n)=>{"use strict";n.d(e,{a:()=>r,b:()=>s,c:()=>o,d:()=>a,h:()=>c});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=()=>{i.selection()},r=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=t=>{i.impact(t)}},6575:(t,e,n)=>{"use strict";n.d(e,{s:()=>i});const i=t=>{try{if(t instanceof class{constructor(t){this.value=t}})return t.value;if(!s()||"string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=r(t);for(let e=0;e<s.length;e++)o(s[e])}});const i=r(e);for(let t=0;t<i.length;t++)o(i[t]);const c=document.createElement("div");c.appendChild(e);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!c.includes(i.toLowerCase())){t.removeAttribute(i);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=r(t);for(let n=0;n<e.length;n++)o(e[n])},r=t=>null!=t.children?t.children:t.childNodes,s=()=>{const t=window,e=t&&t.Ionic&&t.Ionic.config;return!e||(e.get?e.get("sanitizerEnabled",!0):!0===e.sanitizerEnabled||void 0===e.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},408:(t,e,n)=>{"use strict";n.d(e,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},1269:(t,e,n)=>{"use strict";n.d(e,{c:()=>o,g:()=>r,h:()=>i,o:()=>c});const i=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,r=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,n,i)}return!1}},3646:(t,e,n)=>{"use strict";n.d(e,{G:()=>r});var i=n(639),o=n(3083);let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:4,vars:1,consts:[[1,"ion-no-border"],[1,"ion-text-left"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-header",0),i.TgZ(1,"ion-toolbar"),i.TgZ(2,"ion-title",1),i._uU(3),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.hij(" ",e.titulo," "))},directives:[o.Gu,o.sr,o.wd],styles:["ion-title[_ngcontent-%COMP%]{font-family:Inter-SemiBold;font-size:40px;text-transform:capitalize;padding-left:10px}ion-header[_ngcontent-%COMP%]{padding-top:15%}"]}),t})()},6934:(t,e,n)=>{"use strict";n.d(e,{N:()=>r});var i=n(639),o=n(3083);let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-login-header"]],inputs:{tituloLogin:"tituloLogin",tituloLogin2:"tituloLogin2",subtituloLogin:"subtituloLogin",subtituloLogin2:"subtituloLogin2"},decls:11,vars:4,consts:[[1,"ion-text-center"]],template:function(t,e){1&t&&(i.TgZ(0,"ion-card-title",0),i.TgZ(1,"ion-label"),i.TgZ(2,"h1"),i._uU(3),i._UZ(4,"br"),i._uU(5),i.qZA(),i._UZ(6,"br"),i.TgZ(7,"p"),i._uU(8),i._UZ(9,"br"),i._uU(10),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(3),i.Oqu(e.tituloLogin),i.xp6(2),i.Oqu(e.tituloLogin2),i.xp6(3),i.Oqu(e.subtituloLogin),i.xp6(2),i.Oqu(e.subtituloLogin2))},directives:[o.gZ,o.Q$],styles:["h1[_ngcontent-%COMP%]{font-family:Inter-SemiBold;font-size:35px;color:#2083f8}ion-input[_ngcontent-%COMP%], ion-label[_ngcontent-%COMP%]{font-family:Montserrat-Medium}ion-button[_ngcontent-%COMP%]{font-family:Montserrat-SemiBold}"]}),t})()},68:(t,e,n)=>{"use strict";n.d(e,{I:()=>o});class i{constructor(t,e){this.id=t,this.nombre=e}}class o{constructor(){this.nombre="",this.apellido="",this.sede="",this.carrera="",this.nivelEducacional=new i(0,""),this.fecNacimiento=""}}},4762:(t,e,n)=>{"use strict";function i(t,e,n,i){return new(n||(n=Promise))(function(o,r){function s(t){try{a(i.next(t))}catch(e){r(e)}}function c(t){try{a(i.throw(t))}catch(e){r(e)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,c)}a((i=i.apply(t,e||[])).next())})}n.d(e,{mG:()=>i})}}]);