<template>
  <div>
    <div v-show='isBusy'>
      <slot name='busy'></slot>
    </div>
    <div v-show="!isBusy">
      <slot name='normal'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBusy: {
      type: Boolean,
      default: false
    }
  }
}
</script>
