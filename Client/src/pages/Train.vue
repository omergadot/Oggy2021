<template>
  <div class="center">
    <small>{{ missionId }}</small>

    <h2>מסלולי שדה</h2>
    <h4>נא לצפות בווידאו ולאשר את ההדרכה</h4>

    <v-btn large round color="pink">
      סיימתי
      <v-icon left> done</v-icon>
    </v-btn>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  components: {},

  mixins: [],

  data() {
    return {
      missionId: "",
    };
  },

  watch: {},

  computed: {},

  methods: {},

  mounted() {
    this.missionId = this.$route.params.missionId;
  },
};
</script>

<style scoped>
</style>
