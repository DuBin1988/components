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
        <td v-bind:class="{ 'selected': isSelected(row) }">{{row.name}}</td>
        <td v-bind:class="{ 'selected': isSelected(row) }">{{row.age}}</td>
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
        ]
      }
    }
  },
  components: { DataGrid }
}
</script>
