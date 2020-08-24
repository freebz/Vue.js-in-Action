// 코드 2-3 인스턴스에 생명 주기 훅 추가하기: chapter-02/life-cycle-hooks.js

var APP_LOG_LIFECYCLE_EVENTS = true;

var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js 애완용품샵",
  },
  beforeCreate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeCreate");
    }
  },
  created: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("created");
    }
  },
  beforeMound: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeMount");
    }
  },
  mounted: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("mounted");
    }
  },
  beforeUpdate: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeUpdate");
    }
  },
  updated: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("updated");
    }
  },
  beforeDestroy: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("beforeDestroy");
    }
  },
  destroyed: function() {
    if (APP_LOG_LIFECYCLE_EVENTS) {
      console.log("destroyed");
    }
  }
});