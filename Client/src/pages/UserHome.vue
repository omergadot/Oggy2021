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

      <div v-for="mis in missions" :key="mis._id">
        <mission v-on:click.native="moveToMission(mis._id)" :misObj="mis"></mission>
      </div>
    </div>
  </div>
</template>

<script>
import mission from "@/components/mission.vue";
const axios = require("axios");

export default {
  data() {
    return {
      missions: [],
    };
  },
  components: {
    mission,
  },

  mixins: [],

  methods: {
    moveToMission(missionId) {
      document.location.href = "/mission/" + missionId;
    },
    omer() {
      alert("??");
    },
  },

  created() {},

  mounted() {
    let self = this;
    axios.get("/api/trainings").then(function (res) {
      self.missions = res.data.trainings;
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

