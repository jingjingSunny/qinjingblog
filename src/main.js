import vue from 'vue'
import Router from 'vue-router'
import router from './router/router'
import axios from 'axios'
import VuevideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
// axios的监听拦截器(针对于服务端)
// import ReqApi from './utils/axios.js'
// utils变量配置
import { MENUARR,ERRORMESS,TITLE } from './utils/utils.js'
// 公共js
import getDate from './utils/common.js'
// nav头部导航组件
import Nav from './components/nav'
// 引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入重置element的样式
import "./assets/css/reset.scss";
import App from './App.vue'
vue.use(ElementUI)
vue.use(VuevideoPlayer);
vue.config.productionTip = false
vue.prototype.$axios = axios
// utils TITLE--> 标题
vue.prototype.$TITLE = TITLE
// utils ERRORMESS--> 接口非正常请求返回信息
vue.prototype.$ERRORMESS = ERRORMESS
// utils MENUARR--> nav导航昵称
vue.prototype.$MENUARR = MENUARR
// Vue.prototype.$reqApi = ReqApi
vue.prototype.$common = getDate
// Router
vue.prototype.$Router = Router

// 注册nav 组件
vue.component('com-nav', Nav)
new vue({
  router,
  render: h => h(App),
}).$mount('#app')
