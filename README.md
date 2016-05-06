# components

提供组件制作基础及部分通用组件。

## 目录结构

* components: 提供的各种组件
* mixins: 方便调用的混合
* models: 各类数据模型
* plugins: 系统提供的插件
* stores: 特殊的数据存储
* util: 各类工具
* vuex: 对vuex的支持类

## 内容

* [partial](docs/partial.md) - 对vue slot的不足进行弥补，slot不支持子组件scope，partial支持子组件scope。
* [selector](docs/selector.md) - 提供选择特性，list、tree等组件需要。
* [list](docs/list.md) - 以列表方式显示数据。
* [tree](docs/tree.md) - 以树方式显示数据。
* [all](docs/all.md) - 完成vue所有初始化工作。

## 测试

所有组件均可单独测试，每个测试例子按如下目录结构组织

examples
>list
>>index.html  
>>main.js  
>>App.vue  
>>辅助组件.vue

通过list.html进行访问

## 测试例子

* AppBase - 对AppBase进行测试，发送错误请求，弹出错误对话框。
* Busy - 测试Busy组件。
* Criteria - 对查询条件组件进行测试，点击查询，显示产生的条件。
* DataForm - 对表单组件进行完整测试，可以把数据提交后台，提交后台的数据可以通过左边的DataGrid进行查询，查询出来的数据，当选中时，可以删除。
* MessageBox - 对MessageBox进行测试，按下确定，或者取消按钮后，在控制台进行显示。
* partial - 对partial进行测试
* list - 对列表进行测试，产生10000条数据，测试列表性能
* tree - 对树进行测试
* listTree - 测试组件的复合能力，列表中每个节点是一个树
