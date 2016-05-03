# DataForm

表单组件，提供一些基础的表单处理过程。

## 用法

用model参数传递数据，用默认partial传递表单内容

```html
<data-form :model='form'>
  <div partial>
    <div>
    用户名:
    <input type="text" v-model="model.name">
    </div>
    <div>
      <button @click="post('/rs/entity/t_project')" >保存</button>
    </div>
  </div>
</data-form>
```
## 方法

- post(url) - 往指定的url发送model中的数据
