# Change Log
所有关于本产品的变化都在该文档里。

## [Unreleased]
### Removed
- State插件移除。

### Fixed
- 解决了TreeMixin在提前给定数据时，不能操作的bug。

## V1.1.1 - 2016-05-28 @何宁社
### Fixed
- Tabset改flex布局
- Modal的dev加auto class
- httpstore的vue.delete函数与vue重名了，改成remove了
- 纠正了TreeNode的bug，把TreeNode的实际数据放到data中了。
- Route的$route函数与vue重名，改成$goto了。
- vue的预编译的bug处理。

## 1.1.0 - 2016-05-22
### Added
- Route: 路由组件，组件可以在路由组件内进行路由。
- Dynamic: 动态组件，提供动态标签页，组件可以在动态标签页之间进行路由。
