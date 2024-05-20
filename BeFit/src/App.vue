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
          <div class="menu-right">
            <div @click="toggleDropdown" class="hamburger">☰</div>
            <div v-if="showDropdown" class="dropdown-content">
              <ul>
                <li><router-link to="/login">Anmelden</router-link></li>
                <li><router-link to="/register">Registrieren</router-link></li>
                <button @click="handleLogout" v-if="isLoggedIn">Abmelden</button>
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
import { onMounted, ref } from "vue"
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleLogout = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const navigateToHome = () => {
  // Implementiere deine Logik zum Navigieren zur Startseite hier
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const showDropdown = ref(false);

</script>
