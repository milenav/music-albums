import Vue from 'vue'
import VueRouter from 'vue-router'

import { authGuard, notAuthGuard } from './guards'

const Home = () => import('../components/shared/Home.vue')
const Login = () => import('../components/auth/Login.vue');
const Register = () => import('../components/auth/Register.vue');
const AlbumList = () => import('../components/albums/AlbumList.vue');
const AlbumDetails = () => import('../components/albums/AlbumDetails.vue');
const AlbumCreate = () => import('../components/albums/AlbumCreate.vue');

const ReviewCreate = () => import('../components/reviews/ReviewCreate.vue');
const ReviewEdit = () => import('../components/reviews/ReviewEdit.vue');
const ReviewDelete = () => import('../components/reviews/ReviewDelete.vue');
const NotFound = () => import('../components/shared/NotFound.vue');

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
    name: 'login',
    beforeEnter: authGuard
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    beforeEnter: authGuard
  },
  {
    path: '/albums',
    component: AlbumList,
    name: 'albums',
    beforeEnter: notAuthGuard
  },
  {
    path: '/albums/create',
    component: AlbumCreate,
    name: 'create',
    beforeEnter: notAuthGuard
  },
  {
    path: '/albums/:id',
    component: AlbumDetails,
    name: 'details',
    beforeEnter: notAuthGuard
  },
  {
    path: '/albums/:id/review',
    component: ReviewCreate,
    name: 'review-create',
    beforeEnter: notAuthGuard
  },
  {
    path: '/albums/:albumId/review/edit/:reviewId',
    component: ReviewEdit,
    name: 'review-edit',
    beforeEnter: notAuthGuard
  },
  {
    path: '/albums/:albumId/review/delete/:reviewId',
    component: ReviewDelete,
    name: 'review-delete',
    beforeEnter: notAuthGuard
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
