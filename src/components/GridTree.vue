<template>
  <table replace='table' class='table table-hover'>
    <thead a-partial='head'>
    </thead>
    <tbody>
      <tr
        v-for='row in model'
        v-bind:class="{ 'success': isSelected(row) }"
        @click="select(row)"
        a-partial='body'>
        <td>
          <span v-for='n of row.level'>&nbsp;&nbsp;</span>
          <span v-if="isFolder(row)" @click="toggle(row)">
            <span v-if="row.open">-</span>
            <span v-else>+</span>
          </span>
          <partial name='default'></partial>
          <span v-if='row.state === "错误"'>x</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Selector from '../mixins/Selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  mixins: [Selector, TreeMixin]
}
</script>
