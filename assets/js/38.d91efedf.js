(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{250:function(t,e,o){},322:function(t,e,o){"use strict";var n=o(250);o.n(n).a},389:function(t,e,o){"use strict";o.r(e);o(53),o(24);var n={name:"LeeImgContrast",data:function(){return{thedirection:"",fullw:0,posx:0,down:!1,oldx:0,savex:0}},watch:{direction:{immediate:!0,handler:function(t){["horizontal","vertical"].filter(function(e){return e.indexOf(t)>-1}).length<1?this.thedirection="horizontal":this.thedirection=t}}},methods:{chuli:function(){var t=this;0===this.oldx&&(this.posx=50,this.savex=this.posx),document.addEventListener("mousedown",function(t){t.preventDefault()}),document.addEventListener("mousemove",function(e){var o;o="horizontal"===t.thedirection?Math.round((e.pageX-t.oldx)/t.fullw*100):Math.round((e.pageY-t.oldx)/t.fullw*100),t.down&&(t.posx=t.savex+o,t.posx>=100&&(t.posx=100),t.posx<=0&&(t.posx=0))}),document.addEventListener("mouseup",function(e){t.down=!1,t.savex=t.posx}),document.addEventListener("touchmove",function(e){var o;o="horizontal"===t.thedirection?Math.round((e.targetTouches[0].pageX-t.oldx)/t.fullw*100):Math.round((e.targetTouches[0].pageY-t.oldx)/t.fullw*100),t.down&&(t.posx=t.savex+o,t.posx>=100&&(t.posx=100),t.posx<=0&&(t.posx=0))}),document.addEventListener("touchend",function(e){t.down=!1,t.savex=t.posx})},mousedown:function(){this.down=!0,"horizontal"===this.thedirection?this.oldx=event.pageX:this.oldx=event.pageY},touchstart:function(){this.down=!0,"horizontal"===this.thedirection?this.oldx=event.targetTouches[0].pageX:this.oldx=event.targetTouches[0].pageY},left:function(){var t=this,e=setInterval(function(){t.posx--,t.posx<=0&&(t.posx=0,t.savex=0,clearInterval(e))},10)},right:function(){var t=this,e=setInterval(function(){t.posx++,t.posx>=100&&(t.posx=100,t.savex=100,clearInterval(e))},10)}},mounted:function(){var t=this,e=this.$refs.contrast,o=e.offsetWidth,n=new Image;n.src=e.querySelector("img").src,n.onload=function(){"horizontal"===t.thedirection?t.fullw=o:t.fullw=n.height/n.width*o,t.chuli()},window.addEventListener("resize",function(i){o=e.offsetWidth,"horizontal"===t.thedirection?t.fullw=o:t.fullw=n.height/n.width*o,t.chuli()})},props:{frontImg:{type:String,default:""},backImg:{type:String,default:""},direction:{type:String,default:"horizontal"},color:{type:String,default:"#3eaf7c"}}},i=(o(322),o(0)),s=Object(i.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"contrast",staticClass:"lee-img-contrast",class:[t.thedirection],style:{color:t.color}},[o("div",{staticClass:"tool",style:"horizontal"===t.thedirection?"left:"+t.posx+"%":"top:"+t.posx+"%",on:{mousedown:function(e){return e.preventDefault(),t.mousedown(e)},touchstart:function(e){return e.preventDefault(),t.touchstart(e)}}},[o("div",{staticClass:"arrow"},[o("span",{staticClass:"le",on:{click:t.left}}),o("span",{staticClass:"ri",on:{click:t.right}})])]),t._v(" "),o("div",{staticClass:"front-img",style:"horizontal"===t.thedirection?"width:"+t.posx+"%":"height:"+t.posx+"%"},[o("div",{staticClass:"mark"}),t._v(" "),o("img",{attrs:{src:t.frontImg}})]),t._v(" "),o("div",{staticClass:"back-img"},[o("img",{attrs:{src:t.backImg}})])])},[],!1,null,null,null);e.default=s.exports}}]);