# Busy

当后台进行处理时，显示正在工作。

## 用法

通过参数isBusy指明是否忙，通过默认partial指明不忙时，正常显示的组件。

```html
<busy :is-busy="isBusy">
  <span partial>正常组件</span>
</busy>
```
