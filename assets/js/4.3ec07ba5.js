(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{230:function(t,i,e){"use strict";var s=e(3),n=e(13),r=e(14),o=e(75),a=e(73),h=e(5),c=e(96).f,g=e(97).f,d=e(8).f,f=e(98).trim,l=s.Number,p=l,u=l.prototype,v="Number"==r(e(74)(u)),m="trim"in String.prototype,b=function(t){var i=a(t,!1);if("string"==typeof i&&i.length>2){var e,s,n,r=(i=m?i.trim():f(i,3)).charCodeAt(0);if(43===r||45===r){if(88===(e=i.charCodeAt(2))||120===e)return NaN}else if(48===r){switch(i.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+i}for(var o,h=i.slice(2),c=0,g=h.length;c<g;c++)if((o=h.charCodeAt(c))<48||o>n)return NaN;return parseInt(h,s)}}return+i};if(!l(" 0o1")||!l("0b1")||l("+0x1")){l=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof l&&(v?h(function(){u.valueOf.call(e)}):"Number"!=r(e))?o(new p(b(i)),e,l):b(i)};for(var w,C=e(7)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)n(p,w=C[I])&&!n(l,w)&&d(l,w,g(p,w));l.prototype=u,u.constructor=l,e(10)(s,"Number",l)}},231:function(t,i,e){var s=e(2);s(s.P,"Array",{fill:e(232)}),e(101)("fill")},232:function(t,i,e){"use strict";var s=e(19),n=e(100),r=e(15);t.exports=function(t){for(var i=s(this),e=r(i.length),o=arguments.length,a=n(o>1?arguments[1]:void 0,e),h=o>2?arguments[2]:void 0,c=void 0===h?e:n(h,e);c>a;)i[a++]=t;return i}},257:function(t,i,e){},330:function(t,i,e){"use strict";var s=e(257);e.n(s).a},398:function(t,i,e){"use strict";e.r(i);e(99),e(230),e(231);var s={name:"LeeLuckDraw",inheritAttrs:!1,data:function(){return{ctx:null,haveClick:!1,degBg:0,degPrizes:0,num:this.config.rollNum||6,speed:0,per:Math.PI/180,perGe:2*Math.PI/this.prizes.length,saveDegBg:0,saveDegPrizes:0,pid:0,position:0}},mounted:function(){var t=this.$refs.luckDraw;if(this.ctx=t.getContext("2d"),this.ctx.translate(this.config.width/2-this.config.padding,this.config.height/2-this.config.padding),this.prizes[0])for(var i=0;i<this.prizes.length;i++)this.prizes[i].fonts&&(this.ctx.beginPath(),this.ctx.fillStyle=this.prizes[i].background,this.ctx.moveTo(0,0),this.ctx.arc(0,0,this.config.width/2-this.config.padding,-this.perGe*i,-this.perGe*(i+1),!0),this.ctx.closePath(),this.ctx.fill())},methods:{beginDraw:function(){this.haveClick||(this.$emit("start"),this.haveClick=!0)},play:function(t){this.position=t,this.pid=setInterval(this.move,1)},move:function(){this.config.rotate?this.bgDong(this.position):this.prizesDong(this.position)},bgDong:function(t){var i=this,e=-this.perGe/2,s=2*this.num*Math.PI+(t-1)*this.perGe-e;this.degBg>=s/2+this.saveDegBg/2?(this.speed-=.01,this.speed<=.04&&(this.speed=.03)):this.speed+=.01,this.speed=Number(this.speed.toFixed(2)),this.degBg+=this.per*this.speed,this.degBg>=s&&(clearInterval(this.pid),this.degBg=(t-1)*this.perGe-e,this.saveDegBg=this.degBg,this.speed=0,setTimeout(function(){i.$emit("end",i.position-1),i.haveClick=!1},100))},prizesDong:function(t){var i=this,e=-this.perGe/2,s=2*this.num*Math.PI+(t-1)*this.perGe-e;this.degPrizes>=s/2+this.saveDegPrizes/2?(this.speed-=.01,this.speed<=.04&&(this.speed=.03)):this.speed+=.01,this.speed=Number(this.speed.toFixed(2)),this.degPrizes+=this.per*this.speed,this.degPrizes>=s&&(clearInterval(this.pid),this.degPrizes=(t-1)*this.perGe-e,this.saveDegPrizes=this.degPrizes,this.speed=0,setTimeout(function(){i.$emit("end",i.position-1),i.haveClick=!1},100))}},computed:{whichBg:function(){return this.config.backgroundImage?"url("+this.config.backgroundImage+")":this.config.backgroundColor}},props:{btnConfig:{type:Object,default:function(){return{}}},config:{type:Object,default:function(){return{}}},prizes:{type:Array,default:function(){return[]}}},directives:{width:{bind:function(t){var i=.01*t.dataset.scale.split("%")[0],e=t.childNodes[0];e.onload=function(){t.style.width=e.width*i+"px",t.style.display="block",t.style.position="absolute"}}}}},n=(e(330),e(0)),r=Object(n.a)(s,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lee-luck-draw"},[e("div",{staticClass:"lee-luck-draw-layout",style:"width:"+t.config.width+"px;height:"+t.config.height+"px"},[e("div",{ref:"allBg",class:{bgcolor:!t.config.backgroundImage,bgimg:t.config.backgroundImage},style:"transform:rotate("+180*t.degBg/Math.PI+"deg);--w:"+t.config.width+"px;--h:"+t.config.height+"px;--bg:"+t.whichBg},[t.config.backgroundImage?e("img",{staticClass:"bcimg",attrs:{src:t.config.backgroundImage}}):t._e(),t._v(" "),e("div",{staticClass:"lee-luck-draw-prizes",style:"transform:rotate("+180*t.degPrizes/Math.PI+"deg)"},[e("canvas",{ref:"luckDraw",attrs:{width:t.config.width-2*t.config.padding,height:t.config.height-2*t.config.padding}}),t._v(" "),t.prizes[0].fonts?e("div",{staticClass:"prizes",style:"width:"+(t.config.width-2*t.config.padding)+"px;height:"+(t.config.height-2*t.config.padding)+"px"},[e("div",{staticClass:"prizesn"},t._l(t.prizes,function(i,s){return e("div",{key:s,staticClass:"ge",style:"height:"+(t.config.width-2*t.config.padding)/2+"px;transformOrigin:0 "+(t.config.width-2*t.config.padding)/2+"px;transform:translateX(-50%) rotate(-"+(s*t.perGe*180/Math.PI+22.5)+"deg)"},[e("div",{staticClass:"text",style:"color:"+t.config.fontColor+";fontSize:"+t.config.fontSize+";bottom:"+i.fonts.top},[t._v("\n                "+t._s(i.fonts.text)+"\n              ")]),t._v(" "),e("div",{directives:[{name:"width",rawName:"v-width"}],staticClass:"img",style:"bottom:"+i.imgs.top,attrs:{"data-scale":i.imgs.width}},[e("img",{attrs:{src:i.imgs.src}})])])}),0)]):t._e()])]),t._v(" "),e("div",{staticClass:"btntextw",style:"width:"+(t.config.width-2*t.config.padding)+"px;height:"+(t.config.height-2*t.config.padding)+"px"},[e("div",{staticClass:"btntext",on:{click:t.beginDraw}},[e("div",{staticClass:"btn",style:"width:"+t.btnConfig.width+"px;height:"+t.btnConfig.width+"px;background:"+t.btnConfig.background},[t.btnConfig.imgs?t._e():e("div",{staticClass:"arrow",style:"--w:"+t.btnConfig.width/2+";--bc:"+t.btnConfig.background})]),t._v(" "),t._l(t.btnConfig.imgs,function(t){return e("div",{directives:[{name:"width",rawName:"v-width"}],staticClass:"img",style:"bottom:"+t.top,attrs:{"data-scale":t.width}},[e("img",{attrs:{src:t.src}})])}),t._v(" "),t._l(t.btnConfig.fonts,function(i){return e("div",{staticClass:"text",style:"color:"+i.fontColor+";fontSize:"+i.fontSize+";lineHeight:"+i.fontSize+";bottom:"+i.top,domProps:{innerHTML:t._s(i.text)}})})],2)])])])},[],!1,null,"97a6c686",null);i.default=r.exports}}]);