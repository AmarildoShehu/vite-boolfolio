<script>
export default {
    name: "NotFoundPages"
}
</script>

<template>
    <section>
        <div class="vh-100 d-flex flex-column align-items-center justify-content-center">
            <h1>404 | Page not found</h1>
            <button class="mt-5 btn btn-secondary" @click="$router.back()">
                Go Back</button>
        </div>
    </section>
</template>

<style scoped></style>