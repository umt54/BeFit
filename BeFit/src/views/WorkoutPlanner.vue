<template>
    <div class="workout-planner">
      <h2>Workout Plan erstellen</h2>
  
      <!-- Durchlaufe die vorhandenen Übungen -->
      <div v-for="(exercise, index) in exercises" :key="index" class="exercise">
        <h3>{{ exercise.name }}</h3>
        <p>{{ exercise.description }}</p>
        <img :src="exercise.image" alt="Exercise Image" v-if="exercise.image">
      </div>
  
      <!-- Link für weitere Informationen -->
      <p>Übungen ohne Geräte: <a :href="link">Weitere Informationen</a></p>
  
      <!-- Formular zum Hinzufügen neuer Übungen -->
      <form @submit.prevent="addExercise">
        <label for="exerciseName">Übung:</label>
        <input type="text" id="exerciseName" v-model="newExercise.name" required>
        
        <label for="exerciseDescription">Beschreibung:</label>
        <textarea id="exerciseDescription" v-model="newExercise.description" required></textarea>
  
        <label for="exerciseImage">Bild (optional):</label>
        <input type="file" id="exerciseImage" @change="handleImageUpload">
  
        <button type="submit">Übung hinzufügen</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WorkoutPlanner',
    data() {
      return {
        exercises: [],
        newExercise: {
          name: '',
          description: '',
          image: null
        },
        link: 'https://l1nq.com/WorkoutZuHause'
      }
    },
    methods: {
      addExercise() {
        // Füge die neue Übung zum Array hinzu
        this.exercises.push({ ...this.newExercise });
        // Setze das Formular zurück
        this.newExercise.name = '';
        this.newExercise.description = '';
        this.newExercise.image = null;
      },
      handleImageUpload(event) {
        const file = event.target.files[0];
        // Konvertiere das Bild in Base64 und setze es in das Datenobjekt der neuen Übung
        this.newExercise.image = URL.createObjectURL(file);
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  /* Importiere die SCSS-Datei und verwende die Stile */
  @import './src/styles/WorkoutPlanner';
  </style>
  