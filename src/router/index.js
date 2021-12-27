import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Role from '../views/Role.vue'
import World from '../views/World.vue'
import Cartoon from '../views/Cartoon.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Role',
    name: 'Role',
    component:Role
  },
  {
    path: '/World',
    name: 'World',
    component: World
  },
  {
    path: '/Cartoon',
    name: 'Cartoon',
    component: Cartoon
  },
]

const router = new VueRouter({
  routes
})

export default router
