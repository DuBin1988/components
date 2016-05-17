<template>
  <div class="list-group">
    <a href="#"
      v-for='row in model'
      @click="select(row)"
      class="list-group-item"
      v-bind:class="{ 'active': isSelected(row) }">
      <span v-for='n of row.level'>&nbsp;&nbsp;</span>
      <span v-if="isFolder(row)" @click="toggle(row)">
        <span v-if="row.open">-</span>
        <span v-else>+</span>
      </span>
      <partial name='default'></partial>
      <span v-if='row.state === "错误"'>x</span>
    </a>
  </div>
</template>

<script>
import Selector from '../mixins/Selector'
import TreeMixin from '../mixins/TreeMixin'

export default {
  mixins: [Selector, TreeMixin]
}
</script>
