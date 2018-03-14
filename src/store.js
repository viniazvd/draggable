import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    teams: [
      { name: 'Flamengo' },
      { name: 'Vasco' },
      { name: 'Fluminense' },
      { name: 'Botafogo' }
    ]
  },

  mutations: {
    setTeam (state, payload) {
      state.teams = payload
    }
  }

})

export default store
