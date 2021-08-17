export const state = () => ({
  User: []
})

export const mutations = {
  add(state, {firstname,lastname,username,location,email,password2}) {
    state.User.push({
      firstname,
      lastname,
      username,
      location,
      email,
      password2
    })
  }
}
