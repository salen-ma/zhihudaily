import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nightStyle:false,
    popupVisible:false,
    title:'首页',
    comments:0,
    popularity:0
  },
  mutations: {
    changePopupVisible(state,ele){
    	state.popupVisible = !state.popupVisible
      if(ele){
        ele.style.transform = ''
      }
    },
    changeNightStyle(state){
    	state.nightStyle = !state.nightStyle
    },
    changeTitle(state,newTitle){
      state.title = newTitle
    },
    getComments(state,num){
      state.comments = num
    },
    getPopularity(state,num){
      state.popularity = num
    }
  }
})