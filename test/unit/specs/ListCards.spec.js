import Vue from 'vue'
import ListCards from '@/components/ListCards'

describe('ListCards.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ListCards)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('blockquote > p').textContent)
      .to.equal('Cards: Carregar cards')
  })
})
