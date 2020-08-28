// 코드 5-22 sortedProducts 계산된 속성: chapter-05/sort-products-comp.js

sortedProducts() {
  if (this.products.length > 0) {
    let productsArray = this.products.slice(0);
    function compare(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase())
        return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase())
        return 1;
      return 0;
    }
    return productsArray.sort(compare);
  }
}