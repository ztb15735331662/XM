<template>
  <div>
    <nav-bar>
      <i class="iconfont icon-back" slot="left" @click="goBack"></i>
      <div slot="center">商品详情</div>
      <i class="iconfont icon-msg" slot="right"></i>
    </nav-bar>
    <div class="total">
      <div class="cart-no-good" :class="hasProduct?'isHidden':''">
        <div class="opps">
          <img src="~@/assets/icon/pay_pop_img_loading_fail.png" alt>
        </div>
        <p class="empty-title">您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
        <div class="go-shop" @click="goToShop">去逛逛</div>
      </div>
      <div :class="hasProduct?'':'isHidden'">
        <div class="cart-wrap">
          <div class="cart-account">
            <!-- 店铺描述开始 -->
            <div class="cart-title">
              <div class="tcont">
                <span class="check-icon" @click="mychooseAll">
                  <img :src="chooseAll?checkIcon:checkNotIcon" alt>
                </span>
                <a href="#">某某xxoo店</a>
              </div>
            </div>
            <!-- 店铺描述结束 -->
            <div class="cart-list" v-for="(item, index) in cartLists" :key="index">
              <span class="check-icon" @click="chooseOne(index)">
                <img :src="item.isCheck?checkIcon:checkNotIcon" alt>
              </span>
              <div class="cart-right">
                <a href>
                  <img :src="`http:${item.img}`">
                </a>
                <div class="cart-info">
                  <a href>{{item.title}}</a>
                  <div class="cart-pay">
                    <p class="pay-price">
                      ￥
                      <span>{{item.price}}</span>
                    </p>
                    <div class="pay-btn">
                      <span class="min-btn" @click="reduceNum(item)"></span>
                      <b>{{item.quantity}}</b>
                      <span class="max-btn" @click="addNum(item)"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="c-footer">
          <div class="c-f-left">
            <div class="qx">
              <span class="check-icon" @click="mychooseAll">
                <img :src="chooseAll?checkIcon:checkNotIcon" alt>
              </span>
              <h3>全选</h3>
            </div>
            <p>
              合计:
              <span>￥</span>
              <strong>{{totalPrice}}</strong>
            </p>
          </div>
          <div class="c-f-right" @click="sumbitBtn">结算 ({{totalQuantity}})</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      hasProduct: false,
      totalPrice: 0,
      totalQuantity: 0,
      checkNotIcon: require("@/assets/icon/order_not_checked.png"),
      checkIcon: require("@/assets/icon/order_checked.png"),
      chooseAll: false,
      cartLists: []
    };
  },
  components: {
    NavBar
  },
  created() {
    // 获得购物车中的cart 本地存储数据
    this.carts();
  },
  computed: {
    // 存数量改变
    quantityArray() {
      let added = this.cartLists ? this.cartLists : [];
      let array = [];
      for (let item of added) {
        array.push(item.quantity);
      }
      // console.log(array)
      return array;
    },
    // 存单选改变
    checkedArray() {
      let added = this.cartLists ? this.cartLists : [];
      let array = [];
      for (let item of added) {
        array.push(item.isCheck);
      }
      return array;
    }
  },
  methods: {
    carts() {
      this.cartLists = storage.getItem("cart")
        ? JSON.parse(storage.getItem("cart"))
        : [];
      //this.cartLists = this.$store.state.cart.added;
      if (this.cartLists != 0) {
        this.hasProduct = true;
        // 判断是否到达全选
        this.sumLength();
      }
    },
    chooseOne(id) {
      this.cartLists[id].isCheck = !this.cartLists[id].isCheck;
      this.updateList(
        this.cartLists[id].id,
        this.cartLists[id].type,
        this.cartLists[id].quantity,
        this.cartLists[id].isCheck
      );
      // 判断是否勾选全选
      this.sumLength();
    },
    mychooseAll() {
      // 全选是否勾选
      this.chooseAll = !this.chooseAll;
      // 同时每个商品的勾选 与全选一致
      for (let item of this.cartLists) {
        if (this.chooseAll) {
          item.isCheck = true;
        } else {
          item.isCheck = false;
        }
        // 商品更新
        this.updateList(item.id, item.type, item.quantity, item.isCheck);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    goToShop() {
      //   if (!storage["user"]) {
      //     MessageBox.alert("您尚未登录!").then(action => {
      //       this.$router.push("/login");
      //     });
      //   } else {
      this.$router.replace("./home");
      //   }
    },
    addNum(item) {
      // 改变购买数量
      let { id, type, quantity, isCheck } = item;
      console.log(id);
      quantity++;
      // 产品更新
      this.updateList(id, type, quantity, isCheck);
    },
    reduceNum(item) {
      let { id, type, quantity, isCheck } = item;
      quantity--;
      if (quantity <= 1) {
        quantity = 1;
      }
      // 产品更能
      this.updateList(id, type, quantity, isCheck);
    },
    getAllCart() {
      if (this.cartLists) {
        for (let item of this.cartLists) {
          if (item.isCheck) {
            // 对选中内容结算
            // 累加的总数量
            this.totalQuantity += item.quantity;
            // 累加的总价钱
            this.totalPrice += item.price * item.quantity;
          }
        }
      }
    },
    sumbitBtn() {
      if (this.totalQuantity) {
        MessageBox.alert("恭喜你结算成功,请等待收货！");
        this.$store.state.cart.added = [];
        storage.setItem("cart", []);
      }
    },
    sumLength() {
      //判断勾选的单个商品是否等于总商品
      let num = 0;
      let len = this.cartLists.length;
      for (let item of this.cartLists) {
        if (item.isCheck) {
          num++;
        }
      }
      if (num == len) {
        this.chooseAll = true;
      } else {
        this.chooseAll = false;
      }
    },
    updateList(id, type, quantity, isCheck) {
      let newProduct = {
        id: id,
        type: type,
        quantity: quantity,
        isCheck: isCheck
      };
      this.$store.dispatch("updateThisCart", newProduct);
      this.cartLists = storage.getItem("cart")
        ? JSON.parse(storage.getItem("cart"))
        : [];
    }
  },
  watch: {
    quantityArray() {
      // 监听数据的变化 从而改变价格
      if (this.quantityArray) {
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.getAllCart();
      }
    },
    checkedArray() {
      // 监听单选的变化 从而改变价格
      if (this.checkedArray) {
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.getAllCart();
      }
    },
    chooseAll() {
      if (this.chooseAll) {
        this.totalQuantity = 0;
        this.totalPrice = 0;
        this.getAllCart();
      }
    }
  }
};
</script>

<style scoped>
input[type="checkbox"] {
  display: none;
}
.isHidden {
  display: none;
}
.check-icon {
  display: inline-block;
  height: 40px;
  width: 40px;
}
.check-icon img {
  width: 100%;
}
.cart-no-good {
  padding-top: 10px;
  padding-bottom: 69px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cart-no-good.isHidden {
  display: none;
}
.opps {
  height: 325px;
  width: 325px;
}
.opps img {
  width: 100%;
}
.empty-title {
  margin-top: 13px;
  font-size: 14px;
}
.go-shop {
  margin-top: 30px;
  width: 120px;
  height: 60px;
  background: #f60;
  color: #fff;
  text-align: center;
  line-height: 60px;
  border-radius: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  height: 40px;
  background: #f60;
  align-items: center;
  color: #fff;
}
.navbar h3 {
  font-size: 16px;
  font-weight: 700;
}
.navbar span {
  font-size: 16px;
}

/* 购物车开始 */
/* 外面大盒子 */
.cart-wrap {
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
/* 店铺描述开始 */
.cart-account {
  width: 100%;
  border-radius: 6px;
  background: #fff;
}
.cart-title,
.cart-list {
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 0px 5px;
}
.cart-title {
  height: 40px;
  border-bottom: 2px solid #f5f5f5;
}
.cart-title .tcont {
  display: flex;
  align-items: center;
  height: 24px;
}
.icon {
  width: 24px;
  height: 24px;
  background: url("./images/icon.png") no-repeat;
  background-size: 24px 24px;
  margin: 0px 6px;
}
.cart-title a {
  color: #000;
  font-size: 16px;
}
.cart-title span {
  font-size: 14px;
}
/* 店铺描述结束 */
/* 商品描述开始 */
.cart-list {
  width: 100%;
  height: 140px;
}
.cart-list > input {
  margin-right: 20px;
}

.cart-right {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.cart-right img {
  height: 120px;
}
.cart-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
.cart-info a {
  font-size: 14px;
}
.cart-info .cart-pay {
  display: flex;
  height: 30px;
  padding-right: 6px;
  align-items: flex-end;
  justify-content: space-between;
}
.cart-info .pay-price {
  color: #f60;
}

.pay-btn {
  display: flex;
  width: 30%;
  height: 40px;
  align-items: center;
  text-align: center;
  cursor: pointer;
}
.pay-btn .min-btn {
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: inline-block;
  background: url("~@/assets/icon/cartReduce.png") no-repeat;
  background-size: 100% 100%;
}
.pay-btn b {
  padding: 0 10px;
}
.pay-btn .max-btn {
  width: 40px;
  height: 40px;
  font-size: 18px;
  display: inline-block;
  background: url("~@/assets/icon/cartAdd.png") no-repeat;
  background-size: 100% 100%;
}

.c-footer {
  position: fixed;
  bottom: 50px;
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #fff;
}
.c-f-left {
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 0px 5px;
  align-items: center;
}
.qx {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.qx input {
  margin-right: 4px;
}
.c-f-left p {
  font-size: 14px;
  padding: 0px 3px;
  color: #000;
}
.c-f-left span,
.c-f-left strong {
  color: #f60;
}
.c-f-left strong {
  font-size: 16px;
}
.c-f-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  background: #f60;
}
</style>