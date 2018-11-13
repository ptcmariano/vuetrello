<template>
  <v-container fluid>
    <v-slide-y-transition mode='out-in'>
      <v-layout column>
        <main>
          <h1>VueTrello</h1>
          <h2>Showing Trello data using VueJS</h2>
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
export default {
  data () {
    console.log(this)
    let tokenFind = this.$route.params.params !== undefined && this.$route.params.params.indexOf('token=') !== -1 ? this.$route.params.params.replace('token=', '') : 't0k3n'
    process.env.TRELLO_TOKEN = tokenFind
    return {
      objToken: {
        token: tokenFind,
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
