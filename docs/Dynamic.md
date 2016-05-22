# Dynamic

带路由的动态tab页。

## 用法

在需要动态tab页的地方，用如下代码引入：
```html
<dynamic :comp="{name: 'tab1'}"></dynamic>
```
- comp：参数comp指明动态tab页的初始组件。

### 初始组件参数

初始组件可以带参数，形式如下：
```html
<dynamic :comp="{name: 'tab1', props: {msg: 'abc'}}"></dynamic>
```

## 事件
- route-init: 广播路由初始化过程给路由组件
  * index: 路由组件的索引号
  * name：组件名称
  * props：组件参数

## 事件处理

- route-tab：路由到新页签，如果页签已经打开，且不是本页签，用新组件替换原来内容。否则，打开新页签，参数如下：
  * name：组件名称
  * props：组件参数
- route-end：当前页签路由结束，登记当前页签组件名及标题。
  * name: 组件名称
  * title： 组件标题
