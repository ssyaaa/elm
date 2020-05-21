import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import publics from './public.js';
import home from './home.js';
import order from './order.js';
import me from './me.js';
import foods from './foods.js';
import search from './search.js';
const routes = [
  {
    path:'/',
    redirect:'/advertpage'
  },
  ...publics,
  home,
  order,
  ...me,
  ...foods,
  ...search,//搜索
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
