<template>
  <div>
    <v-toolbar app fixed :clipped-left="true">
      <v-toolbar-items>
        <v-btn flat >אהלן אח שלי היקר</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn
          flat
          @click=""
          
          >סבאלה ואבאלה</v-btn
        >
        <v-divider vertical style="margin-top: 0px"></v-divider>
        <v-btn
          flat
          @click=""
          >אמא וסבתא</v-btn
        >
        <v-divider vertical style="margin-top: 0px"></v-divider>

        <v-btn
          flat
          @click=""
          >יוסי</v-btn
        >
        <v-divider vertical style="margin-top: 0px"></v-divider>

        <v-btn
          flat
          >נשיונל גיאוגרפיק</v-btn
        >
      </v-toolbar-items>
      
    </v-toolbar>
  </div>
</template>

<script>


const axios = require("axios");

export default {
  components: {
  },

  data() {
    return {
      
    };
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