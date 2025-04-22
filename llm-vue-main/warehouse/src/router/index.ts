import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import Huice from '../components/huice.vue'
import GetAnswer from '../components/GetAnswer.vue'

const routes = [
  // 设置默认路径
  { path: '/', component: HeroSection },  // HeroSection 是首页
  { path: '/backtest', component: Huice },
  { path: '/ai', component: GetAnswer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
