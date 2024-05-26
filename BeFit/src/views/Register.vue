<template>
  <div class="register-container">
    <h1>Register</h1>
    <div class="input-group">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Email" v-model="email" />
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Password" v-model="password" />
    </div>
    <button @click="register">Submit</button>
    <button @click="signInWithGoogle">Sign In with Google</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import  { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  // Einfache Validierung
  if (!validateEmail(email.value)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    return;
  }
  if (!validatePassword(password.value)) {
    alert("Das Passwort muss mindestens 6 Zeichen lang sein.");
    return;
  }

  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
      console.log("Successfully registered!");
      router.push('/');
    })
    .catch((error) => {
      console.error("Error registering:", error);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  // Implementiere Google-Authentifizierung hier
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
@import 'src/styles/register.scss';
</style>