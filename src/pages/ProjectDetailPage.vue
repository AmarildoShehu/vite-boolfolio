<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import ProjectCard from '../components/projects/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: "PostDetailPage",
    components: { ProjectCard, AppLoader },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            axios.get(endpoint + this.$route.params.id)
                .then(res => { this.project = res.data; })
                .catch(err => { console.error(err.message) })
                .then(() => { this.isLoading = false; })
        }
    },
    created() {
        this.getProject();
    }
}; 
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>

<style scoped></style>