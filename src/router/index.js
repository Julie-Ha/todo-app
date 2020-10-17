import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";
import TodoListApp from "../components/TodoListApp";

const routes = [
  {
    path: "/todo-app/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/todo-app/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/todo-app",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo-app/todos",
    name: "TodoListApp",
    component: TodoListApp,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
