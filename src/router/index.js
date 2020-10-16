import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import TodoListApp from "../components/TodoListApp";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todos",
    name: "TodoListApp",
    component: TodoListApp,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
