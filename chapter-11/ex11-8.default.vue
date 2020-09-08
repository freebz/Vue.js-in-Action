<!-- 코드 11-8 기본 레이아웃 업데이트하기: chapter-11/itunes-search/layouts/default.vue -->

<template>
  <section class="container">
    <div>
      <ToolBar/>
      <nuxt/>
    </div>
  </section>
</template>

<script>
import ToolBar from '~/components/Toolbar.vue';
export default {
  components: {
    ToolBar
  }
}
</script>

<style>
...