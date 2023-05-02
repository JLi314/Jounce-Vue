<script setup>
import axios from 'axios';
import API_KEY from "./key.js";

const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
};

// document.getElementById("btn").addEventListener("click", async function () {
//   getMovieData();
// });

function getMovieID() {
  let movieID = parseInt(document.getElementById("nature_menu").value);
  return movieID;
}

async function getMovieData() {
  let movieData = await getTMDBData(
    `https://api.themoviedb.org/3/tv/${getMovieID()}?api_key=${API_KEY}&append_to_response=videos`
  );
  document.getElementById("poster").src =
    "https://image.tmdb.org/t/p/w500" + movieData.poster_path;
  document.getElementById("title").innerHTML = movieData.name;
  document.getElementById(
    "first_aired"
  ).innerHTML = `First Aired: ${movieData.first_air_date}`;
  document.getElementById(
    "number_of_seasons"
  ).innerHTML = `Number of Seasons: ${movieData.number_of_seasons}`;
  document.getElementById(
    "number_of_episodes"
  ).innerHTML = `Number of Episodes: ${movieData.number_of_episodes}`;
  document.getElementById("overview").innerHTML =
    "Overview: " + movieData.overview;

  const trailer = document.getElementById("trailer");
  document.getElementById("trailer").width = "700";
  document.getElementById("trailer").height = "400";
  trailer.style.display = "block";
  document.getElementById("trailer").src =
    "https://www.youtube.com/embed/" +
    movieData.videos.results
      .filter((trailer) => trailer.type === "Trailer")
      .at(0).key;

  document.getElementById(
    "latest_episode"
  ).innerHTML = `Latest Episode: ${movieData.last_episode_to_air.name}`;

  document.getElementById(
    "latest_air_date"
  ).innerHTML = `Air Date: ${movieData.last_episode_to_air.air_date}`;

  document.getElementById(
    "latest_overview"
  ).innerHTML = `${movieData.last_episode_to_air.overview}`;
}
</script>

<template>
  <div id="nature_menu_padding">
    <select name="listOfMovies" id="nature_menu">
      <option value="208230">Wild Isles</option>
      <option value="116155">Frozen Planet II</option>
      <option value="8724">Frozen Planet</option>
      <option value="95171">Prehistoric Planet</option>
      <option value="96323">The Green Planet</option>
      <option value="135546">The Mating Game</option>
      <option value="119815">Attenborough's Life in Colour</option>
      <option value="115194">A Perfect Planet</option>
      <option value="83880">Our Planet</option>
      <option value="82953">Dynasties</option>
      <option value="74313">Blue Planet II</option>
      <option value="13579">The Blue Planet</option>
      <option value="68595">Planet Earth II</option>
      <option value="1044">Planet Earth</option>
      <option value="64313">The Hunt</option>
      <option value="61894">Life Story</option>
      <option value="58703">Attenborough's Natural Curiosities</option>
      <option value="46664">Africa</option>
      <option value="16946">Life</option>
      <option value="21145">Natural World</option>
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
  </div>
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

#nature_overview {
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
}

#nature_menu {
  font-size: 15px;
  color: black;
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
  padding-top: 15px;
  padding-bottom: 50px;
}
</style>
