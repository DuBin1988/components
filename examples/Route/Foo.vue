<template>
  <div class="foo">
    <h2>This is Foo!</h2>
    <button @click='test'>to bar</button>
    <input></input>
  </div>
</template>

<script>
export default {
  title: 'foo组件',
  methods: {
    test () {
      this.$goto('bar')
    }
  }
}
</script>
