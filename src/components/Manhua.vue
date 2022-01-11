<template>
<!-- 漫画盒子 -->
  <div class="ManhuaBox">
    <!-- 背景 -->
    <div class="back"></div>
    <!-- 内容 -->
    <div class="contentBox">
      <!-- <div class="content"></div> -->
      <!-- 后退 -->
      <div class="button left"></div>
      <!-- 漫画窗口 -->
      <div class="manhuaWindow">
        <ul class="manhauUl">
          <li class="manhuaContent" v-for="(item,index) of nowManhua" :key="index">
            <img :src="item" alt="漫画">
          </li>
        </ul>
      </div>
      <!-- 前进 -->
      <div class="button right"></div>
      <!-- 导航栏 -->
      <div class="navBox">
        <!-- 集数选择栏 -->
        <select class="indexList">
          <option value="" class="index"></option>
        </select>
        <!-- 页数选择栏 -->
        <select class="pageList">
          <option value="" class="page"></option>
        </select>
        <div class="pageLength">共XX页</div>
      </div>
    </div>
    <div class="navBack">
    </div>
  </div>
</template>
<script>
export default {
  name: "Manhua",
  data() {
    return {};
  },
  methods: {},
  computed: {
    manhuaIndex:function(){
      return this.$store.state.manhuaIndex;
    },
    manhuaPage:function(){
      return this.$store.state.manhuaPage;
    },
    nowManhua:function(){
     return this.$store.state.manhuaList[this.manhuaIndex].manhuaImg;
    }
  },
};
</script>
<style scoped>
.ManhuaBox{
  position: relative;
width: 100vw;
height: 100vh;
min-width:1300px;
min-height: 700px;
}
.back{
  width: 100%;
  height: 100%;
  background:url("../assets/漫画/阅读器背景.jpg") no-repeat center;
  background-size: cover;
}
.navBack{
position: absolute;
left: 0px;
bottom: 0px;
width: 100%;
height: 66px;
background-color:black;
z-index: 1;
}
.navBox{
  display: flex;
  height: 66px;
  width: 100%;
  position: absolute;
  left: 0px;
  bottom:-66px;
}
.contentBox{
  z-index: 2;
  position: absolute;
  top:66px;
  bottom:66px;
  left:50%;
  transform: translate(-50%);
  background:rgba(255, 235, 205, 0.281);
}
.button{
  width: 45px;
  height: 64px;
  background:url("../assets/人物/左.png") no-repeat center;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
}
.left{
  left: -100px;
}
.right{
background:url("../assets/人物/右.png") no-repeat center;
right: -100px;
}
.manhuaWindow{
  width: 500px;
  height: 100%;
  overflow: hidden;
}
.manhauUl{
height: 100%;
margin: 0px;
padding: 0px;
display: flex;
}
.manhuaContent{
  padding: 10px 8px;
  height: 100%;
  box-sizing: border-box;
}
.manhuaContent img{
  height: 100%;
}
</style>
