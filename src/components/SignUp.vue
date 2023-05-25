<template>
  <!-- component -->
  

  
  <section class="flex flex-col md:flex-row h-screen items-center">
  <img class="h-12 w-auto absolute logo-image cursor-pointer" src="../assets/Logo.svg" alt="" />
<div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/2 h-screen p-20 px-6 lg:px-16 xl:px-40 max-md:pb-16   
    flex items-center justify-center max-lg:pt-56  lg:pt-56">

<div class="w-full h-100 mt-48">


  <h1 class="text-3xl md:text-5xl font-normal font-inter leading-tight mt-32">Đăng ký!</h1>

  <form @submit.prevent="signup" class="mt-6" action="#" method="POST">
    <div>
        <label class="block text-gray-700">Họ và tên</label>
        <input type="text" name="" id="" placeholder="Nhập họ" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="first_name" autofocus autocomplete required>
        <input type="text" name="" id="" placeholder="Nhập tên đệm & tên" class="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="last_name" autofocus autocomplete required>

      </div>
      <div class="mt-4">
      <label class="block text-gray-700">Số điện thoại</label>
      <input type="number" name="" id="" placeholder="Nhập số điện thoại của bạn" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="phone_number" autofocus autocomplete required>
    </div>
    <div class="mt-4">
      <label class="block text-gray-700">Địa chỉ</label>
      <input type="text" name="" id="" placeholder="Nhập địa chỉ của bạn" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="address" autofocus autocomplete required>
    </div>
    <div class="mt-4">
      <label class="block text-gray-700">Email</label>
      <input type="email" name="" id="" placeholder="Nhập Email của bạn" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" v-model="email" autofocus autocomplete required>
    </div>

    <div class="mt-4">
      <label class="block text-gray-700">Mật khẩu</label>
      <input type="password" name="" id="" placeholder="Nhập mật khẩu của bạn" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none" v-model="password" required>
      <input type="password" name="" id="" placeholder="Nhập lại mật khẩu của bạn" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none" v-model="password_confirmation" required>
    </div>

    <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6">Đăng ký</button>
          <div v-if="successMessage" class="success">{{ successMessage }}</div>
          <div v-if="errorMessage" class="alert-danger">{{ errorMessage }}</div>
  </form>

  <div class="flex flex-row justify-around">
    <hr class="my-6 border-gray-300 w-2/5">
    <span class="pt-3">Hoặc</span>
    <hr class="my-6 border-gray-300 w-2/5">
    </div>

  <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
        <div class="flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
        <span class="ml-4">
        Đăng nhập với Google</span>
        </div>
      </button>

  <p class="mt-8 flex justify-center">Bạn đã có tài khoản? <a href="/login" class="text-blue-500 hover:text-blue-700 font-semibold">Đăng nhập</a></p>


</div>
</div>
<div class="hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen  p-4">
<img src="../assets/signup.svg" alt="" class="w-full h-full object-none boder-radius-40px ">
</div>

</section>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        password: '',
        password_confirmation: '',
        errorMessage: '',
        successMessage: '',
      };
    },
    methods: {
    async signup() {
       // Kiểm tra xem password và password_comfirmation có khớp nhau không
    if (this.password !== this.password_confirmation) {
        this.errorMessage = 'Mật khẩu không trùng khớp!';
        return;
    }
      // Gọi API đăng ký và xử lý kết quả
      try {
      const response = await axios.post('https://dev.vesey.vn/api/auth/register', {
        first_name: this.first_name,
        last_name: this.last_name,
        phone_number: this.phone_number,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      });
         // Xử lý kết quả trả về ở đây
      if (response.status === 400 && response.data.message === 'Username already exists') {
        this.errorMessage = 'Username already used, please choose another name';
      } else if (response.status === 200 && response.data.message === 'Sign Up Success!') {
        this.successMessage = 'Sign Up Success';
        this.errorMessage = ''; // xóa thông báo lỗi nếu có
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      // Xử lý lỗi ở đây
      console.log(error);
      this.errorMessage = error.message;
    }
  }
}
  };
</script>
<style lang="scss">

</style>