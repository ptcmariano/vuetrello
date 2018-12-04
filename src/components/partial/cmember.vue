<template>
  <v-container fluid>
    <v-slide-y-transition mode='out-in'>
      <v-layout align-center justify-center>
        <main v-if="!objToken.authenticated">
          <h2>Autenticate here:</h2>
          <section>
            <h3>Token {{objToken.token}}</h3>
            <p>Auth: <v-btn @click="loadToken()">Carregar Token</v-btn></p>
          </section>
        </main>
        <main v-else>
          <h2>Member id: {{member.idMember}}</h2>
          <img :src="member.srcAvatar">
          <span>{{member.fullName}}</span>
        </main>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<style scoped>
</style>

<script>
import storeToken from '../../stores/storeToken'
import storeMember from '../../stores/storeMember'
export default {
  name: 'cmember',
  data () {
    if (storeToken.state.authenticated) {
      this.loadIdMember()
    }
    return {
      objToken: {
        authenticated: storeToken.state.authenticated,
        token: storeToken.state.token
      },
      member: {}
    }
  },
  watch: {
    member () {
      this.$set(this.member, 'srcAvatar', 'https://trello-avatars.s3.amazonaws.com/' + this.member.avatarHash + '/50.png')
    }
  },
  methods: {
    loadIdMember () {
      let keyTrello = process.env.TRELLO_KEY
      let tokenTrello = storeToken.state.token
      let self = this
      let xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          storeMember.setMemberAction(JSON.parse(this.responseText))
          self.member = storeMember.state.member
        }
      })
      xhr.open('GET', 'https://api.trello.com/1/tokens/' + tokenTrello + '/member?fields=fullName,avatarHash,id&token=' + tokenTrello + '&key=' + keyTrello)
      xhr.send(null)
    },
    loadToken () {
      let keyTrello = process.env.TRELLO_KEY
      window.location = 'https://trello.com/1/authorize?expiration=1day&scope=read,write,account&response_type=fragment&name=VueTrello&key=' + keyTrello +
        '&callback_method=fragment&return_url=' + window.origin
    }
  }
}
</script>
