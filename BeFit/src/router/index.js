import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home


        },
        {
            path: '/BMI-Rechner',
            component: () => import('../views/BMI-Rechner.vue')
            
        }
    
     ]
})

export default router 