
// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HelloWorld.vue'; // Import Home component
import UserLogin from './components/UserLogin.vue'; // Import UserLogin component

import ExchangeRate from './components/ExchangeRate.vue'; // Import ExchangeRate component
import UserRegister from './components/UserRegister.vue';
import ProductList from './components/ProductList.vue';

import TranslateLang from './components/TranslateLang.vue';
// Define routes
const routes = [
  {
    path: '/', // The root path
    name: 'Home', // Route name
    component: Home, // Component to render
  },
  {
    path: '/login', // Path for login page
    name: 'Login',
    component: UserLogin, // Component to render for login
  },
  {
    path: '/register', // Path for registration page
    name: 'Register',
    component: UserRegister, // Component to render for registration
  },
  {
    path: '/product', // The root path
    name: 'ProductList', // Route name
    component: ProductList, // Component to render
  },
  {
    path: "/exchange-rate", // Add a route for the exchange rate page
    name: "ExchangeRate",
    component: ExchangeRate,
  },
  {
    path: "/translate", // Add a route for the exchange rate page
    name: "TranslateLang",
    component: TranslateLang,
  },
  // You can add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode (no hash in URL)
  routes, // Define the routes array here
});

export default router; // Export the router instance
