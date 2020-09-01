<!-- 코드 7-24 상품 수정 버튼 추가하기: chapter-07/edit-button.vue -->

...
  </p>
  <button @click="edit">상품 수정</button>
  <router-view></router-view>
</div>
...
methods: {
  edit() {
    this.$router.push({name: 'Edit'})
  }
},