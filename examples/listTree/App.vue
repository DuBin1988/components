<template>
  <div>
    <list :model="model1" select-mode='none'>
      <test-tree partial :model="data">
      </test-tree>
    </list>
    <list :model="model2" select-mode='none'>
      <test-tree partial :model="data">
      </test-tree>
    </list>
  </div>
</template>

<script>
import SelectStore from '../../src/stores/SelectStore'
import List from '../../src/components/List'
import TestTree from './TestTree'

export default {
  data () {
    return {
      selectStore: new SelectStore(),
      model1: [{
        name: '根节点',
        size: 1,
        children: [{
          name: '子节点1',
          size: 0
        }]
      }, {
        name: '2根节点',
        size: 1,
        children: [{
          name: '2子节点1',
          size: 0
        }]
      }],
      model2: [{
        name: '根节点',
        size: 1,
        children: [{
          name: '子节点1',
          size: 0
        }]
      }]
    }
  },
  components: { List, TestTree }
}
</script>
