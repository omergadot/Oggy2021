<template>
    <div class="center">
        <h1>הוספת הכשרה</h1>

        <v-form @submit.prevent="handleSubmit">
            <v-container>
                <v-layout align-center justify-center column>
                    <v-text-field
                            name="email"
                            v-model="email"
                            label="אימייל"
                            required
                            class="field"
                    ></v-text-field>


                    <v-text-field
                            name="title"
                            v-model="title"
                            label="כותרת"
                            required
                            class="field"
                    ></v-text-field>


                    <v-text-field
                            name="link"
                            v-model="link"
                            label="קישור"
                            required
                            class="field"
                    ></v-text-field>

                    <v-checkbox
                            v-model="isActive"
                            label="פעילה"
                    ></v-checkbox>

                    <div class="form-group">
                        <v-btn large round color="pink" type="submit">
                            הוספה
                        </v-btn>
                    </div>

                </v-layout>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {

        components: {},

        mixins: [],

        data() {
            return {
                email: null,
                title: null,
                link: null,
                isActive: false
            }
        },

        watch: {},

        computed: {},

        methods: {
            goBack() {
                this.$router.push('/admin-train')
            },
            handleSubmit() {
                let training = {email: this.email, title: this.title, link: this.link, isActive: this.isActive};

                axios.post('/api/training', training, {
                }).then((res) => {
                    console.log(res);
                    this.goBack();
                })
            }
        },

        mounted() {},
    };
</script>

<style scoped>
.field {
    display: block !important;
    width: 35rem;
}
</style>