<template>
  <div>
    <h1>Login</h1>
    <form>
      <label>Email</label>
      <input type="email" v-model="email" />
      <label>Password</label>
      <input type="password" v-model="password" />
      <input @click.prevent="send()" type="submit" value="Ok" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {store} from "../store";
import {router} from "../router";

export default {
  name: "Login.vue",
  store,
  router,
  data() {
    return {
      email: "",
      password: "",
      
    };
  },
  methods: {
    send() {
      axios
        .post("http://138.68.74.39/api/login", {
          email: this.email,
          password: this.password,
        })
        .then(function(response) {
          let token = response.data.token;
          store.state.token = token;
          router.push("/");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
