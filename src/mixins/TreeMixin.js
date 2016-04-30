export default {
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder () {
      return this.model.size > 0
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.open = !this.open
        // 还没有加载子，调用model的加载子的过程
        if (this.open && this.model.children.length === 0) {
          this.model.loadChild()
        }
      }
    },
    delete () {
      this.model.delete()
    }
  }
}
