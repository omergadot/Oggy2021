<template>
  <div>
    <div class="center">
      <h1>היי, אני אוגי</h1>

      <h5>רוצה לשמור על הכשירות שלי?</h5>
      <h5>בואו נסיים את ההכשרות בהקדם האפשרי</h5>
    </div>
    <br />
    <div>
      <h4 class="right">רוצה להציל את אוגי?</h4>

      <mission v-on:click.native="moveToMission('18')"></mission>
      <mission v-on:click.native="moveToMission('19')"></mission>
      <mission v-on:click.native="moveToMission('20')"></mission>
      <mission v-on:click.native="moveToMission('21')"></mission>
    </div>
  </div>
</template>

<script>
import mission from "@/components/mission.vue";

export default {
  components: {
    mission,
  },

  mixins: [],

  methods: {
    moveToMission(missionId) {
      alert(missionId);
      document.location.href = "/mission/" + missionId;
    },
    omer() {
      alert("??");
    },
  },

  data() {
    return {};
  },
  created() {},

  mounted() {},
};
</script>

<style scoped>
</style>

