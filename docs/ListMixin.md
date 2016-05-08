# ListMixin

对列表提供基础支持。

## 用法

在需要列表操作的组件中，加入ListMixin
```
export default {
  mixins: [ListMixin]
}
```

## 方法

* remove(url, row)：从后台删除数据，删除后刷新界面。
