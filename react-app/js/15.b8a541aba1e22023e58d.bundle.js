(window.webpackJsonp=window.webpackJsonp||[]).push([[15,31,42,62],{174:function(t,e,n){"use strict";n.r(e),e.default={keyCode:{left:37,up:38,right:39,down:40,space:32},block:{L:[[[0,0,1],[1,1,1]],[[1,1],[0,1],[0,1]],[[1,1,1],[1,0,0]],[[1,0],[1,0],[1,1]]],J:[[[1,0,0],[1,1,1]],[[1,1],[1,0],[1,0]],[[1,1,1],[0,0,1]],[[0,1],[0,1],[1,1]]],O:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]],T:[[[0,1,0],[1,1,1]],[[0,1],[1,1],[0,1]],[[1,1,1],[0,1,0]],[[1,0],[1,1],[1,0]]],Z:[[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]],[[1,1,0],[0,1,1]],[[0,1],[1,1],[1,0]]],S:[[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]],[[0,1,1],[1,1,0]],[[1,0],[1,1],[0,1]]],I:[[[1,1,1,1]],[[1],[1],[1],[1]],[[1,1,1,1]],[[1],[1],[1],[1]]]},scores:[1,3,5,10]}},190:function(t,e,n){"use strict";n.r(e);var o,r=n(10),a=n(174),i=a.default.block,c=a.default.keyCode,s=function(t){t.width;var e=t.block,n=t.rx,o=t.y,r=t.playboard,a=t.length,i=[],c=!0;return e.forEach(function(t,e){t.every(function(t,n){return t&&i.push({x:n,y:e}),!0})}),i.every(function(t){var e=t.x,i=t.y,s=e+n,l=o+i-a;return l>=0&&l<20&&r[l][s]&&(c=!1),c}),c},l=((o={})[c.up]=function(t){t.width;var e=t.block,n=t.rx,o=t.y,r=t.playboard,a=t.length,i=!0;return e.every(function(t,e){return t.every(function(t,c){var s=c+n,l=o+e-a;return l>=0&&l<20&&r[l][s]&&(i=!1),i}),i}),i},o[c.down]=function(t){var e=t.width,n=t.block,o=t.rx,r=t.y,a=t.playboard,i=t.length;if(21===r)return!1;for(var c=!0,s=[],l=0;l<e;l++)for(var u=n.length-1,d=!0;u>=0&&d;)n[u][l]&&(s.push({x:l,y:u}),d=!1),u--;return s.every(function(t){var e=t.x,n=t.y,s=e+o,l=r+n-i;return l>=0&&l<20&&a[l][s]&&(c=!1),c}),c},o[c.left]=s,o[c.right]=s,o);e.default={getCurrPosition:function(t){var e=t.x,n=t.y,o=t.cBlock,a=t.screen,c=t.rotate,s=t.moveTo,u=r.a.clone(a),d=i[o][c],v=d[0].length,m=10-v,f=Math.floor((10-v)/2),p=d.length,y=n,h=f+e;h<0&&(h=0,e=-f),h>m&&(h=m,e=v%2==1?f+1:f);var b=l[s]({width:v,block:d,rx:h,y:n,playboard:u,length:p});if(b)for(;y>0&&p>0;){var w=--y,g=d[p-1];w=w>20?20:w;for(var k=0;k<10;k++){if(k<g.length)u[w][h+k]||(u[w][h+k]=g[k])}p--}return{playboard:u,x:e,screen:a,couldMove:b}}}},329:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},r={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[],i=[];function c(t,e,n){t.addEventListener(e,n,!1)}function s(t,e,n){t.removeEventListener(e,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var t=document.createElement("div").style;function e(e,n){for(var o in e)if(e.hasOwnProperty(o)){var r=e[o];for(var a in r)if(a in t){n.push(r[a]);break}}}"AnimationEvent"in window||(delete o.animationstart.animation,delete r.animationend.animation),"TransitionEvent"in window||(delete o.transitionstart.transition,delete r.transitionend.transition),e(o,a),e(r,i)}();var l={startEvents:a,addStartEventListener:function(t,e){0!==a.length?a.forEach(function(n){c(t,n,e)}):window.setTimeout(e,0)},removeStartEventListener:function(t,e){0!==a.length&&a.forEach(function(n){s(t,n,e)})},endEvents:i,addEndEventListener:function(t,e){0!==i.length?i.forEach(function(n){c(t,n,e)}):window.setTimeout(e,0)},removeEndEventListener:function(t,e){0!==i.length&&i.forEach(function(n){s(t,n,e)})}};e.default=l,t.exports=e.default},352:function(t,e,n){},88:function(t,e,n){"use strict";n.r(e);var o,r=n(10),a=n(53),i=n.n(a),c=(n(52),n(1)),s=n(174),l=(n(352),n(190)),u=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=s.default.block,v=s.default.keyCode,m=s.default.scores,f=Object.keys(d),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.transform=r.a.transform,e.clearBtnInterval=function(){e.btnInterval&&clearInterval(e.btnInterval)},e.clearInterval=function(){e.interval&&clearInterval(e.interval)},e.resetGame=function(){e.clearInterval();var t=e.calculateScreen({row:20,column:10});e.setState({row:20,column:10,screen:t,playboard:t,style:e.getSize(e.props),cBlock:f[r.a.random(0,f.length)],x:0,y:0,intervalTime:800,score:0,rotate:r.a.random(0,4),pause:!1,gameover:!1,touchDown:!1,pressed:!1},function(){return e.doMovePlayboard(!0)})},e.visibilitychange=function(){(!e.state.pause&&"hidden"===document.visibilityState||e.state.pause&&"hidden"!==document.visibilityState)&&e.togglePause()},e.isGameOver=function(){var t=e.state,n=t.x,o=t.y,r=t.cBlock,a=t.screen,i=t.rotate;return!(l.default.getCurrPosition({x:n,y:o+1,cBlock:r,screen:a,rotate:i,moveTo:v.down}).couldMove||d[r][i].length<o-1)},e.clearRow=function(t){var e=r.a.clone(t).map(function(t){return t.map(function(t){return t?2:0})}),n=[];return t.forEach(function(t,o){t.every(function(t){return t})&&(e.splice(o,1),e.unshift(new Array(10).fill(0)),n.push(o))}),{screen:e,clearedList:n}},e.keyup=function(){e.clearBtnInterval(),e.setState({pressed:!1})},e.keydown=function(t){if(!e.state.pressed){var n=t.keyCode;n===v.space?e.doMove(n):e.touchStart(n)}},e.doMove=function(t){var n=e.state,o=n.x,r=n.y,a=n.screen,i=n.cBlock,c=n.row,s=n.rotate,u=n.pause,d=n.gameover;if(!u&&!d){var m=[[]],f=o;switch(t){case v.left:f=o-1;var p=l.default.getCurrPosition({x:f,y:r||20,cBlock:i,screen:a,rotate:s,moveTo:v.left}),y=p.playboard,h=p.x;return void(p.couldMove&&(f=h,m=y,e.setState({playboard:m,x:f,pressed:!0})));case v.right:f=o+1;var b=l.default.getCurrPosition({x:f,y:r||20,cBlock:i,screen:a,rotate:s,moveTo:v.right}),w=b.playboard,g=b.x;return void(b.couldMove&&(f=g,m=w,e.setState({playboard:m,x:f,pressed:!0})));case v.down:if(r>c)return;var k=l.default.getCurrPosition({x:f,y:r+1,cBlock:i,screen:a,rotate:s,moveTo:v.down}),E=k.couldMove,S=k.playboard;return void(E?(e.newInterval(),e.setState({playboard:S,y:r+1,pressed:!0})):e.reset());case v.up:var T=s;T=T>=3?0:T+1;var M=l.default.getCurrPosition({x:o,y:r||20,cBlock:i,screen:a,rotate:T,moveTo:v.up}),B=M.playboard;return void(M.couldMove&&(m=B,e.setState({playboard:m,rotate:T,pressed:!0})));case v.space:e.goToBottom()}}},e.newInterval=function(t){e.clearInterval(),e.isGameOver()?e.setState({gameover:!0}):e.doMovePlayboard(t)},e.doMovePlayboard=function(t){t&&e.movePlayboard(e.state),e.doTimeout()},e.doTimeout=function(){e.interval=setInterval(function(){e.movePlayboard(e.state)},e.state.intervalTime)},e.movePlayboard=function(t){var n=t.x,o=t.y,r=e.state,a=r.screen,i=r.cBlock,c=r.rotate,s=l.default.getCurrPosition({x:n,y:o+1,cBlock:i,screen:a,rotate:c,moveTo:v.down}),u=s.playboard;s.couldMove?e.setState({playboard:u,y:o+1}):e.reset()},e.goToBottom=function(){var t=e.state,n=t.x,o=t.cBlock,r=t.rotate,a=t.screen,i=t.gameover,c=t.pause;if(!i&&!c){for(var s=e.state,u=s.y,d=s.playboard,m=!0;m;){var f=l.default.getCurrPosition({x:n,y:u+1,cBlock:o,screen:a,rotate:r,moveTo:v.down}),p=f.couldMove,y=f.playboard;m=p,p?(u++,d=y):e.setState({playboard:d,y:u,touchDown:!0,pressed:!0},e.isRowNeedClear)}setTimeout(function(){return e.setState({touchDown:!1})},100)}},e.isRowNeedClear=function(t){e.clearInterval();var n=e.state,o=n.playboard,r=n.score,a=e.clearRow(o),i=a.screen,c=a.clearedList,s=c.length;if(s){var l=t?{screen:i,score:r+m[s-1]}:{screen:i,score:r};c.forEach(function(t){return o[t]=new Array(10).fill(3)}),e.setState({screen:o}),e.vibrate(100),setTimeout(function(){e.setState(l,function(){return e.newInterval(!0)})},300)}else e.setState({screen:i},function(){return e.newInterval(!0)})},e.reset=function(){e.vibrate(100),e.setState({cBlock:f[r.a.random(0,f.length)],y:0,x:0,rotate:r.a.random(0,4)},function(){return e.isRowNeedClear(!0)})},e.calculateScreen=function(t){for(var e=t.row,n=t.column,o=[],r=0;r<e;r++){for(var a=[],i=0;i<n;i++)a.push(0);o.push(a)}return o},e.renderPlayboard=function(){return e.state.playboard?e.state.playboard.map(function(t,e){return c.createElement("div",{className:"row",key:e},t.map(function(t,e){var n="";switch(t){case 1:n="block";break;case 2:n="full";break;case 3:n="cleared"}return c.createElement("div",{key:e,className:"item "+n})}))}):null},e.togglePause=function(){var t=e.state.pause;!t&&e.interval?(e.clearInterval(),e.clearBtnInterval()):e.newInterval(),e.setState({pause:!t})},e.touchStart=function(t){e.clearBtnInterval();var n=t===v.down?50:100;e.doMove(t),t!==v.up&&(e.btnInterval=setInterval(function(){return e.doMove(t)},n))},e.getSize=function(t){var n;if(!e.props.isMobile)return{};var o=t.h,r=o/960;return(n={paddingTop:.6*(o-480-100)})[e.transform]="scale("+(r+.3)+")",n},e.vibrate=function(t){return null},e.getDirectionBtn=function(t){return c.createElement("div",{onTouchStart:r.a.handle("up"===t?e.doMove:e.touchStart,v[t]),className:"anticon anticon-ts-app icon-"+t+"-circle"})},e}return u(e,t),e.prototype.componentWillMount=function(){document.addEventListener("keyup",this.keyup),document.addEventListener("keydown",this.keydown),document.addEventListener("touchend",this.clearBtnInterval),document.addEventListener("visibilitychange",this.visibilitychange),this.resetGame()},e.prototype.componentWillUnmount=function(){this.clearInterval(),this.clearBtnInterval(),document.removeEventListener("keyup",this.keyup),document.removeEventListener("keydown",this.keydown),document.removeEventListener("touchend",this.clearBtnInterval),document.removeEventListener("visibilitychange",this.visibilitychange)},e.prototype.componentWillReceiveProps=function(t){this.setState({style:this.getSize(t)})},e.prototype.render=function(){var t,e=this.props.isMobile,n=this.state,o=n.pause,r=n.gameover,a=n.touchDown,s=n.score,l=n.style,u=((t={})[this.transform]=l[this.transform],t);return c.createElement("div",{className:"tetris-wrapper "+(e?"mobile":"")},c.createElement("div",{className:"tetris-screen-wrapper",style:l},c.createElement("div",{className:"score"},s),c.createElement("div",{className:"tetris-screen "+(a?"touch-buttom":"")},this.renderPlayboard(),r?c.createElement("div",{className:"game-over"},c.createElement(i.a,{type:"primary",onClick:this.resetGame},"Reset")):null)),c.createElement("div",{className:"btn-wrapper"},c.createElement("div",{className:"functional-btn",style:u},c.createElement("div",{onTouchStart:this.togglePause,className:"anticon anticon-ts-app icon-"+(o?"play":"pause")}),c.createElement("div",{onTouchStart:this.goToBottom,className:"anticon anticon-ts-app icon-down"})),c.createElement("div",{className:"direction",style:u},this.getDirectionBtn("up"),c.createElement("div",{className:"middle"},this.getDirectionBtn("left"),this.getDirectionBtn("right")),this.getDirectionBtn("down"))))},e}(c.Component);e.default=r.a.connect({component:p,mapStateToProps:function(t){return{isMobile:t.common.isMobile,h:t.common.contentHeight}}})}}]);
//# sourceMappingURL=15.b8a541aba1e22023e58d.bundle.js.map