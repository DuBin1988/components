<template>
  <div id='app' class='auto'>
    <test-table>
      <template partial='head'>
        <tr>
          <td>
            a
          </td>
          <td>
            b
          </td>
        </tr>
      </template>
    </test-table>
  </div>
</template>

<script>
import TestTable from './TestTable'

export default {
  components: { TestTable }
}
</script>
