<template >
  <div class="pad">
    <div class="center">
      <h1>היי, אני אוגי</h1>

      <h5>רוצה לשמור על הכשירות שלי?</h5>
      <h5>בואו נסיים את ההכשרות בהקדם האפשרי</h5>
    </div>
    <br />
    <div>
      <h4 class="right">רוצה להציל את אוגי?</h4>

      <div v-for="training in trainings" :key="training._id">
        <trainingView v-on:click.native="moveToTraining(training._id)" :training="training"></trainingView>
      </div>
    </div>
  </div>
</template>

<script>
import trainingView from "@/components/trainingView.vue";
const axios = require("axios");

export default {
  data() {
    return {
      trainings: [],
    };
  },
  components: {
    trainingView,
  },

  mixins: [],

  methods: {
    moveToTraining(trainingId) {
      document.location.href = "/training/" + trainingId;
    }
  },

  created() {},

  mounted() {
    let self = this;
    axios.get("/api/trainings").then(function (res) {
      self.trainings = res.data.trainings;
      console.log(res.data.trainings)
    });
  },
};
</script>

<style scoped>

.pad{
  padding-left: 10vw ;
  padding-right: 10vw;
}
</style>

