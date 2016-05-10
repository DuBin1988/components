<template>
  <div>
    <tree :model="model">
      <span partial>{{row.name}}</span>
    </tree>
  </div>
</template>

<script>
import Tree from '../../src/components/Tree'

export default {
  data () {
    return {
      model: [
        {name: '根节点', size: 1, children: [
          {name: '子节点1', size: 2, children: [
            {name: '子节点11', size: 0},
            {name: '子节点12', size: 1, children: [
              {name: '子节点121', size: 0}
            ]}
          ]}
        ]}
      ]
    }
  },
  components: { Tree }
}
</script>
