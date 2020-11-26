# Cells 列表分组
常用于嵌套一组Cell
### 示例：
<div class="leeblock">
    <div class="leesource" style="background: #f6f8fa">
      <lee-cells title="基础组件" footer="组件详细请阅读">
        <lee-cell title="Alert 警告框" footer="详细介绍" icon="/t1o.png" url="/guide/Alert.html"></lee-cell>
        <lee-cell title="Badge 徽章" footer="详细介绍" icon="/t2o.png" url="/guide/Badge.html"></lee-cell>
        <lee-cell title="Button 按钮" footer="详细介绍" icon="/t3o.png" url="/guide/Button.html"></lee-cell>
        <lee-cell title="Collapse 折叠面板" footer="详细介绍" icon="/t4o.png" url="/guide/Collapse.html"></lee-cell>
        <lee-cell title="HTML5" footer="删除" icon="/t4o.png" url="/guide/Collapse.html" del @del="delevent"></lee-cell>
      </lee-cells>
    </div>
<lee-code>

```html
<lee-cells title="基础组件" footer="组件详细请阅读">
  <lee-cell title="Alert 警告框" footer="详细介绍" icon="/t1o.png" url="/guide/Alert.html"></lee-cell>
  <lee-cell title="Badge 徽章" footer="详细介绍" icon="/t2o.png" url="/guide/Badge.html"></lee-cell>
  <lee-cell title="Button 按钮" footer="详细介绍" icon="/t3o.png" url="/guide/Button.html"></lee-cell>
  <lee-cell title="Collapse 折叠面板" footer="详细介绍" icon="/t4o.png" url="/guide/Collapse.html"></lee-cell>
  <lee-cell title="HTML5" footer="删除" icon="/t4o.png" url="/guide/Collapse.html" del @del="delevent"></lee-cell>
</lee-cells>
```
```js
<script>
export default {
    data() {
        return {
           
        };
    },
    methods: {
        delevent(){
          var el=event.target.parentElement
          el.parentElement.removeChild(el)
        }
    }
}
</script>
```
</lee-code>
</div>

### Cells属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
title|Cells的标题|String|-|-
footer|Cells底部的文字|String|-|-

### Cell属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
title|最左侧的标题|String|-|-
footer|Cell右侧区域的内容|String|-|-
icon|最左侧的icon|String|-|-
url|跳转地址|String|-|-
del|是否可以删除|Boolean|-|false

### Cell事件

事件名称|说明|事件名称
:------|:------|:------
del|删除事件|删除该项

<script>
export default {
    data() {
        return {
           
        };
    },
    methods: {
        delevent(){
          var el=event.target.parentElement
          el.parentElement.removeChild(el)
        }
    }
}
</script>
<style>

</style>