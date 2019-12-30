// 对axion进行一个封装
import axios from 'axios'
import router from 'vue-router' // 路由实例对象引入
import { Message } from 'element-ui'
// 请求拦截器
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值黑马头条的默认地址

axios.interceptors.request.use(function (config) {
  // 执行请求ok
  // config 是axios的所有配置
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}`// 统一注入token
  return config // 返回config 就会作为新的请求选项
}, function () {
  // 执行请求失败
})
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功执行
  return response.data ? response.data : {} // 解决当date不存在时, then中读取数据报错问题
}, function (error) {
  console.log(error)
  // 回调函数 所有的关联 都会进入到第二回调函数
  // 失败时执行 状态码 不是200 或者201
  // 获取状态码 => 根据状态码,进行相应的提示或者操作
  let status = error.response.status // 获取状态码 根据状态码进行提示
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '手机号或者验证码错误'
      break
    case 403:
      // resfehtoken 过期 强制跳转到登录页 resfentoken => 是用米换取token的
      // this.$router => 路由实例对象
      router.push('/login')
      break
    case 401:
      // token过期
      router.push('/login')
      break
    case 507:
      message = '服务器数据异常'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  // 状态码 提示
  //  想让错误拦截器的内容继续进入到以后的catch中 而不进入then
  return Promise.reject(error)
})
export default axios
