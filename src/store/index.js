import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    login: false
  },
  mutations: {
    setLogin(state, data) {
      state.login = data
    }
  },
  actions: {},
  modules: {},
  getters: {
    getLogin(state) {
      return state.login
    }
  }
})