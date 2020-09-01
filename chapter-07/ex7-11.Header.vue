<!-- 코드 7-11 헤더 템플릿: chapter-07/petsotre/src/components/Header.vue -->

<template>
  <div>

<header>
  <div class="navbar navbar-default">
    <div class="navbar-header">
      <h1><router-link :to="{name: 'iMain'}">{{sitename}}</router-link></h1>
    </div>
    <div class="nav navbar-nav navbar-right cart">
      <router-link active-class="active" tag="button" class="btn btn-default btn-lg"
          :to="{name: 'Form'}">
        <span class="glyphicon glyphicon-shopping-cart">
          {{cartItemCount}}
        </span>
          체크아웃
      </router-link>
    </div>
  </div>
</header>

  </div>
</template>