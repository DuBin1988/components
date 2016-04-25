<template>
  <div id='app'>
    <criteria v-ref:search @condition-changed='showCondition'>
      <span partial>
        <div>
        用户名:
        <input type="text" v-model="model.userName" v-on:keyup.enter="search('param')" id="userName"
        condition="username like '%{}%'" defaultvalue="'13'">
        </div>
        <div>
        地址:
        <input type="text" v-model="model.address" id="address"
        condition="address = '{}'"
        defaultvalue="this.model.address.split('').reverse().join('')">
        </div>
        <div>
        密码:
        <input type="text" v-model="model.password" id="password"
        condition="password > '{}'"
        defaultvalue="Date.now()">
        </div>
        <div v-show="model.hasError">
        {{model.error}}
        </div>
        <div>
          <button v-on:click="search()" >查询</button>
        </div>
      </span>
    </criteria>
    <p>condition = {{ condition }}</p>
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
