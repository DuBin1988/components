# Busy

当后台进行处理时，显示正在工作。

## 用法

通过参数isBusy指明是否忙，通过slot='normal'指明不忙时，正常显示的组件，通过slot='busy'指明繁忙时的显示内容。

```html
<busy :is-busy="isBusy">
  <span slot='normal'>正常组件</span>
  <span slot='busy'>系统正在工作，请耐心等候！</span>
</busy>
```
