<template>
  
<div class="relative">
    <!-- Custom navigation buttons -->
    <button class="nav-next4 -left-3 absolute top-1/2 -translate-y-1/2 md:left-[155px]  md:top-0 z-10 md:-translate-y-23.5 w-10 h-10 rounded-xl bg-base-200 shadow-sm  flex items-center justify-center hover:text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>



    </button>
    <button class="nav-prev4 absolute -right-3 top-1/2 -translate-y-1/2 md:right-auto  md:left-[205px]  md:top-0 md:-translate-y-23.5 z-10 w-10 h-10 rounded-xl bg-base-200 shadow-sm  flex items-center justify-center hover:text-blue-500">
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
    


        <swiper-slide v-for="product in products" :key="product.id" class="mb-10">
<card :product="product" :compact="compact"></card>
      </swiper-slide> 





      
    </swiper>
</div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import card from '../components/Card.vue';
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
      card,
    },
    setup() {
      const router = useRouter();
      
      return {
        modules: [Navigation],
        navigationOptions: {
          nextEl: '.nav-next4',
          prevEl: '.nav-prev4'
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
  
  813: {       
    slidesPerView: 2,
    spaceBetween: 14,
  },
  
  1143: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1440: {     
    slidesPerView: 4,
    spaceBetween: 24,
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