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

const earth = () => {};
</script>

<template>
  <Navbar />
  <div class="auth-container">
    <div class="mercury"></div>
    <div class="venus"></div>
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
            placeholder="Password (6+ characters)"
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
    <div class="earth" @click="earth()"></div>
    <div class="mars"></div>
  </div>
</template>

<style scoped>
.mercury {
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-image: url(../assets/mercury.jpg);
  background-size: cover;
  box-shadow: -5px -5px 10px 1px #000 inset;
  animation: spin 35s linear alternate infinite;
  margin-left: 10px;
}
.venus {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-image: url(../assets/venus.jpg);
  background-size: cover;
  box-shadow: -25px -25px 40px 2px #000 inset;
  animation: spin 45s linear alternate infinite;
}
.earth {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background-image: url(../assets/earth-map.jpg);
  background-size: cover;
  box-shadow: -20px -20px 45px 2px #000 inset;
  animation: spin 20s linear alternate infinite;
}

.mars {
  border-radius: 50%;
  height: 120px;
  width: 120px;
  background-image: url(../assets/mars.jpg);
  background-size: cover;
  box-shadow: -15px -15px 40px 2px #000 inset;
  animation: spin 18s linear alternate infinite;
  margin-right: 15px;
}

@keyframes spin {
  100% {
    background-position: 100%;
  }
}

.text {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.Eregister {
  margin-bottom: 10px;
  margin-right: 15px;
}

.Elogin {
  margin-right: 15px;
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
  height: 80vh;
  justify-content: center;
  align-items: center;
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
