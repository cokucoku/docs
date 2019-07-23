# Pay 支付选择
### 示例：
<lee-pay v-model="kg" @change="change" :config="config"></lee-pay>
<div class="leeblock">
    <div class="leesource">
        <lee-button type="success" @click="show">选择支付方式:</lee-button> 你选择了：{{pays}}
    </div>
<lee-code>

```html
<lee-pay v-model="kg" @change="change" :config="config"></lee-pay>
```
```js
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
        change(value){
            this.pays=value
        }
    }
}
</script>
```
</lee-code>
</div>

### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
v-model|绑定是否显示隐藏|Boolean|true,false|false
config|配置支付信息|Object|{bg:'#46bd87',<br>choose:['微信支付', '支付宝', '花呗支付', '农业银行', '窝窝收款']}|{ bg: '#409eff',<br>choose: ['微信支付', '支付宝', '花呗支付', '农业银行']}
### 事件

事件名称|说明|回调参数
:------|:------|:------
change|选择支付方式后事件|value:选中的支付方式

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
        change(value){
            this.pays=value
        }
    }
}
</script>