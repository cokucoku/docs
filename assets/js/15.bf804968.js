(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{230:function(t,e,s){"use strict";var i=s(3),n=s(13),r=s(14),o=s(75),c=s(73),a=s(5),h=s(96).f,u=s(97).f,l=s(8).f,d=s(98).trim,f=i.Number,p=f,g=f.prototype,v="Number"==r(s(74)(g)),m="trim"in String.prototype,w=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var s,i,n,r=(e=m?e.trim():d(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(s=e.charCodeAt(2))||120===s)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var o,a=e.slice(2),h=0,u=a.length;h<u;h++)if((o=a.charCodeAt(h))<48||o>n)return NaN;return parseInt(a,i)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof f&&(v?a(function(){g.valueOf.call(s)}):"Number"!=r(s))?o(new p(w(e)),s,f):w(e)};for(var y,x=s(7)?h(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)n(p,y=x[E])&&!n(f,y)&&l(f,y,u(p,y));f.prototype=g,g.constructor=f,s(10)(i,"Number",f)}},250:function(t,e,s){},323:function(t,e,s){"use strict";var i=s(250);s.n(i).a},391:function(t,e,s){"use strict";s.r(e);s(230),s(16),s(26),s(53),s(24);var i={name:"LeeGesturePassword",inheritAttrs:!1,data:function(){return{thetype:"",left:0,top:0,isDown:!1,pos:[],tempass:[],ctx:null,cw:0,sh:0,dotw:0}},watch:{type:{immediate:!0,handler:function(t){["square","circle","leaf"].filter(function(e){return e.indexOf(t)>-1}).length<1?this.thetype="circle":this.thetype=t}}},mounted:function(){var t=this,e=document.getElementById("path");this.ctx=e.getContext("2d");var s=this.$refs.dot;this.dotw=s[0].offsetWidth;var i=this.$refs.gesture,n=i.offsetWidth,r=i.offsetHeight;this.cw=n,this.sh=r,e.width=n,e.height=r,document.createElement("div").className="tips",this.isDown=!1,s.forEach(function(e,s){t.pos.push({xh:s+1,x:e.offsetLeft,y:e.offsetTop})});var o=document.documentElement.scrollTop||document.body.scrollTop,c=document.documentElement.scrollLeft||document.body.scrollLeft;this.left=i.getBoundingClientRect().left+c,this.top=i.getBoundingClientRect().top+o,this.chuli(),window.addEventListener("resize",function(e){t.left=i.getBoundingClientRect().left+c,t.top=i.getBoundingClientRect().top+o,t.chuli()})},methods:{chuli:function(){var t=this,e=this.$refs.gesture;e&&(e.addEventListener("mousedown",function(){event.preventDefault(),t.isDown=!0,t.markDot(event.pageX,event.pageY),t.drawPath(event.pageX,event.pageY)}),e.addEventListener("mousemove",function(){event.preventDefault(),t.isDown&&(t.markDot(event.pageX,event.pageY),t.drawPath(event.pageX,event.pageY))}),e.addEventListener("mouseup",function(){t.check()}),e.addEventListener("mouseleave",function(){t.isDown&&t.check()}),e.addEventListener("touchstart",function(){event.preventDefault(),t.isDown=!0,t.markDot(event.targetTouches[0].pageX,event.targetTouches[0].pageY),t.drawPath(event.targetTouches[0].pageX,event.targetTouches[0].pageY)}),e.addEventListener("touchmove",function(){event.preventDefault(),t.isDown&&(t.markDot(event.targetTouches[0].pageX,event.targetTouches[0].pageY),t.drawPath(event.targetTouches[0].pageX,event.targetTouches[0].pageY))}),e.addEventListener("touchend",function(){t.check()}))},check:function(){var t=this,e=this.$refs.dot,s=this.$refs.gesture,i=document.createElement("div");i.className="tips",this.isDown=!1;var n="";JSON.stringify(this.password)!=JSON.stringify(this.tempass)?(s.classList.add("error"),i.innerText="密码错误",n="err",this.drawErr()):(s.classList.remove("error"),i.innerText="验证成功",n="success"),this.$emit("check",n),this.tempass=[],s.appendChild(i),setTimeout(function(){return i.style.opacity=1},1),setTimeout(function(){i.style.opacity=0,setTimeout(function(){return i.remove()},500),t.ctx.clearRect(0,0,t.cw,t.sh),e.forEach(function(t){t.children[0].style.cssText=""}),s.classList.remove("error")},1500)},markDot:function(t,e){var s=this,i=t-this.left,n=e-this.top,r=this.pos.filter(function(t){return i-t.x<=s.dotw&&i-t.x>=0&&n-t.y<=s.dotw&&n-t.y>=0}),o=this.$refs.dot;r.length>0&&(o[r[0].xh-1].querySelector("i").style.opacity="1",this.tempass.indexOf(r[0].xh)<0&&this.tempass.push(r[0].xh))},drawPath:function(t,e){this.ctx.clearRect(0,0,this.cw,this.sh);var s=t-this.left,i=e-this.top;this.ctx.lineWidth=this.pathwidth,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.strokeStyle=this.successcolor,this.ctx.beginPath();for(var n=0;n<this.tempass.length;n++)this.ctx.lineTo(this.pos[this.tempass[n]-1].x+this.dotw/2,this.pos[this.tempass[n]-1].y+this.dotw/2);this.tempass.length>0&&this.ctx.lineTo(s,i),this.ctx.stroke(),this.ctx.closePath()},drawErr:function(){this.ctx.clearRect(0,0,this.cw,this.sh),this.ctx.strokeStyle=this.errorcolor,this.ctx.beginPath();for(var t=0;t<this.tempass.length;t++)this.ctx.lineTo(this.pos[this.tempass[t]-1].x+this.dotw/2,this.pos[this.tempass[t]-1].y+this.dotw/2);this.ctx.stroke(),this.ctx.closePath()}},props:{type:{type:String,default:"circle"},width:{type:Number,default:350},height:{type:Number,default:350},password:{type:Array,default:function(){return[]}},successcolor:{type:String,default:"#67c23a"},errorcolor:{type:String,default:"#f56c6c"},pathwidth:{type:Number,default:8}}},n=(s(323),s(0)),r=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"gesture",class:["lee-gesture-password",this.thetype],style:{width:this.width+"px",height:this.height+"px","--successcolor":this.successcolor,"--errorcolor":this.errorcolor}},[this._l(9,function(t){return e("div",{key:t,staticClass:"grid"},[e("div",{ref:"dot",refInFor:!0,staticClass:"dot"},[e("i")])])}),this._v(" "),e("canvas",{attrs:{id:"path"}})],2)},[],!1,null,null,null);e.default=r.exports}}]);