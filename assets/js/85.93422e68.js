(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{460:function(t,a,s){"use strict";s.r(a);var n={data:function(){return{luckyNum:100,logo:"/bobing/wyc.png",isshow:!1,result:"",voice:{yao:"/bobing/yao.mp3",zero:"/bobing/zero.mp3",one:"/bobing/one.mp3",two:"/bobing/two.mp3",three:"/bobing/three.mp3",four:"/bobing/four.mp3",five:"/bobing/five.mp3",six:"/bobing/six.mp3"}}},methods:{startCallBack:function(){if(this.luckyNum){for(var t=[],a=0;a<6;a++)t[a]=Math.ceil(6*Math.random());this.$refs.LuckBing.play(t)}else alert("还剩0次机会")},endCallBack:function(t){this.result=t,this.isshow=!0,this.luckyNum--}}},e=s(0),r=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("中秋博饼 Demo")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"leeblock"},[s("div",{staticClass:"leesource"},[s("lee-dialog",{attrs:{title:"博中信息",effect:"scale"},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[t._v("恭喜你博中"+t._s(t.result))]),t._v(" "),s("lee-luck-bing",{ref:"LuckBing",attrs:{logo:t.logo,voice:t.voice},on:{start:t.startCallBack,end:t.endCallBack},model:{value:t.luckyNum,callback:function(a){t.luckyNum=a},expression:"luckyNum"}})],1),t._v(" "),s("lee-code",[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("lee-luck-bing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("LuckBing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":voice")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("voice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("luckyNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@start")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("startCallBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@end")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("endCallBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("lee-luck-bing")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("  \n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               luckyNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/sz/wyc.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               voice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               yao"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/yao.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               zero"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/zero.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               one"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/one.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               two"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/two.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               three"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/three.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               four"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/four.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               five"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/five.mp3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               six"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/bobing/six.mp3'")]),t._v("\n               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startCallBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("luckyNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'还剩0次机会'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               \n              "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LuckBing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("endCallBack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'恭喜你博中:'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("luckyNum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"luckybing-中秋博饼"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luckybing-中秋博饼","aria-hidden":"true"}},[this._v("#")]),this._v(" LuckyBing 中秋博饼")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"中秋博饼-demo："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中秋博饼-demo：","aria-hidden":"true"}},[this._v("#")]),this._v(" 中秋博饼 Demo：")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"luckybing-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luckybing-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" LuckyBing 属性")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("ref")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("转盘名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("voice")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("奖项声音")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{"),s("br"),t._v("yao:'bobing/sz/yao.mp3'"),s("code",[t._v("//骰子声音")]),s("br"),t._v("zero:'bobing/sz/zero.mp3'"),s("code",[t._v("//没博到")]),s("br"),t._v("one:'bobing/sz/one.mp3'"),s("code",[t._v("//一秀")]),s("br"),t._v("two:'bobing/sz/two.mp3'"),s("code",[t._v("//二举")]),s("br"),t._v("three:'bobing/sz/three.mp3'"),s("code",[t._v("//三红")]),s("br"),t._v("four:'bobing/sz/yao.mp3'"),s("code",[t._v("//四进")]),s("br"),t._v("five:'bobing/sz/five.mp3'"),s("code",[t._v("//对堂")]),s("br"),t._v("six:'bobing/sz/six.mp3'"),s("code",[t._v("//状元")]),s("br"),t._v("}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("logo")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("赞助商LOGO")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"luckbing-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luckbing-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" LuckBing 事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("start")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("开始抽奖事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("--")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("end")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("抽奖结束事件")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("中奖名称")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"luckbing-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#luckbing-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" LuckBing 方法")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("方法名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("参数")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("play")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("博饼方法")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("博中点数数组")])])])])}],!1,null,null,null);a.default=r.exports}}]);