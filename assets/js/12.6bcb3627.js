(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{287:function(e,t,l){},384:function(e,t,l){"use strict";l(287)},535:function(e,t,l){"use strict";l.r(t);l(92);var a={name:"LeeCollapseItem",inheritAttrs:!1,data:()=>({}),inject:["collapse"],methods:{chuli(e){if(this.collapse.accordion){let t=[];this.collapse.value==e?this.collapse.$emit("input",[]):(t.push(e),this.collapse.$emit("input",t))}else if(this.collapse.value.indexOf(e)<0)this.collapse.value.push(e);else{let t=this.collapse.value.indexOf(e);this.collapse.value.splice(t,1)}},enter(e){var t=e.scrollHeight;e.style.setProperty("--h",t+"px")},afterenter(e){e.removeAttribute("style")},leave(e){var t=e.scrollHeight;e.style.setProperty("--h",t+"px")},afterleave(e){e.style.setProperty("--h","")}},props:{title:{type:String,default:""},name:{type:String,default:""}}},s=(l(384),l(10)),i=Object(s.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"lee-collapse-item",class:{active:e.collapse.value.indexOf(e.name)>-1}},[t("div",{staticClass:"itemtab",on:{click:function(t){return e.chuli(e.name)}}},[e._v(e._s(e.title)),t("i")]),e._v(" "),t("transition",{attrs:{name:"leetran"},on:{enter:e.enter,"after-enter":e.afterenter,leave:e.leave,"after-leave":e.afterleave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.collapse.value.indexOf(e.name)>-1,expression:"collapse.value.indexOf(name)>-1"}],staticClass:"itemcontentw"},[t("div",{staticClass:"itemcontent"},[e._t("default")],2)])])],1)}),[],!1,null,"f3c3f834",null);t.default=i.exports}}]);