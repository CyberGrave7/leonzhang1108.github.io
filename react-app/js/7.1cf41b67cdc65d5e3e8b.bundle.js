(window.webpackJsonp=window.webpackJsonp||[]).push([[7,32,37,38,39,40,41,58],{314:function(t,e,n){"use strict";n.r(e);var r,o=n(500),a=n.n(o),i=(n(499),n(1)),s=n.n(i),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this.props,e=t.percent,n=t.formatPercent,r=t.loadingFail;return s.a.createElement("div",{className:"loading-mask"},0!==e||r?r?"":s.a.createElement(a.a,{type:"circle",percent:Number(e)?e:0,format:n,status:r?"exception":100===Number(e)?"success":"active",className:r||100!==Number(e)?"":"loading"}):s.a.createElement("div",{className:"loader"}))},e}(s.a.Component);e.default=u},315:function(t,e,n){"use strict";n.r(e);var r,o=n(1),a=n.n(o),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.doInterval=function(){e.interval=setInterval(function(){e.intervalContent()},3e3)},e.intervalContent=function(){var t=e.state,n=t.onOff,r=t.offsetWidth;e.setState({onOff:!n,offset:n?0:r})},e.clearInterval=function(){e.interval&&clearInterval(e.interval)},e}return i(e,t),e.prototype.componentWillMount=function(){this.setState({width:0,offset:0,onOff:!1,offsetWidth:0})},e.prototype.componentDidMount=function(){this.setState({wrapperWidth:this.wrapper.offsetWidth}),this.doInterval()},e.prototype.componentWillUnmount=function(){this.clearInterval()},e.prototype.componentWillReceiveProps=function(){var t=this.state.width;if(this.dom.offsetWidth!==t){var e=this.wrapper.offsetWidth-this.dom.offsetWidth;e=e<=0?e:0,this.setState({width:this.dom.offsetWidth,offsetWidth:e,onOff:!1})}},e.prototype.render=function(){var t=this,e=this.props.musicName,n=this.state,r=n.offset,o=n.offsetWidth;return a.a.createElement("div",{className:"music-name "+(0===o?"flex":""),ref:function(e){t.wrapper=e}},a.a.createElement("div",{style:{transform:"translateX("+r+"px)"},className:"content",ref:function(e){t.dom=e}},e))},e}(a.a.Component);e.default=s},316:function(t,e,n){"use strict";n.r(e);var r,o=n(474),a=n.n(o),i=(n(473),n(1)),s=n.n(i),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this.props,e=t.totalTime,n=t.slideDuration,r=t.durationOffset,o=t.curr,i=t.durationChanging,c=t.durationChanged,u=t.formatTime;return s.a.createElement("div",{className:"time-zone"},s.a.createElement(a.a,{className:"duration-slider",value:e?(parseInt((n||r)+"",10)+o)%100:0,onChange:i,onAfterChange:c,tipFormatter:null}),s.a.createElement("div",null,u()))},e}(s.a.Component);e.default=u},317:function(t,e,n){"use strict";n.r(e),e.default={draw:function(t){var e=t.ctx,n=t.height,r=t.width,o=t.bars,a=t.barColor;return function(t,i){var s=i;if(e.clearRect(0,0,r,n),Array.isArray(a)){var c=e.createLinearGradient(0,0,0,n),u=a.length;a.forEach(function(t,e){c.addColorStop(e/(u-1),t)}),e.fillStyle=c}else e.fillStyle=a;for(var l=r/o,f=.5*l,p=Math.min(f,10)*s,d=0;d<o;d++){var h=t[d]/256*n*s,m=t[d]>0?Math.min(h+40,n-p):0;e.fillRect(l*d,n-h,f,h),e.fillRect(l*d,n-(m+p),f,p)}}}}},318:function(t,e,n){"use strict";n.r(e);var r=n(126),o=n.n(r),a=function(t){var e=this,n=t.draw,r=t.size,a=t.volume,i=t.currentTime;this.initAC=function(){e.ac=new AudioContext,e.gainNode=e.ac.createGain(),e.gainNode.gain.value=e.volume,e.gainNode.connect(e.ac.destination),e.analyser=e.ac.createAnalyser(),e.analyser.fftSize=2*e.size,e.analyser.connect(e.gainNode)},this.load=function(t,n,r){e.abort(),o()({url:t,responseType:"arraybuffer",onDownloadProgress:function(t){var e=t.loaded,n=t.total;r(e/n*100)},cancelToken:new o.a.CancelToken(function(t){e.axiosCancellation=t})}).then(function(t){n(t.data)}).catch(function(t){o.a.isCancel(t)?console.log("Request canceled",t.message):r("error")})},this.abort=function(){return e.axiosCancellation&&e.axiosCancellation("abort")},this.play=function(t){var n=t.src,r=t.cb,o=t.progressCb,a=++e.count;e.source&&e.source.stop();var i=function(t){if(e.buffer=t,a===e.count&&e.ac)try{e.createBufferSource({buffer:t},r)}catch(t){console.log(t)}};n instanceof ArrayBuffer?e.ac.decodeAudioData(n,i):e.load(n,function(t){e.ac.decodeAudioData(t,i)},o)},this.createBufferSource=function(t,n){var r=t.buffer,o=t.start,a=void 0===o?0:o;if(e.source&&e.source.stop(),e.buffer){var i=e.ac.createBufferSource();i.buffer=e.buffer=r,i.loop=!0,i.connect(e.analyser),i.start(0,a),e.source=i,e.visualize(),n&&n()}},this.updateVolume=function(t){console.log(t),e.gainNode.gain.value=e.volume=t},this.visualize=function(){var t=new Uint8Array(e.analyser.frequencyBinCount),n=window.requestAnimationFrame,r=function(){e.analyser.getByteFrequencyData(t),e.draw(t,e.volume),e.rafId=n(r)};r()},this.setCurrent=function(t){void 0===t&&(t=0);var n=e.buffer;e.curr=0,e.createBufferSource({buffer:n,start:t}),e.setInterval(!0)},this.setInterval=function(t){e.interval&&clearInterval(e.interval),t&&e.setCurrTime(t),e.interval=setInterval(function(){e.setCurrTime()},1e3)},this.setCurrTime=function(t){var n=e.buffer?e.buffer.duration.toFixed(0):0;e.currentTime({curr:t?0:++e.curr,total:n})},this.pause=function(){e.ac.suspend(),window.cancelAnimationFrame(e.rafId),e.interval&&clearInterval(e.interval)},this.resume=function(){e.ac.resume(),e.visualize(),e.setInterval()},this.stop=function(){e.abort(),e.ac.close(),window.cancelAnimationFrame(e.rafId)},this.source=null,this.count=0,this.draw=n,this.size=r,this.volume=a,this.currentTime=i,this.initAC()};e.default=a},319:function(t,e,n){"use strict";n.r(e);var r,o=n(474),a=n.n(o),i=(n(473),n(1)),s=n.n(i),c=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this.props,e=t.changeVolume,n=t.togglePause,r=t.pause,o=t.setMute,i=t.mute;return s.a.createElement("div",{className:"volume-zone"},s.a.createElement("div",{className:"icon anticon anticon-ts-app icon-"+(i?"mute":"volume"),onClick:o}),s.a.createElement(a.a,{className:"slider",defaultValue:77,onChange:e,tipFormatter:null,disabled:i}),s.a.createElement("div",{onClick:n,className:"icon anticon anticon-ts-app icon-"+(r?"play":"pause")}))},e}(s.a.Component);e.default=u},488:function(t,e,n){},501:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){return function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,c(n).apply(this,arguments))}var r,o,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,t),r=n,(o=[{key:"componentDidUpdate",value:function(){var t=this,e=Date.now(),n=!1;Object.keys(this.paths).forEach(function(r){var o=t.paths[r];if(o){n=!0;var a=o.style;a.transitionDuration=".3s, .3s, .3s, .06s",t.prevTimeStamp&&e-t.prevTimeStamp<100&&(a.transitionDuration="0s, 0s")}}),n&&(this.prevTimeStamp=Date.now())}},{key:"render",value:function(){return s(c(n.prototype),"render",this).call(this)}}])&&a(r.prototype,o),l&&a(r,l),n}()},f=n(0),p=n.n(f),d={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},h=p.a.oneOfType([p.a.number,p.a.string]),m={className:p.a.string,percent:p.a.oneOfType([h,p.a.arrayOf(h)]),prefixCls:p.a.string,strokeColor:p.a.oneOfType([p.a.string,p.a.arrayOf(p.a.string),p.a.object]),strokeLinecap:p.a.oneOf(["butt","round","square"]),strokeWidth:h,style:p.a.object,trailColor:p.a.string,trailWidth:h};function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var C=function(t){function e(){var t,n,r,o,a,i,s;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];return r=this,n=!(o=(t=b(e)).call.apply(t,[this].concat(u)))||"object"!=typeof o&&"function"!=typeof o?O(r):o,a=O(n),s={},(i="paths")in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,n}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=e.percent,a=e.prefixCls,i=e.strokeColor,s=e.strokeLinecap,c=e.strokeWidth,u=e.style,l=e.trailColor,f=e.trailWidth,p=e.transition,d=v(e,["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"]);delete d.gapPosition;var h=Array.isArray(r)?r:[r],m=Array.isArray(i)?i:[i],g=c/2,b=100-c/2,O="M ".concat("round"===s?g:0,",").concat(g,"\n           L ").concat("round"===s?b:100,",").concat(g),w="0 0 100 ".concat(c),C=0;return o.a.createElement("svg",y({className:"".concat(a,"-line ").concat(n),viewBox:w,preserveAspectRatio:"none",style:u},d),o.a.createElement("path",{className:"".concat(a,"-line-trail"),d:O,strokeLinecap:s,stroke:l,strokeWidth:f||c,fillOpacity:"0"}),h.map(function(e,n){var r={strokeDasharray:"".concat(e,"px, 100px"),strokeDashoffset:"-".concat(C,"px"),transition:p||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},i=m[n]||m[m.length-1];return C+=e,o.a.createElement("path",{key:n,className:"".concat(a,"-line-path"),d:O,strokeLinecap:s,stroke:i,strokeWidth:c,fillOpacity:"0",ref:function(e){t.paths[n]=e},style:r})}))}}])&&g(n.prototype,a),i&&g(n,i),e}();C.propTypes=m,C.defaultProps=d;var k=l(C);function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){x(t,e,n[e])})}return t}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t,e){return(N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=50-r/2,i=0,s=-a,c=0,u=-2*a;switch(arguments.length>5?arguments[5]:void 0){case"left":i=-a,s=0,c=2*a,u=0;break;case"right":i=a,s=0,c=-2*a,u=0;break;case"bottom":s=a,u=2*a}var l="M 50,50 m ".concat(i,",").concat(s,"\n   a ").concat(a,",").concat(a," 0 1 1 ").concat(c,",").concat(-u,"\n   a ").concat(a,",").concat(a," 0 1 1 ").concat(-c,",").concat(u),f=2*Math.PI*a;return{pathString:l,pathStyle:{stroke:n,strokeDasharray:"".concat(e/100*(f-o),"px ").concat(f,"px"),strokeDashoffset:"-".concat(o/2+t/100*(f-o),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}}}var W=function(t){function e(){var t,n,r,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=this,n=!(o=(t=T(e)).call.apply(t,[this].concat(i)))||"object"!=typeof o&&"function"!=typeof o?E(r):o,x(E(n),"paths",{}),n}var n,a,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&N(t,e)}(e,r["Component"]),n=e,(a=[{key:"getStokeList",value:function(){var t=this,e=this.props,n=e.prefixCls,r=e.percent,a=e.strokeColor,i=e.strokeWidth,s=e.strokeLinecap,c=e.gapDegree,u=e.gapPosition,l=Array.isArray(r)?r:[r],f=Array.isArray(a)?a:[a],p="[object Object]"===Object.prototype.toString.call(a)?"url(#gradient)":"",d=0;return l.map(function(e,r){var a=f[r]||f[f.length-1],l=A(d,e,a,i,c,u),h=l.pathString,m=l.pathStyle;return d+=e,o.a.createElement("path",{key:r,className:"".concat(n,"-circle-path"),d:h,stroke:p,strokeLinecap:s,strokeWidth:0===e?0:i,fillOpacity:"0",style:m,ref:function(e){t.paths[r]=e}})})}},{key:"render",value:function(){var t=this.props,e=t.prefixCls,n=t.strokeWidth,r=t.trailWidth,a=t.gapDegree,i=t.gapPosition,s=t.trailColor,c=t.strokeLinecap,u=t.style,l=t.className,f=t.strokeColor,p=P(t,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor"]),d=A(0,100,s,n,a,i),h=d.pathString,m=d.pathStyle;delete p.percent;var y="[object Object]"===Object.prototype.toString.call(f);return o.a.createElement("svg",j({className:"".concat(e,"-circle ").concat(l),viewBox:"0 0 100 100",style:u},p),y&&o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"gradient",x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(f).map(function(t,e){return o.a.createElement("stop",{key:e,offset:t,stopColor:f[t]})}))),o.a.createElement("path",{className:"".concat(e,"-circle-trail"),d:h,stroke:s,strokeLinecap:c,strokeWidth:r||n,fillOpacity:"0",style:m}),this.getStokeList().reverse())}}])&&S(n.prototype,a),i&&S(n,i),e}();W.propTypes=_({},m,{gapPosition:p.a.oneOf(["top","bottom","left","right"])}),W.defaultProps=_({},d,{gapPosition:"top"});var D=l(W);n.d(e,"Line",function(){return k}),n.d(e,"Circle",function(){return D});e.default={Line:k,Circle:D}},84:function(t,e,n){"use strict";n.r(e);var r,o=n(10),a=n(1),i=n(314),s=n(315),c=(n(488),n(316)),u=n(317),l=n(318),f=n(319),p=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});window.AudioContext=window.AudioContext||void 0;var d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.visibilityChange=function(){var t=e.state.visualizer;"hidden"===document.visibilityState?(t.pause(),e.setState({pause:!0})):(t.resume(),e.setState({pause:!1}))},e.resize=function(){var t=e.state,n=t.width,r=t.height,o=e.canvas;o.width=n,o.height=r},e.play=function(t){var n=e.state.src;t?e.state.visualizer.play(t):o.a.isString(n)&&e.state.visualizer.play({src:n,cb:e.afterLoading,progressCb:e.progress})},e.progress=function(t){e.mounted&&(isNaN(t)?e.setState({percent:0,loadingFail:!0,showAdd:!0}):e.setState({percent:t,showAdd:!0}))},e.afterLoading=function(){e.setState({loading:!1,showAdd:!0},function(){e.state.visualizer.setCurrent(0)})},e.restartVisualizer=function(){if(e.state.compatible){var t=e.canvas.getContext("2d"),n=e.state,r=n.height,o=n.width,a=n.bars,i=n.barColor,s=n.volume,c={ctx:t,height:r,width:o,bars:a,barColor:i},f=e.currentTime;e.setState({visualizer:new l.default({size:a,draw:u.default.draw(c),volume:s,currentTime:f})},e.play),e.resize()}},e.currentTime=function(t){var n=t.curr,r=t.total;e.mounted&&e.setState({currentTime:n,totalTime:r})},e.changeVolume=function(t){e.state.visualizer.updateVolume(t/100)},e.togglePause=function(){var t=e.state,n=t.visualizer,r=t.pause;r?n.resume():n.pause(),e.setState({pause:!r})},e.formatPercent=function(t){return 100===t?"decoding":e.state.loadingFail?"↓":t.toFixed(1)+"%"},e.formatTime=function(){var t=e.state,n=t.currentTime,r=t.totalTime,a=t.durationOffset,i=t.slideDuration;return o.a.secondFormatToTime(r?(n%r+e.durationToSecond(i||a))%r:0)+" / "+o.a.secondFormatToTime(r)},e.durationChanging=function(t){e.setState({slideDuration:t,currentTime:0})},e.durationChanged=function(t){e.setState({slideDuration:null,durationOffset:t,pause:!1,currentTime:0},function(){e.state.visualizer.setCurrent(e.durationToSecond(t)),e.state.visualizer.resume()})},e.durationToSecond=function(t){return parseInt((t/100*e.state.totalTime).toFixed(0),10)},e.fileChange=function(){e.input.files[0]&&(e.state.visualizer.abort(),e.setState({showAdd:!1,percent:0},function(){var t=new FileReader,n=e.input.files[0].name;t.readAsArrayBuffer(e.input.files[0]),t.onload=function(t){e.play({src:t.currentTarget.result,cb:e.afterLoading,progressCb:e.progress}),e.setState({loadingFail:!1,loading:!0,durationOffset:0,musicName:n})}}))},e.setMute=function(){var t=e.state.mute;e.setState({mute:!t},function(){var t=e.state,n=t.mute,r=t.volume;e.changeVolume(n?0:100*r)})},e}return p(e,t),e.prototype.componentWillMount=function(){document.addEventListener("visibilitychange",this.visibilityChange),this.setState({src:"NoMusic",bars:64,barColor:["gold","aqua"],height:this.props.isMobile?.5*this.props.h:400,width:this.props.isMobile?300:600,pause:!1,volume:.77,loading:!0,percent:0,totalTime:0,currentTime:0,durationOffset:0,slideDuration:null,loadingFail:!1,compatible:!!window.AudioContext,showAdd:!1,musicName:"",mute:!1}),this.mounted=!0},e.prototype.componentDidMount=function(){this.restartVisualizer()},e.prototype.componentWillUnmount=function(){this.state.visualizer.stop(),document.removeEventListener("visibilitychange",this.visibilityChange),this.mounted=!1},e.prototype.render=function(){var t=this,e=this.state,n=e.pause,r=e.loading,o=e.percent,u=e.durationOffset,l=e.slideDuration,p=e.currentTime,d=e.totalTime,h=e.loadingFail,m=e.compatible,y=e.showAdd,v=e.musicName,g=e.mute;if(!m)return a.createElement("div",{className:"music-visualizer"},"not compatible");var b=d?parseInt((p%d/d*100).toFixed(0),10):0;return a.createElement("div",{className:"music-visualizer "+(r?"loading":"loaded")},a.createElement("canvas",{ref:function(e){t.canvas=e}}),a.createElement(s.default,{musicName:v}),r?"":a.createElement(f.default,{pause:n,mute:g,setMute:this.setMute,togglePause:this.togglePause,changeVolume:this.changeVolume}),r?"":a.createElement(c.default,{curr:b,totalTime:d,formatTime:this.formatTime,slideDuration:l,durationOffset:u,durationChanged:this.durationChanged,durationChanging:this.durationChanging}),r?a.createElement(i.default,{percent:o,formatPercent:this.formatPercent,loadingFail:h}):"",a.createElement("a",{href:"javascript:;",className:"upload "+(y?"":"disappear")},a.createElement("div",{className:"anticon anticon-ts-app icon-add"}),a.createElement("input",{className:"change",ref:function(e){t.input=e},type:"file",accept:"audio/mpeg",onChange:this.fileChange})))},e}(a.Component);e.default=o.a.connect({component:d,mapStateToProps:function(t){return{isMobile:t.common.isMobile,h:t.common.contentHeight}}})}}]);
//# sourceMappingURL=7.1cf41b67cdc65d5e3e8b.bundle.js.map