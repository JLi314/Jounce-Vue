import { defineStore } from "pinia";

const useStore = defineStore("store", {
  state: () => ({
    user: "Big Boy Billy",
  }),
  actions: {
    greeting() {
      console.log(`Hello ${this.user}!`);
    },
  },
});

export default useStore;
