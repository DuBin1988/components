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

export default {
  props: ['model'],
  mixins: [Selector]
}
</script>

<style>
.selected {
  background-color: yellow
}
</style>
