webpackJsonp([21],{374:function(e,r,A){var t=A(513);"string"===typeof t&&(t=[[e.i,t,""]]);var n={hmr:!1,transform:void 0};A(365)(t,n);t.locals&&(e.exports=t.locals)},513:function(e,r,A){(e.exports=A(364)(!0)).push([e.i,'.tetris-wrapper{width:100%;height:100%}.tetris-wrapper.mobile .tetris-screen-wrapper .tetris-screen .row .item{width:14px;height:14px;margin:0 1px 1px 0}.tetris-wrapper.mobile .tetris-screen-wrapper .tetris-screen .row .item:after{width:6px;height:6px}.tetris-wrapper .tetris-screen-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:center;align-self:center;position:relative;width:100%;text-align:center}.tetris-wrapper .tetris-screen-wrapper .tetris-screen{margin:0 auto;background-color:#9ead86;padding:10px;border-radius:8px;margin-top:2rem;position:relative}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .game-over{height:100%;width:100%;background-color:rgba(0,0,0,.5);position:absolute;left:0;top:0;border-radius:6px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;opacity:1}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row:after{content:"";clear:both}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item{width:20px;height:20px;padding:2px;border:2px solid #879372;margin:0 2px 2px 0;float:left}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.block{border:2px solid #000}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.block:after{background:#000}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.full{border:2px solid #666;-webkit-animation:hilight .3s 1 forwards;animation:hilight .3s 1 forwards}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.full:after{background:#666}.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item:after{content:"";display:block;width:12px;height:12px;background:#879372;overflow:hidden}.tetris-wrapper .btn-wrapper{text-align:center;position:absolute;width:100%;bottom:1rem;display:-ms-flexbox;display:flex}.tetris-wrapper .btn-wrapper .functional-btn{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:center;align-items:center}.tetris-wrapper .btn-wrapper .direction{-ms-flex:1 1;flex:1 1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.tetris-wrapper .btn-wrapper .direction .middle{display:-ms-flexbox;display:flex;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;max-width:17rem}.tetris-wrapper .btn-wrapper i{font-size:3.5rem;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:.5;-webkit-transition:all .1s linear;-o-transition:all .1s linear;transition:all .1s linear}.tetris-wrapper .btn-wrapper i:active{color:#000;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}@-webkit-keyframes hilight{50%{background:red}}@keyframes hilight{50%{background:red}}',"",{version:3,sources:["/Users/leonzhang/Documents/github/typescript/leon-ts-app/src/pages/Tetris/index.less"],names:[],mappings:"AAAA,gBACE,WAAY,AACZ,WAAa,CACd,AACD,wEACE,WAAY,AACZ,YAAa,AACb,kBAAoB,CACrB,AACD,8EACE,UAAW,AACX,UAAY,CACb,AACD,uCACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,2BAA4B,AACxB,kBAAmB,AACvB,kBAAmB,AACnB,WAAY,AACZ,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,yBAA0B,AAC1B,aAAc,AACd,kBAAmB,AACnB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,iEACE,YAAa,AACb,WAAY,AACZ,gCAAqC,AACrC,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,kBAAmB,AACnB,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,sBAAuB,AACnB,mBAAoB,AACxB,SAAW,CACZ,AACD,iEACE,WAAY,AACZ,UAAY,CACb,AACD,iEACE,WAAY,AACZ,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,mBAAoB,AACpB,UAAY,CACb,AACD,uEACE,qBAAuB,CACxB,AACD,6EACE,eAAiB,CAClB,AACD,sEACE,sBAAuB,AACvB,yCAA0C,AAClC,gCAAkC,CAC3C,AACD,4EACE,eAAiB,CAClB,AACD,uEACE,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,eAAiB,CAClB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,YAAc,CACf,AACD,6CACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,2BAA4B,AACxB,6BAA8B,AAClC,sBAAuB,AACnB,kBAAoB,CACzB,AACD,wCACE,aAAc,AACV,SAAU,AACd,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,sBAAuB,AACnB,kBAAoB,CACzB,AACD,gDACE,oBAAqB,AACrB,aAAc,AACd,2BAA4B,AACxB,6BAA8B,AAClC,WAAY,AACZ,eAAiB,CAClB,AACD,+BACE,iBAAkB,AAClB,2BAA4B,AACxB,uBAAwB,AACpB,mBAAoB,AAC5B,WAAY,AACZ,kCAAmC,AACnC,6BAA8B,AAC9B,yBAA2B,CAC5B,AACD,sCACE,WAAY,AACZ,6BAA8B,AAC1B,yBAA0B,AACtB,oBAAsB,CAC/B,AACD,2BACE,IACE,cAAgB,CACjB,CACF,AACD,mBACE,IACE,cAAgB,CACjB,CACF",file:"index.less",sourcesContent:[".tetris-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.tetris-wrapper.mobile .tetris-screen-wrapper .tetris-screen .row .item {\n  width: 14px;\n  height: 14px;\n  margin: 0 1px 1px 0;\n}\n.tetris-wrapper.mobile .tetris-screen-wrapper .tetris-screen .row .item:after {\n  width: 6px;\n  height: 6px;\n}\n.tetris-wrapper .tetris-screen-wrapper {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  position: relative;\n  width: 100%;\n  text-align: center;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen {\n  margin: 0 auto;\n  background-color: #9ead86;\n  padding: 10px;\n  border-radius: 8px;\n  margin-top: 2rem;\n  position: relative;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .game-over {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 6px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  opacity: 1;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row:after {\n  content: '';\n  clear: both;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item {\n  width: 20px;\n  height: 20px;\n  padding: 2px;\n  border: 2px solid #879372;\n  margin: 0 2px 2px 0;\n  float: left;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.block {\n  border: 2px solid #000;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.block:after {\n  background: #000;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.full {\n  border: 2px solid #666;\n  -webkit-animation: hilight .3s 1 forwards;\n          animation: hilight .3s 1 forwards;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item.full:after {\n  background: #666;\n}\n.tetris-wrapper .tetris-screen-wrapper .tetris-screen .row .item:after {\n  content: \"\";\n  display: block;\n  width: 12px;\n  height: 12px;\n  background: #879372;\n  overflow: hidden;\n}\n.tetris-wrapper .btn-wrapper {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 1rem;\n  display: -ms-flexbox;\n  display: flex;\n}\n.tetris-wrapper .btn-wrapper .functional-btn {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: space-evenly;\n      justify-content: space-evenly;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.tetris-wrapper .btn-wrapper .direction {\n  -ms-flex: 1 1;\n      flex: 1 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.tetris-wrapper .btn-wrapper .direction .middle {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: space-evenly;\n      justify-content: space-evenly;\n  width: 100%;\n  max-width: 17rem;\n}\n.tetris-wrapper .btn-wrapper i {\n  font-size: 3.5rem;\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n  opacity: .5;\n  -webkit-transition: all .1s linear;\n  -o-transition: all .1s linear;\n  transition: all .1s linear;\n}\n.tetris-wrapper .btn-wrapper i:active {\n  color: #000;\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n@-webkit-keyframes hilight {\n  50% {\n    background: red;\n  }\n}\n@keyframes hilight {\n  50% {\n    background: red;\n  }\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=21.ab853681.chunk.js.map