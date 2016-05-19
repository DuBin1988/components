<template>
  <div>
    <route v-ref:route></route>
  </div>
</template>

<script>
import Route from '../../src/components/Route'
import Foo from './Foo'
import Bar from './Bar'

export default {
  ready () {
    this.$refs.route.route('Foo', 'foo', {})
  },
  components: { Route, Foo, Bar }
}
</script>
