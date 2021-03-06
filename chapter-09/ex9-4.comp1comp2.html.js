// 코드 9-4 컴포넌트에 추가하기: chapter-09/comp1comp2.html

const comp1 = {
  template: `<div>
  <h1>이메일을 입력하세요</h1>
  <form>
    <div class="form-group">
      <input v-model="item"
          type="email"
          class="form-control"
          placeholder="Email Address" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary btn-lg" @click.prevent="pressed(item)">버튼1 누르기</button>
    </div>
  </form>
  </div>`,
  mixins: [myButton]
}

const comp2 = {
  template: `<div>
  <h1>전화번호를 입력하세요</h1>
  <form>
    <div class="form-group">
      <input v-model="item"
          class="form-control"
          placeholder="Phone Number" />
    </div>
    <div class="form-group">
      <button class="btn btn-warning btn-lg" @click.prevent="pressed(item)">버튼2 누르기</button>
    </div>
  </form>
  </div>`,
  mixins: [myButton]
}