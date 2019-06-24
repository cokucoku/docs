# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。
### 基础示例：
<div class="leeblock">
    <div class="leesource">
        <lee-select v-model="value" placeholder="请选择">
            <lee-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </lee-option>
        </lee-select>
    </div>
<lee-code>
    
```html

```
```html

```
</lee-code>
</div>

### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
size|尺寸|s,m,l|m
color|颜色|十六进制颜色值|#46bd87
<script>
    export default {
        data() {
              return {
                options: [{
                  value: '选项1',
                  label: 'Html'
                }, {
                  value: '选项2',
                  label: 'Css3'
                }, {
                  value: '选项3',
                  label: 'Javascript'
                }, {
                  value: '选项4',
                  label: 'Vue'
                }, {
                  value: '选项5',
                  label: 'React'
                }],
                value: '选项3'
              }
          }
    }
</script>
<style scoped>
    .leesource{display: flex;align-items: center;}
    /*.leesource div{margin-right: 10px}*/
</style>