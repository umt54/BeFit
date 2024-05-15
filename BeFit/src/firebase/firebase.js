// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0bx26NxmskL-o3QiSF64bpS1ERu5CK0s",
  authDomain: "vue-fire-7c265.firebaseapp.com",
  projectId: "vue-fire-7c265",
  storageBucket: "vue-fire-7c265.appspot.com",
  messagingSenderId: "355374809987",
  appId: "1:355374809987:web:939825a454cf944ff7ecb6",
  measurementId: "G-Z5V6LZMH1Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
