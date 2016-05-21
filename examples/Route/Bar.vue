<template>
  <div>
    Bar
    <input></input>
    <button @click='test'>back</button>
  </div>
</template>

<script>
export default {
  title: 'bar编辑',
  methods: {
    test () {
      this.$back()
    }
  }
}
</script>
