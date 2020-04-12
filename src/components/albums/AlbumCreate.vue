<template>
    <section id="sign-in">
    <div class="container mt-5">
      <div class="signin-content">
        <div class="signin-image">
          <figure>
            <img src="../../assets/Music-Headphone-PNG.png" alt="Music" />
          </figure>
        </div>

        <div class="signin-form">
          <h2 class="form-title">Login</h2>
          <form class="register-form" @submit.prevent="login">
            <div class="form-group">
              <label for="email">
                <span>
                  <v-icon>mdi-email</v-icon>
                </span>
              </label>
              <input
                v-model="email"
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
                @blur="$v.email.$touch"
              />

              <template v-if="$v.email.$error">
                <small v-if="!$v.email.required" class="text-danger">Email is required!</small>
                <small v-else-if="!$v.email.email" class="text-danger">Email is invalid!</small>
              </template>
            </div>

            <div class="form-group">
              <label for="password">
                <span>
                  <v-icon>mdi-lock</v-icon>
                </span>
              </label>
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                @blur="$v.password.$touch"
              />
              <template v-if="$v.password.$error">
                <small v-if="!$v.password.required" class="text-danger">Password is required</small>
                <small
                  v-else-if="!$v.password.minLength || !$v.password.maxLength"
                  class="text-danger"
                >Password should be between 6 and 15 symbols!</small>
              </template>
            </div>

            <button class="btn btn-lg btn-block text-white" style="background-color: #42A5F5">Login</button>

            <p class="text-center mt-3">
              Dont' have an account?
              <router-link to="/register">Register</router-link>
            </p>
          </form>
          <div class="social-login">
            <span class="social-label">Or login with</span>
            <ul class="socials">
              <li>
                <router-link to="#">
                  <v-icon>mdi-facebook</v-icon>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <v-icon>mdi-twitter</v-icon>
                </router-link>
              </li>
              <li>
                <router-link to="#">
                  <v-icon>mdi-google</v-icon>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>