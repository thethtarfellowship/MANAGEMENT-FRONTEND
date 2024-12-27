<template>
    <div>
      <h1>Your Products</h1>
      <!-- <div v-if="isAuthenticated"> -->
        <div v-if="products.length > 0">
          <ul>
            <li v-for="product in products" :key="product.id">
              <h3>{{ product.name }}</h3>
              <p>Price: ${{ product.price }}</p>
              <p>Stock: {{ product.stock }}</p>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>You don't have any products.</p>
        </div>
      </div>
      <!-- <div v-else>
        <p>You are not logged in.</p>
      </div> -->
    <!-- </div> -->
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "UserProducts",
    data() {
      return {
        products: [],
        isAuthenticated: false,
      };
    },
    computed: {
      // Check if the user is authenticated
      token() {
        return localStorage.getItem("token");
      },
    },
    methods: {
      async fetchUserProducts() {
        if (this.token) {
          try {
            // Fetch user products from API
            const response = await axios.get("http://localhost:5004/api/product/current-user-products", {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            });
            this.products = response.data; // Store products in the component's data
            this.isAuthenticated = true;
          } catch (error) {
            console.error("Error fetching user products:", error);
            this.isAuthenticated = false;
          }
        } else {
          this.isAuthenticated = false;
        }
      },
    },
    watch: {
      token(newToken) {
        if (newToken) {
          this.fetchUserProducts();
        }
      },
    },
    created() {
      this.fetchUserProducts();
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  