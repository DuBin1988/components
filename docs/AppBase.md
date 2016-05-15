# AppBase

提供对话框，http访问等app基础

## 用法

用默认slot提供实际应用内容。

```html
<app-base>
  <div partial>
  </div>
</app-base>
```

## 高度纠正

AppBase对采用了弹性盒模型布局组件的高度进行纠正，有`span`样式的元素，将进行如下绑定：

```
e.style.height = e.offsetHeight
```
