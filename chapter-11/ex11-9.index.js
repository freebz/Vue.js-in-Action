// 코드 11-9 Vuex 저장소 추가하기: chapter-11/itunes-search/store/index.js

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      albums: []
    },
    mutations: {
      add (state, payload) {
        state.albums = payload;
      }
    }
  })
}
export default createStore