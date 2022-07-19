import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { name: null, role: null },
    isLoggedIn: false,
  },
  getters: {
  },
  mutations: {
    setName(state, userName) {
      state.user.name = userName
    },

    setRole(state, userRole) {
      state.user.role = userRole
    }
  },
  actions: {
    setName(context, userData) {
      context.commit('setName', userData)
    },

    setRole(context, userData) {
      context.commit('setRole', userData)
    }
  },
  modules: {
  }
})
