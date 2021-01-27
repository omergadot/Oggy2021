<template>
  <div class="noselect">
    <link
      href="https://fonts.googleapis.com/css?family=Assistant"
      rel="stylesheet"
    />

    <div>

      <navbar ></navbar>
      <navbar  v-show="isAdmin=='/admin-dash'" ></navbar>
    </div>

    <v-app style="margin-top: 100px">
      <div class="router-wrap">
        <router-view />
      </div>
    </v-app>
  </div>
</template>


<script>
import navbar from "@/components/navbar.vue";

const axios = require("axios");

export default {
  data() {
    return {};
  },

  components: {
    navbar,
  },

  computed: {

  },

  watch: {},

  mounted() {},
};
</script>

<style>
body {
  margin-top: 0;
  padding: 0;
  overflow: hidden;
}

.spaceArrow {
  margin-top: 10px;
  margin-bottom: 10px;
}

.md {
  transform: scale(1.2);
}

.l {
  transform: scale(1.7);
}

.xl {
  transform: scale(2);
}

.xs {
  transform: scale(0.8);
}

.xxl {
  transform: scale(2.7);
}

.right {
  text-align: right;
  justify-content: right;
}

.left {
  text-align: left;
  justify-content: left;
}

.center {
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.breathing:hover {
  transform: scale(1.2);
}

.breathing {
  transition: transform 0.2s;
}

.breathing_xl:hover {
  transform: scale(2.3);
}

#app {
  font-family: "Assistant" !important;
}

.custbtn {
  border-radius: 20px;
}

.spinner {
  margin-top: 20%;
}

.large-font {
  font-size: 5em;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

.rounded {
  border-radius: 10px;
}

::-webkit-scrollbar {
  width: 12px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 12px;
  background: #c2c9d2;
}

.noselect {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
</style>
