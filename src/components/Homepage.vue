<template>
    <div class="app-container">
        <Header />
    <main>
      <section >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 pt-20 text-center lg:pt-12 gap-4 flex max-md:pb-8 pb-24 ">
          <div class="w-2/3 max-md:w-full">
          <h1 class="lg:text-7xl max-md:text-center md:text-5xl max-sm:text-5xl font-viaoda-libre font-normal text-88 leading-126 uppercase tracking-tight text-gray-900 max-md:text-6xl md:ml-12 text-left">
            <span class="block">TẠO THIỆP MỜI</span>
            <span class="block">ONLINE HIỆN ĐẠI</span>
            <span class="flex items-center max-md:justify-center">TIỆN LỢI 
  
          <img class="inline-block ml-4 h-14 w-24 max-md:hidden " src="../assets/0.1.jpg" alt="" />
  
          </span>
        </h1>
            <p class=" mt-6 max-w-2xl max-md:text-center px-4 text-lg sm:px-14 lg:px-14 tracking-tight text-slate-700 text-left ">Tùy ý tạo và chỉnh sửa thiệp mới dạng landing page một cách dễ dàng, nhanh chóng theo cách riêng của bạn.</p>
            <div class="mt-10 flex justify-start gap-x-6 ml-14 max-md:ml-0 max-md:justify-center">
              <a type="submit" class="flex-none rounded-md  bg-indigo-500 px-9 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 first-letter
              transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer
              ">Tạo thiệp mời</a>
            </div>
            <div class="mt-36 lg:mt-44">
              
            </div>
          </div>
  
          <div class="w-1/3 max-md:hidden	 text-center md:text-right relative mt-12">
          <div class="boder-image  md:mr-24 inline-block">
            <span class="image-section-1 z-10">
  
              <span style="box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%">
                <img style="display:block;max-width:100%;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0" alt="" aria-hidden="true" 
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27354%27%20height=%27490%27/%3e">
              </span>
              <img alt="card" src="https://stg.vesey.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.ba4c380b.jpg&w=384&q=75" 
              decoding="async" data-nimg="intrinsic" class="img" style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" 
              srcset="https://stg.vesey.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.ba4c380b.jpg&w=384&q=75 1x, https://stg.vesey.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img.ba4c380b.jpg&w=384&q=75 2x">
                  
              </span>
                     <img class="absolute position-icon pb-4 z-50" src="../assets/1.svg" alt=""/> 
  
          </div>
        </div>
  </div>
      </section>
      <section class="invitation_template_section">
        <div class="mx-auto max-w-2xl text-center pt-24">
          <h2 class="font-inter not-italic font-extrabold text-4xl tracking-tight text-slate-900 sm:text-3xl">MẪU THIỆP MỜI
          </h2>
          <p class="font-inter not-italic font-normal mt-4 text-xl tracking-tight text-gray-400">Tạo thiệp mời chỉ trong nháy mắt cùng Vesey
          </p>
        </div>
        <div class="flex justify-center flex-col mt-12">
          <div class="my-7 flex justify-center">
    <div class="flex flex-row space-x-2 bg-gray-200 rounded-md p-1">
      <label class="flex items-center py-1 px-4 bg-gray-200 cursor-pointer label_checked">
        <input class="hidden" type="radio" checked value="all">
        <span class="text-gray-700">Tất cả</span>
      </label>
      <label class="flex items-center py-1 px-4 bg-gray-200 cursor-pointer">
        <input class="hidden" type="radio" value="wedding">
        <span>Đám cưới</span>
      </label>
      <label class="flex items-center py-1 px-4 bg-gray-200 cursor-pointer">
        <input class="hidden" type="radio" value="birthdate">
        <span>Sinh nhật</span>
      </label>
      <label class="flex items-center py-1 px-4 bg-gray-200 cursor-pointer">
        <input class="hidden" type="radio" value="anniversary">
        <span>Kỷ niệm</span>
      </label>
      <label class="flex items-center py-1 px-4 bg-gray-200 cursor-pointer">
        <input class="hidden" type="radio" value="event">
        <span>Sự kiện</span>
      </label>
    </div>
  </div>
  
        <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
  
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          <a v-for="product in productSS" :key="product.id"  class="group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" @mouseenter="showOverlay(product)" @mouseleave="hideOverlay(product)">
      <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center relative"  />
      <div v-if="product.showOverlay" class="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10 ">
        <div class="flex flex-col items-center space-y-4 ">
          <!-- Nội dung overlay -->
          <button class="px-6 py-3.5 w-full bg-indigo-600 text-white rounded-3xl shadow-md hover:bg-indigo-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Tạo thiệp mời</button>
          <button class="px-6 py-3.5 w-full bg-white text-indigo-600 rounded-3xl border border-blue-600 shadow-sm hover:bg-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Xem mẫu thiệp</button>
        </div>
      </div>
      <div class="absolute top-auto pb-8 bottom-0 inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-100">
        <div class="flex flex-col text-start ml-6">
          <h3 class="mt-4 text-white font-inter font-medium text-xl not-italic">{{ product.name }}</h3>
          <p class="mt-1 text-sm font-medium text-white font-inter not-italic">{{ product.title }}</p>
        </div>
      </div>
    </div>
  </a>
  
  
        </div>
  
      </div>
    </div>
      </div>
      </section>
      <section class="bg-gray-50">
          <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 class="mb-4 text-3xl font-inter font-extrabold not-italic tracking-tight text-gray-900 dark:text-white">Biểu phí</h2>
          <p class="mb-5 font-inter font-normal text-gray-500 text-xl sm:text-xl dark:text-gray-400">Hiện thực hóa kế hoạch của bạn một cách thuận lợi với những gói siêu hấp dẫn từ Vesey</p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
  
          <div class="flex flex-col max-w-lg p-6 mx-auto text-start text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-inter not-italic font-normal">Silver</h3>
          <p class="font-black text-gray-900 text-5xl sm:text-3xl dark:text-gray-400">Miễn phí</p>
          <a href="#" class="text-white font-inter my-4 bg-indigo-400 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Dùng ngay</a>
            <span class="font-inter not-italic font-medium text-xs my-4 tracking-wide uppercase text-gray-900">Bao gồm:</span>
          <ul role="list" class="mb-8 space-y-4 text-left"> 
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Miễn phí 4 mẫu thiệp mời.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Chỉnh sửa thiệp mời theo ý của bạn.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Tạo QR và đường dẫn riêng.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Upload tối đa 1GB ảnh và video cưới.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Không giới hạn trang được tạo.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>3 tháng lưu trữ thiệp cưới trên Vesey.</span>
          </li>
          </ul>
          
          </div>
  
          <div class="flex flex-col max-w-lg p-6 mx-auto text-start text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-inter not-italic font-normal">Gold</h3>
          <p class="font-black text-gray-900 text-5xl sm:text-3xl dark:text-gray-400">500.000 VND</p>
          <a href="#" class="text-white font-inter my-4 bg-indigo-400 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Dùng ngay</a>
            <span class="font-inter not-italic font-medium text-xs my-4 tracking-wide uppercase text-gray-900">Bao gồm:</span>
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Miễn phí 8 mẫu thiệp mời.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Chỉnh sửa thiệp mời theo ý của bạn.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Tạo QR và đường dẫn riêng.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Upload tối đa 5GB ảnh và video cưới.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Không giới hạn trang được tạo</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>1 năm lưu trữ thiệp cưới trên Vesey.</span>
          </li>
          </ul>
          
          </div>
  
          <div class="flex flex-col max-w-lg p-6 mx-auto text-start text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-inter not-italic font-normal">Platinum</h3>
          <p class="font-black text-gray-900 text-5xl sm:text-3xl dark:text-gray-400">2 triệu VND</p>
          <a href="#" class="text-white font-inter my-4 bg-indigo-400 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Dùng ngay</a>
          <span class="font-inter not-italic font-medium text-xs my-4 tracking-wide uppercase text-gray-900">Bao gồm:</span>
          <ul role="list" class="mb-8 space-y-4 text-left">
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Miễn phí 8 mẫu thiệp mời.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Chỉnh sửa thiệp mời theo ý của bạn.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Tạo QR và đường dẫn riêng.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Không giới hạn dung lượng upload ảnh và video cưới.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Không giới hạn trang được tạo</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Trọn đời lưu trữ thiệp cưới trên Vesey.</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Hỗ trợ mua tên miền riêng (VD: tenhaiban.com).</span>
          </li>
          <li class="flex items-center space-x-3">
  
          <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span>Hỗ trợ bởi chuyên viên Vesey.</span>
          </li>
          </ul>
          
          </div>
          </div>
          </div>
  </section>
    <section class="bg-white pb-12">
      <div class="container  min-[500px]:px-8 mx-auto xl:px-5 bg-white  py-6 lg:py-14">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 class="mb-4 text-3xl font-inter font-extrabold not-italic tracking-tight text-gray-900 dark:text-white">Bài viết từ Vesey</h2>
        </div>
                <div class="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 paddingLR">
                 <div class="group cursor-pointer bg-white shadow-lg rounded-2xl relative min-[456px]:w-full min-[450px]:w-11/12 min-[385px]:w-10/12 min-[300px]:w-9/12">
                   <div class=" overflow-hidden rounded-md bg-gray-100 transition-all md:hover:scale-105   dark:bg-gray-800">
                      <a class="relative block aspect-square image-font" href="/post/14-architectural-design-ideas-for-spacious-interior">
                        <img alt="Thumbnail" loading="lazy" decoding="async" data-nimg="fill" class="object-cover transition-all" 
                        sizes="(max-width: 768px) 30vw, 33vw"  src="../assets/7.jpg" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                      </a>
                      </div>
                    <div class="p-6">
                      <div>
                        <div class="flex gap-3">
                          <a href="/category/design">
                            <span class="inline-block font-inter text-sm font-medium tracking-wider mt-5 text-indigo-600">Đám cưới</span>
                            </a>
                              </div>
                              <div class="mb-12">
                              <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                            <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                              <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                                Review chân thật nhà hàng tiệc cưới White Palace
                              </span>
                              </a>
                              </h2>
                              <h3 class=" not-italic font-normal text-gray-500 text-base">
                                Được biết đến là một trong những nhà hàng tiệc cưới sang trọng bậc nhất Sài Thành, White Palace là lựa chọn hoàn hảo cho các cặp đôi yêu thích không gian kiến trúc hiện đại, lung linh.
                              </h3>
                            </div>
                              <div class="hidden">
                                <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                                  <a href="/post/14-architectural-design-ideas-for-spacious-interior">It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. </a>
                                  </p>
                                  </div>
                                  <div class="absolute bottom-0 mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                                    <div class="flex gap-3 mb-4">
                                      <div class="relative h-5 w-5 flex-shrink-0">
                                        <img alt="Đàm Vĩnh Hưng" loading="lazy" decoding="async" data-nimg="fill" class="w-10 h-10 rounded-2xl object-cover" sizes="20px" 
                                        src="../assets/avatar1.jpg" style="position: absolute; max-width: 40px; inset: 0px; color: transparent;"></div>
                                          <div class="flex flex-col ml-4">
                                            <span class="truncate text-sm">Đàm Vĩnh Hưng</span>
                                            <time class="truncate text-sm" datetime="2022-10-21T06:05:00.000Z">Cách đây 2 giờ</time>
                                          </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                         </div>
                         <div class="group cursor-pointer bg-white shadow-lg rounded-2xl relative min-[456px]:w-full min-[450px]:w-11/12 min-[385px]:w-10/12 min-[300px]:w-9/12">
                   <div class=" overflow-hidden rounded-md bg-gray-100 transition-all md:hover:scale-105   dark:bg-gray-800">
                      <a class="relative block aspect-square image-font" href="/post/14-architectural-design-ideas-for-spacious-interior">
                        <img alt="Thumbnail" loading="lazy" decoding="async" data-nimg="fill" class="object-cover transition-all" 
                        sizes="(max-width: 768px) 30vw, 33vw"  src="../assets/8.jpg" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></a>
                      </div>
                    <div class="p-6 ">
                      <div>
                        <div class="flex gap-3">
                          <a href="/category/design">
                            <span class="inline-block font-inter text-sm font-medium tracking-wider mt-5 text-indigo-600">Trending</span>
                            </a>
                              </div>
                              <div class="mb-12">
                              <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                            <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                              <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                                Phim trường Santorini Park - Địa điểm chụp ảnh cưới tuyệt đẹp
                              </span>
                              </a>
                              </h2>
                              <h3 class=" not-italic font-normal text-gray-500 text-base">
                                Thời gian gần đây, phim trường Santorini park nổi lên là tọa độ chụp hình cưới vô cùng mới mẻ và độc đáo dành cho các cặp đôi. Với thiết kế được lấy cảm hứng từ hòn đảo Santorini thu nhỏ, xinh đẹp và êm đềm của Địa Trung Hải. 
                              </h3>
                            </div>
                              <div class="hidden">
                                <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                                  <a href="/post/14-architectural-design-ideas-for-spacious-interior">It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. </a>
                                  </p>
                                  </div>
                                  <div class=" absolute bottom-0 mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                                    <div class="flex gap-3 mb-4">
                                      <div class="relative h-5 w-5 flex-shrink-0">
                                        <img alt="Hồ Ngọc Hà" loading="lazy" decoding="async" data-nimg="fill" class="w-10 h-10 rounded-2xl object-cover " sizes="20px" 
                                        src="../assets/avatar2.jpg" style="position: absolute; max-width: 40px; inset: 0px; color: transparent;"></div>
                                          <div class="flex flex-col ml-4">
                                            <span class="truncate text-sm">Hồ Ngọc Hà</span>
                                            <time class="truncate text-sm" datetime="2022-10-21T06:05:00.000Z">12/4/2022</time>
                                          </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                         </div>
                         <div class="group cursor-pointer bg-white shadow-lg rounded-2xl relative min-[456px]:w-full min-[450px]:w-11/12 min-[385px]:w-10/12 min-[300px]:w-9/12">
                   <div class=" overflow-hidden rounded-md bg-gray-100 transition-all md:hover:scale-105   dark:bg-gray-800">
                      <a class="relative block aspect-square image-font" href="/post/14-architectural-design-ideas-for-spacious-interior">
                        <img alt="Thumbnail" loading="lazy" decoding="async" data-nimg="fill" class="object-cover transition-all" 
                        sizes="(max-width: 768px) 30vw, 33vw"  src="../assets/9.jpg" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></a>
                      </div>
                    <div class="p-6 ">
                      <div>
                        <div class="flex gap-3">
                          <a href="/category/design">
                            <span class="inline-block font-inter text-sm font-medium tracking-wider mt-5 text-indigo-600">Đám cưới</span>
                            </a>
                              </div>
                              <div class="mb-12">
                              <h2 class="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
                            <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                              <span class="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                                Top 10 mẫu trang phục đi đám cưới cho nam thịnh hành năm 2022
                              </span>
                              </a>
                              </h2>
                              <h3 class=" not-italic font-normal text-gray-500 text-base">
                                Mỗi khi nhận được tấm thiệp cưới thì câu hỏi đầu tiên mà các chàng trai luôn đặt ra đó là “nam giới đi đám cưới mặc gì?”.
                              </h3>
                            </div>
                              <div class="hidden">
                                <p class="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                                  <a href="/post/14-architectural-design-ideas-for-spacious-interior">It is a cliche philosophical question, but it touches on something fundamental about how humans relate to the world around them. </a>
                                  </p>
                                  </div>
                                  <div class="absolute bottom-0 mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                                    <div class="flex gap-3 mb-4">
                                      <div class="relative h-5 w-5 flex-shrink-0">
                                        <img alt="Lệ Quyên" loading="lazy" decoding="async" data-nimg="fill" class="w-10 h-10 rounded-2xl object-cover " sizes="20px" 
                                        src="../assets/avatar3.jpg" style="position: absolute; max-width: 40px; inset: 0px; color: transparent;"></div>
                                          <div class="flex flex-col ml-4">
                                            <span class="truncate text-sm">Lệ Quyên</span>
                                            <time class="truncate text-sm" datetime="2022-10-21T06:05:00.000Z">12/12/2022</time>
                                          </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                         </div>
                          </div>
              </div>                                                                                                                                 
                                                                                                                                                                
                                                                                                                                                                                                                                                                                                  
    </section>
    
      <section class="pb-8 text-gray-800 bg-gray-50">
      <div class="flex max-md:flex-col max-md:items-center gap-16 pt-20 max-md:px-12 md:px-28">
        <div class="md:w-1/3  mb-6 md:mb-0">
          <h2 class="font-inter not-italic text-4xl font-extrabold mb-6">Những câu hỏi thường gặp</h2>
  
          <p class="font-inter not-italic font-normal text-sm text-gray-500">
            Bạn không tìm thấy câu trả lời đang tìm kiếm? Xin hãy liên hệ với chúng tôi để được 
            <a href="#!"
              class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-300">Hỗ trợ</a>.
          </p>
        </div>
  
        <div class="md:w-2/3 mb-6 md:mb-0">
          <p class="font-inter not-italic font-medium text-lg text-gray-900 mb-4">Tạo trang web cưới online miễn phí chứ?</p>
          <p class="font-inter not-italic font-normal text-gray-500 mb-12">
            Miễn phí! Bạn có thể tạo, lưu trữ và gửi tất cả các trang miễn phí trong trọn đời. Thu nhập của Vesey chỉ đến từ việc trích một phần nhỏ (4.9%) tiền mừng cưới qua hệ thống. Mức phí này chỉ ngang với chi phí in một tấm thiệp giấy cao cấp.
          </p>
  
          <p class="font-inter not-italic font-medium text-lg text-gray-900  mb-4">Mình có thể tạo được nhiều trang web cưới trên Nắm Tay chứ?</p>
          <p class="font-inter not-italic font-normal text-gray-500 mb-12">
            Đúng vậy! Bạn có thể tạo nhiều “website” với các đường link riêng để gửi đại trà cho các nhóm khách mời khác nhau. Ngoài ra, với mỗi “website”, bạn cũng có thể tạo các đường link riêng một cách trang trọng cho từng khách mời thân thiết.
          </p>
  
          <p class="font-inter not-italic font-medium text-lg text-gray-900  mb-4">
            Quyền lợi của mình được bảo vệ thế nào?
          </p>
          <p class="font-inter not-italic font-normal text-gray-500 mb-12">
            Pháp luật Việt Nam bảo vệ! Vesey và bạn ký kết một hợp đồng đầy đủ tính pháp lý (ở Dashboard), nêu rõ quyền lợi và trách nhiệm của các bên. Công ty Cổ phần Vesey có đăng ký kinh doanh và hoàn thành nghĩa vụ thuế đầy đủ, hoạt động hoàn toàn trong khuôn khổ pháp luật Việt Nam.
          </p>
  
          <p class="font-inter not-italic font-medium text-lg text-gray-900  mb-4">
            Tiền mừng cưới không bị thu thuế chứ?
          </p>
          <p class="font-inter not-italic font-normal text-gray-500 mb-12">
            Tiền mừng cưới không bị thu thuế! Theo thông tư 111/2013/TT-BTC của Bộ Tài Chính, tiền mừng cưới không phải là thu nhập thuộc diện phải đóng thuế. Về khía cạnh thuế, không có sự khác biệt khi nhận mừng cưới bằng tiền mặt hay qua các cổng thanh toán online.
          </p>
  
        </div>
      </div>
    </section>
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
  
    </main>
    <Footer />
    <router-view/>
  </div>
  </template>
  
  <script setup>
  import {ref, reactive  } from 'vue'
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  
  const productSS = reactive([
  
    {
      id: 1,
      name: 'Thiệp truyền thống',
      title: 'Thiệp cưới',
      imageSrc: require('..//assets/1.jpg'),
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      showOverlay: ref(false)
    },
    {
      id: 2,
      name: 'Thiệp truyền thống',
      title: 'Thiệp cưới',
      imageSrc: require('..//assets/2.jpg'),
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      showOverlay: ref(false)
    },
    {
      id: 3,
      name: 'Thiệp truyền thống',
      title: 'Thiệp cưới',
      imageSrc: require('..//assets/3.jpg'),
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      showOverlay: ref(false)
    },
    {
      id: 4,
      name: 'Thiệp truyền thống',
      price: 'Thiệp cưới',
      imageSrc: require('..//assets/4.jpg'),
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      showOverlay: ref(false)
    },
    {
      id: 5,
      name: 'Thiệp truyền thống',
      price: 'Thiệp cưới',
      imageSrc: require('..//assets/5.jpg'),
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      showOverlay: ref(false)
    },
    {
      id: 6,
      name: 'Thiệp truyền thống',
      price: 'Thiệp cưới',
      imageSrc: require('..//assets/6.jpg'),
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      showOverlay: ref(false)
    },
  ])
  const showOverlay = (product) => {
    product.showOverlay = true;
    
    
  }
  const hideOverlay = (product) => {
    product.showOverlay = false;
    
  }
  </script>
  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Viaoda+Libre&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  
  </style>