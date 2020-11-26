# CascadeSelect 联级选择
联级选择
### 基础示例：

<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0">
      <lee-cascade-select :select="select"></lee-cascade-select>
    </div>
<lee-code>

```html

```
```html

```
</lee-code>
</div>




### CascadeSelect 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
title|对话框标题|String|--|--


### 事件

事件名称|说明|回调参数
:------|:------|:------
cancel|点击取消按钮|flag=false
certain|点击确定按钮|flag=true
<script>
  import allcity from './allcity.js'
    export default {
        data() {
              return {
                select:allcity
              }
          },
          watch: {
          },
          methods:{
          },
          mounted(){
          }
    }
</script>
<style scoped>

</style>