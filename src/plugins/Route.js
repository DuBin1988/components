export default {
  methods: {
    $route (name, props = {}, self = true) {
      this.$dispatch('route', name, props, self)
    },
    $back () {
      this.$dispatch('back')
    }
  }
}
