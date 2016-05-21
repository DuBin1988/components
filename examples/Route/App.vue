<template>
  <div>
    <button @click="$refs.route.comp = {name: 'bar'}">跳转</button>
    <route :comp="{name: 'foo'}" v-ref:route></route>
  </div>
</template>

<script>
import Route from '../../src/components/Route'

export default {
  components: { Route }
}
</script>
