import { createRouter, createWebHistory } from "vue-router";
import Store from "../views/Store.vue";
import Login from "../views/Login.vue";
// import Purchase from "../views/Purchase.vue";

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
    // {
    //   path: "/purchase",
    //   component: Purchase,
    // },
  ],
});

export default router;