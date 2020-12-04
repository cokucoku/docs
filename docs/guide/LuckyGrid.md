# LuckGrid 九宫格抽奖
九宫格抽奖 Demo
### 九宫格抽奖 Demo：

<div class="leeblock">
    <div class="leesource">
    <lee-luck-grid ref="LuckDraw1" :config="config1" :prizes="prizes1" :btnConfig="btnConfig1" @start="startCallBack1"
    @end="endCallBack1"></lee-luck-grid>     
    </div>
<lee-code>
    
```html
<lee-luck-grid ref="LuckDraw" :config="config" :prizes="prizes" :btnConfig="btnConfig" @start="startCallBack"
    @end="endCallBack"></lee-luck-grid>
```
```js
<script>
    export default {
        data() {
              return {
               luckyNum:12
               prizes: [
                  {fonts:{text:'1元红包',top:'73%'}, imgs: [{src:'/zp-0.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'100元红包',top:'73%'},imgs: [{src:'/zp-1.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'0.5元红包',top:'73%'},imgs: [{src:'/zp-2.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'2元红包',top:'73%'},imgs: [{src:'/zp-3.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'10元红包',top:'73%'},imgs: [{src:'/zp-4.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'50元红包',top:'73%'},imgs: [{src:'/zp-5.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'0.3元红包',top:'73%'},imgs: [{src:'/zp-6.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'5元红包',top:'73%'},imgs: [{src:'/zp-7.png',width:'50%',top:'10%'}]}
                ],
               config:{
                 grid:{
                    borderRadius: 15,
                    fontSize: '14px',
                    defaultStyle: {
                        background: '#fff',
                        fontColor: '#DF424B',
                    },
                    activeStyle: {
                        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
                        fontColor: '#000',
                    }
                 },
                 style:{
                     width:310,
                     height:310,
                     padding:20,
                     backgroundColor: '#ff4a4c',
                     borderRadius: 15,
                     gutter:5,//沟壑间隔
                 }
                }
              }
          },
          methods:{
            startCallBack(){
              if (!this.luckyNum) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw.play(Math.random() * 8 >> 0)
            },
            endCallBack(inx){
              alert(`恭喜你获得大奖: ${this.prizes[inx].fonts.text}`)
              this.luckyNum--
            }
          },
          mounted(){
          },
          computed:{
               btnConfig(){
                   return{
                        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
                        fonts: [
                          { text: `${this.luckyNum} 次`, fontColor: '#fff', top: '73%', fontSize: '11px' },
                        ],
                        imgs: [
                          { src: '/ljcj.png', width: '65%', top: '13%' },
                          { src: '/num.png', width: '50%', top: '73%' }
                        ]
                   }
              }
          }
    }
</script>
````
</lee-code>
</div>

### 仿网易严选九宫格：

<div class="leeblock">
    <div class="leesource">
    <lee-luck-grid ref="LuckDraw2" :config="config2" :prizes="prizes2" :btnConfig="btnConfig2" @start="startCallBack2"
    @end="endCallBack2"></lee-luck-grid>     
    </div>
<lee-code>
    
```html
<lee-luck-grid ref="LuckDraw" :config="config" :prizes="prizes" :btnConfig="btnConfig" @start="startCallBack"
    @end="endCallBack"></lee-luck-grid>
```
```js
<script>
    export default {
        data() {
              return {
               luckyNum:12,
                prizes2: [
                  {fonts:{text:'电热烘干毛巾架'}, imgs: [{src:'/default-0.png',activeSrc:'/active-0.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'10元满减红包'},imgs: [{src:'/default-1.png',activeSrc:'/active-1.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'2积分'},imgs: [{src:'/default-2.png',width:'100%',activeSrc:'/active-2.png',top:'0%'}]},
                  {fonts:{text:'胖喵焖烧罐'},imgs: [{src:'/default-3.png',activeSrc:'/active-3.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'5元满减红包'},imgs: [{src:'/default-4.png',activeSrc:'/active-4.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'多层置物架'},imgs: [{src:'/default-5.png',activeSrc:'/active-5.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'3元直减红包'},imgs: [{src:'/default-6.png',activeSrc:'/active-6.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'全场满99减10'},imgs: [{src:'/default-7.png',activeSrc:'/active-7.png',width:'100%',top:'0%'}]}
                ],
               config2:{
                 grid:{
                    borderRadius: 5,
                    fontSize: '10px',
                    defaultStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: 'rgba(0, 0, 0, 0)',
                    },
                    activeStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: 'rgba(0, 0, 0, 0)',
                    }
                 },
                 style:{
                     width:310,
                     height:310,
                     padding:14,
                     backgroundColor: 'rgba(0, 0, 0, 0)',
                     backgroundImage:'/k1.png',
                     borderRadius: 5,
                     gutter:2,//沟壑间隔
                 }
                }
              }
          },
          methods:{
            startCallBack(){
              if (!this.luckyNum) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw.play(Math.random() * 8 >> 0)
            },
            endCallBack(inx){
              alert(`恭喜你获得大奖: ${this.prizes[inx].fonts.text}`)
              this.luckyNum--
            }
          },
          mounted(){
          },
          computed:{
               btnConfig(){
                   return{
                        background: 'rgba(0,0,0,.0)',
                        imgs: [
                          { src: '/jfcj.png', width: '90%', top: '5%' }
                        ]
                   }
              }
          }
    }
</script>
````
</lee-code>
</div>


### 仿某开源九宫格:

<div class="leeblock">
    <div class="leesource">
    <lee-luck-grid ref="LuckDraw3" :config="config3" :prizes="prizes3" :btnConfig="btnConfig3" @start="startCallBack3"
    @end="endCallBack3"></lee-luck-grid>     
    </div>
<lee-code>
    
```html
<lee-luck-grid ref="LuckDraw" :config="config" :prizes="prizes" :btnConfig="btnConfig" @start="startCallBack"
    @end="endCallBack"></lee-luck-grid>
```
```js
<script>
    export default {
        data() {
              return {
               luckyNum:12
               prizes: [
                  {fonts:{text:'谢谢',top:'73%'}, imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'谢谢',top:'73%'},imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'谢谢',top:'73%'},imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'谢谢',top:'73%'},imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]}
                ],
               config:{
                 grid:{
                    borderRadius: 5,
                    fontSize: '14px',
                    defaultStyle: {
                        background: '#fff',
                        fontColor: '#7790c2',
                    },
                    activeStyle: {
                        background: '#ff3a59',
                        fontColor: '#fff',
                    }
                 },
                 style:{
                     width:310,
                     height:330,
                     padding:25,
                     backgroundColor: '#fffcf5',
                     backgroundImage:'/k2.png',
                     borderRadius: 8,
                     gutter:8,//沟壑间隔
                 }
                }
              }
          },
          methods:{
            startCallBack(){
              if (!this.luckyNum) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw.play(Math.random() * 8 >> 0)
            },
            endCallBack(inx){
              alert(`恭喜你获得大奖: ${this.prizes[inx].fonts.text}`)
              this.luckyNum--
            }
          },
          mounted(){
          },
          computed:{
               btnConfig(){
                   return{
                        background: 'rgb(255, 58, 89)',
                        fonts: [
                          { text: '抽奖', fontColor: '#fff', top: '18%', fontSize: '30px' },
                          { text: '消耗10积分', fontColor: '#fff', top: '68%', fontSize: '12px' }
                        ],
                   }
              }
          }
    }
</script>
````
</lee-code>
</div>

### 吃货九宫格:

<div class="leeblock">
    <div class="leesource">
    <lee-luck-grid ref="LuckDraw4" :config="config4" :prizes="prizes4" :btnConfig="btnConfig4" @start="startCallBack4"
    @end="endCallBack4"></lee-luck-grid>
    </div>
<lee-code>

```html
<lee-luck-grid ref="LuckDraw" :config="config" :prizes="prizes" :btnConfig="btnConfig" @start="startCallBack"
    @end="endCallBack"></lee-luck-grid>
```
```js
<script>
    export default {
        data() {
              return {
               luckyNum:12
               prizes: [
                  {fonts:{text:'谢谢参与',top:'63%'}, imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-0.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'米饭',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-1.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'排骨',top:'63%'},imgs: [{src:'/default-eat.png',width:'100%',activeSrc:'/active-eat.png',top:'0%'},{src:'/eat-2.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'咖啡',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-3.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'卷心蛋糕',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-4.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'热狗',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-5.png',width:'80%',top:'05%'}]},
                  {fonts:{text:'草莓蛋糕',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-6.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'零食',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-7.png',width:'80%',top:'5%'}]}
                ],
               config:{
                 grid:{
                    borderRadius: 5,
                    fontSize: '12px',
                    defaultStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: '#fff',
                    },
                    activeStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: '#1c258e',
                    }
                 },
                 style:{
                     width:310,
                     height:310,
                     padding:25,
                     backgroundColor: '#fffcf5',
                     backgroundImage:'/k3.png',
                     borderRadius: 8,
                     gutter:8,//沟壑间隔
                 }
                }
              }
          },
          methods:{
            startCallBack(){
              if (!this.luckyNum) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw.play(Math.random() * 8 >> 0)
            },
            endCallBack(inx){
              alert(`恭喜你获得大奖: ${this.prizes[inx].fonts.text}`)
              this.luckyNum--
            }
          },
          mounted(){
          },
          computed:{
               btnConfig(){
                   return{
                        background: 'rgba(0,0,0,.0)',
                        fonts: [
                          { text: '开始', fontColor: '#1c258e', top: '18%', fontSize: '30px' },
                          { text: '- start -', fontColor: '#1c258e', top: '68%', fontSize: '12px' }
                        ],
                        imgs: [
                          { src: '/active-eat.png', width: '100%', top: '0%' }
                        ]
                   }
              }
          }
    }
</script>
````
</lee-code>
</div>

### LuckGrid 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
config|配置九宫格|Object|grid，style|--
btnConfig|配置按钮|Object|background,fonts,imgs|--
prizes|配置礼品|Array|fonts,imgs|--
<script>
    export default {
        data() {
              return {
               luckyNum1:12,
               luckyNum2:22,
               luckyNum3:32,
               luckyNum4:13,
               prizes1: [
                  {fonts:{text:'1元红包',top:'73%'}, imgs: [{src:'/zp-0.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'100元红包',top:'73%'},imgs: [{src:'/zp-1.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'0.5元红包',top:'73%'},imgs: [{src:'/zp-2.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'2元红包',top:'73%'},imgs: [{src:'/zp-3.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'10元红包',top:'73%'},imgs: [{src:'/zp-4.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'50元红包',top:'73%'},imgs: [{src:'/zp-5.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'0.3元红包',top:'73%'},imgs: [{src:'/zp-6.png',width:'50%',top:'10%'}]},
                  {fonts:{text:'5元红包',top:'73%'},imgs: [{src:'/zp-7.png',width:'50%',top:'10%'}]}
                ],
                prizes2: [
                  {fonts:{text:'电热烘干毛巾架'}, imgs: [{src:'/default-0.png',activeSrc:'/active-0.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'10元满减红包'},imgs: [{src:'/default-1.png',activeSrc:'/active-1.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'2积分'},imgs: [{src:'/default-2.png',width:'100%',activeSrc:'/active-2.png',top:'0%'}]},
                  {fonts:{text:'胖喵焖烧罐'},imgs: [{src:'/default-3.png',activeSrc:'/active-3.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'5元满减红包'},imgs: [{src:'/default-4.png',activeSrc:'/active-4.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'多层置物架'},imgs: [{src:'/default-5.png',activeSrc:'/active-5.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'3元直减红包'},imgs: [{src:'/default-6.png',activeSrc:'/active-6.png',width:'100%',top:'0%'}]},
                  {fonts:{text:'全场满99减10'},imgs: [{src:'/default-7.png',activeSrc:'/active-7.png',width:'100%',top:'0%'}]}
                ],
               prizes3: [
                  {fonts:{text:'谢谢',top:'73%'}, imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'谢谢',top:'73%'},imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'谢谢',top:'73%'},imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'谢谢',top:'73%'},imgs: [{src:'/xx.png',width:'60%',top:'10%'}]},
                  {fonts:{text:'红包',top:'73%'},imgs: [{src:'/hb.png',width:'60%',top:'10%'}]}
                ],
                prizes4: [
                  {fonts:{text:'谢谢参与',top:'63%'}, imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-0.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'米饭',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-1.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'排骨',top:'63%'},imgs: [{src:'/default-eat.png',width:'100%',activeSrc:'/active-eat.png',top:'0%'},{src:'/eat-2.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'咖啡',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-3.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'卷心蛋糕',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-4.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'热狗',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-5.png',width:'80%',top:'05%'}]},
                  {fonts:{text:'草莓蛋糕',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-6.png',width:'80%',top:'5%'}]},
                  {fonts:{text:'零食',top:'63%'},imgs: [{src:'/default-eat.png',activeSrc:'/active-eat.png',width:'100%',top:'0%'},{src:'/eat-7.png',width:'80%',top:'5%'}]}
                ]
                ,
               config1:{
                 grid:{
                    borderRadius: 15,
                    fontSize: '14px',
                    defaultStyle: {
                        background: '#fff',
                        fontColor: '#DF424B',
                    },
                    activeStyle: {
                        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
                        fontColor: '#000',
                    }
                 },
                 style:{
                     width:310,
                     height:310,
                     padding:20,
                     backgroundColor: '#ff4a4c',
                     borderRadius: 15,
                     gutter:5,//沟壑间隔
                 }
                },
                config2:{
                 grid:{
                    borderRadius: 5,
                    fontSize: '10px',
                    defaultStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: 'rgba(0, 0, 0, 0)',
                    },
                    activeStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: 'rgba(0, 0, 0, 0)',
                    }
                 },
                 style:{
                     width:310,
                     height:310,
                     padding:14,
                     backgroundColor: 'rgba(0, 0, 0, 0)',
                     backgroundImage:'/k1.png',
                     borderRadius: 5,
                     gutter:2,//沟壑间隔
                 }
                },
                config3:{
                 grid:{
                    borderRadius: 5,
                    fontSize: '14px',
                    defaultStyle: {
                        background: '#fff',
                        fontColor: '#7790c2',
                    },
                    activeStyle: {
                        background: '#ff3a59',
                        fontColor: '#fff',
                    }
                 },
                 style:{
                     width:310,
                     height:330,
                     padding:25,
                     backgroundColor: '#fffcf5',
                     backgroundImage:'/k2.png',
                     borderRadius: 8,
                     gutter:8,//沟壑间隔
                 }
                },
                config4:{
                 grid:{
                    borderRadius: 5,
                    fontSize: '12px',
                    defaultStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: '#fff',
                    },
                    activeStyle: {
                        background: 'rgba(0, 0, 0, 0)',
                        fontColor: '#1c258e',
                    }
                 },
                 style:{
                     width:310,
                     height:310,
                     padding:25,
                     backgroundColor: '#fffcf5',
                     backgroundImage:'/k3.png',
                     borderRadius: 8,
                     gutter:8,//沟壑间隔
                 }
                }
              }
          },
          methods:{
            startCallBack1(){
              if (!this.luckyNum1) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw1.play(Math.random() * 8 >> 0)
            },
            endCallBack1(inx){
              alert(`恭喜你获得大奖: ${this.prizes1[inx].fonts.text}`)
              this.luckyNum1--
            },
            startCallBack2(){
              if (!this.luckyNum2) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw2.play(Math.random() * 8 >> 0)
            },
            endCallBack2(inx){
              alert(`恭喜你获得大奖: ${this.prizes2[inx].fonts.text}`)
              this.luckyNum2--
            },
            startCallBack3(){
              if (!this.luckyNum3) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw3.play(Math.random() * 8 >> 0)
            },
            endCallBack3(inx){
              alert(`恭喜你获得大奖: ${this.prizes3[inx].fonts.text}`)
              this.luckyNum3--
            },
            startCallBack4(){
              if (!this.luckyNum4) return alert('还剩0次抽奖机会')
              this.$refs.LuckDraw4.play(Math.random() * 8 >> 0)
            },
            endCallBack4(inx){
              alert(`恭喜你获得大奖: ${this.prizes4[inx].fonts.text}`)
              this.luckyNum4--
            }
          },
          mounted(){
          },
          computed:{
               btnConfig1(){
                   return{
                        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
                        fonts: [
                          { text: `${this.luckyNum1} 次`, fontColor: '#fff', top: '73%', fontSize: '11px' },
                        ],
                        imgs: [
                          { src: '/ljcj.png', width: '65%', top: '13%' },
                          { src: '/num.png', width: '50%', top: '73%' }
                        ]
                   }
              },
              btnConfig2(){
                   return{
                        background: 'rgba(0,0,0,.0)',
                        imgs: [
                          { src: '/jfcj.png', width: '90%', top: '5%' }
                        ]
                   }
              },
              btnConfig3(){
                   return{
                        background: 'rgb(255, 58, 89)',
                        fonts: [
                          { text: '抽奖', fontColor: '#fff', top: '18%', fontSize: '30px' },
                          { text: '消耗10积分', fontColor: '#fff', top: '68%', fontSize: '12px' }
                        ],
                   }
              },
              btnConfig4(){
                   return{
                        background: 'rgba(0,0,0,.0)',
                        fonts: [
                          { text: '开始', fontColor: '#1c258e', top: '18%', fontSize: '30px' },
                          { text: '- start -', fontColor: '#1c258e', top: '68%', fontSize: '12px' }
                        ],
                        imgs: [
                          { src: '/active-eat.png', width: '100%', top: '0%' }
                        ]
                   }
              }
          }
    }
</script>
<style scoped>

</style>