import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const mutations = {
  SET_IS_LOGGED_IN(state, payload) {
    state.isLoggedIn = payload
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
  RESET: state => {
    Object.assign(state, getDefaultState());
  }
}

const getDefaultState = () => {
  return {
    token: '',
    user: {}
  }
}

export default new Vuex.Store({
  state: {
    token: '',
    user: {},
    isLoggedIn: false
  },
  mutations,
  actions: {
    login: ({ commit }, { token, user }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      commit('SET_IS_LOGGED_IN', true)
    },
    logout: ({ commit }) => {
      commit('RESET', '');
      commit('SET_IS_LOGGED_IN', false)
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },
    getUser: state => {
      return state.user;
    }
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
