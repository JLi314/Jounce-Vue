<script>
import { ref } from "vue";
import axios from "axios";
import API_KEY from "./key.js";

export default {
  name: "MovieInfo",
  setup() {
    const moviePicker = ref("208230");
    const movieInfo = ref(null);

    const getInfo = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/${moviePicker.value}?api_key=${API_KEY}&append_to_response=videos`
      );
      movieInfo.value = response.data;
    };

    return { moviePicker, movieInfo, getInfo };
  },
};
</script>

<template>
  <div id="nature_menu_padding">
  <select v-model="moviePicker" id="nature_menu">
    <option class="menu-item" value="208230">Wild Isles</option>
    <option class="menu-item" value="116155">Frozen Planet II</option>
    <option class="menu-item" value="8724">Frozen Planet</option>
    <option class="menu-item" value="95171">Prehistoric Planet</option>
    <option class="menu-item" value="96323">The Green Planet</option>
    <option class="menu-item" value="135546">The Mating Game</option>
    <option class="menu-item" value="119815">
      Attenborough's Life in Colour
    </option>
    <option class="menu-item" value="115194">A Perfect Planet</option>
    <option class="menu-item" value="83880">Our Planet</option>
    <option class="menu-item" value="82953">Dynasties</option>
    <option class="menu-item" value="74313">Blue Planet II</option>
    <option class="menu-item" value="13579">The Blue Planet</option>
    <option class="menu-item" value="68595">Planet Earth II</option>
    <option class="menu-item" value="1044">Planet Earth</option>
    <option class="menu-item" value="64313">The Hunt</option>
    <option class="menu-item" value="61894">Life Story</option>
    <option class="menu-item" value="58703">
      Attenborough's Natural Curiosities
    </option>
    <option class="menu-item" value="46664">Africa</option>
    <option class="menu-item" value="16946">Life</option>
    <option class="menu-item" value="21145">Natural World</option>
  </select>
  <button class="button" @click="getInfo">Get</button>
  </div>
  

  <div v-if="movieInfo" id="documentary_info">
    <div id="nature_main_info">
      <img
        :src="`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`"
        alt=""
      />
      <div id="nature_overview">
        <h1 class="nature_info">{{ movieInfo.name }}</h1>
        <h3 class="nature_info">First Aired: {{ movieInfo.first_air_date }}</h3>
        <h4 class="nature_info">
          Number of Seasons: {{ movieInfo.number_of_seasons }}
        </h4>
        <h4 class="nature_info">
          Number of Episodes: {{ movieInfo.number_of_episodes }}
        </h4>
        <p class="nature_info">Overview: {{ movieInfo.overview }}</p>
      </div>
    </div>
    <iframe
      class="nature_trailer"
      :src="`https://www.youtube.com/embed/${
        movieInfo.videos.results
          .filter((trailer) => trailer.type === 'Trailer')
          .at(0).key
      }`"
      frameborder="1"
    ></iframe>
    <h2 class="nature_info">
      Latest Episode: {{ movieInfo.last_episode_to_air.name }}
    </h2>
    <h3 class="nature_info">
      Air Date: {{ movieInfo.last_episode_to_air.air_date }}
    </h3>
    <p class="nature_info">{{ movieInfo.last_episode_to_air.overview }}</p>
  </div>
  <!-- <div id="nature_menu_padding">
    <select name="listOfMovies" id="nature_menu">
      <option class="menu-item" value="208230">Wild Isles</option>
      <option class="menu-item" value="116155">Frozen Planet II</option>
      <option class="menu-item" value="8724">Frozen Planet</option>
      <option class="menu-item" value="95171">Prehistoric Planet</option>
      <option class="menu-item" value="96323">The Green Planet</option>
      <option class="menu-item" value="135546">The Mating Game</option>
      <option class="menu-item" value="119815">Attenborough's Life in Colour</option>
      <option class="menu-item" value="115194">A Perfect Planet</option>
      <option class="menu-item" value="83880">Our Planet</option>
      <option class="menu-item" value="82953">Dynasties</option>
      <option class="menu-item" value="74313">Blue Planet II</option>
      <option class="menu-item" value="13579">The Blue Planet</option>
      <option class="menu-item" value="68595">Planet Earth II</option>
      <option class="menu-item" value="1044">Planet Earth</option>
      <option class="menu-item" value="64313">The Hunt</option>
      <option class="menu-item" value="61894">Life Story</option>
      <option class="menu-item" value="58703">Attenborough's Natural Curiosities</option>
      <option class="menu-item" value="46664">Africa</option>
      <option class="menu-item" value="16946">Life</option>
      <option class="menu-item" value="21145">Natural World</option>
    </select>
    <button id="btn" class="button" @click="getMovieData()">Get</button>
  </div>

  <div id="documentary_info">
    <div id="nature_main_info">
      <img id="poster" class="nature_info" src="" />
      <div id="nature_overview">
        <h1 class="nature_info" id="title"></h1>
        <h3 class="nature_info" id="first_aired"></h3>
        <h4 class="nature_info" id="number_of_seasons"></h4>
        <h4 class="nature_info" id="number_of_episodes"></h4>
        <p class="nature_info" id="overview"></p>
      </div>
    </div>
    <div class="nature_trailer">
      <iframe id="trailer" hidden></iframe>
    </div>
    <h2 class="nature_info" id="latest_episode"></h2>
    <h3 class="nature_info" id="latest_air_date"></h3>
    <p class="nature_info" id="latest_overview"></p>
  </div> -->
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

img {
  width: 200px;
}

#documentary_info {
  padding: 25px;
  color: white;
  font-family: "Montserrat", sans-serif;
}

.nature_info {
  padding-top: 10px;
  font-family: "Montserrat", sans-serif;
}

#nature_main_info {
  display: flex;
  font-family: "Montserrat", sans-serif;
}

.menu-item {
  background-color: white;
  color: black;
}

#nature_overview {
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
}

#nature_menu {
  font-size: 15px;
  color: rgb(0, 0, 0);
  border-radius: 2px;
  padding: 2px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  background: white;
}

#nature_menu_padding {
  padding-left: 20px;
  padding-top: 10px;
}

.button {
  background-color: black;
  border: 1px solid white;
  border-radius: 2px;
  color: white;
  padding: 2px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin-left: 0.25rem;
}

.nature_trailer {
  width: 700px;
  height: 400px;
  display: block;
  margin-top: 15px;
  margin-bottom: 50px;
}
</style>
