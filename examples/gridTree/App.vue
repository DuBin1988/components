<template>
  <div id='app'>
    <grid-tree :model='model'>
      <template partial='head'>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </template>
      <template partial='body'>
        <td >{{data.age}}</td>
      </template>
      <span partial>{{data.name}}</span>
    </grid-tree>
  </div>
</template>

<script>
import GridTree from '../../src/components/GridTree'

export default {
  data () {
    return {
      model: [{
        name: '根节点',
        age: 1,
        size: 1,
        children: [{
          name: '子节点1',
          age: 2,
          size: 2,
          children: [{
            name: '子节点11',
            age: 3,
            size: 0
          }, {
            name: '子节点12',
            age: 4,
            size: 1,
            children: [{
              name: '子节点121',
              age: 5,
              size: 0
            }]
          }]
        }]
      }]
    }
  },
  components: { GridTree }
}
</script>
