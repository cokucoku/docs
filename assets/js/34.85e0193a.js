(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{243:function(t,s,e){},316:function(t,s,e){"use strict";var i=e(243);e.n(i).a},391:function(t,s,e){"use strict";e.r(s);e(26);var i={name:"LeeCascadeSelect",inheritAttrs:!1,data:function(){return{level:0,ss:0,xh:[],all:[],arr:[["福建","广东"],["福州市","厦门市","宁德市","莆田市","泉州市","漳州市","龙岩市","三明市","南平市"],["鼓楼区","台江区","仓山区","马尾区"]]}},computed:{},watch:{xh:{immediate:!0,handler:function(t){for(var s=1;s<this.level;s++)this.arr[s]=this.all[s][t[s-1]]}}},mounted:function(){var t=0,s=this.select;do{s.map(function(t,e){s=t.child}),t++}while(null!=s);this.level=t;for(var e=0;e<t;e++)this.xh[e]=0,this.all[e]=[];console.log(this.level),this.getdata(this.select)},methods:{setxh:function(t,s){this.$set(this.xh,t,s)},getdata:function(t){var s=[];for(var e in this.ss=this.level,t)s.push({text:t[e].text}),t[e].child&&this.getdata(t[e].child);this.ss--,this.all[this.ss].push(s),console.log(this.ss,s),this.arr[this.ss]=this.all[this.ss][this.xh[this.ss]]}},props:{select:{type:Array,default:function(){return[]}}}},l=(e(316),e(0)),n=Object(l.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lee-cascade-select"},t._l(t.level,function(s,i){return e("div",{staticClass:"lan"},[e("ul",t._l(t.arr[i],function(s,l){return e("li",{class:{cur:t.xh[i]===l},on:{click:function(s){return t.setxh(i,l)}}},[t._v(t._s(s.text))])}),0)])}),0)},[],!1,null,"69746800",null);s.default=n.exports}}]);