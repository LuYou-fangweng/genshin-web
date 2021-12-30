import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pvVideoShow: false,
    roleList: [],
    citylisit: [],
    sceneryList: [],

  },
  mutations: {
    changePvVideoShow: function (state) {
      state.pvVideoShow = !state.pvVideoShow;
    },
    changeRoleList: function (state, value) {
      state.roleList = value;
    },
    changeCitylisit: function (state, value) {
      state.citylisit = value;
    },
    chuangeScenery(state, value) {
      state.sceneryList = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
