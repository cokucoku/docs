(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{311:function(t,e,s){},408:function(t,e,s){"use strict";s(311)},559:function(t,e,s){"use strict";s.r(e);var i={name:"LeeTProgress",data:()=>({b:0,st:null,lastPercent:0}),mounted(){this.animate?this.dong():(this.b=this.lastPercent,"circle"===this.type&&this.drawStatic())},computed:{},methods:{dong(){this.b+=1,"circle"===this.type&&this.drawFrame(),this.b>=this.lastPercent||requestAnimationFrame(this.dong)},drawFrame(){let t=this.$refs.canvas.getContext("2d");t.clearRect(0,0,2*this.radius+2*this.strokeWidth,2*this.radius+2*this.strokeWidth),this.backgroundCircle(t),this.text(t),this.foregroundCircle(t)},drawStatic(){let t=this.$refs.canvas.getContext("2d");this.backgroundCircle(t),this.text(t),this.foregroundCircle(t)},backgroundCircle(t){t.lineWidth=this.strokeWidth,t.strokeStyle=this.backgroundColor;let e=this.radius+this.strokeWidth,s=this.radius+this.strokeWidth;t.save(),t.beginPath(),t.arc(e,s,this.radius,0,2*Math.PI),t.stroke(),t.closePath(),t.restore()},text(t){let e=this.radius+this.strokeWidth,s=this.radius+this.strokeWidth;t.fillStyle=this.activeColor;let i=this.radius/2.2;t.font=i+"px Helvetica",t.save();let r=t.measureText(this.b.toFixed(0)+"%").width;t.fillText(this.b.toFixed(0)+"%",e-r/2,s+i/2),t.restore()},foregroundCircle(t){let e=this.radius+this.strokeWidth,s=this.radius+this.strokeWidth,i=2*Math.PI/100;t.strokeStyle=this.activeColor,t.lineCap="round",t.save(),t.beginPath(),t.arc(e,s,this.radius,-Math.PI/2,-Math.PI/2+i*this.b),t.stroke(),t.closePath(),t.restore()}},watch:{percent:{immediate:!0,handler(t){this.lastPercent=t>100?100:t}}},props:{type:{type:String,default:"line"},radius:{type:Number,default:64},percent:{type:Number,default:10},strokeWidth:{type:Number,default:3},borderRadius:{type:Number,default:0},activeColor:{type:String,default:"#09BB07"},backgroundColor:{type:String,default:"#EBEBEB"},showInfo:{type:Boolean,default:!1},animate:{type:Boolean,default:!1}}},r=(s(408),s(10)),a=Object(r.a)(i,(function(){var t=this,e=t._self._c;return"line"===t.type?e("div",{staticClass:"lee-progress",style:"--h:"+t.strokeWidth+"px;--bgcolor:"+t.backgroundColor+";--atcolor:"+t.activeColor+";--bordius:"+t.borderRadius+"px;--percent:"+t.lastPercent+"%"},[e("div",{staticClass:"lee-progress-bar"},[e("div",{staticClass:"lee-progress-inner-bar",style:"width:"+t.b+"%"})]),t._v(" "),t.showInfo?e("div",{staticClass:"lee-progress-info"},[t._v(t._s(t.b)+"%")]):t._e()]):e("div",{staticClass:"lee-progress-circle"},[e("canvas",{ref:"canvas",attrs:{width:2*t.radius+2*t.strokeWidth,height:2*t.radius+2*t.strokeWidth}})])}),[],!1,null,null,null);e.default=a.exports}}]);