<template>
  <div id="app">
    <!-- Optional: A simple navigation bar -->
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
        <li><router-link to="/exchange-rate">Exchange Rate</router-link></li>
        <li><router-link to="/translate">Translate</router-link></li>
        <li><button @click="logout">Logout</button></li>
      </ul>
    </nav>

    <!-- The router-view will display the component corresponding to the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      // Remove the JWT token from localStorage
      localStorage.removeItem("token");
      
      // Optionally, redirect to login page or home page
      this.$router.push("/login");  // Redirect to login page (adjust route as needed)
    }
  }
};
</script>

<style>
/* You can add styles for the navigation bar and layout */
nav {
  margin: 10px;
  background-color: #f8f8f8;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
}

nav li {
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
}
</style>
