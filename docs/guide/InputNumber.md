# InputNumber 计数器
### 示例：
<div class="leeblock">
    <div class="leesource">
        <lee-input-number v-model="num" @change="handleChange" :min="3" :max="16"></lee-input-number>
    </div>
<lee-code>
    
```html
<lee-input-number :min="3" :max="16" 
v-model="num" @change="handleChange"></lee-input-number>
```
```js
<script>
    export default {
        data() {
         return {
            num: 135 
        }
       },
        methods:{
            handleChange(value) {
            console.log(value);
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
v-model|绑定值（计数器值）|Number|1,2,3,4...|--
min|最小值|Number|-1,-2,3,4...|-Infinity
max|最大值|Number|1,2,3,4...|Infinity
### 事件

事件名称|说明|回调参数
:------|:------|:------
change|数量改变事件|value

<script>
    export default {
        data() {
         return {
            num: 135 //input-number的值

        }
       },
        methods:{
           handleChange(value) { //input-number返回的数值
            console.log(value);
           }
        }
    }
</script>