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
    component: Homepage,
    meta: {
      title: 'Trang chủ Vesey'
    }
  },
  {
    path: '/login' ,
    name: 'Login',
    component: Login,
    meta: {
      title: 'Đăng nhập'
    }
  },
  {
    path: '/signup' ,
    name: 'SignUp',
    component: SignUp,
    meta: {
      title: 'Đăng ký'
    }
  },
  {
    path: '/resetpassword' ,
    name: 'ForgotPassword',
    component: ForgorPassword,
    meta: {
      title: 'Tìm mật khẩu'
    }
  },
  {
    path: '/sendlinktoemail' ,
    name: 'LinkToEmail',
    component: LinkToEmail,
    meta: {
      title: 'Cập nhật mật khẩu'
    }
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