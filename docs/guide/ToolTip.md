# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。
### 基础示例：
<div class="leeblock">
    <div class="leesource">
      <div class="top">
        <lee-tool-tip color="#f60" content="上边提示文字" position="top">
          <lee-button>上边</lee-button>
         </lee-tool-tip>
      </div>
      <div class="left">
        <lee-tool-tip color="#333" content="左边提示文字" position="left">
          <lee-button>左边</lee-button>
        </lee-tool-tip>
      </div>
      <div class="right">
        <lee-tool-tip color="#fc0" content="右边提示文字" position="right">
          <lee-button>右边</lee-button>
        </lee-tool-tip>
      </div>
      <div class="bottom">
        <lee-tool-tip color="#409eff" content="下边提示文字" position="bottom">
          <lee-button>下边</lee-button>
        </lee-tool-tip>
      </div>
    </div>
<lee-code>
    
```html
<lee-tool-tip color="#f60" content="上边提示文字" position="top">
   <lee-button>上边</lee-button>
</lee-tool-tip>
```
</lee-code>
</div>




### Tooltip 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
color|Tooltip颜色|String|--|--
content|Tooltip内容|String|--|--
position|Tooltip位置|String|top,left,right,bottom|top


<script>
    export default {
        data() {
              return {
              }
          }
    }
</script>
<style scoped>
    .leesource{padding:65px 20px;}
    .left{float: left;}
    .right{float: right;}
    .bottom{clear: both;text-align: center}
    .top{text-align: center}
    
</style>