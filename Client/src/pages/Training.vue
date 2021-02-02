<template>
  <div class="center">
    <small>{{ trainingId }}</small>

    <h4>{{training.email}}</h4>
    <h2>{{training.title}}</h2>
    <h4>נא ללחוץ על הקישור ולאשר את ההדרכה</h4>

    <h4>{{training.link}}</h4>
    <v-btn large round color="pink">
      סיימתי
      <v-icon left> done</v-icon>
    </v-btn>
  </div>
</template>


<script>
const axios = require("axios");

export default {
  mounted() {
    let self = this;
    this.trainingId = this.$route.params.trainingId;

    axios.get("/api/training/" + this.trainingId).then(function (res) {
      self.training = res.data.trainings[0];
      console.log(res.data.trainings[0]);
    });
  },
  components: {},

  mixins: [],

  data() {
    return {
      trainingId: "",
      training: {}
    };
  },

  watch: {},

  computed: {},

  methods: {},

};
</script>

<style scoped>
</style>
