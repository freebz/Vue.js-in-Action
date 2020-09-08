// 코드 11-16 main 파일 설정하기: chapter-11/petstore/src/main.js

// 임코트 명령어를 사용해서 Vue 빌드 버전 로드
// (런타임 전용 또는 독립 실행은) 별칭으로 webpack.base.conf에 설정되어 있습니다.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/app.css')
import {store} from './sotre/store';
import firebase from 'firebase';
import './firebase';
import VueFire from 'vuefire';

Vue.use(VueFire);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})