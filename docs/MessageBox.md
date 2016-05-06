# MessageBox

显示提醒框，可以带确认及取消按钮。

## 用法

系统已经将MessageBox插件加入到Vue中了，在组件里面直接调用下面函数即可

- $showMessage(msg, buttons): 显示msg。
- $closeMessage(): 关闭提示框，一般不需要调用

## $showMessage

用buttons参数指明要显示的按钮，格式为 ['confirm', 'cancel']，比如只需要显示确认按钮，buttons参数为 ['cancel']。默认，只显示确认按钮。  

在调用$showMessage后，调用confirm函数指明确认按钮按下后的处理过程，调用cancel函数指明取消按钮按下后的处理过程。如下：

```
this.$showMessage('提示').confirm(
  () => console.log('按下了确认按钮')
).cancel(
  () => console.log('按下了取消按钮')
)
```
confirm及cancel函数可以不提供，这时，相应按钮按下不会有动作触发。
