export default {
  methods: {
    $route (name, comp, props = {}) {
      this.$dispatch('route', name, comp, props)
    },
    $back (comp) {
      this.$dispatch('back')
    }
  }
}
