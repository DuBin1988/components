<template>
  <div id='app' class='auto'>
    <test-table>
      <div partial='head'>
      <span a-tr>
        <span a-td>
          a
        </span>
      </span>
      </div>
    </test-table>
  </div>
</template>

<script>
import TestTable from './TestTable'

export default {
  title: 'Child',
  components: { TestTable }
}
</script>
