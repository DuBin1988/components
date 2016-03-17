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
import Tree from './Tree'

export default {
  name: 'tree',
  data () {
    return {
      open: false
    }
  },
  props: ['model'],
  mixins: [selector],
  computed: {
    isFolder () {
      return this.model.size > 0
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.open = !this.open
        // 还没有加载子，调用model的加载子的过程
        if (this.open && this.model.children.length === 0) {
          this.model.loadChild()
        }
      }
    },
    delete () {
      this.model.delete()
    }
  },
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
