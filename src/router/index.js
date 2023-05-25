import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/components/Homepage.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import ForgorPassword from '@/components/ForgotPassword.vue'
import LinkToEmail from '@/components/LinkToEmail.vue'


const routes = [
  {
    path: '/' ,
    name: 'HomePage',
    component: Homepage
  },
  {
    path: '/login' ,
    name: 'Login',
    component: Login
  },
  {
    path: '/signup' ,
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/resetpassword' ,
    name: 'ForgotPassword',
    component: ForgorPassword
  },
  {
    path: '/sendlinktoemail' ,
    name: 'LinkToEmail',
    component: LinkToEmail
  },
  
  // {
  //   path: '/app',
  //   name: 'TodoApp',
  //   component: TodoApp,
  //   beforeEnter: (to, from, next) => {
  //     const accessToken = localStorage.getItem('accessToken');
  //     if (!accessToken) {
  //       next('/sign-in');
  //     } else {
  //       next();
  //     }
  //   }
  // },

 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router