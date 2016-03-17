# components

提供组件制作基础及部分通用组件。

## 内容

* [partial](docs/partial.md) - 对vue slot的不足进行弥补，slot不支持子组件scope，partial支持子组件scope。
* selector - 提供选择特性，list、tree等组件需要。
* list - 以列表方式显示数据。
* tree - 以树方式显示数据。
* all - 完成vue所有初始化工作。

## 测试

所有组件均可单独测试，每个测试例子按如下目录结构组织

examples
>list
>>index.html  
>>main.js  
>>App.vue  
>>辅助组件.vue

通过list.html进行访问

### 包含的测试例子

* partial - 对partial进行测试
* list - 对列表进行测试，产生10000条数据，测试列表性能
* tree - 对树进行测试
* listTree - 测试组件的复合能力，列表中每个节点是一个树
