# List

以列表方式显示一批数据。

## 用法

把数据通过model参数传递给list组件，每行显示的内容通过partial传递给list组件。
```html
<template>
  <div>
    <list :model='model'>
      <div partial>{{row.name}}</div>
    </list>
  </div>
</template>
```
partail中row代表每一行数据。

## model参数

传递给组件的model必须满足下述要求。

- rows: 数组类型，存放所有数据行。
- refresh: 函数，重新进行数据加载。

通常使用PagedList即可，PagedList使用请参考[PageList](PagedList.md)。

## 行数据显示

每行数据用row获得，如上例中的row.name显示每行数据的name属性。

## 方法

- remove(url, row): 删除某行数据，可以在body部分调用此方法删除一行数据。

## 选择

list支持选择功能，具体参考[Selector](Selector.md)描述。
