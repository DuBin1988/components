# Creteria

产生查询条件的组件

## 用法
``` html
<criteria>
  <div partial>
  </div>
</criteria>
```
在partial里放置查询条件，查询条件格式如下：
``` html
<div>
  地址:
  <input type="text"
  v-model="model.address"
  condition=" address like '%{}%'"
  default-value="this.model.address.split('').reverse().join('')"
  />
</div>
<div>
  <button v-on:click="search()">查询</button>
</div>
```
其中 v-model 指定查询条件对象的字段，字段前冠以`model.`前缀，`condition`属性为查询条件对应的查询条件, `default-value`为默认值，可以是字符串如'123'，或者为javascript表达式，如引用model中的数据时表达式要以`this.model.`开始

## 查询条件

默认情况下，查询组件自己产生查询条件。如果查询条件比较复杂，父组件可以自己产生查询条件。办法如下：

1. 用`v-ref:creteria`为Creteria组件指定名称。
1. 给父组件添加查询条件的产生函数，比如search。
1. 添加按钮，该按钮在creteria组件外，按钮上配置`@click='search'`以便调用自己的产生条件的方法。
1. 在search函数内部，用`this.$refs.creteria`获得查询组件，进一步获得如下产生查询条件所必须的内容：

  * model：存放用户输入的字段内容
  * conditions： 以Json对象方式存放配置的查询条件

查询条件的生成结果放置在查询组件的condition属性里，外部可以通过给查询组件指定名称后，以`this.$refs.creteria.condition`方式获得查询条件

## 事件

* condition-changed：  
查询条件生成时触发，事件参数为：`{ condition:this.condition, model:this.model }`，其中：
  * condition：最终生成的查询条件
  * model：以Json对象方式指明用户输入的内容。
