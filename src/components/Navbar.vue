<script setup>
import { useRouter } from "vue-router";
import { useStore } from "../pinia";
const router = useRouter();
</script>

<template>
  <div class="topnav">
    <button class="nav-btn" @click="router.push('/')">Home</button>
    <button class="nav-btn" @click="router.push('/login')">Login</button>
    <button
      class="nav-btn"
      v-if="useStore().loggedIn"
      @click="router.push('/store')"
    >
      Store
    </button>
    <button
      class="nav-btn"
      v-if="useStore().loggedIn"
      @click="router.push('/cart')"
    >
      Cart
    </button>
  </div>
</template>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #000000;
}

.topnav a {
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-family: "Montserrat", sans-serif;
}

.topnav a:hover {
  background-color: whitesmoke;
  color: black;
}

.nav-btn {
  background-color: rgb(0, 0, 0);
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 14px 16px;
  border: 0px;
  font-size: 17px;
  font-family: "Montserrat", sans-serif;
}

.nav-btn:hover {
  background-color: whitesmoke;
  color: black;
}
</style>
