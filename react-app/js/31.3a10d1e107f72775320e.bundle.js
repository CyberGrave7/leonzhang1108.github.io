(window.webpackJsonp=window.webpackJsonp||[]).push([[31,37],{301:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=function(){return(o=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},l=function(t,e,n){var a=n.transformRow&&n.transformRow.start<=e&&n.transformRow.end>=e;return r.a.createElement("ul",{className:"row "+(a?"row-transform":""),key:e},t.map((function(t,o){return function(t,e,n,a,o){var l=a.transformCol&&a.transformCol.start<=e&&a.transformCol.end>=e;return r.a.createElement("li",{className:"\n        col\n        "+(l?"col-transform":"")+"\n        "+(a.hilightList&&1===a.hilightList[n][e]?"hilight":"")+"\n      ",key:e},a.editable?r.a.createElement("input",{type:"text",value:t,"data-row":n,"data-col":e,"data-ventor":a.ventor,onChange:a.onInput,onBlur:a.onBlur}):r.a.createElement("span",{style:{transform:"rotate("+(a.rotate?"90deg":"0")+")"},className:""!==t?"show":""},t),a.hasShadow?r.a.createElement("div",{className:"shadow "+(o?"show":"")},"×"):"")}(t,o,e,n,a)})))};e.default=function(t){return r.a.createElement("table",{className:t.ventorList?"show":"",style:o({transform:"\n      rotate("+(t.rotate?"-90deg":"0")+")\n      translateX("+(t.left||0)+"px)\n      translateY("+(-t.top||0)+"px)"},t.style)},r.a.createElement("tbody",null,r.a.createElement("tr",null,function(t){return t.ventorList?r.a.createElement("td",null,r.a.createElement("div",{className:"border-left"}),t.ventorList.map((function(e,n){return l(e,n,t)})),r.a.createElement("div",{className:"border-right"})):r.a.createElement("td",null)}(t))))}},309:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(301),l=function(t){return{width:2===t.step?t.width:0,opacity:2===t.step?1:0}};e.default=function(t){return r.a.createElement("div",{className:"display",style:l(t)},r.a.createElement(o.default,{ventorList:t.ventorList}))}}}]);
//# sourceMappingURL=31.3a10d1e107f72775320e.bundle.js.map