<template>
  <v-container fluid>
    <v-slide-y-transition mode='out-in'>
      <v-layout column>
        <main>
          <h1>VueTrello</h1>
          <h2>Showing Trello data using VueJS</h2>
        </main>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<style scoped>
</style>

<script>
import storeToken from '../stores/storeToken'
export default {
  data () {
    return {
      objToken: {
        token: storeToken.state.token,
        idMember: '1'
      }
    }
  },
  methods: {
    // methods
  }
}
</script>
