import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../js/firebase";

export default createStore({
  state: {
    exercises: [],
    workout: [],
  },
  mutations: {
    SET_EXERCISES(state, exercises) {
      state.exercises = exercises;
    },
    ADD_TO_WORKOUT(state, exercise) {
      state.workout.push(exercise);
    },
  },
  actions: {
    async fetchExercises({ commit }) {
      try {
        const querySnapshot = await getDocs(collection(db, "test_exercises"));
        const exercises = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("SET_EXERCISES", exercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    },
    addToWorkout({ commit }, exercise) {
      commit("ADD_TO_WORKOUT", exercise);
    },
  },
  getters: {
    getExercises: (state) => state.exercises,
    getWorkout: (state) => state.workout,
  },
});
