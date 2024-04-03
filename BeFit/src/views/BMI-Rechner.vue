<template>
    <main class="bmi-rechner">
      <h2>BMI Rechner</h2>
      
      <div class="input-group">
        <label for="gewicht">Gewicht (in kg):</label>
        <input type="number" id="gewicht" v-model="gewicht" required>
      </div>
      <div class="input-group">
        <label for="groesse">Größe (in cm):</label>
        <input type="number" id="groesse" v-model="groesse" required>
      </div>
      <button @click="berechneBMI">BMI Berechnen</button>
  
      <div v-if="ergebnisText" class="ergebnis">
        <h3>{{ ergebnisText }}</h3>
        <div class="bmi-balken-container">
          <div class="bmi-balken" :style="{ width: balkenBreite + '%', backgroundColor: balkenFarbe }"></div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
 export default {
  data() {
    return {
      gewicht: null,
      groesse: null,
      ergebnisText: '',
      balkenBreite: 0, // Prozentuale Breite des Balkens
      balkenFarbe: '#4CAF50', // Standardfarbe
    };
  },
  methods: {
    berechneBMI() {
      if (!this.gewicht || !this.groesse) {
        this.ergebnisText = 'Bitte Gewicht und Größe eingeben.';
        this.balkenBreite = 0; // Zurücksetzen der Balkenbreite
        return;
      }

      const groesseInMetern = this.groesse / 100;
      const bmi = this.gewicht / (groesseInMetern * groesseInMetern);
      this.setzeBalken(bmi);
      
      let bewertung = '';
      if (bmi < 18.5) {
        bewertung = 'Untergewicht';
      } else if (bmi >= 18.5 && bmi < 25) {
        bewertung = 'Normalgewicht';
      } else if (bmi >= 25 && bmi < 30) {
        bewertung = 'Übergewicht';
      } else {
        bewertung = 'Adipositas';
      }

      this.ergebnisText = `Dein BMI: ${bmi.toFixed(2)} (${bewertung})`;
    },
    setzeBalken(bmi) {
      // Normiere den BMI-Wert auf eine Skala von 0 bis 100
      // Angenommen, BMI-Werte reichen von 10 (min) bis 40 (max)
      const minBMI = 10;
      const maxBMI = 40;
      const normierterBMI = (bmi - minBMI) / (maxBMI - minBMI) * 100;
      this.balkenBreite = Math.min(Math.max(normierterBMI, 0), 100); // Stellt sicher, dass der Wert zwischen 0 und 100 liegt

      // Farbanpassung
      if (bmi < 18.5) {
        this.balkenFarbe = '#2196F3'; // Blau für Untergewicht
      } else if (bmi < 25) {
        this.balkenFarbe = '#4CAF50'; // Grün für Normalgewicht
      } else if (bmi < 30) {
        this.balkenFarbe = '#FFC107'; // Gelb für Übergewicht
      } else {
        this.balkenFarbe = '#F44336'; // Rot für Adipositas
      }
    }
  }
}


  </script>
  
  
  <style lang="scss">
  @import 'src/styles/BMI-Rechner.scss';
  </style>
  