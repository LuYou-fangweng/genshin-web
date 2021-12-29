import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pvVideoShow:false,
    roleList:[],
  },
  mutations: {
    changePvVideoShow:function(state){
       state.pvVideoShow=!state.pvVideoShow;
    },
    changeRoleList:function(state,value){
      state.roleList=value;
   },
  },
  actions: {
  },
  modules: {
  }
})
