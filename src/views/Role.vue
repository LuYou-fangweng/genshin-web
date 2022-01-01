<template>
  <div class="role">
    <!-- 背景 -->
    <div class="background">
      <!-- 呼吸、轮播图组件 -->
      <Background :imgList="this.$store.getters.nowCity.char"></Background>
    </div>
    <!-- 立绘  -->
    <img :src="$store.getters.nowRole.cover1" alt="半身立绘" class="painting">
    <!-- 内容 -->
    <div class="content">
        <RoleDataBox></RoleDataBox>
         <!-- 名言 -->
      <div class="saying">
        <img :src="$store.getters.nowRole.sen" alt="" class="sayImg" />
      </div>
    </div>
    <!-- 人物选择栏 -->
    <div class="roleList"></div>
    <!-- 侧边栏  -->

  </div>
</template>
<script>
import Background from "../components/Background.vue"
import RoleDataBox from "../components/roleDataBox.vue"
export default {
  name: "Role",
  data: () => {
    return {};
  },
  methods: {
  },
  computed:{
  },
  components:{
    Background,
    RoleDataBox
  },
  created: function () {
    
  },
  
};
</script>
<style scoped>
.role{
  position: relative;
  width: 100vw;
  height: 100vh;
  min-width: 1300px;
  min-height: 800px;
  overflow:hidden;
  
}
.content{
  position:absolute;
  top:200px;
  left: 25%;
}
.painting{
  position:absolute;
  top:0px;
  left:15%;
  height: 100%;
}
.saying{
  position: relative;
  left:50%;
}
.roleList{
  width: 100%;
  height: 180px;
  position:absolute;
  left: 0;
  bottom:0px;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
