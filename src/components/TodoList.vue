<template>
  <div id="todolist">
    <h1 class="text-purple-700">todos</h1>
    <input
      class="m-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      v-model="newTodo"
      type="text"
      placeholder="What needs to be done?"
      @keydown.enter="add"
    />
    <div>
      <ul class="todos">
        <li v-for="(todo, index) in filterTodo" :key="todo.name">
          <div>
            <input type="checkbox" v-model="todo.completed" />
            {{ todo.name }}
            <button @click="remove(index)">Effacer</button>
          </div>
        </li>
      </ul>
      <ul class="filter-btns m-4">
        <li>
          <button
            class="bg-purple-500 focus:outline-none hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-l"
            @click="filter = 'all'"
          >
            All
          </button>
        </li>
        <li>
          <button
            class="bg-purple-500 focus:outline-none hover:bg-purple-400 text-white font-bold py-2 px-4"
            @click="filter = 'notCompleted'"
          >
            Not Completed
          </button>
        </li>
        <li>
          <button
            class="bg-purple-500 focus:outline-none hover:bg-purple-400 text-white font-bold py-2 px-4 rounded-r"
            @click="filter = 'completed'"
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList.vue",
  data() {
    return {
      listTodos: [],
      newTodo: "",
      filter: "all",
    };
  },
  methods: {
    add() {
      this.listTodos.push({ name: this.newTodo, completed: false });
      this.newTodo = "";
    },
    remove(index) {
      this.listTodos.splice(index, 1);
    },
  },
  computed: {
    filterTodo() {
      if (this.filter === "completed")
        return this.listTodos.filter((todo) => todo.completed);
      else if (this.filter === "notCompleted")
        return this.listTodos.filter((todo) => !todo.completed);
      else return this.listTodos;
    },
  },
};
</script>
<style scoped>
ul {
  padding: 0;
}

li {
  list-style-type: none;
}

.todos {
  display: flex;
  flex-direction: column;
}

.filter-btns {
  padding: 0;
  display: flex;
  justify-content: center;
}
</style>
