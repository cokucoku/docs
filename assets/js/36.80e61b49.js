(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{246:function(t,e,i){},317:function(t,e,i){"use strict";var a=i(246);i.n(a).a},383:function(t,e,i){"use strict";i.r(e);var a={name:"LeeDialog",inheritAttrs:!1,data:function(){return{isshow:!1}},watch:{value:{immediate:!0,handler:function(t){this.isshow=t}}},computed:{},methods:{cancel:function(){this.isshow=!1,this.$emit("input",!1),this.$emit("cancel",{flag:!1})},certain:function(){this.isshow=!1,this.$emit("input",!1),this.$emit("certain",{flag:!0})},enter:function(t){var e=t.scrollHeight;t.style.setProperty("--h",-e/2+"px")},afterenter:function(t){},leave:function(t){var e=t.scrollHeight;t.style.setProperty("--h",-e/2+"px")},afterleave:function(t){}},props:{value:{type:Boolean,default:!1},title:{type:String,default:""},effect:{type:String,default:"fade"}}},s=(i(317),i(0)),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lee-dialog"},[i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mark"})]),t._v(" "),i("transition",{attrs:{name:t.effect},on:{enter:t.enter,"after-enter":t.afterenter,leave:t.leave,"after-leave":t.afterleave}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"dialog"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"other"},[i("lee-button",{on:{click:t.cancel}},[t._v("取消")]),t._v(" "),i("lee-button",{attrs:{type:"primary"},on:{click:t.certain}},[t._v("确定")])],1)])])],1)},[],!1,null,"2b5b62ad",null);e.default=n.exports}}]);