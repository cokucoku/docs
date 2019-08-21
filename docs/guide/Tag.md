# Tag 标签

用于标记和选择。

### 基础展示：
<div class="leeblock">
    <div class="leesource">
      <lee-tag :tag="tag1"></lee-tag>
    </div>
<lee-code>

```html
<lee-tag :tag="tag"></lee-tag>
```
```html
<script>
    export default {
        data() {
              return {
                tag:[
                { t: '活泼',color:'#67c23a'},
                { t: '聪明',color:'#909399' },
                { t: '可爱',color:'#409eff' },
                { t: '温柔',color:'#e6a23c' },
                { t: '美腿',color:'#f56c6c' }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### 可以关闭：
<div class="leeblock">
    <div class="leesource">
      <lee-tag :tag="tag2" closeable></lee-tag>
    </div>
<lee-code>

```html
<lee-tag :tag="tag" closeable></lee-tag>
```
```html
<script>
    export default {
        data() {
              return {
                tag:[
                { t: '活泼',color:'#67c23a'},
                { t: '聪明',color:'#909399' },
                { t: '可爱',color:'#409eff' },
                { t: '温柔',color:'#e6a23c' },
                { t: '美腿',color:'#f56c6c' }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### 可以增加：
<div class="leeblock">
    <div class="leesource">
      <lee-tag :tag="tag3" closeable editable></lee-tag>
    </div>
<lee-code>

```html
<lee-tag :tag="tag" closeable editable></lee-tag>
```
```html
<script>
    export default {
        data() {
              return {
                tag:[
                { t: '活泼',color:'#67c23a'},
                { t: '聪明',color:'#909399' },
                { t: '可爱',color:'#409eff' },
                { t: '温柔',color:'#e6a23c' },
                { t: '美腿',color:'#f56c6c' }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### Tag 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
tag|标签数据|Object|--|--
closeable|是否可以删除|Boolean|--|false
editable|是否可以添加|Boolean|--|false
<script>
    export default {
        data() {
              return {
                tag1:[
                { t: '活泼',color:'#67c23a'},
                { t: '聪明',color:'#909399' },
                { t: '可爱',color:'#409eff' },
                { t: '温柔',color:'#e6a23c' },
                { t: '美腿',color:'#f56c6c' },
                ],
                tag2:[
                { t: '性感',color:'#67c23a'},
                { t: '幸福',color:'#909399' },
                { t: '温和',color:'#409eff' },
                { t: '低调',color:'#e6a23c' },
                { t: '善良',color:'#f56c6c' },
                ],tag3:[
                { t: '初恋',color:'#67c23a'},
                { t: '强势',color:'#909399' },
                { t: '出众',color:'#409eff' },
                { t: '真诚',color:'#e6a23c' },
                { t: '稳重',color:'#f56c6c' }
                ]
              }
          }
    }
</script>
<style scoped>

</style>