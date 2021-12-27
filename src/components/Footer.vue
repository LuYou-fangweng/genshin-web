<template>
  <div class="footer">
    <!-- 头部 ，分享栏 -->
    <ul class="footerHeader">
      <li v-for="(item, index) of imgSrc" :key="index">
        <img :src="item" alt="分享图标" />
      </li>
    </ul>
    <!-- 主体 -->
    <div class="footerContent">
      <!-- 图标 -->
      <div class="icon">
        <div class="mihoyo"></div>
        <span></span>
        <div class="ys"></div>
      </div>
      <!-- 法律信息 -->
      <div class="siteinfoLegar">
        <div class="lawNav">
          <a href="https://ys.mihoyo.com/company/agreement">用户协议</a>
          |
          <a href="https://ys.mihoyo.com/company/privacy">隐私政策</a>
          |
          <a
            href="https://webstatic.mihoyo.com/upload/static-resource/2021/11/06/2bc5f2f06b88aea5380c4babe396cf16_1085792848868029218.pdf"
            >自律公约</a
          >
          |
          <a href="https://jiazhang.mihoyo.com/#/">家长监护工程</a>
          |
          <a href="https://www.mihoyo.com/?page=about">关于我们</a>
          |
          <a href="https://www.mihoyo.com/company/contact">联系我们</a>
          |
          <a href="https://www.mihoyo.com/?page=join">加入我们</a>
        </div>

        <div class="lawText">
          健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。
        </div>
        <div class="lawText">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=沪公网安备31010402001113号"
            >沪公网安备31010402001113号 </a
          ><span>|</span>增值电信业务经营许可证：沪B2-20190555
        </div>
        <div class="lawText">
          <a href="">沪ICP备19018275号-4</a
          ><span>|</span
          >沪网文〔2019〕3168-216号<span>|</span>国新出审【2019】2978号
        </div>
        <div class="lawText">
          互联网违法不良信息举报邮箱: tousu@mihoyo.com
          互联网违法不良信息举报电话: 021-60371750 （工作时间：每天10点 - 20点）
        </div>
        <div class="lawText">
          亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听
        </div>
        <div class="lawText">未成年成长关爱热线：021-60371740</div>
        <div class="lawText">
          © 2020 米哈游版权所有<span>|</span>上海米哈游影铁科技有限公司<span
          > </span>客服电话：400-666-6312
        </div>
        <div class="friendLinkBox">
          <a
            href="https://v.yunaq.com/certificate?domain=www.mihoyo.com&from=label&code=90020"
            class="friendLink"
          ></a>
          <a href="http://www.shjbzx.cn/" class="friendLink"></a>
          <a href="https://www.12377.cn/" class="friendLink"></a>
          <a
            href="http://sq.ccm.gov.cn:80/ccnt/sczr/service/business/emark/toDetail/8955A9DDE1FF8B6CE053010A14ACA87F"
            class="friendLink"
          ></a>
          <a href="javascript:void(0)" class="friendLink"></a>
          <a
            href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020190314100540000004452331-SAIC_SHOW_310000-20200120150237277642&signData=MEYCIQCjn9IhIKfUHjPlx9W6xrYPZ4GA73Blopwp0iEzSX0OHQIhAOZm3tnlWLrgVXMtvgp5OibauIgiAa+2d+MQ7qzMIm6t"
            class="friendLink"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      imgSrc: [
        require("../assets/分享图片/微博.png"),
        require("../assets/分享图片/微信.png"),
        require("../assets/分享图片/QQ.png"),
        require("../assets/分享图片/分享.png"),
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footerHeader {
  display: flex;
  height: 52px;
  margin: 0px auto;
  justify-content: center;
  list-style: none;
}
.footerHeader li {
  width: 32px;
  height: 32px;
  margin: auto 20px;
}
img {
  width: 32px;
  opacity: 0.7;
}
img:hover {
  opacity: 1;
}
.footer {
  background-color: rgb(53, 53, 53);
}
.footerContent {
  background-color: rgb(20, 20, 20);
  padding: 30px;
  display: flex;
}
.icon {
  display: flex;
}
.icon span {
  width: 1px;
  height: 28px;
  background-color: rgb(212, 212, 212);
  font-size: 28px;
  margin: auto 20px;
}
.mihoyo {
  height: 42px;
  width: 120px;
  background: url("../assets/米哈游LOGO.png") no-repeat;
  background-size: contain;
  margin: auto 0px;
}
.ys {
  width: 110px;
  height: 80px;
  background: url("../assets/原神LOGO.png") no-repeat;
  background-size: contain;
  margin: auto 0px;
}
.siteinfoLegar {
  color: #aaa;
  font:400 14px/24px "微软雅黑";
  margin-left:40px ;
}
.siteinfoLegar a{
  text-decoration: none;
}
.siteinfoLegar span{
  margin: 0px 10px;
}
.lawNav{
  margin-bottom:20px ;
}
.lawNav a{
  margin: 0px 10px;
}
.lawNav a:nth-child(1){
  margin-left:0px;
}

.lawNav a:link{
  color: #fff;
}
.lawNav a:visited{
   color: #fff;
}
.lawText a:link,.lawText a:visited{
  color: #aaa;
}

</style>
