<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolpress',
  components: { AppHeader },
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        console.log(res.data);

        this.projects = res.data;
      })
    }
  },
  created() {
    this.fetchProjects();
  }
};
</script>

<template>

  <AppHeader />
  <main class="container">
    <h1>Boolpress</h1>

    <ul>
      <li v-for="project in projects" :key="project.id">
        <h3 v-text="project.title">

        </h3>
      </li>
    </ul>
  </main>



</template>

<style></style>