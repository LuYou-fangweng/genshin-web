import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pvVideoShow:false,
  },
  mutations: {
    changePvVideoShow:function(state){
       state.pvVideoShow=!state.pvVideoShow;
    }
  },
  actions: {
  },
  modules: {
  }
})
