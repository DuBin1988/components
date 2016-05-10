# TreeList

为树状组件提供数据支持。

## 用法
```
new TreeList(url)
```
查询时，采用给定url进行。

## 属性

- rows：加载到的数据
- state: 状态，字符串型，包括：初始(默认)，错误，正确
- error：出现错误时的内容

## 方法

- search (condition, model): 执行后台查询过程。参数说明
  * condition: 由查询组件等产生的查询条件字符串。
  * model：由用户输入的查询内容。
- static toTreeNode (row, parent = null, level = 0)：把一条数据转换成树节点，树节点属性有：
  * loaded: false,  // 是否已加载
  * parent: null,   // 父节点
  * level: 0,       // 树节点展开层级
  * children: []    // 子节点
  * open：false     // 是否已展开，可追踪属性
  * state: '初始'   // 节点加载状态，包括：初始，正确，错误三种，可追踪
