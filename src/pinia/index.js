import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    movies: [],
    cart: [],
  }),
  actions: {
    addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });
    },
  },
});
