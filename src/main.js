import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import router from './router/index';// 导入路由到main.js
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
