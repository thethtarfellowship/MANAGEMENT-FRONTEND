<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    created() {
      this.fetchProducts();
    },
  //   mounted() {
  //   // Reload the page when the component is mounted
  //   window.location.reload();
  // },
//     methods: {
//       async fetchProducts() {
//         try {
//           const response = await axios.get("http://localhost:5004/api/products");
//           this.products = response.data; // Ensure this matches the API response format
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         }
//       },
//     },
//   };
methods: {
    async fetchProducts() {
      try {
        // Get the token from localStorage (or sessionStorage)
        const token = localStorage.getItem("token");

        if (!token) {
          alert("You are not logged in!");
          return;
        }

        const response = await axios.get("https://localhost:5004/api/products", {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request header
          },
        });

        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
  </script>
  