import * as types from './mutation-types.js'
export default {

  // 添加商品列表的方法
  addGoods({ commit }, value) {
    commit(types.ADDGOODS, value)
  },
  productInfo({ commit }, value) {
    commit(types.PRODUCTINFO, value)
  },

  // 添加商品到购物车
  addToCart({ commit }, product) {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, product)
    }
  },
  // 修改购物车商品信息
  updateThisCart({ commit }, product) {
    if (true) {
      commit(types.UPDATE_THIS_PRODUCT, product)
    }
  }


}
