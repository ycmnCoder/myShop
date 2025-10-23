<template>
    <div class="relative">
    <!-- Custom navigation buttons -->
    <button class="nav-next5 -left-3 absolute top-13.5 -translate-y-1/2 md:left-[155px]  md:top-0 z-10 md:-translate-y-23.5 w-10 h-10 rounded-xl bg-base-200 shadow-sm  flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>



    </button>
    <button class="nav-prev5 absolute -right-3 top-13.5 -translate-y-1/2 md:right-auto  md:left-[205px]  md:top-0 md:-translate-y-23.5 z-10 w-10 h-10 rounded-xl bg-base-200 shadow-sm  flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </button>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :navigation="navigationOptions"
    :pagination="{
      
    }"
    :breakpoints="{
      '0': {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
      },

      '640': {
        slidesPerView: 2,
        spaceBetween: 0,
         centeredSlides: false
      },
      
      '910': {
        slidesPerView: 3,
        spaceBetween: 10,
         centeredSlides: false
      },
      '1140': {
        slidesPerView: 4,
        spaceBetween: 10,
         centeredSlides: false
      },
      '1390': {
        slidesPerView: 5,
        spaceBetween: 10,
         centeredSlides: false
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide class="mb-10 ">
<div class="shadow-sm bg-base-200  rounded-lg w-60 h-27 overflow-hidden p-5">
  <img 
    src="../assets/pics/asus.png" 
    alt="asus" 
    class="w-full h-full object-cover "
  >
</div>


</swiper-slide>  
  <swiper-slide  class="mb-10 mx-1 "><div class="shadow-sm bg-base-200  rounded-lg w-60 h-27 overflow-hidden p-5">
  <img 
    src="../assets/pics/philips.webp" 
    alt="asus" 
    class="w-full h-full object-cover "
  >
</div></swiper-slide>
    
    <swiper-slide  class="mb-10 mx-1 "><div class="shadow-sm bg-base-200  rounded-lg w-60 h-27 overflow-hidden p-5">
  <img 
    src="../assets/pics/tsco.webp" 
    alt="asus" 
    class="w-full h-full object-cover "
  >
</div></swiper-slide>

    <swiper-slide  class="mb-10 mx-1 "><div class="shadow-sm bg-base-200  rounded-lg w-60 h-27 overflow-hidden p-5">
  <img 
    src="../assets/pics/anker.webp" 
    alt="asus" 
    class="w-full h-full object-cover "
  >
</div></swiper-slide>
<swiper-slide class="mb-10 mx-1">
  <div class="shadow-sm bg-base-200 rounded-lg w-60 h-27 overflow-hidden flex items-center justify-center">
    <img 
      src="../assets/pics/huawei.webp" 
      alt="huawei" 
      class="object-contain w-full h-full"
    >
  </div>
</swiper-slide>
    <swiper-slide  class="mb-10 mx-1 "><div class="shadow-sm bg-base-200  rounded-lg w-60 h-27 overflow-hidden p-5">
  <img 
    src="../assets/pics/samsung.png" 
    alt="asus" 
    class="w-full h-full object-cover "
  >
</div></swiper-slide>
    <swiper-slide  class="mb-10 mx-1 "><div class="shadow-sm bg-base-200  rounded-lg w-60 h-27 overflow-hidden p-5">
  <img 
    src="../assets/pics/xiaomi.png" 
    alt="asus" 
    class="w-full h-full object-cover "
  >
</div></swiper-slide>

  </swiper>
 </div> 
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';

    import { Navigation } from 'swiper/modules';

  
  

  // import required modules
 

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation],
        navigationOptions: {
          nextEl: '.nav-next5',
          prevEl: '.nav-prev5'
        },
      };
    },
  };
</script>
