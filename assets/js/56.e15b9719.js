(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{320:function(t,e,i){},407:function(t,e,i){"use strict";i(320)},514:function(t,e,i){"use strict";i.r(e);var l={name:"LeeTimeline",inheritAttrs:!1,data:()=>({limitnum:0,totalnum:0}),provide(){return{timeline:this}},mounted(){this.totalnum=this.$slots.default.length},props:{reverse:{type:Boolean,default:!1},value:{type:Number,default:0},theme:{type:Number,default:1},animate:{type:Boolean,default:!1}},methods:{chuli(){this.limitnum=0}},watch:{value:{immediate:!0,handler(t){this.limitnum=t}},reverse:{immediate:!0,handler(t){t&&(this.$slots.default=[...this.$slots.default].reverse())}}}},n=(i(407),i(10)),a=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lee-timeline"},[0!=t.limitnum&&t.limitnum<t.totalnum?e("div",{staticClass:"mark"}):t._e(),t._v(" "),e("ul",[t._t("default")],2),t._v(" "),0!=t.limitnum&&t.limitnum<t.totalnum?e("div",{staticClass:"more",on:{click:t.chuli}}):t._e()])}),[],!1,null,"4d8fbfbc",null);e.default=a.exports}}]);