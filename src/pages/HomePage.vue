<script>
import AppLoader from '../components/AppLoader.vue';
import AppAlert from '../components/AppAlert.vue';
import axios from 'axios';
import ProjectList from '../components/projects/ProjectList.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',
    components: { ProjectList, AppAlert, AppLoader },
    data() {
        return {
            projects: [],
            isLoading: false,
            isAlertOpen: false,
        };
    },
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(endpoint)
                .then(res => {
                    console.log(res.data);
                    this.projects = res.data;
                })
                .catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },

        closeErrorAlert() {
            this.isAlertOpen = false;
            this.fetchProjects();
        }

    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <main class="container pt-3">
        <h1 class="text-center m-3">Boolpress</h1>
        <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects">
        </AppAlert>
        <AppLoader v-if="isLoading" />
        <ProjectList v-else :projects="projects" />
    </main>
</template>

<style></style>