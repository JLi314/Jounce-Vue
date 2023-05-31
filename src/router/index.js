import { createRouter, createWebHistory } from "vue-router";
import Store from "../views/Store.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/store",
      component: Store,
    },
  ],
});

export default router;
