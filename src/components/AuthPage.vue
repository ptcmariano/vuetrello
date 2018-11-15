<template>
  <v-container fluid>
    <v-slide-y-transition mode='out-in'>
      <v-layout column>
        <main>
          <h2>Autenticate here:</h2>
          <section>
            <h3>Token {{objToken.token}}</h3>
            <p>Auth: <v-btn @click="loadToken()">Carregar Token</v-btn></p>
          </section>
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
    if (this.$route.params[0] !== undefined && this.$route.params[0].length > 10) {
      storeToken.setTokenAction(this.$route.params[0])
    }
    return {
      objToken: {
        token: storeToken.state.token,
        idMember: '1'
      }
    }
  },
  methods: {
    loadToken () {
      let keyTrello = process.env.TRELLO_KEY
      window.location = 'https://trello.com/1/authorize?expiration=1day&scope=read,write,account&response_type=fragment&name=VueTrello&key=' + keyTrello +
        '&callback_method=fragment&return_url=' + window.origin
    }
  }
}
</script>
