import Vue from 'vue'
import Vant from "vant"
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

Vue.config.productionTip = false
// 引入UI框架
Vue.use(Vant);

// 引入swiper
import "swiper/css/swiper.min.css";

// 引入图标
import "./assets/font/iconfont.js";

// 动画第三方样式
// cnpm install animate.css --save
import "animate.css";
// 配置axios
import axios from 'axios';
Vue.prototype.$axios = axios;
// 默认路由配置
axios.defaults.baseURL = 'http://127.0.0.1:3000'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
