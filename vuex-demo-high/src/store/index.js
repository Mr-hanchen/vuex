import Vue from 'vue'
import Vuex from 'vuex'
// 配置项
import state from '@/store/state.js'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'
import actions from '@/store/actions.js'

// modules模块
import order from '@/store/modules/order.js'
import user from '@/store/modules/user.js'
import product from '@/store/modules/product.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    order,
    user,
    product
  }
})
