<template>
  <div class="world">
    <div class="worldHome box">
      <div class="describe">
        <img
          src="../assets/世界/提瓦特大陆.png"
          alt="提瓦特大陆"
          class="homeTitle img"
        />
        <img src="../assets/世界/文字下部装饰.png" alt="标题页脚" class="yj img" />
        <p>这里是七种元素交汇的幻想世界「提瓦特」。</p>
        <p>
          在遥远的过去，人们藉由对神灵的信仰，获赐了驱动元素的力量，得以在荒野中筑起家园。
        </p>
        <p>五百年前，古国的覆灭却使得天地变异…</p>
        <p>如今，席卷大陆的灾难已经停息，和平却仍未如期光临。</p>
      </div>
      <div class="down">
        <BottomDown></BottomDown>
      </div>
    </div>
    <ul class="cityLst">
      <li class="cityBox box"></li>
    </ul>
  </div>
</template>
<script>
import BottomDown from "../components/BottomDown.vue"
export default {
  name: "World",
  data: () => {
    return {};
  },
  components:{
    BottomDown
  }
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  min-width: 1300px;
  min-height: 500px;
}
.worldHome{
  background: url("../assets/世界/5c125a1.png") no-repeat center;
  background-size: cover;
  position: relative;
}
.describe{
  width: 900px;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.img{
  display: block;
  margin: 0px auto;
  margin-bottom:18px;
}
.homeTitle{
  height: 10vh;
}
.describe p{
    text-align: center;
  color: #fff;
  font: 400 16px/30px 微软雅黑;
  text-shadow: 0 0 12px rgba(110,159,193,0.36);
}
.down{
  position: absolute;
  left: 50%;
  bottom: 60px;
  transform: translate(-50%.0);
}

</style>
