<template>
  <v-row dense>
    <v-col cols="6" class="mx-auto">
      <form @submit.prevent="register()">
        <h1>Register</h1>

        <!-- <v-text-field
          v-model="username"
          :error-messages="usernameErrors"
          :counter="20"
          label="Username"
          @blur="$v.username.$touch()"
        ></v-text-field> -->

        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
     required
          
          @blur="$v.email.$touch()"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :error-messages="passErrors"
          :counter="20"
          label="Password"
  
          
          @blur="$v.password.$touch()"
        ></v-text-field>

        <v-btn class="my-4">Create Account</v-btn>

        <p class="text-center">
          Have an account?
          <router-link to="/login">Log in</router-link>
        </p>
      </form>
    </v-col>
  </v-row>
</template>

<script>
import authMixin from "../../mixins/auth-mixin";
import { validationMixin } from "vuelidate";
import {

  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  mixins: [authMixin, validationMixin],
  name: "Register",
  data() {
    return {
      // username: "",
      email: "",
      password: ""
    };
  },
  validations: {
    // username: {
    //   required,
    //   minLength: minLength(4),
    //   maxLength: maxLength(20)
    // },
    email: {
     
      email
    },
    password: {

      minLength: minLength(6),
      maxLength: maxLength(20)
    }
  },
  beforeCreate() {
    console.log('tuk');
  },
  methods: {
    register() {
       this.$v.$touch();
           const payload = {
               email: this.email,
               password: this.password,
               returnSecureToken: true
           };

    this.onRegister(payload);
    console.log(payload);
    }
   
  },
  computed: {
    // usernameErrors() {
    //   const errors = [];
    //   if (!this.$v.username.$error) return errors;
    //   !this.$v.username.minLength &&
    //     errors.push("Username must be at least 4 characters long");
    //   !this.$v.username.maxLength &&
    //     errors.push("Username must be at most 20 characters long");
    //   !this.$v.username.required && errors.push("Username is required.");
    //   return errors;
    // },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      // !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passErrors() {
      const errors = [];
      if (!this.$v.password.$error) return errors;
      !this.$v.password.minLength &&
        errors.push("Password must be at least 6 characters long");
      !this.$v.password.maxLength &&
        errors.push("Password must be at most 20 characters long");
      // !this.$v.password.required && errors.push("Password is required.");
      return errors;
    }
  }
};
</script>

<style></style>
