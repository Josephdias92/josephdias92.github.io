import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/resume' },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    }
  ]
})
