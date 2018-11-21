var storeToken = {
  debug: true,
  state: {
    authenticated: false,
    token: 'token'
  },
  setTokenAction (newValue) {
    this.state.authenticated = true
    if (this.debug) console.log('setTokenAction triggered with', newValue)
    this.state.token = newValue
  },
  clearTokenAction () {
    if (this.debug) console.log('clearTokenAction triggered')
    this.state.token = ''
  }
}
export default storeToken
