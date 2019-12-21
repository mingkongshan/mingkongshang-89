import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入包
import 'element-ui/lib/theme-chalk/index.css' // 引入elementUI样式
import './styles/index.less' // 全局注册
import axios from 'axios' // 引入初始化样式
Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/captchas/:mobile'// 复制黑马头条的默认地址
Vue.prototype.$axios = axios // 赋值给全局对象
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
