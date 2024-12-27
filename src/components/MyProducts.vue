<template>
  <div class="user-products">
    <h1 class="title">Your Products</h1>
    <div v-if="products.length > 0">
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img src="https://via.placeholder.com/300x200" alt="product image" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">Price: ${{ product.price }}</p>
            <p class="product-stock">Stock: {{ product.stock }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="no-products">You don't have any products.</p>
    </div>
  </div>
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
    token() {
      return localStorage.getItem("token");
    },
  },
  methods: {
    async fetchUserProducts() {
      if (this.token) {
        try {
          const response = await axios.get("http://localhost:5004/api/products/current-user-products", {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          });
          this.products = response.data;
          this.isAuthenticated = true;
        } catch (error) {
          console.error("Error fetching user products:", error.response || error.message || error);
          this.isAuthenticated = false;
        }
      } else {
        this.isAuthenticated = false;
      }
    },
  },
  created() {
    this.fetchUserProducts();
  },
};
</script>

<style scoped>
/* General styles */
.user-products {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.title {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

/* Product List Container */
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

/* Product Card */
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px);
}

/* Product Image */
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #eee;
}

/* Product Info */
.product-info {
  padding: 15px;
}

.product-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.product-price,
.product-stock {
  font-size: 16px;
  color: #555;
  margin-top: 8px;
}

.no-products {
  text-align: center;
  font-size: 18px;
  color: #777;
}
</style>
