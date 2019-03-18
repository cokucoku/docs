# Pay 支付选择
### 示例：
<p></p>
<lee-button type="success" @click="show">选择支付方式:</lee-button> 你选择了：{{pays}}
<lee-pay :visible="kg" @close="close" @change="change" :config="config"></lee-pay>

```html
<lee-pay :visible="kg" :config="config" @close="close" @change="change"></lee-pay>
```
```js

```
### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
visible|显示隐藏|Boolean|true,false|false
config|配置支付信息|Object|{bg:'#46bd87',choose:['微信支付', '支付宝', '花呗支付', '农业银行', '窝窝收款']}|{ bg: '#409eff',choose: ['微信支付', '支付宝', '花呗支付', '农业银行']}
### 事件

事件名称|说明|回调参数
:------|:------|:------
close|关闭事件|--

<script>
export default {
    data() {
        return {
           kg:false,
           config:{
            bg:'#46bd87',
            choose: ['微信支付', '支付宝', '花呗支付', '农业银行', '窝窝收款']
           },
           pays:''
        };
    },
    methods: {
        show(){
            this.kg=true
        },
        close(value){
            this.kg=value
        },
        change(value){
            this.pays=value
        }
    }
}
</script>