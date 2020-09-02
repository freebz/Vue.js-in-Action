<!-- 코드 8-11 애완용품샵 트랜지션 요소에 애니메이션 추가하기: chapter-08/petstore/src/components/Main.vue -->

<transition name="bounce" mode="out-in">
  <span class="inventory-message"
      v-if="product.availableInventory - cartCount(product.id) === 0" key="0">
    품절!
  </span>
  <span class="inventory-message"
      v-else-if="product.availableInventory - cartCount(product.id) < 5" key="">
    {{product.availableInventory - cartCount(product.id)}} 남았습니다!
  </span>
  <span class="inventory-message"
      v-else key="">지금 구매하세요!
  </span>
</transition>