# Progress 进度条
### 示例：
<div class="leeblock">
    <div class="leesource">
      <lee-progress show-info animate></lee-progress>
      <lee-progress :percent="20"></lee-progress>
      <lee-progress :percent="30" active-color="#f60"></lee-progress>
      <lee-progress :percent="40" background-color="#fafafa"></lee-progress>
      <lee-progress :percent="50" :stroke-width="10"></lee-progress>
      <lee-progress animate :percent="80" :stroke-width="10" :border-radius="5"></lee-progress>
    </div>
<lee-code>

```html
<lee-progress show-info animate></lee-progress>
<lee-progress :percent="20"></lee-progress>
<lee-progress :percent="30" active-color="#f60"></lee-progress>
<lee-progress :percent="40" background-color="#fafafa"></lee-progress>
<lee-progress :percent="50" :stroke-width="10"></lee-progress>
<lee-progress animate :percent="80" :stroke-width="10" :border-radius="5"></lee-progress>
```

</lee-code>
</div>

### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
percent|百分比0~100|number|0,1...|10
stroke-width|进度条线的宽度|number|-|3
border-radius|圆角大小|number|-|0
active-color|已选择的进度条的颜色|string|-|'#09BB07'
background-color|未选择的进度条的颜色|string|-|'#EBEBEB'
show-info|在进度条右侧显示百分比|boolean|true,false|false

<script>
export default {
    data() {
        return {
           
        };
    },
    methods: {
       
    }
}
</script>
<style>
  .lee-progress{margin:25px 0;}
</style>