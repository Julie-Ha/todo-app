import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login";
import Home from "../components/Home";
import Register from "../components/Register";

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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
