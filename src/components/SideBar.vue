<template>
  <nav class="flex flex-col w-48 p-4 bg-teal-400">

      <ul>
        <li
          class="flex items-center p-2"
          v-for="list in lists"
          :key="list.id"
        >
        <button @click="updateListId(list.id)" class="text-white">List{{list.id}}</button>
        </li>
      </ul>
  </nav>
</template>

<script>
import { store } from "../store";

export default {
  name: "SideBar.vue",
  store,
  data() {
    return {
      lists: store.state.lists,
    };
  },
  methods: {
    updateListId(id) {
      this.$emit('change-list-id', id);
    },
  }
};
</script>
