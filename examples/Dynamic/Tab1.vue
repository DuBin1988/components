<template>
  <div class='auto'>
    tab1 {{msg}}
    <input></input><button @click='$route("tab2")'>to tab2</button>
    <button @click='$route("tab2", {}, false)'>在新标签页打开tab2</button>
    <button @click='$route("tab1", {msg: "自己打开tab1"}, false)'>在新标签页打开tab1</button>
    <button @click='$back()'>返回</button>
  </div>
</template>

<script>
export default {
  title: '标签1',
  props: [ 'msg' ]
}
</script>
