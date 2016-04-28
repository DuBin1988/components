# PagedListWithCriteria
带有查询条件的分页列表

## 用法
### 引入组件
``` html
<paged-list-with-criteria :model={model}>
  <criteria partial="criteria">
  </criteria>
  <list partial="list">
  </list>
</paged-list-with-criteria>
```
`<paged-list-with-criteria>`为组件对应的html标签, 组件的model参数，必须是一个PagedList。

### 指定查询条件组件
使用partial="criteria"指定查询条件组件，查询条件组件需满足下面的接口要求:
- 当查询条件产生后，需对外提供condition-changed事件
一般情况下，用criteria组件产生查询条件，使用方式见说明。

### 指定列表显示区
使用partial="list"指定列表显示组件。常用列表显示组件有List，DataGrid。
