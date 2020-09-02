// 코드 9-5 전역 믹스인: chapter-09/global-mixin.html

Vue.mixin({
  methods: {
    pressed(val) {
      alert(val);
    }
  },
  data() {
    return {
      item: ''
    }
  }
});