# Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。
### 基础示例：
<lee-dialog title="提示信息" v-model="isshow1" effect="scale">水电费水电费</lee-dialog>
<lee-dialog title="警告信息" v-model="isshow2" effect="slideDown">这是一段信息</lee-dialog>
<lee-dialog title="警告信息" v-model="isshow3" effect="scale" @cancel="cancel" @certain="certain">你确定要删除</lee-dialog>
<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0">
      <lee-button type="primary" @click="open1">打开dialog</lee-button>
      <lee-button type="success" @click="open2">打开dialog</lee-button>
      <lee-cells title="todoList" style="padding-top: 15px">
        <lee-cell :title="item" footer="删除" del v-for="(item,inx) in todoList" @del="del(inx)"></lee-cell>
      </lee-cells>
    </div>
<lee-code>

```html
<lee-dialog title="提示信息" v-model="isshow1" effect="scale">水电费水电费</lee-dialog>
<lee-dialog title="警告信息" v-model="isshow2" effect="slideDown">这是一段信息</lee-dialog>
<lee-dialog title="警告信息" v-model="isshow3" effect="scale" @cancel="cancel" @certain="certain">
<lee-button type="primary" @click="open1">打开dialog</lee-button>
      <lee-button type="success" @click="open2">打开dialog</lee-button>
      <lee-cells title="todoList" style="padding-top: 15px">
        <lee-cell :title="item" footer="删除" del v-for="(item,inx) in todoList" @del="del(inx)"></lee-cell>
</lee-cells>
```
```html
<script>
    export default {
        data() {
              return {
                isshow1:false,
                isshow2:false,
                isshow3:false,
                delxh:0,
                flag:false,
                todoList:['html5','css3','js','vue','typescript']
              }
          },
          watch: {
            flag: {
                immediate: true,
                handler(value) {
                    if (value) {
                        this.todoList.splice(this.delxh,1)
                        this.flag=false
                    }
                }
            }
          },
          methods:{
            open1(){
              this.isshow1=true
            },
            open2(){
              this.isshow2=true
            },
            del(inx){
              this.isshow3=true
              this.delxh=inx
            },
            cancel(rs){
              this.flag=rs.flag
            },
            certain(rs){
              this.flag=rs.flag
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

### 事件

事件名称|说明|回调参数
:------|:------|:------
cancel|点击取消按钮|flag=false
certain|点击确定按钮|flag=true
<script>
    export default {
        data() {
              return {
                isshow1:false,
                isshow2:false,
                isshow3:false,
                delxh:0,
                flag:false,
                todoList:['html5','css3','js','vue','typescript']
              }
          },
          watch: {
            flag: {
                immediate: true,
                handler(value) {
                    if (value) {
                        this.todoList.splice(this.delxh,1)
                        this.flag=false
                    }
                }
            }
          },
          methods:{
            open1(){
              this.isshow1=true
            },
            open2(){
              this.isshow2=true
            },
            del(inx){
              this.isshow3=true
              this.delxh=inx
            },
            cancel(rs){
              this.flag=rs.flag
            },
            certain(rs){
              this.flag=rs.flag
            }
          }
    }
</script>
<style scoped>

</style>