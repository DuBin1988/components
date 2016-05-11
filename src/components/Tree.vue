<template>
  <ul class="list-unstyled">
    <li
      v-for='row in model'
      @click="select(row)"
      class="tree"
      v-bind:class="{ 'bg-success': isSelected(row) }">
      <span v-for='n of row.level'>&nbsp;&nbsp;</span>
      <span v-if="isFolder(row)" @click="toggle(row)">
        <span v-if="row.open">-</span>
        <span v-else>+</span>
      </span>
      <partial name='default'></partial>
      <span v-if='row.state === "错误"'>x</span>
    </li>
  </ul>
</template>

<script>
import Selector from '../mixins/Selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  mixins: [Selector, TreeMixin]
}
</script>
