(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{260:function(e,t,n){},332:function(e,t,n){"use strict";var r=n(260);n.n(r).a},399:function(e,t,n){"use strict";n.r(t);var r={name:"LeeMenuTree",inheritAttrs:!1,data:function(){return{exp:!1}},watch:{},mounted:function(){},methods:{toggle:function(e){e.child&&e.child.length&&(this.exp=!this.exp)},enter:function(e){var t=e.scrollHeight;e.style.setProperty("--h",t+"px")},afterenter:function(e){e.removeAttribute("style")},leave:function(e){var t=e.scrollHeight;e.style.setProperty("--h",t+"px")},afterleave:function(e){e.style.setProperty("--h","")}},computed:{},props:{menu:{type:Object,default:function(){return[]}}}},a=(n(332),n(0)),i=Object(a.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"lee-menu-item",class:{active:e.exp}},[n("span",{on:{click:function(t){return e.toggle(e.menu)}}},[e.menu.child?n("i",[e._v("+")]):n("i",[e._v("-")]),e._v(e._s(e.menu.text))]),e._v(" "),n("transition",{attrs:{name:"leetran"},on:{enter:e.enter,"after-enter":e.afterenter,leave:e.leave,"after-leave":e.afterleave}},[e.menu.child?n("ul",{directives:[{name:"show",rawName:"v-show",value:e.exp,expression:"exp"}],staticClass:"lee-menu-sub"},e._l(e.menu.child,function(e,t){return n("lee-menu-item",{key:t,attrs:{menu:e}})}),1):e._e()])],1)},[],!1,null,"a84fa966",null);t.default=i.exports}}]);