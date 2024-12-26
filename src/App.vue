<!-- <template>
  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UserLogin from './components/UserLogin.vue'; // Import UserLogin component
import Register from './components/UserRegister.vue'; // Import Register component

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
<template>
  <div id="app">
    <ProductList />
  </div>
</template>

<script>

import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    ProductList
  }
};
</script>

<style>
/* Your styles here */
</style> --> 
<template>
  <div id="app">
    <!-- Optional: A simple navigation bar -->
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li><router-link to="/product">Product</router-link></li>
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
