  <template>
    <v-banner two-line>
      <v-avatar
          slot="icon"
          color="deep-purple accent-4"
          size="40"
      >
        <v-icon
            icon="mdi-lock"
            color="white"
        >
          mdi-delete
        </v-icon>
      </v-avatar>

הכשרה קרקעית
      <template v-slot:actions>
        <v-btn
            text
            color="deep-purple accent-4"
        >

        </v-btn>
        <v-btn
            text
            color="deep-purple accent-4"
        >
          <v-icon
              icon="mdi-delete"
          >
            mdi-delete
          </v-icon>
        </v-btn>
      </template>
    </v-banner>
  </template>

<script>
export default {
name: "trainManage"
}
</script>

<style scoped>

</style>