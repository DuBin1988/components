export default class SelectStore {
  constructor () {
    this.selected = null
  }

  select (data) {
    this.selected = data
  }
}
