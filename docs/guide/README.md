# 安装
### npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm i leevueplugin
```
### 使用
```js
import Vue from 'vue';
import {LeePasswordInput,LeeInputNumber,LeeButton,LeePay,LeeBadge,LeeAlert,LeePagination}
 from 'leevueplugin'
import App from './App.vue';
Vue.use(LeePasswordInput)
Vue.use(LeeInputNumber)
Vue.use(LeeButton)
Vue.use(LeePay)
Vue.use(LeeBadge)
Vue.use(LeeAlert)
Vue.use(LeePagination)
new Vue({
  el: '#app',
  render: h => h(App)
});

```