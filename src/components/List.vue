<template>
  <ul>
    <li
      v-for='row in model.rows'
      v-bind:class="{ 'selected': isSelected(row) }"
      @click="select(row)">
      <partial name="default"></partial>
    </li>
  </ul>
</template>

<script>
import Selector from '../mixins/Selector'
import ListMixin from '../mixins/ListMixin'

export default {
  props: ['model'],
  mixins: [Selector, ListMixin]
}
</script>

<style>
.selected {
  background-color: yellow
}
</style>
