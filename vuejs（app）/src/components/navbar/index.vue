<template>
  <div class="navbar">
    <div class="navbar-left" v-if="$slots.left">
      <slot name="left">左</slot>
    </div>
    <div class="navbar-center" v-if="$slots.center">
      <slot name="center">中</slot>
    </div>
    <div class="navbar-right" v-if="$slots.right">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NabBar"
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 50px;
}
.navbar-left {
  margin-left: 0.1rem;
  margin: 0 0 0 10px;
  width: 20px;
  height: 20px;
  font-size: 24px;
  background-position: 0 0;
  background-size: contain;
}

.navbar-center {
  flex: 1;
  margin: 0 0.1rem;
  text-align: center !important;
  font: 18px 微软雅黑;
}
.navbar-right {
  margin-right: 0.1rem;
}
.navbar .iconfont {
  font-size: 20px;
}
.swiper {
  width: 100%;
}
</style>