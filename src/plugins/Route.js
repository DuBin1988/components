export default {
  methods: {
    $route (comp) {
      this.$dispatch('route', comp)
    }
  }
}
