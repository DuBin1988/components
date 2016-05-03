<template>
  <table>
    <tr>
      <td>
        <project-list></project-list>
      </td>
      <td>
        <project-form></project-form>
      </td>
    </tr>
  </table>
</template>

<script>
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

export default {
  components: { ProjectList, ProjectForm }
}
</script>
