// 코드 3-15 <장바구니 담기> 버튼 추가하기: chapter-03/cart-button.js

data: {
  showProduct: true,
...
},
methods: {
...
  showCheckout() {
    this.showProduct = this.showProduct ? false : true;
  },
}