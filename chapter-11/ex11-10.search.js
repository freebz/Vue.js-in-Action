// 코드 11-10 미들웨어 설정하기: chapter-11/itunes-search/middleware/search.js

import axios from 'axios'

export default function ( {params, store} ) {
  return axios.get(`https://itnues.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
            store.commit('add', response.data.results)
            // console.log(response.data.results);
        });
}