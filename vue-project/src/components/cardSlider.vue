<template>
  <div class="relative bg-blue-500 rounded-3xl p-4 md:p-6">


    <!-- Custom navigation buttons -->
    <button class="nav-next absolute -left-3 ml-4 lg:ml-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-base-200 shadow  flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    </button>
    <button class="nav-prev absolute -right-3 mr-4 lg:mr-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-xl bg-base-200 shadow  flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

    </button>

<swiper
  dir="rtl"
  :slidesPerView="3"
  :spaceBetween="16"
  
  :breakpoints="breakpoints"
  :modules="modules"
  :navigation="navigationOptions"
  class="mySwiper"
>

  <SwiperSlide class="flex justify-center px-1 md:px-2">
    <div class="z-20 w-full max-w-xs flex-shrink-0 h-75">
      <div class="text-white rounded-2xl p-6 text-center w-full h-full">
        <div class="text-4xl font-bold mb-4 flex flex-col">
          <span>پیشنهاد</span>
          <span>شگفت</span>
          <span>انگیز</span>
        </div>
        <div class="countdown-timer text-lg font-bold mb-2 flex items-center justify-center gap-3" dir="ltr">
          <span class="bg-white w-8 h-8 text-black rounded-lg p-1" style="font-family: 'dana';">{{ formatTime(countdown.hours) }}</span>
          <span>:</span>
          <span class="bg-white w-8 h-8 text-black rounded-lg p-1" style="font-family: 'dana';">{{ formatTime(countdown.minutes) }}</span>
          <span>:</span>
          <span class="bg-white w-8 h-8 text-black rounded-lg p-1" style="font-family: 'dana';">{{ formatTime(countdown.seconds) }}</span>
        </div>
        <a href="http://localhost:5173/shop" class="font-light flex items-center justify-center mt-6">
          <span>مشاهده همه</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
      </div>
    </div>
  </SwiperSlide>

  <swiper-slide
    v-for="product in products"
    :key="product.id"
    class="flex justify-center px-1 md:px-2"
  >
    <div class="flex-shrink-0 max-w-xs w-full">
      <card2 :product="product" :compact="compact"></card2>
    </div>
  </swiper-slide>


  <SwiperSlide class="flex justify-center px-1 md:px-2">
    <a href="http://localhost:5173/shop" class="w-full max-w-xs h-75 cursor-pointer bg-white text-blue-500 rounded-xl flex flex-col justify-center gap-y-3 items-center flex-shrink-0">
      <div class="border-3 rounded-full p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </div>
      <span >مشاهده همه</span>
    </a>
  </SwiperSlide>
</swiper>

  </div>
</template>



<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import card2 from '../components/card2.vue';
  import { useRouter } from 'vue-router';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // import required modules
  import { Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      card2,
    },
    setup() {
      const router = useRouter();
      
      return {
        modules: [Navigation],
        navigationOptions: {
          nextEl: '.nav-next',
          prevEl: '.nav-prev'
        },
        breakpoints: {
  0: {           
    slidesPerView: 1,
    spaceBetween: 8,
  },
  360: {      
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {      
    slidesPerView: 1,
    spaceBetween: 12,
  },
  640: {     
    slidesPerView: 1,
    spaceBetween: 12,
  },
  768: {    
    slidesPerView: 2,
    spaceBetween: 16,
  },
  900: {     
    slidesPerView: 2,
    spaceBetween: 18,
  },
  1024: {      
    slidesPerView: 3,
    spaceBetween: 20,
  },
  
  1440: {      
    slidesPerView: 5,
    spaceBetween: 24,
  },
  1680: {        
    slidesPerView: 7,
    spaceBetween: 26,
  },
},

        goToHomeView: () => {
          router.push('/');
        }
      };
    },
    props: {
        'products': {
          type: Array,
          required: true
        },
        'compact': {
          type: Boolean,
          default: false
        }
    },
    data() {
      return {
        countdown: {
          hours: 2,
          minutes: 0,
          seconds: 0
        },
        timer: null
      }
    },
    mounted() {
      this.startCountdown();
    },
    beforeUnmount() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    methods: {
      startCountdown() {
        this.timer = setInterval(() => {
          if (this.countdown.seconds > 0) {
            this.countdown.seconds--;
          } else if (this.countdown.minutes > 0) {
            this.countdown.minutes--;
            this.countdown.seconds = 59;
          } else if (this.countdown.hours > 0) {
            this.countdown.hours--;
            this.countdown.minutes = 59;
            this.countdown.seconds = 59;
          } else {
            // Countdown finished
            clearInterval(this.timer);
            this.countdown = { hours: 0, minutes: 0, seconds: 0 };
          }
        }, 1000);
      },
      formatTime(value) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const paddedValue = value.toString().padStart(2, '0');
        return paddedValue.replace(/\d/g, digit => persianDigits[parseInt(digit)]);
      }
    }
  };
</script>

<style scoped>

.countdown-timer {
  font-family: 'dana', 'Courier New', monospace;
  letter-spacing: 2px;
}

.font-dana {
  font-family: 'dana', Arial, sans-serif !important;
}


</style>

