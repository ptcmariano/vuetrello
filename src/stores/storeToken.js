// Simple State Management
var storeToken = {
  debug: true,
  state: {
    token: 'token'
  },
  setTokenAction (newValue) {
    if (this.debug) console.log('setTokenAction triggered with', newValue)
    this.state.token = newValue
  },
  clearTokenAction () {
    if (this.debug) console.log('clearTokenAction triggered')
    this.state.token = ''
  }
}

export default storeToken
