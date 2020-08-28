// 코드 5-10 Axios 태그를 추가해서 생명 주기 훅 생성하기: chapter-05/axios-lifecycle.js

...
},
created: function() {
  axios.get('./products.json')
    .then((response) => {
      this.products=response.data.products;
      console.log(this.products);
    });
},