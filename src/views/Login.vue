<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "../pinia";
import Navbar from "../components/Navbar.vue";

const router = useRouter();
const username = ref("");
const password = ref("");

const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/store");
    useStore().permission();
    useStore().correctLogin();
  } else {
    useStore().incorrectLogin();
  }
  console.log(useStore().loginStatus);
};
</script>

<template>
  <Navbar />
  <form class="login-container" @submit.prevent="login()">
    <input
      class="login-info"
      type="text"
      placeholder="username"
      v-model="username"
    />
    <input
      class="login-info"
      type="password"
      placeholder="password"
      v-model="password"
    />
    <input class="login-info" type="submit" value="Login" />
  </form>
  <p class="correct" v-if="useStore().loginStatus === 2">Login Accepted</p>
  <div class="incorrect" v-else-if="useStore().loginStatus === 3">
    <p>Incorrect Login</p>
    <h1 class="greeting">HI MR QAYUM!!!</h1>
    <img src="../assets/cutey-pie.webp" />
    <audio autoplay>
      <source autoplay="true" src="../assets/scream.mp3" type="audio/mp3" />
    </audio>
  </div>
  <p v-else></p>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.login-info {
  background-color: white;
  font-family: "Montserrat", sans-serif;
}

.correct {
  color: greenyellow;
  font-family: "Montserrat", sans-serif;
}

.incorrect {
  color: red;
  font-family: "Montserrat", sans-serif;
}

img {
  width: 700px;
}

.greeting {
  color: red;
  font-size: 50px;
}
</style>
