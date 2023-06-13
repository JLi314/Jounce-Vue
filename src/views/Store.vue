<script setup>
import axios from "axios";
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Modal from "../components/Modal.vue";
const showModal = ref(false);
const keyword = ref(12425);
const search = ref("");
const totalPages = ref(0);
const page = ref(1);
const currentURL = ref("");
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
  currentURL.value = url;
};

console.log;
</script>

<template>
  <Navbar />
  <div class="find">
    <div>
      <input
        class="search_bar"
        type="search"
        placeholder="Qayum hates guns"
        v-model="search"
      />
      <button
        class="btn"
        @click="
          getTMDBData('https://api.themoviedb.org/3/search/movie', {
            query: search,
          }),
            (page = 1)
        "
      >
        Search
      </button>
    </div>
    <div>
      <select class="dropdown" v-model="keyword">
        <option value="310">Artificial Intelligence</option>
        <option value="3721">Health</option>
        <option value="6009">Mathematics</option>
        <option value="221355">Nature</option>
        <option value="490">Philosophy</option>
        <option value="6012">Physics</option>
        <option value="12425">Racism, Racism, Racism</option>
        <option value="9882">Space</option>
      </select>
      <button
        class="btn"
        @click="
          getTMDBData('https://api.themoviedb.org/3/discover/movie', {
            with_genres: 99,
            with_keywords: keyword,
          }),
            (page = 1)
        "
      >
        Athiesm
      </button>
    </div>
  </div>
  <div class="page_nav">
    <button
      class="nav"
      @click="
        getTMDBData(
          currentURL,
          {
            query: search,
            with_keywords: keyword,
          },
          page === 1 ? 1 : page--
        )
      "
    >
      Back
    </button>
    <p class="text">{{ `Page ${page} of ${totalPages}` }}</p>
    <button
      class="nav"
      @click="
        getTMDBData(
          currentURL,
          {
            query: search,
            with_keywords: keyword,
          },
          page === totalPages ? totalPages : page++
        )
      "
    >
      Next
    </button>
  </div>
  <div v-if="movies" class="tiles">
    <div v-for="movie in movies.results" :key="movie.id">
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

.text {
  color: white;
  font-family: "Montserrat", sans-serif;
  padding-top: 5px;
}

.btn,
.dropdown,
.search_bar {
  color: white;
  border-width: 2px;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: white;
  padding: 4px;
  margin: 2px;
  font-family: "Montserrat", sans-serif;
}

.search_bar {
  margin-left: 0px;
}

.page_nav {
  display: flex;
  gap: 1rem;
  padding-top: 10px;
  justify-content: center;
  padding-bottom: 5px;
}

.nav {
  color: white;
  border-width: 2px;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: white;
  padding: 4px;
  margin: 2px;
  font-family: "Montserrat", sans-serif;
}

.btn:hover,
.nav:hover {
  background-color: white;
  color: black;
  border-color: rgb(0, 0, 0);
}

.btn:active,
.nav:hover {
  background-color: rgb(61, 61, 61);
  border-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

.find {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
