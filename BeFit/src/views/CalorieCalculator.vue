<template>
    <div class="calorie-calculator">
      <h2 class="calculator-title">Kalorienbedarfsrechner</h2>
      <div class="input-group">
        <label for="gender">Geschlecht:</label>
        <select id="gender" v-model="gender">
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
        </select>
      </div>
      <div class="input-group">
        <label for="age">Alter:</label>
        <input type="number" id="age" v-model="age" />
      </div>
      <div class="input-group">
        <label for="height">Größe (cm):</label>
        <input type="number" id="height" v-model="height" />
      </div>
      <div class="input-group">
        <label for="weight">Gewicht (kg):</label>
        <input type="number" id="weight" v-model="weight" />
      </div>
      <div class="input-group">
        <label for="activity">Aktivitätslevel:</label>
        <select id="activity" v-model="activityLevel">
          <option value="sedentary">Wenig aktiv (Meistens sitzend)</option>
          <option value="lightlyActive">Etwas aktiv (Meistens stehend)</option>
          <option value="moderatelyActive">Aktiv (Meistens gehend)</option>
          <option value="veryActive">Sehr aktiv (Körperlich harte Arbeit)</option>
        </select>
      </div>
      <div class="input-group">
        <button @click="calculateCalories">Berechnen</button>
      </div>
      <div class="result" v-if="calories !== null">
        <h3>Ihr täglicher Kalorienbedarf beträgt: {{ calories }} Kalorien</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        gender: 'male',
        age: null,
        height: null,
        weight: null,
        activityLevel: 'sedentary',
        calories: null
      };
    },
    methods: {
      calculateCalories() {
        let baseCalories = 0;
        if (this.gender === 'male') {
          baseCalories = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
        } else {
          baseCalories = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
        }
        
        switch (this.activityLevel) {
          case 'sedentary':
            baseCalories *= 1.2;
            break;
          case 'lightlyActive':
            baseCalories *= 1.375;
            break;
          case 'moderatelyActive':
            baseCalories *= 1.55;
            break;
          case 'veryActive':
            baseCalories *= 1.725;
            break;
        }
        
        this.calories = Math.round(baseCalories);
      }
    }
  };
  </script>
  


  

<style lang="scss">
// Importieren Sie Ihre SCSS-Datei hier
@import 'src/styles/Kalorienbedarf.scss';
</style>