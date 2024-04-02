<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'Boolpress',
  components: { AppHeader, },
};
</script>

<template>
  <AppHeader />
  <main class="container pt-3">

    <router-view />
  </main>
</template>

<style></style>