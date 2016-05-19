<template>
  <div>
    Bar
    <input></input>
    <button @click='test'>back</button>
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      this.$back()
    }
  }
}
</script>
