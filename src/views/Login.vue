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
  } else {
    alert("Incorrect Username or Password");
  }
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
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  width: 30%;
}
.login-info {
  /* color: white;  */
  background-color: white;
}

#alert {
  color: red;
}
</style>
