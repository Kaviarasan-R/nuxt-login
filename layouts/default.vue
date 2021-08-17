<template>

  <v-app dark>
    <v-card
      primary
      flat
      tile
    >
      <v-app-bar app dense>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-icon class="mx-3" >mdi-rocket-launch</v-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom v-for="(item,i) in items" :key="i">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
              :to="item.to"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ item.title }}</span>
        </v-tooltip>
      </v-app-bar>    
    </v-card>

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer app v-model="drawer" >
      <v-list flat>
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>

</template>

<script>

export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Register',
          to: '/register'
        },
        {
          icon: 'mdi-account-lock',
          title: 'Login',
          to: '/login'
        }
      ],
      title: 'Welcome'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>