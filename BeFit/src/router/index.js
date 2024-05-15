// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Startseite.vue';
import Login from '../views/Login.vue';
import { auth } from '../firebase/firebase.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/BMI-Rechner',
    component: () => import('../views/BMI-Rechner.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (to.path === '/login' && currentUser) {
    next('/');
  } else {
    next();
  }
});

export default router;
