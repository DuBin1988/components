# HttpStore

对Http请求进行全局管理。最多允许同时进行5个http请求，以缓解服务端压力。

## 用法

系统已经将HttpStore以插件方式进行注册，使用时，在组件上，直接调用下面相关函数即可。或者也可以调用Vue.post及Vue.delete方法。

* $post(url, data, {warnMsg = null, resolveMsg = '恭喜！提交成功！', rejectMsg = '提交错误！'}):  
以post方式发送数据，返回一个Promise，发送后的后续处理，用then方式进行。
  * url：发送数据的url
  * data：要发送的数据，JSON格式
  * warnMsg：发送前的提醒信息，默认为空，即不提醒
  * resolveMsg：提交成功后的提醒信息，为空不提醒
  * rejectMsg：提交失败后的提醒信息，为空不提醒
* $delete(url, data, {warnMsg = '删除数据不可恢复，确认删除吗？', resolveMsg = '恭喜！删除成功！', rejectMsg = '删除失败：'}):  
以delete方式发送数据，返回一个Promise，发送后的后续处理，用then方式进行。
  * url：删除数据的url
  * data：要删除的数据
  * warnMsg：删除前的提醒信息，为空不提醒
  * resolveMsg：删除成功后的提醒信息，为空不提醒
  * rejectMsg：删除失败后的提醒信息，为空不提醒

$post及$delete方法的返回值中，除http的response内容外，如果用户按下了取消按钮，response的status为301，response的statusText为‘用户按下了取消按钮，未提交请求’

## 属性

* isBusy：是否繁忙，一般情况下，由[HttpBusy](HttpBusy.md)直接调用，使用者不用管。
