<template>
  <v-list>
    <v-divider
        :key="index"
        :inset="true"
    ></v-divider>

    <v-list-tile
        :key="training.title"
        avatar
        @click="true"
    >
      <v-list-tile-avatar>
        <v-avatar >T</v-avatar>
      </v-list-tile-avatar>

      <v-list-tile-content>
        <v-list-tile-title v-html="training.title"></v-list-tile-title>
        <v-list-tile-sub-title v-html="training.email"></v-list-tile-sub-title>
      </v-list-tile-content>

      <!--TODO: drag and drop -->
      <v-icon >drag_handle</v-icon>
    </v-list-tile>
  </v-list>

  </template>

<script>
export default {
  props:["training"]
};
</script>

<style scoped>
</style>