(window.webpackJsonp=window.webpackJsonp||[]).push([[24,58],{302:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var i,r=n(1),o=(n(302),i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(){return(a=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.randomBoolean=function(){return Math.random()-.5>0},e.initState=function(){e.setState({list:[],top:0,contentHeight:0,visibleHeight:0,visibleData:[],offset:10,interval:2})},e.calculateOffset=function(t){var n=e.state.list;if(t!==n.length){if(n[t].offsetTop)return n[t].offsetTop;var i=n[t].height;return i+=e.calculateOffset(t-1),n[t]=a({},n[t],{offsetTop:i}),e.setState({list:n}),i}},e.doCalculate=function(t){var n=e.state,i=n.list,r=n.offset,o=t-=r;t=t>0?t:0;var a=e.findEndIndex(t)+2*r+1;return a=(a=o<0?a+o:a)>i.length?i.length:a,{visibleData:i.slice(t,a),top:e.findTopByIndex(t)}},e.findTopByIndex=function(t){return t?e.state.list[t-1].offsetTop:0},e.findStartIndex=function(t){for(var n=e.state.list,i=0;i<n.length&&(n[i].offsetTop||e.calculateOffset(i),!(t<n[i].offsetTop));)i++;return i},e.findEndIndex=function(t){var n=e.state.visibleHeight,i=e.state.list;if(i[t].endIndex)return i[t].endIndex;n=n||e.wrapper.clientHeight;var r=e.calculateEndIndex(n,t);return i[t].endIndex=r,e.setState({list:i}),r},e.calculateEndIndex=function(t,n){void 0===n&&(n=0);for(var i=e.state.list;t>0;){if(n+1===i.length)break;t-=i[++n].height}return n},e.scrollHandler=function(t){var n=e.state.interval,i=e.findStartIndex(t.target.scrollTop);i%n==0&&e.setState(e.doCalculate(i))},e}return o(e,t),e.prototype.componentWillMount=function(){this.initState();for(var t=[],e=0;e<777;e++){var n=this.randomBoolean()?60:30,i={val:e,height:n};e||(i.offsetTop=n),t.push(i)}var r=t.reduce(function(t,e){return t+e.height},0);this.setState({list:t,contentHeight:r})},e.prototype.componentDidMount=function(){var t=this.wrapper.clientHeight;this.setState(a({visibleHeight:t},this.doCalculate(0)))},e.prototype.render=function(){var t=this,e=this.state,n=e.visibleData,i=e.contentHeight,o=e.top;return r.createElement("div",{className:"infinite-list-wrapper",onScroll:this.scrollHandler,ref:function(e){t.wrapper=e}},r.createElement("div",{className:"infinite-list-ghost",style:{height:i}}),r.createElement("div",{className:"infinite-list",style:{transform:"translate3d(0, "+o+"px, 0)"}},n.map(function(t,e){var n={height:t.height+"px",lineHeight:t.height+"px"};return r.createElement("div",{className:"item",key:e,style:n},"item-"+t.val)})))},e}(r.Component);e.default=s}}]);
//# sourceMappingURL=24.bd801ccaeaaa6a44e3dc.bundle.js.map