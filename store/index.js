export const state = () => ({
  User: []
})

export const mutations = {
  addUser(state, {email,password}) {
    state.User.push({email,password})
  }
}
