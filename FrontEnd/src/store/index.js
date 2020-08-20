import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from "axios";

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
  },
  SET_USERS: (state,users) => {
    state.users = users
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
    isLoggedIn: false,
    users: []
  },
  mutations,
  actions: {
    retrieveUsers: async ({commit}) => {
      const response = await axios.get('http://localhost:3000/user',{withCredentials:true})
      commit('SET_USERS', response.data)
    },
    login: async ({ commit,dispatch }, { token, user }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      commit('SET_IS_LOGGED_IN', true)
      await dispatch('retrieveUsers')
    },
    logout: ({ commit }) => {
      commit('RESET', '');
      commit('SET_IS_LOGGED_IN', false)
      commit('SET_USERS',[])
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn;
    },
    getUser: state => {
      return state.user;
    },
    getUsers: state => {
      return state.users
    }
  },
  plugins: [createPersistedState()],
  modules: {
  }
})
