import Vue from 'vue'
// 路由
import Router from 'vue-router'
Vue.use(Router)
// 组件
import Home from '../page/home'
import Articel from '../page/article'
import WorkShow from '../page/workshow'
export default new Router({
    mode: 'history',
    routes: [
        {
            name: "首页",
            path: "/",
            component: Home
        },
        {
            name: "文章",
            path: "/article",
            component: Articel
        },
        {
            name: "作品集",
            path: "/workshow",
            flag: "workshow",
            component: WorkShow
        },
        // {
        //     name: "关于",
        //     path: "/about",
        //     flag: "about",
        //     component: About
        // }
    ]
})
