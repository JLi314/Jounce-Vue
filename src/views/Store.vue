<script setup>
import axios from "axios";
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Modal from "../components/Modal.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const selectedRecordId = ref(0);
const movies = ref(null);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};

movies.value = (
  await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_watch_monetization_types=flatrate&with_genres=99&with_keywords=9882`
  )
).data;
</script>

<template>
  <Navbar />
  <div v-if="movies" class="tiles">
    <div v-for="movie in movies.results">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        @click="toggleModal(movie.id)"
      />
    </div>
  </div>
  <Modal v-if="showModal" :id="selectedRecordId" @toggleModal="toggleModal()" />
</template>

<style scoped>
.tiles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: center;
}

img {
  width: 250px;
  height: 375px;
}
</style>
