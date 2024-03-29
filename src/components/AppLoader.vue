<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-info mx-2" role="status">
        </div>
        <div class="visually-hiden ml-2"> Loading...</div>
    </div>
</template>

<style lang="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(.5, .5, .5, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .spinner-border {
        width: 150px;
        height: 150px;
    }
}
</style>