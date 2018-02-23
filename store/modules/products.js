const state = {
  added: [1, 2],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.added
  }
}

// actions
const actions = {
  checkout ({ commit, state }, products) {
    commit('consoleInfo', 1)
  }
}

// mutations
const mutations = {
  consoleInfo (state, { id }) {
    console.info('consoleInfo')
    console.info('id', id)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
