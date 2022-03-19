import Vue from 'vue'
import Move from './Move.vue'
import router from './move.router.js'
import store from '../../store'
import axios from 'axios'
Vue.prototype.$axios=axios
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(Move)
}).$mount('#move')