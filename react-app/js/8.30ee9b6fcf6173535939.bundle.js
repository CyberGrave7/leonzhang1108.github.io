(window.webpackJsonp=window.webpackJsonp||[]).push([[8,36,46,53],{305:function(e,t,n){"use strict";n.r(t);var o=n(11),i=function(e){var t=e.key,n=e.words,i=e.w,r=e.h;this.text=t,this.x=Math.random()*i,this.y=Math.random()*r,this.font=10*n[t]+"px arial",this.speed=(n[t]>5?n[t]-2.5:n[t])+o.a.random(0,5)};t.default=i},306:function(e){e.exports=JSON.parse('{"蒸羊羔儿":10,"蒸熊掌":10,"蒸鹿尾儿":10,"烧花鸭":6,"烧雏鸡":6,"烧子鹅":6,"卤猪":6,"卤鸭":6,"香肠儿":6,"银鱼":6,"清蒸哈什蚂":2,"烩鸭丝":2,"烩鸭腰":2,"清拌鸭丝儿":2,"黄心管儿":2,"焖白鳝":2,"焖黄鳝":2,"豆豉鲇鱼":2,"锅烧鲤鱼":2,"烀烂甲鱼":2,"抓炒鲤鱼":2,"抓炒对虾":2,"软炸里脊":2,"软炸鸡":2,"什锦套肠儿":2,"卤煮寒鸦儿":2,"麻酥油卷儿":2,"熘鲜蘑":2,"熘鱼脯":2,"熘鱼肚":2,"熘鱼片儿":2,"醋熘肉片儿":2,"烩三鲜儿":2,"烩白蘑":2,"烩鸽子蛋":2,"炒银丝":2,"烩鳗鱼":2,"炒白虾":2,"炝青蛤":2,"炒面鱼":2,"炒竹笋":2,"芙蓉燕菜":2,"炒虾仁儿":2,"烩腰花儿":2,"烩海参":2,"炒蹄筋儿":2,"锅烧海参":2,"锅烧白菜":2,"炸木耳":2}')},466:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},i={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},r=[],a=[];function s(e,t,n){e.addEventListener(t,n,!1)}function u(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];for(var r in i)if(r in e){n.push(i[r]);break}}}"AnimationEvent"in window||(delete o.animationstart.animation,delete i.animationend.animation),"TransitionEvent"in window||(delete o.transitionstart.transition,delete i.transitionend.transition),t(o,r),t(i,a)}();var c={startEvents:r,addStartEventListener:function(e,t){0!==r.length?r.forEach((function(n){s(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==r.length&&r.forEach((function(n){u(e,n,t)}))},endEvents:a,addEndEventListener:function(e,t){0!==a.length?a.forEach((function(n){s(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==a.length&&a.forEach((function(n){u(e,n,t)}))}};t.default=c,e.exports=t.default},475:function(e,t,n){},502:function(e,t,n){"use strict";e.exports=r,e.exports.isMobile=r,e.exports.default=r;var o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i;function r(e){e||(e={});var t=e.ua;return t||"undefined"==typeof navigator||(t=navigator.userAgent),t&&t.headers&&"string"==typeof t.headers["user-agent"]&&(t=t.headers["user-agent"]),"string"==typeof t&&(e.tablet?i.test(t):o.test(t))}},503:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=c(n(0)),d=f(n(640)),p=f(n(322)),m=f(n(326)),h=n(641),y=f(n(288)),v=n(642),b=function(e){function t(){var e;return i(this,t),(e=a(this,s(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,o=t[0].target.getBoundingClientRect(),i=o.width,r=o.height,a=Math.floor(i),s=Math.floor(r);if(e.state.width!==a||e.state.height!==s){var u={width:a,height:s};e.setState(u),n&&n(u)}},e.setChildNode=function(t){e.childNode=t},e}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=d.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new y.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=p.default(e);if(t.length>1)m.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return m.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(l.isValidElement(n)&&v.supportRef(n)){var o=n.ref;t[0]=l.cloneElement(n,{ref:h.composeRef(o,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!l.isValidElement(e)||"key"in e&&null!==e.key?e:l.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}])&&r(n.prototype,o),c&&r(n,c),t}(l.Component);b.displayName="ResizeObserver",t.default=b},640:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return i.default.findDOMNode(e)};var o,i=(o=n(3))&&o.__esModule?o:{default:o}},641:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){"function"==typeof e?e(t):"object"===o(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=i,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){i(t,e)}))}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"==typeof e&&e.prototype&&!e.prototype.render)return!1;return!0}},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},77:function(e,t,n){"use strict";n.r(t);var o,i=n(501),r=n.n(i),a=(n(500),n(0)),s=n.n(a),u=(n(475),n(305)),c=n(306),f=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=r.a.Search,d=function(e){function t(t){var n=e.call(this,t)||this;return n.words={},n.onSearch=function(e){console.log(e)},n.initCanvas=function(e){n.words=e;var t=[],o=n.wrapper,i=o.offsetHeight,r=o.offsetWidth,a=n.words,s=n.canvas.getContext("2d");for(var c in n.canvas.width=r,n.canvas.height=i,s.fillStyle="#000",s.globalAlpha=.2,n.words)c&&t.push(new u.default({key:c,words:a,w:r,h:i}));var f=function(){t.forEach((function(e,n){s.font=t[n].font,s.fillText(t[n].text,t[n].x,t[n].y),t[n].width=s.measureText(t[n].text).width,s.stroke()})),t.forEach((function(e,n){t[n].x>r?(t[n].x=-t[n].width,t[n].y=Math.random()*i):t[n].x+=t[n].speed}))},l=function(){s.clearRect(0,0,r,i),f()};if(requestAnimationFrame){var d=function(){l(),requestAnimationFrame(d)};d()}else n.interval=setInterval(l,24)},n.state={loaded:!1},n}return f(t,e),t.prototype.componentDidMount=function(){var e=this;this.setState({loaded:!0},(function(){return e.initCanvas(c)}))},t.prototype.componentWillUnmount=function(){clearInterval(this.interval)},t.prototype.render=function(){var e=this,t=this.state.loaded;return s.a.createElement("div",{className:"food-wrapper",ref:function(t){return e.wrapper=t}},"loaded ? (",s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"input"},s.a.createElement(l,{placeholder:"food you want",enterButton:"Add",size:"large",onSearch:this.onSearch})),s.a.createElement("canvas",{id:"c",className:"canvas",ref:function(t){return e.canvas=t},style:{opacity:t?1:0}})),") : (",s.a.createElement("div",{className:"loader"}),"}")},t}(s.a.Component);t.default=d}}]);
//# sourceMappingURL=8.30ee9b6fcf6173535939.bundle.js.map