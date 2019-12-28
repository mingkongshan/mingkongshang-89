import Vue from 'vue'
import App from './App.vue'
import './permission'
import router from './router'
import ElementUI from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css' // 引入elementUI样式
import './styles/index.less' // 全局注册
import axios from './utils/request'
import Component from './components' // 引入初始化样式
Vue.config.productionTip = false
Vue.use(ElementUI)// 引入组件对象
Vue.use(Component) // 注册全局组件对象

Vue.prototype.$axios = axios // 赋值给全局对象

Vue.use(ElementUI) // 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
