# ImgEffect 图片效果
### 手风琴效果：
<div class="leeblock">
    <div class="leesource">
      <lee-img-effect :config="config1"></lee-img-effect>
    </div>
<lee-code>
    
```html
<lee-img-effect :config="config"></lee-img-effect>
```
```html
<script>
    export default {
        data() {
              return {
                config:[
                {
                  imgurl:'https://picsum.photos/id/3/650/300',
                  tit:'办公室白领'
                },{
                  imgurl:'https://picsum.photos/id/23/650/300',
                  tit:'金属刀叉'
                },{
                  imgurl:'https://picsum.photos/id/33/650/300',
                  tit:'在希望的田野上'
                },{
                  imgurl:'https://picsum.photos/id/43/650/300',
                  tit:'都市夜景灯光'
                },{
                  imgurl:'https://picsum.photos/id/53/650/300',
                  tit:'蓝蓝的天空'
                },{
                  imgurl:'https://picsum.photos/id/63/650/300',
                  tit:'来一杯咖啡呗'
                },{
                  imgurl:'https://picsum.photos/id/73/650/300',
                  tit:'面包的清香'
                }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### 淡入淡出效果：
<div class="leeblock">
    <div class="leesource">
      <lee-img-effect :config="config2" effect="change"></lee-img-effect>
    </div>
<lee-code>
    
```html
<lee-img-effect :config="config" effect="change"></lee-img-effect>
```
```html
<script>
    export default {
        data() {
              return {
                config:[
                {
                  imgurl:'https://picsum.photos/id/3/650/300',
                  tit:'办公室白领'
                },{
                  imgurl:'https://picsum.photos/id/23/650/300',
                  tit:'金属刀叉'
                },{
                  imgurl:'https://picsum.photos/id/33/650/300',
                  tit:'在希望的田野上'
                },{
                  imgurl:'https://picsum.photos/id/43/650/300',
                  tit:'都市夜景灯光'
                },{
                  imgurl:'https://picsum.photos/id/53/650/300',
                  tit:'蓝蓝的天空'
                },{
                  imgurl:'https://picsum.photos/id/63/650/300',
                  tit:'来一杯咖啡呗'
                },{
                  imgurl:'https://picsum.photos/id/73/650/300',
                  tit:'面包的清香'
                }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### 向左切换效果：
<div class="leeblock">
    <div class="leesource">
      <lee-img-effect :config="config3" effect="slideleft"></lee-img-effect>
    </div>
<lee-code>
    
```html
<lee-img-effect :config="config" effect="slideleft"></lee-img-effect>
```
```html
<script>
    export default {
        data() {
              return {
                config:[
                {
                  imgurl:'https://picsum.photos/id/3/650/300',
                  tit:'办公室白领'
                },{
                  imgurl:'https://picsum.photos/id/23/650/300',
                  tit:'金属刀叉'
                },{
                  imgurl:'https://picsum.photos/id/33/650/300',
                  tit:'在希望的田野上'
                },{
                  imgurl:'https://picsum.photos/id/43/650/300',
                  tit:'都市夜景灯光'
                },{
                  imgurl:'https://picsum.photos/id/53/650/300',
                  tit:'蓝蓝的天空'
                },{
                  imgurl:'https://picsum.photos/id/63/650/300',
                  tit:'来一杯咖啡呗'
                },{
                  imgurl:'https://picsum.photos/id/73/650/300',
                  tit:'面包的清香'
                }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### 九宫格：
<div class="leeblock">
    <div class="leesource">
      <lee-img-effect :config="config4" effect="ninegrid"></lee-img-effect>
    </div>
<lee-code>
    
```html
<lee-img-effect :config="config" effect="ninegrid"></lee-img-effect>
```
```html
<script>
    export default {
        data() {
              return {
                config:[
                {
                  imgurl:'https://picsum.photos/id/3/650/300',
                  tit:'办公室白领'
                },{
                  imgurl:'https://picsum.photos/id/23/650/300',
                  tit:'金属刀叉'
                },{
                  imgurl:'https://picsum.photos/id/33/650/300',
                  tit:'在希望的田野上'
                },{
                  imgurl:'https://picsum.photos/id/43/650/300',
                  tit:'都市夜景灯光'
                },{
                  imgurl:'https://picsum.photos/id/53/650/300',
                  tit:'蓝蓝的天空'
                },{
                  imgurl:'https://picsum.photos/id/63/650/300',
                  tit:'来一杯咖啡呗'
                },{
                  imgurl:'https://picsum.photos/id/73/650/300',
                  tit:'面包的清香'
                }
                ]
              }
          }
    }
</script>
```
</lee-code>
</div>

### ImgEffect 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
config|图片配置信息|Object|--|--
effect|图片切换效果|String|accordion,slideleft,change,ninegrid|accordion
height|图片高度|String|--|300px
<script>
    export default {
        data() {
              return {
                config1:[
                {
                  imgurl:'https://picsum.photos/id/4/650/300',
                  tit:'办公室白领'
                },{
                  imgurl:'https://picsum.photos/id/14/650/300',
                  tit:'无际大海'
                },{
                  imgurl:'https://picsum.photos/id/33/650/300',
                  tit:'在希望的田野上'
                },{
                  imgurl:'https://picsum.photos/id/43/650/300',
                  tit:'都市夜景灯光'
                },{
                  imgurl:'https://picsum.photos/id/57/650/300',
                  tit:'城市街道'
                },{
                  imgurl:'https://picsum.photos/id/75/650/300',
                  tit:'葡萄'
                },{
                  imgurl:'https://picsum.photos/id/84/650/300',
                  tit:'夜景大桥'
                }
                ],
                config2:[
                {
                  imgurl:'https://picsum.photos/id/159/650/300',
                  tit:'水珠'
                },{
                  imgurl:'https://picsum.photos/id/167/650/300',
                  tit:'秋叶'
                },{
                  imgurl:'https://picsum.photos/id/168/650/300',
                  tit:'乱石'
                },{
                  imgurl:'https://picsum.photos/id/169/650/300',
                  tit:'狗狗'
                },{
                  imgurl:'https://picsum.photos/id/196/650/300',
                  tit:'沙漠'
                },{
                  imgurl:'https://picsum.photos/id/193/650/300',
                  tit:'城堡'
                },{
                  imgurl:'https://picsum.photos/id/179/650/300',
                  tit:'大海'
                }
                ],
                config3:[
                {
                  imgurl:'https://picsum.photos/id/106/650/300',
                  tit:'美丽的花朵'
                },{
                  imgurl:'https://picsum.photos/id/18/650/300',
                  tit:'碧绿的草地'
                },{
                  imgurl:'https://picsum.photos/id/109/650/300',
                  tit:'森林深处'
                },{
                  imgurl:'https://picsum.photos/id/111/650/300',
                  tit:'古董车'
                },{
                  imgurl:'https://picsum.photos/id/112/650/300',
                  tit:'风吹草动'
                },{
                  imgurl:'https://picsum.photos/id/124/650/300',
                  tit:'一叶孤舟'
                },{
                  imgurl:'https://picsum.photos/id/133/650/300',
                  tit:'汽车'
                }
                ],
                config4:[
                {
                  imgurl:'https://picsum.photos/id/134/650/300',
                  tit:'桥梁'
                },{
                  imgurl:'https://picsum.photos/id/136/650/300',
                  tit:'大自然山川'
                },{
                  imgurl:'https://picsum.photos/id/137/650/300',
                  tit:'旋转'
                },{
                  imgurl:'https://picsum.photos/id/139/650/300',
                  tit:'秋风扫落叶'
                },{
                  imgurl:'https://picsum.photos/id/142/650/300',
                  tit:'城堡'
                },{
                  imgurl:'https://picsum.photos/id/143/650/300',
                  tit:'木板蔓藤'
                },{
                  imgurl:'https://picsum.photos/id/153/650/300',
                  tit:'会议室'
                },{
                  imgurl:'https://picsum.photos/id/152/650/300',
                  tit:'漂亮花朵'
                },{
                  imgurl:'https://picsum.photos/id/146/650/300',
                  tit:'自行车'
                }
                ]
              }
          }
    }
</script>
<style scoped>
/*.lee-img-effect.accordion{height: 300px;}
.lee-img-effect.change{height: 400px;}
.lee-img-effect.slideleft{height: 300px;}*/
</style>