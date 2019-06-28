# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
### 基础示例：
<div class="leeblock">
    <div class="leesource">
        <lee-switch v-model="value1"></lee-switch>
    </div>
<lee-code>
    
```html
<lee-switch v-model="value"></lee-switch>
```
```html
<script>
    export default {
        data() {
         return {
            value: true
        }
       }
    }
</script>
```
</lee-code>
</div>

### 尺寸：
<div class="leeblock">
    <div class="leesource">
        <lee-switch v-model="value2" size="s"></lee-switch>
        <lee-switch v-model="value3" size="m"></lee-switch>
        <lee-switch v-model="value4" size="l"></lee-switch>
    </div>
<lee-code>
    
```html
<lee-switch v-model="value"  size="s"></lee-switch>
<lee-switch v-model="value"  size="m"></lee-switch>
<lee-switch v-model="value"  size="l"></lee-switch>
```
```html
<script>
    export default {
        data() {
         return {
            value: true
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
        <lee-switch v-model="value5" color="#fc0"></lee-switch>
        <lee-switch v-model="value6" color="#c2005a"></lee-switch>
        <lee-switch v-model="value7" color="#0095e2"></lee-switch>
    </div>
<lee-code>
    
```html
<lee-switch v-model="value5" color="#fc0"></lee-switch>
<lee-switch v-model="value6" color="#c2005a"></lee-switch>
<lee-switch v-model="value7" color="#0095e2"></lee-switch>
```
```html
<script>
    export default {
        data() {
         return {
            value: true
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
v-model|绑定开关打开关闭|Boolean|true,false|--
size|尺寸|s,m,l|m|m
color|颜色|十六进制颜色值|#46bd87|s
<script>
    export default {
        data() {
         return {
            value1: true,
            value2: true,
            value3: true,
            value4: true,
            value5: true,
            value6: true,
            value7: true,
        }
       }
    }
</script>
<style scoped>
    .leesource{display: flex;align-items: center;}
    .leesource div{margin-right: 10px}
</style>