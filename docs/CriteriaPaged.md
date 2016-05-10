# CriteriaPaged
带有查询条件的分页列表

## 用法
``` html
<criteria-paged :model={model} pager='true'>
  <criteria partial="criteria" @condition-changed='search'>
  </criteria>
  <list partial="list">
  </list>
</criteria-paged>
```
`<criteria-paged>`为组件对应的html标签。

- model：数据提供者
- partial='criteria'：指明查询条件组件
- partial='list'：指明列表显示组件
- @condition-changed='search'：指明条件变化时，调用组件查询方法
- pager：是否显示翻页组件，默认为true

### model
组件的model参数，必须满足下面的接口要求:

- search (condition, model)：根据输入的查询条件及用户输入内容进行查询。
- state：数据加载状态，包括：初始、正确、错误三种。
- error：数据错误时的内容。

如果包括分页部分，model还要满足下面的接口要求：

- loadPage(pageNo)：加载一页数据
- count：总数据个数

一般情况下，列表model用__PagedList__，树model用__TreeList__。

### 指定查询条件组件

使用partial="criteria"指定查询条件组件，在查询条件组件上配置`@condition-changed='search'`，这样当查询条件产生后，会自动调用组件的search方法进行查询。查询条件组件需满足下面的接口要求:

- 当查询条件产生后，需对外提供condition-changed事件。一般情况下，用criteria组件产生查询条件，使用方式见[Criteria](Criteria.md)。

### 指定列表显示区

使用partial="list"指定列表显示组件。常用列表显示组件有List，DataGrid。

## 方法

- search(args)：根据查询条件组件产生的查询条件进行查询，将调用model的查询过程，model必须实现search方法。
