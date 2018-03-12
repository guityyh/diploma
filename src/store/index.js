import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  doctorList: {},
  doctorDetails: {},
  doctorAllList: []
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
  }
}

export default new Vuex.Store({
  state,
  mutations
})
