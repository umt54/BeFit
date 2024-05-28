// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Startseite.vue";
import BmiCalculator from "../views/BMI-Rechner.vue";
import WorkoutPlanner from "../views/WorkoutPlanner.vue";
import CalorieCalculator from "../views/CalorieCalculator.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  { path: "/", component: Home },
  { path: "/BMI-Rechner", component: BmiCalculator },
  { path: "/calories", component: CalorieCalculator },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  {
    path: "/workout",
    component: WorkoutPlanner,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Um einen Plan zu erstellen, müssen Sie sich anmelden.");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
