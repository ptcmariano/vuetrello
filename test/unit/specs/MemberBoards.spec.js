import Vue from 'vue'
import MemberBoards from '@/components/MemberBoards'

describe('MemberBoards.vue', () => {
  it('should render boads by user', () => {
    const Constructor = Vue.extend(MemberBoards)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('blockquote > p').textContent)
      .to.equal('Boards: Carregar boards')
  })
  it('should have data with idMember', () => {
    //
  })
})
