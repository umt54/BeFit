import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import router from '../router';

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyC0bx26NxmskL-o3QiSF64bpS1ERu5CK0s",
  authDomain: "vue-fire-7c265.firebaseapp.com",
  projectId: "vue-fire-7c265",
  storageBucket: "vue-fire-7c265.appspot.com",
  messagingSenderId: "355374809987",
  appId: "1:355374809987:web:939825a454cf944ff7ecb6",
  measurementId: "G-Z5V6LZMH1Z"
};

// Firebase-App initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        commit('SET_USER', auth.currentUser);
        router.push('/');
      } catch (error) {
        console.error(error);
        alert('Login fehlgeschlagen');
      }
    },
    async register({ commit }, { email, password }) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        commit('SET_USER', auth.currentUser);
        router.push('/');
      } catch (error) {
        console.error(error);
        alert('Registrierung fehlgeschlagen');
      }
    },
    async logout({ commit }) {
      await signOut(auth);
      commit('CLEAR_USER');
      router.push('/login');
    },
    fetchUser({ commit }) {
      auth.onAuthStateChanged(user => {
        if (user) {
          commit('SET_USER', user);
        } else {
          commit('CLEAR_USER');
        }
      });
    }
  }
};
