# list

以列表方式显示一批数据。

## 用法

把数据通过model参数传递给list组件，每行显示的内容通过partial传递给list组件。

    <template>
      <div>
        <list :model='data'>
          <div partial>{{data.name}}</div>
        </list>
      </div>
    </template>

partail中data代表每一行数据。

## 选择

list支持选择功能，具体参考[selector](selector)描述。
