<!-- 코드 8-9 애완용품샵에 트랜지션 추가하기: chapter-08/petstore/src/App.vue -->

<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
 name: 'app' 
}
</script>

<style>
#app {
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>