import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  doctorList: {},
  doctorDetails: {},
  doctorAllList: [],
  initialDoctorList: [],
  twoDoctorDetails: {}
}

const mutations = {
  setDoctorList (state, data) {
    state.doctorList = data
  },
  setDoctorDetails (state, data) {
    state.doctorDetails = data
  },
  setDoctorAllList (state, data) {
    state.doctorAllList = data
  },
  setInitialDoctorList (state, data) {
    state.initialDoctorList = data
  },
  setTwoDoctorDetails (state, data) {
    state.doctorDetails = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})
