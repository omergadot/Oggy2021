  <template >
    <div>
    <v-btn @click="filterTrainings(true)" >
      פעילות
    </v-btn >
    <v-divider vertical style="margin-top: 0px"></v-divider>
    <v-btn @click="filterTrainings(false)" >
      לא פעילות
    </v-btn>
    <v-divider vertical style="margin-top: 0px"></v-divider>
    <v-btn @click="clearAll()"  >
      הכל
    </v-btn>

    <v-list two-line class="pad">
      <template v-for="(item, index) in displayedTrainings">
        <v-divider
            :key="index"
            :inset="true"
        ></v-divider>

        <v-list-tile
            :key="item.title"
            avatar
            @click="true"
        >
          <v-list-tile-avatar>
            <v-avatar >T</v-avatar>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.email"></v-list-tile-sub-title>
          </v-list-tile-content>

          <!--TODO: drag and drop -->
          <v-icon >drag_handle</v-icon>
          <v-icon @click="deleteTrain(item)">delete</v-icon>
        </v-list-tile>

      </template>
    </v-list>
    </div>
  </template>

<script>

const axios = require("axios");

export default {
  name: "trainManage",
  mounted() {
    let self = this;
    axios.get("/api/trainings").then(function (res) {
      self.trainings = res.data.trainings;
      self.displayedTrainings = res.data.trainings;
    });
  },
  methods: {
    deleteTrain (item) {
      axios.delete("api/delete/" + item._id).then(response => {
        this.displayedTrainings = this.displayedTrainings.filter(training => training._id !== item._id);
      }).catch(error => {
        alert("שגיאה במחיקת רעיון")
      })
    },
    filterTrainings(isActive) {
        this.displayedTrainings = this.displayedTrainings.filter(training => training.isActive === isActive);
    },
    clearAll() {
        this.displayedTrainings = this.trainings;
    }
  },
  data() {
    return {
      trainings: [],
      displayedTrainings: []
    }
  },

}
</script>

<style scoped>
.v-icon{
  padding-left: 3vw;
}
.pad{
  padding-left: 10vw ;
  padding-right: 10vw;
}

</style>