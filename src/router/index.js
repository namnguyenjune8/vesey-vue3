import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '@/components/Homepage.vue'
// import TodoApp from '@/components/TodoApp.vue'


const routes = [
  {
    path: '/' ,
    name: 'HomePage',
    component: Homepage
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