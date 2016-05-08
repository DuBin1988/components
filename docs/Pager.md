# Pager

翻页组件，支持前后翻页。

## 用法

``` html
<pager :model="model" :page-size="20">
</pager>
```
* model: 翻页组件需要从model里获取数据总个数，由model的count属性指明。
* pageSize: 每页数据个数，默认为20

## 属性

- totalPage: 总页数
- pageIndex: 当前页号

## 事件

- page-changed: 页号发生了改变，参数为最新页号。
