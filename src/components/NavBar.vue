<template>
  <div class="bg-teal-500 flex h-12 justify-center items-center" v-if="tokenExists">
    <router-link to="/todo-app/todos"><p class="text-white m-2">Todos</p></router-link>
    <router-link to="/todo-app" @click="logout"><p class="text-white m-2">Logout</p></router-link>
  </div>
  <div class="bg-teal-500 flex h-12 justify-center items-center" v-else>
    <router-link to="/todo-app/login"><p class="text-white m-2">Login</p></router-link>
    <router-link to="/todo-app/register"><p class="text-white m-2">Register</p></router-link>
  </div>
  <router-view></router-view>
</template>
<script>
import { store } from "../store";

export default {
  name: "Navbar.vue",
  store,
  methods: {
    logout() {
      store.state.token = null;
      return store.state.token;
    }
  },
  computed: {
    tokenExists() {
      return store.state.token ? true : false;
    },
  },
};
</script>
