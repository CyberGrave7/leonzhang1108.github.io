(window.webpackJsonp=window.webpackJsonp||[]).push([[8,28,29,30,31,36,56],{304:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=function(){return(i=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},o=function(t,e,n){var a=n.transformRow&&n.transformRow.start<=e&&n.transformRow.end>=e;return r.a.createElement("ul",{className:"row "+(a?"row-transform":""),key:e},t.map(function(t,i){return function(t,e,n,a,i){var o=a.transformCol&&a.transformCol.start<=e&&a.transformCol.end>=e;return r.a.createElement("li",{className:"\n        col\n        "+(o?"col-transform":"")+"\n        "+(a.hilightList&&1===a.hilightList[n][e]?"hilight":"")+"\n      ",key:e},a.editable?r.a.createElement("input",{type:"text",value:t,"data-row":n,"data-col":e,"data-ventor":a.ventor,onChange:a.onInput,onBlur:a.onBlur}):r.a.createElement("span",{style:{transform:"rotate("+(a.rotate?"90deg":"0")+")"},className:""!==t?"show":""},t),a.hasShadow?r.a.createElement("div",{className:"shadow "+(i?"show":"")},"×"):"")}(t,i,e,n,a)}))};e.default=function(t){return r.a.createElement("table",{className:t.ventorList?"show":"",style:i({transform:"\n      rotate("+(t.rotate?"-90deg":"0")+")\n      translateX("+(t.left||0)+"px)\n      translateY("+(-t.top||0)+"px)"},t.style)},r.a.createElement("tbody",null,r.a.createElement("tr",null,function(t){return t.ventorList?r.a.createElement("td",null,r.a.createElement("div",{className:"border-left"}),t.ventorList.map(function(e,n){return o(e,n,t)}),r.a.createElement("div",{className:"border-right"})):r.a.createElement("td",null)}(t))))}},309:function(t,e,n){"use strict";n.r(e);var a,r=n(1),i=n.n(r),o=n(304),s=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t=this.props,e=t.opacity,n=t.btnEdit;return i.a.createElement("div",{className:"v-wrapper"},i.a.createElement("div",{className:"btn-wrapper vertical left",style:{opacity:e}},i.a.createElement("div",{className:"btn","data-id":"1",onClick:n},"-"),i.a.createElement("div",{className:"btn","data-id":"2",onClick:n},"+")),i.a.createElement("div",{className:"v-inner"},i.a.createElement(o.default,l({},this.props,{ventor:"v1",hasShadow:!0})),i.a.createElement("div",{className:"btn-wrapper horizontal",style:{opacity:e}},i.a.createElement("div",{className:"btn","data-id":"3",onClick:n},"-"),i.a.createElement("div",{className:"btn","data-id":"4",onClick:n},"+"))))},e}(i.a.Component);e.default=c},310:function(t,e,n){"use strict";n.r(e);var a,r=n(1),i=n.n(r),o=n(304),s=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),l=function(){return(l=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t=this.props,e=t.opacity,n=t.btnEdit,a=t.v2Opacity;return i.a.createElement("div",{className:"v-wrapper"},i.a.createElement("div",{className:"v-inner"},i.a.createElement("div",{className:"display",style:{opacity:a}},i.a.createElement(o.default,l({},this.props,{ventor:"v2"}))),i.a.createElement("div",{className:"btn-wrapper horizontal",style:{opacity:e}},i.a.createElement("div",{className:"btn","data-id":"5",onClick:n},"-"),i.a.createElement("div",{className:"btn","data-id":"6",onClick:n},"+"))),i.a.createElement("div",{className:"btn-wrapper vertical right",style:{opacity:e}},i.a.createElement("div",{className:"btn","data-id":"3",onClick:n},"-"),i.a.createElement("div",{className:"btn","data-id":"4",onClick:n},"+")))},e}(i.a.Component);e.default=c},311:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(304),o=function(t){return{width:2===t.step?t.width:0,opacity:2===t.step?1:0}};e.default=function(t){return r.a.createElement("div",{className:"display",style:o(t)},r.a.createElement(i.default,{ventorList:t.ventorList}))}},312:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(304),o=function(){return(o=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};e.default=function(t){return r.a.createElement("div",{className:"result"},r.a.createElement(i.default,o({},t)))}},469:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},r={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],o=[];function s(t,e,n){t.addEventListener(e,n,!1)}function l(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var a in e)if(e.hasOwnProperty(a)){var r=e[a];for(var i in r)if(i in t){n.push(r[i]);break}}}"AnimationEvent"in window||(delete a.animationstart.animation,delete r.animationend.animation),"TransitionEvent"in window||(delete a.transitionstart.transition,delete r.transitionend.transition),e(a,i),e(r,o)}();var c={startEvents:i,addStartEventListener:function(t,e){0!==i.length?i.forEach(function(n){s(t,n,e)}):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==i.length&&i.forEach(function(n){l(t,n,e)})},endEvents:o,addEndEventListener:function(t,e){0!==o.length?o.forEach(function(n){s(t,n,e)}):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==o.length&&o.forEach(function(n){l(t,n,e)})}};e.default=c,t.exports=e.default},484:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var a,r=n(11),i=n(55),o=n.n(i),s=(n(54),n(1)),l=n.n(s),c=n(6),u=n.n(c),f=(n(484),n(309)),d=n(310),p=n(311),h=n(312),m=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),v=function(){return(v=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},b=function(t,e,n,a){return new(n||(n=Promise))(function(r,i){function o(t){try{l(a.next(t))}catch(t){i(t)}}function s(t){try{l(a.throw(t))}catch(t){i(t)}}function l(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(o,s)}l((a=a.apply(t,e||[])).next())})},y=function(t,e){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},w=function(t){function e(e){var n=t.call(this,e)||this;return n.getMatrix=function(){for(var t=n.props.isMobile?1:6,e=[],a=0;a<t;a++){for(var r=[],i=0;i<t;i++)r.push(1);e.push(r)}return e},n.onInput=function(t){var e,a=n.getInputValue(t),r=a.v,i=a.col;r[a.row][i]=t.target.value,n.setState(((e={})[r]=r,e))},n.onBlur=function(t){var e,a=n.getInputValue(t),r=a.v,i=a.col,o=a.row;r[o][i]=n.isNumber(t.target.value)?r[o][i]="0"!==t.target.value?t.target.value.replace(/\b(0+)/gi,""):t.target.value:1,n.setState(((e={})[r]=r,e))},n.getInputValue=function(t){var e=t.target.getAttribute("data-col"),a=t.target.getAttribute("data-row"),r=t.target.getAttribute("data-ventor");return{v:n.state[r],col:e,row:a}},n.isNumber=function(t){return!(null===/^(-)?\d+(\.\d+)?$/.exec(t)||""===t)},n.doClick=function(){switch(n.state.step){case 0:n.doMultiply();break;case 1:n.doStep();break;case 2:n.reset();break;default:n.doMultiply()}},n.doAutoComplete=function(){return b(n,void 0,void 0,function(){var t,e,n;return y(this,function(a){switch(a.label){case 0:return t=this.state,e=t.level,n=t.step,e>=0&&1===n?[4,this.doStep()]:[3,2];case 1:a.sent(),this.doAutoComplete(),a.label=2;case 2:return[2]}})})},n.doStep=function(){return b(n,void 0,void 0,function(){var t=this;return y(this,function(e){switch(e.label){case 0:return[4,new Promise(function(e){var n=t.state,a=n.level,r=n.height1,i=n.width1,o=n.height2,s=n.width2,l=n.cubeSize,c=r/2+i/2+(s-o)/2-2,u=t.state.v1.length+t.state.v2[0].length-1,f=a-1,d=u-f-(s-2)/l,p=u-f-(r-2)/l,h=u-f-1;a?(t.setState({left:c-l*(u-f),level:f,transformRow:{start:d,end:h},transformCol:{start:p,end:h},bottomDisable:!0}),t.doCalculate(u-f),setTimeout(function(){t.setState({bottomDisable:!1}),e()},300)):(t.setState({left:t.state.left-l,v3Hilight:t.refreshV3Hilight(),transformRow:{start:d,end:h},transformCol:{start:p,end:h},v2Opacity:0,bottomDisable:!0}),setTimeout(function(){t.setState({step:2,transformRow:void 0,transformCol:void 0,rotate:!1,top:0,left:0,bottomDisable:!1}),e()},600))})];case 1:return e.sent(),[2]}})})},n.doMultiply=function(){var t=u.a.findDOMNode(n.dom),e=u.a.findDOMNode(n.dom2),a=u.a.findDOMNode(n.span),r=t.offsetHeight,i=t.offsetWidth,o=e.offsetHeight,s=e.offsetWidth,l=a.offsetWidth;n.setState({top:r/2+i/2+n.state.offset,editable:!1,bottomDisable:!0,step:1,height1:r,width1:i,height2:o,width2:s}),setTimeout(function(){n.setState({top:i+(s-o)/2+l,left:r/2+i/2+(s-o)/2+n.state.offset,rotate:!0,level:n.state.v1.length+n.state.v2[0].length-1,bottomDisable:!1}),n.doCalculateV3Size()},600)},n.doCalculateV3Size=function(){var t=n.state,e=t.v1,a=t.v2,r=[],i=[];e.forEach(function(){var t=[];a[0].forEach(function(){return t.push("")}),r.push(t),i.push(t.map(function(){return 0}))}),n.setState({v3:r,v3Hilight:i})},n.doCalculate=function(t){for(var e=n.state,a=e.v1,r=e.v2,i=e.v3,o=--t,s=n.refreshV3Hilight(),l=function(e){var o=0;(!i||t<i.length)&&(a[t].forEach(function(t,n){return o+=t*r[n][e]}),i&&t<i.length&&e<i[0].length&&(n.setResult(o,t,e),s&&(s[t][e]=1))),t--},c=0;c<=o;c++)l(c);n.setState({v3Hilight:s})},n.refreshV3Hilight=function(){return n.state.v3Hilight&&n.state.v3Hilight.map(function(t){return t.map(function(){return 0})})},n.setResult=function(t,e,a){var r=n.state.v3;r&&(r[e][a]=t),n.setState({v3:r})},n.btnEdit=function(t){var e=t.target.getAttribute("data-id"),a=n.state,r=a.v1,i=a.v2;if(0===a.step)switch(Number(e)){case 1:n.setState({v1:n.deleteRow(r)});break;case 2:n.setState({v1:n.addRow(r)});break;case 3:n.setState({v1:n.deleteCol(r),v2:n.deleteRow(i)});break;case 4:n.setState({v1:n.addCol(r),v2:n.addRow(i)});break;case 5:n.setState({v2:n.deleteCol(i)});break;case 6:n.setState({v2:n.addCol(i)})}},n.addRow=function(t){return t.push(t[0].map(function(){return 1})),t},n.deleteRow=function(t){return t.length>1&&t.splice(t.length-1,1),t},n.addCol=function(t){return t.map(function(t){return t.push(1)}),t},n.deleteCol=function(t){return t.map(function(t){return t.length>1&&t.splice(t.length-1,1)}),t},n.reset(!0),n}return m(e,t),e.prototype.reset=function(t){var e={offset:10,cubeSize:50,step:0,level:0,editable:!0,v1:this.getMatrix(),v2:this.getMatrix(),v3:void 0,v3Hilight:void 0,top:0,left:0,rotate:!1,bottomDisable:!1,height1:0,width1:0,height2:0,width2:0,v2Opacity:1};if(t)this.state=e;else{var n=this.state,a=n.v1,r=n.v2;this.setState(v({},e,{v1:a,v2:r}))}},e.prototype.render=function(){var t=this,e="",n="",a=0;switch(this.state.step){case 0:e="Multiply",n="×",a=1;break;case 1:e="Next",n="=",a=0;break;case 2:e="Reset",n="×",a=0;break;default:e="Multiply",n="×",a=1}return l.a.createElement("div",{className:"matrix-wrapper"},l.a.createElement("div",{className:"matrix-content"},l.a.createElement(f.default,{ref:function(e){return t.dom=e},ventorList:this.state.v1,editable:this.state.editable,onInput:this.onInput,onBlur:this.onBlur,transformRow:this.state.transformRow,opacity:a,btnEdit:this.btnEdit}),l.a.createElement("span",{ref:function(e){return t.span=e}},n),l.a.createElement(p.default,{ventorList:this.state.v2,step:this.state.step,width:this.state.width2}),l.a.createElement(d.default,{ref:function(e){return t.dom2=e},ventorList:this.state.v2,editable:this.state.editable,onInput:this.onInput,onBlur:this.onBlur,top:this.state.top,left:this.state.left,rotate:this.state.rotate,opacity:a,v2Opacity:this.state.v2Opacity,btnEdit:this.btnEdit,transformCol:this.state.transformCol}),l.a.createElement("span",{style:{transform:"translateX("+-this.state.width2+"px)",opacity:2===this.state.step?1:0,width:2===this.state.step?60:0}},"="),l.a.createElement(h.default,{ventorList:this.state.v3,hilightList:this.state.v3Hilight})),l.a.createElement("div",{className:"matrix-bottom"},l.a.createElement(o.a,{disabled:this.state.bottomDisable,type:"primary",size:"large",onClick:this.doClick},e),1===this.state.step?l.a.createElement(o.a,{disabled:this.state.bottomDisable,type:"primary",size:"large",onClick:this.doAutoComplete},"Auto Complete"):""))},e}(l.a.Component);e.default=r.a.connect({component:w,mapStateToProps:function(t){return{isMobile:t.common.isMobile}}})}}]);
//# sourceMappingURL=8.69b4f742765fd9287fe7.bundle.js.map