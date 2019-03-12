<template>
  <div class="category">
    <header class="g-header-container">
      <nav-bar>
        <i class="iconfont icon-back" slot="left" @click="goBack"></i>
        <div slot="center">分类页</div>
        <i class="iconfont icon-msg" slot="right"></i>
      </nav-bar>
    </header>
    <div class="g-content-container">
      <div class="sidebar">
        <category-tab @switch-tab="getCurrentId"/>
      </div>
      <div class="main">
        <category-content :curId="curId"/>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryTab from "./tab";
import CategoryContent from "./content";
import NavBar from "@/components/navbar";

export default {
  name: "Category",
  components: {
    CategoryTab,
    CategoryContent,
    NavBar
  },
  data() {
    return {
      curId: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getCurrentId(id) {
      this.curId = id;
      //console.log(this.curId);
    }
  }
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(#eee, #ddd);
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 1px #ddd;
}
.category {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}

.g-content-container {
  display: flex;
}
.sidebar {
  width: 80px;
  height: 100%;
}
.main {
  flex: 1;
  height: 100%;
}
</style>
