<template>
  <div id="app">
    <v-app>
    <header-component @onAuth="isAuth = $event" :isAuth="isAuth"></header-component>
      <v-content>
        <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import HeaderComponent from './components/shared/Header.vue'

export default {
  name: 'App',
  data() {
    return {
      isAuth: localStorage.getItem('token') !== null
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
