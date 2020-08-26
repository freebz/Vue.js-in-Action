// 코드 3-10 남아 있는 재고에 대한 계산된 속성: chapter-03/computed-remaining.js

computed: {
  cartItemCount: function() {
    return this.cart.length || '';
  },
  canAddToCart: function() {
    return this.product.availableInventory > this.cartItemCount;
  }
}