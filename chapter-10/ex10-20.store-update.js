// 코드 10-20 새로운 store.js 파일: chapter-10/store-update.js

import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    products
  }
});