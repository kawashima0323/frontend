<template>
  <header>
    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>MyPortfolioSite</v-toolbar-title>
      <v-tabs>
        <v-tab
        >
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
     <v-list>
  <v-list-item-group>
    <v-list-item>
      <v-list-item-title>アイテム1</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>アイテム2</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>アイテム3</v-list-item-title>
    </v-list-item>
  </v-list-item-group>
</v-list>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
 
<script>
 
export default {
  name: 'AppHeader',
  data () {
    return {
      drawer: false,
    }
  }
}
</script>
 
<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
 
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
 
.v-tabs {
  display: none;
 
  @include display_pc {
    display: block !important;
  }
}
</style>