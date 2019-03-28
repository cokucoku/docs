# :book: Notification 通知
手机通知提醒消息。
#### 基础用法：
<div class="leeblock">
    <div class="leesource">
        <div class="demo">
            <lee-notification>
             <lee-notification-item v-for="(item,inx) in list" :item="item" :key="item.time"></lee-notification-item>
            </lee-notification>
        </div>
    </div>
<lee-code>
    
```html
<lee-notification>
   <lee-notification-item v-for="(item,inx) in list" :item="item" :key="item.time"></lee-notification-item>
 </lee-notification>
```
```js
<script>
    var list = [{
        'title': '抖音短视频',
        'time': '02.12',
        'content': '抖音上的八大网红,有五个你认识的,就说明你是抖音的资深玩家'
    }]
    var listnew = [{
        'title': '腾讯新闻',
        'time': '10.25',
        'content': '老挝湖南商会会长家中遇袭身亡：2名涉案主要嫌疑人被押解回国'
    }, {
        'title': '今日头条',
        'time': '08.53',
        'content': '台湾大学生提问“广州有没有地铁”被讽井底之蛙，台网友：民进党害惨台湾'
    },{
        'title': '腾讯视频',
        'time': '06.47',
        'content': '83岁老人街边遭陌生男子殴打 满脸是血全身多处骨折'
    }, {
        'title': '京东',
        'time': '03.41',
        'content': '全球好物，11.5超级狂欢；京东超级品牌日'
    }]
    export default {
        data() {
         return {
            list: list
        }
       },
        mounted(){
            var adds;
            setInterval(function(){
                if(listnew.length>0){
                  adds=listnew.pop()
                }else{
                  return
                }
                list.unshift(adds)
            },4000)
        }
    }
</script>
```
</lee-code>
</div>


### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
item|数据项|Object|title:通知来源<br>time:通知时间<br>content:通知内容<br>|--

<script>
    var list = [{
        'title': '抖音短视频',
        'time': '02.12',
        'content': '抖音上的八大网红,有五个你认识的,就说明你是抖音的资深玩家'
    }]
    var listnew = [{
        'title': '腾讯新闻',
        'time': '10.25',
        'content': '老挝湖南商会会长家中遇袭身亡：2名涉案主要嫌疑人被押解回国'
    }, {
        'title': '今日头条',
        'time': '08.53',
        'content': '台湾大学生提问“广州有没有地铁”被讽井底之蛙，台网友：民进党害惨台湾'
    },{
        'title': '腾讯视频',
        'time': '06.47',
        'content': '83岁老人街边遭陌生男子殴打 满脸是血全身多处骨折'
    }, {
        'title': '京东',
        'time': '03.41',
        'content': '全球好物，11.5超级狂欢；京东超级品牌日'
    }]
    export default {
        data() {
         return {
            list: list
        }
       },
        mounted(){
            var adds;
            setInterval(function(){
                if(listnew.length>0){
                  adds=listnew.pop()
                }else{
                  return
                }
                list.unshift(adds)
            },4000)
        }
    }
</script>
<style>
    .demo{width: 414px;height: 536px;overflow: hidden;background: url(./img/ipbg.jpg);padding:20px;background-size: cover;}
    @media screen and (max-width: 768px) {
        .demo{width: calc(100% - 20px);padding: 10px;height:500px;}
    }
</style>