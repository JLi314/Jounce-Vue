import { createRouter, createWebHistory } from "vue-router";
import Store from "../views/Store.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/store",
      component: Store,
    },
  ],
});

export default router;
