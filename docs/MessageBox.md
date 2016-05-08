# MessageBox

显示提醒框，可以带确认及取消按钮。

## 用法

系统已经将MessageBox插件加入到Vue中了，在组件里面直接调用下面函数即可

- $showMessage(msg, buttons): 显示msg。
- $closeMessage(): 关闭提示框，一般不需要调用

## $showMessage

用buttons参数指明要显示的按钮，格式为 ['confirm', 'cancel']，比如只需要显示确认按钮，buttons参数为 ['cancel']。默认，只显示确认按钮。  

$showMessage返回一个Promise，resolve带一个string型返回值，值为'confirm'表示按下了确认按钮，值为'cancel'表示按下了取消按钮。

```
this.$showMessage('提示').then(
  (response) => {
    if (response === 'confirm') {
      console.log('按下了确认按钮')
    } else if(response === 'cancel') {
      console.log('按下了取消按钮')
    }
  }
)
```
如果按下了确认按钮，response为confirm，按下了取消按钮，response为cancel。
