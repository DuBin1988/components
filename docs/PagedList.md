# PagedList

与后台交互的，可分页的列表model。

## 用法
```
new PagedList(url, pageSize, options)
```
* url: 从后台获取数据的url
* pageSize: 每页数据个数
* params: 除正常查询条件外，附加到后台sql中的参数，可以为空。格式为：{参数名: 参数值}，参数值是字符串形式的表达式。

## 属性

- count: 符合条件的数据总数
- rows: 加载过来的数据
- state: 状态，字符串型，包括：初始(默认)，错误，正确
- error：出现错误时的内容

## 方法

- search (condition, model): 执行后台查询过程，先查询汇总信息，然后加载第一页数据。参数说明
  * condition: 由查询组件等产生的查询条件字符串。
  * model：由用户输入的查询内容。
- loadPage (pageNo): 加载一页数据，调用该方法前，请确保已调用search函数。参数说明
  * pageNo: 页号
- remove (url, data)：删除后台数据，删除后，刷新界面
  * url：删除数据的url
  * data：要删除的数据
