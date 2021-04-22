# ScrollSelect 滚动选择

### 示例：
<lee-scroll-select type="date" v-model="kg" @change="change">   
</lee-scroll-select>
<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0">     
     <lee-button type="success" @click="show">日期选择</lee-button>     
    </div>
<lee-code>

```html
<lee-scroll-select type="date" v-model="kg" @change="change">
<lee-button type="success" @click="show">日期选择</lee-button> 
```
```js
<script>
    export default {
        data() {
              return {
               kg:false                
              }
          },    
          methods:{
            show(){
            this.kg=true
            },
            change(data){
             console.log(data)
            }                       
          }
    }
</script>
```
</lee-code>
</div>



### scrollSelect 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
type|选择的类型|String|date,time|date

### 事件

事件名称|说明|回调参数
:------|:------|:------
change|选择后回调|data

<script>
    export default {
        data() {
              return {
               kg:false
                
              }
          },    
          methods:{
            show(){
            this.kg=true
            },
            change(data){
             console.log(data)
            }                       
          }
    }
</script>
