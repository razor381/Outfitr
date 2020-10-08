<template>
  <Home />
</template>

<script>
import './assets/css/tailwind.css';
import './assets/css/global.css';
import 'boxicons';

import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
