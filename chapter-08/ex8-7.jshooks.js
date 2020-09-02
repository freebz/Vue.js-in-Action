// 코드 8-7 자바스크립트 훅 메서드: chapter-08/jshooks.html

methods: {
      enter(el, done) {
        console.log("enter");
        addEventListener(el, done);
        el.style.animationName = "bounceIn"
        el.style.animationDuration = "1.5s";
      },
      leave(el, done) {
        console.log("leave");
        addEventListener(el, done);
        el.style.animationName = "bounceIn"
        el.style.animationDuration = "1.5s";
        el.style.animationDirection = "reverse";
      },
      beforeEnter(el) {
        console.log("before enter");
      },
      afterEnter(el) {
        console.log("after enter");
      },
      enterCancelled(el) {
        console.log("enter cancelled");
      },
      beforeLeave(el) {
        console.log("before leave");
      },
      afterLeave(el) {
        console.log("after leave");
      },
      leaveCancelled(el) {
        console.log("leave cancelled");
      }
}