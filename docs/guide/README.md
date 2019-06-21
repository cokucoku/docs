# 安装
### npm 安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm i leevueplugin
```
### 使用
```js
import Vue from 'vue';
import {LeeAlert,LeeBadge,LeeButton,LeeCollapse,LeeCollapseItem,LeeInputNumber,LeeNotification,LeeNotificationItem,LeePagination,LeePasswordInput,LeePay,LeeRadio,LeeRadioGroup,LeeSwitch,LeeTimeline,LeeTimelineItem}
 from 'leevueplugin'
import App from './App.vue';
Vue.use(LeeAlert)
Vue.use(LeeBadge)
Vue.use(LeeButton)
Vue.use(LeeCollapse)
Vue.use(LeeCollapseItem)
Vue.use(LeeInputNumber)
Vue.use(LeeNotification)
Vue.use(LeeNotificationItem)
Vue.use(LeePagination)
Vue.use(LeePasswordInput)
Vue.use(LeePay)
Vue.use(LeeRadio)
Vue.use(LeeRadioGroup)
Vue.use(LeeSwitch)
Vue.use(LeeTimeline)
Vue.use(LeeTimelineItem)
new Vue({
  el: '#app',
  render: h => h(App)
});

```