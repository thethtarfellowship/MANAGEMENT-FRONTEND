<!-- <template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          await axios.post("http://localhost:7058/api/user/register", {
            username: this.username,
            email: this.email,
            passwordHash: this.password,
          });
          alert("Registration successful!");
        } catch (error) {
          alert("Error: " + error.response.data);
        }
      },
    },
  };
  </script>
   -->

   <template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="username" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        email: "",
        password: "",
      };
    },
    methods: {
  async register() {
    try {
      const response = await axios.post("http://localhost:5004/api/user/register", {
        username: this.username, // Matches backend "Username"
        email: this.email,       // Matches backend "Email"
        password: this.password, // Matches backend "Password"
        role: "USER",            // Optional, backend defaults to "USER" if not provided
      });
      alert("Registration successful!");
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message || JSON.stringify(error.response.data);
        alert("Error: " + errorMessage);
      } else if (error.request) {
        alert("Error: No response from the server.");
      } else {
        alert("Error: " + error.message);
      }
    }
  },
},




  };
  </script>
  