import Vue from 'vue'

export default class PagedList {
  // 用url及pageSize构造
  // url - 加载数据的url
  // pageSize - 每页数据个数
  // params - 除正常查询条件外，附加到后台sql中的参数，可以为空。格式为:{参数名:参数值}
  constructor (url, pageSize, params) {
    this.url = url
    this.pageSize = pageSize

    // 登记参数源码，查询前，执行参数源码，获得实际参数值
    if (params) {
      this.paramSource = params
    }
    // 查询时，提交后台的参数值
    this.params = {}

    // 符合条件的数据总数
    this.count = 0
    // 加载过来的数据
    this.rows = []
    // 状态，字符串型，包括：初始(默认)，查询，错误，正确
    this.state = '初始'
    // 出现错误时的错误内容，没找到符合条件的数据当错误处理
    this.error = '请输入条件, 进行查询'

    // 每次加载所需要的条件
    this.condition = null
    this.model = null
  }

  // 执行查询过程，加载数据汇总信息
  // condition - 查询组件产生的查询条件
  // model - 查询组件收集到的输入数据
  search (condition, model) {
    // 保存条件，以便加载某页时可以直接调用
    this.condition = condition
    this.model = model

    this.state = '查询'
    this.procParams()

    // 发生请求时，不进行任何提醒
    Vue.post(`${this.url}/n`, this.params, {resolveMsg: null, rejectMsg: null}).then(
      (response) => {
        if (response.data.n === 0) {
          this.state = '错误'
          this.error = '没有符合条件的记录'
          return
        }
        this.state = '正确'
        this.count = response.data.n
        // 加载第一页数据
        this.loadPage(1)
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
    this.search(this.condition, this.model)
  }

  // 加载一页数据
  loadPage (pageNo) {
    this.state = '查询'

    Vue.post(
      `${this.url}?pageNo=${pageNo}&pageSize=${this.pageSize}`,
       this.params,
      {resolveMsg: null, rejectMsg: null}
    ).then(
      (response) => {
        this.state = '正确'
        this.rows = Array.from(response.data, (row) => this.from(row))
      }
    ).catch(
      () => {
        this.state = '错误'
        this.error = '提取数据出错，请重试'
      }
    )
  }

  // 处理查询参数，把condition附加到参数列表中
  procParams () {
    this.params.condition = this.condition
    if (!this.paramSource) {
      return
    }
    // 对附加参数进行计算
    for (let name in this.paramSource) {
      /*eslint-disable */
      this.params[name] = eval(this.paramSource[name])
      /*eslint-enable */
    }
  }

  // 从后台删除数据，删除后，刷新界面
  remove (url, data) {
    Vue.delete(url, data).then(
      () => {
        this.refresh()
      }
    )
  }
}
