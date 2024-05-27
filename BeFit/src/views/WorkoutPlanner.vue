<template>
  <div class="workout-planner">
    <h2>Workout Plan erstellen</h2>
    <div v-for="(exercise, index) in exercises" :key="index" class="exercise">
      <h3>{{ exercise.name }}</h3>
      <p>{{ exercise.description }}</p>
      <img :src="exercise.image" alt="Exercise Image" v-if="exercise.image">
    </div>
    <p>Übungen ohne Geräte: <a :href="link">Weitere Informationen</a></p>
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
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'WorkoutPlanner',
  setup() {
    const store = useStore();
    const exercises = computed(() => store.getters.exercises);
    const newExercise = ref({
      name: '',
      description: '',
      image: null,
    });
    const link = 'https://l1nq.com/WorkoutZuHause';

    const addExercise = () => {
      store.dispatch('addExercise', newExercise.value).then(() => {
        newExercise.value.name = '';
        newExercise.value.description = '';
        newExercise.value.image = null;
      });
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      newExercise.value.image = URL.createObjectURL(file);
    };

    onMounted(() => {
      store.dispatch('fetchExercises');
    });

    return { exercises, newExercise, addExercise, handleImageUpload, link };
  },
};
</script>

  
  <style lang="scss" scoped>
  /* Importiere die SCSS-Datei und verwende die Stile */
  @import './src/styles/WorkoutPlanner';
  </style>
  