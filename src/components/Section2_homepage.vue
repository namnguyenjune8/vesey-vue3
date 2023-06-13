<template>
  <section class="invitation_template_section"
           
  >
      <div class="mx-auto max-w-2xl text-center pt-24">
        <h2 class="font-inter not-italic font-extrabold text-4xl tracking-tight text-slate-900 sm:text-3xl" 
           data-aos="fade-up"
           data-aos-duration="1000"
        >MẪU THIỆP MỜI
        </h2>
        <p class="font-inter not-italic font-normal mt-4 text-xl tracking-tight text-gray-400"
           data-aos="fade-up"
           data-aos-duration="1500"
        >Tạo thiệp mời chỉ trong nháy mắt cùng Vesey
        </p>
      </div>
      <div class="flex justify-center flex-col mt-12">
        <div class="my-7 flex justify-center">
  <div class="flex flex-row space-x-2 bg-gray-200 rounded-md p-1 max-[520px]:flex-wrap"
           data-aos="fade-up"
           data-aos-duration="2000"
  >
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
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
           data-aos="fade-up"
           data-aos-duration="2500"
    >
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
        <h3 class="mt-4 text-white font-inter font-medium text-xl not-italic">{{ $t('products.' + product.name) }}</h3>
        <p class="mt-1 text-sm font-medium text-white font-inter not-italic">{{ $t('products.' + product.title) }}</p>
      </div>
    </div>
  </div>
</a>


      </div>

    </div>
  </div>
    </div>
    </section>
</template>

<script setup>

import {ref, reactive  } from 'vue'
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
    title: 'Thiệp cưới',
    imageSrc: require('..//assets/4.jpg'),
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    showOverlay: ref(false)
  },
  {
    id: 5,
    name: 'Thiệp truyền thống',
    title: 'Thiệp cưới',
    imageSrc: require('..//assets/5.jpg'),
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    showOverlay: ref(false)
  },
  {
    id: 6,
    name: 'Thiệp truyền thống',
    title: 'Thiệp cưới',
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
<style lang="">
  
</style>