<!-- 코드 11-14 asyncData 예제: chapter-11/itunes-search/pages/result/_id.vue -->

asyncData ({ params }) {
      return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((response) => {
          console.log(response.data.results);
          return {albumData: response.data.results}
        });
},