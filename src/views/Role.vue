<template>
  <div class="role">
    <!-- 背景 -->
    <div class="backgroun">
      <!-- 呼吸、轮播图组件 -->
      <Background :imgList="this.$store.getters.nowCity.char"></Background>
      <!-- 遮罩层 -->
      <div class="cover"></div>
    </div>
    <!-- 内容 -->
    <div class="content"></div>
    <!-- 立绘  -->
    <div class="painting"></div>
    <!-- 人物选择栏 -->
    <div class="roleList"></div>
    <!-- 侧边栏  -->

  </div>
</template>
<script>
import Background from "../components/Background.vue"
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
  },
  created: function () {
    
  },
  
};
</script>
