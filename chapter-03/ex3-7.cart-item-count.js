// 코드 3-7 cartItemCount의 계산된 속성: chapter-03/cart-item-count.js, index3.7.html

computed: {
  cartItemCount: function() {
    return this.cart.length || '';
  }
},