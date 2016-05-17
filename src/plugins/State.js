export default {
  computed: {
    $state () {
      // 一直向上找state
      let parent = this
      while (parent && !parent.state) {
        parent = parent.$parent
      }
      if (parent && parent.state) {
        return parent.state
      }
      return null
    }
  }
}
