(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{315:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n(323)),o=r(n(326));function r(t){return t&&t.__esModule?t:{default:t}}i.default.Group=o.default;var s=i.default;e.default=s},323:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=f(n(1)),o=f(n(0)),r=p(n(8)),s=n(25),a=p(n(107)),c=p(n(24)),l=n(20),d=p(n(324)),u=n(154);function p(t){return t&&t.__esModule?t:{default:t}}function f(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function v(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var w=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n},x=/^[\u4e00-\u9fa5]{2}$/,_=x.test.bind(x);function T(t,e){var n=!1,o=[];return i.Children.forEach(t,function(t){var e=O(t),i="string"===e||"number"===e;if(n&&i){var r=o.length-1,s=o[r];o[r]="".concat(s).concat(t)}else o.push(t);n=i}),i.Children.map(o,function(t){return function(t,e){if(null==t)return;var n=e?" ":"";if("string"!=typeof t&&"number"!=typeof t&&(o=t.type,"string"==typeof o)&&_(t.props.children))return i.cloneElement(t,{},t.props.children.split("").join(n));var o;if("string"==typeof t)return _(t)&&(t=t.split("").join(n)),i.createElement("span",null,t);return t}(t,e)})}(0,u.tuple)("default","primary","ghost","dashed","danger","link");var E=(0,u.tuple)("circle","circle-outline","round"),k=(0,u.tuple)("large","default","small"),P=(0,u.tuple)("submit","button","reset"),C=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=v(this,g(e).call(this,t))).saveButtonRef=function(t){n.buttonNode=t},n.handleClick=function(t){var e=n.state.loading,i=n.props.onClick;e||i&&i(t)},n.renderButton=function(t){var e,o=t.getPrefixCls,s=t.autoInsertSpaceInButton,l=n.props,u=l.prefixCls,p=l.type,f=l.shape,m=l.size,v=l.className,g=l.children,b=l.icon,O=l.ghost,x=(l.loading,l.block),_=w(l,["prefixCls","type","shape","size","className","children","icon","ghost","loading","block"]),E=n.state,k=E.loading,P=E.hasTwoCNChar,C=o("btn",u),N=!1!==s,S="";switch(m){case"large":S="lg";break;case"small":S="sm"}var j=(0,r.default)(C,v,(y(e={},"".concat(C,"-").concat(p),p),y(e,"".concat(C,"-").concat(f),f),y(e,"".concat(C,"-").concat(S),S),y(e,"".concat(C,"-icon-only"),!g&&0!==g&&b),y(e,"".concat(C,"-loading"),k),y(e,"".concat(C,"-background-ghost"),O),y(e,"".concat(C,"-two-chinese-chars"),P&&N),y(e,"".concat(C,"-block"),x),e)),M=k?"loading":b,I=M?i.createElement(c.default,{type:M}):null,z=g||0===g?T(g,n.isNeedInserted()&&N):null,D=(0,a.default)(_,["htmlType"]);if(void 0!==D.href)return i.createElement("a",h({},D,{className:j,onClick:n.handleClick,ref:n.saveButtonRef}),I,z);var A=_,L=A.htmlType,B=w(A,["htmlType"]),H=i.createElement("button",h({},B,{type:L,className:j,onClick:n.handleClick,ref:n.saveButtonRef}),I,z);return"link"===p?H:i.createElement(d.default,null,H)},n.state={loading:t.loading,hasTwoCNChar:!1},n}var n,o,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,i.Component),n=e,s=[{key:"getDerivedStateFromProps",value:function(t,e){return t.loading instanceof Boolean?h({},e,{loading:t.loading}):null}}],(o=[{key:"componentDidMount",value:function(){this.fixTwoCNChar()}},{key:"componentDidUpdate",value:function(t){var e=this;this.fixTwoCNChar(),t.loading&&"boolean"!=typeof t.loading&&clearTimeout(this.delayTimeout);var n=this.props.loading;if(n&&"boolean"!=typeof n&&n.delay)this.delayTimeout=window.setTimeout(function(){return e.setState({loading:n})},n.delay);else{if(t.loading===this.props.loading)return;this.setState({loading:n})}}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"fixTwoCNChar",value:function(){if(this.buttonNode){var t=this.buttonNode.textContent||this.buttonNode.innerText;this.isNeedInserted()&&_(t)?this.state.hasTwoCNChar||this.setState({hasTwoCNChar:!0}):this.state.hasTwoCNChar&&this.setState({hasTwoCNChar:!1})}}},{key:"isNeedInserted",value:function(){var t=this.props,e=t.icon,n=t.children;return 1===i.Children.count(n)&&!e}},{key:"render",value:function(){return i.createElement(l.ConfigConsumer,null,this.renderButton)}}])&&m(n.prototype,o),s&&m(n,s),e}();C.__ANT_BUTTON=!0,C.defaultProps={loading:!1,ghost:!1,block:!1,htmlType:"button"},C.propTypes={type:o.string,shape:o.oneOf(E),size:o.oneOf(k),htmlType:o.oneOf(P),onClick:o.func,loading:o.oneOfType([o.bool,o.object]),className:o.string,icon:o.string,block:o.bool},(0,s.polyfill)(C);var N=C;e.default=N},324:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(1)),r=n(6),s=l(n(325)),a=l(n(155)),c=n(20);function l(t){return t&&t.__esModule?t:{default:t}}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return!t||null===t.offsetParent}var m=function(t){function e(){var t,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=p(e).apply(this,arguments),(t=!o||"object"!==d(o)&&"function"!=typeof o?f(n):o).animationStart=!1,t.destroy=!1,t.onClick=function(e,n){if(!(!e||y(e)||e.className.indexOf("-leave")>=0)){var o=t.props.insertExtraNode;t.extraNode=document.createElement("div");var r=t.extraNode;r.className="ant-click-animating-node";var a=t.getAttributeName();e.setAttribute(a,"true"),i=i||document.createElement("style"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&t.isNotGrey(n)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(n)&&"transparent"!==n&&(t.csp&&t.csp.nonce&&(i.nonce=t.csp.nonce),r.style.borderColor=n,i.innerHTML="html body { --antd-wave-shadow-color: ".concat(n,"; }"),document.body.contains(i)||document.body.appendChild(i)),o&&e.appendChild(r),s.default.addStartEventListener(e,t.onTransitionStart),s.default.addEndEventListener(e,t.onTransitionEnd)}},t.bindAnimationEvent=function(e){if(e&&e.getAttribute&&!e.getAttribute("disabled")&&!(e.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!y(n.target)){t.resetEffect(e);var i=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");t.clickWaveTimeoutId=window.setTimeout(function(){return t.onClick(e,i)},0),a.default.cancel(t.animationStartId),t.animationStart=!0,t.animationStartId=(0,a.default)(function(){t.animationStart=!1},10)}};return e.addEventListener("click",n,!0),{cancel:function(){e.removeEventListener("click",n,!0)}}}},t.onTransitionStart=function(e){if(!t.destroy){var n=(0,r.findDOMNode)(f(t));e&&e.target===n&&(t.animationStart||t.resetEffect(n))}},t.onTransitionEnd=function(e){e&&"fadeEffect"===e.animationName&&t.resetEffect(e.target)},t.renderWave=function(e){var n=e.csp,i=t.props.children;return t.csp=n,i},t}var n,l,m;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,o.Component),n=e,(l=[{key:"isNotGrey",value:function(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])}},{key:"getAttributeName",value:function(){return this.props.insertExtraNode?"ant-click-animating":"ant-click-animating-without-extra-node"}},{key:"resetEffect",value:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.props.insertExtraNode,n=this.getAttributeName();t.setAttribute(n,"false"),this.removeExtraStyleNode(),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),s.default.removeStartEventListener(t,this.onTransitionStart),s.default.removeEndEventListener(t,this.onTransitionEnd)}}},{key:"removeExtraStyleNode",value:function(){i&&(i.innerHTML="")}},{key:"componentDidMount",value:function(){var t=(0,r.findDOMNode)(this);t&&1===t.nodeType&&(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0}},{key:"render",value:function(){return o.createElement(c.ConfigConsumer,null,this.renderWave)}}])&&u(n.prototype,l),m&&u(n,m),e}();e.default=m},325:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},r=[],s=[];function a(t,e,n){t.addEventListener(e,n,!1)}function c(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var i in e)if(e.hasOwnProperty(i)){var o=e[i];for(var r in o)if(r in t){n.push(o[r]);break}}}"AnimationEvent"in window||(delete i.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete i.transitionstart.transition,delete o.transitionend.transition),e(i,r),e(o,s)}();var l={startEvents:r,addStartEventListener:function(t,e){0!==r.length?r.forEach(function(n){a(t,n,e)}):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==r.length&&r.forEach(function(n){c(t,n,e)})},endEvents:s,addEndEventListener:function(t,e){0!==s.length?s.forEach(function(n){a(t,n,e)}):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==s.length&&s.forEach(function(n){c(t,n,e)})}};e.default=l,t.exports=e.default},326:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(1)),r=(i=n(8))&&i.__esModule?i:{default:i},s=n(20);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var c=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n},l=function(t){return o.createElement(s.ConfigConsumer,null,function(e){var n=e.getPrefixCls,i=t.prefixCls,s=t.size,l=t.className,d=c(t,["prefixCls","size","className"]),u=n("btn-group",i),p="";switch(s){case"large":p="lg";break;case"small":p="sm"}var f=(0,r.default)(u,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},"".concat(u,"-").concat(p),p),l);return o.createElement("div",a({},d,{className:f}))})};e.default=l},568:function(t,e,n){window,t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i,o=function(t,e){var n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)},r=function(t){return t*(Math.PI/180)},s=function(t,e,n){for(var i,o=e.split(/[ ,]+/g),r=0;r<o.length;r+=1)i=o[r],t.addEventListener?t.addEventListener(i,n,!1):t.attachEvent&&t.attachEvent(i,n)},a=function(t,e,n){for(var i,o=e.split(/[ ,]+/g),r=0;r<o.length;r+=1)i=o[r],t.removeEventListener?t.removeEventListener(i,n):t.detachEvent&&t.detachEvent(i,n)},c=function(t){return t.preventDefault(),t.type.match(/^touch/)?t.changedTouches:t},l=function(){return{x:void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},d=function(t,e){e.top||e.right||e.bottom||e.left?(t.style.top=e.top,t.style.right=e.right,t.style.bottom=e.bottom,t.style.left=e.left):(t.style.left=e.x+"px",t.style.top=e.y+"px")},u=function(t,e,n){var i=p(t);for(var o in i)if(i.hasOwnProperty(o))if("string"==typeof e)i[o]=e+" "+n;else{for(var r="",s=0,a=e.length;s<a;s+=1)r+=e[s]+" "+n+", ";i[o]=r.slice(0,-2)}return i},p=function(t){var e={};return e[t]="",["webkit","Moz","o"].forEach(function(n){e[n+t.charAt(0).toUpperCase()+t.slice(1)]=""}),e},f=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},h=function(t,e){if(t.length)for(var n=0,i=t.length;n<i;n+=1)e(t[n]);else e(t)},y=!!("ontouchstart"in window),m=!!window.PointerEvent,v=!!window.MSPointerEvent,g={start:"mousedown",move:"mousemove",end:"mouseup"},b={};function O(){}m?i={start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"}:v?i={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:y?(i={start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},b=g):i=g,O.prototype.on=function(t,e){var n,i=t.split(/[ ,]+/g);this._handlers_=this._handlers_||{};for(var o=0;o<i.length;o+=1)n=i[o],this._handlers_[n]=this._handlers_[n]||[],this._handlers_[n].push(e);return this},O.prototype.off=function(t,e){return this._handlers_=this._handlers_||{},void 0===t?this._handlers_={}:void 0===e?this._handlers_[t]=null:this._handlers_[t]&&this._handlers_[t].indexOf(e)>=0&&this._handlers_[t].splice(this._handlers_[t].indexOf(e),1),this},O.prototype.trigger=function(t,e){var n,i=this,o=t.split(/[ ,]+/g);i._handlers_=i._handlers_||{};for(var r=0;r<o.length;r+=1)n=o[r],i._handlers_[n]&&i._handlers_[n].length&&i._handlers_[n].forEach(function(t){t.call(i,{type:n,target:i},e)})},O.prototype.config=function(t){this.options=this.defaults||{},t&&(this.options=function(t,e){var n={};for(var i in t)t.hasOwnProperty(i)&&e.hasOwnProperty(i)?n[i]=e[i]:t.hasOwnProperty(i)&&(n[i]=t[i]);return n}(this.options,t))},O.prototype.bindEvt=function(t,e){var n=this;return n._domHandlers_=n._domHandlers_||{},n._domHandlers_[e]=function(){"function"==typeof n["on"+e]?n["on"+e].apply(n,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},s(t,i[e],n._domHandlers_[e]),b[e]&&s(t,b[e],n._domHandlers_[e]),n},O.prototype.unbindEvt=function(t,e){return this._domHandlers_=this._domHandlers_||{},a(t,i[e],this._domHandlers_[e]),b[e]&&a(t,b[e],this._domHandlers_[e]),delete this._domHandlers_[e],this};var w=O;function x(t,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=t,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1},this.config(e),"dynamic"===this.options.mode&&(this.options.restOpacity=0),this.id=x.id,x.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}x.prototype=new w,x.constructor=x,x.id=0,x.prototype.buildEl=function(t){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)},x.prototype.stylize=function(){if(this.options.dataOnly)return this;var t=this.options.fadeTime+"ms",e=function(t,e){var n=p("borderRadius");for(var i in n)n.hasOwnProperty(i)&&(n[i]="50%");return n}(),n=u("transition","opacity",t),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5"},f(i.el,n),f(i.back,e),f(i.front,e),this.applyStyles(i),this},x.prototype.applyStyles=function(t){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var n in t[e])this.ui[e].style[n]=t[e][n];return this},x.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)},x.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)},x.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},x.prototype.show=function(t){var e=this;return e.options.dataOnly?e:(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),"function"==typeof t&&t.call(this)},e.options.fadeTime),e)},x.prototype.hide=function(t){var e=this;return e.options.dataOnly?e:(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var n="dynamic"===e.options.mode?"none":"block";e.ui.el.style.display=n,"function"==typeof t&&t.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick&&e.restPosition(),e)},x.prototype.restPosition=function(t){var e=this;e.frontPosition={x:0,y:0};var n=e.options.fadeTime+"ms",i={};i.front=u("transition",["top","left"],n);var o={front:{}};o.front={left:e.frontPosition.x+"px",top:e.frontPosition.y+"px"},e.applyStyles(i),e.applyStyles(o),e.restTimeout=setTimeout(function(){"function"==typeof t&&t.call(e),e.restCallback()},e.options.fadeTime)},x.prototype.restCallback=function(){var t={};t.front=u("transition","none",""),this.applyStyles(t),this.trigger("rested",this.instance)},x.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},x.prototype.computeDirection=function(t){var e,n,i,o=t.angle.radian,r=Math.PI/4,s=Math.PI/2;if(o>r&&o<3*r&&!t.lockX?e="up":o>-r&&o<=r&&!t.lockY?e="left":o>3*-r&&o<=-r&&!t.lockX?e="down":t.lockY||(e="right"),t.lockY||(n=o>-s&&o<s?"left":"right"),t.lockX||(i=o>0?"up":"down"),t.force>this.options.threshold){var a,c={};for(a in this.direction)this.direction.hasOwnProperty(a)&&(c[a]=this.direction[a]);var l={};for(a in this.direction={x:n,y:i,angle:e},t.direction=this.direction,c)c[a]===this.direction[a]&&(l[a]=!0);if(l.x&&l.y&&l.angle)return t;l.x&&l.y||this.trigger("plain",t),l.x||this.trigger("plain:"+n,t),l.y||this.trigger("plain:"+i,t),l.angle||this.trigger("dir dir:"+e,t)}return t};var _=x;function T(t,e){return this.nipples=[],this.idles=[],this.actives=[],this.ids=[],this.pressureIntervals={},this.manager=t,this.id=T.id,T.id+=1,this.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1},this.config(e),"static"!==this.options.mode&&"semi"!==this.options.mode||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfNipples=1),this.updateBox(),this.prepareNipples(),this.bindings(),this.begin(),this.nipples}T.prototype=new w,T.constructor=T,T.id=0,T.prototype.prepareNipples=function(){var t=this.nipples;t.on=this.on.bind(this),t.off=this.off.bind(this),t.options=this.options,t.destroy=this.destroy.bind(this),t.ids=this.ids,t.id=this.id,t.processOnMove=this.processOnMove.bind(this),t.processOnEnd=this.processOnEnd.bind(this),t.get=function(e){if(void 0===e)return t[0];for(var n=0,i=t.length;n<i;n+=1)if(t[n].identifier===e)return t[n];return!1}},T.prototype.bindings=function(){this.bindEvt(this.options.zone,"start"),this.options.zone.style.touchAction="none",this.options.zone.style.msTouchAction="none"},T.prototype.begin=function(){var t=this.options;if("static"===t.mode){var e=this.createNipple(t.position,this.manager.getIdentifier());e.add(),this.idles.push(e)}},T.prototype.createNipple=function(t,e){var n=l(),i={},o=this.options;if(t.x&&t.y)i={x:t.x-(n.x+this.box.left),y:t.y-(n.y+this.box.top)};else if(t.top||t.right||t.bottom||t.left){var r=document.createElement("DIV");r.style.display="hidden",r.style.top=t.top,r.style.right=t.right,r.style.bottom=t.bottom,r.style.left=t.left,r.style.position="absolute",o.zone.appendChild(r);var s=r.getBoundingClientRect();o.zone.removeChild(r),i=t,t={x:s.left+n.x,y:s.top+n.y}}var a=new _(this,{color:o.color,size:o.size,threshold:o.threshold,fadeTime:o.fadeTime,dataOnly:o.dataOnly,restJoystick:o.restJoystick,restOpacity:o.restOpacity,mode:o.mode,identifier:e,position:t,zone:o.zone,frontPosition:{x:0,y:0}});return o.dataOnly||(d(a.ui.el,i),d(a.ui.front,a.frontPosition)),this.nipples.push(a),this.trigger("added "+a.identifier+":added",a),this.manager.trigger("added "+a.identifier+":added",a),this.bindNipple(a),a},T.prototype.updateBox=function(){this.box=this.options.zone.getBoundingClientRect()},T.prototype.bindNipple=function(t){var e,n=this,i=function(t,i){e=t.type+" "+i.id+":"+t.type,n.trigger(e,i)};t.on("destroyed",n.onDestroyed.bind(n)),t.on("shown hidden rested dir plain",i),t.on("dir:up dir:right dir:down dir:left",i),t.on("plain:up plain:right plain:down plain:left",i)},T.prototype.pressureFn=function(t,e,n){var i=this,o=0;clearInterval(i.pressureIntervals[n]),i.pressureIntervals[n]=setInterval(function(){var n=t.force||t.pressure||t.webkitForce||0;n!==o&&(e.trigger("pressure",n),i.trigger("pressure "+e.identifier+":pressure",n),o=n)}.bind(i),100)},T.prototype.onstart=function(t){var e=this,n=e.options,i=t;return t=c(t),e.updateBox(),h(t,function(o){e.actives.length<n.maxNumberOfNipples?e.processOnStart(o):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(n){if(Object.values(i.touches).findIndex(function(t){return t.identifier===n})<0){var o=[t[0]];o.identifier=n,e.processOnEnd(o)}}),e.actives.length<n.maxNumberOfNipples&&e.processOnStart(o))}),e.manager.bindDocument(),!1},T.prototype.processOnStart=function(t){var e,n=this,i=n.options,r=n.manager.getIdentifier(t),s=t.force||t.pressure||t.webkitForce||0,a={x:t.pageX,y:t.pageY},c=n.getOrCreate(r,a);c.identifier!==r&&n.manager.removeIdentifier(c.identifier),c.identifier=r;var l=function(e){e.trigger("start",e),n.trigger("start "+e.id+":start",e),e.show(),s>0&&n.pressureFn(t,e,e.identifier),n.processOnMove(t)};if((e=n.idles.indexOf(c))>=0&&n.idles.splice(e,1),n.actives.push(c),n.ids.push(c.identifier),"semi"!==i.mode)l(c);else{if(!(o(a,c.position)<=i.catchDistance))return c.destroy(),void n.processOnStart(t);l(c)}return c},T.prototype.getOrCreate=function(t,e){var n,i=this.options;return/(semi|static)/.test(i.mode)?(n=this.idles[0])?(this.idles.splice(0,1),n):"semi"===i.mode?this.createNipple(e,t):(console.warn("Coudln't find the needed nipple."),!1):n=this.createNipple(e,t)},T.prototype.processOnMove=function(t){var e=this.options,n=this.manager.getIdentifier(t),i=this.nipples.get(n);if(!i)return console.error("Found zombie joystick with ID "+n),void this.manager.removeIdentifier(n);i.identifier=n;var s,a,c,l,u,p,f,h,y=i.options.size/2,m={x:t.pageX,y:t.pageY},v=o(m,i.position),g=(s=m,a=i.position,c=a.x-s.x,l=a.y-s.y,function(t){return t*(180/Math.PI)}(Math.atan2(l,c))),b=r(g),O=v/y,w={distance:v,position:m};v>y&&(v=y,u=i.position,p=v,h={x:0,y:0},f=r(f=g),h.x=u.x-p*Math.cos(f),h.y=u.y-p*Math.sin(f),m=h);var x=m.x-i.position.x,_=m.y-i.position.y;e.lockX&&(_=0),e.lockY&&(x=0),i.frontPosition={x:x,y:_},e.dataOnly||d(i.ui.front,i.frontPosition);var T={identifier:i.identifier,position:m,force:O,pressure:t.force||t.pressure||t.webkitForce||0,distance:v,angle:{radian:b,degree:g},raw:w,instance:i,lockX:e.lockX,lockY:e.lockY};(T=i.computeDirection(T)).angle={radian:r(180-g),degree:180-g},i.trigger("move",T),this.trigger("move "+i.id+":move",T)},T.prototype.processOnEnd=function(t){var e=this,n=e.options,i=e.manager.getIdentifier(t),o=e.nipples.get(i),r=e.manager.removeIdentifier(o.identifier);o&&(n.dataOnly||o.hide(function(){"dynamic"===n.mode&&(o.trigger("removed",o),e.trigger("removed "+o.id+":removed",o),e.manager.trigger("removed "+o.id+":removed",o),o.destroy())}),clearInterval(e.pressureIntervals[o.identifier]),o.resetDirection(),o.trigger("end",o),e.trigger("end "+o.id+":end",o),e.ids.indexOf(o.identifier)>=0&&e.ids.splice(e.ids.indexOf(o.identifier),1),e.actives.indexOf(o)>=0&&e.actives.splice(e.actives.indexOf(o),1),/(semi|static)/.test(n.mode)?e.idles.push(o):e.nipples.indexOf(o)>=0&&e.nipples.splice(e.nipples.indexOf(o),1),e.manager.unbindDocument(),/(semi|static)/.test(n.mode)&&(e.manager.ids[r.id]=r.identifier))},T.prototype.onDestroyed=function(t,e){this.nipples.indexOf(e)>=0&&this.nipples.splice(this.nipples.indexOf(e),1),this.actives.indexOf(e)>=0&&this.actives.splice(this.actives.indexOf(e),1),this.idles.indexOf(e)>=0&&this.idles.splice(this.idles.indexOf(e),1),this.ids.indexOf(e.identifier)>=0&&this.ids.splice(this.ids.indexOf(e.identifier),1),this.manager.removeIdentifier(e.identifier),this.manager.unbindDocument()},T.prototype.destroy=function(){for(var t in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(t){t.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(t)&&clearInterval(this.pressureIntervals[t]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()};var E=T;function k(t){var e,n=this;return n.ids={},n.index=0,n.collections=[],n.config(t),n.prepareCollections(),s(window,"resize",function(t){clearTimeout(e),e=setTimeout(function(){var t,e=l();n.collections.forEach(function(n){n.forEach(function(n){t=n.el.getBoundingClientRect(),n.position={x:e.x+t.left,y:e.y+t.top}})})},100)}),n.collections}k.prototype=new w,k.constructor=k,k.prototype.prepareCollections=function(){var t=this;t.collections.create=t.create.bind(t),t.collections.on=t.on.bind(t),t.collections.off=t.off.bind(t),t.collections.destroy=t.destroy.bind(t),t.collections.get=function(e){var n;return t.collections.every(function(t){return!(n=t.get(e))}),n}},k.prototype.create=function(t){return this.createCollection(t)},k.prototype.createCollection=function(t){var e=new E(this,t);return this.bindCollection(e),this.collections.push(e),e},k.prototype.bindCollection=function(t){var e,n=this,i=function(t,i){e=t.type+" "+i.id+":"+t.type,n.trigger(e,i)};t.on("destroyed",n.onDestroyed.bind(n)),t.on("shown hidden rested dir plain",i),t.on("dir:up dir:right dir:down dir:left",i),t.on("plain:up plain:right plain:down plain:left",i)},k.prototype.bindDocument=function(){this.binded||(this.bindEvt(document,"move").bindEvt(document,"end"),this.binded=!0)},k.prototype.unbindDocument=function(t){Object.keys(this.ids).length&&!0!==t||(this.unbindEvt(document,"move").unbindEvt(document,"end"),this.binded=!1)},k.prototype.getIdentifier=function(t){var e;return t?void 0===(e=void 0===t.identifier?t.pointerId:t.identifier)&&(e=this.latest||0):e=this.index,void 0===this.ids[e]&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]},k.prototype.removeIdentifier=function(t){var e={};for(var n in this.ids)if(this.ids[n]===t){e.id=n,e.identifier=this.ids[n],delete this.ids[n];break}return e},k.prototype.onmove=function(t){return this.onAny("move",t),!1},k.prototype.onend=function(t){return this.onAny("end",t),!1},k.prototype.oncancel=function(t){return this.onAny("end",t),!1},k.prototype.onAny=function(t,e){var n,i=this,o="processOn"+t.charAt(0).toUpperCase()+t.slice(1);return e=c(e),h(e,function(t){n=i.getIdentifier(t),h(i.collections,function(t,e,n){n.ids.indexOf(e)>=0&&(n[o](t),t._found_=!0)}.bind(null,t,n)),t._found_||i.removeIdentifier(n)}),!1},k.prototype.destroy=function(){this.unbindDocument(!0),this.ids={},this.index=0,this.collections.forEach(function(t){t.destroy()}),this.off()},k.prototype.onDestroyed=function(t,e){if(this.collections.indexOf(e)<0)return!1;this.collections.splice(this.collections.indexOf(e),1)};var P=new k;e.default={create:function(t){return P.create(t)},factory:P}}]).default}}]);
//# sourceMappingURL=10.60a53642c82f34cafd2d.bundle.js.map