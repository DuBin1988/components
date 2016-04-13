
export default class ObjPage {

  constructor (n) {
    this.pageIndex = 1
    this.rows = []
    this.visible = false
    this.totalPage = 0
  }

  static pageSize () {
    return 20
  }

  refresh (rows) {
    this.pageIndex = 1
    // this.data = Object.assign({}, this.data, data)
    this.rows.splice(0, this.rows.length)
    let that = this
    rows.map(function (row) {
      that.rows.push(row)
    })
    this.visible = (this.totalPage > 0)
  }

  gotoPage (rows) {
    // this.data = Object.assign({}, this.data, data)
    this.rows.splice(0, this.rows.length)
    let that = this
    rows.map(function (row) {
      that.rows.push(row)
    })
    this.visible = (this.totalPage > 0)
  }
}
