<template>
  <div class="world">
    <!-- 世界界面的首页  -->
    <div class="worldHome box">
      <!-- 文本内容 -->
      <div class="describe">
        <img
          src="../assets/世界/提瓦特大陆.png"
          alt="提瓦特大陆"
          class="homeTitle img"
        />
        <img
          src="../assets/世界/文字下部装饰.png"
          alt="标题页脚"
          class="yj img"
        />
        <p>这里是七种元素交汇的幻想世界「提瓦特」。</p>
        <p>
          在遥远的过去，人们藉由对神灵的信仰，获赐了驱动元素的力量，得以在荒野中筑起家园。
        </p>
        <p>五百年前，古国的覆灭却使得天地变异…</p>
        <p>如今，席卷大陆的灾难已经停息，和平却仍未如期光临。</p>
      </div>
      <!-- 动画按钮组件 -->
      <div class="down">
        <BottomDown></BottomDown>
      </div>
    </div>
    <!-- 各国家介绍页  -->
    <ul class="cityLst">
      <li
        class="cityBox box"
        v-for="(item, index) of $store.state.sceneryList"
        :key="item._id"
      >
        <!-- 城市背景大图 -->
        <img :src="$store.state.sceneryList[index].bg" alt="" class="cityImg" />
        <!-- 内容框 -->
        <div class="main">
          <!-- 阵营徽章 -->
          <img
            :src="$store.state.sceneryList[index].icon"
            alt=""
            class="icon"
          />
          <!-- 阵营名称 -->
          <div class="textBox">
            <img src="../assets/世界/城市标题左装饰.png" alt="" class="left" />
            <h1>{{ $store.state.sceneryList[index].title }}</h1>
            <img src="../assets/世界/城市标题右装饰.png" alt="" class="right" />
          </div>
          <!-- 描述文本 -->
          <div class="desc">
            {{ $store.state.sceneryList[index].desc }}
          </div>
          <!-- 详情页按钮 -->
          <div @click="showScenery(index)">
            <BottomPage class="detailPage"></BottomPage>
          </div>

          <P>查看详情</P>
        </div>
      </li>
    </ul>
    <!-- 城市资料遮罩层 -->
    <div class="cityScenery">
      <CityScenery></CityScenery>
    </div>
  </div>
</template>
<script>
import BottomDown from "../components/BottomDown.vue";
import BottomPage from "../components/BottomPage.vue";
import CityScenery from "../components/CityScenery.vue";
export default {
  name: "World",
  data: () => {
    return {};
  },
  methods: {
    showScenery: function (index) {
      console.log("进入函数");
      this.$store.commit("chuangeSceneryIndex", index);
      this.$store.commit("changeSceneryShow");
    },
  },
  components: {
    BottomDown,
    BottomPage,
    CityScenery,
  },
};
</script>
<style scoped>
.cityScenery {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.world {
  position: relative;
}
.box {
  width: 100vw;
  height: 100vh;
  min-width: 1300px;
}
.worldHome {
  background: url("../assets/世界/5c125a1.png") no-repeat center;
  background-size: cover;
  position: relative;
}
.describe {
  width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.img {
  display: block;
  margin: 0px auto;
  margin-bottom: 18px;
}
.homeTitle {
  height: 10vh;
}
.describe p {
  text-align: center;
  color: #fff;
  font: 400 16px/30px 微软雅黑;
  text-shadow: 0 0 12px rgba(110, 159, 193, 0.36);
}
.down {
  position: absolute;
  left: 50%;
  bottom: 60px;
  transform: translate(-50%, 0);
}
.cityBox {
  position: relative;
}
.cityImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.main {
  width: 700px;
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%);
}
.icon {
  display: block;
  height: 12vh;
  margin: 10px auto;
}
.textBox {
  display: flex;
  margin: 0px auto;
  justify-content: center;
}
.left,
.right {
  height: 12px;
  margin: auto 0px;
}
.right {
  transform: rotate(180deg);
}
.textBox h1 {
  margin: 0px 20px;
  color: #fff;
  font-size: 5vh;
}
.desc {
  width: 485px;
  margin: 20px auto;
  text-align: center;
  font: 400 14px/30px 微软雅黑;
  color: #fff;
}
p {
  text-align: center;
  font: 400 14px/30px 微软雅黑;
  color: #fff;
}
.detailPage {
  margin: 0px auto;
  margin-top: 70px;
  margin-bottom: 20px;
}
</style>
