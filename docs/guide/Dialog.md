# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。
### 基础示例：
<lee-dialog title="提示信息" v-model="isshow1" effect="scale">水电费水电费</lee-dialog>
<lee-dialog title="警告信息" v-model="isshow2" effect="slideDown">这是一段信息</lee-dialog>
<div class="leeblock">
    <div class="leesource">
      <lee-button type="primary" @click="open1">打开dialog</lee-button>
      <lee-button type="success" @click="open2">打开dialog</lee-button>
    </div>
<lee-code>
    
```html
<lee-button type="primary" @click="open">打开dialog</lee-button>
<lee-dialog title="提示信息" v-model="isshow">这是一段信息</lee-dialog>
```
```html
<script>
    export default {
        data() {
              return {
                isshow:false
              }
          },
          methods:{
            open(){
              this.isshow=true
            }
          }
    }
</script>
```
</lee-code>
</div>




### Dialog 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
title|对话框标题|String|--|--
effect|过渡效果|String|fade,slideDown,slideUp,slideLeft,slideRight,scale|fade
v-model|Tooltip内容|Boolean|true,false|--

<script>
    export default {
        data() {
              return {
                isshow1:false,
                isshow2:false,
              }
          },
          methods:{
            open1(){
              this.isshow1=true
            },
            open2(){
              this.isshow2=true
            },
          }
    }
</script>
<style scoped>

</style>