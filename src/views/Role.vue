<template>
  <div class="role">
    <h1>This is role</h1>
  </div>
</template>
<script>
export default {
  name: "Role",
  data: () => {
    return {};
  },
  methods: {
    //  网络请求函数，请求角色数据
    roleData: function () {
      let them = this;
      this.$axios("http://127.0.0.1:3000/role")
        .then(function (res) {
          them.$store.commit('changeRoleList',res.data)
          console.log(them.$store.state.roleList);
        })
        .catch(function (err) {
          console.log("网络请求出错！，错误详情为：");
          console.log(err);
        });
    },
  },
  created: function () {
    
  },
  
};
</script>
