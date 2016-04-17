<template>
  <div v-for="data in model">
    <child>
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
