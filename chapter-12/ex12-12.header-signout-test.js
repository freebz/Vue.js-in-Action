// 코드 12-12 로그아웃 테스트하기: chapter-12/header-signout-test.js

it('로그아웃 버튼의 텍스트가 올바른지 확인', () => {
  const cartItemCount = 10;
  getters.sesstion = () => true;
  store = new Vuex.Store({getters, mutations})
  const wrapper = shallow(Header, {
    store, localVue, propsData: {cartItemCount}
  })
  expect(wrapper.findAll('button').at(0).text()).toBe("로그아웃");
})