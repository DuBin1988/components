# MessageBox

显示提醒框，可以带确认及取消按钮。

## 用法

系统已经将MessageBox插件加入到Vue中了，在组件里面直接调用下面函数即可

- $showMessage(msg): 显示msg, 返回一个Promise，可以用then继续执行确认按钮按下后的处理过程。
- $closeMessage(): 关闭提示框，一般不需要调用
