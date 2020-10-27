<template>
  <div class="home flex">
    <SideBar v-on:change-list-id="changeListId($event)" />
    <TodoList :id="listId" />
  </div>
  
</template>

<script>
import SideBar from "./SideBar";
import TodoList from "./TodoList";

export default {
  name: "TodoListApp",
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
