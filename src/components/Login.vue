<template>
    <!-- component -->
    

    
    <section class="flex flex-col md:flex-row h-screen items-center">
      <a href="/">
    <img class="h-12 w-auto absolute logo-image cursor-pointer logo-image" src="../assets/Logo.svg" alt="" />
      </a>
    <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/2 h-screen p-20 px-6 lg:px-16 xl:px-36 max-md:pb-16   
        block pt-32 padding-form">

  <div class="w-full h-100"> 


    <h1 class="text-3xl md:text-5xl font-normal font-inter leading-tight mt-12 mb-2 2xl:mb-4 font-hello">Xin chào!</h1>
    <span class="font-inter font-normal text-base text-gray-400 font-lagre line-height ">Vui lòng đăng nhập vào tài khoản của bạn.</span>

    <form @submit.prevent="login" class="mt-6" action="#" method="POST">
      <div>
        <label class="block text-gray-700 font-text-account">Email</label>
        <input type="email" name="email" id="" placeholder="Nhập Email của bạn" class="w-full px-3 py-3 rounded-lg bg-gray-200 mt-2 border 
        focus:border-blue-500 focus:bg-white focus:outline-none 2xl:py-4 2xl:text-xl input-email font-email 
        " v-model="email" autofocus autocomplete required>
      </div>

      <div class="mt-4">
        <label class="block text-gray-700 font-text-account">Mật khẩu</label>
        <input type="password" name="" id="" placeholder="Nhập mật khẩu của bạn" minlength="6" class="w-full px-3 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none 2xl:py-4 2xl:text-xl input-email font-email" v-model="password" required>
      </div>

      <div class="text-right mt-2 flex flex-row justify-between items-center 2xl:mt-4 min-[2400px]:my-8 min-[3200px]:my-12 ">
        
        <div class=" flex items-center gap-x-1">
                <input type="checkbox" name="remember" id="" class=" w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3200px]:w-8 min-[3200px]:h-8
                min-[5000px]:w-10 min-[5000px]:h-10 ">
                <label for="" class="text-base text-center  not-italic text-gray-900 font-lagre min-[2500px]:ml-2">Lưu đăng nhập</label>
            </div>
        <a href="/resetpassword" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 font-lagre">Quên mật khẩu?</a>
      </div>

      <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6 font-lagre min-[4300px]:py-6 min-[4300px]:rounded-2xl">Đăng nhập</button>
            <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
            <div v-if="successMessage" class="success">{{ successMessage }}</div>
    </form>

    <hr class="my-6 border-gray-300 w-full">

    <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-normal rounded-lg px-4 py-3 border border-gray-300
    min-[3200px]:border-2 min-[4300px]:py-6 min-[4300px]:rounded-2xl">
          <div class="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6 font-google"
           viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
          <span class="ml-4 font-lagre">
          Đăng nhập với Google</span>
          </div>
        </button>

    <p class="mt-8 flex justify-center font-lagre">Bạn chưa có tài khoản? <a href="/signup" class="text-blue-500 hover:text-blue-700 font-semibold font-lagre">Tạo tài khoản</a></p>


  </div>
</div>
<div class="hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen  p-4">
  <img src="../assets/image_login.jpg" alt="" class="page-image w-full h-full object-none boder-radius-40px ">
</div>

</section>
</template>

<script>
import axios from 'axios';

export default {
  
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://dev.vesey.vn/api/auth/login', {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200 && response.data.token) {
          localStorage.setItem('accessToken', response.data.token);
          this.$toast.success('Đăng nhập thành công');

          this.$router.push('/');
        } else {
          throw new Error('Invalid login');
        }
      } catch (error) {
        console.log(error);
        
        this.$toast.error('Tài khoản hoặc mật khẩu không chính xác');
      }
    },
  },
};
</script>

<style lang="scss">

</style>

