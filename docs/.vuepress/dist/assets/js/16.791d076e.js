(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{209:function(t,e,n){},251:function(t,e,n){"use strict";var i=n(209);n.n(i).a},295:function(t,e,n){"use strict";n.r(e);n(26),n(53),n(24);var i={name:"LeeButton",data:function(){return{thetype:"default"}},watch:{type:{immediate:!0,handler:function(t){["primary","success","info","warning","danger","disabled","leecolor"].filter(function(e){return e.indexOf(t)>-1}).length<1?this.thetype="default":this.thetype=t}}},props:{type:{type:String,default:"default"}},computed:{buttonListeners:function(){var t=this;return Object.assign({},this.$listeners,{click:function(e){t.$emit("click",e)}})}}},s=(n(251),n(0)),u=Object(s.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("button",this._g({class:["lee-button","lee-button-"+this.thetype],attrs:{type:"button"}},this.buttonListeners),[e("span",[this._t("default")],2)])},[],!1,null,"501a9266",null);e.default=u.exports}}]);