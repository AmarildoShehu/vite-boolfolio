<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },

    computed: {
        pubblicationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}:${seconds}`;
        },

        updatedDate() {
            const date = new Date(this.project.updated_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}:${seconds}`;
        }

    }
}
</script>


<template>
    <section class="pt-3">
        <div class="card mb-3">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h2>{{ project.title }}</h2>
                <router-link v-if="!isDetail" class="btn btn-secondary"
                    :to="{ name: 'project-detail', params: { id: project.id } }">vedi
                    post</router-link>
            </div>
            <div class="card-body clearfix">
                <p>{{ project.content }}</p>
            </div>
            <div class="card-footer">
                <div class="d-flex justify-content-between">
                    <address>by:{{ project.user_id }}</address>
                    <span>creato il: {{ pubblicationDate }}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <address></address>
                    <span>aggiornato il: {{ updatedDate }}</span>
                </div>

            </div>
        </div>

    </section>

</template>

<style></style>