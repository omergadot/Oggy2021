  <template >
    <v-list two-line class="pad">
      <template v-for="(item, index) in missions">
        <v-subheader
            v-if="item.title"
            :key="item.title"
        >
          {{ item.title }}
        </v-subheader>

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
          <v-icon @click="deleteTrain">delete</v-icon>
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
    deleteTrain: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
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
.v-icon {
  border: none;
  margin-left:  2vw;
}

.pad{
  padding-left: 10vw ;
  padding-right: 10vh;
}

</style>