// 코드 3-4 사용자 성명 계산하기: chapter-03/computed.js

computed: {
  fullName: function() {
    return [this.firstName, this.lastName].join(' ');
  }
}