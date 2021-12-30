import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pvVideoShow: false,//PV遮罩层
    //人物列表
    roleList: [
      {
        id: "",//id
        uid: "",//城市序号
        title: "",//城市名
        //角色信息
        role: [
          {
            title: "",//姓名
            icon: "",  // 证件照
            cover1: "", //半身立绘
            cover2: "", //全身立绘
            name: "",  // 姓名照片
            attr: "",   //元素照片
            intro: "",    //介绍词
            sen: "",    //台词
            cv: [{   //CV，0为中国，1为日本
              name: "",// 姓名
              //语音数组，共3句 
              audio: [],
            }],
            home: ""   // 所属阵营
          },
        ],
      }],

      //城市列表
    cityList: [
       {
      home: {
        banner1: "",  //主城狭长图
        char: "",    // 代表人物剪影
        banner2: ""   //主城中长图
      },
      char: {
        bg: "",     //主城背景早晨
        bg2: "",    // 主城背景下午
        bg3: ""      //背景，竖直矩形带遮罩
      },
      _id: "",
      contentId: "",    //序号
      title: "",  // 城市名
      key: "", // 英文名
      __v: ''
    }
    ],
    //国家风景列表
    sceneryList: [
      {
      _id: "",
      contentId: "",  
      title: "",   //大标题
      icon: "",   //阵营徽章图
      desc: "",//文本
      bg: "",   //大图
      bg2: "", // 狭长竖图
      //内容数列
      centent: [
        {
          sceneryName: "",       //地点名
          text: "",//风景文本
          imgSrc: ""   //图示
        },
       
      ]
    }
    ],
    

    role_cityIndex: 0,//人物所属阵营序号
    roleIndex: 0//人物序号

  },
  getters: {
    //当前人物所属城市信息
    nowCity: state => {
        return state.cityList[state.role_cityIndex];
    },

    //当前人物信息
    nowRole: (state) => {
      return state.roleList[state.role_cityIndex].role[state.roleIndex]; 
    }
  },
  mutations: {
    //载入PV信息
    changePvVideoShow: function (state) {
      state.pvVideoShow = !state.pvVideoShow;
    },
    // 载入角色信息
    changeRoleList: function (state, value) {
      state.roleList = value;
    },
    // 载入城市背景信息
    changeCityList: function (state, value) {
      state.cityList = value;
    },
    // 载入城市风景信息
    chuangeScenery(state, value) {
      state.sceneryList = value;
    },
    //  改变城市序号
    chuangeRole_cityIndex(state, value) {
      state.role_cityIndex = value;
    },
    //改变人物序号
    chuangeRoleIndex(state, value) {
      state.roleIndex = value;
    },
    // 人物序号自增
    addRoleIndex: function (state) {
      state.roleIndex++;
    },
    // 人物序号自减
    redRoleIndex: function (state) {
      state.roleIndex--;
    },
  },

  actions: {
  },
  modules: {
  }
})
