(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{272:function(t,s,e){},359:function(t,s,e){"use strict";e(272)},465:function(t,s,e){"use strict";e.r(s);e(92);var l={name:"LeeCascadeSelect",inheritAttrs:!1,data:()=>({level:0,ss:0,xh:[],all:[],arr:[["福建","广东"],["福州市","厦门市","宁德市","莆田市","泉州市","漳州市","龙岩市","三明市","南平市"],["鼓楼区","台江区","仓山区","马尾区"]]}),computed:{},watch:{xh:{immediate:!0,handler(t){for(let s=1;s<this.level;s++)this.arr[s]=this.all[s][t[s-1]]}}},mounted(){let t=0,s=this.select;do{s.map((t,e)=>{s=t.child}),t++}while(null!=s);this.level=t;for(let s=0;s<t;s++)this.xh[s]=0,this.all[s]=[];console.log(this.level),this.getdata(this.select)},methods:{setxh(t,s){this.$set(this.xh,t,s)},getdata(t){let s=[];this.ss=this.level;for(let e in t)s.push({text:t[e].text}),t[e].child&&this.getdata(t[e].child);this.ss--,this.all[this.ss].push(s),console.log(this.ss,s),this.arr[this.ss]=this.all[this.ss][this.xh[this.ss]]}},props:{select:{type:Array,default:()=>[]}}},i=(e(359),e(10)),h=Object(i.a)(l,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"lee-cascade-select"},t._l(t.level,(function(e,l){return s("div",{staticClass:"lan"},[s("ul",t._l(t.arr[l],(function(e,i){return s("li",{class:{cur:t.xh[l]===i},on:{click:function(s){return t.setxh(l,i)}}},[t._v(t._s(e.text))])})),0)])})),0)}),[],!1,null,"69746800",null);s.default=h.exports}}]);