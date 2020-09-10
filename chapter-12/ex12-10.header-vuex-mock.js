// 코드 12-10 Vuex 흉내 내기: chapter-12/header-vuex-mock.js

describe('Header.vue', () => {

  let store;
  let getters;
  let mutations;
  beforeEach(() => {
    getters = {
      session: () => false
    }
    mutations = {
      SET_SESSION: () => {}
    }
    store = new Vuex.Store({
      getters,
      mutations
    })
  })