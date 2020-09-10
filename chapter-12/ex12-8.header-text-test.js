// 코드 12-8 텍스트 테스트하기: chapter-12/header-text-test.js

it('cartItemCount 텍스트가 제대로 표시되는지 확인', () => {
  const cartItemCount = 10;
  const wrapper = shallow(Header, {
    store, localVue, propsData: {cartItemCount}
  })
  const p = wrapper.find('span');
  expect(p.text()).toContain(cartItemCount)
})