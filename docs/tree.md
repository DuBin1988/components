# tree

以树状方式显示数据

## 用法

把数据通过model参数传递给tree组件，树节点显示的内容通过partial传递给tree组件。

    <template>
      <div>
        <tree :model='data'>
          <div partial>{{model.name}}</div>
        </tree>
      </div>
    </template>

partail中model代表树的每一个节点。

## model

传递给tree组件的数据必须具有层次结构，每个节点特殊属性如下：

* children：数组，代表所有子节点
* size：整形，代表子节点个数。对异步数据，在没有加载所有子节点前，需要把子节点个数先加载过来，以便确定该节点是否叶子节点。

model例子如下：

    data () {
      return {
        model: {
          name: '根节点',
          size: 1,
          children: [{
            name: '子节点',
            size: 0
          }]      
        }
      }
    }

## 选择

tree支持选择功能，具体参考[selector](selector.md)描述。
