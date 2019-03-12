/**
 * Created by hy on.
 */
const state = {
  LOADING: false
}

const mutations = {
  showLoading(state) {
    state.LOADING = true
  },
  hideLoading(state) {
    state.LOADING = false
  }
}
const getters = {
  isLoading (state) {
    return state.LOADING
  }
}
const actions = {
  openLoading (contaxt, playload) {
    contaxt.commit('showLoading', playload)
  },
  closeLoading (contaxt) {
    contaxt.commit('hideLoading')
  }
}
module.exports = {
  namespaced:true,
  state,
  mutations,
  getters,
  actions
}
