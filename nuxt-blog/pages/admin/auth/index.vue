<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
import axios from "axios";

export default {
  layout: "admin",

  name: "AdminAuthPage",

  layout: "admin",

  components: {
    AppControlInput,
    AppButton,
  },

  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },

  methods: {
    onSubmit() {
      let authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+process.env.apiKey;
      if (!this.isLogin) {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+process.env.apiKey;
      } 
      axios
        .post(
          authUrl,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
