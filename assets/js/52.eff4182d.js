(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{284:function(t,e,n){},354:function(t,e,n){"use strict";var o=n(284);n.n(o).a},421:function(t,e,n){"use strict";n.r(e);n(24),n(25);var o={name:"LeeTagCloud",inheritAttrs:!1,data:function(){return{tags:this.tag,exp:!1,setnum:0,px:0,py:0,pw:0}},mounted:function(){var t=this;this.tags.map(function(e,n){var o=Math.floor(14*(Math.random()+1)+2*Math.random());t.$set(e,"size",o),t.$set(e,"color",t.color())})},computed:{position:function(){return"left:"+this.px+"px;top:"+(this.py-50)+"px;transform:translateX(-"+.5*(160-this.pw)+"px)"}},methods:{open:function(t){this.px=event.target.offsetLeft,this.py=event.target.offsetTop,this.pw=event.target.offsetWidth,this.exp=!0;var e=this.tags.filter(function(e,n){return n==t});this.setnum=e[0].num},close:function(){this.exp=!1},add:function(t){var e=this,n=this.tags.filter(function(e,n){return n==t});n.map(function(t){e.$set(t,"num",t.num+1)}),this.setnum=n[0].num},remove:function(t){this.tags.splice(t,1)},color:function(){var t="rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+" )";return t}},props:{tag:{type:Array,default:function(){return[]}},closeable:{type:Boolean,default:!1},num:{type:Boolean,default:!1}}},s=(n(354),n(0)),a=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lee-tag-cloud",class:{close:t.closeable}},[n("transition",{attrs:{name:"fade"}},[t.exp?n("div",{staticClass:"tip",style:t.position},[t._v("该标签有"),n("strong",[t._v(t._s(t.setnum))]),t._v("人设置")]):t._e()]),t._v(" "),n("ul",t._l(t.tags,function(e,o){return n("li",{style:{color:e.color,fontSize:e.size+"px"},on:{click:function(e){return e.stopPropagation(),t.add(o)},mouseleave:t.close,mouseenter:function(e){return t.open(o)}}},[t._v(t._s(e.t)),t.closeable?n("span",{staticClass:"closeico",on:{click:function(e){return e.stopPropagation(),t.remove(o)}}},[t._v("x")]):t._e()])}),0)],1)},[],!1,null,"672f3912",null);e.default=a.exports}}]);