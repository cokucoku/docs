# LoadImg 加载图片 <Badge text="news" type="error"/>
加载图片
### 基础示例：

<div class="leeblock">
    <div class="leesource">
      <lee-input-number v-model="cur" :min="1"></lee-input-number>
      <lee-loadimg url="https://picsum.photos/v2/list" imgurl="download_url" :page="cur" :limit="50"></lee-loadimg>
    </div>
<lee-code>
    
```html

```
```html

```
</lee-code>
</div>


### Steps 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
url|动态加载图片的API地址|String|--|--
imgurl|图片地址字段|String|--|--
page|页码|Number|1,2,3...|1
limit|每页显示条数|Number|1,2,3...|10
<script>
    export default {
        data() {
              return {
                cur:1
              }
          },
          methods:{
            
          }
    }
</script>
<style scoped>

</style>