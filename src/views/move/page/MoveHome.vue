<template>
  <!-- 首页 -->
  <div class="MoveHome">
    <!-- 第一页 -->
    <div class="basicBox">
      <!-- 背景 -->
      <div class="backVideo">
        <video
          class="video"
          ref="pvVideo"
          muted
          loop="loop"
          autoplay="autoplay"
        >
          <source :src="backSrc" type="video/mp4" />
          您的浏览器不支持播放此视频.
        </video>
      </div>
      <!-- 中部大LOGO· -->
  
        <img class="loge" src="../../../assets/原神LOGO.png" alt="LOGE" />
      <!-- 中部下载图示 -->
      <div class="bottombar">
        <!-- 播放按钮 -->
        <div class="videoPlay">
          <button class="playButton" @click="changePvVideoShow">
            <div class="buImg"></div>
          </button>
        </div>
        <!-- 下载图标 -->
        <div class="download"></div>
        <div class="toBottom"></div>
      </div>
      <img
        src="../../../assets/首页/适龄提示.png"
        alt="适龄提示"
        class="slts"
      />
    </div>
    <div class="story"></div>
    <Video :videoSrc="pvSrc" ref="pvVideo"></Video>
  </div>
</template>
<script scoped>
export default {
  name: "Home",
  data() {
    return {
      backSrc:
        "https://webstatic.mihoyo.com/hk4e/upload/website/cn/videos/002.mp4",
      pvSrc:
        "https://webstatic.mihoyo.com/upload/op-public/2020/09/27/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4",
    };
  },
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
.MoveHome {
  width: 100vw;
  .basicBox {
    position: relative;
    width: 100vw;
    height: 100vh;
    .backVideo {
      position: absolute;
      z-index: 0;
      .video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    }
    .loge {
      position: absolute;
      top: 12vh;
      left: 50%;
        height: rpx(300);
        transform: translate(-50%,0);
      
      
    }
    .bottombar {
      z-index: 1;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%);
      .videoPlay {
        margin: 0px auto;
        width: rpx(536);
        height: rpx(114);
        background: url("../../../assets/首页/播放边框.png") no-repeat center;
        background-size: contain;
        position: relative;
        .playButton {
          height: rpx(72);
          width: rpx(72);
          background: rgb(255, 255, 255);
          border: 0px;
          border-radius: 50%;
          outline: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.2s;
          .buImg {
            width: rpx(42);
            height: rpx(42);
            background: url("../../../assets/首页/播放按钮.png") no-repeat;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-size: contain;
            background-size: cover;
          }
        }
      }
    }
  }
}
</style>
