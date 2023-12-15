<template>
  <div>
    <h2>Workout Creator</h2>
    <form @submit.prevent="addExercise">
      <label for="exercise">Übung:</label>
      <input v-model="exercise" type="text" required>
      
      <label for="sets">Sätze:</label>
      <input v-model.number="sets" type="number" required>
      
      <label for="reps">Wiederholungen:</label>
      <input v-model.number="reps" type="number" required>
      
      <button type="submit">Übung hinzufügen</button>
    </form>
    <ul>
      <li v-for="(exercise, index) in exercises" :key="index">
        {{ exercise.name }} - {{ exercise.sets }} Sätze, {{ exercise.reps }} Wiederholungen
      </li>
    </ul>
  </div>
</template>

<script setup>
  //
</script>
