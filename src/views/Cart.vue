<script setup>
import Navbar from "../components/Navbar.vue";
import { useStore } from "../pinia";

const store = useStore();
</script>

<template>
  <Navbar />
  <h1 class="heading">You have purchased:</h1>
  <div class="cart-tile">
    <div v-for="movie in store.cart">
      <p class="title">{{ movie.title }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
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
</style>
