<template>
  <div class="workout-planner">
    <h2>Workout Plan erstellen</h2>

    <div>
      <label for="category">Kategorie:</label>
      <select v-model="selectedCategory" @change="filterExercises">
        <option value="">Alle</option>
        <option value="Chest">Brust</option>
        <option value="Legs">Beine</option>
        <option value="Arms">Arme</option>
        <option value="Back">Rücken</option>
        <!-- Weitere Kategorien hinzufügen -->
      </select>
    </div>

    <!-- Durchlaufe die gefilterten Übungen -->
    <div v-for="(exercise, index) in filteredExercises" :key="index" class="exercise">
      <h3>{{ exercise.name }}</h3>
      <p>{{ exercise.description }}</p>
      <img :src="exercise.image" alt="Exercise Image" v-if="exercise.image">
    </div>

    <!-- Formular zum Hinzufügen neuer Übungen -->
    <form @submit.prevent="addExercise">
      <label for="exerciseName">Übung:</label>
      <input type="text" id="exerciseName" v-model="newExercise.name" required>

      <label for="exerciseDescription">Beschreibung:</label>
      <textarea id="exerciseDescription" v-model="newExercise.description" required></textarea>

      <label for="exerciseCategory">Kategorie:</label>
      <select id="exerciseCategory" v-model="newExercise.category" required>
        <option value="Chest">Brust</option>
        <option value="Legs">Beine</option>
        <option value="Arms">Arme</option>
        <option value="Back">Rücken</option>
        <!-- Weitere Kategorien hinzufügen -->
      </select>

      <label for="exerciseImage">Bild (optional):</label>
      <input type="file" id="exerciseImage" @change="handleImageUpload">

      <button type="submit">Übung hinzufügen</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'WorkoutPlanner',
  data() {
    return {
      newExercise: {
        name: '',
        description: '',
        category: '',
        image: null
      },
      selectedCategory: '',
      filteredExercises: []
    }
  },
  computed: {
    ...mapState(['exercises']),
    ...mapGetters(['getExercisesByCategory'])
  },
  methods: {
    ...mapActions(['addExercise', 'loadExercises']),
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.newExercise.image = URL.createObjectURL(file);
    },
    addExercise() {
      this.addExercise({ ...this.newExercise });
      this.newExercise.name = '';
      this.newExercise.description = '';
      this.newExercise.category = '';
      this.newExercise.image = null;
      this.filterExercises();
    },
    filterExercises() {
      if (this.selectedCategory) {
        this.filteredExercises = this.getExercisesByCategory(this.selectedCategory);
      } else {
        this.filteredExercises = this.exercises;
      }
    }
  },
  mounted() {
    this.loadExercises();
    this.filterExercises();
  }
}
</script>
  
  <style lang="scss" scoped>
  /* Importiere die SCSS-Datei und verwende die Stile */
  @import './src/styles/WorkoutPlanner';
  </style>
  