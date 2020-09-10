// 코드 12-9 테스트 클래스: chapter-12/header-classes-test.js

it('navbar 클래스가 첫 번째 div에 추가되는지 확인', () => {
    const cartItemCount = 10;
    const wrapper = shallow(Header, {
      store, localVue, propsData: {cartItemCount}
    })
    const p = wrapper.findAll('div').at(0);
    expect(p.classes()).toContain('navbar');
})