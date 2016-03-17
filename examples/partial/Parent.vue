<template>
  <div v-for="data in model">
    <partial name="default">
      <span>默认值</span>
    </partial>
  </div>
</template>

<script>
export default {
  props: [ 'model' ]
}
</script>
