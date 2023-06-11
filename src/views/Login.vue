<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import { useStore } from "../pinia";
import { auth, firestore } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, doc } from "@firebase/firestore";

const store = useStore();
const router = useRouter();
const email = ref("");
const passwordOne = ref("");
const passwordTwo = ref("");

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Incorrect Password");
    return;
  }

  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  router.push("/store");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      email.value,
      passwordOne.value
    );
    store.user = user;
    router.push("/store");
  } catch (error) {
    console.log(error);
  }
};

const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  store.user = user;
  const { cart } = (await getDoc(doc(firestore, "carts", user.email))).data();
  store.cart = cart;
  router.push("/store");
};
</script>

<template>
  <Navbar />
  <div class="auth-container">
    <div>
      <h1>Register via Google</h1>
      <button @click="registerViaGoogle()">Google</button>
    </div>
    <div>
      <h1>Register via Email</h1>
      <form class="setup" @submit.prevent="registerViaEmail()">
        <input v-model="email" type="email" placeholder="email" />
        <input
          v-model="passwordOne"
          type="password"
          placeholder="Enter Password"
        />
        <input
          v-model="passwordTwo"
          type="password"
          placeholder="Re-enter Password"
        />
        <input type="submit" value="Register" />
      </form>
      <hr />
      <h1>Login via Email</h1>
      <form class="login" @submit.prevent="loginViaEmail()">
        <input v-model="email" type="email" placeholder="Email" />
        <input v-model="passwordOne" type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  gap: 5rem;
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<!-- <script setup>
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
</style> -->
