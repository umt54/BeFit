<template>
  <div>
    <header>
        <h1 @click="showSection('home')" class="logo">BeFit</h1>
        <nav>
            <ul>
                <li><a href="#" @click="showSection('home')">Startseite</a></li>
                <li><a href="#" @click="showSection('about')">Workout Plan erstellen</a></li>
                <li><a href="#" @click="showSection('services')">BMI Zähler</a></li>
                <li><a href="#" @click="showSection('contact')">Kalorienbedarzähler</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home" v-show="currentSection === 'home'">
            <h2>Startseite</h2>
            <p>Hier könnten Informationen zur Startseite stehen.</p>
        </section>

        <section id="about" v-show="currentSection === 'about'">
            <h2>Workout Plan erstellen</h2>
            <p>Hier könnten Informationen zum Erstellen eines Workout-Plans stehen.</p>
        </section>

        <section id="services" v-show="currentSection === 'services'">
            <h2>BMI Zähler</h2>
            <p>Hier könnten Informationen zum BMI-Zähler stehen.</p>
        </section>

        <section id="contact" v-show="currentSection === 'contact'">
            <h2>Kalorienbedarzähler</h2>
            <p>Hier könnten Informationen zum Kalorienbedarfszähler stehen.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 BeFit</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentSection: 'home' // Standardmäßig die Startseite anzeigen
    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
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
  background-color: #1f6aff;
  color: #fff;
  padding: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 30px;
  justify-content: right;
}

nav ul li a {
  color: #fff;
  text-decoration:none
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
