<template>
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
</template>
<script>
export default {
  name: "drawer",
  data () {
    return {
      items: [
        { title: 'דשבורד', icon: 'mdi-home',  route:'/admin-dash' },
        { title: 'ניהול הכשרות', icon: 'mdi-setting', route:'/admin-rain'},
      ],
    }
  },
  computed: {
    isAdmin () {
      return true
    }
  }
}
</script>

<style scoped>

</style>