var storeMember = {
  debug: true,
  state: {
    member: {id: 1}
  },
  setMemberAction (newValue) {
    if (this.debug) console.log('setmemberAction triggered with', newValue)
    this.state.member = newValue
  },
  clearMemberAction () {
    if (this.debug) console.log('clearmemberAction triggered')
    this.state.member = ''
  }
}
export default storeMember
