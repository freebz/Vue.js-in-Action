<template>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1><router-link :to="{name: 'iMain'}">
          {{sitename}}
        </router-link></h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <div v-if="!mySession">
          <button type="button"
              class="btn btn-default btn-lg"
              v-on:click="signIn">
            로그인  
          </button>
        </div>
        <div v-else>
          <button type="button"
              class="btn btn-default btn-lg"
              v-on:click="signOut">
            <img class="photo"
                :src="mySession.photoURL" />  
            로그아웃
          </button>
        </div>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link
            active-class="active"
            tag="button"
            class="btn btn-default btn-lg"
            :to="{name: 'Form'}">
          <span class="glyphicon glyphicon-shopping-cart">
            {{cartItemCount}}
          </span>
            체크아웃
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Header',
  data() {
    return {
      sitename: "Vue.js 애완용품샵"
    }
  },
  props: ['cartItemCount'],
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit('SET_SESSION', user || false)
    });
  },
  methods: {
    showCheckbout() {
      this.$router.push({name: 'Form'});
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log('로그인!');
      }).catch(function(error) {
        console.log('에러 ' + error)
      });
    },
    signOut() {
      firebase.auth().signOut().then(function() {
        // 로그아웃 성공
        console.log("로그아웃!")
      }).catch(function(error) {
        console.log("로그아웃 에러!")
        // 에러 발생
      });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
}
</script>

<!-- CSS 범위 지정을 위해 해당 컴포넌트에만 "scoped" 속성을 추가하세요. -->
<style scoped>
a {
  text-decoration: none;
  color: black;
}

.photo {
  width: 25px;
  height: 25px;
}

.router-link-exact-active {
  color: black;
}
</style>