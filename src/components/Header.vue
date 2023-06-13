<template>
    <header class="">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="../assets/Logo.svg" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12 mr-12">
        <Popover class="relative">
          <PopoverButton class="relative flex items-center font-inter font-bold text-base text-center leading-6 text-indigo-500">
            {{ $t('Trang chủ') }}
            <span class="block absolute bottom-[-5px]  left-3 w-7 h-[3px] bg-indigo-500 rounded-full transform -translate-x-1/2"></span>
          </PopoverButton>

         
        </Popover>

        <a href="#" class="w-112 relative font-inter font-normal text-base leading-6 text-center text-gray-700 flex-none order-1 flex-grow-0 hover:text-indigo-500 menu-item">{{ $t('Mẫu thiệp mời') }}</a>
        <a href="#" class="w-112 relative font-inter font-normal text-base leading-6 text-center text-gray-700 flex-none order-1 flex-grow-0 hover:text-indigo-500 menu-item">{{ $t('Biểu phí') }}</a>
        <a href="#" class="w-112 relative font-inter font-normal text-base leading-6 text-center text-gray-700 flex-none order-1 flex-grow-0 hover:text-indigo-500 menu-item">Blog</a>
        <a href="#" class="w-112 relative font-inter font-normal text-base leading-6 text-center text-gray-700 flex-none order-1 flex-grow-0  ">
          <SelectFlags />
        </a>
       
      </PopoverGroup>
      
      <Login_Avatar />
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 " />
      <DialogPanel class="fixed z-50 inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> -->
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10"> 
            <div class="space-y-2 py-6">
              <a v-if="isLoggedIn" href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-50 ">{{ $t('Xin chào') }}</a>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                  {{ $t('Trang chủ') }}
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name" as="a" :href="item.href" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</DisclosureButton>
                </DisclosurePanel>
              </Disclosure>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-50 ">{{ $t('Mẫu thiệp mời') }}</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">{{ $t('Biểu phí') }}</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">Blog</a>
            </div>
            <div class="py-6">
              <a v-if="isLoggedIn" @click="logout" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ $t('Đăng xuất') }}</a>
              <a v-else href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ $t('Đăng nhập') }}</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
<script setup>
import Login_Avatar from './Login_Avatar.vue'
import SelectFlags from '../plugins/SelectFlags.vue'
import { ref, onMounted } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    // PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  const mobileMenuOpen = ref(false)
  const isLoggedIn = ref(false)
  const logout =() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        window.location.href = '/';
  };
  onMounted(() => {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  const token = localStorage.getItem('accessToken');
  if (token) {
    isLoggedIn.value = true;
  }
});
</script>
<style lang="scss">
    
</style>