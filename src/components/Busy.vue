<template>
  <div id='busy'>
    <slot name='busy' v-show='isBusy'></slot>
    <slot name='normal' v-show="!isBusy"></slot>
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
