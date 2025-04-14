import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import GetAnswer from '../components/GetAnswer.vue'
import Huice from '../components/Huice.vue'

const routes = [
  { path: '/',name:'home',component: HomePage,
    children: [
        { path: 'get-answer', name:'get-answer',component: GetAnswer },
        { path: 'huice', name:'huice', component: Huice },
    ] 
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
