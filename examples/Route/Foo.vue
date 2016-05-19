<template>
  <div class="foo">
    <h2>This is Foo!</h2>
    <button @click='test'>to bar</button>
    <input></input>
  </div>
</template>

<script>
export default {
  methods: {
    test () {
      this.$route('bar', 'bar')
    }
  }
}
</script>
