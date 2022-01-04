<template>
  <!-- 任务选择框  -->
  <div class="roleListBox">
    <!-- 左按钮 -->
    <div class="toLeft" @click="redRoleIndex"></div>
    <!-- 任务头像列表框 -->
    <div class="headPortrait">
      <ul ref="ruleUlDom" class="roleUl">
        <!-- 头像框 -->
        <li
          class="headBox"
          v-for="(item, index) of role"
          :key="index"
          :class="{ headBoxActive: index === roleIndex }"
          @click="chuangeRoleIndex(index)"
        >
          <!-- 头像 -->
          <img
            :src="item.icon"
            alt="头像"
            class="headImg"
            :class="{ headImgActive: index === roleIndex }"
          />
          <!-- 姓名标注 -->
          <p class="roleNmae_" :class="{ roleNmae_Activ: index === roleIndex }">
            {{ item.title }}
          </p>
        </li>
      </ul>
    </div>
    <!-- 右按钮 -->
    <div class="toRight" @click="addRoleIndex"></div>
  </div>
</template>
<script>
export default {
  name: "RoleListBox",
  data() {
    return {
      moveIndex: 3, //选择框焦点维持在当前角色列表框的位置
    };
  },
  methods: {
    //改变当然人物序号特定值
    chuangeRoleIndex(value) {
      this.$emit("changeImg");
      setTimeout(() => {
        this.$store.commit("chuangeRoleIndex", value);
        this.$emit("changeImg");
      }, 200);
    },
    //人物序号自增
    addRoleIndex() {
      this.$emit("changeImg");
      setTimeout(() => {
        if (this.roleIndex < this.role.length - 1) {
          this.$store.commit("addRoleIndex");
        } else {
          this.chuangeRoleIndex(0);
        }
        this.$emit("changeImg");
      }, 200);
    },
    //人物序号自减
    redRoleIndex() {
      console.log("进入自减函数");
      this.$emit("changeImg");
      setTimeout(() => {
        if (this.roleIndex > 0) {
          this.$store.commit("redRoleIndex");
        } else {
          this.chuangeRoleIndex(this.role.length - 1);
        }
        this.$emit("changeImg");
      }, 200);
    },
  },
  computed: {
    roleIndex: function () {
      return this.$store.state.roleIndex;
    },
    role: function () {
      return this.$store.state.roleList[this.$store.state.role_cityIndex].role;
    },
  },
  mounted: function () {},
  updated: function () {
    let d = 0;
    if (this.roleIndex > this.moveIndex - 1) {
      d = (this.roleIndex - (this.moveIndex - 1)) * 144;
    }
    if (this.roleIndex > this.role.length - 4) {
      d = (this.role.length - 6) * 144;
    }
    d = d + "px";
    const ruleUlDom = this.$refs.ruleUlDom;
    ruleUlDom.style = `transform: translateX(-${d})`;
  },
};
</script>
<style scoped>
.roleListBox {
  width: 1000px;
  display: flex;
}
.toLeft {
  width: 45px;
  height: 64px;
  background: url("../assets/人物/左.png") no-repeat;
  background-size: cover;
  margin: auto 0px;
}
.toRight {
  width: 45px;
  height: 64px;
  background: url("../assets/人物/右.png") no-repeat;
  background-size: cover;
  margin: auto 0px;
}
.headPortrait {
  width: 830px;
  overflow: hidden;
  margin: 0px 40px;
}
.headPortrait ul {
  display: flex;
  list-style: none;
}
.headBox {
  border: rgba(255, 255, 255, 0) solid 2px;
  margin-right: 34px;
  border-radius: 5px;
}

.headImg {
  display: block;
  width: 106px;
  background-image: linear-gradient(
    150deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(158, 158, 158, 1) 100%
  );
}
.roleNmae_ {
  font: 400 18px/22px 微软雅黑;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.55);
}
.headBox:hover {
  border: rgba(255, 255, 255, 1) solid 2px;
}
.headBox:hover .headImg {
  background-image: linear-gradient(
    150deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 60%,
    rgba(158, 158, 158, 1) 100%
  );
}
.headBox:hover .roleNmae_ {
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 1);
}
.headBoxActive {
  border: rgba(255, 255, 255, 1) solid 2px;
}
.headImgActive {
  background-image: linear-gradient(
    150deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 60%,
    rgba(158, 158, 158, 1) 100%
  );
}
.roleNmae_Activ {
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 1);
}
.roleUl {
  transform: translateX(0px);
  transition: all 0.5s ease;
}
</style>
