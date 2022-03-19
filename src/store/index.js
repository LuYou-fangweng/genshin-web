import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sceneryShow:false,//城市资料遮罩层
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
        banner2: ""   //主城中长图,移动端
      },
      char: {
        bg: "",     //主城背景早晨
        bg2: "",    // 主城背景下午
        bg3: ""      //背景，竖直矩形带遮罩，移动端
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
     //漫画列表
     manhuaList:[{
       _id:'',//id
      title:"",//标题
      src:"",//封面地址
      manhuaImg:[],//漫画各页地址函数
     }],

    role_cityIndex: 0,//人物所属阵营序号
    roleIndex: 0,//人物序号
    sceneryIndex:0,//城市风景序号

    manhuaIndex:0,//漫画集数
    manhuaPage:0,//漫画页数
    manhuaShow:false,//漫画阅读器显示状态
    index_page:[0,0],//上次浏览集数与页数

    musicPlay:false,//背景音乐播放状态
    musicLow:"",
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
    //改变背景音乐状态
    changeMusicPlay(state,index){
      state.musicPlay=index;
    },
    //写入浏览记录
    changeIndex_page(state,index){
      state.index_page=index;
    },
    // 确定漫画阅读器是否显示
    changeManhuaShow(state,index){
      state.manhuaShow=index;
    },
    // 选择特定漫画集数
    changeManhuaIndex(state,index){
      state.manhuaIndex=index;
    },
    //选择特定漫画页数
    changeManhuaPage(state,index){
      state.manhuaPage=index;
    },
    //页数自增或自减特定数
    alterManhuaPage(state,index){
      state.manhuaPage=state.manhuaPage+index;
    } ,
    //写入漫画信息
    changeManhuaList:function(state, value) {
      state.manhuaList = value;
    },

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
    //改变城市风景序号
    chuangeSceneryIndex:function(state, value) {
      state.sceneryIndex = value;
    },
    //改变风景信息遮罩层
    changeSceneryShow: function (state) {
      state.sceneryShow = !state.sceneryShow;
    },
  },

  actions: {
  },
  modules: {
  }
})
