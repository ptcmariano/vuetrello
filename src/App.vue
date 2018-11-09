<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    
    <v-footer :fixed="true" app>
      <span>&copy; {{dateCopy}}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      dateCopy: 2018,
      clipped: false,
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Cards'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Cards Trello'
    }
  },
  name: 'VueTrello'
}
</script>
