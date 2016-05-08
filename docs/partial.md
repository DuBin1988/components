# Partial

由父组件传递给子组件的片段，子组件编译前把父组件传递过来的片段插入到模板中指定位置。

## 用法

在子组件中，用partial设置片段插入点，父组件中，给元素设置partial属性，把片段插入子组件中。

子组件：child
```html
<template>
  <div>
    <partial name='a'></partail>
  </div>
</template>
```
父组件:
```html
<template>
  <div>
    <child>
      <div partial='a'>{{data.name}}</div>
    </child>
  </div>
</template>
```
## 默认partial

子组件可以给partail指定名称default，父组件通过不含属性值的partial把内容传递给子组件的默认partial。例如：

子组件：
```html
<partial name='default'></partial>
```
父组件：
```html
<div partial></div>
```
## partial默认值

partial支持默认值，父组件不提供内容情况下，用默认值。例如：

子组件:
```html
<partial name='default'>默认值</partial>
```
父组件没有提供partial时，将显示__默认值__。

## a-partial属性

table等模板元素下面不允许有partial元素，这时，可以通过a-partial属性指明元素的内容由父组件提供。例如：
```html
<tr a-partial='name'>
</tr>
```
## partial实现

系统直接将Partial以插件方式混合到了Vue里，其具体实现如下：

* beforeCompile ()

  子组件编译前获取下面相关内容：

  1. 从父组件传递过来的内容里获得partial，父组件传递过来的内容在$options.\_content中。
  1. 从自己的模板中获取所需partials, 模板在$options.template中。  

  子组件partial获取顺序为：

  1. 从父传递过来的内容中取
  1. 从父的partial中继承
  1. 取自己的默认值

* created ()

  把父组件注册的子组件传递给自己，以便vue能找到相关组件。
