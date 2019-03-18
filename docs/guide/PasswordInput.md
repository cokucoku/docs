# PasswordInput 密码输入框
### 示例：
<p></p>
<lee-button type="primary"  @click="show" v-if="!kg">打开密码输入框</lee-button>
<div style="position:relative;width:40%;padding-bottom: 80%" v-if="kg">
<!-- <lee-password-input @change="yourpassword" :visible.async="kg" :pass="password"></lee-password-input> -->
<lee-password-input @change="yourpassword" :visible="kg" :pass="password" @close="close"></lee-password-input>
</div>

```html
<lee-password-input :visible="kg" :pass="password" 
@close="close" @change="yourpassword" ></lee-password-input>
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
        },
        close(value){
            this.kg=value
        }
    }
}
</script>
```
### 属性

参数|说明|类型|可选值|默认值
:------|:------|:------|:------|:------
password|正确密码|String|--|123456
visible|显示隐藏|Boolean|ture,false|false

### 事件

事件名称|说明|回调参数
:------|:------|:------
change|输入完毕后提示，1密码正确，-1密码错误|value
close|关闭后返回false值|value

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
        },
        close(value){
            this.kg=value
        }
    }
}
</script>