(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{234:function(t,e,i){"use strict";var o=i(3),s=i(13),n=i(14),r=i(75),a=i(73),h=i(5),c=i(96).f,u=i(97).f,l=i(8).f,f=i(98).trim,d=o.Number,p=d,g=d.prototype,m="Number"==n(i(74)(g)),v="trim"in String.prototype,x=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var i,o,s,n=(e=v?e.trim():f(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:o=2,s=49;break;case 79:case 111:o=8,s=55;break;default:return+e}for(var r,h=e.slice(2),c=0,u=h.length;c<u;c++)if((r=h.charCodeAt(c))<48||r>s)return NaN;return parseInt(h,o)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof d&&(m?h(function(){g.valueOf.call(i)}):"Number"!=n(i))?r(new p(x(e)),i,d):x(e)};for(var w,N=i(7)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;N.length>b;b++)s(p,w=N[b])&&!s(d,w)&&l(d,w,u(p,w));d.prototype=g,g.constructor=d,i(10)(o,"Number",d)}},278:function(t,e,i){},353:function(t,e,i){"use strict";var o=i(278);i.n(o).a},425:function(t,e,i){"use strict";i.r(e);i(234);var o={name:"LeeScratch",inheritAttrs:!1,data:function(){return{down:!1,ctxprizes:null,ctx:null,oldX:0,oldY:0,offsetX:0,offsetY:0}},mounted:function(){var t=this;this.createPrizes(),this.fillRect(),this.chuli(),window.addEventListener("resize",function(){t.chuli()})},methods:{createPrizes:function(){var t=Math.round(Math.random()*(this.prizes.length-1)),e=this.prizes[t],i=this.$refs.canvasprizes.getContext("2d");this.ctxprizes=i,i.save(),i.font=this.textSize+"px Arial",i.fillStyle=this.textColor,i.textBaseline="middle",i.textAlign="center";var o=e.text;i.fillText(o,this.width/2,this.height/2),i.restore()},fillRect:function(){var t=this.$refs.canvas.getContext("2d");if(this.ctx=t,t.save(),this.stripe){for(var e=t.createLinearGradient(0,0,this.width,this.height),i=0;i<1;i+=.01){var o=Number(i.toFixed(2));e.addColorStop(o,this.background),.01===Number((o%.02).toFixed(2))&&e.addColorStop(o,"#fff")}t.fillStyle=e}else t.fillStyle=this.background;t.fillRect(0,0,this.width,this.height),t.restore()},chuli:function(){var t=this.$refs.scratch;if(t){var e=document.documentElement.scrollTop||document.body.scrollTop,i=document.documentElement.scrollLeft||document.body.scrollLeft;this.offsetX=t.getBoundingClientRect().left+i,this.offsetY=t.getBoundingClientRect().top+e}},mousedown:function(t){this.oldX=t.pageX-this.offsetX,this.oldY=t.pageY-this.offsetY,this.ctx.moveTo(this.oldX,this.oldY),this.down=!0},mousemove:function(t){this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.strokeStyle="#000",this.ctx.lineWidth=this.size,this.down&&(this.ctx.globalCompositeOperation="destination-out",this.ctx.lineTo(t.pageX-this.offsetX,t.pageY-this.offsetY),this.ctx.stroke())},touchstart:function(t){this.oldX=t.targetTouches[0].pageX-this.offsetX,this.oldY=t.targetTouches[0].pageY-this.offsetY,this.ctx.moveTo(this.oldX,this.oldY),this.down=!0},touchmove:function(t){this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.strokeStyle="#000",this.ctx.lineWidth=this.size,this.down&&(this.ctx.globalCompositeOperation="destination-out",this.ctx.lineTo(t.targetTouches[0].pageX-this.offsetX,t.targetTouches[0].pageY-this.offsetY),this.ctx.stroke())}},props:{stripe:{type:Boolean,default:!1},width:{type:Number,default:260},height:{type:Number,default:112},size:{type:Number,default:20},textSize:{type:Number,default:30},background:{type:String,default:"#eee"},textColor:{type:String,default:"#f20"},prizes:{type:Array,default:function(){return[]}}}},s=(i(353),i(0)),n=Object(s.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scratch",staticClass:"lee-scratch"},[i("canvas",{ref:"canvasprizes",attrs:{width:t.width,height:t.height}}),t._v(" "),i("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:t.width,height:t.height},on:{mousedown:function(e){return e.stopPropagation(),t.mousedown(e)},mousemove:function(e){return e.stopPropagation(),t.mousemove(e)},mouseup:function(e){e.stopPropagation(),t.down=!1},mouseleave:function(e){t.down=!1},touchstart:function(e){return e.stopPropagation(),t.touchstart(e)},touchmove:function(e){return e.stopPropagation(),t.touchmove(e)},touchend:function(e){e.stopPropagation(),t.down=!1}}})])},[],!1,null,null,null);e.default=n.exports}}]);