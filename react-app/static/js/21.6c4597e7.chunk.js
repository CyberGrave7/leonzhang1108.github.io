webpackJsonp([21],{374:function(e,r,t){var A=t(513);"string"===typeof A&&(A=[[e.i,A,""]]);var n={hmr:!1,transform:void 0};t(365)(A,n);A.locals&&(e.exports=A.locals)},513:function(e,r,t){(e.exports=t(364)(!0)).push([e.i,'.tetris-wrapper{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:center;align-self:center}.tetris-wrapper.mobile .tetris-screen{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.tetris-wrapper .tetris-screen-wrapper{width:100%;text-align:center}.tetris-wrapper .tetris-screen{margin:0 auto;background-color:#9ead86;padding:10px;border-radius:8px}.tetris-wrapper .tetris-screen .row{height:16px}.tetris-wrapper .tetris-screen .row .item{width:20px;height:20px;padding:2px;border:2px solid #879372;margin:0 2px 2px 0;float:left}.tetris-wrapper .tetris-screen .row .item.block{border:2px solid #000}.tetris-wrapper .tetris-screen .row .item.block:after{background:#000}.tetris-wrapper .tetris-screen .row .item.full{border:2px solid #666}.tetris-wrapper .tetris-screen .row .item.full:after{background:#666}.tetris-wrapper .tetris-screen .row .item:after{content:"";display:block;width:12px;height:12px;background:#879372;overflow:hidden}.tetris-wrapper .btn-wrapper{text-align:center;position:absolute;width:100%;bottom:1rem;padding-left:7rem}.tetris-wrapper .btn-wrapper i{font-size:3rem;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:.5}.tetris-wrapper .btn-wrapper i:active{color:#000;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}.tetris-wrapper .btn-wrapper .middle i:first-child{margin-right:2.5rem}',"",{version:3,sources:["/Users/leonzhang/Documents/github/typescript/leon-ts-app/src/pages/Tetris/index.less"],names:[],mappings:"AAAA,gBACE,WAAY,AACZ,YAAa,AACb,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,2BAA4B,AACxB,iBAAmB,CACxB,AACD,sCACE,4BAA8B,AAC1B,wBAA0B,AACtB,mBAAsB,CAC/B,AACD,uCACE,WAAY,AACZ,iBAAmB,CACpB,AACD,+BACE,cAAe,AACf,yBAA0B,AAC1B,aAAc,AACd,iBAAmB,CACpB,AACD,oCACE,WAAa,CACd,AACD,0CACE,WAAY,AACZ,YAAa,AACb,YAAa,AACb,yBAA0B,AAC1B,mBAAoB,AACpB,UAAY,CACb,AACD,gDACE,qBAAuB,CACxB,AACD,sDACE,eAAiB,CAClB,AACD,+CACE,qBAAuB,CACxB,AACD,qDACE,eAAiB,CAClB,AACD,gDACE,WAAY,AACZ,cAAe,AACf,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,eAAiB,CAClB,AACD,6BACE,kBAAmB,AACnB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,+BACE,eAAgB,AAChB,2BAA4B,AAC5B,sBAAuB,AACvB,mBAAoB,AACpB,2BAA4B,AACxB,uBAAwB,AACpB,mBAAoB,AAC5B,UAAY,CACb,AACD,sCACE,WAAY,AACZ,6BAA8B,AAC1B,yBAA0B,AACtB,oBAAsB,CAC/B,AACD,mDACE,mBAAqB,CACtB",file:"index.less",sourcesContent:['.tetris-wrapper {\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n.tetris-wrapper.mobile .tetris-screen {\n  -webkit-transform: scale(0.8);\n      -ms-transform: scale(0.8);\n          transform: scale(0.8);\n}\n.tetris-wrapper .tetris-screen-wrapper {\n  width: 100%;\n  text-align: center;\n}\n.tetris-wrapper .tetris-screen {\n  margin: 0 auto;\n  background-color: #9ead86;\n  padding: 10px;\n  border-radius: 8px;\n}\n.tetris-wrapper .tetris-screen .row {\n  height: 16px;\n}\n.tetris-wrapper .tetris-screen .row .item {\n  width: 20px;\n  height: 20px;\n  padding: 2px;\n  border: 2px solid #879372;\n  margin: 0 2px 2px 0;\n  float: left;\n}\n.tetris-wrapper .tetris-screen .row .item.block {\n  border: 2px solid #000;\n}\n.tetris-wrapper .tetris-screen .row .item.block:after {\n  background: #000;\n}\n.tetris-wrapper .tetris-screen .row .item.full {\n  border: 2px solid #666;\n}\n.tetris-wrapper .tetris-screen .row .item.full:after {\n  background: #666;\n}\n.tetris-wrapper .tetris-screen .row .item:after {\n  content: "";\n  display: block;\n  width: 12px;\n  height: 12px;\n  background: #879372;\n  overflow: hidden;\n}\n.tetris-wrapper .btn-wrapper {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  bottom: 1rem;\n  padding-left: 7rem;\n}\n.tetris-wrapper .btn-wrapper i {\n  font-size: 3rem;\n  -webkit-transition: all .3s;\n  -o-transition: all .3s;\n  transition: all .3s;\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n  opacity: .5;\n}\n.tetris-wrapper .btn-wrapper i:active {\n  color: #000;\n  -webkit-transform: scale(1.2);\n      -ms-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.tetris-wrapper .btn-wrapper .middle i:first-child {\n  margin-right: 2.5rem;\n}\n'],sourceRoot:""}])}});
//# sourceMappingURL=21.6c4597e7.chunk.js.map