// 코드 10-8 main.js 파일 업데이트하기: chapter-10/petstore/src/main.js

// 'import' 명령어로 Vue 빌드 버전 불러오기
// webpack.base.conf에 별칭으로 (runtime-only 혹은 standalone) 설정
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/app.css')
import {store} from './store/store';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})