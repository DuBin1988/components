#partial

弥补vue slot不足。slot中的片段，对应父组件，partial对应子组件。slot应用于对话框等场景，partial应用于list、tree等场景。partail中父组件传递的片段内容，对应的是每条数据。

##用法

在子组件中，用partial设置片段插入点，父组件中，给元素设置partial属性，把片段插入子组件中。

子组件：child

<template>
  <div>
    <partial name='a'></partail>
  </div>
</template>

父组件:

<template>
  <div>
    <child>
      <div partial='a'>{{data.name}}</div>
    </child>
  </div>
</template>

##默认partial

子组件可以给partail指定名称default，父组件通过不含属性值的partial把内容传递给子组件的默认partial。例如：

子组件：

<partial name='default'></partial>

父组件：

<div partial></div>

##partial默认值

partial支持默认值，父组件不提供内容情况下，用默认值。例如：

子组件:

<partial name='default'>默认值</partial>

父组件没有提供partial时，将显示默认值。

##partial实现

mixins里的partial提供了支持partial的混合，在all函数里把该混合全局注入到了vue里。

Vue.mixin(partial)

partial实现如下：

beforeCompile ()

  子组件编译前获取下面相关内容：

  1. 从父组件传递过来的内容里获得partial，父组件传递过来的内容在$options._content中。
  2. 从自己的模板中获取所需partials, 模板在$options.template中。

  子组件partial获取顺序为：

  1. 从父传递过来的内容中取
  2. 从父的partial中继承
  3. 取自己的默认值

created ()

  把父组件注册的子组件传递给自己，以便vue能找到相关组件。
