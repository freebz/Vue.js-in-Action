// 코드 8-6 자바스크립트 훅 이벤트 리스너: chapter-08/jshook-2.html

function addEventListener(el, done) {
  el.addEventListener("animationend", function() {
    el.style="";
    done();
  });
}