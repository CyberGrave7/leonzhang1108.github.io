(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{72:function(n,t,r){"use strict";r.r(t);var a=r(11),o=r(0),e=r.n(o),i=function(){return(i=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},u=function(n,t){return Array(n).fill(null).map((function(n,r){return t(r)}))},c=function(n,t){return{age:0,phase:"fly",x:Math.floor(Math.random()*n),y:t}},f=function(n){return u(n,(function(n){var t=5*Math.random()+.5,r=5*Math.random()+.5;return{blue:Math.floor(2*Math.random()),green:Math.floor(2*Math.random()),red:Math.floor(2*Math.random()),vx:Math.random()>.5?-t:t,vy:Math.random()>.5?-r:r,weight:.3*Math.random()+.03}}))},h=function(n,t,r,a){return void 0===n&&(n=0),void 0===t&&(t=0),void 0===r&&(r=0),void 0===a&&(a=1),"rgba("+[n,t,r,a].join(",")+")"},d=function(n,t,r,a){n.beginPath(),n.fillStyle=h.apply(void 0,a),n.rect(t,r,5,5),n.fill()},l=function(n){var t=n.background,r=n.width,a=void 0===r?0:r,o=n.height,h=void 0===o?0:o,l=n.maxFireworks,p=void 0===l?0:l,s=n.maxSparks,m=void 0===s?0:s,v=e.a.useRef(null),g=e.a.useState(function(n,t,r,a){return u(r,(function(){return i(i({},c(n,t)),{sparks:f(a)})}))}(a,h,p,m)),M=g[0],y=g[1];return e.a.useEffect((function(){var n=v.current.getContext("2d");n.clearRect(0,0,a,h),y(M.map((function(t,r){return function(n,t,r){var a=t.phase,o=t.sparks,e=t.age,i=t.x,c=t.y;"fly"!==a?o.forEach((function(t){u(10,(function(r){var a=e+r,o=20*r-2*e;d(n,i+t.vx*a,c+t.vy*a+Math.pow(t.weight*a,2),["red","green","blue"].map((function(n){return Math.floor(t[n]*o)})))}))})):u(15,(function(t){d(n,i+Math.random()*t-t/2,c+5*t,[50*r,17*t])}))}(n,t,r),function(n,t,r){if("explode"===r.phase){var a=r.age>100&&Math.random()<.05?c(n,t):{};return i(i(i({},r),{age:r.age+1}),a)}var o=Math.random()<.001||r.y<200?"explode":r.phase;return i(i({},r),{y:r.y-10,phase:o})}(a,h,t)})))})),e.a.createElement("canvas",{ref:v,width:a,height:h,style:{background:t}})};l.defaultProps={background:"black",maxFireworks:5,maxSparks:77},t.default=a.a.connect({component:l,mapStateToProps:function(n){return{width:n.common.contentWidth,height:n.common.contentHeight}}})}}]);
//# sourceMappingURL=28.bb583e221e605d9888e6.bundle.js.map