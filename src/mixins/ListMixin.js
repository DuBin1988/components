export default {
  methods: {
    // 从后台删除数据，删除后，刷新界面
    remove (url, data) {
      this.$delete(url, data).then(
        () => {
          this.model.refresh()
        }
      )
    }
  }
}
