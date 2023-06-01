<script setup>
import Navbar from "../components/Navbar.vue";
import { useStore } from "../pinia";

const store = useStore();
</script>

<template>
  <Navbar />>
  <div>
    <div v-for="movie in store.cart">
      <h1 class="title">{{ movie.title }}</h1>
      <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster}`" />
    </div>
  </div>
</template>

<style scoped>
.title {
  color: white;
}
</style>
