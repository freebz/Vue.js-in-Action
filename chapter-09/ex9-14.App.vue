<!-- 코드 9-14 App.vue 업데이트하기: chapter-09/jsx-example/src/App.vue -->

<template>
  <div id="app">
    <HelloWorld header="1" name="에릭"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }  
}
</script>

<style>
</style>