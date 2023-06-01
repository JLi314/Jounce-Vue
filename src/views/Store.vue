<script setup>
import axios from "axios";
import { ref } from "vue";

const movies = ref(null);

movies.value = (
  await axios.get("https://api.themoviedb.org/3/movie/popular", {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
console.log(movies.value);
</script>

<template>
  <div v-if="movies" class="tiles">
    <div v-for="movie in movies.results">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
    </div>
  </div>
</template>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: center;
}
img {
  width: 250px;
}
</style>
