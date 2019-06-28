# Pagination 分页
#### 基础用法：
<div class="leeblock">
    <div class="leesource">
        <lee-pagination v-model="cur" :page-size="20" layout="pager" :total="250" @change="curpage">
</lee-pagination>
    </div>
<lee-code>
    
```html
<lee-pagination  :page-size="20" layout="pager" :total="250"
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
</lee-code>
</div>

#### 翻页：

<div class="leeblock">
    <div class="leesource">
        <lee-pagination v-model="cur" :page-size="20" layout="prev,pager,next" :total="250" @change="curpage">
</lee-pagination>
    </div>
<lee-code>
    
```html
<lee-pagination  :page-size="20" layout="prev, pager, next" :total="250"
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
</lee-code>
</div>

### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
v-model|绑定值（当前页码）|Number|1,2,3,4...|--
page-size|每页记录条数|Number|1,2,3,4...|10
layout|配置显示|String|prev,pager,next|pager
total|总记录条数|Number|1,2,3,4...|10
### 事件

事件名称|说明|回调参数
:------|:------|:------
change|当前页改变事件|value

<script>
    export default {
        data() {
         return {
            show:false,
            cur:1,//页数为第1页
        }
       },
        methods:{
            curpage(val) {
             console.log('当前页:'+val);
           },
          
        }
    }
</script>