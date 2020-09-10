// 코드 12-11 로그인 테스트하기: chapter-12/header-signin-test.js

it('로그인 버튼의 텍스트가 올바른지 확인', () => {
  const cartItemCount = 10;
  const wrapper = shallow(Header, {
    store, localVue, propsData: {cartItemCount}
  })

  expect(wrapper.findAll('button').at(0).text()).toBe("로그인");
})