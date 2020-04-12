import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import AlbumList from '../components/albums/AlbumList.vue'
import AlbumDetails from '../components/albums/AlbumDetails.vue'
import AlbumCreate from '../components/albums/AlbumCreate.vue'
import ReviewCreate from '../components/reviews/ReviewCreate.vue'
import NotFound from '../components/shared/NotFound.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/albums',
    component: AlbumList,
    name: 'albums'
  },
  {
    path: '/albums/create',
    component: AlbumCreate,
    name: 'create'
  },
  {
    path: '/albums/:id',
    component: AlbumDetails,
    name: 'details'
  },
  {
    path: '/albums/:id/review',
    component: ReviewCreate,
    name: 'review-create'
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
