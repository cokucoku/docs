# Radio 单选框
在一组备选项中进行单选
### 基础示例：
<div class="leeblock">
    <div class="leesource">
        <lee-radio-group v-model="choose1">
            <lee-radio :label="1">HTML5</lee-radio>
            <lee-radio :label="2">CSS3</lee-radio>
            <lee-radio :label="3">JS</lee-radio>
            <lee-radio :label="4">VUE</lee-radio>
        </lee-radio-group>
        <br>
        你选择了：{{choose1}}
    </div>
<lee-code>

```html
<lee-radio-group v-model="choose">
    <lee-radio :label="1">HTML5</lee-radio>
    <lee-radio :label="2">CSS3</lee-radio>
    <lee-radio :label="3">JS</lee-radio>
    <lee-radio :label="4">VUE</lee-radio>
</lee-radio-group>
```
```html
<script>
    export default {
        data() {
         return {
            choose:1
        }
       }
    }
</script>
```
</lee-code>
</div>

### 样式：
<div class="leeblock">
    <div class="leesource">
        <lee-radio-group v-model="choose2" size="l">
            <lee-radio :label="1">HTML5</lee-radio>
            <lee-radio :label="2">CSS3</lee-radio>
            <lee-radio :label="3">JS</lee-radio>
            <lee-radio :label="4">VUE</lee-radio>
        </lee-radio-group>
        <br>
        你选择了：{{choose2}}
    </div>
<lee-code>

```html
<lee-radio-group v-model="choose" size="s">
    <lee-radio :label="1">HTML5</lee-radio>
    <lee-radio :label="2">CSS3</lee-radio>
    <lee-radio :label="3">JS</lee-radio>
    <lee-radio :label="4">VUE</lee-radio>
</lee-radio-group>
```
```html
<script>
    export default {
        data() {
         return {
            choose:1
        }
       }
    }
</script>
```
</lee-code>
</div>

### 风格：
<div class="leeblock">
    <div class="leesource">
        <lee-radio-group v-model="choose3" type="primary">
            <lee-radio :label="1">HTML5</lee-radio>
            <lee-radio :label="2">CSS3</lee-radio>
            <lee-radio :label="3">JS</lee-radio>
            <lee-radio :label="4">VUE</lee-radio>
        </lee-radio-group>
        <br>
        你选择了：{{choose3}}
    </div>
<lee-code>

```html
<lee-radio-group v-model="choose" type="primary">
    <lee-radio :label="1">HTML5</lee-radio>
    <lee-radio :label="2">CSS3</lee-radio>
    <lee-radio :label="3">JS</lee-radio>
    <lee-radio :label="4">VUE</lee-radio>
</lee-radio-group>
```
```html
<script>
    export default {
        data() {
         return {
            choose:1
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
v-model|绑定选项值|Number|--|--
type|单选框类型|string|primary,success,info,warning,danger|--
size|单选框尺寸|string|s,m,l|s
<script>
    export default {
        data() {
         return {
            choose1:1,
            choose2:1,
            choose3:1,
        }
       },
        methods:{
            
        }
    }
</script>