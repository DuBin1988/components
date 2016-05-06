# HttpStore

对Http请求进行全局管理。最多允许同时进行5个http请求，以缓解服务端压力。

## 用法

系统已经将HttpStore以插件方式进行注册，使用时，在组件上，直接调用下面相关函数即可。

- $post(url, data): 以post方式发送数据，返回一个Promise，发送后的后续处理，用then方式进行。
- $delete(url, data): 以delete方式发送数据，返回一个Promise，发送后的后续处理，用then方式进行。

在根组件上，用如下方式引入HttpStore，并配置组件的store为引入的结果。
```
import store from '../../src/vuex/HttpStore'

export default {
  store
}
```

在需要对状态进行读取的地方，以如下方式引入getters，并在组件中显示读取的状态值。
```
import { getIsBusy } from '../../src/vuex/HttpGetters'

export default {
  vuex: {
    getters: {
      isBusy: getIsBusy
    }
  }
}
```

组件模板部分直接访问，如下例子

```html
<template>
  <span> {{ isBusy }} </span>
</template>
```

在需要对状态进行改变的地方，以如下方式引入actions，并在组件中进行调用。

```
import { http } from '../../src/vuex/HttpActions'

export default {
  vuex: {
    actions: {
      http
    }
  }
}
```

模板中，采用如下方式调用。

```html
<button @click="http('/rs/entity/t_project', this.model)" >保存</button>
```

## getters

- getIsBusy: 是否正在进行后台工作, 布尔型。

## actions

- http(store, url, body, success, fail): 给后台以post方式发送数据, 参数如下：

* store: 符合vuex规范的store
* url: 发送数据的地址
* body: 发送的内容, json格式
* success: 发送成功的回调函数
* fail: 发送失败的回调函数
