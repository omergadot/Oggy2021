<template>
  <div>
    <div class="center">

      <h1>ניהול הכשרות</h1>
      <div>
        <v-btn fab dark small color="primary" class="addButton" v-on:click.native="addTraining">
          <v-icon dark>add</v-icon>
        </v-btn>
        <label>הוספת הכשרה</label>
      </div>
      <br />

      <trainManage ></trainManage>

    </div>


  </div>
</template>

<script>
import trainManage from "@/components/trainManage.vue";

export default {

  components: {
    trainManage,
  },

  mixins: [],

  methods: {
    addTraining() {
      this.$router.push("/add-training");
    }
  },

  data() {
    return {};
  },
  created() {},

  mounted() {},
};
</script>

<style scoped>
  .addButton {
    width: 20px !important;
    height: 20px !important;
  }
</style>

