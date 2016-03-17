<template>
  <ul>
    <li
      v-for='data in model'
      v-bind:class="{ 'selected': isSelected(data) }"
      @click="select(data)">
      <partial name="default"></partial>
    </li>
  </ul>
</template>

<script>
import selector from '../mixins/selector'

export default {
  props: ['model'],
  mixins: [selector]
}
</script>

<style>
.selected {
  background-color: yellow
}
</style>
