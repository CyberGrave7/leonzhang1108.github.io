(window.webpackJsonp=window.webpackJsonp||[]).push([[19,48],{474:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var o,a=n(472),r=n.n(a),l=(n(471),n(724)),c=n(598),i=n.n(c),u=n(1),p=n.n(u),s=(n(474),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.changeVolume=function(t){return e.setState({point:t/100*5})},e}return s(e,t),e.prototype.componentWillMount=function(){this.setState({point:3.5})},e.prototype.componentDidMount=function(){var t=Array.from(document.querySelectorAll(".bat-logo path")).map(function(t){return t.getAttribute("d")}),e=function(n){var o=t.shift()||"",a=t[0];t.push(o),n.datum({start:o,end:a}).transition().duration(1500).attrTween("d",function(t){return i.a.interpolate(t.start,t.end,{maxSegmentLength:.1})}).on("end",function(){return n.call(e)})};l.b(".bat-logo path").filter(function(t,e){return e}).remove(),l.a(".bat-logo path").style("display","block").call(e)},e.prototype.componentWillUnmount=function(){l.b("path").transition()},e.prototype.render=function(){var t=this.state.point;return p.a.createElement("div",{className:"bat-logo-wrapper"},p.a.createElement("svg",{className:"bat-logo",xmlns:"http://www.w3.org/2000/svg"},p.a.createElement("g",{transform:"scale(10)"},p.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),p.a.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),p.a.createElement("path",{d:"M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"}))),p.a.createElement("meter",{className:"meter",min:"0",max:"5",value:t}),p.a.createElement(r.a,{className:"slider",defaultValue:20*t,onChange:this.changeVolume,tipFormatter:null}),p.a.createElement("div",{className:"ants-border"},"ants border"))},e}(p.a.Component);e.default=m}}]);
//# sourceMappingURL=19.0a00649840a4604132c8.bundle.js.map