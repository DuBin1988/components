<template>
  <div>
    <partial name='default'></partial>
  </div>
</template>

<script>
export default {
  props: ['model'],
  methods: {
    post (url) {
      this.$post(url, this.model)
    }
  }
}
</script>
