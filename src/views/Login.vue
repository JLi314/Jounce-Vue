<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import { useRouter } from "vue-router";
import { useStore } from "../pinia";
import { auth, firestore } from "../firebase";
import {
  signInAnonymously,
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
const loginEmail = ref("");
const loginPassword = ref("");

const guestCheckIn = async () => {
  const { user } = await signInAnonymously(auth);
  store.user = user;
  useStore().correctLogin();
  router.push("/store");
};

const registerViaEmail = async () => {
  if (passwordOne.value !== passwordTwo.value) {
    alert("Passwords do not match.");
    return;
  }
  const { user } = await createUserWithEmailAndPassword(
    auth,
    email.value,
    passwordOne.value
  );
  store.user = user;
  useStore().correctLogin();
  router.push("/store");
};

const loginViaEmail = async () => {
  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      loginEmail.value,
      loginPassword.value
    );
    store.user = user;
    useStore().correctLogin();
    router.push("/store");
  } catch (error) {
    alert("Incorrect Email or Password.");
    console.log(error);
  }
};

const registerViaGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  store.user = user;
  const { cart } = (await getDoc(doc(firestore, "carts", user.email))).data();
  store.cart = cart;
  useStore().correctLogin();
  router.push("/store");
};
</script>

<template>
  <Navbar />
  <div class="auth-container">
    <div class="one_click">
      <button class="login_btn" @click="registerViaGoogle()">
        Login via Google
      </button>
      <button class="login_btn" @click="guestCheckIn()">Guest Sign In</button>
    </div>
    <div>
      <div class="Eregister">
        <p class="text">Register via Email</p>
        <form class="setup" @submit.prevent="registerViaEmail()">
          <input
            class="info_box"
            v-model="email"
            type="email"
            placeholder="Email"
          />
          <input
            class="info_box"
            v-model="passwordOne"
            type="password"
            placeholder="Enter Password"
          />
          <input
            class="info_box"
            v-model="passwordTwo"
            type="password"
            placeholder="Re-enter Password"
          />
          <input type="submit" value="Register" class="submit_btn" />
        </form>
      </div>
      <div class="Elogin">
        <p class="text">Login via Email</p>
        <form class="login" @submit.prevent="loginViaEmail()">
          <input
            class="info_box"
            v-model="loginEmail"
            type="email"
            placeholder="Email"
          />
          <input
            class="info_box"
            v-model="loginPassword"
            type="password"
            placeholder="Password"
          />
          <input type="submit" value="Login" class="submit_btn" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.Eregister {
  margin-bottom: 10px;
}
.info_box {
  border: solid;
  border-width: 1px;
  border-radius: 2px;
  border-color: white;
  padding: 5px;
  color: white;
}
.auth-container {
  display: flex;
  gap: 5rem;
  justify-content: center;
}

.setup,
.login {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.submit_btn {
  color: white;
  font-family: "Montserrat", sans-serif;
  border: solid;
  border-radius: 2px;
  border-width: 2px;
  padding: 6px;
}

.one_click {
  margin-top: 120px;
}

.login_btn {
  display: grid;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  padding: 5px;
  border: solid;
  border-radius: 3px;
  border-color: rgb(178, 178, 178);
  margin: 0 auto;
  margin-bottom: 20px;
}

.login_btn:hover,
.submit_btn:hover {
  background-color: white;
  color: black;
  border-color: rgb(0, 0, 0);
}

.login_btn:active,
.submit_btn:active {
  background-color: rgb(61, 61, 61);
  border-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}
</style>
