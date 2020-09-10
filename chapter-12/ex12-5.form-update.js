// 코드 12-5 Form 컴포넌트 업데이트하기: chapter-12/form-update.js

...
        dontSendGift: '선물로 보내지 않기',
      },
      madeOrder: false
...
  methods: {
    submitForm() {
      this.madeOrder = true;
    }
  }
...