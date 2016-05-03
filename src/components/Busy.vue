<template>
  <div>
    <p v-if="isBusy">正在查询，请耐心等待！</p>
    <div v-show="!isBusy">
      <partial name='default'></partial>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBusy: Boolean,
    default: false
  }
}
</script>
