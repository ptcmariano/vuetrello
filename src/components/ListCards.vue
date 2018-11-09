<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <blockquote>
          <p>Cards: <v-btn color="info" @click="loadCardsTrello()">Carregar cards</v-btn></p>
          <v-list two-line>
            <template v-for="card in cards">
              <v-list-tile :key="card.idShort" >
                <v-list-tile-content>
                  <v-list-tile-title v-html="card.idShort"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="card.name"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>
export default {
  data () {
    return {
      cards: [
        {
          'id': '5bce88c2bd7c36621679861c',
          'name': 'card 1',
          'idShort': 1
        },
        {
          'id': '5bce88c2bd7c36621679862c',
          'name': 'card 2',
          'idShort': 2
        }
      ]
    }
  },
  methods: {
    loadCardsTrello () {
      let idListTrello = process.env.ID_LIST
      let keyTrello = process.env.TRELLO_KEY
      let tokenTrello = process.env.TRELLO_TOKEN
      let self = this
      let xhr = new XMLHttpRequest()
      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          self.cards = JSON.parse(this.responseText)
        }
      })
      xhr.open('GET', 'https://api.trello.com/1/lists/' + idListTrello +
        '/cards?fields=name,idShort&key=' + keyTrello + '&token=' + tokenTrello)
      xhr.send(null)
    }
  }
}
</script>
