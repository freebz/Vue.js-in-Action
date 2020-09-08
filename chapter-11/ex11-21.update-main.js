// 코드 11-21 Main.vue 파일 업데이트하기: chapter-11/update-main.js

...
import {productsRef} from '../firebase';
export default {
  name: 'imain',
  firebase: {
    products: productsRef
  },
...
  computed: {
    ...mapGetters([
      'session'
    ])
...