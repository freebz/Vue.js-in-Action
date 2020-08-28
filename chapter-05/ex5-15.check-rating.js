// 코드 5-15 상품 정보로 checkRating 수정하기: chapter-05/check-rating.js

methods: {
  checkRating(n, myProduct) {
    return myProduct.rating - n >= 0;
  }
},