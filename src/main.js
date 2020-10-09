import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.css";
import { createStore } from 'vuex';
import 'es6-promise/auto';

const app = createApp(App);
const store = createStore({
    state () {
      return {
        count: 1
      }
    }
  });

app.use(store);

app.mount("#app");
