export default class TreeNode {
  constructor (data, path, parent) {
    this.loaded = false
    this.data = data
    this.path = path
    this.parent = parent
    this.children = []
    this.size = data.size
  }
}
