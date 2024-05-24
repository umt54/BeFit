import { createStore } from "vuex";

const store = createStore({
  state: {
    exercises: [],
  },
  mutations: {
    ADD_EXERCISE(state, exercise) {
      state.exercises.push(exercise);
    },
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
  },
  actions: {
    addExercise({ commit }, exercise) {
      commit("ADD_EXERCISE", exercise);
    },
    loadExercises({ commit }) {
      const exercises = [
        { name: "Push-up", description: "A basic push-up.", category: "Chest" },
        { name: "Squat", description: "A basic squat.", category: "Legs" },
        {
          name: "Bicep Curl",
          description: "A basic bicep curl.",
          category: "Arms",
        },
        { name: "Pull-up", description: "A basic pull-up.", category: "Back" },
        // Weitere Übungen hier hinzufügen
      ];
      commit("SET_EXERCISES", exercises);
    },
  },
  getters: {
    exercises: (state) => state.exercises,
    getExercisesByCategory: (state) => (category) => {
      return state.exercises.filter(
        (exercise) => exercise.category === category
      );
    },
  },
});

export default store;
