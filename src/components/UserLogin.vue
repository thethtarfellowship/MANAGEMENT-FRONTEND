<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/register">Register here</router-link></p>
  </div>
</template>

<script>
import axios from 'axios';  // Add this import statement
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response =await axios.post("http://localhost:5004/api/user/login", {
  email: this.email,
  password: this.password,
});


        localStorage.setItem("token", response.data.token);
        this.$router.push("/product");

      } catch (error) {
        console.error("Login failed", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add styles here */
</style>
