<template>
  <div id="app">
    <!-- Optional: A simple navigation bar -->
    <nav>
      <ul>
        <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/register">Register</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/product">Product</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/exchange-rate">Exchange Rate</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/myproduct">MyProduct</router-link></li>
        <!-- <li v-if="isAuthenticated"><router-link to="/translate">Translate</router-link></li> -->
        <li v-if="isAuthenticated"><button @click="logout">Logout</button></li>
      </ul>
    </nav>

    <!-- Display user details if authenticated -->
    <div v-if="isAuthenticated">
      <p>Welcome, {{ user.username }} (Email: {{ user.userId }})</p>
    </div>

    <!-- The router-view will display the component corresponding to the current route -->
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

// Set Axios default base URL for all API requests
axios.defaults.baseURL = 'http://localhost:5004';

export default {
  name: 'App',
  data() {
    return {
      user: {} // User data will be stored here after fetching
    };
  },
  computed: {
    isAuthenticated() {
      // Check if the user is authenticated by verifying the presence of a token
      return !!localStorage.getItem("token");
    }
  },
  methods: {
    async fetchUserDetails() {
  const token = localStorage.getItem('token');
  console.log('Sending token:', token);  // Log the token
  try {
    const response = await axios.get("/api/user/current-user", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    this.user = response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
},

    logout() {
      // Remove the JWT token from localStorage and reload the page
      localStorage.removeItem("token");
      window.location.reload();
      this.$router.push("/login");  // Redirect to the login page
    }
  },
  created() {
    // Fetch user details if authenticated
    if (this.isAuthenticated) {
      this.fetchUserDetails();
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