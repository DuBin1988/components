import SelectStore from '../stores/SelectStore'

export default {
  data () {
    return {
      selectStore: new SelectStore()
    }
  },
  props: {
    selectMode: { // 选择模式，包括none、single、multi三种
      type: String,
      default: 'single'
    }
  },
  computed: {
    selected () {
      let selected = this.selectStore.selected
      return selected
    }
  },
  methods: {
    select (data) {
      if (this.selectMode !== 'none' && this.selectStore.selected !== data) {
        let oldVal = this.selectStore.selected
        this.selectStore.select(data)
        // 发送选择项变化消息
        this.$dispatch('select-changed', {
          val: this.selectStore.selected,
          oldVal: oldVal
        })
      }
    },
    isSelected (data) {
      return this.selectMode !== 'none' && data === this.selected
    }
  },
  beforeCompile () {
    // 从祖先中继承selectStore, 如果没有，自己创建
    let self = this
    while (self.$parent && !self.$parent.selectStore) {
      self = self.$parent
    }
    if (self.$parent && self.$parent.selectStore) {
      this.selectStore = self.$parent.selectStore
    }
  }
}
