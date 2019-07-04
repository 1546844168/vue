import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './../App.vue'

import User from './user'

Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '/', component: App,

        children: [
            User
        ]
    },

    // {path: '/foo/:id', component: Foo},
    // {path: '/boo/:id', component: Boo},
    {
        // 所有没有匹配到的路径
        path: '/**', redirect: '/'
    }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})
export default router
