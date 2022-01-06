<template>
  <div id="app">
    <!-- 导航栏 -->
    <div id="nav" class="nav">
      <div class="music"></div>
      <div class="logo"></div>
      <router-link to="/">首页</router-link>
      <router-link to="/Role">角色</router-link>
      <router-link to="/World">世界</router-link>
      <router-link to="/Cartoon">漫画</router-link>
      <div class="user">
        <span>登录</span>
        <div class="userImg"></div>
      </div>
    </div>
    <!-- 视图级组件 -->
    <router-view />
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Footer,
  },
  methods: {
    //  网络请求函数，请求角色数据
    roleData: function () {
      let them = this;
      this.$axios("http://127.0.0.1:3000/role")
        .then(function (res) {
          them.$store.commit("changeRoleList", res.data);
          console.log(them.$store.state.roleList);
        })
        .catch(function (err) {
          console.log("网络请求出错！，错误详情为：");
          console.log(err);
        });
    },
      //  网络请求函数，请求主城数据
    cityData: function () {
      let them = this;
      this.$axios("http://127.0.0.1:3000/city")
        .then(function (res) {
          them.$store.commit("changeCityList", res.data);
          console.log(them.$store.state.cityList);
        })
        .catch(function (err) {
          console.log("网络请求出错！，错误详情为：");
          console.log(err);
        });
    },
      //  网络请求函数，请求各国家风景/名胜数据
    sceneryData: function () {
      let them = this;
      this.$axios("http://127.0.0.1:3000/scenery")
        .then(function (res) {
          them.$store.commit("chuangeScenery", res.data);
          console.log(them.$store.state.sceneryList);
        })
        .catch(function (err) {
          console.log("网络请求出错！，错误详情为：");
          console.log(err);
        });
    },
  },
  created: function () {},
  beforeMount: function () {
    this.roleData();
    this.cityData();
    this.sceneryData();
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  min-width: 1300px;
  position: relative;
}
.nav {
  position: fixed;
  display: flex;
  height: 66px;
  width: 100vw;
  min-width: 1300px;
  margin: 0px auto;
  background-color: rgba(0, 0, 0, 0.65);
  font: 400 20px/66px "宋体";
  z-index: 8;
}
.music {
  width: 34px;
  height: 34px;
  background: url("./assets/音乐.png") no-repeat;
  border-radius: 50%;
  background-size: contain;
  margin: auto 18px;
}
.logo {
  width: 240px;
  height: 60px;
  background: url("./assets/logo.png") no-repeat center center;
  background-size: cover;
}
.user {
  position: absolute;
  right: 10px;
  height: 60px;
  display: flex;
  opacity: 0.7;
}
.user:hover {
  opacity: 1;
}
.user span {
  color: #ffffff;
  font-size: 20px;
}
.userImg {
  width: 30px;
  height: 30px;
  background: url("./assets/user.png") no-repeat;
  border-radius: 50%;
  background-size: contain;
  margin: auto 18px;
  color: #d4d4d4;
}

#nav a {
  color: #d4d4d4;
  text-decoration: none;
  margin: 0px 25px;
}

#nav a.router-link-exact-active {
  text-shadow: 0px 0px 8px rgb(60, 162, 230);
  color: #ffffff;
}
</style>
