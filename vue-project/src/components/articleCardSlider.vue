<template>
  <div class="relative">
    <!-- Custom navigation buttons -->
    <button class="nav-next6  -left-3 absolute top-1/2 ml-4 lg:ml-0 -translate-y-1/2 md:left-[155px] md:top-0 z-10 md:-translate-y-23.5 w-10 h-10 rounded-xl bg-base-200 shadow-sm hidden lg:flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>

    <button class="nav-prev6 absolute -right-3 top-1/2 mr-4 lg:mr-0 -translate-y-1/2 md:right-auto md:left-[205px] md:top-0 md:-translate-y-23.5 z-10 w-10 h-10 rounded-xl bg-base-200 shadow-sm hidden lg:flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>



        <button class="nav-next6 absolute -left-3 ml-4 lg:ml-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-base-200 shadow  flex lg items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    </button>
    <button class="nav-prev6 absolute -right-3 mr-4 lg:mr-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-base-200 shadow  flex lg items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </button>

    <swiper
      dir="rtl"
      :slidesPerView="4"
      :spaceBetween="1"
      :breakpoints="breakpoints"
      :modules="modules"
      :navigation="navigationOptions"
      class="mySwiper"
    >
      <swiper-slide class="mb-10">
        <articleCard :title="'بهترین لپ تاپ های بازار ایران [دی 1403]'" :image="a1" />
      </swiper-slide>
      <swiper-slide class="mb-10">
        <articleCard :title="'بهترین گوشی های بازار ایران [دی 1403]'" :image="a2" />
      </swiper-slide>
      <swiper-slide class="mb-10">
        <articleCard :title="'بهترین هدیه های دیجیتال [دی 1403]'" :image="a3" />
      </swiper-slide>
      <swiper-slide class="mb-10">
        <articleCard :title="'بهترین هارد های بازار ایران [دی 1403]'" :image="a4" />
      </swiper-slide>
      <swiper-slide class="mb-10">
        <articleCard :title="'بهترین هارد های بازار ایران [دی 1403]'" :image="a1" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import articleCard from './articleCard.vue';
import a1 from '../assets/pics/a1.webp';
import a2 from '../assets/pics/a2.webp';
import a3 from '../assets/pics/a3.webp';
import a4 from '../assets/pics/a4.webp';
import { useRouter } from 'vue-router';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    articleCard,
  },
  setup() {
    const router = useRouter();

    return {
      a1,
      a2,
      a3,
      a4,
      modules: [Navigation],
      navigationOptions: {
        nextEl: '.nav-next6',
        prevEl: '.nav-prev6',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
         421: {
          slidesPerView: 1.5,
          spaceBetween: 12,
        },
        610: {
          slidesPerView: 2.1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 12,
        },
        1021: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1358: {
          slidesPerView: 4,
          spaceBetween: -30,
        },
      },
      goToHomeView: () => {
        router.push('/');
      },
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.writing-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  line-height: 1.2;
}

.font-dana {
  font-family: 'dana', Arial, sans-serif !important;
}
</style>
