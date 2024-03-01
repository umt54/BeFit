<template>
  <div>
    <header>
      <h1 @click="navigateToHome" class="logo">BeFit</h1>
        <nav>
            <ul>
                <li><router-link to="/">Startseite</router-link></li>
                <li><router-link to="/bmi">BMI Zähler</router-link></li>
                <li><router-link to="/workout">Workout Plan erstellen</router-link></li>
                <li><router-link to="/calories">Kalorienbedarzähler</router-link></li>
            </ul>
        </nav>
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
  methods: {
    navigateToHome() {
      this.$router.push('/');
    }
  }
}
</script>


<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

main {
  padding: 20px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>



