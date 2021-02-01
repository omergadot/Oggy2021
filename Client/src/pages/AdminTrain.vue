<template>
  <div>
    <div class="center">
      <v-btn large round color="primary" class="addTraining" v-on:click.native="addTraining">
        הוספת הכשרה
      </v-btn>

      <h1>ניהול הכשרות</h1>
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
    <div>

    </div>
  </div>
</template>

<script>

export default {
  components: {

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
  .addTraining {
    right: 0;
    position: absolute;
  }
</style>

