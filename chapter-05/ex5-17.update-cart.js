// 코드 5-17 canAddToCart 메서드를 업데이트하고, cartCount 메서드 추가하기: chapter-05/update-cart.js

canAddToCart(aProduct) {
  return aProduct.availableInventory > this.cartCount(aProduct.id);
},
cartCount(id) {
  let count = 0;
  for (var i = 0; i < this.cart.length; i++) {
    if (this.cart[i] === id) {
      count++;
    }
  }
  return count;
}