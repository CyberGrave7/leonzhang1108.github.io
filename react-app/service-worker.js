"use strict";var precacheConfig=[["./index.html","0e7b4e6122440e84d0bd6d8cab5a7fe8"],["./static/css/main.493d141e.css","9e53c275e99420855047f6b843e7fb61"],["./static/js/0.6945f1fb.chunk.js","6d9f8deec724daa6ff8e5224f0726a7e"],["./static/js/1.dd7a69a4.chunk.js","cdb35432bd382c1eb30ea6075864ff42"],["./static/js/10.e1060d29.chunk.js","8aac9bf4f51a42deb930680ce9eb2400"],["./static/js/11.4a6d8b87.chunk.js","6e3e96702ddd173d48fbdd223ea69bec"],["./static/js/12.0af37661.chunk.js","f46422199e58f90603f5d69a98d412c5"],["./static/js/13.22e488b4.chunk.js","b192999d52cb9f8a627ef25982db9f8a"],["./static/js/14.39cb6a29.chunk.js","e1dd4443252ba19dc4bcffa1831b1efd"],["./static/js/15.c3166ccf.chunk.js","f9c893e79e9f2473c57cc10f2236229a"],["./static/js/2.22576281.chunk.js","f80ceaa6d9d49366401cc82dfca0c23a"],["./static/js/3.4ec0efd8.chunk.js","60d4959f741ffb597e19dd697093ce37"],["./static/js/4.b1bcef94.chunk.js","5f4dafcde452d1294e156a25f8128b31"],["./static/js/5.d3219428.chunk.js","fe9152ddab85913963ff75cf7195a982"],["./static/js/6.47e868c8.chunk.js","ff93809394bce1105ebb1c932b60b651"],["./static/js/7.97347dbc.chunk.js","a3f1e49755c2f5d7fd68bf3d8682a4f5"],["./static/js/8.cbe88f6d.chunk.js","6b9cbe62b0baf210f5a1368c89a075d0"],["./static/js/9.c5088d4b.chunk.js","eee3a5385c29c8c23f664b3e63a62eb5"],["./static/js/main.531e6084.js","5bf5573bd949c437b35fdd9b952d9ec3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,c){var a=new URL(e);return c&&a.pathname.match(c)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],c=new URL(t,self.location),a=createCacheKey(c,hashParamName,n,/\.\w{8}\./);return[c.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,c),e=urlsToCacheKeys.has(n));var a="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});