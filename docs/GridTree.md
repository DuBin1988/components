# GridTree

以表格方式显示树状数据。

## 用法

用model参数传递数据，partial='head'指明表头，partial='body'指明表体，默认partial指明树节点显示内容，加载子节点的服务路径通过url参数传递给组件。

```html
<grid-tree :model='model' url='rs/sql/subproject.sql'>
  <template partial='head'>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </template>
  <template partial='body'>
    <td >{{row.age}}</td>
  </template>
  <span partial>{{row.name}}</span>
</grid-tree>
```
其中，row代表每条数据。

## 数据格式

传递给组件的每行数据均应满足树状数据格式要求。例如：
```
data () {
  return {
    model: [
      {name: '根节点', size: 1, children: [
        { name: '子节点', size: 0 }
      ]}
    ]
  }
}
```

* children：  
数组类型，每个节点的children属性指明子节点。
* size：  
整形，代表子节点个数。对异步数据，在没有加载所有子节点前，需要把子节点个数先加载过来，以便确定该节点是否叶子节点。

## 选择

GridTree支持选择功能，具体参考[Selector](Selector.md)描述。
