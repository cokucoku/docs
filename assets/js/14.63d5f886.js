(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{229:function(t,e,s){"use strict";var i=s(3),r=s(13),o=s(14),n=s(75),a=s(73),h=s(5),c=s(96).f,u=s(97).f,l=s(8).f,f=s(98).trim,v=i.Number,p=v,d=v.prototype,m="Number"==o(s(74)(d)),b="trim"in String.prototype,g=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var s,i,r,o=(e=b?e.trim():f(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(s=e.charCodeAt(2))||120===s)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var n,h=e.slice(2),c=0,u=h.length;c<u;c++)if((n=h.charCodeAt(c))<48||n>r)return NaN;return parseInt(h,i)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof v&&(m?h(function(){d.valueOf.call(s)}):"Number"!=o(s))?n(new p(g(e)),s,v):g(e)};for(var N,R=s(7)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;R.length>w;w++)r(p,N=R[w])&&!r(v,N)&&l(v,N,u(p,N));v.prototype=d,d.constructor=v,s(10)(i,"Number",v)}},245:function(t,e,s){},317:function(t,e,s){"use strict";var i=s(245);s.n(i).a},384:function(t,e,s){"use strict";s.r(e);s(30),s(108),s(99),s(53),s(229);var i={name:"LeeColorDisk",inheritAttrs:!1,data:function(){return{drag:!1,pressBar:!1,hit:!1,hitP:{x:0,y:0},press:!1,which:"hsv",H:0,S:100,V:100,HSV:{H:0,S:100,V:100},R:"",G:"",B:"",RGB:{R:"",G:"",B:""},color:"",hcolor:""}},watch:{H:{immediate:!0,deep:!0,handler:function(t){this.$set(this.HSV,"H",t);var e=t+",100,100",s=this.hsvToRgb(e),i=this.rgbTo16(s.R+","+s.G+","+s.B);this.$set(this,"hcolor",i)}},S:{immediate:!0,deep:!0,handler:function(t){this.$set(this.HSV,"S",t)}},V:{immediate:!0,deep:!0,handler:function(t){this.$set(this.HSV,"V",t)}},R:{immediate:!0,deep:!0,handler:function(t){this.$set(this.RGB,"R",t)}},G:{immediate:!0,deep:!0,handler:function(t){this.$set(this.RGB,"G",t)}},B:{immediate:!0,deep:!0,handler:function(t){this.$set(this.RGB,"B",t)}},HSV:{immediate:!0,deep:!0,handler:function(t){if("hsv"===this.which){var e=t.H+","+t.S+","+t.V,s=this.hsvToRgb(e);this.$set(this,"R",s.R),this.$set(this,"G",s.G),this.$set(this,"B",s.B);var i=this.rgbTo16(s.R+","+s.G+","+s.B);this.$set(this,"color",i)}}},RGB:{immediate:!0,deep:!0,handler:function(t){if("rgb"===this.which){var e=this.rgbTo16(t.R+","+t.G+","+t.B);this.$set(this,"color",e);var s=this.rgbToHsv(t.R+","+t.G+","+t.B);this.$set(this,"H",s.H),this.$set(this,"S",s.S),this.$set(this,"V",s.V)}}},color:{immediate:!0,deep:!0,handler:function(t){if(this.$emit("complete",t),"color"===this.which){var e=this.toRgb(t);this.$set(this,"R",e.R),this.$set(this,"G",e.G),this.$set(this,"B",e.B);var s=this.rgbToHsv(e.R+","+e.G+","+e.B);this.$set(this,"H",s.H),this.$set(this,"S",s.S),this.$set(this,"V",s.V)}}}},computed:{pdcolor:function(){return this.S<20&&this.V>80?"#000":"#fff"}},methods:{barColorPc:function(t){if(t){var e=event.currentTarget.getBoundingClientRect().height,s=event.offsetY+1>0?event.offsetY+1:0;this.H=Math.round(360/e*(e-s))}},squareColorPc:function(t){if(t){var e=event.offsetX+1,s=event.offsetY+1,i=event.currentTarget.getBoundingClientRect(),r=i.width,o=i.height;this.S=Math.round(100*e/r)>100?100:Math.round(100*e/r),this.V=Math.round(100-100*s/o)>100?100:Math.round(100-100*s/o)}},squareColorMobile:function(t){if(t){var e=event.currentTarget.getBoundingClientRect(),s=e.width,i=e.height,r=event.targetTouches[0].clientX-event.currentTarget.offsetLeft,o=event.targetTouches[0].clientY-(event.currentTarget.offsetTop-document.documentElement.scrollTop);Math.round(100*r/s)>100?this.S=100:Math.round(100*r/s)<0?this.S=0:this.S=Math.round(100*r/s),Math.round(100-100*o/i)>100?this.V=100:Math.round(100-100*o/i)<0?this.V=0:this.V=Math.round(100-100*o/i)}},circleColorPc:function(t){if(t){this.hit=!0;var e=event.currentTarget.getBoundingClientRect(),s=e.width,i=e.height,r=event.offsetX+1-s/2,o=s/2-(event.offsetY+1),n=this.CircleHsv(r,o,s/2),a=this.hsvToRgb(n),h=a.R+","+a.G+","+a.B;this.$emit("complete",this.rgbTo16(h));var c=event.offsetX+1>s?s:event.offsetX+1,u=event.offsetY+1>i?i:event.offsetY+1;this.$set(this.hitP,"x",c),this.$set(this.hitP,"y",u)}},circleColorMobile:function(t){if(t){this.hit=!0;var e=event.currentTarget.getBoundingClientRect(),s=e.width,i=e.height,r=event.targetTouches[0].clientX-event.currentTarget.offsetLeft,o=event.targetTouches[0].clientY-(event.currentTarget.offsetTop-document.documentElement.scrollTop);r>s?r=s:r<0&&(r=0),o>i?o=i:o<0&&(o=0);var n=r-s/2,a=s/2-o,h=this.CircleHsv(n,a,s/2);console.log(h);var c=this.hsvToRgb(h),u=c.R+","+c.G+","+c.B;this.$emit("complete",this.rgbTo16(u)),this.$set(this.hitP,"x",r),this.$set(this.hitP,"y",o)}},CircleHsv:function(t,e,s){var i=Math.abs(t),r=Math.abs(e)/i,o=Math.sqrt(t*t+e*e);o>this.width/2&&(o=this.width/2);var n=Math.round(100/s*o),a=Math.round(Number(Math.atan(r))/(Math.PI/180)),h=0;return t>0&&e>0?h=90-a:t>0&&e<0?h=90+a:t<0&&e<0?h=270-a:t<0&&e>0&&(h=270+a),h+","+n+",100"},toRgb:function(t){var e=t.indexOf("#")>-1?t.split("#")[1]:t,s="",i="";if(3===e.length)s=e.slice(0,1)+e.slice(0,1)+e.slice(1,2)+e.slice(1,2)+e.slice(2,3)+e.slice(2,3);else{for(var r=6-e.length,o=0;o<r;o++)i+="0";s=i+e}var n=s.slice(0,2),a=n.slice(0,1),h=n.slice(1,2),c=s.slice(2,4),u=c.slice(0,1),l=c.slice(1,2),f=s.slice(4,6),v=f.slice(0,1),p=f.slice(1,2);return{R:Number(16*this.toNum(a))+Number(this.toNum(h)),G:Number(16*this.toNum(u))+Number(this.toNum(l)),B:Number(16*this.toNum(v))+Number(this.toNum(p))}},toNum:function(t){switch(t){case"a":case"A":t=10;break;case"b":case"B":t=11;break;case"c":case"C":t=12;break;case"d":case"D":t=13;break;case"e":case"E":t=14;break;case"f":case"F":t=15}return t},rgbTo16:function(t){var e=t.split(",");if(3!=e.length)return"你输入的RGB值错误";var s=e[0],i=e[1],r=e[2];return String(this.toLetter(Math.floor(s/16)))+String(this.toLetter(s%16))+String(this.toLetter(Math.floor(i/16)))+String(this.toLetter(i%16))+String(this.toLetter(Math.floor(r/16)))+String(this.toLetter(r%16))},toLetter:function(t){switch(t){case 10:t="a";break;case 11:t="b";break;case 12:t="c";break;case 13:t="d";break;case 14:t="e";break;case 15:t="f"}return t},hsvToRgb:function(t){var e,s,i,r,o,n,a,h,c=t.split(",")[0],u=t.split(",")[1],l=t.split(",")[2];switch(n=(l/=100)*(1-(u/=100)),a=l*(1-(o=6*(c/=360)-(r=Math.floor(6*c)))*u),h=l*(1-(1-o)*u),r%6){case 0:e=l,s=h,i=n;break;case 1:e=a,s=l,i=n;break;case 2:e=n,s=l,i=h;break;case 3:e=n,s=a,i=l;break;case 4:e=h,s=n,i=l;break;case 5:e=l,s=n,i=a}return{R:Math.round(255*e),G:Math.round(255*s),B:Math.round(255*i)}},rgbToHsv:function(t){var e,s=Number(t.split(",")[0]),i=Number(t.split(",")[1]),r=Number(t.split(",")[2]),o=Math.max(s,i,r),n=Math.min(s,i,r),a=o-n,h=0===o?0:a/o,c=o/255;switch(o){case n:e=0;break;case s:e=i-r+a*(i<r?6:0),e/=6*a;break;case i:e=r-s+2*a,e/=6*a;break;case r:e=s-i+4*a,e/=6*a}return{H:Math.round(360*e),S:Math.round(100*h),V:Math.round(100*c)}},mrgb:function(t){var e=new RegExp("^[0-9]{1,3}$"),s=this.$refs[t].value;e.test(s)||(s=s.replace(/[^0-9]/g,"")),Number(s)>255&&(s=255),this.$refs[t].value=Number(s),this[t]=Number(s),this.which="rgb"},msv:function(t){var e=new RegExp("^[0-9]{1,3}$"),s=this.$refs[t].value;e.test(s)||(s=s.replace(/[^0-9]/g,"")),Number(s)>100&&(s=100),this.$refs[t].value=Number(s),this[t]=Number(s),this.which="hsv"},mh:function(t){var e=new RegExp("^[0-9]{1,3}$"),s=this.$refs[t].value;e.test(s)||(s=s.replace(/[^0-9]/g,"")),Number(s)>360&&(s=360),this.$refs[t].value=Number(s),this[t]=Number(s),this.which="hsv"},mcolor:function(t){var e=new RegExp("^[0-9a-fA-F]{1,6}$"),s=this.$refs[t].value;e.test(s)||(s=s.replace(/[^0-9a-fA-F]/g,""));var i="";if(3===s.length)s=s.slice(0,1)+s.slice(0,1)+s.slice(1,2)+s.slice(1,2)+s.slice(2,3)+s.slice(2,3);else{for(var r=6-s.length,o=0;o<r;o++)i+="0";s=i+s}s.length>6&&(s=s.slice(0,6)),this.$refs[t].value=s,this[t]=s,this.which="color"}},props:{width:{type:Number,default:300},height:{type:Number,default:300},shape:{type:String,default:"circle"}}},r=(s(317),s(0)),o=Object(r.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"color-plate"},["circle"===t.shape?s("div",{staticClass:"circle",style:{width:t.width+"px",height:t.height+"px"},on:{mousedown:function(e){t.press=!0,t.circleColorPc(t.press)},mouseup:function(e){t.press=!1},mouseleave:function(e){t.press=!1},mousemove:function(e){return t.circleColorPc(t.press)},touchstart:function(e){t.press=!0,t.circleColorMobile(t.press)},touchend:function(e){t.press=!1},touchmove:function(e){return t.circleColorMobile(t.press)}}},[t.hit?s("div",{staticClass:"quan",style:"--left:"+t.hitP.x+"px;--top:"+t.hitP.y+"px"}):t._e()]):t._e(),t._v(" "),"square"===t.shape?[s("div",{staticClass:"square",style:{width:t.width+"px",height:t.height+"px","--color":"#"+t.hcolor,"--width":+t.width+"px"},on:{mousedown:function(e){t.press=!0,t.squareColorPc(t.press)},mouseup:function(e){t.press=!1},mouseleave:function(e){t.press=!1},mousemove:function(e){return t.squareColorPc(t.press)},touchstart:function(e){t.press=!0,t.squareColorMobile(t.press)},touchend:function(e){t.press=!1},touchmove:function(e){return t.squareColorMobile(t.press)}}},[s("div",{staticClass:"quan1",style:"--left:"+t.S+"%;--bottom:"+t.V+"%;--bcolor:"+t.pdcolor})]),t._v(" "),s("div",{staticClass:"bar",style:{height:t.height+"px"},on:{mousedown:function(e){t.pressBar=!0,t.barColorPc(t.pressBar)},mousemove:function(e){return t.barColorPc(t.pressBar)},mouseup:function(e){t.pressBar=!1},mouseleave:function(e){t.pressBar=!1}}},[s("div",{staticClass:"barn"}),t._v(" "),s("div",{staticClass:"ybkc r",style:"--bottom:"+5*t.H/18}),t._v(" "),s("div",{staticClass:"ybkc l",style:"--bottom:"+5*t.H/18})]),t._v(" "),s("div",{staticClass:"others"},[s("div",{staticClass:"show",style:{background:"#"+t.color}}),t._v(" "),s("div",{staticClass:"inputs"},[s("ul",[s("li",[s("span",[t._v("H：")]),s("input",{ref:"H",domProps:{value:t.H},on:{keyup:function(e){return t.mh("H")}}}),s("span",[t._v("度")])]),t._v(" "),s("li",[s("span",[t._v("S：")]),s("input",{ref:"S",domProps:{value:t.S},on:{keyup:function(e){return t.msv("S")}}}),s("span",[t._v("%")])]),t._v(" "),s("li",[s("span",[t._v("B：")]),s("input",{ref:"V",domProps:{value:t.V},on:{keyup:function(e){return t.msv("V")}}}),s("span",[t._v("%")])]),t._v(" "),s("li",[s("span",[t._v("R：")]),s("input",{ref:"R",domProps:{value:t.R},on:{keyup:function(e){return t.mrgb("R")}}})]),t._v(" "),s("li",[s("span",[t._v("G：")]),s("input",{ref:"G",domProps:{value:t.G},on:{keyup:function(e){return t.mrgb("G")}}})]),t._v(" "),s("li",[s("span",[t._v("B：")]),s("input",{ref:"B",domProps:{value:t.B},on:{keyup:function(e){return t.mrgb("B")}}})]),t._v(" "),s("li",[s("span",[t._v("#")]),s("input",{ref:"color",domProps:{value:t.color},on:{change:function(e){return t.mcolor("color")}}})])])])])]:t._e()],2)},[],!1,null,null,null);e.default=o.exports}}]);