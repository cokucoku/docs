(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{236:function(e,t,n){},305:function(e,t,n){"use strict";var i=n(236);n.n(i).a},376:function(e,t,n){"use strict";n.r(t);n(53),n(24);var i={name:"LeeAlert",data:function(){return{isShow:!0,thetype:"warning"}},watch:{type:{immediate:!0,handler:function(e){["primary","success","danger","info","warning","leecolor"].filter(function(t){return t.indexOf(e)>-1}).length<1?this.thetype="info":this.thetype=e}}},methods:{hide:function(){this.isShow=!1,this.$emit("close")}},props:{title:{type:String,default:"提示文字"},type:{type:String,default:"info"},closeable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1}}},a=(n(305),n(0)),l=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[e.isShow?n("div",{class:["lee-alert","lee-alert-"+e.thetype]},[e.showIcon?n("i",{staticClass:"lee-alert-icon"}):e._e(),e._v(" "),n("div",{staticClass:"lee-alert-content"},[e._v(e._s(e.title))]),e._v(" "),e.closeable?n("i",{staticClass:"lee-alert-close",on:{click:e.hide}}):e._e()]):e._e()])},[],!1,null,"120f923e",null);t.default=l.exports}}]);