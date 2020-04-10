<template>
    <form @submit.prevent="submitHandler">
          <h1>Registration</h1>
          <hr />
          <div class="form-group">
            <label for="email">Email</label>
            <v-text-field type="text" id="email" class="form-control" v-model="email" @blur="$v.email.$touch" />
            <template v-if="$v.email.$error">
                <small v-if="!$v.email.required" class="text-danger">Email is required</small>
                <small v-else-if="!$v.email.email" class="text-danger">Email is not valid</small>
            </template>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <v-text-field type="password" id="password" class="form-control" v-model="password" @blur="$v.password.$touch" />
            <template v-if="$v.password.$error">
                <small v-if="!$v.password.required" class="text-danger">Password is required</small>
                <small v-else-if="!$v.password.minLength" class="text-danger">Password is min 4 symbols</small>
            </template>
          </div>
    </form>
</template>

<script>
import authMixin from "../../mixins/auth-mixin";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [authMixin, validationMixin],
  name: 'Signin',
    data() {
        return {
            username: '',
            email: '',
            pass: '',
            rePass: '',
        show1: true,
        show2: true,
        show3: false,
        show4: false,
        text: 'Username',
        password: 'Password',
        }
    },
  validations: {
            username: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(20)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(20)
        }
  },
  methods: {
 
  },
};
</script>

<style></style>
