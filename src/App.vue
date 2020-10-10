<template>
  <div class="home flex">
    <SideBar v-on:change-list-id="changeListId($event)" />
    <TodoList />
  </div>
</template>

<script>
import SideBar from "./components/SideBar";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    SideBar,
    TodoList
  },
  data() {
    return {
      listId: 1,
    };
  },
  methods: {
    changeListId(id) {
      this.listId = id;
    }
  } 
};
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>
