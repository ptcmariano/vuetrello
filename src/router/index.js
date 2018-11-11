import Vue from 'vue'
import Router from 'vue-router'
import ListCards from '@/components/ListCards'
import MemberBoards from '@/components/MemberBoards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemberBoards',
      component: MemberBoards
    },
    {
      path: '/listcards',
      name: 'ListCards',
      component: ListCards
    }
  ]
})
