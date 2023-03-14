(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{288:function(e,t,s){},385:function(e,t,s){"use strict";s(288)},536:function(e,t,s){"use strict";s.r(t);var i={name:"LeeColorDisk",inheritAttrs:!1,data:()=>({drag:!1,pressBar:!1,hit:!1,hitP:{x:0,y:0},press:!1,which:"hsv",H:0,S:100,V:100,HSV:{H:0,S:100,V:100},R:"",G:"",B:"",RGB:{R:"",G:"",B:""},color:"",hcolor:""}),watch:{H:{immediate:!0,deep:!0,handler(e){this.$set(this.HSV,"H",e);let t=e+",100,100",s=this.hsvToRgb(t),i=this.rgbTo16(s.R+","+s.G+","+s.B);this.$set(this,"hcolor",i)}},S:{immediate:!0,deep:!0,handler(e){this.$set(this.HSV,"S",e)}},V:{immediate:!0,deep:!0,handler(e){this.$set(this.HSV,"V",e)}},R:{immediate:!0,deep:!0,handler(e){this.$set(this.RGB,"R",e)}},G:{immediate:!0,deep:!0,handler(e){this.$set(this.RGB,"G",e)}},B:{immediate:!0,deep:!0,handler(e){this.$set(this.RGB,"B",e)}},HSV:{immediate:!0,deep:!0,handler(e){if("hsv"===this.which){let t=e.H+","+e.S+","+e.V,s=this.hsvToRgb(t);this.$set(this,"R",s.R),this.$set(this,"G",s.G),this.$set(this,"B",s.B);let i=this.rgbTo16(s.R+","+s.G+","+s.B);this.$set(this,"color",i)}}},RGB:{immediate:!0,deep:!0,handler(e){if("rgb"===this.which){let t=this.rgbTo16(e.R+","+e.G+","+e.B);this.$set(this,"color",t);let s=this.rgbToHsv(e.R+","+e.G+","+e.B);this.$set(this,"H",s.H),this.$set(this,"S",s.S),this.$set(this,"V",s.V)}}},color:{immediate:!0,deep:!0,handler(e){if(this.$emit("complete",e),"color"===this.which){let t=this.toRgb(e);this.$set(this,"R",t.R),this.$set(this,"G",t.G),this.$set(this,"B",t.B);let s=this.rgbToHsv(t.R+","+t.G+","+t.B);this.$set(this,"H",s.H),this.$set(this,"S",s.S),this.$set(this,"V",s.V)}}}},computed:{pdcolor(){let e;return e=this.S<20&&this.V>80?"#000":"#fff",e}},methods:{barColorPc(e){if(e){let{height:e}=event.currentTarget.getBoundingClientRect(),t=event.offsetY+1>0?event.offsetY+1:0;this.H=Math.round(360/e*(e-t)),this.which="hsv"}},barColorMobile(e){if(e){this.which="hsv";let{height:e}=event.currentTarget.getBoundingClientRect(),t=event.targetTouches[0].clientY-(event.currentTarget.offsetTop-document.documentElement.scrollTop);t>e&&(t=e),t<0&&(t=0),this.H=Math.round(360/e*(e-t))}},squareColorPc(e){if(e){this.which="hsv";let e=event.offsetX+1,t=event.offsetY+1,{width:s,height:i}=event.currentTarget.getBoundingClientRect();this.S=Math.round(100*e/s)>100?100:Math.round(100*e/s),this.V=Math.round(100-100*t/i)>100?100:Math.round(100-100*t/i)}},squareColorMobile(e){if(e){this.which="hsv";let{width:e,height:t}=event.currentTarget.getBoundingClientRect(),s=event.targetTouches[0].clientX-event.currentTarget.offsetLeft,i=event.targetTouches[0].clientY-(event.currentTarget.offsetTop-document.documentElement.scrollTop);Math.round(100*s/e)>100?this.S=100:Math.round(100*s/e)<0?this.S=0:this.S=Math.round(100*s/e),Math.round(100-100*i/t)>100?this.V=100:Math.round(100-100*i/t)<0?this.V=0:this.V=Math.round(100-100*i/t)}},circleColorPc(e){if(e){this.hit=!0;let{width:e,height:t}=event.currentTarget.getBoundingClientRect(),s=event.offsetX+1-e/2,i=e/2-(event.offsetY+1),r=this.CircleHsv(s,i,e/2),o=this.hsvToRgb(r),h=o.R+","+o.G+","+o.B;this.$emit("complete",this.rgbTo16(h));let n=event.offsetX+1>e?e:event.offsetX+1,l=event.offsetY+1>t?t:event.offsetY+1;this.$set(this.hitP,"x",n),this.$set(this.hitP,"y",l)}},circleColorMobile(e){if(e){this.hit=!0;let{width:e,height:t}=event.currentTarget.getBoundingClientRect(),s=event.targetTouches[0].clientX-event.currentTarget.offsetLeft,i=event.targetTouches[0].clientY-(event.currentTarget.offsetTop-document.documentElement.scrollTop);s>e?s=e:s<0&&(s=0),i>t?i=t:i<0&&(i=0);let r=s-e/2,o=e/2-i,h=this.CircleHsv(r,o,e/2);console.log(h);let n=this.hsvToRgb(h),l=n.R+","+n.G+","+n.B;this.$emit("complete",this.rgbTo16(l)),this.$set(this.hitP,"x",s),this.$set(this.hitP,"y",i)}},CircleHsv(e,t,s){let i=Math.abs(e),r=Math.abs(t)/i,o=Math.sqrt(e*e+t*t);o>this.width/2&&(o=this.width/2);let h=Math.round(100/s*o),n=Math.round(Number(Math.atan(r))/(Math.PI/180)),l=0;return e>0&&t>0?l=90-n:e>0&&t<0?l=90+n:e<0&&t<0?l=270-n:e<0&&t>0&&(l=270+n),l+","+h+",100"},toRgb(e){let t=e.indexOf("#")>-1?e.split("#")[1]:e,s="",i="";if(3===t.length)s=t.slice(0,1)+t.slice(0,1)+t.slice(1,2)+t.slice(1,2)+t.slice(2,3)+t.slice(2,3);else{let e=6-t.length;for(let t=0;t<e;t++)i+="0";s=i+t}let r=s.slice(0,2),o=r.slice(0,1),h=r.slice(1,2),n=s.slice(2,4),l=n.slice(0,1),a=n.slice(1,2),c=s.slice(4,6),u=c.slice(0,1),p=c.slice(1,2);return{R:Number(16*this.toNum(o))+Number(this.toNum(h)),G:Number(16*this.toNum(l))+Number(this.toNum(a)),B:Number(16*this.toNum(u))+Number(this.toNum(p))}},toNum(e){switch(e){case"a":case"A":e=10;break;case"b":case"B":e=11;break;case"c":case"C":e=12;break;case"d":case"D":e=13;break;case"e":case"E":e=14;break;case"f":case"F":e=15}return e},rgbTo16(e){let t="",s=e.split(",");if(3!=s.length)return t="你输入的RGB值错误",t;let i=s[0],r=s[1],o=s[2];return t=String(this.toLetter(Math.floor(i/16)))+String(this.toLetter(i%16))+String(this.toLetter(Math.floor(r/16)))+String(this.toLetter(r%16))+String(this.toLetter(Math.floor(o/16)))+String(this.toLetter(o%16)),t},toLetter(e){switch(e){case 10:e="a";break;case 11:e="b";break;case 12:e="c";break;case 13:e="d";break;case 14:e="e";break;case 15:e="f"}return e},hsvToRgb(e){let t,s,i,r,o,h,n,l,a=e.split(",")[0],c=e.split(",")[1],u=e.split(",")[2];switch(a/=360,c/=100,u/=100,r=Math.floor(6*a),o=6*a-r,h=u*(1-c),n=u*(1-o*c),l=u*(1-(1-o)*c),r%6){case 0:t=u,s=l,i=h;break;case 1:t=n,s=u,i=h;break;case 2:t=h,s=u,i=l;break;case 3:t=h,s=n,i=u;break;case 4:t=l,s=h,i=u;break;case 5:t=u,s=h,i=n}return{R:Math.round(255*t),G:Math.round(255*s),B:Math.round(255*i)}},rgbToHsv(e){let t,s=Number(e.split(",")[0]),i=Number(e.split(",")[1]),r=Number(e.split(",")[2]),o=Math.max(s,i,r),h=Math.min(s,i,r),n=o-h,l=0===o?0:n/o,a=o/255;switch(o){case h:t=0;break;case s:t=i-r+n*(i<r?6:0),t/=6*n;break;case i:t=r-s+2*n,t/=6*n;break;case r:t=s-i+4*n,t/=6*n}return{H:Math.round(360*t),S:Math.round(100*l),V:Math.round(100*a)}},mrgb(e){let t=new RegExp("^[0-9]{1,3}$"),s=this.$refs[e].value;t.test(s)||(s=s.replace(/[^0-9]/g,"")),Number(s)>255&&(s=255),this.$refs[e].value=Number(s),this[e]=Number(s),this.which="rgb"},msv(e){let t=new RegExp("^[0-9]{1,3}$"),s=this.$refs[e].value;t.test(s)||(s=s.replace(/[^0-9]/g,"")),Number(s)>100&&(s=100),this.$refs[e].value=Number(s),this[e]=Number(s),this.which="hsv"},mh(e){let t=new RegExp("^[0-9]{1,3}$"),s=this.$refs[e].value;t.test(s)||(s=s.replace(/[^0-9]/g,"")),Number(s)>360&&(s=360),this.$refs[e].value=Number(s),this[e]=Number(s),this.which="hsv"},mcolor(e){let t=new RegExp("^[0-9a-fA-F]{1,6}$"),s=this.$refs[e].value;t.test(s)||(s=s.replace(/[^0-9a-fA-F]/g,""));let i="";if(3===s.length)s=s.slice(0,1)+s.slice(0,1)+s.slice(1,2)+s.slice(1,2)+s.slice(2,3)+s.slice(2,3);else{let e=6-s.length;for(let t=0;t<e;t++)i+="0";s=i+s}s.length>6&&(s=s.slice(0,6)),this.$refs[e].value=s,this[e]=s,this.which="color"}},props:{width:{type:Number,default:300},height:{type:Number,default:300},shape:{type:String,default:"circle"}}},r=(s(385),s(10)),o=Object(r.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"color-plate"},["circle"===e.shape?t("div",{staticClass:"circle",style:{width:e.width+"px",height:e.height+"px"},on:{mousedown:function(t){e.press=!0,e.circleColorPc(e.press)},mouseup:function(t){e.press=!1},mouseleave:function(t){e.press=!1},mousemove:function(t){return e.circleColorPc(e.press)},touchstart:function(t){e.press=!0,e.circleColorMobile(e.press)},touchend:function(t){e.press=!1},touchmove:function(t){return e.circleColorMobile(e.press)}}},[e.hit?t("div",{staticClass:"quan",style:"--left:"+e.hitP.x+"px;--top:"+e.hitP.y+"px"}):e._e()]):e._e(),e._v(" "),"square"===e.shape?[t("div",{staticClass:"square",style:{width:e.width+"px",height:e.height+"px","--color":"#"+e.hcolor,"--width":+e.width+"px"},on:{mousedown:function(t){e.press=!0,e.squareColorPc(e.press)},mouseup:function(t){e.press=!1},mouseleave:function(t){e.press=!1},mousemove:function(t){return e.squareColorPc(e.press)},touchstart:function(t){e.press=!0,e.squareColorMobile(e.press)},touchend:function(t){e.press=!1},touchmove:function(t){return e.squareColorMobile(e.press)}}},[t("div",{staticClass:"quan1",style:"--left:"+e.S+"%;--bottom:"+e.V+"%;--bcolor:"+e.pdcolor})]),e._v(" "),t("div",{staticClass:"bar",style:{height:e.height+"px"},on:{mousedown:function(t){e.pressBar=!0,e.barColorPc(e.pressBar)},mousemove:function(t){return e.barColorPc(e.pressBar)},mouseup:function(t){e.pressBar=!1},mouseleave:function(t){e.pressBar=!1},touchstart:function(t){e.pressBar=!0,e.barColorMobile(e.pressBar)},touchmove:function(t){return e.barColorMobile(e.pressBar)},touchup:function(t){e.pressBar=!1}}},[t("div",{staticClass:"barn"}),e._v(" "),t("div",{staticClass:"ybkc r",style:"--bottom:"+5*e.H/18}),e._v(" "),t("div",{staticClass:"ybkc l",style:"--bottom:"+5*e.H/18})]),e._v(" "),t("div",{staticClass:"others"},[t("div",{staticClass:"show",style:{background:"#"+e.color}}),e._v(" "),t("div",{staticClass:"inputs"},[t("ul",[t("li",[t("span",[e._v("H：")]),t("input",{ref:"H",domProps:{value:e.H},on:{keyup:function(t){return e.mh("H")}}}),t("span",[e._v("度")])]),e._v(" "),t("li",[t("span",[e._v("S：")]),t("input",{ref:"S",domProps:{value:e.S},on:{keyup:function(t){return e.msv("S")}}}),t("span",[e._v("%")])]),e._v(" "),t("li",[t("span",[e._v("B：")]),t("input",{ref:"V",domProps:{value:e.V},on:{keyup:function(t){return e.msv("V")}}}),t("span",[e._v("%")])]),e._v(" "),t("li",[t("span",[e._v("R：")]),t("input",{ref:"R",domProps:{value:e.R},on:{keyup:function(t){return e.mrgb("R")}}})]),e._v(" "),t("li",[t("span",[e._v("G：")]),t("input",{ref:"G",domProps:{value:e.G},on:{keyup:function(t){return e.mrgb("G")}}})]),e._v(" "),t("li",[t("span",[e._v("B：")]),t("input",{ref:"B",domProps:{value:e.B},on:{keyup:function(t){return e.mrgb("B")}}})]),e._v(" "),t("li",[t("span",[e._v("#")]),t("input",{ref:"color",domProps:{value:e.color},on:{change:function(t){return e.mcolor("color")}}})])])])])]:e._e()],2)}),[],!1,null,null,null);t.default=o.exports}}]);