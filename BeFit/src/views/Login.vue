<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p>Noch keinen Account? <router-link to="/register">Registrieren</router-link></p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const email = ref('');
    const password = ref('');

    const login = () => {
      store.dispatch('login', { email: email.value, password: password.value });
    };

    return {
      email,
      password,
      login
    };
  }
}
</script>
