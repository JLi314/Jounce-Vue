import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    movies: [],
    cart: [],
    loggedIn: false,
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
  },
});
