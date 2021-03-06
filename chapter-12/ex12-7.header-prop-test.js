// 코드 12-7 속성 테스트하기: chapter-12/header-prop-test.js

import {shallow, createLocalVue} from '@vue/test-utils';
import Header from '../src/components/Header.vue';
import Vuex from 'vuex';
import '../src/firebase';
import {store} from '../src/store/store';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Header.vue', () => {

  isMainThread('헤더에 올바르게 속성이 전달되었는지 확인', () => {
    const cartItemCount = 10;
    const wrapper = shallow(Header, {
      store, localVue, propsData: {cartItemCount}
    })
    expect(wrapper.vm.cartItemCount).toBe(cartItemCount);
  })

});