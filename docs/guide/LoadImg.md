# Loading 加载
加载数据时显示动效。
### 基础示例：

<div class="leeblock">
    <div class="leesource">
      <ul class="gongge">
        <li><lee-loading type="circle"></lee-loading><div class="type">type="circle"</div></li>
        <li><lee-loading type="circle-side"></lee-loading><div class="type">type="circle-side"</div></li>
        <li><lee-loading type="circle-arrow"></lee-loading><div class="type">type="circle-arrow"</div></li>
        <li><lee-loading type="rectangle"></lee-loading><div class="type">type="rectangle"</div></li>
        <li><lee-loading type="square-move"></lee-loading><div class="type">type="square-move"</div></li>
        <li><lee-loading type="ball-circle"></lee-loading><div class="type">type="ball-circle"</div></li>
        <li><lee-loading type="ball-wave"></lee-loading><div class="type">type="ball-wave"</div></li>
        <li><lee-loading type="take-turn"></lee-loading><div class="type">type="take-turn"</div></li>
        <!-- <li><lee-loading type="google"></lee-loading><div class="type">type="google"</div></li> -->
        <li><lee-loading></lee-loading><div class="type">type="ball-pulse"</div></li>
        <li><lee-loading type="radar-2"></lee-loading><div class="type">type="radar-2"</div></li>
        <li><lee-loading type="radar-1"></lee-loading><div class="type">type="radar-1"</div></li>
        <li><lee-loading type="spinner"></lee-loading><div class="type">type="spinner"</div></li>
        <li><lee-loading type="progress"></lee-loading><div class="type">type="progress"</div></li>
        <li><lee-loading type="zebra-crossing"></lee-loading><div class="type">type="zebra-crossing"</div></li>
        <li><lee-loading type="flip-block"></lee-loading><div class="type">type="flip-block"</div></li>
        <li><lee-loading type="box"></lee-loading><div class="type">type="box"</div></li>
        <li><lee-loading type="swim-block"></lee-loading><div class="type">type="swim-block"</div></li>
        <li><lee-loading type="croll-block"></lee-loading><div class="type">type="croll-block"</div></li>
        <li><lee-loading type="wave"></lee-loading><div class="type">type="wave"</div></li>
      </ul>
    </div>
<lee-code>
    
```html
<lee-loading type="circle" color="#f60"></lee-loading>
```
</lee-code>
</div>


### Steps 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
type|加载样式|String|circle,circle-side,circle-arrow,rectangle,square-move,ball-circle,ball-wave,take-turn,ball-pulse,radar-1,radar-2,spinner,progress,zebra-crossing|ball-pulse
color|加载颜色|String|--|--
<script>
    export default {
        data() {
              return {
                
              }
          },
          methods:{
            
          }
    }
</script>
<style scoped>
.gongge{display: flex;flex-wrap: wrap;margin:0px;padding:0px;}
.gongge li{width: 33.33%;list-style: none;margin:0px;padding:0px;border:solid 1px #dedede;box-sizing: border-box;margin-top: -1px;margin-right: -1px;height: 15vh;display: flex;align-items: center;justify-content: center;flex-direction: column;position: relative;}
.gongge li .type{font-size: 12px;position: absolute;width: 100%;bottom: 10px;text-align: center;}
</style>