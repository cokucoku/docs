(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{282:function(t,s,e){},369:function(t,s,e){"use strict";e(282)},476:function(t,s,e){"use strict";e.r(s);var i={name:"LeeImgContrast",data:()=>({thedirection:"",fullw:0,posx:0,down:!1,oldx:0,savex:0}),watch:{direction:{immediate:!0,handler(t){["horizontal","vertical"].filter((function(s){return s.indexOf(t)>-1})).length<1?this.thedirection="horizontal":this.thedirection=t}}},methods:{chuli(){0===this.oldx&&(this.posx=50,this.savex=this.posx),document.addEventListener("mousedown",t=>{t.preventDefault()}),document.addEventListener("mousemove",t=>{let s;s="horizontal"===this.thedirection?Math.round((t.pageX-this.oldx)/this.fullw*100):Math.round((t.pageY-this.oldx)/this.fullw*100),this.down&&(this.posx=this.savex+s,this.posx>=100&&(this.posx=100),this.posx<=0&&(this.posx=0))}),document.addEventListener("mouseup",t=>{this.down=!1,this.savex=this.posx}),document.addEventListener("touchmove",t=>{let s;s="horizontal"===this.thedirection?Math.round((t.targetTouches[0].pageX-this.oldx)/this.fullw*100):Math.round((t.targetTouches[0].pageY-this.oldx)/this.fullw*100),this.down&&(this.posx=this.savex+s,this.posx>=100&&(this.posx=100),this.posx<=0&&(this.posx=0))}),document.addEventListener("touchend",t=>{this.down=!1,this.savex=this.posx})},mousedown(){this.down=!0,"horizontal"===this.thedirection?this.oldx=event.pageX:this.oldx=event.pageY},touchstart(){this.down=!0,"horizontal"===this.thedirection?this.oldx=event.targetTouches[0].pageX:this.oldx=event.targetTouches[0].pageY},left(){let t=setInterval(()=>{this.posx--,this.posx<=0&&(this.posx=0,this.savex=0,clearInterval(t))},10)},right(){let t=setInterval(()=>{this.posx++,this.posx>=100&&(this.posx=100,this.savex=100,clearInterval(t))},10)}},mounted(){let t=this.$refs.contrast,s=t.offsetWidth,e=new Image;e.src=t.querySelector("img").src,e.onload=()=>{"horizontal"===this.thedirection?this.fullw=s:this.fullw=e.height/e.width*s,this.chuli()},window.addEventListener("resize",i=>{s=t.offsetWidth,"horizontal"===this.thedirection?this.fullw=s:this.fullw=e.height/e.width*s,this.chuli()})},props:{frontImg:{type:String,default:"/imgcontrast/1.jpg"},backImg:{type:String,default:"/imgcontrast/2.jpg"},direction:{type:String,default:"horizontal"},color:{type:String,default:"#3eaf7c"}}},o=(e(369),e(10)),n=Object(o.a)(i,(function(){var t=this,s=t._self._c;return s("div",{ref:"contrast",staticClass:"lee-img-contrast",class:[t.thedirection],style:{color:t.color}},[s("div",{staticClass:"tool",style:"horizontal"===t.thedirection?"left:"+t.posx+"%":"top:"+t.posx+"%",on:{mousedown:function(s){return s.preventDefault(),t.mousedown.apply(null,arguments)},touchstart:function(s){return s.preventDefault(),t.touchstart.apply(null,arguments)}}},[s("div",{staticClass:"arrow"},[s("span",{staticClass:"le",on:{click:t.left}}),s("span",{staticClass:"ri",on:{click:t.right}})])]),t._v(" "),s("div",{staticClass:"front-img",style:"horizontal"===t.thedirection?"width:"+t.posx+"%":"height:"+t.posx+"%"},[s("div",{staticClass:"mark"}),t._v(" "),s("img",{attrs:{src:t.frontImg}})]),t._v(" "),s("div",{staticClass:"back-img"},[s("img",{attrs:{src:t.backImg}})])])}),[],!1,null,null,null);s.default=n.exports}}]);