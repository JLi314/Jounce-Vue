import { defineStore } from "pinia";
import { firestore } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

export const useStore = defineStore("store", {
  state: () => ({
    user: null,
    cart: [],
    loggedIn: false,
  }),
  actions: {
    correctLogin() {
      this.loggedIn = true;
      console.log(this.loggedIn);
    },

    async addToCart(poster, title) {
      this.cart.push({
        poster,
        title,
      });

      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    },
    async removeFromCart(index) {
      this.cart.splice(index, 1);
      await setDoc(doc(firestore, "carts", this.user.email), {
        cart: this.cart,
      });
    },
  },
});
