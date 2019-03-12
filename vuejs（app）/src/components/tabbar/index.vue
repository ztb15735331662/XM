<template>
  <div class="g-tabbar">
    <router-link to="/home" class="item">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/category" class="item">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link to="/cart" class="item">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link to="/personal" class="item">
      <i class="iconfont icon-personal"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang="scss" scoped>
.g-tabbar {
  display: flex;
  height: 50px; /*no*/
  background: #fff;
}
.g-tabbar .item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.g-tabbar .iconfont {
  font-size: 16px;
  margin-bottom: 1px;
}
.router-link-active {
  color: #900;
}
</style>