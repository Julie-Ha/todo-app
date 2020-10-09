<template>
  <div class="home flex mb-4">
    <SideBar />
    <TodoList />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import TodoList from "../components/TodoList";

export default {
  name: "Home.vue",
  components: {
    SideBar,
    TodoList,
  },
  data() {},
  methods: {},
  computed: {},
};
</script>

<style scoped>
.home {
    height: 100vh;
}
</style>
