<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
    <ul class="recommend-list">
      <li
        class="recommend-item"
        v-for="(item,key) in productList"
        :key="key"
        @click="findProduct(key)"
      >
        <router-link
          :to="{name:'home-product',params:{id:item.baseinfo.itemId,imgurl:item.baseinfo.picUrl}}"
          class="recommend-link"
        >
          <p class="recommend-pic">
            <img class="recommend-img" v-lazy="`http:${item.baseinfo.picUrl}`">
          </p>
          <p class="recommend-name">{{item.name.shortName}}{{key}}</p>
          <p class="recommend-origPrice">
            <del data-v-3e4d0caa>¥{{item.price.origPrice}}</del>
          </p>
          <p class="recommend-info">
            <span class="recommend-price">
              ¥
              <strong class="recommend-price-num">{{item.price.actPrice}}</strong>
            </span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入 axios
import axios from "axios";
import { getRecommend } from "@/api/productList.js";

export default {
  name: "productList",
  data() {
    return {
      productList: [],
      page: 1,
      totalPage: 1
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    update() {
      return this.getProductList();
    },
    getProductList() {
      // axios
      /*跨越代理配置： 
              从  http://localhost:8080 代理到
              /api   --->https://ju.taobao.com
      */
      // this.$axios.defaults.baseURL = "http://localhost:8080";
      // return this.$axios
      //   .get("/api/json/tg/ajaxGetItemsV2.json", {
      //     params: {
      //       page: this.page,
      //       psize: 20,
      //       type: 0,
      //       frontCatId: ""
      //     }
      //   })
      getRecommend(this.page)
        .then(res => {
          console.log(res);
          //console.log(res.data);

          if (res.code == "200") {
            this.page++;
            this.totalPage = res.totalPage;
            this.productList = this.productList.concat(res.itemList);
            // 将商品列表保存 vueX中
            //this.$store.dispatch("addGoods", this.productList);
            let obj = {
              productList: this.productList,
              page: this.page,
              totalPage: this.totalPage
            };
            this.$emit("loaded", obj); // 派发出事件 loaded
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    findProduct(id) {
      // 将一个商品存到vueX中
      this.$store.dispatch("productInfo", this.productList[id]);
    }
  }
  // computed: {
  //   // 从vueX中获得商品列表信息
  //   goodList() {
  //     return this.$store.state.goodsList;
  //   }
  // }
};
</script>

<style scoped>
.recommend-title {
  position: relative;
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  text-align: center;
}
.recommend-title:before,
.recommend-title:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background-color: #ddd;
}
.recommend-title:before {
  left: 0;
}
.recommend-title:after {
  right: 0;
}
.recommend-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.recommend-item {
  width: 49%; /*分2列*/
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 8px;
}

.recommend-link {
  display: block;
}
.recommend-pic {
  position: relative;
  width: 100%;
  padding-top: 100%;
  /* 让我的图100% 在父亲的分栏宽的显示*/
  margin-bottom: 5px;
}

.recommend-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /*图必须是100%*/
  height: 100%;
}

.recommend-name {
  height: 36px;
  padding: 0 5px;
  margin-bottom: 8px;
  line-height: 1.5;
}

.recommend-origPrice {
  padding: 0 5px;
  margin-bottom: 8px;
  color: #ccc;
}

.recommend-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 5px;
  margin-bottom: 8px;
}

.recommend-price {
  color: #e61414;
}

.recommend-price-num {
  font-size: 20px;
}

.recommend-count {
  color: #999;
}
</style>