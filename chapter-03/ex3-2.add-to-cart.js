// 코드 3-2 장바구니 담기 메서드: chapter-03/add-to-cart.js

methods: {
  addToCart: function() {
    this.cart.push(this.product.id);
  }
}