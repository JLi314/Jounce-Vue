import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    movies: [],
    cart: [],
    loggedIn: false,
    loginStatus: 1,
  }),
  actions: {
    addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });
    },
    permission() {
      this.loggedIn = true;
    },
    noLogin() {
      this.loginStatus = 1;
    },
    correctLogin() {
      this.loginStatus = 2;
    },
    incorrectLogin() {
      this.loginStatus = 3;
    },
  },
});
