webpackJsonp([14,28],{186:function(t,e,o){var s,n;o(187),s=o(189),n=o(193),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},187:function(t,e,o){var s=o(188);"string"==typeof s&&(s=[[t.id,s,""]]);o(74)(s,{});s.locals&&(t.exports=s.locals)},188:function(t,e,o){e=t.exports=o(27)(),e.push([t.id,".red{color:red}.blue{color:blue}",""])},189:function(t,e,o){"use strict";var s=o(68);Vue.use(s),t.exports={data:function(){return{firstName:"leon",lastName:"zhang",colorClass:{red:!0,blue:!1}}},computed:{fullName:function(){return this.firstName+" "+this.lastName}},methods:{changeColor:function(){this.colorClass={red:!this.colorClass.red,blue:!this.colorClass.blue}},insertFunction:function(){var t=o(190),e=Vue.extend(t),s=new e({data:{firstName:this.firstName,lastName:this.lastName},methods:{}});s.$mount().$appendTo("#insertPlace")},changeRouter:function(){console.log(s())}}}},190:function(t,e,o){var s,n;s=o(191),n=o(192),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},191:function(t,e){"use strict";t.exports={data:function(){return{lastName:"hello vue"}},methods:{changeChild:function(){}}}},192:function(t,e){t.exports="<input type=text v-model=lastName />"},193:function(t,e){t.exports="<div> <div> {{firstName}} <input v-model=firstName @click=insertFunction> </div> <div> {{lastName}} <input v-model=lastName @click=changeColor /> </div> <div v-bind:class=colorClass @click=changeRouter>{{fullName}}</div> <div id=insertPlace></div> </div>"}});