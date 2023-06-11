// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvnEslroVXsXeXbo4DB7dSqT0OvJ1olRE",
  authDomain: "jounce---vue.firebaseapp.com",
  projectId: "jounce---vue",
  storageBucket: "jounce---vue.appspot.com",
  messagingSenderId: "1000071143413",
  appId: "1:1000071143413:web:88d09c9996d134ea6f0abc",
  measurementId: "G-5DVSWTQVMQ",
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
const analytics = getAnalytics(config);
export const auth = getAuth(config);
export const firestore = getFirestore(config);
