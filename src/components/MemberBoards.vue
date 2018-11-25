<template>
  <v-container fluid>
    <v-slide-y-transition mode='out-in'>
      <v-layout column>
        <header>
          <h2>Member id: {{member.idMember}}</h2>
          <img :src="member.srcAvatar">
          <span>{{member.fullName}}</span>
        </header>
        <blockquote>
          <p>Boards: <v-btn color='info' @click='loadBoardsTrello()'>Carregar boards</v-btn></p>
          <v-list two-line>
            <template v-for='board in boards'>
              <v-list-tile :key='board.idShort' >
                <v-list-tile-content>
                  <v-list-tile-title v-html='board.idShort'></v-list-tile-title>
                  <v-list-tile-sub-title v-html='board.name'></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<style scoped>
</style>

<script>
import storeToken from '../stores/storeToken'
import storeMember from '../stores/storeMember'
export default {
  data () {
    return {
      boards: [
        {
          'id': '5be55ceb7f54cb80fb381719',
          'name': 'Name Board',
          'lists': [
            {
              'id': '5be55d96d2227187741fdb7e',
              'name': 'A Fazer',
              'closed': false,
              'idBoard': '5be55ceb7f54cb80fb381719',
              'pos': 8192,
              'subscribed': false
            },
            {
              'id': '5be55ceb7f54cb80fb38171a',
              'name': 'A fazer',
              'closed': false,
              'idBoard': '5be55ceb7f54cb80fb381719',
              'pos': 16384,
              'subscribed': false
            }
          ]
        }
      ],
      member: {
        id: '1',
        fullName: '',
        srcAvatar: ''
      }
    }
  },
  watch: {
    member () {
      this.$set(this.member, 'srcAvatar', 'https://trello-avatars.s3.amazonaws.com/' + this.member.avatarHash + '/50.png')
    }
  },
  mounted () {
    this.loadIdMember()
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
    loadBoardsTrello () {
      let keyTrello = process.env.TRELLO_KEY
      let tokenTrello = storeToken.state.token
      let self = this
      let xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          self.boards = JSON.parse(this.responseText)
        }
      })
      xhr.open('GET', 'https://api.trello.com/1/members/' + storeMember.state.member.id + '/boards?filter=open&fields=id%2Cname%2Clists&lists=open&memberships=none&organization=false' +
        '&organization_fields=name%2CdisplayName&token=' + tokenTrello + '&key=' + keyTrello)
      xhr.send(null)
    }
  }
}
</script>
