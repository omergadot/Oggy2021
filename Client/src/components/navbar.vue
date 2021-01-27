
<template>
  <div>
    <v-toolbar app fixed :clipped-left="true">
      <v-toolbar-items>
        <a-avatar></a-avatar>
        <v-btn flat >user </v-btn>
      </v-toolbar-items>
<v-spacer></v-spacer>
      <v-divider vertical style="margin-top: 0px"></v-divider>
      <v-toolbar-items>
        <v-btn flat >
          <v-icon>mdi_menu</v-icon>
        </v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
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


const axios = require("axios");

export default {
  components: {
  },

  data () {
    return {
      items: [
        { title: 'דשבורד', icon: 'mdi-home', route:'/admin-dash' },
        { title: 'ניהול הכשרות', icon: 'mdi-settings', route:'/admin-train' },
      ],
    }
  },

  watch: {},

  computed: {

  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>