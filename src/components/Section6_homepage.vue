<template>
     <section class="bg-indigo-600">
      <div class="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 py-24">
        <div class="grid grid-grid-cols-1 justify-between lg:grid-cols-2">
          <div>
            <h2 class="text-white font-inter tracking-tight not-italic font-display text-3xl font-extrabold">Đăng ký nhận thông báo</h2>
            <p class="text-indigo-200 font-inter not-italic font-normal mt-4 text-lg tracking-tight">Vesey sẽ gửi đến bạn những thông tin và ưu đãi mới nhất</p>
          </div>
          <div class="lg:flex-1 lg:ml-auto lg:mt-0 mt-12 sm:max-w-md sm:w-full">
            <form class="sm:flex ">
              <label class="sr-only" for="email-address">Email address</label>
               <input autocomplete="email" class="rounded-lg w-full py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-mist-700 focus:ring-white px-5 border-white placeholder-gray-500" id="email-address" name="email-address" placeholder="Nhập Email của bạn" required="" type="email"> 
               <button class="lg:ml-4 font-medium text-base rounded-lg bg-indigo-500 hover:bg-indigo-400 focus:outline-none justify-center text-white border border-transparent flex focus:ring-2 focus:ring-offset-2 focus:ring-offset-mist-700 focus:ring-white hover:bg-mist-400 items-center px-5 py-3 sm:flex-shrink-0 sm:w-auto w-full" type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    
</style>