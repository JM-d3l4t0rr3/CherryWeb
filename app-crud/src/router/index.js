import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Pomodorojs from '../views/Pomodoro.vue'
import LoginRegister from "@/views/LoginRegister";
import HomeLogged from "@/views/HomeLogged.vue";
import Notas from "@/views/Notas";
import PomodorojsLogged from '../views/PomodoroLogged.vue'
import CalendarA from "@/views/CalendarA";


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/HomeLogged',
    name: 'HomeLogged',
    component: HomeLogged,

  },
  {
    path: '/stats',
    name: 'stats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stats')
  },



   {

    path: '/pomodoro',
    name: 'Pomodoro',
    // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     //component: () => import(/* webpackChunkName: "about" */ '../views/Pomodoro.vue')
    component: Pomodorojs
  },

  {

    path: '/PomodoroLogged',
    name: 'PomodoroLogged',
    // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     //component: () => import(/* webpackChunkName: "about" */ '../views/Pomodoro.vue')
    component: PomodorojsLogged
  }
  , {

    path: '/login',
    name: 'Login',
    component: LoginRegister
  },
  {

    path: '/notas',
    name: 'Notas',
    component: Notas
  }
  , {

    path: '/calendara',
    name: 'CalendarA',
    component: CalendarA
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
