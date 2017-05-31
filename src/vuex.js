import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nightStyle:false,
    popupVisible:false
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})