<template>
  <table replace='table'>
    <thead a-partial='head'>
    </thead>
    <tbody>
      <tr
        v-for='data in model'
        @click="select(data)"
        a-partial='body'>
        <td>
          <span v-for='n of data.level'>&nbsp;</span>
          <span v-if="isFolder(data)" @click="toggle(data)">
            <span v-if="data.open">-</span>
            <span v-else>+</span>
          </span>
          <partial name='default'></partial>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import selector from '../mixins/selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  props: [ 'model' ],
  mixins: [selector, TreeMixin]
}
</script>
