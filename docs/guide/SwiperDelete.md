# SwiperDelete 滑动删除

### 示例：
</lee-scroll-select>
<div class="leeblock">
    <div class="leesource" style="background: #f0f0f0">     
     <lee-swiper-delete :config="config"></lee-swiper-delete>
    </div>
<lee-code>

```html

```
```js
```
</lee-code>
</div>

### SwiperDelete 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
config|数据结构|Array|--|--



<script>
    export default {
        data() {
              return {
              config:[
              {
              "author":"NASA",            
              "download_url":"https://picsum.photos/id/1002/100/100"
              },
              {
              "author":"E+N Photographies",
              "download_url":"https://picsum.photos/id/1003/100/100"},
              {"author":"Greg Rakozy",
              "download_url":"https://picsum.photos/id/1004/100/100"},
              {"author":"Matthew Wiebe",
              "url":"https://unsplash.com/photos/tBtuxtLvAZs",
              "download_url":"https://picsum.photos/id/1005/100/100"},
              {"author":"Vladimir Kudinov",
              "download_url":"https://picsum.photos/id/1006/100/100"},
              {"author":"Benjamin Combs","download_url":"https://picsum.photos/id/1008/100/100"}
              ]              
                
              }
        },    
        methods:{
                                  
        }
    }
</script>
