import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import order from "./order";
import shop from "./shop";
import register from "./register";
import foodinfo from "./foodinfo";
import address from "./address";
import myInfo from "./myInfo";
import like from "./like";
export default new Vuex.Store({
  state: {
    vanTabbar:true,
    username:'',//用户信息
    phoneNumber:''//电话号码
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    order,//订单
    shop,//店铺详情
    register,
    foodinfo,//商品详情
    address,//地址
    myInfo,//个人信息
    like,//我的收藏
  }
})
