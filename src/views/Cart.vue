<script setup>
import Navbar from "../components/Navbar.vue";
import { useStore } from "../pinia";

const store = useStore();
</script>

<template>
  <Navbar />
  <h1 class="heading">You have purchased:</h1>
  <div>
    <div v-for="movie in store.cart">
      <p class="title">{{ movie.title }}</p>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
.title {
  color: white;
}
.heading {
  color: white;
  font-family: "Montserrat", sans-serif;
}
</style>
