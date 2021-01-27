<template>
    <div>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        components: {
        },

        mixins: [],

        data() {
            return {
                trainings: []
            };
        },
        created() {},

        mounted() {
            axios
                .get('http://localhost:8080/api/trainings')
                .then(response => (this.trainings = response.trainings))
        },
    };
</script>

<style scoped>
</style>

