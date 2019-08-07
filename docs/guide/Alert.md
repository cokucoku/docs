# Alert 警告框
### 示例：
<div class="leeblock">
    <div class="leesource">
        <lee-alert title="成功提示的文案" type="success" closeable show-icon></lee-alert>
        <lee-alert title="消息提示的文案" type="info" show-icon></lee-alert>
        <lee-alert title="警告提示的文案" type="warning" show-icon closeable @close="hello"></lee-alert>
        <lee-alert title="错误提示的文案" type="error" show-icon></lee-alert>
    </div>
<lee-code>

```html
<lee-alert title="成功提示的文案" type="success" :closeable="false" show-icon></lee-alert>
<lee-alert title="消息提示的文案" type="info"></lee-alert>
<lee-alert title="警告提示的文案" type="warning" @close="hello"></lee-alert>
<lee-alert title="错误提示的文案" type="error"></lee-alert>
```
```js
<script>
    export default {
        data() {
         return {
            
        }
       },
        methods:{
            hello() {
            alert('你要关闭提示么？');
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
title|提示消息|String|--|--
type|提示框类型|String|success,info,warning,error|warning
closeable|能否关闭|Boolean|true,false|false
show-icon|显示图标|Boolean|-|false
### 事件

事件名称|说明|回调参数
:------|:------|:------
close|关闭事件|--

<script>
    export default {
        data() {
         return {
           

        }
       },
        methods:{
           hello() {
            alert('你要关闭提示么？');
           }
        }
    }
</script>