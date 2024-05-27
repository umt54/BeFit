// src/stores/store.js
import { createStore } from "vuex";
import { db, auth } from "../js/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export default createStore({
  state: {
    exercises: [],
  },
  mutations: {
    setExercises(state, exercises) {
      state.exercises = exercises;
    },
    addExercise(state, exercise) {
      state.exercises.push(exercise);
    },
  },
  actions: {
    async fetchExercises({ commit }) {
      try {
        const user = auth.currentUser;
        if (user) {
          const q = query(
            collection(db, "exercises"),
            where("userId", "==", user.uid)
          );
          const querySnapshot = await getDocs(q);
          const exercises = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          commit("setExercises", exercises);
        }
      } catch (error) {
        console.error("Error fetching exercises: ", error);
      }
    },
    async addExercise({ commit }, exercise) {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = await addDoc(collection(db, "exercises"), {
            ...exercise,
            userId: user.uid,
          });
          commit("addExercise", { id: docRef.id, ...exercise });
        }
      } catch (error) {
        console.error("Error adding exercise: ", error);
      }
    },
  },
  getters: {
    exercises: (state) => state.exercises,
  },
});
