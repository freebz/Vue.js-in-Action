// 코드 11-4 CSS와 글꼴 추가하기: chapter-11/itunes-search/nuxt.config.js

module.exports = {
  /*
  ** 페이지 헤더
  */
  head: {
    title: 'iTunes Search App',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1'},
      {hid: 'description', name: 'description', content: 'iTunes search project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/app.styl'],
  /*
  ** 진행 표시 줄의 색을 정의하세요
  */
  loading: {color: '#3B8070'},
  /*
  ** 빌드 구성
  */
  build: {
    vendor: ['axios', 'vuetify']
  }
}