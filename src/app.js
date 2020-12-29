import Vue from 'vue'
import store from './store/index'

import './app.scss'

// Vue.config.productionTip = false
// 全局获取图片路径的方法，开发环境用本地资源，生产用cdn
Vue.prototype.$getSrc = src => { return require(`./assets/images/${src}`).default }
const App = new Vue({
  store,
  onShow(options) {
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App
