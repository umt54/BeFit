<template>
  <div class="workout-planner">
    <div class="left-panel">
      <h2>Verfügbare Übungen</h2>

      <!-- Filter für Übungskategorien -->
      <select v-model="selectedCategory" class="filters">
        <option value="Alle">Alle</option>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>

      <!-- Anzeige der verfügbaren Übungen -->
      <div v-for="exercise in filteredExercises" :key="exercise.id" class="exercise">
        <h3>{{ exercise.name }}</h3>
        <p>{{ exercise.description }}</p>
        <img :src="exercise.imageURL" alt="Exercise Image">
        <button @click="addToWorkout(exercise)">Zum Workout hinzufügen</button>
      </div>
    </div>

    <div class="right-panel">
      <h2>Dein Workout</h2>
      
      <!-- Filter für aktuelle Workouts -->
      <select v-model="selectedWorkoutCategory" class="filters">
        <option value="Alle">Alle</option>
        <option v-for="category in workoutCategories" :key="category">{{ category }}</option>
      </select>
      
      <!-- Anzeige des aktuellen Workouts -->
      <ul class="current-workout">
        <li v-for="exercise in filteredWorkout" :key="exercise.id">
          <div class="exercise">
            <h3>{{ exercise.name }}</h3>
            <p>{{ exercise.description }}</p>
            <img :src="exercise.imageURL" alt="Exercise Image">
            <button @click="removeFromWorkout(exercise)">Entfernen</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db, auth } from '../js/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'WorkoutPlanner',
  data() {
    return {
      exercises: [],
      workout: [],
      categories: ['Arm', 'Bein', 'Brust', 'Rücken', 'Schulter'],
      selectedCategory: 'Alle',
      selectedWorkoutCategory: 'Alle',
      userId: null // Neue Eigenschaft zur Speicherung der Benutzer-ID
    };
  },
  computed: {
    filteredExercises() {
      if (this.selectedCategory === 'Alle') {
        return this.exercises;
      } else {
        return this.exercises.filter(exercise => exercise.category === this.selectedCategory);
      }
    },
    workoutCategories() {
      return [...new Set(this.workout.map(exercise => exercise.category))];
    },
    filteredWorkout() {
      if (this.selectedWorkoutCategory === 'Alle') {
        return this.workout;
      } else {
        return this.workout.filter(exercise => exercise.category === this.selectedWorkoutCategory);
      }
    }
  },
  methods: {
    async fetchExercises() {
      try {
        const querySnapshot = await getDocs(collection(db, 'test_exercises'));
        this.exercises = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    },
    addToWorkout(exercise) {
      this.workout.push(exercise);
      this.saveWorkout();
    },
    removeFromWorkout(exercise) {
      this.workout = this.workout.filter(item => item.id !== exercise.id);
      this.saveWorkout();
    },
    saveWorkout() {
      if (this.userId) {
        localStorage.setItem(`workout_${this.userId}`, JSON.stringify(this.workout));
      }
    },
    loadWorkout() {
      if (this.userId) {
        const savedWorkout = localStorage.getItem(`workout_${this.userId}`);
        if (savedWorkout) {
          this.workout = JSON.parse(savedWorkout);
        }
      }
    },
    getCurrentUserId() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userId = user.uid;
          this.loadWorkout(); // Load the workout after setting the userId
        }
      });
    }
  },
  mounted() {
    this.getCurrentUserId();
    this.fetchExercises();
  }
};
</script>


<style lang="scss" scoped>
/* Importiere die SCSS-Datei und verwende die Stile */
@import './src/styles/WorkoutPlanner';
</style>

