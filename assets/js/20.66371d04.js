(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{284:function(t,e,i){},371:function(t,e,i){"use strict";i(284)},478:function(t,e,i){"use strict";i.r(e);var n={name:"LeeInputNumber",inheritAttrs:!1,data:()=>({currentValue:0}),mounted(){},props:{value:{type:Number,default:1},min:{type:Number,default:-1/0},max:{type:Number,default:1/0}},methods:{dec(){this.currentValue--,this.currentValue<this.min?this.currentValue=this.min:(this.$emit("input",this.currentValue),this.$emit("change",this.currentValue))},inc(){this.currentValue++,this.currentValue>this.max?this.currentValue=this.max:(this.$emit("input",this.currentValue),this.$emit("change",this.currentValue))}},watch:{value:{immediate:!0,handler(t){var e=Number(t);isNaN(e)&&(e=this.currentValue),e>=this.max&&(e=this.max),e<=this.min&&(e=this.min),this.currentValue=e,this.$emit("input",e)}}},computed:{inputListeners(){var t=this;return Object.assign({},this.$listeners,{input:function(t){},change:function(e){var i=Number(e.target.value);isNaN(i)&&(i=t.currentValue),i>=t.max&&(i=t.max),i<=t.min&&(i=t.min),t.$refs.input.value=i,t.$emit("change",i),t.$emit("input",i)}})}}},u=(i(371),i(10)),s=Object(u.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-input-number"},[e("span",{staticClass:"el-input-number_decrease",class:{"is-disabled":t.currentValue<=t.min},attrs:{role:"button"}},[e("i",{on:{click:t.dec}},[t._v("-")])]),t._v(" "),e("span",{staticClass:"el-input-number_increase",class:{"is-disabled":t.currentValue>=t.max},attrs:{role:"button"}},[e("i",{on:{click:t.inc}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"el-input"},[e("input",t._g(t._b({ref:"input",staticClass:"el-input_inner",attrs:{type:"text"},domProps:{value:t.currentValue}},"input",t.$attrs,!1),t.inputListeners))])])}),[],!1,null,"deea6902",null);e.default=s.exports}}]);