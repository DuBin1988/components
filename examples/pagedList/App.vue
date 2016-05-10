<template>
  <div id='app'>
    <app-base>
      <table>
        <tr>
          <td>
            <project-list></project-list>
          </td>
          <td>
            <project-grid></project-grid>
          </td>
        </tr>
        <tr>
          <td>
            <project-tree></project-tree>
          </td>
          <td>
            <project-grid-tree></project-grid-tree>
          </td>
        </tr>
      <table>
    </app-base>
  </div>
</template>

<script>
import AppBase from '../../src/components/AppBase'
import ProjectList from './ProjectList'
import ProjectGrid from './ProjectGrid'
import ProjectTree from './ProjectTree'
import ProjectGridTree from './ProjectGridTree'

export default {
  components: { AppBase, ProjectList, ProjectGrid, ProjectTree, ProjectGridTree }
}
</script>
