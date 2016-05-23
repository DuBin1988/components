# Route

提供路由，用于在功能标签页中进行路由。

## 用法

在需要路由的地方，提供路由插入点，如下：
```html
<route></route>
```

在组件内部，通过路由函数进行路由，如下：
```
this.$route(name)
```
参数说明：

- name：路由过去的组件名称。

### 返回

在需要返回的地方，调用`$back()`返回到上一次路由过来的地方。

### 组件参数

在路由时，可以给组件提供参数，如下：
```
this.$route(name, {msg: 'message'})
```

### 路由页签

在路由时，可指明是否在本页签路由。如果不在本页签路由，将寻找所有打开的页签，看是否有已经存在的组件。如果没有，则打开新页签。
```
this.$route(name, props, self)
```
self为boolean值，指明是否本页签，默认为true，表示在本页签下路由。

### 组件标题

所有可以进行路由的组件，要设置组件title，如下：

```
export default {
  title: 'comp'
}
```
这个title将作为组件标题在页签等地方显示。路由组件有一个属性title，可以用于把当前显示的组件的title发布出去。

### 异步加载

所有需要进行异步加载的组件，在应用main函数里进行注册。注册代码如下：
```
Vue.component('tab1', (resolve) => { require(['./Tab1'], resolve) })
```

## 参数

- comp：通过参数方式，给路由器提供初始组件，如下：
```html
<route :comp={name:name, props:props}></route>
```
- index：指明路由组件的在tab页中的索引，处理route-init事件时要用。

## 事件

- route-tab：路由到新页签，参数如下：
  * name：组件名
  * props: 组件参数
- route-end：新组件路由完成，参数如下：
  * name: 组件名
  * title: 组件标题

## 事件处理

- route: 处理子组件路由过程
  * name：组件名
  * props: 组件参数
  * self: 是否在本组件内路由，如果为false，发送route-tab事件，由上层进行路由
- back: 返回前一个组件
- route-init: 设置初始组件，清空原来路由的所有组件，重新设置初始组件
  * index: 用index判断是否本组件，每个路由组件都有一个index参数
  * name：组件名
  * props: 组件参数
