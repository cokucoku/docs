(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{288:function(t,e,i){},385:function(t,e,i){"use strict";i(288)},536:function(t,e,i){"use strict";i.r(e);var s={name:"LeeDialog",inheritAttrs:!1,data:()=>({isshow:!1}),watch:{value:{immediate:!0,handler(t){this.isshow=t}}},computed:{},methods:{cancel(){this.isshow=!1,this.$emit("input",!1),this.$emit("cancel",{flag:!1})},certain(){this.isshow=!1,this.$emit("input",!1),this.$emit("certain",{flag:!0})}},props:{value:{type:Boolean,default:!1},title:{type:String,default:""},effect:{type:String,default:"fade"}}},a=(i(385),i(10)),n=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lee-dialog"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mark"})]),t._v(" "),e("transition",{attrs:{name:t.effect}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"dialog"},[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"other"},[e("lee-button",{on:{click:t.cancel}},[t._v("取消")]),t._v(" "),e("lee-button",{attrs:{type:"primary"},on:{click:t.certain}},[t._v("确定")])],1)])])],1)}),[],!1,null,"0d45c77e",null);e.default=n.exports}}]);