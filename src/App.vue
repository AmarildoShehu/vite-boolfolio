<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
import ProjectList from './components/projects/ProjectList.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolpress',
  components: { AppHeader, ProjectList },
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
  <main class="container pt-3">
    <h1 class="text-center m-3">Boolpress</h1>
    <ProjectList :projects="projects" />
  </main>



</template>

<style></style>