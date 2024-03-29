<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: { ProjectCard },
    props: { projects: Array },
};
</script>

<template>
    <section id="Projects-card">
        <div>
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
            <!-- <h3 v-else>Non ci sono Posts</h3> -->
        </div>

    </section>
</template>


<style></style>