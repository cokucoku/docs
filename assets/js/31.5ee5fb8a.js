(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{239:function(t,o,e){},303:function(t,o,e){"use strict";var n=e(239);e.n(n).a},364:function(t,o,e){"use strict";e.r(o);var n={name:"LeeImgContrast",data:function(){return{fullw:0,posx:0,down:!1,oldx:0,savex:0}},methods:{chuli:function(){var t=this;0===this.oldx&&(this.posx=50,this.savex=this.posx),document.addEventListener("mousedown",function(t){t.preventDefault()}),document.addEventListener("mousemove",function(o){var e;e="horizontal"===t.direction?Math.round((o.pageX-t.oldx)/t.fullw*100):Math.round((o.pageY-t.oldx)/t.fullw*100),t.down&&(t.posx=t.savex+e,t.posx>=100&&(t.posx=100),t.posx<=0&&(t.posx=0))}),document.addEventListener("mouseup",function(o){t.down=!1,t.savex=t.posx}),document.addEventListener("touchmove",function(o){var e;e="horizontal"===t.direction?Math.round((o.targetTouches[0].pageX-t.oldx)/t.fullw*100):Math.round((o.targetTouches[0].pageY-t.oldx)/t.fullw*100),t.down&&(t.posx=t.savex+e,t.posx>=100&&(t.posx=100),t.posx<=0&&(t.posx=0))}),document.addEventListener("touchend",function(o){t.down=!1,t.savex=t.posx})},mousedown:function(){this.down=!0,"horizontal"===this.direction?this.oldx=event.pageX:this.oldx=event.pageY},touchstart:function(){this.down=!0,"horizontal"===this.direction?this.oldx=event.targetTouches[0].pageX:this.oldx=event.targetTouches[0].pageY},left:function(){var t=this,o=setInterval(function(){t.posx--,t.posx<=0&&(t.posx=0,t.savex=0,clearInterval(o))},10)},right:function(){var t=this,o=setInterval(function(){t.posx++,t.posx>=100&&(t.posx=100,t.savex=100,clearInterval(o))},10)}},mounted:function(){var t=this,o=this.$refs.contrast,e=o.offsetWidth,n=new Image;n.src=o.querySelector("img").src,n.onload=function(){"horizontal"===t.direction?t.fullw=e:t.fullw=n.height/n.width*e,t.chuli()},window.addEventListener("resize",function(s){e=o.offsetWidth,"horizontal"===t.direction?t.fullw=e:t.fullw=n.height/n.width*e,t.chuli()})},props:{frontImg:{type:String,default:""},backImg:{type:String,default:""},direction:{type:String,default:"horizontal"},color:{type:String,default:"#3eaf7c"}}},s=(e(303),e(0)),i=Object(s.a)(n,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"contrast",staticClass:"lee-img-contrast",class:[t.direction],style:{color:t.color}},[e("div",{staticClass:"tool",style:"horizontal"===t.direction?"left:"+t.posx+"%":"top:"+t.posx+"%",on:{mousedown:function(o){return o.preventDefault(),t.mousedown(o)},touchstart:function(o){return o.preventDefault(),t.touchstart(o)}}},[e("div",{staticClass:"arrow"},[e("span",{staticClass:"le",on:{click:t.left}}),e("span",{staticClass:"ri",on:{click:t.right}})])]),t._v(" "),e("div",{staticClass:"front-img",style:"horizontal"===t.direction?"width:"+t.posx+"%":"height:"+t.posx+"%"},[e("div",{staticClass:"mark"}),t._v(" "),e("img",{attrs:{src:t.frontImg}})]),t._v(" "),e("div",{staticClass:"back-img"},[e("img",{attrs:{src:t.backImg}})])])},[],!1,null,null,null);o.default=i.exports}}]);