(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{265:function(t,i,e){},343:function(t,i,e){"use strict";var n=e(265);e.n(n).a},416:function(t,i,e){"use strict";e.r(i);e(15),e(25);var n={name:"LeeLuckGrid",inheritAttrs:!1,data:function(){return{curindex:0,haveClick:!1}},mounted:function(){var t=this,i=[[0,0],[1,0],[2,0],[2,1],[2,2],[1,2],[0,2],[0,1]];this.prizes.forEach(function(e,n){var s=i[n][0],r=i[n][1];t.$set(e,"index",n),t.$set(e,"x",s),t.$set(e,"y",r)})},computed:{styleLuckGrid:function(){return{width:this.config.style.width+"px",height:this.config.style.height+"px",padding:this.config.style.padding+"px",backgroundColor:this.config.style.backgroundColor,backgroundImage:" url("+this.config.style.backgroundImage+")",borderRadius:this.config.style.borderRadius+"px","--fs":this.config.grid.fontSize}},styleButton:function(){var t=(this.config.style.width-2*this.config.style.padding-2*this.config.style.gutter)/3;return{width:t+"px",height:t+"px",background:this.btnConfig.background,borderRadius:this.config.style.borderRadius+"px",left:t+this.config.style.gutter+"px",top:t+this.config.style.gutter+"px",pointerEvents:this.haveClick?"none":""}}},methods:{styleGrid:function(t){var i=(this.config.style.width-2*this.config.style.padding-2*this.config.style.gutter)/3,e=t.index==this.curindex?this.config.grid.activeStyle.background:this.config.grid.defaultStyle.background,n=t.index==this.curindex?this.config.grid.activeStyle.fontColor:this.config.grid.defaultStyle.fontColor;return{width:i+"px",height:i+"px",background:e,borderRadius:this.config.grid.borderRadius+"px",left:t.x*i+t.x*this.config.style.gutter+"px",top:t.y*i+t.y*this.config.style.gutter+"px",color:n}},click:function(){this.$emit("start"),this.haveClick=!0},play:function(t){var i=this,e=0,n=setInterval(function(){if(i.curindex++,i.curindex>7&&(i.curindex=0,e++),e>6){clearInterval(n);var s=setInterval(function(){i.curindex++,i.curindex>=t-1&&(i.curindex=t-1,clearInterval(s),setTimeout(function(){i.$emit("end",t-1),i.haveClick=!1},100))},100)}},50)}},props:{btnConfig:{type:Object,default:function(){return{}}},config:{type:Object,default:function(){return{}}},prizes:{type:Array,default:function(){return[]}}}},s=(e(343),e(0)),r=Object(s.a)(n,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lee-luck-grid",style:t.styleLuckGrid},[e("div",{staticClass:"waterMark",staticStyle:{display:"block!important"}},[t._v("Leeao版权所有")]),t._v(" "),e("div",{staticClass:"lee-luck-grid-n"},[t._l(this.prizes,function(i,n){return e("div",{staticClass:"grid",style:t.styleGrid(i)},[t._l(i.imgs,function(n){return e("img",{style:{top:n.top,width:n.width},attrs:{src:i.index==t.curindex&&n.activeSrc?n.activeSrc:n.src}})}),t._v(" "),i.fonts.top?e("div",{staticClass:"text",style:{top:i.fonts.top}},[t._v(t._s(i.fonts.text))]):t._e()],2)}),t._v(" "),e("div",{staticClass:"button",style:t.styleButton,on:{click:t.click}},[t._l(t.btnConfig.imgs,function(t){return e("img",{style:{top:t.top,width:t.width},attrs:{src:t.src}})}),t._v(" "),t._l(t.btnConfig.fonts,function(i){return e("div",{staticClass:"text",style:{top:i.top,color:i.fontColor,lineHeight:i.fontSize,fontSize:i.fontSize}},[t._v("\n        "+t._s(i.text)+"\n      ")])})],2)],2)])},[],!1,null,"5f296b92",null);i.default=r.exports}}]);