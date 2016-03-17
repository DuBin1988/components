import $ from 'jquery'

import Vue from 'vue'
import List from 'src/components/List'
import all from 'src/all'

all()

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      data: { model: [{name: 'a'}] },
      template: '<div><list :model="model"><span partial>{{data.name}}</span></list></div>',
      components: { List }
    }).$mount()
    expect($(vm.$el).html()).toContain('a')
  })
})

// also see example testing a component with mocks at
// https://github.com/vuejs/vue-loader-example/blob/master/test/unit/a.spec.js#L24-L49
