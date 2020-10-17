<template>
  <div class="flex flex-col justify-center items-center mt-5 m-auto max-w-lg">
    <form class="w-full">
      <div class="mb-6">
        <label class="block text-gray-500 font-bold mb-3" for="username">
          Username
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          id="username"
          type="username"
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-500 font-bold mb-3" for="email">
          Email
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          id="email"
          type="email"
          v-model="email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-500 font-bold mb-3" for="password">
          Password
        </label>
        <input
          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
          id="password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="md:flex md:items-center">
        <button
          class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
          @click.prevent="send()"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register.vue",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    send() {
      axios
        .post("http://138.68.74.39/api/register", {
          name: this.username,
          email: this.email,
          password: this.password,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
