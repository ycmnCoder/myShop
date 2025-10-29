
<template>
 
<heroSlider></heroSlider>
 <pageTitle :title1="'محبوب'" :title2="' دسته بندی های '" :about="'جدیدترین و بروز ترین دسته بندی ها'" :svgCode="'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'"></pageTitle>
<div class="flex flex-wrap justify-center gap-6 mt-12">
  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/5.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">موبایل</span>
  </div>

  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/6.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">کالای دیجیتال</span>
  </div>

  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/7.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">خانه و آشپزخانه</span>
  </div>

  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/8.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">آرایشی و بهداشتی</span>
  </div>

  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/9.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">لوازم التحریر</span>
  </div>

  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/10.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">گیفت کارت</span>
  </div>

  <div 
    class="flex flex-col items-center justify-center cursor-pointer w-1/6 min-w-[120px] sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8"
    @click="goToShop"
  >
    <img src="../assets/pics/11.png" alt="" class="size-30 transition-all duration-300 hover:grayscale">
    <span class="text-lg mt-2">ابزار آلات</span>
  </div>
</div>



  <div class=" pt-8">

          <div class="mt-4 "> 
            <cardSlider :products="products" :compact="true"></cardSlider>
          </div>
  </div>

  <pageTitle :title1="'محصولات'" :title2="'جدید ترین '" :about="'جدیدترین و بروز ترین محصولات'" :svgCode="'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'"></pageTitle>

<div class=" py-8">

          <div class="my-4 "> 
            <cardSlider2 :products="products" :compact="true"></cardSlider2>
          </div>
  </div>


<div class="block md:flex md:items-center md:justify-between md:gap-5">
  <div @click="goToShop" class="overflow-hidden rounded-xl"><img src="../assets/pics/1.webp" alt="" class="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 "></div>
  <div @click="goToShop" class="overflow-hidden rounded-xl mt-5 md:mt-0"><img src="../assets/pics/2.webp" alt="" class="rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"></div>
</div>  


  <pageTitle :title1="'پرفروش'" :title2="'محصولات'" :about="'جدیدترین و بروز ترین محصولات'" :svgCode="'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'"></pageTitle>

<div class=" pt-8">

          <div class="my-4 "> 
            <cardSlider3 :products="products" :compact="true"></cardSlider3>
          </div>
  </div>



    <pageTitle :title1="'برندها'" :title2="' محبوب ترین '" :about="'جدیدترین و بروز ترین برندها'" :svgCode="'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'"></pageTitle>

<div class=" pt-8">

          <div class="my-4 "> 
           <brandsSlider></brandsSlider>
          </div>
  </div>

<pageTitle :title1="'مقالات'" :title2="' محبوب ترین '" :about="'جدیدترین و بروز ترین مقالات'" :svgCode="'M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'"></pageTitle>

<div class=" py-8">

          <div class="my-4 "> 
          <articleCardSlider></articleCardSlider>
          </div>
  </div>



<div class="flex flex-wrap items-center justify-between">
  <div class="flex flex-col items-center">
    <img src="../assets/pics/1.svg" alt="" class="w-14 h-14 ">
    <span class="text-sm text-gray-500">امکان تحویل اکسپرس</span>
    </div>

      <div  class="flex flex-col items-center">
    <img src="../assets/pics/2.svg" alt="" class="w-14 h-14">
    <span class="text-sm text-gray-500">ضمانت اصل بودن کالا</span>
    </div>

      <div  class="flex flex-col items-center">
    <img src="../assets/pics/3.svg" alt="" class="w-14 h-14">
<span class="text-sm text-gray-500">ضمانت بازگشت کالا</span>
    </div>

      <div  class="flex flex-col items-center">
    <img src="../assets/pics/4.svg" alt="" class="w-14 h-14">
    <span class="text-sm text-gray-500">پشتیبانی 24 ساعته</span>
    </div>

      <div  class="flex flex-col items-center">
    <img src="../assets/pics/5.svg" alt="" class="w-14 h-14">
    <span class="text-sm text-gray-500">امکان پرداخت در محل</span>
    </div>

</div>



</template>
<script>

import heroSlider from '../components/HeroSlider.vue'
import pageTitle from '../components/pageTitle.vue' 
import Card from '../components/Card.vue'
import slider from '../components/slider.vue'
import cardSlider from '../components/cardSlider.vue'
import cardSlider2 from '@/components/cardSlider2.vue'
import cardSlider3 from '@/components/cardSlider3.vue'
import brandsSlider from '@/components/brandsSlider.vue'
import articleCardSlider from '@/components/articleCardSlider.vue'

export default {
  name: 'HomeView',
  components: {
    pageTitle, 
heroSlider,
    Card,
    slider,
    cardSlider,
    cardSlider2,
    cardSlider3,
    brandsSlider,
    articleCardSlider,

  },
  data() {
    return {
      products: [],
      loading: true,
      error: null
    }
  },
  computed: {
    discountedProducts() {
      return this.products.filter(product => product.price_with_discount < product.price).length
    },
    lowStockProducts() {
      return this.products.filter(product => product.quantity <= 3).length
    }
  },
  mounted() {
    this.fetchProducts()
  },
  

  methods: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      
      try {
        const response = await this.axios.get('http://127.0.0.1:3000/api/products')
        this.products = response.data
        console.log('Products loaded:', this.products)
      } catch (error) {
        console.error('Error fetching products:', error)
        this.error = error.response?.data?.message || 'Failed to load products. Please try again.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>

<script setup>
function goToShop() {
  window.location.href = 'http://localhost:5173/shop';
}
</script>
