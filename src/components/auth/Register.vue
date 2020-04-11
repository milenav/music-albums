<template>
  <div id="sign-up">
    <form @submit.prevent="onSignUp">
      <fieldset>
        <h1>Sign Up</h1>

        <p class="field field-icon">
          <label for="email">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="marg@gmial.com"
            v-model="email"
            @blur="$v.email.$touch"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.email.$error">
          <p v-if="!$v.email.required" class="error">Email is required!</p>
          <p v-else-if="!$v.email.email" class="error">Email is invalid!</p>
        </template>
        <!-- end if error -->

        <p class="field field-icon">
          <label for="password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            v-model="password"
            @blur="$v.password.$touch"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="error">Password is required!</p>
          <p
            v-else-if="!$v.password.minLength || !$v.password.maxLenght"
            class="error"
          >Password should be between 3 and 16 symbols!</p>
         
        </template>
        <!-- end if error -->

        <p class="field field-icon">
          <label for="re-password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input
            type="password"
            name="re-password"
            id="re-password"
            placeholder="******"
            v-model="rePassword"
            @blur="$v.rePassword.$touch"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs" class="error">Repeat Password does not match password!</p>
        </template>
        <!-- end if error -->
        <p>
          <button>Create Account</button>
        </p>

        <p class="text-center">
          Have an account?
          <router-link to="/sign-in">Log in</router-link>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
// import authAxios from "@/axios-auth";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, sameAs, email } from "vuelidate/lib/validators";
import authMixin from "../../mixins/auth-mixin";

export default {
  mixins: [validationMixin, authMixin],
  name: "SignUp",
  data: function() {
    return {
      username: "",
      email: "",
      password: "",
      rePassword: ""
    };
  },
  validations: {
    
    email: {
      required,
      email
    },
  
    password: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16),
    },
    rePassword: {
      sameAs: sameAs('password')
    }
  },
  methods: {
    onSignUp() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };
      // Project Settings -> Web API key
      this.onRegister(payload)
      // authAxios
      //   .post(
      //     "/accounts:signUp",
      //     payload
      //   )
      //   .then(res => {
      //     const { idToken, localId } = res.data;
      //     localStorage.setItem('token', idToken);
      //     localStorage.setItem('userId', localId);
      //     this.$router.push('/');
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   });
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
form {
  margin-top: 20px;
  margin: 20px auto;
  width: 40%;
}
fieldset {
  border-radius: 10px;
  padding: 20px;
}
input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select {
  border-color: black;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 100%;
}
i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}
a {
  color: #007bff;
}
.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.tel {
  padding-right: 20px;
}
.building {
  flex: 1 1 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
form .field {
  display: flex;
}
/* if error */
p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}
input.error {
  border-left-color: #a8413f;
}
</style>