(window.webpackJsonp=window.webpackJsonp||[]).push([[15,58],{466:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],a=[];function u(n,t,e){n.addEventListener(t,e,!1)}function c(n,t,e){n.removeEventListener(t,e,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var n=document.createElement("div").style;function t(t,e){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];for(var i in o)if(i in n){e.push(o[i]);break}}}"AnimationEvent"in window||(delete r.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete r.transitionstart.transition,delete o.transitionend.transition),t(r,i),t(o,a)}();var s={startEvents:i,addStartEventListener:function(n,t){0!==i.length?i.forEach((function(e){u(n,e,t)})):window.setTimeout(t,0)},removeStartEventListener:function(n,t){0!==i.length&&i.forEach((function(e){c(n,e,t)}))},endEvents:a,addEndEventListener:function(n,t){0!==a.length?a.forEach((function(e){u(n,e,t)})):window.setTimeout(t,0)},removeEndEventListener:function(n,t){0!==a.length&&a.forEach((function(e){c(n,e,t)}))}};t.default=s,n.exports=t.default},482:function(n,t,e){},626:function(n,t,e){!function(t){"use strict";var e=function(){return{escape:function(n){return n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:t,mimeType:function(n){var e=t(n).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[e]||"";var r},dataAsUrl:function(n,t){return"data:"+t+";base64,"+n},isDataUrl:function(n){return-1!==n.search(/^(data:)/)},canvasToBlob:function(n){return n.toBlob?new Promise((function(t){n.toBlob(t)})):function(n){return new Promise((function(t){for(var e=window.atob(n.toDataURL().split(",")[1]),r=e.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=e.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(n)},resolveUrl:function(n,t){var e=document.implementation.createHTMLDocument(),r=e.createElement("base");e.head.appendChild(r);var o=e.createElement("a");return e.body.appendChild(o),r.href=t,o.href=n,o.href},getAndEncode:function(n){var t=3e4;u.impl.options.cacheBust&&(n+=(/\?/.test(n)?"&":"?")+(new Date).getTime());return new Promise((function(e){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?e(r):a("cannot fetch resource: "+n+", status: "+o.status));var t=new FileReader;t.onloadend=function(){var n=t.result.split(/,/)[1];e(n)},t.readAsDataURL(o.response)},o.ontimeout=function(){r?e(r):a("timeout of "+t+"ms occured while fetching resource: "+n)},o.responseType="blob",o.timeout=t,o.open("GET",n,!0),o.send(),u.impl.options.imagePlaceholder){var i=u.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(n){console.error(n),e("")}}))},uid:(n=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+n++}),delay:function(n){return function(t){return new Promise((function(e){setTimeout((function(){e(t)}),n)}))}},asArray:function(n){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t},escapeXhtml:function(n){return n.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(n){return new Promise((function(t,e){var r=new Image;r.onload=function(){t(r)},r.onerror=e,r.src=n}))},width:function(n){var t=e(n,"border-left-width"),r=e(n,"border-right-width");return n.scrollWidth+t+r},height:function(n){var t=e(n,"border-top-width"),r=e(n,"border-bottom-width");return n.scrollHeight+t+r}};var n;function t(n){var t=/\.([^\.\/]*?)$/g.exec(n);return t?t[1]:""}function e(n,t){var e=window.getComputedStyle(n).getPropertyValue(t);return parseFloat(e.replace("px",""))}}(),r=function(){var n=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(n,e,i){return function(){return!t(n)}()?Promise.resolve(n):Promise.resolve(n).then(r).then((function(t){var r=Promise.resolve(n);return t.forEach((function(n){r=r.then((function(t){return o(t,n,e,i)}))})),r}))},shouldProcess:t,impl:{readUrls:r,inline:o}};function t(t){return-1!==t.search(n)}function r(t){for(var r,o=[];null!==(r=n.exec(t));)o.push(r[1]);return o.filter((function(n){return!e.isDataUrl(n)}))}function o(n,t,r,o){return Promise.resolve(t).then((function(n){return r?e.resolveUrl(n,r):n})).then(o||e.getAndEncode).then((function(n){return e.dataAsUrl(n,e.mimeType(t))})).then((function(r){return n.replace(function(n){return new RegExp("(url\\(['\"]?)("+e.escape(n)+")(['\"]?\\))","g")}(t),"$1"+r+"$3")}))}}(),o=function(){return{resolveAll:function(){return n(document).then((function(n){return Promise.all(n.map((function(n){return n.resolve()})))})).then((function(n){return n.join("\n")}))},impl:{readAll:n}};function n(){return Promise.resolve(e.asArray(document.styleSheets)).then((function(n){var t=[];return n.forEach((function(n){try{e.asArray(n.cssRules||[]).forEach(t.push.bind(t))}catch(t){console.log("Error while reading CSS rules from "+n.href,t.toString())}})),t})).then((function(n){return n.filter((function(n){return n.type===CSSRule.FONT_FACE_RULE})).filter((function(n){return r.shouldProcess(n.style.getPropertyValue("src"))}))})).then((function(t){return t.map(n)}));function n(n){return{resolve:function(){var t=(n.parentStyleSheet||{}).href;return r.inlineAll(n.cssText,t)},src:function(){return n.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function t(o){if(!(o instanceof Element))return Promise.resolve(o);return function(n){var t=n.style.getPropertyValue("background");return t?r.inlineAll(t).then((function(t){n.style.setProperty("background",t,n.style.getPropertyPriority("background"))})).then((function(){return n})):Promise.resolve(n)}(o).then((function(){return o instanceof HTMLImageElement?n(o).inline():Promise.all(e.asArray(o.childNodes).map((function(n){return t(n)})))}))},impl:{newImage:n}};function n(n){return{inline:function(t){return e.isDataUrl(n.src)?Promise.resolve():Promise.resolve(n.src).then(t||e.getAndEncode).then((function(t){return e.dataAsUrl(t,e.mimeType(n.src))})).then((function(t){return new Promise((function(e,r){n.onload=e,n.onerror=r,n.src=t}))}))}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},u={toSvg:c,toPng:function(n,t){return s(n,t||{}).then((function(n){return n.toDataURL()}))},toJpeg:function(n,t){return s(n,t=t||{}).then((function(n){return n.toDataURL("image/jpeg",t.quality||1)}))},toBlob:function(n,t){return s(n,t||{}).then(e.canvasToBlob)},toPixelData:function(n,t){return s(n,t||{}).then((function(t){return t.getContext("2d").getImageData(0,0,e.width(n),e.height(n)).data}))},impl:{fontFaces:o,images:i,util:e,inliner:r,options:{}}};function c(n,t){return function(n){void 0===n.imagePlaceholder?u.impl.options.imagePlaceholder=a.imagePlaceholder:u.impl.options.imagePlaceholder=n.imagePlaceholder;void 0===n.cacheBust?u.impl.options.cacheBust=a.cacheBust:u.impl.options.cacheBust=n.cacheBust}(t=t||{}),Promise.resolve(n).then((function(n){return function n(t,r,o){if(!o&&r&&!r(t))return Promise.resolve();return Promise.resolve(t).then((function(n){return n instanceof HTMLCanvasElement?e.makeImage(n.toDataURL()):n.cloneNode(!1)})).then((function(o){return function(t,r,o){var i=t.childNodes;return 0===i.length?Promise.resolve(r):function(t,e,r){var o=Promise.resolve();return e.forEach((function(e){o=o.then((function(){return n(e,r)})).then((function(n){n&&t.appendChild(n)}))})),o}(r,e.asArray(i),o).then((function(){return r}))}(t,o,r)})).then((function(n){return function(n,t){return t instanceof Element?Promise.resolve().then((function(){r=window.getComputedStyle(n),o=t.style,r.cssText?o.cssText=r.cssText:function(n,t){e.asArray(n).forEach((function(e){t.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))}))}(r,o);var r,o})).then((function(){[":before",":after"].forEach((function(r){!function(r){var o=window.getComputedStyle(n,r),i=o.getPropertyValue("content");if(""!==i&&"none"!==i){var a=e.uid();t.className=t.className+" "+a;var u=document.createElement("style");u.appendChild(function(n,t,r){var o="."+n+":"+t,i=r.cssText?function(n){var t=n.getPropertyValue("content");return n.cssText+" content: "+t+";"}(r):function(n){return e.asArray(n).map((function(t){return t+": "+n.getPropertyValue(t)+(n.getPropertyPriority(t)?" !important":"")})).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(a,r,o)),t.appendChild(u)}}(r)}))})).then((function(){n instanceof HTMLTextAreaElement&&(t.innerHTML=n.value);n instanceof HTMLInputElement&&t.setAttribute("value",n.value)})).then((function(){if(!(t instanceof SVGElement))return;if(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(t instanceof SVGRectElement))return;["width","height"].forEach((function(n){var e=t.getAttribute(n);e&&t.style.setProperty(n,e)}))})).then((function(){return t})):t}(t,n)}))}(n,t.filter,!0)})).then(l).then(f).then((function(n){t.bgcolor&&(n.style.backgroundColor=t.bgcolor);t.width&&(n.style.width=t.width+"px");t.height&&(n.style.height=t.height+"px");t.style&&Object.keys(t.style).forEach((function(e){n.style[e]=t.style[e]}));return n})).then((function(r){return function(n,t,r){return Promise.resolve(n).then((function(n){return n.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(n)})).then(e.escapeXhtml).then((function(n){return'<foreignObject x="0" y="0" width="100%" height="100%">'+n+"</foreignObject>"})).then((function(n){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+r+'">'+n+"</svg>"})).then((function(n){return"data:image/svg+xml;charset=utf-8,"+n}))}(r,t.width||e.width(n),t.height||e.height(n))}))}function s(n,t){return c(n,t).then(e.makeImage).then(e.delay(100)).then((function(r){var o=function(n){var r=document.createElement("canvas");if(r.width=t.width||e.width(n),r.height=t.height||e.height(n),t.bgcolor){var o=r.getContext("2d");o.fillStyle=t.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(n);return o.getContext("2d").drawImage(r,0,0),o}))}function l(n){return o.resolveAll().then((function(t){var e=document.createElement("style");return n.appendChild(e),e.appendChild(document.createTextNode(t)),n}))}function f(n){return i.inlineAll(n).then((function(){return n}))}n.exports=u}()},82:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(11),a=e(626),u=e.n(a),c=e(52),s=e.n(c),l=(e(51),e(482),o.a.useState),f=o.a.useRef,m=["rgb(248, 217, 45)","rgb(248, 217, 45)","rgb(242, 245, 241)","rgb(11, 84, 164)","rgb(214, 0, 20)","rgb(11, 84, 164)"],d=function(n){for(var t=10;n-t>120;)t+=60;return t};t.default=i.a.connect({component:function(n){var t=n.isMobile,e=n.h,r=n.w,a=t?430:d(e),c=t?250:d(r),h=t?"mobile":"pc",p=f(null),g=l(1),v=g[0],w=g[1];return o.a.createElement("div",{className:"mondrian-wrapper"},o.a.createElement("div",{className:"mondrian-inner-wrapper",ref:p},o.a.createElement("div",{key:v,className:"mondrian-art",style:{height:a,width:c}},function(n){return Array.from(Array(n?20:50).keys()).map((function(t){return o.a.createElement("div",{key:t,className:"block-"+t,style:{animationDelay:.05*t+"s",gridColumn:"span "+i.a.random(1,n?4:5),gridRow:"span "+i.a.random(1,n?4:5),backgroundColor:m[i.a.random(0,5)]}})}))}(t))),o.a.createElement(s.a,{className:"download-btn "+h,icon:"download",type:"primary",onClick:function(){u.a.toPng(p.current).then((function(n){i.a.downloadImg(n,"MondrianArt")}))}}),o.a.createElement(s.a,{className:"refresh-btn "+h,icon:"redo",type:"primary",onClick:function(){w(v?0:1)}}))},mapStateToProps:function(n){return{isMobile:n.common.isMobile,h:n.common.contentHeight,w:n.common.contentWidth}}})}}]);
//# sourceMappingURL=15.9860535c0234dcf649d5.bundle.js.map