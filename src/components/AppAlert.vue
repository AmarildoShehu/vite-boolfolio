<script>
export default {
    name: 'AppAlert',
    props: {
        show: {
            type: Boolean,
            required: true
        }
    },
    emits: ['close']
}
</script>

<template>
    <div v-if="show" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Si è verificato un errore</strong>
        <button type="button" class="btn-close" @click="$emit('close')" role="button" aria-label="Close"
            style="text-decoration: underline"></button>
    </div>

</template>

<style></style>
