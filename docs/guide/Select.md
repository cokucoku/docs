# Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。
### 基础示例：
<div class="leeblock">
    <div class="leesource">
        <lee-select v-model="value1" placeholder="请选择">
            <lee-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </lee-option>
        </lee-select>
    </div>
<lee-code>
    
```html
<lee-select v-model="value" placeholder="请选择">
    <lee-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    </lee-option>
</lee-select>
```
```html
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
                value: ''
              }
          }
    }
</script>
```
</lee-code>
</div>

### 可搜索：
<div class="leeblock">
    <div class="leesource">
        <lee-select v-model="value2" :lists="options2" filterable placeholder="请选择">
            <lee-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </lee-option>
        </lee-select>
    </div>
<lee-code>
    
```html
<lee-select v-model="value" :lists="options" filterable placeholder="请选择">
    <lee-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
    </lee-option>
</lee-select>
```
```html
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
                value: ''
              }
          }
    }
</script>
```
</lee-code>
</div>

### 自定义模板：
<div class="leeblock">
    <div class="leesource">
        <lee-select v-model="value3" placeholder="请选择">
            <lee-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            <span>{{ item.label }}</span>
            <span>{{ item.value }}</span>
            </lee-option>
        </lee-select>
    </div>
<lee-code>
    
```html
<lee-select v-model="value" placeholder="请选择">
    <lee-option
    v-for="item in options"
    :key="item.value"
    :label="item.label"
    :value="item.value">
     <span>{{ item.label }}</span>
     <span>{{ item.value }}</span>
    </lee-option>
</lee-select>
```
```html
<script>
    export default {
        data() {
              return {
                options: [{
                  value: 'Beijin',
                  label: '北京'
                }, {
                  value: 'ShangHai',
                  label: '上海'
                }, {
                  value: 'GuangZhou',
                  label: '广州'
                }, {
                  value: 'ShengZhen',
                  label: '深圳'
                }, {
                  value: 'XiaMen',
                  label: '厦门'
                }],
                value: ''
              }
          }
    }
</script>
```
</lee-code>
</div>

### Slect 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
v-model|绑定初始选值|String|--|--
filterable|是否可搜索|Boolean|true,false|false
lists|供搜索数据(有filterable时提供)|Array|--|--

### Option 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
label|选项的标签|String|--|--
value|选项的值|String|--|--

<script>
    export default {
        data() {
              return {
                options1: [{
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
                options2: [{
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
                options3: [{
                  value: 'Beijin',
                  label: '北京'
                }, {
                  value: 'ShangHai',
                  label: '上海'
                }, {
                  value: 'GuangZhou',
                  label: '广州'
                }, {
                  value: 'ShengZhen',
                  label: '深圳'
                }, {
                  value: 'XiaMen',
                  label: '厦门'
                }],
                value1: '',
                value2: '',
                value3: '',
              }
          }
    }
</script>
<style scoped>
    .leesource{display: flex;align-items: center;}
    /*.leesource div{margin-right: 10px}*/
</style>