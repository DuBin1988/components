<template>
  <ul>
    <li
      v-for='model in model'
      @click="select(model)"
      class="tree"
      v-bind:class="{ 'selected': isSelected(model) }">
      <span v-for='n of model.level'>&nbsp;</span>
      <span v-if="isFolder(model)" @click="toggle(model)">
        <span v-if="open">-</span>
        <span v-if="!open">+</span>
      </span>
      <partial name='default'></partial>
      <span v-if='model.state === "错误"'>x</span>
    </li>
  </ul>
</template>

<script>
import selector from '../mixins/selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  props: ['model'],
  mixins: [selector, TreeMixin]
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
