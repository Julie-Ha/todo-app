<template>
  <div class="app">
    <NavBar />
    
  </div>
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  }
};
</script>

<style scoped>
.app {
  height: 100vh;
}
</style>
