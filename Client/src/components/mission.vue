<template>
  <v-container>
    <hr />
    <v-layout row wrap justify-space-between>
      <v-flex xs4 class="center">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
          height="40px"
          contain
        ></v-img>
      </v-flex>
      <v-flex xs3> </v-flex>
      <v-flex xs4 class="center">
        <h3>{{misObj.title}}</h3>
        <h5>{{misObj.duration}}</h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props:["misObj"]
};
</script>

<style scoped>
</style>