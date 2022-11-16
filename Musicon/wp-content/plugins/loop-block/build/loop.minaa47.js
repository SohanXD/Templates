!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).BezierEasing=e()}((function(){return function e(t,n,i){function o(a,l){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!l&&s)return s(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return o(t[a][1][e]||e)}),d,d.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){var i="function"==typeof Float32Array;function o(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function a(e){return 3*e}function l(e,t,n){return((o(t,n)*e+r(t,n))*e+a(t))*e}function s(e,t,n){return 3*o(t,n)*e*e+2*r(t,n)*e+a(t)}function u(e){return e}t.exports=function(e,t,n,o){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===o)return u;for(var r=i?new Float32Array(11):new Array(11),a=0;a<11;++a)r[a]=l(.1*a,e,n);return function(i){return 0===i?0:1===i?1:l(function(t){for(var i=0,o=1;10!==o&&r[o]<=t;++o)i+=.1;var a=i+(t-r[--o])/(r[o+1]-r[o])*.1,u=s(a,e,n);return.001<=u?function(e,t,n,i){for(var o=0;o<4;++o){var r=s(t,n,i);if(0===r)return t;t-=(l(t,n,i)-e)/r}return t}(t,a,e,n):0===u?a:function(e,t,n,i,o){for(var r,a,s=0;0<(r=l(a=t+(n-t)/2,i,o)-e)?n=a:t=a,Math.abs(r)>1e-7&&++s<10;);return a}(t,i,i+.1,e,n)}(i),t,o)}}},{}]},{},[1])(1)})),function(){"use strict";function debounce(e,t,n){var i,o;return function(){var r,a,l=this,s=arguments;return r=function(){i=null,n||(o=e.apply(l,s))},a=n&&!i,clearTimeout(i),i=setTimeout(r,t),a&&(o=e.apply(l,s)),o}}function throttle(e,t){var n,i,o,r,a,l;return a=0,l=function(){a=new Date,o=null,r=e.apply(n,i)},function(){var s=new Date,u=t-(s-a);return n=this,i=arguments,u<=0?(clearTimeout(o),o=null,a=s,r=e.apply(n,i)):o||(o=setTimeout(l,u)),r}}function plugin(){for(var str_plugin="data-plugin",str_option="data-option",els=document.querySelectorAll('[data-plugin],[class^="plugin-"],[class*=" plugin-"]'),el,options,plugin,i=0;i<els.length;i++){if(el=els[i],el.className.indexOf("plug-initialized")>-1)return;plugin=el.getAttribute(str_plugin)||el.className.match(/(?:^|\s)plugin-(.*?)(?:$|\s)/)[1],options=el.getAttribute(str_option)||"{}",options=eval("("+options+")");for(var klass=el.className,reg=/data-([^-]+)-([^\s]+)/g,result;null!==(result=reg.exec(klass));)options[result[1]]=result[2];for(var d in el.dataset)if(d.indexOf(plugin)>-1){var attr=d.replace(plugin,"").toLowerCase();""!==attr&&(options[attr]=el.dataset[d])}el.removeAttribute(str_plugin),el.removeAttribute(str_option),el.className+=" plug-initialized",options.child&&(el=el.children[0]),el[plugin]&&options?el[plugin].apply(el,options):window[plugin]&&window[plugin].call&&window[plugin].call(self,el,options)}}function init(){location.href.indexOf("dir=rtl")>-1&&document.body.classList.add("rtl"),plugin()}window.slider=function(e,t){e=e;var n,i,o,r,a,l="rtl"==getComputedStyle(e).direction,s=0!=t.arrows,u=!!t.dots,d=t.slides,c=!!t.autoplay,f=t.autoplaySpeed||2e3,p=!!t.loop,v=parseInt(getComputedStyle(e).gridColumnGap,10)||20,g=(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent),t.l_c||"slider-left-btn"),m=t.r_c||"slider-right-btn",h=t.l_svg||'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',y=t.r_svg||'<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',w="block-slider-scrolling";function b(){var t=x(),n="";if(i&&!(t<2)){for(var o=0;o<t;o++)n+='<button data-index="'+o+'"></button>';i.innerHTML=n,i.addEventListener("click",(function(t){E();var n=t.target;C((e.offsetWidth+v)*n.dataset.index*(l?-1:1))}))}}function L(){!0===t.autoplay&&0!=c&&(c=!0,a=setInterval(throttle(N,30),f))}function E(){c=!1,a&&clearInterval(a)}function N(){var t=e.scrollWidth,n=d||1,i=e.children[0].offsetWidth+v,o=e.scrollLeft+i*n*(l?-1:1);o+e.offsetWidth>t&&(p?o=0:E()),c&&C(o),k()}function x(){return Math.round(e.scrollWidth/e.offsetWidth)}function k(){for(var t=x(),n=e.children,a=e.scrollLeft,d=a+e.offsetWidth,c=e.scrollWidth,f=Math.round((c-a)/e.offsetWidth),p=0;p<n.length;p++){var v=n[p],g=v.offsetLeft,m=g+v.offsetWidth;if(d-4<g||a+4>m){var h=new RegExp("(\\s|^)slider-active(\\s|$)");n[p].className=n[p].className.replace(h,"")}else-1==n[p].className.indexOf("slider-active")&&(n[p].className+=" slider-active")}if(s&&(o.style.display=o&&a*(l?-1:1)<8?"none":"",r&&c-a*(l?-1:1)<e.offsetWidth+8?r.style.display="none":r.style.display=""),u){var y=i.querySelector('[data-index="'+(t-f)*(l?-1:1)+'"]'),w=i.getElementsByTagName("button");for(p=0;p<w.length;p++)w[p].className="";y&&(y.className="active")}}function C(t){if(!e.classList.contains(w)){var n=e.scrollLeft;!function(e,t,n,i,o,r,a){var l=[.425,.005,0,1];l=BezierEasing(l[0],l[1],l[2],l[3]);const s=o=>{e[t]=n+(i-n)*o},u=Date.now(),d=()=>{var e=(Date.now()-u)/o;e>1?(s(1),a&&a()):(requestAnimationFrame(d),s(l(e)))};r&&r();d()}(e,"scrollLeft",n,t,1500,(function(){e.classList.add(w)}),(function(){e.classList.remove(w)}))}}e.className+=" block-loop-slider",s&&((n=document.createElement("div")).className="block-loop-nav",e.parentNode.appendChild(n),function(){x();var t="";t='<button class="'+g+'">'+h+'</button><span></span><button class="'+m+'">'+y+"</button>",n.innerHTML=t,o=n.getElementsByClassName(g)[0],r=n.getElementsByClassName(m)[0],n.addEventListener("click",(function(t){E();var n=t.target,i=d?d*(e.children[0].offsetWidth+v):e.offsetWidth+v,o=n.className.indexOf(g)>-1?-1:1;C(e.scrollLeft+i*o*(l?-1:1))}))}()),u&&((i=document.createElement("div")).className="block-loop-dot",e.parentNode.appendChild(i),b()),c&&L(),k(),e.addEventListener("ontouchstart"in window?"touchstart":"mouseenter",(function(){c=!1,a&&clearInterval(a)})),e.addEventListener("ontouchstart"in window?"touchend":"mouseleave",L),e.addEventListener("scroll",debounce(k,25)),window.addEventListener("resize",debounce((function(){b(),k()}),25))},window.scroller=function(e,t){t=t||{};var n=(e=e).getElementsByClassName("scroller")[0],i=0!=t.autoTrigger,o=t.autoTriggerUntil||10,r=0,a=t.loadingHtml||'<span class="spinner"></span><span class="screen-reader-text"></span>';function l(t){if(t&&t.preventDefault(),!(n.className.indexOf("is-loading")>-1)){n.innerHTML=a,n.className+=" is-loading";var i=n.href,o=new XMLHttpRequest;o.responseType="json",o.onreadystatechange=function(){if(4==o.readyState&&200==o.status){n.className="",n.removeEventListener("click",l),e.removeChild(n);var t,i=document.createElement("div");for(i.innerHTML=o.response.content;t=i.firstChild;)e.appendChild(t);(n=e.getElementsByClassName("scroller")[0])&&n.addEventListener("click",l,!1),document.dispatchEvent(new Event("refresh")),r++}},o.open("GET",i,!0),"undefined"!=typeof play&&void 0!==play.nonce&&o.setRequestHeader("X-WP-Nonce",play.nonce),o.send()}}n&&(window.addEventListener("scroll",debounce((function(){if(!n)return;var e=window.pageYOffset,t=e+window.innerHeight,a=n.getBoundingClientRect().top+e,s=a+n.offsetHeight;t>=a&&e<s&&i&&r<o&&l()}),25),!1),n.addEventListener("click",l,!1))},window.range=function(e){var t=e.getAttribute("value"),n=null===t?[]:t.split(","),i=+(e.min||0),o=+(e.max||100),r=document.createElement("span"),a=document.createElement("span"),l=e.cloneNode();e.classList.add("multirange"),e.classList.add("original"),l.classList.add("multirange"),l.classList.add("ghost"),r.classList.add("range-min"),a.classList.add("range-max"),e.value=n[0]||i+(o-i)/2,l.value=n[1]||i+(o-i)/2,e.parentNode.insertBefore(l,e.nextSibling),e.parentNode.insertBefore(r,e.previousSibling),e.parentNode.insertBefore(a,e.previousSibling);var s=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");function u(t){var n=(e.valueLow-i)/(o-i)*100,s=(e.valueHigh-i)/(o-i)*100;l.style.setProperty("--low",n+"%"),l.style.setProperty("--high",s+"%"),r&&(r.innerHTML=e.valueLow,r.style.setProperty("--left",n)),a&&(a.innerHTML=e.valueHigh,a.style.setProperty("--left",s)),1!==t&&(clearTimeout(d),d=setTimeout((function(){var t=e.getAttribute("data-url"),n=e.getAttribute("name"),i=new RegExp(n+"__(\\d+)-(\\d+)[%2C]*[(\\d+)\\-(\\d+)]*");t=t.replace(i,n+"__"+e.valueLow+"-"+e.valueHigh),document.dispatchEvent(new CustomEvent("reload",{detail:{url:t}}))}),1e3))}Object.defineProperty(e,"originalValue",s.get?s:{get:function(){return this.value},set:function(e){this.value=e}}),Object.defineProperties(e,{valueLow:{get:function(){return Math.min(this.originalValue,l.value)},set:function(e){this.originalValue=e,u()},enumerable:!0},valueHigh:{get:function(){return Math.max(this.originalValue,l.value)},set:function(e){l.value=e,u()},enumerable:!0}}),s.get&&Object.defineProperty(e,"value",{get:function(){return this.valueLow+","+this.valueHigh},set:function(e){var t=e.split(",");this.valueLow=t[0],this.valueHigh=t[1],u()},enumerable:!0}),"function"==typeof e.oninput&&(l.oninput=e.oninput.bind(e)),l.addEventListener("mousedown",(function(t){var n=i+(o-i)*t.offsetX/this.offsetWidth,r=(e.valueHigh+e.valueLow)/2;e.valueLow==l.value==n>r&&(e.value=l.value)})),e.addEventListener("input",u),l.addEventListener("input",u);var d=null;u(1)},window.moreless=function(e,t){if(e.className+=" moreless",e.scrollHeight>e.clientHeight){var n=document.createElement("button"),i=e.innerHTML,o=e.getAttribute("title"),r=e.getAttribute("type"),a=e.getAttribute("more"),l=e.getAttribute("less");n.className="btn-moreless",n.innerHTML="<span>"+a+"</span><span>"+l+"</span>",e.appendChild(n),n.addEventListener("click",(function(t){"expand"==r&&e.classList.toggle("show"),"modal"==r&&modal(o,i)}))}},window.modal=function(e,t){var n='<div class="modal-backdrop"></div><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><div class="modal-title"><h2>'+e+'</h2></div><button class="close" data-dismiss="modal">&times;</button></div><div class="modal-body">'+t+"</div></div></div>",i=document.createElement("div");i.className="modal",i.style.display="block",i.innerHTML=n,document.body.appendChild(i);var o=i.getElementsByClassName("modal-header")[0],r=i.getElementsByClassName("modal-backdrop")[0],a=o.getElementsByClassName("close")[0];document.body.classList.toggle("modal-open"),a.addEventListener("click",(function(e){i.remove(),document.body.classList.toggle("modal-open")})),r.addEventListener("click",(function(e){i.remove(),document.body.classList.toggle("modal-open")}))},window.addEventListener("pjax:complete",(function(){init()})),init()}();