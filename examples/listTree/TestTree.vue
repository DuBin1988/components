<template>
  <div>
    <tree :model="model">
      <span partial>{{model.name}}</span>
    </tree>
  </div>
</template>

<script>
import Tree from '../../src/components/Tree'

export default {
  props: ['model'],
  components: { Tree }
}
</script>
