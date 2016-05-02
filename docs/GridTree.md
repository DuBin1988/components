# GridTree

以表格方式显示树状数据。

## 用法

用model参数传递数据，partial='head'指明表头，partial='body'指明表体，默认partial指明树节点部分显示内容。

```html
<grid-tree :model='model'>
  <template partial='head'>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </template>
  <template partial='body'>
    <td >{{data.age}}</td>
  </template>
  <span partial>{{data.name}}</span>
</grid-tree>
```

## 数据格式

传递给组件的数据应满足树状数据格式要求。
```
data () {
  return {
    model: {
      name: '根节点',
      size: 1,
      children: [{
        name: '子节点',
        size: 0
      }]      
    }
  }
}
```

- children: 每个节点的children属性指明子节点。
- size: 整形，代表子节点个数。对异步数据，在没有加载所有子节点前，需要把子节点个数先加载过来，以便确定该节点是否叶子节点。

## 选择

GridTree支持选择功能，具体参考[selector](selector.md)描述。
