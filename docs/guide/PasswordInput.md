# PasswordInput 密码输入框
### 示例：
<lee-password-input v-model="kg" @change="yourpassword" :pass="password"></lee-password-input>
<div class="leeblock">
    <div class="leesource">
        <lee-button type="primary"  @click="show" v-if="!kg">打开密码输入框</lee-button>
<div style="position:relative;width:40%;padding-bottom: 80%" v-if="kg">

</div>
    </div>
<lee-code>

```html
<lee-password-input v-model="kg" @change="yourpassword" :pass="password"></lee-password-input>
```
```js
<script>
export default {
    data() {
        return {
            kg: false, //开关显示
            password: '123456', //设置正确的密码
        };
    },
    methods: {
        yourpassword(value) {
            console.log(value) //value为1是密码正确 -1为密码错误
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
password|正确密码|String|--|123456
v-model|绑定是否显示隐藏|Boolean|ture,false|false

### 事件

事件名称|说明|回调参数
:------|:------|:------
change|输入完毕后提示，1密码正确，-1密码错误|value


<script>
export default {
    data() {
        return {
            kg: false, //开关显示
            password: '123456', //设置正确的密码
        };
    },
    methods: {
        yourpassword(value) {
            console.log(value) //value为1是密码正确 -1为密码错误
        },
        show(){
            this.kg=true
        }
    }
}
</script>