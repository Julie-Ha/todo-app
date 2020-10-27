<template>
  <nav class="flex flex-col w-48 p-4 bg-teal-400">
    <ul>
      <li class="flex items-center p-2" v-for="list in displayLists" :key="list.id">
        <button @click="updateListId(list.id)" class="text-white">
          Liste {{ list.id }}
        </button>
      </li>
    </ul>
    <button @click="addList" class="text-white">Ajouter une liste</button>
  </nav>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import { router } from "../router";

export default {
  name: "SideBar.vue",
  store,
  router,
  data() {
    return {
    };
  },
  methods: {
    updateListId(id) {
      this.$emit("change-list-id", id);
    },
    addList() {
      let tokenStored = store.state.token;
      axios
        .post(
          "http://138.68.74.39/api/todolist",
          {
            name: "test2",
          },
          {
            headers: {
              Authorization: "Bearer " + tokenStored,
            },
          }
        )
        .then(function() {
          router.push("/todo-app/todos");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  beforeMount() {
    // let tokenStored = store.state.token;
    // axios
    //   .get("http://138.68.74.39/api/todolists", {
    //     headers: {
    //       Authorization: "Bearer " + tokenStored,
    //     },
    //   })
    //   .then(function(response) {
    //     store.state.lists = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  computed : {
    displayLists() {
      return store.state.lists;
    } 
  }
};
</script>
