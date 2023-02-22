(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{299:function(t,i,s){},396:function(t,i,s){"use strict";s(299)},547:function(t,i,s){"use strict";s.r(i);var e={name:"LeeLuckDraw",inheritAttrs:!1,data(){return{ctx:null,haveClick:!1,degBg:0,degPrizes:0,num:this.config.rollNum||6,speed:0,per:Math.PI/180,perGe:2*Math.PI/this.prizes.length,saveDegBg:0,saveDegPrizes:0,pid:0,position:0}},mounted(){let t=this.$refs.luckDraw;if(this.ctx=t.getContext("2d"),this.ctx.translate(this.config.width/2-this.config.padding,this.config.height/2-this.config.padding),this.prizes[0])for(let t=0;t<this.prizes.length;t++)this.prizes[t].fonts&&(this.ctx.beginPath(),this.ctx.fillStyle=this.prizes[t].background,this.ctx.moveTo(0,0),this.ctx.arc(0,0,this.config.width/2-this.config.padding,-this.perGe*t,-this.perGe*(t+1),!0),this.ctx.closePath(),this.ctx.fill())},methods:{beginDraw(){this.haveClick||(this.$emit("start"),this.haveClick=!0)},play(t){this.position=t,this.pid=setInterval(this.move,1)},move(){this.config.rotate?this.bgDong(this.position):this.prizesDong(this.position)},bgDong(t){let i=-this.perGe/2,s=2*this.num*Math.PI+(t-1)*this.perGe-i;this.degBg>=s/2+this.saveDegBg/2?(this.speed-=.01,this.speed<=.04&&(this.speed=.03)):this.speed+=.01,this.speed=Number(this.speed.toFixed(2)),this.degBg+=this.per*this.speed,this.degBg>=s&&(clearInterval(this.pid),this.degBg=(t-1)*this.perGe-i,this.saveDegBg=this.degBg,this.speed=0,setTimeout(()=>{this.$emit("end",this.position-1),this.haveClick=!1},100))},prizesDong(t){let i=-this.perGe/2,s=2*this.num*Math.PI+(t-1)*this.perGe-i;this.degPrizes>=s/2+this.saveDegPrizes/2?(this.speed-=.01,this.speed<=.04&&(this.speed=.03)):this.speed+=.01,this.speed=Number(this.speed.toFixed(2)),this.degPrizes+=this.per*this.speed,this.degPrizes>=s&&(clearInterval(this.pid),this.degPrizes=(t-1)*this.perGe-i,this.saveDegPrizes=this.degPrizes,this.speed=0,setTimeout(()=>{this.$emit("end",this.position-1),this.haveClick=!1},100))}},computed:{whichBg(){return this.config.backgroundImage?"url("+this.config.backgroundImage+")":this.config.backgroundColor}},props:{btnConfig:{type:Object,default:()=>({width:"60",background:"#d64737",fonts:[{text:"开始",fontColor:"#fff",top:"54%",fontSize:"16px"},{text:"消费10积分",fontColor:"#fff",top:"45%",fontSize:"12px"}]})},config:{type:Object,default:()=>({width:324,height:324,padding:10,fontSize:"14px",fontColor:"#d64737",backgroundColor:"#d64737",rollNum:12})},prizes:{type:Array,default:()=>[{fonts:{text:"1元红包",top:"80%"},imgs:{src:"/luckdraw/zp-0.png",width:"20%",top:"50%"},background:"#f9e3bb"},{fonts:{text:"100元红包",top:"80%"},imgs:{src:"/luckdraw/zp-1.png",width:"20%",top:"50%"},background:"#f8d384"},{fonts:{text:"0.5元红包",top:"80%"},imgs:{src:"/luckdraw/zp-2.png",width:"20%",top:"50%"},background:"#f9e3bb"},{fonts:{text:"2元红包",top:"80%"},imgs:{src:"/luckdraw/zp-3.png",width:"20%",top:"50%"},background:"#f8d384"},{fonts:{text:"10元红包",top:"80%"},imgs:{src:"/luckdraw/zp-4.png",width:"20%",top:"50%"},background:"#f9e3bb"},{fonts:{text:"50元红包",top:"80%"},imgs:{src:"/luckdraw/zp-5.png",width:"20%",top:"50%"},background:"#f8d384"},{fonts:{text:"0.3元红包",top:"80%"},imgs:{src:"/luckdraw/zp-6.png",width:"20%",top:"50%"},background:"#f9e3bb"},{fonts:{text:"5元红包",top:"80%"},imgs:{src:"/luckdraw/zp-7.png",width:"20%",top:"50%"},background:"#f8d384"}]}},directives:{width:{bind:function(t){let i=.01*t.dataset.scale.split("%")[0],s=t.childNodes[0];s.onload=()=>{t.style.width=s.width*i+"px",t.style.display="block",t.style.position="absolute"}}}}},o=(s(396),s(10)),n=Object(o.a)(e,(function(){var t=this,i=t._self._c;return i("div",{staticClass:"lee-luck-draw"},[i("div",{staticClass:"lee-luck-draw-layout",style:"width:"+t.config.width+"px;height:"+t.config.height+"px"},[i("div",{ref:"allBg",class:{bgcolor:!t.config.backgroundImage,bgimg:t.config.backgroundImage},style:"transform:rotate("+180*t.degBg/Math.PI+"deg);--w:"+t.config.width+"px;--h:"+t.config.height+"px;--bg:"+t.whichBg},[t.config.backgroundImage?i("img",{staticClass:"bcimg",attrs:{src:t.config.backgroundImage}}):t._e(),t._v(" "),i("div",{staticClass:"lee-luck-draw-prizes",style:"transform:rotate("+180*t.degPrizes/Math.PI+"deg)"},[i("canvas",{ref:"luckDraw",attrs:{width:t.config.width-2*t.config.padding,height:t.config.height-2*t.config.padding}}),t._v(" "),t.prizes[0].fonts?i("div",{staticClass:"prizes",style:"width:"+(t.config.width-2*t.config.padding)+"px;height:"+(t.config.height-2*t.config.padding)+"px"},[i("div",{staticClass:"prizesn"},t._l(t.prizes,(function(s,e){return i("div",{key:e,staticClass:"ge",style:"height:"+(t.config.width-2*t.config.padding)/2+"px;transformOrigin:0 "+(t.config.width-2*t.config.padding)/2+"px;transform:translateX(-50%) rotate(-"+(e*t.perGe*180/Math.PI+22.5)+"deg)"},[i("div",{staticClass:"text",style:"color:"+t.config.fontColor+";fontSize:"+t.config.fontSize+";bottom:"+s.fonts.top},[t._v("\n                "+t._s(s.fonts.text)+"\n              ")]),t._v(" "),i("div",{directives:[{name:"width",rawName:"v-width"}],staticClass:"img",style:"bottom:"+s.imgs.top,attrs:{"data-scale":s.imgs.width}},[i("img",{attrs:{src:s.imgs.src}})])])})),0)]):t._e()])]),t._v(" "),i("div",{staticClass:"btntextw",style:"width:"+(t.config.width-2*t.config.padding)+"px;height:"+(t.config.height-2*t.config.padding)+"px"},[i("div",{staticClass:"btntext",on:{click:t.beginDraw}},[i("div",{staticClass:"btn",style:"width:"+t.btnConfig.width+"px;height:"+t.btnConfig.width+"px;background:"+t.btnConfig.background},[t.btnConfig.imgs?t._e():i("div",{staticClass:"arrow",style:"--w:"+t.btnConfig.width/2+";--bc:"+t.btnConfig.background})]),t._v(" "),t._l(t.btnConfig.imgs,(function(t){return i("div",{directives:[{name:"width",rawName:"v-width"}],staticClass:"img",style:"bottom:"+t.top,attrs:{"data-scale":t.width}},[i("img",{attrs:{src:t.src}})])})),t._v(" "),t._l(t.btnConfig.fonts,(function(s){return i("div",{staticClass:"text",style:"color:"+s.fontColor+";fontSize:"+s.fontSize+";lineHeight:"+s.fontSize+";bottom:"+s.top,domProps:{innerHTML:t._s(s.text)}})}))],2)])])])}),[],!1,null,"80b65616",null);i.default=n.exports}}]);