<!-- 코드 11-13 동적 경로 생성하기: chapter-11/itunes-search/pages/result/_id.vue -->

<template>
  <div>
    <h1>{{$route.params.id}}에 대한 결과</h1>
    <div v-if="albumData">
      <div v-for="(album, index) in albumData">
          <Card :title="album.collectionCensoredName"
                :image="album.artworkUrl60"
                :artistName="album.artistName"
                :url="album.artistViewUrl"
                :color="picker(index)" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import Card from '~/components/Card.vue'
export default {
  components: {
    Card
  },
  methods: {
    picker(index) {
      return index % 2 == 0 ? 'red' : 'blue'
    }
  },
  computed: {
    /* albumData() {
      return this.$store.state.albums;
    } */
  },
  middleware: 'search'
}
</script>