import Vue from 'vue'
import Router from 'vue-router'
import ListCards from '@/components/ListCards'
import MemberBoards from '@/components/MemberBoards'
import HomePage from '@/components/HomePage'
import AuthPage from '@/components/AuthPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/auth',
      name: 'AuthPage',
      component: AuthPage
    },
    {
      path: '/token=(.*)',
      name: 'AuthPageCallback',
      component: AuthPage
    },
    {
      path: '/memberboards',
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
