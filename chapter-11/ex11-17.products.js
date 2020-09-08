// 코드 11-17 Vuex 업데이트하기: chapter-11/petstore/store/modules/products.js

const state = {
    products: {},
    session: false
};

const getters = {
    products: state => state.products,
    session: state => state.session
};

const actions = {
    initStore: ({commit}) => {
      axios.get('static/products.json')
      .then((response) => {
        console.log(response.data.products);
        commit('SET_STORE', response.data.products)
      });
    }
};

const mutations = {
    'SET_STORE' (state, products) {
      state.products = products;
    },
    'SET_SESSION' (state, session) {
      state.session = session;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}