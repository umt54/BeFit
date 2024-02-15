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
            <div>
              <label for="age">Alter:</label>
              <input type="number" id="age" v-model="age" placeholder="Alter eingeben">
            </div>
            <div>
              <label for="gender">Geschlecht:</label>
              <select id="gender" v-model="gender">
                <option value="male">Männlich</option>
                <option value="female">Weiblich</option>
              </select>
            </div>
            <div>
              <label for="weight">Gewicht (kg):</label>
              <input type="number" id="weight" v-model="weight" placeholder="Gewicht eingeben">
            </div>
            <div>
              <label for="height">Größe (cm):</label>
              <input type="number" id="height" v-model="height" placeholder="Größe eingeben">
            </div>
            <div>
              <label for="activity-level">Aktivitätslevel:</label>
              <select id="activity-level" v-model="activityLevel">
                <option value="sedentary">Sitzend</option>
                <option value="lightly-active">Leicht aktiv</option>
                <option value="moderately-active">Moderat aktiv</option>
                <option value="very-active">Sehr aktiv</option>
                <option value="extra-active">Extrem aktiv</option>
              </select>
            </div>
            <button @click="calculateCalories">Kalorienbedarf berechnen</button>
            <div v-if="calories !== null">
              <p>Ihr geschätzter täglicher Kalorienbedarf beträgt: {{ calories }} kcal</p>
            </div>
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
      currentSection: 'home', 
      age: null,
      gender: 'male',
      weight: null,
      height: null,
      activityLevel: 'sedentary',
      calories: null
    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
    },
    calculateCalories() {
      // Kalorienberechnungslogik hier implementieren
      // Beispiel:
      let baseCalories = this.gender === 'male' ? 66.47 + (13.75 * this.weight) + (5.003 * this.height) - (6.75 * this.age) : 655.1 + (9.563 * this.weight) + (1.85 * this.height) - (4.676 * this.age);
      let activityMultiplier = {
        'sedentary': 1.2,
        'lightly-active': 1.375,
        'moderately-active': 1.55,
        'very-active': 1.725,
        'extra-active': 1.9
      };
      let totalCalories = baseCalories * activityMultiplier[this.activityLevel];
      this.calories = Math.round(totalCalories);
    }
  }
}
</script>

<style lang="scss">
// Importieren Sie Ihre SCSS-Datei hier
@import 'src/styles/Kalorienbedarf.scss';
</style>

<style lang="scss">
// Importieren Sie Ihre SCSS-Datei hier
@import 'src/styles/ResponsivHeader.scss';
</style>


<style scoped>

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
}

footer {
  background-color: hsl(55, 100%, 50%);
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}


</style>

