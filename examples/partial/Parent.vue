<template>
  <div v-for="row in model">
    <child :model='row'>
      <partial name="b" partial='a'>
      </partial>
    </child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  props: [ 'model' ],
  components: { Child }
}
</script>
