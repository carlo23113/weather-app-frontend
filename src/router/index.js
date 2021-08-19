import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import City from '../views/City.vue'
import Nearby from '../views/Nearby.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/city/:id',
    name: 'City',
    component: City
  },
  {
    path: '/nearby/:city',
    name: 'Nearby',
    component: Nearby
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
