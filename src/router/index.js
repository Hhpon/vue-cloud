import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index/Index.vue'
import Scroll from '@/components/Scroll/Scroll.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }
  ]
})
