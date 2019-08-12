# TagCloud 标签云

### 实例展示：
<div class="leeblock">
    <div class="leesource">
      <lee-tag-cloud :tag="tag" closeable></lee-tag-cloud>
    </div>
<lee-code>
    
```html
<lee-tag-cloud :tag="tag" closeable></lee-tag-cloud>
```
```html
<script>
    export default {
        data() {
              return {
                tag:[
                { t: '活泼',num:16},
                { t: '聪明',num:5 },
                { t: '可爱',num:3 },
                { t: '温柔',num:7 },
                { t: '美腿',num:12 },
                { t: '性感',num:26 },
                { t: '幸福',num:43},
                { t: '温和',num:25 },
                { t: '低调',num:52 },
                { t: '善良',num:57 },
                { t: '人见人爱',num:89 },
                { t: '初恋',num:235 },
                { t: '强势',num:465 },
                { t: '出众',num:32 },
                { t: '真诚',num:46 },
                { t: '稳重',num:23 }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### TagCloud 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
tag|标签数据|Object|--|--
closeable|是否可以删除|Boolean|--|false
<script>
    export default {
        data() {
              return {
                tag:[
                { t: '活泼',num:16},
                { t: '聪明',num:5 },
                { t: '可爱',num:3 },
                { t: '温柔',num:7 },
                { t: '美腿',num:12 },
                { t: '性感',num:26 },
                { t: '幸福',num:43},
                { t: '温和',num:25 },
                { t: '低调',num:52 },
                { t: '善良',num:57 },
                { t: '人见人爱',num:89 },
                { t: '初恋',num:235 },
                { t: '强势',num:465 },
                { t: '出众',num:32 },
                { t: '真诚',num:46 },
                { t: '稳重',num:23 }
                ]
              }
          }
    }
</script>
<style scoped>
.leesource{background:floralwhite }
</style>