<template>
  <div class="content-wrapper">
    <me-scroll class="wrapper" ref="scroll">
      <div class="content">
        <div class="pic" v-if="content.banner">
          <a :href="content.banner.linkUrl" class="pic-link">
            <img :src="`http:${content.banner.picUrl}`" alt class="pic-img">
          </a>
        </div>
        <div class="section" v-for="(section, index) in content.data" :key="index">
          <h4 class="section-title">{{section.name}}</h4>
          <ul class="section-list">
            <li class="section-item" v-for="(item, i) in section.itemList" :key="i">
              <a href class="section-link">
                <p class="section-pic" v-if="item.picUrl">
                  <img v-lazy="`http:${item.picUrl}`" alt class="section-img">
                </p>
                <p class="section-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBacktopVisible" @backtop="backToTop"/>
    </div>
  </div>
</template>

<script>
import MeScroll from "@/components/scroll";
import MeBacktop from "@/components/backtop";
import axios from "axios";
import { getCategory } from "@/api/category.js";
export default {
  name: "CategoryContent",
  components: {
    MeScroll,
    MeBacktop
  },
  props: {
    curId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      content: {},
      isBacktopVisible: true
    };
  },
  watch: {
    curId(id) {
      //console.log(id);
      this.getContent(id);
    }
  },
  created() {
    //this.getContent(this.curId);
  },
  methods: {
    getContent(id) {
      //this.$axios.defaults.baseURL = "http://localhost:8080";
      return this.$axios
        .get(`http://www.imooc.com/api/category/content/${id}`)

        .then(res => {
          //if (res.data.code == 0) {
          console.log(res.data);
          this.content = res.data.content;
          console.log(this.content);
          //}
        })
        .catch(err => {
          console.log(err);
        });
    },
    backToTop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
/*滚动条*/
.wrapper {
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.content {
  height: auto;
}
.content-wrapper {
  height: 100%;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 988; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.mine-loading {
  color: #fff;
  font-size: 14px;
}
.loading-wrapper {
  width: 50%;
  padding: 30px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.content {
  padding: 10px;
}

.pic {
  margin-bottom: 12px;
}
.pic-link {
  display: block;
}

.pic-img {
  width: 100%;
}

.section {
  margin-bottom: 12px;
}
.section:last-child {
  margin-bottom: 0;
}

.section-title {
  height: 28px;
  line-height: 28px;
  color: #080808;
  font-weight: bold;
}

.section-list {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 10px 10px 0;
}

.section-item {
  width: 33%;
}

.section-link {
  display: block;
}

.section-pic {
  position: relative;
  width: 80%;
  padding-bottom: 80%;
  margin: 0 auto;
}

.section-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.section-name {
  height: 36px;
  line-height: 36px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.g-backtop-container {
  bottom: 10px;
}
</style>
