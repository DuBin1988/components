# DataGrid

以表格方式显示一批数据

## 用法

把数据通过model参数传递给DataGrid组件，表头内容通过名称为head的partial传递给DataGrid组件，每行显示的内容通过名称为body的partial传递给DataGrid组件。

    <data-grid :model='data'>
      <template partial='head'>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </template>
      <template partial='body'>
        <td>{{data.name}}</td>
        <td>{{data.age}}</td>
      </template>
    </data-grid>

注意，表头可以包含多行，所有包含的行通过template合并到一起。每行显示的内容包括多列，这些列也通过template合并在一起。

## 选择

DataGrid支持选择功能，具体参考[selector](selector.md)描述。
