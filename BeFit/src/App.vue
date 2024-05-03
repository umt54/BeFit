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
            <li><router-link to="/bmi">BMI Zähler</router-link></li>
            <li><router-link to="/workout">Workout Plan erstellen</router-link></li>
            <li><router-link to="/calories">Kalorienbedarzähler</router-link></li>
          </ul>
          <div class="menu-right">
            <div class="hamburger">☰</div>
            <div class="dropdown-content">
              <ul>
                <li v-if="!isLoggedIn"><router-link to="/login">Anmelden</router-link></li>
                <li :class="{ 'disabled': !isLoggedIn }">Abmelden</li>
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

<script>
export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.$router.push('/');
    }
  }
}
</script>