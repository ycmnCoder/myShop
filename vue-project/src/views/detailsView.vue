<template>
  <div class="min-h-screen  py-8" dir="rtl">
          <div class="flex items-center font-light text-sm gap-2 mb-5 text-gray-500">
        <div class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mb-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

          <a href="http://localhost:5173/">صفحه اصلی</a>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        
        <a href="http://localhost:5173/shop">فروشگاه</a>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

        
        <a href="http://localhost:5173/shop">جزئیات محصول</a>

      </div>
    <div class=" px-4 w-full">
<!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        
      </div>
     <!-- Error State -->
      <div v-else-if="error" class="text-center py-20">
        <div class="bg-blue-100 text-primary px-4 py-3 rounded-lg max-w-md mx-auto">
          <h3 class="font-bold">Error Loading Products</h3>
          <p class="text-sm">{{ error }}</p>
          <button 
            @click="fetchProducts" 
            class="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
     <div v-else-if="product" class="block space-y-3 md:flex md:gap-3">
      <!-- Product Details -->
      <div  class="bg-base-200 rounded-2xl shadow-lg overflow-hidden w-3/4">
        


        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          <!-- Left Column - Product Images -->
          <div class="space-y-4">
            <!-- Action Icons -->
             <div class="flex justify-between">
  <nav class="flex items-center space-x-2 text-base text-blue-400">
            <span>اپل</span>
            <span>/</span>
            <span>گوشی موبایل اپل</span>
          </nav>
            <div class="flex justify-end gap-2 mb-4">
              
              <button class="w-8 h-8 border border-gray-300 rounded-full bg-base-200 flex items-center justify-center hover:opacity-75 transition-all">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
</svg>


              </button>
              <button class="w-8 h-8 border border-gray-300 rounded-full bg-base-200 flex items-center justify-center hover:opacity-75 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </button>
              <button class="w-8 h-8 border border-gray-300 rounded-full bg-base-200 flex items-center justify-center hover:opacity-75 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>

              </button>
            </div></div>

            <!-- Main Product Image -->
            <div class="aspect-square bg-base-200 rounded-xl overflow-hidden">
              <img 
                :src="getImageUrl(product.images[0])" 
                :alt="product.title"
                class="w-full h-full object-contain p-4"
                @error="handleImageError"
              />
            </div>

            <!-- Thumbnail Images -->
            <div class="grid grid-cols-5 gap-2">
              <div 
                v-for="(image, index) in product.images.slice(0, 5)" 
                :key="index"
                class="aspect-square bg-base-200 border border-info rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                @click="selectedImageIndex = index"
              >
                <img 
                  :src="getImageUrl(image)" 
                  :alt="`${product.title} - Image ${index + 1}`"
                  class="w-full h-full object-contain p-2"
                  @error="handleImageError"
                />
              </div>
            </div>
<!-- guranatee -->
             <div class="flex flex-wrap gap-4 mt-3">
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                <span>ارسال به سراسر ایران</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

                <span>پشتیبانی کل هفته</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

                <span>تضمین اصالت کالا</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

                <span>ضمانت بازگشت کالا</span>
              </div>
            </div>
          </div>

          <!-- Product Information -->
          <div class="space-y-6">
            <!-- Product Title -->
            <div>
              <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
              <p class="text-gray-500 text-sm">{{product.description}}</p>
            </div>

            <!-- Rating & Reviews -->
            <div class="flex items-center gap-2">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-yellow-400 mb-1.5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>

              </div>
              <span class="text-sm font-semibold text-gray-500">4.4</span>
              <span class="text-sm text-gray-500">امتیاز (849 خریدار) 410 دیدگاه</span>
            </div>

            <!-- Color Selection -->
             <div>
    <h3 class="text-lg font-semibold mb-3">
      رنگ:
      <span class="text-gray-300">{{ selectedColorName }}</span>
    </h3>

    <div class="flex gap-3">
      <div
        v-for="(color, index) in colors"
        :key="index"
        :class="[
          'w-8 h-8 rounded-full border-2 cursor-pointer transition-all duration-200',
          selectedColor === color.value ? 'border-blue-600' : 'border-gray-300 hover:border-gray-400',
        ]"
        :style="{ backgroundColor: color.value }"
        @click="selectColor(color)"
      ></div>
    </div>
  </div>

            <!-- Key Features -->
            <div>
              <h3 class="text-lg font-semibold  mb-3">ویژگی ها</h3>
              <div class="flex flex-wrap gap-3 text-sm">
                <div class="flex flex-col gap-y-2 bg-base-100 p-2 rounded-lg w-45 h-15">
                  <span class="text-gray-500">فناوری صفحه نمایش:</span>
                  <span class="font-semibold">LTPO Super Retina XDR</span>
                </div>
                <div class="flex flex-col gap-y-2 bg-base-100 p-2 rounded-lg w-45 h-15">
                  <span class="text-gray-500">نسخه سیستم عامل:</span>
                  <span class="font-semibold">iOS 18</span>
                </div>
                <div class="flex flex-col gap-y-2 bg-base-100 p-2 rounded-lg w-45 h-15">
                  <span class="text-gray-500">رزولوشن دوربین اصلی:</span>
                  <span class="font-semibold">48 مگاپیکسل</span>
                </div>
                <div class="flex flex-col gap-y-2 bg-base-100 p-2 rounded-lg w-45 h-15">
                  <span class="text-gray-500">اندازه:</span>
                  <span class="font-semibold ">6.1</span>
                </div>
              </div>
            </div>


          </div>
        </div>


      </div>

      <!-- product section -->
                          <div class="bg-base-200  rounded-xl p-6 w-[350px] h-fit sticky top-6 ">
              <div class="text-3xl font-bold  mb-4">
                {{ formatPrice(product.price_with_discount) }} تومان
              </div>

              <!-- Quantity Selector -->
              <div class="mb-4">
                
                <div class="flex items-center justify-between gap-3 border border-info rounded-lg p-3">
                  <button 
                    @click="increaseQuantity"
                    class="w-8 h-8  text-green-500 rounded-lg flex items-center justify-center "
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                  </button>
                  <span class="w-12 text-center font-semibold text-lg">{{ quantity }}</span>
                  <button 
                    @click="decreaseQuantity"
                    class="w-8 h-8 text-red-500 rounded-lg flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>

                  </button>
                </div>
              </div>

              <!-- Total Price -->
               <div class="flex justify-between bg-base-100 mb-4  text-lg font-semibold p-2 rounded-lg">
                <div class="">
                مجموع خرید : 
              </div>
              <div>{{ formatPrice(totalPrice) }} تومان</div>
            </div>
              

              <!-- Social Proof -->
              <div class="text-sm text-gray-500 mb-4">
                +500 نفر بیش از 2 بار این کالا را خریده اند 💯
              </div>

              <!-- Add to Cart Button -->
              <button 
                @click="addToCart"
                class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                افزودن به سبد
              </button>

              <!-- Shipping Info -->
              <div class="text-sm text-gray-500 mt-3 text-center">
                ارسال رایگان برای خریدهای بالای 400 هزار تومان
              </div>
            </div>
         </div>   
    </div>



    <pageTitle :title1="'مرتبط'" :title2="'محصولات'" :about="'جدیدترین و بروز ترین محصولات'" :svgCode="'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'"></pageTitle>
<div class=" py-8">

          <div class="my-4 "> 
            <cardSlider2 :products="products" :compact="true"></cardSlider2>
          </div>
  </div>

  </div>
</template>

<script>
import { cartStore } from '../stores/cart.js'
import pageTitle from '@/components/pageTitle.vue';

import cardSlider2 from '@/components/cardSlider2.vue';




export default {
  name: 'DetailsView',
  components:{
    pageTitle,
    cardSlider2,
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      products: [],
      product: null,
      loading: true,
      error: null,
      quantity: 1,
      selectedImageIndex: 0,
      cartStore,
      
      colors: [
        { name: 'آبی', value: '#3B82F6' },
        { name: 'سبز', value: '#22C55E' },
        { name: 'سفید', value: '#FFFFFF' },
        { name: 'مشکی', value: '#000000' },
      ],
      selectedColor: null,
      selectedColorName: ''
    }
  },
  computed: {
    totalPrice() {
      return this.product ? this.product.price_with_discount * this.quantity : 0
    },
    discountedProducts() {
      return this.products.filter(product => product.price_with_discount < product.price).length
    },
    lowStockProducts() {
      return this.products.filter(product => product.quantity <= 3).length
    }
  },
  mounted() {
    console.log('Product ID from route:', this.id)
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      this.loading = true
      this.error = null
      
      console.log('Fetching product with ID:', this.id)
      const url = `http://127.0.0.1:3000/api/product?id=${this.id}`
      console.log('API URL:', url)
      
      try {
        const response = await fetch(url)
        console.log('Response status:', response.status)
        const data = await response.json()
        console.log('Response data:', data)
        const response2 = await this.axios.get('http://127.0.0.1:3000/api/products')
        this.products = response2.data
        console.log('Products loaded:', this.products)
        
        if (response.ok) {
          this.product = data
          console.log('Product loaded successfully:', this.product)
        } else {
          this.error = data.message || 'Product not found'
          console.log('Product not found error:', this.error)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
        this.error = 'Failed to load product. Please try again.'
      } finally {
        this.loading = false
      }
    },
    getImageUrl(imagePath) {
      return `http://127.0.0.1:3000${imagePath}`
    },
    formatPrice(price) {
      return new Intl.NumberFormat('fa-IR').format(Math.round(price))
    },
    handleImageError(event) {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='
    },
    increaseQuantity() {
      this.quantity++
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addToCart() {
      if (this.product) {
        this.cartStore.addItem(this.product, this.quantity)
        console.log('Product added to cart:', this.product.title, 'Quantity:', this.quantity)
      }
    },

    //choosing color
    selectColor(color) {
      this.selectedColor = color.value
      this.selectedColorName = color.name
      console.log('Selected color:', this.selectedColorName)
    }
  }
}
</script>


<style scoped>
.container {
  max-width: 1200px;
}
</style>
