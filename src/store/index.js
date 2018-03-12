import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  doctorList: {},
  doctorDetails: {}
}

const mutations = {
  setDoctorList (state, data) {
    state.doctorList = data
  },
  setDoctorDetails (state, data) {
    state.doctorDetails = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
