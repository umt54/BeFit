import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Startseite.vue';
import BmiCalculator from '../views/BMI-Rechner.vue';
import WorkoutPlanner from '../views/WorkoutPlanner.vue';
import CalorieCalculator from '../views/CalorieCalculator.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/BMI-Rechner', component: BmiCalculator },
    { path: '/workout', component: WorkoutPlanner },
    { path: '/calories', component: CalorieCalculator },
    { path: '/register', component: Register },
    { path: '/login', component: Login }
  ]
});

export default router;
