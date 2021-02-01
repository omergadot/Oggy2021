
<template>
  <div>
    <v-toolbar app fixed dark :clipped-left="true">
      <v-toolbar-items>
        <v-avatar
            color="primary"
            size="56">
          U
        </v-avatar>
        <v-btn flat >user </v-btn>
      </v-toolbar-items>
<v-spacer></v-spacer>
      <v-toolbar-items>

        <v-divider vertical style="margin-top: 0px"></v-divider>
        <v-btn flat to="/admin-train"  v-if="this.isAdmin">
          ניהול הכשרות
        </v-btn>
        <v-divider vertical style="margin-top: 0px"></v-divider>

        <v-btn  flat to="/admin-dash" v-if="this.isAdmin">
          dashboard
        </v-btn>
        <v-divider vertical style="margin-top: 0px"></v-divider>
        <v-btn flat to="/" >
          דף הבית
        </v-btn>


        <v-divider vertical style="margin-top: 0px"></v-divider>

        <v-btn >
          <v-icon>mdi_menu</v-icon>
        </v-btn>

      </v-toolbar-items>

    </v-toolbar>
    <Drawer  v-if="this.showD" ></Drawer>

  </div>
</template>
<!--<template>
  <v-card height="350px">
    <v-navigation-drawer
        absolute
        permanent
        right
    >



      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            dense
            router :to="item.route"
        >

          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>


      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>-->

<script>


import Drawer from "@/components/drawer";
const axios = require("axios");

export default {
  components: {
    Drawer
  },

  data () {
    return {
      isAdmin: true,
    };
  },

  watch: {},

  computed: {

  },

  mounted() {
    
  },

  methods: {
    isAdminFunc() {
      // for now is admin default
      this.isAdmin = true;
    }
  },
};
</script>

<style scoped>
.Drawer{
  position: relative;
  height: 100%;
}
</style>