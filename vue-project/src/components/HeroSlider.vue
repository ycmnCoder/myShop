<template>
  <swiper
    :slides-per-view="1"
    :space-between="0"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="mySwiper mt-8 rounded-xl w-full "

    @click="goToShop"
  >
    <swiper-slide class="overflow-hidden rounded-xl">
      <img src="../assets/pics/1.jpg" alt="slide1" class="w-full h-full object-cover" />
    </swiper-slide>

    <swiper-slide class="overflow-hidden rounded-xl">
      <img src="../assets/pics/2.jpg" alt="slide2" class="w-full h-full object-cover" />
    </swiper-slide>

    <swiper-slide class="overflow-hidden rounded-xl">
      <img src="../assets/pics/3.gif" alt="slide3" class="w-full h-full object-cover" />
    </swiper-slide>

    <swiper-slide class="overflow-hidden rounded-xl">
      <img src="../assets/pics/4.webp" alt="slide4" class="w-full h-full object-cover" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper modules
const modules = [Autoplay, Pagination];

// متد برای رفتن به صفحه فروشگاه
function goToShop() {
  window.location.href = 'http://localhost:5173/shop';
}
</script>


<style scoped>

.mySwiper {
  height: clamp(180px, 30vw, 420px);
  
  transition: height 280ms ease;
}


:deep(.swiper-slide) {
  height: 100%;
}
:deep(.swiper-slide img) {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* pagination */
:deep(.swiper-pagination) {
  background-color: rgba(255,255,255,0.95);
  border-radius: 8px;
  padding: 6px 12px;
  width: 140px;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

/* :global(html[data-theme="dark"]) :deep(.swiper-pagination) {
  background-color: rgba(30, 30, 30, 0.9);
  box-shadow: 0 6px 18px rgba(255,255,255,0.05);
} */
 

</style>

