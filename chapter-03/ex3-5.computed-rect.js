// 코드 3-5 사객형 넓이 계산하기: chapter-03/computed-rect.js

new Vue({
  data: {
    length: 5,
    width: 3
  },
  computed: {
    area: function() {
      return this.length * this.width;
    }
  }
});