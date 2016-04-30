<template>
  <ul v-if="model">
    <li
      @click="select(model)"
      class="tree"
      v-bind:class="{ 'selected': isSelected(model) }">
      <span v-if="isFolder" @click="toggle">
        <span v-if="open">v</span>
        <span v-if="!open">&gt;</span>
      </span>
      <span v-if="!isFolder">
        &nbsp;
      </span>
      <partial name='default'></partial>
    </li>
    <div
      v-show='open'
      v-for='model in model.children'>
      <tree
        :model='model'>
      </tree>
    </div>
  </ul>
</template>

<script>
import selector from '../mixins/selector'
import TreeMixin from '../mixins/TreeMixin'
import Tree from './Tree'

export default {
  name: 'tree',
  props: ['model'],
  mixins: [selector, TreeMixin],
  components: {
    Tree
  }
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
