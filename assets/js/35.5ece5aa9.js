(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{310:function(t,e,i){},407:function(t,e,i){"use strict";i(310)},558:function(t,e,i){"use strict";i.r(e);var s={name:"LeePay",data:()=>({show:!1,tempay:""}),props:{value:{type:Boolean,default:!1},config:{type:Object,default:()=>({bg:"#409eff",choose:["微信支付","支付宝","花呗支付","农业银行"]})}},methods:{sel(t){this.tempay=t},chuli(){this.$emit("change",this.tempay),this.$emit("input",!1)}},watch:{value:{immediate:!0,handler(t){this.show=t}}}},n=(i(407),i(10)),a=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:"slideUp"}},[t.show?e("div",{staticClass:"PayChose"},[e("div",{staticClass:"okdiv",style:{background:t.config.bg},on:{click:t.chuli}},[t._v("关闭")]),t._v(" "),e("ul",t._l(t.config.choose,(function(i){return e("li",{style:{color:t.tempay===i?t.config.bg:""},on:{click:function(e){return t.sel(i)}}},[t._v(t._s(i))])})),0)]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.show?e("div",{staticClass:"mark",on:{click:t.chuli}}):t._e()])],1)}),[],!1,null,"350ed62e",null);e.default=a.exports}}]);