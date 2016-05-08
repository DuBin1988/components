# TreeNode

从后台获取树节点中的数据

## 用法
```
new TreeNode(data, '/rs/sql/subproject.sql', parent)
```

## 构造函数参数说明

* data: 构造树节点的数据。
* url: 加载子节点时的url。
* parent: 对应的父节点，可以为空。

## 方法

* loadChild(force)：返回一个Promise，按构造时的url，加载子节点。
  * force：true - 无论是否加载过子节点，都进行加载。false(默认) - 如果加载过，则不进行加载。
