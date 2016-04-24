# selector

给需要选择功能的组件提供支持。

## 用法

在需要选择功能的组件中提供selector混合，如下：

    export default {
      mixins: [selector]
    }

在模板中需要以不同方式显示当前选中行的地方，用如下表达式：

    v-bind:class="{ 'selected': isSelected(data) }"

在模板中需要执行选择过程的地方，用如下表达式：

    @click="select(data)"

## 选择内容

当前选中项存放在一个selectorStore里，混合了selector的组件，将遵循下面的过程获取selectStore。

1. 从祖先中继承selectStore
1. 如果组件没有selectStore，自动建立默认selectStore

## 当前选中项获取

可以用下面方式，给具有选择功能的组件提供selectorStore:

    selectStore = new SelectStore()

    export default {
      data {
        return {
          selectorStore
        }
      }
    }

这时，用selectStore.selected获取当前选中项。

如果没有提供selectStore，从组件的selected中获取选中项，具体做法：

在模板中，为选择组件指定refs。

    <template>
      <List refs="list"></list>
    </template>

在父组件程序里，通过this.$refs.list.selected获取当前选中项。

## selectMode

selectMode包括none及single。如果将多个支持选择功能的组件进行复合，例如列表中每一项是树的情形，哪个组件支持选择，必须进行指定。

    <template>
      <list select-mode='none'>
        <tree partial></tree>
      </list>
    </template>

通过将list的selectMode设置为none，屏蔽list的选择功能。选择内容由树节点提供。

## selectStore

* selected - 当前选中项
* select (data) - 选中data

## selector混合

* selectStore - 选中项存放的store
* selectMode - 选择模式，字符串类型。包括: none、single(默认)
* selected - 当前选中项
* select (data) - 选择data
* isSelected (data) - 判断data是否选中
* beforeCompile () - 处理selectStore的继承问题
