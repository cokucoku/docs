# Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于2步。
### 基础示例：

<div class="leeblock">
    <div class="leesource">
          <lee-steps :active="active1" color="#46bd87">
              <lee-step title="多样">组件多样化，让你减少开发UI烦恼</lee-step>
              <lee-step title="基于Vue">基于Vue，生态圈更强大。</lee-step>
              <lee-step title="效率">简单配置，立即生效，缩短开发周期。</lee-step>
          </lee-steps>
          <div style="margin-top: 15px">
              <lee-button @click="next1">下一步</lee-button>
              <lee-button @click="prev1">上一步</lee-button>
          </div>
    </div>
<lee-code>
    
```html
<lee-steps :active="active" color="#46bd87">
    <lee-step title="多样">组件多样化，让你减少开发UI烦恼</lee-step>
    <lee-step title="基于Vue">基于Vue，生态圈更强大。</lee-step>
    <lee-step title="效率">简单配置，立即生效，缩短开发周期。</lee-step>
</lee-steps>
<lee-button @click="next">下一步</lee-button>
<lee-button @click="prev">上一步</lee-button>
```
```html
<script>
    export default {
        data() {
              return {
                active:0
              }
          },
          methods:{
            next(){
              this.active+=1
              if(this.active>3){
                this.active=0
              }
            },
            prev(){
              this.active-=1
              if(this.active<0){
                this.active=0
              }
            }
          }
    }
</script>
```
</lee-code>
</div>

### 居中步骤条：

<div class="leeblock">
    <div class="leesource">
          <lee-steps :active="active3" color="#46bd87" center fill  >
              <lee-step title="多样">组件多样化，让你减少开发UI烦恼</lee-step>
              <lee-step title="基于Vue">基于Vue，生态圈更强大。</lee-step>
              <lee-step title="效率">简单配置，立即生效，缩短开发周期。</lee-step>
          </lee-steps>
          <div style="margin-top: 15px">
              <lee-button @click="next3">下一步</lee-button>
              <lee-button @click="prev3">上一步</lee-button>
          </div>
    </div>
<lee-code>
    
```html
<lee-steps :active="active" color="#46bd87" center>
    <lee-step title="多样">组件多样化，让你减少开发UI烦恼</lee-step>
    <lee-step title="基于Vue">基于Vue，生态圈更强大。</lee-step>
    <lee-step title="效率">简单配置，立即生效，缩短开发周期。</lee-step>
</lee-steps>
<lee-button @click="next">下一步</lee-button>
<lee-button @click="prev">上一步</lee-button>
```
```html
<script>
    export default {
        data() {
              return {
                active:0
              }
          },
          methods:{
            next(){
              this.active+=1
              if(this.active>3){
                this.active=0
              }
            },
            prev(){
              this.active-=1
              if(this.active<0){
                this.active=0
              }
            }
          }
    }
</script>
```
</lee-code>
</div>

### 竖向步骤条：

<div class="leeblock">
    <div class="leesource">
          <lee-steps :active="active2" color="#46bd87" direction="vertical">
              <lee-step title="多样">组件多样化，让你减少开发UI烦恼</lee-step>
              <lee-step title="基于Vue">基于Vue，生态圈更强大。</lee-step>
              <lee-step title="效率">简单配置，立即生效，缩短开发周期。</lee-step>
          </lee-steps>
          <div style="margin-top: 15px">
              <lee-button @click="next2">下一步</lee-button>
              <lee-button @click="prev2">上一步</lee-button>
          </div>
    </div>
<lee-code>
    
```html
<lee-steps :active="active" color="#46bd87" direction="vertical">
   <lee-step title="多样">组件多样化，让你减少开发UI烦恼</lee-step>
    <lee-step title="基于Vue">基于Vue，生态圈更强大。</lee-step>
    <lee-step title="效率">简单配置，立即生效，缩短开发周期。</lee-step>
</lee-steps>
<lee-button @click="next">下一步</lee-button>
<lee-button @click="prev">上一步</lee-button>
```
```html
<script>
    export default {
        data() {
              return {
                active:0
              }
          },
          methods:{
            next(){
              this.active+=1
              if(this.active>3){
                this.active=0
              }
            },
            prev(){
              this.active-=1
              if(this.active<0){
                this.active=0
              }
            }
          }
    }
</script>
```
</lee-code>
</div>

### Steps 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
active|当前状态序号|0,1,2...|--|0
color|当前状态颜色|String|--|--
direction|步骤条方向|String|horizontal,vertical|horizontal
fill|当前状态颜色用填充方式|Boolean|true,false|false
center|居中展示|Boolean|true,false|false
finish|结束步骤的状态|String|success,finish|finish
### Step 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
title|步骤标题|String|--|--
<script>
    export default {
        data() {
              return {
                active1:0,
                active2:0,
                active3:0,
              }
          },
          methods:{
            next1(){
              this.active1+=1
              if(this.active1>3){
                this.active1=0
              }
            },
            prev1(){
              this.active1-=1
              if(this.active1<0){
                this.active1=0
              }
            },
            next2(){
              this.active2+=1
              if(this.active2>3){
                this.active2=0
              }
            },
            prev2(){
              this.active2-=1
              if(this.active2<0){
                this.active2=0
              }
            },
            next3(){
              this.active3+=1
              if(this.active3>3){
                this.active3=0
              }
            },
            prev3(){
              this.active3-=1
              if(this.active3<0){
                this.active3=0
              }
            }
          }
    }
</script>
<style scoped>

</style>