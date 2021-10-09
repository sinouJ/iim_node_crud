import Vue from 'vue';
import VueRouter from 'vue-router'

// Components
import Home from '../views/Home'
import Login from '../views/Login'
import Signup from '../views/Signup'
import PageNotFound from '../views/PageNotFound'
import Profile from '../views/Profile'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '*',
    name: 'pageNotFound',
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
