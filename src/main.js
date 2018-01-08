// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

// import Home from './Home.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'
import Category from './Category.vue'
import BookDetail from "./books/detail.vue"
import Main from "./Main.vue"

const Home = resolve => require(['./Home.vue'], resolve)


Vue.use(VueRouter)
Vue.use(VueResource)

// 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: "active",
    routes: [
        {
          name:'Main',
          path: '',
          component:Main,
          children:[
            {name:'Home',path: 'home', component: Home},
            {name:'ShoppingCart',path: 'shopping-cart', component: Cart},
            {name:'Me',path: 'me', component: Me},
            {name:'Categories',path: 'categories', component: Category},
          ]
        },
        {name:'BookDetail',path: '/books/:id', component: BookDetail},
    ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
