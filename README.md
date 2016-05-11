# vue-client

提供组件制作基础及部分通用组件。

## 目录结构

* components: 提供的各种组件
* mixins: 方便调用的混合
* plugins: 系统提供的插件
* stores: 特殊的数据存储
* util: 各类工具

## all

* [all](docs/all.md)：完成vue所有初始化工作。

## 组件

* [AppBase](docs/AppBase.md)：提供应用基础，包括对话框，发送请求时提示正在工作等。
* [Busy](docs/Busy.md)：显示正在工作组件。
* [HttpBusy](docs/HttpBusy.md)：发送请求时，显示正在工作的组件。
* [MessageBox](docs/MessageBox.md)：显示提示框的组件。
* [Criteria](docs/Criteria.md)：查询条件生成器。
* [List](docs/List.md)：列表显示数据组件。
* [DataGrid](docs/DataGrid.md)：数据表格组件。
* [Tree](docs/Tree.md)：显示树状列表的组件。
* [GridTree](docs/GridTree.md)：表格树组件。
* [Pager](docs/Pager.md)：翻页组件。
* [CriteriaPaged](docs/CriteriaPaged.md)：复合组件，带查询条件的翻页显示数据组件。

## 插件

* [MessageBox](docs/MessageBox.md)：提供提醒对话框显示功能。
* [HttpStore](docs/MessageBox.md)：提供后台http请求功能。
* [Partial](docs/MessageBox.md)：提供片段支持。

## 混合

* [Selector](docs/Selector.md)：对选择提供支持。
* [TreeMixin](docs/TreeMixin.md)：对树的操作提供支持。

## stores

* [SelectStore](docs/Selector.md)：对选中的数据进行存储。
* [PagedList](docs/PagedList.md)：提供分页列表数据处理。
* [TreeList](docs/TreeList.md)：提供树数据处理。

## 测试

所有组件均可单独测试，每个测试例子按如下目录结构组织

examples
>List
>>index.html  
>>main.js  
>>App.vue  
>>辅助组件.vue

通过List.html进行访问

## 测试例子

* Partial：  
对Partial进行测试，测试Partial的各种组合能力。
* Busy：  
测试Busy组件。通过按钮，测试Busy状态。
* MessageBox：  
对MessageBox进行测试，按下确定，或者取消按钮后，显示按下的按钮。
* HttpStore:  
对HttpStore进行测试，按钮按下后，发送错误请求，在控制台显示请求结果。
* AppBase：  
对AppBase进行测试，发送错误请求，弹出错误对话框。
* Criteria：  
对查询条件组件进行测试，点击查询，显示产生的条件。
* List：  
对List进行测试，用程序产生10000条数据，测试List组件性能。
* DataGrid：  
对数据表格进行测试，不从后台获取数据，直接显示给定数据。
* Tree：  
对树进行测试，不从后台获取数据，直接显示给定数据。
* GridTree：  
对表格树进行测试，不从后台获取数据，直接显示给定数据。
* Pager：  
对翻页组件进行测试，不从后台获取数据，直接显示给定数据。
* PagedList：  
对PagedList模型进行测试，包括与 List, Tree, DataGrid, GridTree 等组件的结合。
* CriteriaPaged：  
对带查询条件的翻页列表进行测试，从后台获取数据，每条数据可以删除。列表部分包括：List, Tree, DataGrid, GridTree
* DataForm：对表单进行完整测试，表单不需要组件。内容有：
  - 可以把数据提交后台，提交后台的数据可以通过左边的查询分页组件进行查询。
  - 查询出来的数据，当选中时，可以删除。
  - 左边查询分页组件支持：DataGrid, GridTree。不同查询组件放在tab页中。
  - 表单组件的输入数据可以进行校验。
