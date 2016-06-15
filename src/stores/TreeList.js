import Vue from 'vue'

export default class TreeList {
    // 把一批数据转换成树节点, 数据放到节点的data里
  static toTreeNode (rows, parent = null, level = 0) {
    return Array.from(rows, (row) => {
      let newRow = {
        data: row,      // 原来的数据转换到data里
        loaded: false,  // 是否已加载
        parent: parent, // 父节点
        level: level,   // 展开层级
        size: row.size, // 子的个数
        id: row.id      // id号
      }
      // 如果数据没有子节点，设置成空。否则，把数据的子节点取过来
      if (!row.children) {
        newRow.children = []
      } else {
        newRow.children = row.children
      }
      // 如果子节点展开状态未知，默认设置为false
      if (newRow.open === undefined) {
        Vue.set(newRow, 'open', false)
      }
      // 节点加载状态，包括：初始，正确，错误三种
      Vue.set(newRow, 'state', '初始')
      return newRow
    })
  }

  constructor (url) {
    this.url = url
    this.rows = []
    this.state = '初始'
    // 出现错误时的错误内容，没找到符合条件的数据当错误处理
    this.error = '请输入条件, 进行查询'
  }

  // 执行查询过程，加载数据汇总信息
  // condition - 查询组件产生的查询条件
  // model - 查询组件收集到的输入数据
  search (condition, model) {
    // 保存条件，以便刷新时可以直接调用
    this.condition = condition
    this.model = model

    let params = Object.assign({}, model, {
      condition: condition
    })

    // 发生请求时，不进行任何提醒
    return Vue.post(this.url, params, {resolveMsg: null, rejectMsg: null}).then(
      (response) => {
        if (response.data.length === 0) {
          this.state = '错误'
          this.error = '没有符合条件的记录'
          return
        }
        this.state = '正确'
        // 把查询到的数据转换成树节点
        this.rows = response.data
        this.rows = TreeList.toTreeNode(this.rows)
      }
    ).catch(
      () => {
        this.state = '错误'
        this.error = '提取数据出错，请重试'
      }
    )
  }

  // 重新进行查询
  refresh () {
    return this.search(this.condition, this.model)
  }
}
