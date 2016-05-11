<template>
  <ul class="list-unstyled">
    <li
      v-for='row in model.rows'
      v-bind:class="{ 'bg-success': isSelected(row) }"
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
