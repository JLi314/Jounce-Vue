<script setup>
import Navbar from "../components/Navbar.vue";
import { useStore } from "../pinia";

const store = useStore();

const bigFunction = (movie) => {
  const index = store.cart.indexOf(movie);
  store.removeFromCart(index);
};

console.log(store.cart);
</script>

<template>
  <Navbar />
  <h1 class="heading">You have purchased:</h1>
  <div class="cart-tile">
    <div v-for="movie in store.cart">
      <p class="title">{{ movie.title }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
      <button @click="bigFunction(movie)">Remove</button>
    </div>
  </div>
</template>

<style scoped>
.cart-tile {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  width: 250px;
  padding-left: 68px;
  animation-name: appear;
  animation-duration: 0.5s;
}

@keyframes appear {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

img {
  width: 200px;
}
.title {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  text-align: center;
}
.heading {
  color: white;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 20px;
  padding-left: 25px;
}

button {
  color: white;
  border: solid;
  border-color: white;
  padding: 2px;
  border-radius: 2px;
  width: 200px;
}
</style>
