<template>
  <div>
    <header>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Monomaniac+One&display=swap" rel="stylesheet">
      <div class="navbar">
        <nav>
          <h1 @click="navigateToHome" class="logo">BeFit</h1>
          <ul class="nav-links">
            <li><router-link to="/BMI-Rechner">BMI Zähler</router-link></li>
            <li><router-link to="/workout">Workout Plan erstellen</router-link></li>
            <li><router-link to="/calories">Kalorienbedarzähler</router-link></li>
          </ul>
          <div class="menu-right" :class="{ show: showDropdown }">
            <div @click="toggleDropdown" class="hamburger">☰</div>
            <div class="dropdown-content">
              <ul>
                <li v-if="!isLoggedIn"><router-link to="/login" @click="toggleDropdown">Anmelden</router-link></li>
                <li v-if="!isLoggedIn"><router-link to="/register" @click="toggleDropdown">Registrieren</router-link></li>
                <li v-else @click="handleLogout">Abmelden</li>
                <li v-if="isMobile"><router-link to="/BMI-Rechner" @click="toggleDropdown">BMI Zähler</router-link></li>
                <li v-if="isMobile"><router-link to="/workout" @click="toggleDropdown">Workout Plan erstellen</router-link></li>
                <li v-if="isMobile"><router-link to="/calories" @click="toggleDropdown">Kalorienbedarzähler</router-link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 BeFit</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);
const showDropdown = ref(false);
const isMobile = ref(false);

let auth;

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });

  window.addEventListener('resize', handleResize);
  handleResize();
});

const handleLogout = () => {
  signOut(auth).then(() => {
    isLoggedIn.value = false;
    router.push("/");
  });
};

const navigateToHome = () => {
  router.push("/");
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
