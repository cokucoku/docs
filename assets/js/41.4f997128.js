(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{316:function(t,o,e){},413:function(t,o,e){"use strict";e(316)},564:function(t,o,e){"use strict";e.r(o);var a={name:"LeeScroll",inheritAttrs:!1,data:()=>({maxTop:!1,maxBottom:!1,arrow:!1,showBar:!1,barTop:0,oldP:0,barDown:!1,oldY:0}),mounted(){this.layout.indexOf("arrow")>-1?this.arrow=!0:this.arrow=!1,document.addEventListener("mousemove",t=>{if(this.barDown){let o=t.pageY;this.barTop=this.oldP+o-this.oldY}}),document.addEventListener("mouseup",()=>{this.barDown=!1}),window.addEventListener("resize",()=>{this.barTop-=1})},methods:{mousedown(t){this.barDown=!0,this.oldY=t.pageY},mousemove(t){if(this.barDown){let o=t.pageY;this.barTop=this.oldP+o-this.oldY}},mouseup(){this.barDown=!1},touchstart(t){this.barDown=!0,this.oldY=t.targetTouches[0].pageY},touchmove(t){if(this.barDown){let o=t.targetTouches[0].pageY;this.barTop=this.oldP+o-this.oldY}},touchend(){this.barDown=!1}},computed:{},props:{maxHeight:{type:Number,default:300},width:{type:Number,default:12},trackColor:{type:String,default:"#eee"},barColor:{type:String,default:"#46bd87"},layout:{type:String,default:"bar"}},watch:{barDown:{immediate:!0,handler(t){t||(this.oldP=this.barTop)}},barTop:{immediate:!0,handler(t){this.$nextTick(()=>{let o=this.$slots.default[0].elm,e=this.layout.indexOf("arrow")>-1?this.width:0,a=o.scrollHeight-this.maxHeight,s=this.maxHeight-50-2*e;if(t<=0?(this.barTop=0,this.maxTop=!0):this.maxTop=!1,t>=s?(this.barTop=s,this.maxBottom=!0):this.maxBottom=!1,a>0){this.showBar=!0;let t=-a/s*this.barTop;t>=0&&(t=0),t<=-a&&(t=-a),o.style.cssText="padding-right:"+3*this.width+"px;transform:translateY("+t+"px)"}})}}}},s=(e(413),e(10)),i=Object(s.a)(a,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"lee-scroll",style:"height:"+t.maxHeight+"px"},[t.showBar?o("div",{staticClass:"scrollTrack",style:"width:"+t.width+"px;backgroundColor:"+t.trackColor},[t.arrow?o("div",{staticClass:"arrows t",class:{disabled:t.maxTop},style:"width:"+t.width+"px;height:"+t.width+"px",on:{click:function(o){t.barTop-=t.width,t.oldP=t.barTop}}}):t._e(),t._v(" "),o("div",{staticClass:"bar",style:"transform:translateY("+t.barTop+"px);backgroundColor:"+t.barColor,on:{mousedown:function(o){return o.preventDefault(),t.mousedown.apply(null,arguments)},mousemove:function(o){return o.preventDefault(),t.mousemove.apply(null,arguments)},mouseup:t.mouseup,touchstart:function(o){return o.preventDefault(),t.touchstart.apply(null,arguments)},touchmove:function(o){return o.preventDefault(),t.touchmove.apply(null,arguments)},touchend:t.touchend}}),t._v(" "),t.arrow?o("div",{staticClass:"arrows b",class:{disabled:t.maxBottom},style:"width:"+t.width+"px;height:"+t.width+"px",on:{click:function(o){t.barTop+=t.width,t.oldP=t.barTop}}}):t._e()]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);o.default=i.exports}}]);