<template>
  <table replace='table' class='table table-hover'>
    <thead a-partial='head'>
    </thead>
    <tbody>
      <tr
        v-for='row in model.rows'
        v-bind:class="{ 'success': isSelected(row) }"
        @click="select(row)"
        a-partial='body'>
      </tr>
    </tbody>
    <tr a-partial='foot'></tr>
  </table>
</template>

<script>
import Selector from '../mixins/Selector'

export default {
  props: ['model'],
  mixins: [Selector]
}
</script>
