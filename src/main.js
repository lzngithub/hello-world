import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import router from './router/index';// 导入路由到main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(less)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
