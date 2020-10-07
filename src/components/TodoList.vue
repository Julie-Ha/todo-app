<template>
  <div
    id="todolist"
    class="flex flex-col justify-center items-center mt-5 m-auto max-w-lg"
  >
    <h1 class="text-4xl text-gray-500">Ma journée</h1>
    <h2 class="text-gray-600">{{ new Date().toLocaleDateString() }}</h2>
    <input
      class="m-4 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
      v-model="newTodo"
      type="text"
      placeholder="Ajouter une tâche"
      @keydown.enter="add"
    />
    <div>
      <ul class="flex justify-center">
        <li>
          <button
            v-bind:class="[
              filter === 'all' ? 'bg-teal-600' : filter !== 'all',
              'bg-teal-500',
            ]"
            class="focus:outline-none hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-l"
            @click="filter = 'all'"
          >
            Toutes
          </button>
        </li>
        <li>
          <button
            v-bind:class="[
              filter === 'notCompleted' ? 'bg-teal-600' : filter !== 'all',
              'bg-teal-500',
            ]"
            class="bg-teal-500 focus:outline-none hover:bg-teal-400 text-white font-bold py-2 px-4"
            @click="filter = 'notCompleted'"
          >
            À faire
          </button>
        </li>
        <li>
          <button
            v-bind:class="[
              filter === 'completed' ? 'bg-teal-600' : filter !== 'all',
              'bg-teal-500',
            ]"
            class="bg-teal-500 focus:outline-none hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-r"
            @click="filter = 'completed'"
          >
            Terminées
          </button>
        </li>
      </ul>
      <ul>
        <li
          class="flex items-center p-2"
          v-for="(todo, index) in filterTodos"
          :key="todo.name"
        >
          <input
            type="checkbox"
            v-model="todo.completed"
            class="form-checkbox border-1 border-teal-500 focus:shadow-none h-6 w-6 text-teal-500"
          />

          <input class="m-2" type="text" v-model="todo.name"/>
          <button class="focus:outline-none ml-auto" @click="remove(index)">
            <svg
              class="h-6 w-6 text-teal-500 hover:text-teal-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
      <p class="text-gray-700">Tâches restantes: {{countTodos}} </p>
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
    filterTodos() {
      if (this.filter === "completed")
        return this.listTodos.filter((todo) => todo.completed);
      else if (this.filter === "notCompleted")
        return this.listTodos.filter((todo) => !todo.completed);
      else return this.listTodos;
    },
    countTodos() {
      return this.listTodos.filter((todo) => !todo.completed).length;
    },
  },
};
</script>
