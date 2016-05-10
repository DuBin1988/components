<template>
  <ul>
    <li
      v-for='row in model'
      @click="select(row)"
      class="tree"
      v-bind:class="{ 'selected': isSelected(row) }">
      <span v-for='n of row.level'>&nbsp;</span>
      <span v-if="isFolder(row)" @click="toggle(row)">
        <span v-if="row.open">-</span>
        <span v-else>+</span>
      </span>
      <partial name='default'></partial>
      <span>{{ row.state }}</span>
      <span v-if='row.state === "错误"'>x</span>
    </li>
  </ul>
</template>

<script>
import Selector from '../mixins/Selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  props: ['model'],
  mixins: [Selector, TreeMixin]
}
</script>

<style>
.selected {
  background-color: yellow
}
.tree {
  cursor: pointer;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>
