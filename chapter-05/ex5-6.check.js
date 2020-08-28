// 코드 5-6 클래스가 추가되어야 하는지를 체크하는 메서드 추가하기: chapter-05/check.js

methods: {
  checkRating(n) {
    return this.product.rating - n >= 0;
  },