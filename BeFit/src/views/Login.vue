<template>
  <div class="login-container">
    <h1>Login</h1>
    <div class="input-group">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Email" v-model="email" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" v-model="password" />
    </div>
    <button @click="login">Submit</button>
    <button @click="signInWithGoogle">Sign In with Google</button>
    <p class="create-account">
      <a @click="goToRegister">Account erstellen</a>
    </p>
  </div>
</template>



<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  // Einfache Validierung
  if (!validateEmail(email.value)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return;
  }
  if (!validatePassword(password.value)) {
    alert("Das Passwort muss mindestens 6 Zeichen lang sein.");
    return;
  }

  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully logged in!");
      router.push('/');
    })
    .catch((error) => {
      console.error("Error logging in:", error);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  // Implementiere Google-Authentifizierung hier
};

const goToRegister = () => {
  router.push('/register');
};

// Einfache Funktionen zur Validierung von E-Mail und Passwort
const validateEmail = (email) => {
  // Einfache Überprüfung auf gültige E-Mail-Adresse
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password) => {
  // Überprüfung auf Mindestlänge des Passworts
  return password.length >= 6;
};
</script>



<style lang="scss">
@import 'src/styles/login.scss';
</style>
