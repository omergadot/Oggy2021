<template>
  <div>
    <div class="center">

    </div>
    <br />
    <div>
      <h4 class="right">רוצה להציל את אוגי?</h4>

      <mission v-on:click.native="moveToMission('18')"></mission>
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

