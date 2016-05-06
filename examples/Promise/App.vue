<template>
  <div id='app'>
    <app-base>
      <div partial>
        <button @click='$parent.$parent.$parent.test'>测试</busy>
      </div>
    </app-base>
  </div>
</template>

<script>
import co from 'co'
import all from '../../src/all'
import Vue from 'vue'
import AppBase from '../../src/components/AppBase'

all()

let asyncPrint = function * (value, ms) {
  // let x = yield Vue.post('rs/sql/project.sql/n', {})
  let x = yield Vue.showMessage('测试', ['confirm', 'cancel'])
  if (x === 'confirm') {
    let y = yield Vue.post('rs/sql/project.sql/n', {})
    console.log(y.data.n)
  } else {
    console.log('cancel')
  }
}

export default {
  methods: {
    test () {
      let g = asyncPrint('dd', 1000)
      co(g).then(() => {
        console.log('edn')
      })
    }
  },
  components: { AppBase }
}
</script>
