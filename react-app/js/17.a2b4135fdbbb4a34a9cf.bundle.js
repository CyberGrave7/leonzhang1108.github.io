(window.webpackJsonp=window.webpackJsonp||[]).push([[17,57],{469:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],a=[];function u(t,e,n){t.addEventListener(e,n,!1)}function c(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];for(var i in o)if(i in t){n.push(o[i]);break}}}"AnimationEvent"in window||(delete r.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete r.transitionstart.transition,delete o.transitionend.transition),e(r,i),e(o,a)}();var s={startEvents:i,addStartEventListener:function(t,e){0!==i.length?i.forEach(function(n){u(t,n,e)}):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==i.length&&i.forEach(function(n){c(t,n,e)})},endEvents:a,addEndEventListener:function(t,e){0!==a.length?a.forEach(function(n){u(t,n,e)}):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==a.length&&a.forEach(function(n){c(t,n,e)})}};e.default=s,t.exports=e.default},485:function(t,e,n){},623:function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(t,e){return"data:"+e+";base64,"+t},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise(function(e){t.toBlob(e)}):function(t){return new Promise(function(e){for(var n=window.atob(t.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);e(new Blob([o],{type:"image/png"}))})}(t)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=e,o.href=t,o.href},getAndEncode:function(t){var e=3e4;u.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?n(r):a("cannot fetch resource: "+t+", status: "+o.status));var e=new FileReader;e.onloadend=function(){var t=e.result.split(/,/)[1];n(t)},e.readAsDataURL(o.response)},o.ontimeout=function(){r?n(r):a("timeout of "+e+"ms occured while fetching resource: "+t)},o.responseType="blob",o.timeout=e,o.open("GET",t,!0),o.send(),u.impl.options.imagePlaceholder){var i=u.impl.options.imagePlaceholder.split(/,/);i&&i[1]&&(r=i[1])}function a(t){console.error(t),n("")}})},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise(function(n){setTimeout(function(){n(e)},t)})}},asArray:function(t){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise(function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=n,r.src=t})},width:function(t){var e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.scrollWidth+e+r},height:function(t){var e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.scrollHeight+e+r}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,i){return function(){return!e(t)}()?Promise.resolve(t):Promise.resolve(t).then(r).then(function(e){var r=Promise.resolve(t);return e.forEach(function(t){r=r.then(function(e){return o(e,t,n,i)})}),r})},shouldProcess:e,impl:{readUrls:r,inline:o}};function e(e){return-1!==e.search(t)}function r(e){for(var r,o=[];null!==(r=t.exec(e));)o.push(r[1]);return o.filter(function(t){return!n.isDataUrl(t)})}function o(t,e,r,o){return Promise.resolve(e).then(function(t){return r?n.resolveUrl(t,r):t}).then(o||n.getAndEncode).then(function(t){return n.dataAsUrl(t,n.mimeType(e))}).then(function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")})}}(),o=function(){return{resolveAll:function(){return t(document).then(function(t){return Promise.all(t.map(function(t){return t.resolve()}))}).then(function(t){return t.join("\n")})},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(t){var e=[];return t.forEach(function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),e}).then(function(t){return t.filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return r.shouldProcess(t.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),i=function(){return{inlineAll:function e(o){if(!(o instanceof Element))return Promise.resolve(o);return function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}(o).then(function(){return o instanceof HTMLImageElement?t(o).inline():Promise.all(n.asArray(o.childNodes).map(function(t){return e(t)}))})},impl:{newImage:t}};function t(t){return{inline:function(e){return n.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(e||n.getAndEncode).then(function(e){return n.dataAsUrl(e,n.mimeType(t.src))}).then(function(e){return new Promise(function(n,r){t.onload=n,t.onerror=r,t.src=e})})}}}}(),a={imagePlaceholder:void 0,cacheBust:!1},u={toSvg:c,toPng:function(t,e){return s(t,e||{}).then(function(t){return t.toDataURL()})},toJpeg:function(t,e){return s(t,e=e||{}).then(function(t){return t.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(t,e){return s(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return s(t,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data})},impl:{fontFaces:o,images:i,util:n,inliner:r,options:{}}};function c(t,e){return function(t){void 0===t.imagePlaceholder?u.impl.options.imagePlaceholder=a.imagePlaceholder:u.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?u.impl.options.cacheBust=a.cacheBust:u.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then(function(t){return function(t,e,n){if(!n&&e&&!e(t))return Promise.resolve();return Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(n){return function(t,e,r){var o=t.childNodes;return 0===o.length?Promise.resolve(e):function(t,e,n){var r=Promise.resolve();return e.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&t.appendChild(t)})}),r}(e,n.asArray(o),r).then(function(){return e})}(t,n,e)}).then(function(e){return function(t,e){return e instanceof Element?Promise.resolve().then(function(){source=window.getComputedStyle(t),target=e.style,source.cssText?target.cssText=source.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(source,target);var t,e}).then(function(){[":before",":after"].forEach(function(t){!function(t){var e=window.getComputedStyle(t,t),r=e.getPropertyValue("content");if(""!==r&&"none"!==r){var o=n.uid();e.className=e.className+" "+o;var i=document.createElement("style");i.appendChild(function(t,e,r){var o="."+t+":"+e,i=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(o,t,e)),e.appendChild(i)}}(t)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var e=e.getAttribute(t);e&&e.style.setProperty(t,e)})}).then(function(){return e}):e}(t,e)})}(t,e.filter,!0)}).then(f).then(m).then(function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach(function(n){t.style[n]=e.style[n]});return t}).then(function(r){return function(t,e,r){return Promise.resolve(t).then(function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)}).then(n.escapeXhtml).then(function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"}).then(function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+t+"</svg>"}).then(function(t){return"data:image/svg+xml;charset=utf-8,"+t})}(r,e.width||n.width(t),e.height||n.height(t))})}function s(t,e){return c(t,e).then(n.makeImage).then(n.delay(100)).then(function(r){var o=function(t){var r=document.createElement("canvas");if(r.width=e.width||n.width(t),r.height=e.height||n.height(t),e.bgcolor){var o=r.getContext("2d");o.fillStyle=e.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(t);return o.getContext("2d").drawImage(r,0,0),o})}function l(t,e,r){if(!r&&e&&!e(t))return Promise.resolve();return Promise.resolve(t).then(o).then(function(n){return i(t,n,e)}).then(function(e){return a(t,e)});function o(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}function i(t,e,r){var o=t.childNodes;return 0===o.length?Promise.resolve(e):function(t,e,n){var r=Promise.resolve();return e.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&t.appendChild(t)})}),r}(e,n.asArray(o),r).then(function(){return e});function i(t,e,n){var r=Promise.resolve();return e.forEach(function(t){r=r.then(function(){return l(t,n)}).then(function(t){t&&t.appendChild(t)})}),r}}function a(t,e){return e instanceof Element?Promise.resolve().then(function(){source=window.getComputedStyle(t),target=e.style,source.cssText?target.cssText=source.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(source,target);var t,e}).then(function(){[":before",":after"].forEach(function(t){!function(t){var e=window.getComputedStyle(t,t),r=e.getPropertyValue("content");if(""!==r&&"none"!==r){var o=n.uid();e.className=e.className+" "+o;var i=document.createElement("style");i.appendChild(function(t,e,r){var o="."+t+":"+e,i=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(o,t,e)),e.appendChild(i)}}(t)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var e=e.getAttribute(t);e&&e.style.setProperty(t,e)})}).then(function(){return e}):e;function r(){function r(t,e){t.cssText?e.cssText=t.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(t,e)}source=window.getComputedStyle(t),target=e.style,void(source.cssText?target.cssText=source.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(source,target))}function o(){function r(t){var e=window.getComputedStyle(t,t),r=e.getPropertyValue("content");if(""!==r&&"none"!==r){var o=n.uid();e.className=e.className+" "+o;var i=document.createElement("style");i.appendChild(function(t,e,r){var o="."+t+":"+e,i=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(o,t,e)),e.appendChild(i)}}[":before",":after"].forEach(function(t){!function(t){var e=window.getComputedStyle(t,t),r=e.getPropertyValue("content");if(""!==r&&"none"!==r){var o=n.uid();e.className=e.className+" "+o;var i=document.createElement("style");i.appendChild(function(t,e,r){var o="."+t+":"+e,i=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+i+"}")}(o,t,e)),e.appendChild(i)}}(t)})}function i(){if(t instanceof HTMLTextAreaElement)e.innerHTML=t.value;if(t instanceof HTMLInputElement)e.setAttribute("value",t.value)}function a(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var e=e.getAttribute(t);e&&e.style.setProperty(t,e)})}}}function f(t){return o.resolveAll().then(function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t})}function m(t){return i.inlineAll(t).then(function(){return t})}t.exports=u}()},83:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(11),a=n(623),u=n.n(a),c=n(55),s=n.n(c),l=(n(54),n(485),o.a.useState),f=o.a.useRef,m=["rgb(248, 217, 45)","rgb(248, 217, 45)","rgb(242, 245, 241)","rgb(11, 84, 164)","rgb(214, 0, 20)","rgb(11, 84, 164)"],d=function(t){for(var e=10;t-e>120;)e+=60;return e};e.default=i.a.connect({component:function(t){var e=t.isMobile,n=t.h,r=t.w,a=e?430:d(n),c=e?250:d(r),h=e?"mobile":"pc",p=f(null),g=l(1),v=g[0],y=g[1];return o.a.createElement("div",{className:"mondrian-wrapper"},o.a.createElement("div",{className:"mondrian-inner-wrapper",ref:p},o.a.createElement("div",{key:v,className:"mondrian-art",style:{height:a,width:c}},function(t){return Array.from(Array(t?20:50).keys()).map(function(e){return o.a.createElement("div",{key:e,className:"block-"+e,style:{animationDelay:.05*e+"s",gridColumn:"span "+i.a.random(1,t?4:5),gridRow:"span "+i.a.random(1,t?4:5),backgroundColor:m[i.a.random(0,5)]}})})}(e))),o.a.createElement(s.a,{className:"download-btn "+h,icon:"download",type:"primary",onClick:function(){u.a.toPng(p.current).then(function(t){i.a.downloadImg(t,"MondrianArt")})}}),o.a.createElement(s.a,{className:"refresh-btn "+h,icon:"redo",type:"primary",onClick:function(){y(v?0:1)}}))},mapStateToProps:function(t){return{isMobile:t.common.isMobile,h:t.common.contentHeight,w:t.common.contentWidth}}})}}]);
//# sourceMappingURL=17.a2b4135fdbbb4a34a9cf.bundle.js.map