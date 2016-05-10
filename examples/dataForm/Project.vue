<template>
  <table>
    <tr>
      <td>
        <project-list v-ref:list @select-changed='setParentId'></project-list>
      </td>
      <td>
        <project-form :parentid='parentid'></project-form>
      </td>
    </tr>
  </table>
</template>

<script>
import ProjectForm from './ProjectForm'
import ProjectList from './ProjectList'

export default {
  data () {
    return {
      parentid: null
    }
  },
  methods: {
    setParentId (val) {
      let selected = val.val
      if (selected) {
        this.parentid = selected.id
      } else {
        this.parentid = null
      }
    }
  },
  components: { ProjectList, ProjectForm }
}
</script>
