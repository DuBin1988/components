<template>
  <div id='app'>
    <criteria v-ref:search @condition-changed='showCondition'>
      <span partial>
        <div>
        用户名:
        <input type="text" v-model="model.userName" v-on:keyup.enter="search"
        condition="username like '%{}%'" default-value="'13'">
        </div>
        <div>
        地址:
        <input type="text" v-model="model.address"
        condition="address = '{}'">
        </div>
        <div>
        密码:
        <input type="text" v-model="model.password"
        condition="password > '{}'"
        default-value="Date.now()">
        </div>
        <div>
          <button v-on:click="search" >查询</button>
        </div>
      </span>
    </criteria>
    <p>condition: {{ condition }}</p>
  </div>
</template>

<script>
import Criteria from '../../src/components/Criteria'

export default {
  data () {
    return {
      condition: '初始值'
    }
  },
  methods: {
    showCondition () {
      this.condition = this.$refs.search.condition
    }
  },
  components: { Criteria }
}
</script>
