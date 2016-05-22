<template>
  <div>
    tab2
    <input></input><button @click='$back()'>返回</button>
    <button @click="$route('tab1', {msg: '加参数'})">到tab1</button>
    <button @click="$route('tab1', {msg: 'tab2 开 tab1'}, false)">在新标签页打开tab1</button>
  </div>
</template>

<script>
export default {
  title: '标签2'
}
</script>
