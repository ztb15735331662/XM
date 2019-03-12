<template>
  <me-scroll class="wrapper">
    <ul class="content tab">
      <li
        class="tab-item"
        :class="{'tab-item-active': item.id === curId}"
        v-for="(item, index) in items"
        :key="index"
        @click="switchTab(item.id)"
      >{{item.name}}</li>
    </ul>
  </me-scroll>
</template>

<script>
import MeScroll from "@/components/scroll";
export default {
  name: "CategoryTab",
  components: {
    MeScroll
  },
  data() {
    return {
      curId: ""
    };
  },
  created() {
    this.init();
    this.switchTab(this.items[0].id);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    init() {
      this.items = [
        {
          name: "热门推荐",
          id: "WQR2006"
        },
        {
          name: "淘淘超市",
          id: "WQ1968"
        },
        {
          name: "国际名牌",
          id: "WQ1969"
        },
        {
          name: "奢侈品",
          id: "WQ1970"
        },
        {
          name: "全球购",
          id: "WQ1971"
        },
        {
          name: "男装",
          id: "WQ1972"
        },
        {
          name: "女装",
          id: "WQ1973"
        },
        {
          name: "男鞋",
          id: "WQ1974"
        },
        {
          name: "女鞋",
          id: "WQ1975"
        },
        {
          name: "内衣配饰",
          id: "WQ1976"
        },
        {
          name: "箱包手袋",
          id: "WQ1977"
        },
        {
          name: "美妆个护",
          id: "WQ1978"
        },
        {
          name: "钟表珠宝",
          id: "WQ1979"
        },
        {
          name: "手机数码",
          id: "WQ1980"
        },
        {
          name: "电脑办公",
          id: "WQ1981"
        },
        {
          name: "家用电器",
          id: "WQ1982"
        },
        {
          name: "食品生鲜",
          id: "WQ1983"
        },
        {
          name: "酒水饮料",
          id: "WQ1984"
        },
        {
          name: "母婴童鞋",
          id: "WQ1985"
        },
        {
          name: "玩具乐器",
          id: "WQ1986"
        },
        {
          name: "医药保健",
          id: "WQ1987"
        },
        {
          name: "计生情趣",
          id: "WQ1988"
        },
        {
          name: "运动户外",
          id: "WQ1989"
        },
        {
          name: "汽车用品",
          id: "WQ1990"
        },
        {
          name: "家居厨具",
          id: "WQ1991"
        },
        {
          name: "家具家装",
          id: "WQ1992"
        },
        {
          name: "礼品鲜花",
          id: "WQ1993"
        },
        {
          name: "宠物生活",
          id: "WQ1994"
        },
        {
          name: "生活旅行",
          id: "WQ1995"
        },
        {
          name: "图书音像",
          id: "WQ1996"
        },
        {
          name: "邮币",
          id: "WQ1997"
        },
        {
          name: "农资绿植",
          id: "WQ1998"
        },
        {
          name: "特产馆",
          id: "WQ1999"
        },
        {
          name: "慕淘金融",
          id: "WQ2000"
        },
        {
          name: "拍卖",
          id: "WQ2001"
        },
        {
          name: "房产",
          id: "WQ2008"
        },
        {
          name: "二手商品",
          id: "WQ2002"
        }
      ];
    },
    switchTab(id) {
      if (this.curId === id) {
        return;
      }
      this.curId = id; //通过点击获得当前 curId
      this.$emit("switch-tab", id); // 传出去
    }
  }
};
</script>

<style scoped>
/*滚动条*/
.wrapper {
  width: 100%;
  height: 1000px;
  overflow: hidden;
}
.content {
  height: auto;
}
.tab {
  width: 100%;
}

.tab-item {
  height: 45px;
  background-color: #fff;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: #080808;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
}
.tab-item:last-child {
  border-bottom: none;
}

.tab-item-active {
  background: none;
  border-right: none;
  color: #f23030;
}
</style>
