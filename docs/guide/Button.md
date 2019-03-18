# Button 按钮
常用的操作按钮。
### 示例：
<p></p>
<lee-button>默认按钮</lee-button>
<lee-button type="primary" @click="click">主要按钮</lee-button>
<lee-button type="success">成功按钮</lee-button>
<lee-button type="info">信息按钮</lee-button>
<lee-button type="warning">警告按钮</lee-button>
<lee-button type="danger">危险按钮</lee-button>

```html
<lee-button>默认按钮</lee-button>
<lee-button type="primary" @click="click">主要按钮</lee-button>
<lee-button type="success">成功按钮</lee-button>
<lee-button type="info">信息按钮</lee-button>
<lee-button type="warning">警告按钮</lee-button>
<lee-button type="danger">危险按钮</lee-button>
```
### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
type|按钮类型|string|primary,success,info,warning,danger|--

<script>
    export default {
        data() {
         return {
            title:"ddf"
        }
       },
        methods:{
            click(){
                console.log(this.title)
            }
            
        }
    }
</script>