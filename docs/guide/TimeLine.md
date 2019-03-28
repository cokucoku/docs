# :stopwatch: TimeLine 时间线

### 更多下拉：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="1" v-model="limit1">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="1" v-model="limit1">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            limit1:1,
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 展示风格1：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="1">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="1">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 展示风格2：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="2">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="2">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 展示风格3：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="3">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="3">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 展示风格4：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="4">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="4">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 展示风格5：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="5">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="5">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 节点动画效果：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="1" animate>
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="1" animate>
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
</lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
        }
       }
    }
</script>
```

</lee-code>
</div>

### 数据反向展示：
<div class="leeblock">
    <div class="leesource">
        <lee-timeline :theme="1" :reverse="true"  v-model="limit2">
            <lee-timeline-item v-for="(item,inx) in evenlist" :xh="inx" :timestamp="item.timestamp" :color="item.color" :size="item.size">
                {{item.content}}
            </lee-timeline-item>
        </lee-timeline>
    </div>
<lee-code>

```html
<lee-timeline :theme="1" :reverse="true"  v-model="limit2">
            <lee-timeline-item v-for="(item,inx) in evenlist" 
            :xh="inx" 
            :timestamp="item.timestamp" 
            :color="item.color" 
            :size="item.size">
            {{item.content}}
            </lee-timeline-item>
</lee-timeline>
```

```js
<script>
    export default {
        data() {
         return {
            limit2:2,
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }]
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
evenlist|配置显示内容|Array|content:内容;<br>timestamp:时间;<br>color:颜色;<br>size:点大小;|--
reverse|是否反序|Boolean|true,false|false
theme|展示风格|Number|1,2,3,4,5|1
v-model|初始展示数量|Number|-|-
animate|节点动画效果|Boolean|animate,空|空

<script>
    export default {
        data() {
         return {
            limit1:1,
            limit2:4,
            evenlist: [{
            content: '成立第一家超市——福州市鼓楼区古乐微利超市',
            timestamp: '1995-12-15',
            size:'large',
            color:'#3eaf7c'
            }, {
            content: '开设第一家以“永辉”命名的超市——福州市火车站永辉超市',
            timestamp: '1998-08-13',
            color:'#fc0'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（福州屏西店）',
            timestamp: '2000-07-11'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（厦门屏西店）',
            timestamp: '2001-07-11'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（广州屏西店）',
            timestamp: '2002-07-11'
            }, {
            content: '开设第一家“农改超”超市——永辉生鲜超市（龙岩屏西店）',
            timestamp: '2003-07-11'
            }]
        }
       },
        methods:{
           hello() {
            alert('你要关闭提示么？');
           }
        }
    }
</script>