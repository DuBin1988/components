<template>
  <table replace='table'>
    <thead a-partial='head'>
    </thead>
    <tbody>
      <tr
        v-for='row in model'
        @click="select(row)"
        a-partial='body'>
        <td>
          <span v-for='n of row.level'>&nbsp;</span>
          <span v-if="isFolder(row)" @click="toggle(row)">
            <span v-if="row.open">-</span>
            <span v-else>+</span>
          </span>
          <partial name='default'></partial>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Selector from '../mixins/Selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  props: [ 'model' ],
  mixins: [Selector, TreeMixin]
}
</script>
