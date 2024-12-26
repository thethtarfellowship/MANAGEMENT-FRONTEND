// // src/router.js
// import Vue from "vue";
// import Router from "vue-router";
// import Login from "@/components/UserLogin.vue";  // Assuming you create Login.vue
// import Register from "@/components/UserRegister.vue";  // Assuming you create Register.vue
// import Home from "@/components/HelloWorld.vue";  // Home page or main page

// Vue.use(Router);

// export default new Router({
//   routes: [
//     {
//       path: "/login",
//       name: "Login",
//       component: Login,
//     },
//     {
//       path: "/register",
//       name: "Register",
//       component: Register,
//     },
//     {
//       path: "/",
//       name: "Home",
//       component: Home,
//     },
//   ],
// });
// src/router.js

// import { createRouter, createWebHistory } from 'vue-router';  // Correct import for Vue 3

// const routes = [
 
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HelloWorld.vue'; // Import Home component
import UserLogin from './components/UserLogin.vue'; // Import UserLogin component
// import Register from './components/UserRegister.vue'; // Import Register component

import UserRegister from './components/UserRegister.vue';
import ProductList from './components/ProductList.vue';
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
  // You can add more routes as needed
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode (no hash in URL)
  routes, // Define the routes array here
});

export default router; // Export the router instance
