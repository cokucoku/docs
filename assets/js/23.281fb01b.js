(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{234:function(t,e,n){"use strict";var i=n(3),r=n(13),o=n(14),a=n(75),s=n(73),u=n(5),c=n(96).f,l=n(97).f,d=n(8).f,f=n(98).trim,h=i.Number,p=h,g=h.prototype,v="Number"==o(n(74)(g)),m="trim"in String.prototype,N=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,i,r,o=(e=m?e.trim():f(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var a,u=e.slice(2),c=0,l=u.length;c<l;c++)if((a=u.charCodeAt(c))<48||a>r)return NaN;return parseInt(u,i)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?u(function(){g.valueOf.call(n)}):"Number"!=o(n))?a(new p(N(e)),n,h):N(e)};for(var E,b=n(7)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)r(p,E=b[C])&&!r(h,E)&&d(h,E,l(p,E));h.prototype=g,g.constructor=h,n(10)(i,"Number",h)}},279:function(t,e,n){},354:function(t,e,n){"use strict";var i=n(279);n.n(i).a},426:function(t,e,n){"use strict";n.r(e);n(234);var i={name:"LeeScratch",inheritAttrs:!1,data:function(){return{}},mounted:function(){var t,e,n=Math.round(Math.random()*(this.prizes.length-1)),i=this.prizes[n],r=this.$refs.canvas,o=r.getContext("2d"),a=this.$refs.canvasprizes.getContext("2d"),s=!1,u=this.background,c=this.textSize,l=this.size,d=this.textColor,f=this.width,h=this.height,p=this.stripe;!function(){a.save(),a.font=c+"px Arial",a.fillStyle=d,a.textBaseline="middle",a.textAlign="center";var t=i.text;a.fillText(t,f/2,h/2),a.restore()}(),function(){if(o.save(),p){for(var t=o.createLinearGradient(0,0,f,h),e=0;e<1;e+=.01){var n=Number(e.toFixed(2));t.addColorStop(n,u);var i=Number((n%.02).toFixed(2));.01===i&&t.addColorStop(n,"#fff")}o.fillStyle=t}else o.fillStyle=u;o.fillRect(0,0,f,h),o.restore()}();var g=this.$refs.scratch,v=document.documentElement.scrollTop,m=document.documentElement.scrollLeft,N=g.getBoundingClientRect().left+m,E=g.getBoundingClientRect().top+v;function b(){o.lineCap="round",o.lineJoin="round",o.strokeStyle="#000",o.lineWidth=l,r.addEventListener("mousedown",function(n){n.preventDefault(),t=n.pageX-N,e=n.pageY-E,o.moveTo(t,e),s=!0}),r.addEventListener("mousemove",function(t){s&&(o.globalCompositeOperation="destination-out",o.lineTo(t.pageX-N,t.pageY-E),o.stroke())}),r.addEventListener("mouseup",function(t){s=!1}),document.addEventListener("mouseup",function(t){s=!1}),r.addEventListener("touchstart",function(n){n.preventDefault(),console.log(n),t=n.targetTouches[0].pageX-N,e=n.targetTouches[0].pageY-E,o.moveTo(t,e),s=!0}),r.addEventListener("touchmove",function(t){s&&(o.globalCompositeOperation="destination-out",o.lineTo(t.targetTouches[0].pageX-N,t.targetTouches[0].pageY-E),o.stroke())}),r.addEventListener("touchend",function(t){s=!1}),document.addEventListener("touchend",function(t){s=!1})}console.log(g.getBoundingClientRect().top),b(),window.addEventListener("resize",function(){N=g.getBoundingClientRect().left+m,E=g.getBoundingClientRect().top+v,b()})},methods:{},props:{stripe:{type:Boolean,default:!1},width:{type:Number,default:260},height:{type:Number,default:112},size:{type:Number,default:20},textSize:{type:Number,default:30},background:{type:String,default:"#eee"},textColor:{type:String,default:"#f20"},prizes:{type:Array,default:function(){return[]}}}},r=(n(354),n(0)),o=Object(r.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"scratch",staticClass:"lee-scratch"},[e("canvas",{ref:"canvasprizes",attrs:{width:this.width,height:this.height}}),this._v(" "),e("canvas",{ref:"canvas",staticClass:"canvas",attrs:{width:this.width,height:this.height}})])},[],!1,null,null,null);e.default=o.exports}}]);