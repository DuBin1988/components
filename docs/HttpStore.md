# HttpStore

对Http请求进行全局管理。最多允许同时进行5个http请求，以缓解服务端压力。

## 用法

系统已经将HttpStore以插件方式进行注册，使用时，在组件上，直接调用下面相关函数即可。

* $post(url, data): 以post方式发送数据，返回一个Promise，发送后的后续处理，用then方式进行。
* $delete(url, data): 以delete方式发送数据，返回一个Promise，发送后的后续处理，用then方式进行。

## 属性

* isBusy：是否繁忙，一般情况下，由[HttpBusy](HttpBusy.md)直接调用，使用者不用管。
