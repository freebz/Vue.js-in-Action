<!-- 코드 7-15 메인 템플릿 만들기: chapter-07/petstore/src/components/Main.vue -->

<template>
  <div>
  <my-header :cartItemCount="cartItemCount"></my-header>
  <main>
    <div v-for="product in sortedProducts">
      <div class="row">
        <div class="col-md-5 col-md-offset-0">
          <figure>
            <img class="product" v-bind:src="product.image">
          </figure>
        </div>
        <div class="col-md-6 col-md-offset-0 description">
          <router-link tag="h1" :to="{name: 'Id', params: {id: product.id}}">{{product.
              title}}</router-link>
          <p v-html="product.description"></p>
          <p class="price">
            {{product.price | formatPrice}}
          </p>
          <button class="btn btn-primary btn-lg"
              v-on:click="addToCart(product)"
              v-if="canAddToCart(product)">장바구니 담기</button>
          <span class="inventory-message"
              v-if="product.availableInventory - cartCount(product.id) === 0">
            품절!
          </span>
          <span class="inventory-message"
              v-else-if="product.availableInventory - cartCount(product.id) < 5">
            Only {{product.availableInventory - cartCount(product.id)}} 남았습니다!
          </span>
          <span class="inventory-message"
              v-else>지금 구매하세요!
          </span>
          <div class="rating">
            <span v-bind:class="{'rating-active' :checkRating(n, product)}"
                v-for="n in 5">☆
            </span>
          </div>
        </div><!-- end of col-md-6 -->
      </div><!-- end of row -->
      <hr />
    </div><!-- end of v-for -->
  </main>
  </div>
</template>