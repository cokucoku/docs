(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{315:function(e,t,n){},412:function(e,t,n){"use strict";n(315)},562:function(e,t,n){"use strict";n.r(t);var i={name:"LeeScratch",inheritAttrs:!1,data:()=>({}),mounted(){let e,t,n=Math.round(Math.random()*(this.prizes.length-1)),i=this.prizes[n],o=this.$refs.canvas,s=o.getContext("2d"),a=this.$refs.canvasprizes.getContext("2d"),r=!1,l=this.background,d=this.textSize,u=this.size,c=this.textColor,h=this.width,p=this.height,f=this.stripe;!function(){a.save(),a.font=d+"px Arial",a.fillStyle=c,a.textBaseline="middle",a.textAlign="center";let e=i.text;a.fillText(e,h/2,p/2),a.restore()}(),function(){if(s.save(),f){let e=s.createLinearGradient(0,0,h,p);for(let t=0;t<1;t+=.01){let n=Number(t.toFixed(2));e.addColorStop(n,l),.01===Number((n%.02).toFixed(2))&&e.addColorStop(n,"#fff")}s.fillStyle=e}else s.fillStyle=l;s.fillRect(0,0,h,p),s.restore()}();let g=this.$refs.scratch,m=document.documentElement.scrollTop,v=document.documentElement.scrollLeft,C=g.getBoundingClientRect().left+v,w=g.getBoundingClientRect().top+m;function x(){s.lineCap="round",s.lineJoin="round",s.strokeStyle="#000",s.lineWidth=u,o.addEventListener("mousedown",n=>{n.preventDefault(),e=n.pageX-C,t=n.pageY-w,s.moveTo(e,t),r=!0}),o.addEventListener("mousemove",e=>{r&&(s.globalCompositeOperation="destination-out",s.lineTo(e.pageX-C,e.pageY-w),s.stroke())}),o.addEventListener("mouseup",e=>{r=!1}),document.addEventListener("mouseup",e=>{r=!1}),o.addEventListener("touchstart",n=>{n.preventDefault(),console.log(n),e=n.targetTouches[0].pageX-C,t=n.targetTouches[0].pageY-w,s.moveTo(e,t),r=!0}),o.addEventListener("touchmove",e=>{r&&(s.globalCompositeOperation="destination-out",s.lineTo(e.targetTouches[0].pageX-C,e.targetTouches[0].pageY-w),s.stroke())}),o.addEventListener("touchend",e=>{r=!1}),document.addEventListener("touchend",e=>{r=!1})}console.log(g.getBoundingClientRect().top),x(),window.addEventListener("resize",()=>{C=g.getBoundingClientRect().left+v,w=g.getBoundingClientRect().top+m,x()})},methods:{},props:{stripe:{type:Boolean,default:!1},width:{type:Number,default:260},height:{type:Number,default:112},size:{type:Number,default:20},textSize:{type:Number,default:30},background:{type:String,default:"#eee"},textColor:{type:String,default:"#f20"},prizes:{type:Array,default:()=>[]}}},o=(n(412),n(10)),s=Object(o.a)(i,(function(){var e=this._self._c;return e("div",{ref:"scratch",staticClass:"lee-scratch"},[e("canvas",{ref:"canvasprizes",attrs:{width:this.width,height:this.height}}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:this.width,height:this.height}})])}),[],!1,null,null,null);t.default=s.exports}}]);