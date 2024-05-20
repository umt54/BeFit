import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0bx26NxmskL-o3QiSF64bpS1ERu5CK0s",
  authDomain: "vue-fire-7c265.firebaseapp.com",
  projectId: "vue-fire-7c265",
  storageBucket: "vue-fire-7c265.appspot.com",
  messagingSenderId: "355374809987",
  appId: "1:355374809987:web:939825a454cf944ff7ecb6",
  measurementId: "G-Z5V6LZMH1Z"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')