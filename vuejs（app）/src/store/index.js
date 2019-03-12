/**
 * Created by Deboy on 2016/10/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// modules
import cart from './modules/cart'
// global actions
import actions from './actions'
// global mutations
import mutations from './mutations'
Vue.use(Vuex)

// 存放着组件中信息的状态
const state = {
  // 商品列表 ： 20 40 ...数据
  goodsList: [],
  // 一个商品的信息
  productInfo: {}
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    cart
  }
})
