<template>
  <div>
    <v-app-bar color="#FDA5A4" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Music Albums</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red lighten-3--text text--red lighten-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link v-if="!isAuth" to="/register">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Register</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link v-if="!isAuth" to="/login">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link v-if="isAuth" to="/albums">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-headphones</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Albums</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/albums/:id">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Details</v-list-item-title>
            </v-list-item>
          </router-link>

              <a v-if="isAuth" @click="logout">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-check</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </a>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isAuth: Boolean
  },
  data() {
    return {
      drawer: false,
      group: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');

      this.$emit('onAuth', false);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.v-application a {
  color: #1e1818;
  text-decoration: none;
}
</style>