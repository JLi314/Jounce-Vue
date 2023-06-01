<script setup>
import axios from "axios";
import { useStore } from "../pinia";

const store = useStore();
const props = defineProps(["id"]);

const movie = (
  await axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
      api_key: import.meta.env.VITE_API_KEY,
      region: "US",
      language: "en",
      include_adult: false,
    },
  })
).data;
</script>

<template>
  <Teleport to="body">
    <div class="modal-outer-container" @click.self="$emit('toggleModal')">
      <div class="modal-inner-container">
        <button class="close-btn" @click="$emit('toggleModal')">X</button>
        <div class="info" v-if="movie">
          <img
            class="modal-image"
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
          />
          <div class="modal-text">
            <h1 class="modal-info">{{ movie.title }}</h1>
            <h2 class="modal-info">{{ movie.release_date }}</h2>
            <p class="modal-info">{{ movie.overview }}</p>
            <p
              class="purchase-btn"
              @click="store.addToCart(movie.poster_path, movie.title)"
            >
              Purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal-outer-container {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #00000099;
  z-index: 5;
}

.modal-outer-container .modal-inner-container {
  background-color: #000000;
  width: clamp(250px, 100%, 900px);
  height: 50vh;
  position: relative;
}

.modal-outer-container .modal-inner-container button {
  position: absolute;
  right: 0px;
  padding: 1rem;
  border: none;
  background: #000000;
  font-weight: bold;
}

.modal-outer-container .modal-inner-container .icon {
  font-size: 1.25rem;
  color: rgb(255, 255, 255);
}

img {
  width: 200px;
}

.modal-info {
  color: white;
  font-family: "Montserrat", sans-serif;
  margin-right: 30px;
  padding: 5px;
}

.close-btn {
  color: white;
  font-size: 25px;
}

.info {
  display: flex;
}

.modal-image {
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 0px;
}

.modal-text {
  padding-top: 15px;
}

.purchase-btn {
  text-align: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 50px;
  padding: 2px;
  border: solid;
  border-width: 2px;
  border-radius: 3px;
  border-color: white;
  color: white;
  font-family: "Montserrat", sans-serif;
}
</style>
