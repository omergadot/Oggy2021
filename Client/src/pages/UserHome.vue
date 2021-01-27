<template>
  <div>
    <div class="center">
      <h1>היי, אני אוגי</h1>

      <h5>רוצה לשמור על הכשירות שלי?</h5>
      <h5>בואו נסיים את ההכשרות בהקדם האפשרי</h5>
    </div>
    <br>
    <div>
      <h4 class="right">רוצה להציל את אוגי?</h4>
      
      <mission></mission>
      <mission></mission>
      <mission></mission>
      <mission></mission>
    </div>
  </div>
</template>

<script>
import mission from "@/components/mission.vue";

export default {
  components: {
    mission
  },

  mixins: [],

  data() {
    return {};
  },
  created() {},

  mounted() {},
};
</script>

<style scoped>
</style>

