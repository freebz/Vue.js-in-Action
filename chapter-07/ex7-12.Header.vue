<!-- 코드 7-12 스크립트와 CSS 추가하기: chapter-07/petsotre/src/components/Header.vue -->

<script>
export default {
  name: 'my-header',
  data() {
    return {
      sitename: "Vue.js 애완용품샵",
    }
  },
  props: ['cartItemCount'],
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    }
  }
}
</script>

<!-- CSS 범위 지정을 위해 해당 컴포넌트에만 "scoped" 속성을 추가하세요. -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}

.router-link-exact-active {
  color: blue;
}
</style>