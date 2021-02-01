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

      <v-btn @click="activeTrains" >
      פעילות
      </v-btn >
      <v-divider vertical style="margin-top: 0px"></v-divider>
      <v-btn @click="inactiveTrains" >
        לא פעילות
      </v-btn>
      <v-divider vertical style="margin-top: 0px"></v-divider>
      <v-btn @click="getAll"  >
        הכל
      </v-btn>
    </div>
    <div class="center">
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

