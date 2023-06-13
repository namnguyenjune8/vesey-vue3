<template>
    <!-- component -->
    
    <div class="container mx-auto h-screen">
    
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div class="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/2 h-screen grid">
        <div class="mt-8">  
      <a href="/" class=" md:mx-auto md:ml-5 lg:block">
    <img class="h-12 w-auto logo-image cursor-pointer logo-image" src="../assets/Logo.svg" alt="" />
      </a>
    </div>
<div class="bg-white p-20 px-6 lg:px-16 xl:px-36 max-md:pb-16   
        block pt-12 padding-form mx-auto">

  <div class="w-full h-100">


    <h1 class="text-3xl md:text-5xl font-normal font-inter leading-tight mt-12 2xl:mb-4 font-hello mb-4">{{ $t('Quên mật khẩu') }}</h1>
    <span class="font-inter font-normal text-base text-gray-400 font-lagre leading ">{{ $t('Vui lòng nhập email bạn đã đăng ký tại đây và chúng tôi sẽ gửi link đặt lại mật khẩu vào email của bạn.') }}</span>

    <form @submit.prevent="resetPassword" class="mt-6" action="#" method="POST">
      <div>
        <label class="block text-gray-700 font-text-account">Email</label>
        <input type="email" name="" id="" placeholder="Nhập Email của bạn" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white 
        focus:outline-none input-email font-email " v-model="email" autofocus autocomplete required>
      </div>
      <a href="/sendlinktoemail" type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6 font-lagre text-center">{{ $t('Đặt lại mật khẩu') }}</a>
    </form>

    <p class="mt-8 flex justify-center font-lagre">{{ $t('Bạn chưa có tài khoản?') }} <a href="/signup" class="text-blue-500 hover:text-blue-700 font-semibold font-lagre">{{ $t('Tạo tài khoản') }}</a></p>


  </div>
</div>
</div>
<div class="hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen p-4">
  <img src="../assets/forgotpassword.jpg" alt="" class="w-full h-full boder-radius-40px page-image ">
</div>

</section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    async resetPassword() {
      try {
        const response = await axios.post('https://dev.vesey.vn/api/auth/forgot-password', {
          email: this.email,
        });
        if (response.status === 200 && response.data.token) {
          this.$toast.success('Yêu cầu đặt lại mật khẩu đã được gửi đến email của bạn');
        // Xử lý phản hồi thành công từ máy chủ (response)
        // Ví dụ: hiển thị thông báo cho người dùng
        }
        else {
            throw new Error('Invalid error!');
          }
      } catch (error) {
        // Xử lý lỗi từ máy chủ (error)
        this.$toast.error('Email không tồn tại!');
        console.log(error);
      }
    }
  }
}
</script>
<style lang="scss">

</style>