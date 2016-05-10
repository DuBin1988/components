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

## 删除数据

如果要删除数据，必须使用PagedList作为模型，在删除数据的按钮上，调用model的remove方法，如下：
```
model.remove(url, row)
```
将url替换成要删除数据的地址即可。

## 选择

list支持选择功能，具体参考[Selector](Selector.md)描述。
