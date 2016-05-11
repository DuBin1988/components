<template>
  <div id='app'>
    <data-grid :model='model'>
      <template partial='head'>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </template>
      <template partial='body'>
        <td>{{row.name}}</td>
        <td>{{row.age}}</td>
      </template>
      <template partial='foot'>
        <td>汇总</td>
        <td>{{ model.sums.age }}</td>
      </template>
    </data-grid>
  </div>
</template>

<script>
import DataGrid from '../../src/components/DataGrid'

export default {
  data () {
    return {
      model: {
        rows: [
          {name: 'abc', age: 10},
          {name: '测试', age: 11}
        ],
        sums: {count: 2, age: 21}
      }
    }
  },
  components: { DataGrid }
}
</script>
