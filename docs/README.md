---
home: true
heroImage: /logo.png
actionText: 马上开始 →
actionLink: /guide/
features:
- title: 多样
  details: 组件多样化，让你减少开发UI烦恼。
- title: 基于Vue
  details: 基于Vue，生态圈更强大。
- title: 效率
  details: 简单配置，立即生效，缩短开发周期。
footer: MIT Licensed | Copyright © 2018-present leeao82.com
---

### 快步上手

```js
# 安装
npm i leevueplugin

# 使用
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
