// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from '@/router/index'
import App from './App'

import { ToastPlugin} from 'vux'
Vue.use(ToastPlugin)

Vue.prototype.toast = function (text, type = 'text', position = 'middle') {
  this.$vux.toast.show({
    text: text,
    position: position,
    type: type,
    width: 'auto'
  })
}

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
