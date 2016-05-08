# TreeMixin

对树组件提供基础支持，Tree及GridTree均用到了TreeMixin。

## 用法

在需要树状操作的组件中，加入TreeMixin
```
export default {
  mixins: [TreeMixin]
}
```

## 方法

* toggle(node)：切换树节点的展开状态。
* isFolder(node)：看节点是否有子。
* delete(url, node)：调用url中的服务删除节点，删除后，自动刷新界面。
