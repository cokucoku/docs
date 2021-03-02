# Transfer 穿梭框

### 基础展示：
<div class="leeblock">
    <div class="leesource">
      <lee-transfer v-model="value1" :list="list1" title1="前端学习清单" title2="已学习"></lee-transfer>
    </div>
<lee-code>
    
```html
<lee-transfer v-model="value" :list="list" title1="前端学习清单" title2="已学习"></lee-transfer>
```
```html
<script>
    export default {
        data() {
              return {
                list: [
                {
                    key:1,
                    label:'Html5'
                },
                {
                    key:2,
                    label:'Css3'
                },
                {
                    key:3,
                    label:'Javascript'
                },
                {
                    key:4,
                    label:'Vue'
                },
                {
                    key:5,
                    label:'React'
                }
                ],
                value: [3,5]
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
      <lee-transfer v-model="value2" :list="list2" title1="正在上映" title2="即将上映" filterable></lee-transfer>
    </div>
<lee-code>
    
```html
<lee-transfer v-model="value" :list="list" title1="前端学习清单" title2="已学习"filterable></lee-transfer>
```
```html
<script>
    export default {
        data() {
              return {
                list: [
                {
                    key:1,
                    label:'Html5'
                },
                {
                    key:2,
                    label:'Css3'
                },
                {
                    key:3,
                    label:'Javascript'
                },
                {
                    key:4,
                    label:'Vue'
                },
                {
                    key:5,
                    label:'React'
                }
                ],
                value: [3,5]
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
list|数据|Array|--|--
value|选到右边数据序号|Array|--|--
title1|左边项目标题|String|--|--
title2|右边项目标题|String|--|--
filterable|是否可搜索|Boolean|true,false|false
<script>
    export default {
        data() {
              return {list1: [
                {
                    key:1,
                    label:'Html5'
                },
                {
                    key:2,
                    label:'Css3'
                },
                {
                    key:3,
                    label:'Javascript'
                },
                {
                    key:4,
                    label:'Vue'
                },
                {
                    key:5,
                    label:'React'
                },
                {
                    key:6,
                    label:'Webpack'
                },
                {
                    key:7,
                    label:'TypeScript'
                },
                {
                    key:8,
                    label:'Babel'
                },
                {
                    key:9,
                    label:'Node.js'
                },
                {
                    key:10,
                    label:'Sass'
                },
                {
                    key:11,
                    label:'LESS'
                },
                {
                    key:12,
                    label:'EJS'
                },
                {
                    key:13,
                    label:'Next.js'
                },
                {
                    key:14,
                    label:'ESLint'
                },
                {
                    key:15,
                    label:'Nginx'
                },
                {
                    key:16,
                    label:'Vuepress'
                }
                ],
                list2: [
                {
                    key:1,
                    label:'上海堡垒'
                },
                {
                    key:2,
                    label:'哪吒之魔童降世'
                },
                {
                    key:3,
                    label:'沉默的证人'
                },
                {
                    key:4,
                    label:'烈火英雄'
                },
                {
                    key:5,
                    label:'送我上青云'
                },
                {
                    key:6,
                    label:'鼠胆英雄'
                },
                {
                    key:7,
                    label:'银河补习班'
                },
                {
                    key:8,
                    label:'我们的四十年'
                },
                {
                    key:9,
                    label:'古窑迷踪'
                },
                {
                    key:10,
                    label:'猎袭'
                },
                {
                    key:11,
                    label:'保持沉默'
                },
                {
                    key:12,
                    label:'侠路相逢'
                },
                {
                    key:13,
                    label:'呼伦贝尔城'
                },
                {
                    key:14,
                    label:'碧血丹砂'
                },
                {
                    key:15,
                    label:'到你身边'
                },
                {
                    key:16,
                    label:'千与千寻'
                }
                ],
                value1: [1,2,3,4,5,16],
                value2: [8,9,10,11,12,13,14,15],
              }
          },
           watch: {
                value1: {
                    immediate: true,
                    handler(value) {
                        console.log(value)
                    }
                },
                value2: {
                    immediate: true,
                    handler(value) {
                        console.log(value)
                    }
                }
           }
    }
</script>
<style scoped>

</style>