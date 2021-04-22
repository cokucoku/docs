# DragSort 拖动排序

### 菜单：
<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0"> 
     <lee-drag-sort target="lee-cell">         
         <lee-cell :title="item" footer="" v-for="(item,xh) in menu" :key="xh"></lee-cell>     
     </lee-drag-sort>     
    </div>
<lee-code>

```html
<lee-drag-sort target="lee-cell">         
  <lee-cell :title="item" footer="" v-for="(item,xh) in menu" :key="xh"></lee-cell>     
</lee-drag-sort> 
```
```html
<script>
    export default {
        data() {
              return {
                menu:['首页','关于我们','产品中心','联系我们','解决方案']
              }
          },    
          methods:{
                       
          }
    }
</script>
```
</lee-code>
</div>

### alert：
<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0"> 
     <lee-drag-sort target="lee-alert">
        <lee-alert title="消息提示的文案" type="primary" show-icon></lee-alert>
        <lee-alert title="成功提示的文案" type="success" show-icon></lee-alert>
        <lee-alert title="成功提示的文案" type="leecolor" show-icon></lee-alert>
        <lee-alert title="消息提示的文案" type="info" show-icon></lee-alert>
        <lee-alert title="警告提示的文案" type="warning" show-icon></lee-alert>
        <lee-alert title="错误提示的文案" type="danger" show-icon></lee-alert>  
     </lee-drag-sort>     
    </div>
<lee-code>

```html
<lee-drag-sort target="lee-alert">
        <lee-alert title="消息提示的文案" type="primary" show-icon></lee-alert>
        <lee-alert title="成功提示的文案" type="success" show-icon></lee-alert>
        <lee-alert title="成功提示的文案" type="leecolor" show-icon></lee-alert>
        <lee-alert title="消息提示的文案" type="info" show-icon></lee-alert>
        <lee-alert title="警告提示的文案" type="warning" show-icon></lee-alert>
        <lee-alert title="错误提示的文案" type="danger" show-icon></lee-alert>  
</lee-drag-sort>  
```
</lee-code>
</div>
  
### button：
<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0"> 
     <lee-drag-sort target="lee-button">
       <lee-button>活泼</lee-button>
<lee-button type="disabled">聪明</lee-button>
<lee-button type="primary">可爱</lee-button>
<lee-button type="leecolor">温柔</lee-button>
<lee-button type="success">温和</lee-button>
<lee-button type="info">强势</lee-button>
<lee-button type="warning">稳重</lee-button>
<lee-button type="danger">善良</lee-button>
     </lee-drag-sort>     
    </div>
<lee-code>

```html
<lee-drag-sort target="lee-button">
    <lee-button>活泼</lee-button>
    <lee-button type="disabled">聪明</lee-button>
    <lee-button type="primary">可爱</lee-button>
    <lee-button type="leecolor">温柔</lee-button>
    <lee-button type="success">温和</lee-button>
    <lee-button type="info">强势</lee-button>
    <lee-button type="warning">稳重</lee-button>
    <lee-button type="danger">善良</lee-button>
</lee-drag-sort>   
```

</lee-code>
</div>
  



### dragSort 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
target|拖动元素的类名|String|--|--

<script>
    export default {
        data() {
              return {
                menu:['首页','关于我们','产品中心','联系我们','解决方案']
              }
          },    
          methods:{
                       
          }
    }
</script>
<style scoped>

</style>
