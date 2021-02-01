<template>
    <div class="center">
        <h1>הוספת הכשרה</h1>

        <v-form>
            <v-container>
                <v-layout align-center justify-center column>
                    <v-text-field
                            v-model="name"
                            label="אימייל"
                            required
                            class="field"
                    ></v-text-field>


                    <v-text-field
                            v-model="name"
                            label="כותרת"
                            required
                            class="field"
                    ></v-text-field>

                <v-textarea
                        solo
                        name="input-7-4"
                        label="תיאור (אופציונלי)"
                        class="field"
                ></v-textarea>


                    <v-btn large round color="pink" v-on:click="goBack">
                        הוספה
                    </v-btn>

                </v-layout>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        components: {},

        mixins: [],

        data() {
            return {
               items: ["טקסט","וידאו"]
            };
        },

        watch: {},

        computed: {},

        methods: {
            goBack() {
                this.$router.push('/admin-train')
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