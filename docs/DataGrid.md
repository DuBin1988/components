# DataGrid

以表格方式显示一批数据

## 用法

把数据通过model参数传递给DataGrid组件，表头内容通过名称为head的partial传递给DataGrid组件，每行显示的内容通过名称为body的partial传递给DataGrid组件。

```html
<data-grid :model='model'>
  <template partial='head'>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
    </tr>
  </template>
  <template partial='body'>
    <td>{{row.name}}</td>
    <td>{{row.age}}</td>
  </template>
</data-grid>
```

注意，表头可以包含多行，所有包含的行通过template合并到一起。每行显示的内容包括多列，这些列也通过template合并在一起。

## model参数

传递给组件的model必须满足下述要求。

- rows: 数组类型，存放所有数据行。
- refresh: 函数，重新进行数据加载。

通常使用PagedList即可，PagedList使用请参考[PageList](PagedList.md)。

## 行数据显示

每行数据用row获得，如上例中的row.name显示每行数据的name属性。

## 方法

- remove(row): 删除某行数据，可以在body部分调用此方法删除一行数据。

## 选择

DataGrid支持选择功能，具体参考[Selector](Selector.md)描述。
