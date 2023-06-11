<script setup>
import axios from "axios";
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Modal from "../components/Modal.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showModal = ref(false);
const genre = ref(99);
const search = ref("");
const totalPages = ref(0);
const selectedRecordId = ref(0);
const movies = ref(null);

const toggleModal = (id) => {
  showModal.value = !showModal.value;
  selectedRecordId.value = id;
};

const getTMDBData = async (url, options, page) => {
  movies.value = (
    await axios.get(url, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        region: "US",
        language: "en",
        include_adult: false,
        page,
        ...options,
      },
    })
  ).data;
  totalPages.value = movies.value.total_pages;
  console.log(movies.value);
};

console.log;
</script>

<template>
  <Navbar />
  <div>
    <input type="search" placeholder="Barbie is behind you" v-model="search" />
    <button
      @click="
        getTMDBData('https://api.themoviedb.org/3/search/movie', {
          query: search,
        })
      "
    >
      Search
    </button>
    <select v-model="genre">
      <option value="99">Documentary</option>
      <option value="35">Comedy</option>
      <option value="878">Science Fiction</option>
    </select>
    <button
      @click="
        getTMDBData('https://api.themoviedb.org/3/discover/movie', {
          with_genres: genre,
        })
      "
    >
      Fetch
    </button>
  </div>
  <div>
    <button
      class="nav"
      @click="
        getTMDBData(
          'https://api.themoviedb.org/3/search/movie',
          {
            query: search,
          },
          page--
        )
      "
    >
      Previous
    </button>
    <p>{{ `Page ${page} of ${totalPages}` }}</p>
    <button
      class="nav"
      @click="
        getTMDBData(
          'https://api.themoviedb.org/3/search/movie',
          {
            query: search,
          },
          page++
        )
      "
    >
      Next
    </button>
  </div>
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

.nav {
  color: white;
}
</style>
