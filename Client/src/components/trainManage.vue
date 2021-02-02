  <template >
    <v-list two-line class="pad">
      <template v-for="(item, index) in missions">
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
  </template>

<script>
import mission from "@/components/mission";

const axios = require("axios");

export default {
  name: "trainManage",
  mounted() {
    let self = this;
    axios.get("/api/trainings").then(function (res) {
      self.missions = res.data.trainings;
    });
  },
  methods: {
    deleteTrain (item) {
      // `this` inside methods points to the Vue instance
console.log(item._id)      // `event` is the native DOM event
      axios.delete("api/delete", item._id).then(response => {
      }).catch(error => {
        alert("שגיאה במחיקת רעיון")
      })
    }
  },
  data() {
    return {
      missions: [],
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