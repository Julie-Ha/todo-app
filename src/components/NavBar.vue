<template>
  <div class="nav" v-if="tokenExists">
    <router-link to="/"><p class="">Logout</p></router-link>
    <router-link to="/todos"><p class="">Todos</p></router-link>
  </div>
  <div v-else>
    <router-link to="/login"><p class="">Login</p></router-link>
    <router-link to="/register"><p class="">Register</p></router-link>
  </div>
  {{ token }}
  <router-view></router-view>
</template>
<script>
import { store } from "../store";

export default {
  name: "Navbar.vue",
  store,
  computed: {
    tokenExists() {
      return store.state.token ? true : false;
    },
  },
};
</script>
