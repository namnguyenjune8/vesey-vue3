<template>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end items-center">
      <div v-if="isLoggedIn">
        <Notification />
      </div>  
      <div class="relative" @click="toggleDropdown">
        <a v-if="isLoggedIn" class="text-sm font-semibold leading-6 text-gray-900">
          <div class="flex -space-x-2 overflow-hidden">
            <img :src="avatarUrl" alt="Avatar" class="inline-block h-10 w-10 rounded-full ring-2 ring-white" />
          </div>
          <div v-if="isDropdownOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Thông tin cá nhân</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đổi mật khẩu</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="logout">Đăng xuất</a>
          </div>
        </a>
     <div v-else class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="/login" type="submit" class="flex-none rounded-md bg-indigo-500 px-9 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400
         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Đăng nhập</a>
       </div>    
       </div>
      
    </div>
  </template>
  
  <script>
  import jwt_decode from 'jwt-decode'
  import Notification from './Notification.vue'
  export default {
    components: {
      Notification,
    },
    data() {
      
      return {
        isDropdownOpen: false,
        isLoggedIn: false,
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' // Avatar mặc định
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        this.isDropdownOpen = false;
        window.location.href = '/';
      },
    },
    mounted() {
      // Kiểm tra xem người dùng đã đăng nhập hay chưa
      const token = localStorage.getItem('accessToken'); 
      if (token) {
        const decoded = jwt_decode(token);
        this.isLoggedIn = true;
        if (decoded.avatarUrl) {
          this.avatarUrl = decoded.avatarUrl; // Lấy URL của avatar từ thông tin đã lưu
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  