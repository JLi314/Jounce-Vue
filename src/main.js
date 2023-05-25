import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "./router";

const store = createPinia();

createApp(App).use(router).use(store).mount('#app');

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvnEslroVXsXeXbo4DB7dSqT0OvJ1olRE",
  authDomain: "jounce---vue.firebaseapp.com",
  projectId: "jounce---vue",
  storageBucket: "jounce---vue.appspot.com",
  messagingSenderId: "1000071143413",
  appId: "1:1000071143413:web:88d09c9996d134ea6f0abc",
  measurementId: "G-5DVSWTQVMQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);