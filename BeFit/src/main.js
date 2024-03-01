import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Startseite.vue' // Importiere die Home-Komponente
import BmiCalculator from './views/BMI-Rechner.vue'
import WorkoutPlanner from './views/WorkoutPlanner.vue'
import CalorieCalculator from './views/CalorieCalculator.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home }, // Startseite
    { path: '/bmi', component: BmiCalculator },
    { path: '/workout', component: WorkoutPlanner },
    { path: '/calories', component: CalorieCalculator }
  ]
})

createApp(App).use(router).mount('#app')

