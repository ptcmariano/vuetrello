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
          <router-link :to="item.url">
            <v-icon v-html="item.icon"></v-icon> {{item.title}}
          </router-link>
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
      drawer: false,
      items: [
        {
          icon: 'class',
          url: '/',
          title: 'Home page'
        },
        {
          icon: 'bubble_chart',
          url: '/auth',
          title: 'Auth Page'
        },
        {
          icon: 'bookmark',
          url: '/listcards',
          title: 'Cards by lists'
        },
        {
          icon: 'event',
          url: '/memberboards',
          title: 'Boards by member'
        }
      ],
      miniVariant: false,
      title: 'Cards Trello'
    }
  },
  name: 'VueTrello'
}
</script>
