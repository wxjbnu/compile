import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const router =  new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { // Main
      path:   '/',
      name:   'main',
      component:  require('../views/main.vue')
    },
    { // welcome
      path:   '/welcome',
      name:   'welcome',
      component:  require('../views/welcome.vue')
    },
    { // 方案页面
      path:   '/scheme',
      name:   'scheme',
      component:  require('../views/scheme.vue')
    },
    // { // List
    //   path:   '/list',
    //   name:   'list',
    //   component:  require('../views/list.vue')
    // },
    // { // List
      // path:   '/hot',
      // component:  require('../views/hot.vue'),
      // children: [
      //   {
      //     // 当 /user/:id/profile 匹配成功，
      //     // UserProfile 会被渲染在 User 的 <router-view> 中
      //     path: 'hot',
      //     component: UserProfile
      //   },
      //   {
      //     // 当 /user/:id/posts 匹配成功
      //     // UserPosts 会被渲染在 User 的 <router-view> 中
      //     path: 'posts',
      //     component: UserPosts
      //   }
      // ]
    // },
    // {
    //   path: '/page/:id',
    //   name: 'page',
    //   component: require('../views/page.vue')
    // },

  ],
});
//

export default router;
