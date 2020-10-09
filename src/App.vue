<template>
  <div class="home flex mb-4">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/SideBar";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.home {
    height: 100vh;
}
</style>