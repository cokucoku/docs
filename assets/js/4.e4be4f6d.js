(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(t,i,s){"use strict";var h=s(3),e=s(13),n=s(14),o=s(75),c=s(73),r=s(5),a=s(96).f,g=s(97).f,f=s(8).f,l=s(98).trim,d=h.Number,x=d,p=d.prototype,u="Number"==n(s(74)(p)),w="trim"in String.prototype,v=function(t){var i=c(t,!1);if("string"==typeof i&&i.length>2){var s,h,e,n=(i=w?i.trim():l(i,3)).charCodeAt(0);if(43===n||45===n){if(88===(s=i.charCodeAt(2))||120===s)return NaN}else if(48===n){switch(i.charCodeAt(1)){case 66:case 98:h=2,e=49;break;case 79:case 111:h=8,e=55;break;default:return+i}for(var o,r=i.slice(2),a=0,g=r.length;a<g;a++)if((o=r.charCodeAt(a))<48||o>e)return NaN;return parseInt(r,h)}}return+i};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var i=arguments.length<1?0:t,s=this;return s instanceof d&&(u?r(function(){p.valueOf.call(s)}):"Number"!=n(s))?o(new x(v(i)),s,d):v(i)};for(var b,I=s(7)?a(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),m=0;I.length>m;m++)e(x,b=I[m])&&!e(d,b)&&f(d,b,g(x,b));d.prototype=p,p.constructor=d,s(10)(h,"Number",d)}},229:function(t,i,s){var h=s(2);h(h.P,"Array",{fill:s(230)}),s(103)("fill")},230:function(t,i,s){"use strict";var h=s(19),e=s(102),n=s(16);t.exports=function(t){for(var i=h(this),s=n(i.length),o=arguments.length,c=e(o>1?arguments[1]:void 0,s),r=o>2?arguments[2]:void 0,a=void 0===r?s:e(r,s);a>c;)i[c++]=t;return i}},252:function(t,i,s){},321:function(t,i,s){"use strict";var h=s(252);s.n(h).a},385:function(t,i,s){"use strict";s.r(i);s(226),s(104),s(229);var h={name:"LeeLuckDraw",inheritAttrs:!1,data:function(){return{ctx:null,haveClick:!1,deg:0,num:this.config.rollNum||6,speed:0,per:Math.PI/180,perGe:2*Math.PI/this.prizes.length,saveDeg:0,pid:0,position:0}},mounted:function(){var t=this,i=this.$refs.luckDraw;this.ctx=i.getContext("2d"),this.pan(),i.addEventListener("click",function(i){var s=i.offsetX,h=i.offsetY;t.ctx.isPointInPath(s,h)&&!t.haveClick&&(t.$emit("start"),t.haveClick=!0)})},methods:{pan:function(){this.panBg(),this.roll(),this.waterMark(),this.btn()},panDong:function(){this.ctx.clearRect(0,0,this.config.width,this.config.height),this.config.rotate?(this.panBgDong(),this.roll()):(this.panBg(),this.rollDong()),this.waterMark(),this.btn()},panBg:function(){if(this.ctx.save(),this.config.backgroundImage){var t=new Image;t.src=this.config.backgroundImage;var i=this.config.width/t.width;this.ctx.drawImage(t,0,0,t.width*i,t.height*i)}else this.ctx.fillStyle=this.config.backgroundColor,this.ctx.beginPath(),this.ctx.arc(this.config.width/2,this.config.height/2,this.config.width/2,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill();this.ctx.restore()},panBgDong:function(){if(this.ctx.save(),this.ctx.translate(this.config.width/2,this.config.height/2),this.ctx.rotate(this.deg),this.ctx.save(),this.ctx.translate(-this.config.width/2,-this.config.height/2),this.config.backgroundImage){var t=new Image;t.src=this.config.backgroundImage;var i=this.config.width/t.width;this.ctx.drawImage(t,0,0,t.width*i,t.height*i)}else this.ctx.fillStyle=this.config.backgroundColor,this.ctx.beginPath(),this.ctx.arc(this.config.width/2,this.config.height/2,this.config.width/2,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill();this.ctx.restore(),this.ctx.restore(),this.dong(this.position,!0)},roll:function(){this.ctx.save(),this.ctx.translate(this.config.width/2,this.config.height/2),this.ctx.rotate(this.deg-Math.PI/2),this.ctx.save(),this.ctx.translate(-this.config.width/2,-this.config.height/2),this.ge(),this.prize(),this.ctx.restore(),this.ctx.restore()},rollDong:function(){this.ctx.save(),this.ctx.translate(this.config.width/2,this.config.height/2),this.ctx.rotate(this.deg-Math.PI/2),this.ctx.save(),this.ctx.translate(-this.config.width/2,-this.config.height/2),this.ge(),this.prize(),this.ctx.restore(),this.ctx.restore(),this.dong(this.position)},ge:function(){this.ctx.save();for(var t=0;t<this.prizes.length;t++)this.prizes[t].fonts&&(this.ctx.beginPath(),this.ctx.fillStyle=this.prizes[t].background,this.ctx.moveTo(this.config.width/2,this.config.height/2),this.ctx.arc(this.config.width/2,this.config.height/2,this.config.width/2-this.config.padding,-this.perGe*t,-this.perGe*(t+1),!0),this.ctx.closePath(),this.ctx.fill());this.ctx.restore()},prize:function(){this.ctx.save(),this.ctx.translate(this.config.width/2,this.config.height/2),this.ctx.rotate(this.perGe/2);for(var t=0;t<this.prizes.length;t++)if(this.prizes[t].fonts){this.ctx.font=this.config.fontSize+" Microsoft YaHei",this.ctx.fillStyle=this.config.fontColor,this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.rotate(-this.perGe),this.ctx.save();var i=this.prizes[t].fonts.top.split("%")[0];this.ctx.translate((this.config.width/2-this.config.padding)*i*.01,0),this.ctx.rotate(Math.PI/2),this.ctx.fillText(this.prizes[t].fonts.text,0,0),this.ctx.restore(),this.ctx.save();var s=new Image;s.src=this.prizes[t].imgs.src;var h=this.prizes[t].imgs.top.split("%")[0],e=this.prizes[t].imgs.width.split("%")[0];this.ctx.translate((this.config.width/2-this.config.padding)*h*.01,0),this.ctx.rotate(Math.PI/2),this.ctx.drawImage(s,0,0,s.width,s.height,-s.width/2*e*.01,0,s.width*e*.01,s.height*e*.01),this.ctx.restore()}this.ctx.restore()},btn:function(){if(this.ctx.save(),this.ctx.fillStyle=this.btnConfig.background,this.ctx.beginPath(),this.ctx.arc(this.config.width/2,this.config.height/2,this.btnConfig.width/2,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore(),this.btnConfig.imgs){this.ctx.save();for(var t=0;t<this.btnConfig.imgs.length;t++){var i=this.btnConfig.imgs[t].top.split("%")[0],s=this.btnConfig.imgs[t].width.split("%")[0];i*=.01,s*=.01;var h=new Image;h.src=this.btnConfig.imgs[t].src,this.ctx.drawImage(h,0,0,h.width,h.height,this.config.width/2-h.width*s/2,this.config.height-this.config.height*i-h.height*s/2,h.width*s,h.height*s)}this.ctx.restore()}else this.ctx.save(),this.ctx.fillStyle=this.btnConfig.background,this.ctx.beginPath(),this.ctx.moveTo(this.config.width/2+this.btnConfig.width/2-this.btnConfig.width/8,this.config.width/2),this.ctx.lineTo(this.config.width/2-this.btnConfig.width/2+this.btnConfig.width/8,this.config.width/2),this.ctx.lineTo(this.config.width/2,this.config.width/2-1.8*this.btnConfig.width/2),this.ctx.closePath(),this.ctx.fill(),this.ctx.restore();if(this.btnConfig.fonts)for(var e=0;e<this.btnConfig.fonts.length;e++){this.ctx.save(),this.ctx.font=this.btnConfig.fonts[e].fontSize+" Microsoft YaHei",this.ctx.fillStyle=this.btnConfig.fonts[e].fontColor,this.ctx.textBaseline="bottom",this.ctx.textAlign="center";var n=this.btnConfig.fonts[e].top.split("%")[0];n*=.01;for(var o=Number(this.btnConfig.fonts[e].fontSize.split("px")[0]),c=this.btnConfig.fonts[e].text.split("\n"),r=0;r<c.length;r++)this.ctx.fillText(c[r],this.config.width/2,this.config.width/2+this.btnConfig.width/2-this.btnConfig.width*n+o/2+r*o);this.ctx.restore()}},waterMark:function(){this.ctx.save(),this.ctx.font="12px Microsoft YaHei",this.ctx.fillStyle="rgba(0,0,0,.2)",this.ctx.textBaseline="top",this.ctx.textAlign="left",this.ctx.fillText("Leeao版权所有",0,2),this.ctx.restore()},play:function(t){this.position=t,this.pid=setInterval(this.panDong,1)},dong:function(t,i){var s=this;if(void 0===t)this.deg=0;else{var h;h=(i&&this.prizes[0].fonts,-this.perGe/2);var e=2*this.num*Math.PI+(t-1)*this.perGe-h;this.deg>=e/2+this.saveDeg/2?(this.speed-=.01,this.speed<=.04&&(this.speed=.03)):this.speed+=.01,this.speed=Number(this.speed.toFixed(2)),this.deg+=this.per*this.speed,this.deg>=e&&(clearInterval(this.pid),this.deg=(t-1)*this.perGe-h,this.saveDeg=this.deg,this.speed=0,setTimeout(function(){s.$emit("end",s.position-1),s.haveClick=!1},100))}}},props:{btnConfig:{type:Object,default:function(){return{}}},config:{type:Object,default:function(){return{}}},prizes:{type:Array,default:function(){return[]}}}},e=(s(321),s(0)),n=Object(e.a)(h,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"lee-luck-draw"},[i("canvas",{ref:"luckDraw",attrs:{width:this.config.width,height:this.config.height}})])},[],!1,null,"67d733e4",null);i.default=n.exports}}]);