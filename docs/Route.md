# Route

提供路由，用于在功能标签页中进行路由。

## 用法

在需要路由的地方，提供路由插入点，如下：
```html
<route></route>
```

在组件内部，通过路由函数进行路由，如下：
```
this.$route(name, comp)
```
参数说明：

- name：给路由过去的组件提供名称，该名称将改变页签显示名。
- comp：路由过去的组件。

## 返回

在需要返回的地方，调用`$back()`返回到上一次路由过来的地方。

## 组件参数

在路由时，可以给组件提供参数，如下：
```
this.$route(name, comp, {msg: 'message'})
```

## 初始组件
可以调用路由器的函数，给路由器提供初始组件，如下：
```
this.$refs.route.route(name, comp, {msg: 'message'})
```
