// 코드 10-18 products 모듈 추가하기: chapter-10/products-mod.js

const state = {
  products: {}
};

const getters = {
  products: state => state.products
};

const actions = {
  initStore: ({commit}) => {
    axios.get('static/products.json')
    .then((response) => {
      console.log(response.data.products);
      commit('SET_STORE', response.data.products);
    });
  }
};

const mutations = {
  'SET_STORE' (state, products) {
    state.products = products;
  }
};