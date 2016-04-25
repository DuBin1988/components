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
  defaultvalue="this.model.address.split('').reverse().join('')"
  />
</div>
<div>
  <button v-on:click="search('param')">查询</button>
</div>
```
其中 v-model 指定查询条件对象的字段，字段前冠以`model.`前缀，`condition`属性为查询条件对应的查询条件, `defaultvalue`为默认值，可以是字符串如'123'，或者为javascript表达式，如引用model中的数据时表达式要以`this.model.`开始

## 查询条件

默认情况下，查询组件自己产生查询条件。如果查询条件比较复杂，客户可以通过回调函数param自己产生查询条件，param函数有两个参数用于产生查询条件：

- model 存放用户输入的字段内容
- names 存放配置的查询条件

查询条件放置在查询组件的condition属性里，外部可以通过给查询组件指定名称后，以`this.$refs.search.condition`方式获得查询条件
