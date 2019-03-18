# Pagination 分页
### 示例：
<P></P>
<lee-pagination v-model="cur" :page-size="20" layout="prev, pager, next" :total="150" @change="curpage">
</lee-pagination>

```html
<lee-pagination  :page-size="20" layout="prev, pager, next" :total="150"
 v-model="cur" @change="curpage">
</lee-pagination>
```
```js
<script>
    export default {
        data() {
         return {
            cur:5,//页数为第5页
        }
       },
        methods:{
            curpage(val) {
             console.log('当前页:'+val);
           }
        }
    }
</script>
```
### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
page-size|每页记录条数|Number|1,2,3,4...|10
layout|配置显示|String|prev,pager,next|pager
total|总记录条数|Number|1,2,3,4...|10
cur|当前页|Number|1,2,3,4...|1
### 事件

事件名称|说明|回调参数
:------|:------|:------
change|当前页改变事件|value

<script>
    export default {
        data() {
         return {
            cur:5,//页数为第1页
        }
       },
        methods:{
            curpage(val) {
             console.log('当前页:'+val);
           },
          
        }
    }
</script>