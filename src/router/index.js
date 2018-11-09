import Vue from 'vue'
import Router from 'vue-router'
import ListCards from '@/components/ListCards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListCards',
      component: ListCards
    }
  ]
})
