# Pager

翻页组件，支持前后翻页。

## 用法

``` html
<pager :count="count" :page-size="20">
</pager>
```
* count: 总共数据个数，当数据总数发生变化时，自动计算总页数。
* pageSize: 每页数据个数，默认为20

## 属性

- totalPage: 总页数
- pageIndex: 当前页号

## 事件

- page-changed: 页号发生了改变，参数为最新页号。
