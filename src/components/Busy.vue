<template>
  <div id='busy' class="full">
    <div v-show='isBusy'>
      <slot name='busy'></slot>
    </div>
    <div v-show="!isBusy" class="full">
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
