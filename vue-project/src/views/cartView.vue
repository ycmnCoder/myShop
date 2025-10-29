<template>
  <div class=" py-8 " dir="rtl">
    <!-- Breadcrumb -->
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

        
        <a href="http://localhost:5173/cart">سبد خرید</a>

      </div>

    <div class="h-full  mx-auto p-4 rounded-lg">
      <div class="grid grid-cols-1  lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2">
          <!-- Cart Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
            <h4 class="text-xl ">
              سبد خرید 
            </h4>
            <span class="text-base font-light opacity-60">({{ cartStore.getTotalItems() }} کالا)</span></div>
            <button 
              @click="clearCart"
              class="flex items-center gap-2 transition-colors"
            >
              
              حذف همه<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>

          <!-- Cart Items -->
          <div v-if="cartStore.getState().items.length === 0" class="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 mx-auto mb-4 text-gray-300">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900 mb-2">سبد خرید شما خالی است</h3>
            <p class="text-gray-500 mb-6">محصولات مورد نظر خود را به سبد خرید اضافه کنید</p>
            <router-link to="/shop" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              شروع خرید
            </router-link>
          </div>

          <div v-else class="space-y-4">
            <div 
              v-for="item in cartStore.getState().items" 
              :key="item.id"
              class="bg-base-200 rounded-lg p-6 shadow-sm"
            >
              <div class="flex items-start gap-4">
                <!-- Product Image -->
                <div class="w-40 h-40 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    :src="getImageUrl(item.images[0])"
                    :alt="item.title"
                    class="w-full h-full object-contain"
                    @error="handleImageError"
                  />
                  
                </div>

                

                <!-- Product Details -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between mb-2">
                    
                    <h3 class="text-lg font-medium ">{{ item.title }}</h3>
                    <button 
                      @click="cartStore.removeItem(item.id)"
                      class="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  
                  </div>
                  <!-- Color Selection -->
                  <div class="flex items-center gap-2 mb-3">
      
                    <div class="flex items-center gap-2">
                      <div class="w-5 h-5 rounded-full bg-blue-500 shadow-sm"></div>
                      <span class="text-sm text-gray-400">آبی</span>
                    </div>
                  </div>

                  <!-- Features -->
                  <div class="flex flex-col gap-4 mb-4">
                    <div class="flex items-center gap-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

                      <span class="text-sm">گارانتی ۱۸ ماهه</span>
                    </div>
                    <div class="flex items-center gap-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                      <span class="text-sm">ارسال ۱ روز کاری</span>
                    </div>
                  </div>

                  <!-- Price -->
                  <div class="text-xl font-bold mb-4">
                    {{ formatPrice(item.price_with_discount) }} تومان
                  </div>
     <!-- Quantity Control -->
                  <div class="flex items-center gap-3">
                    <div class="flex items-center border border-info rounded-lg">
                     <button 
                        @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                        class="w-8 h-8 flex items-center justify-center text-green-500"
                      >
                        +
                      </button>
                      <span class="w-12 text-center font-medium">{{ item.quantity }}</span>
                       <button 
                        @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                        class="w-8 h-8 flex items-center justify-center text-red-500"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <!-- Actions -->
                  <div class="flex items-center gap-4 mt-4">
                 
                    <a href="#" class="text-blue-500 hover:text-blue-600 text-sm">
                      افزودن به خرید بعدی >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary  -->
        <div class="lg:col-span-1">
          <div class="bg-base-200 rounded-lg p-6 shadow-sm sticky top-4">
            <h2 class="text-lg font-semibold  mb-4">
              قیمت کالاها ({{ cartStore.getTotalItems() }})
            </h2>

            <div class="space-y-3 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-600">قیمت کالاها ({{ cartStore.getTotalItems() }}):</span>
                <span class="font-medium">{{ formatPrice(cartStore.getTotalPrice()) }} تومان</span>
              </div>
              
              <div class="flex justify-between text-green-600">
                <span>تخفیف:</span>
                <span>{{ formatPrice(0) }} تومان</span>
              </div>
              
              <hr class="border-dashed border-gray-300">
              
              <div class="flex justify-between text-lg font-bold">
                <span>مبلغ نهایی:</span>
                <span class="text-blue-600">{{ formatPrice(cartStore.getTotalPrice() - 0) }} تومان</span>
              </div>
            </div>

            <button 
              @click="proceedToCheckout"
              class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              تایید و تکمیل سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from '../stores/cart.js'

export default {
  name: 'CartView',
  data() {
    return {
      cartStore
    }
  },
  methods: {
    getImageUrl(imagePath) {
      return `http://127.0.0.1:3000${imagePath}`
    },
    formatPrice(price) {
      return new Intl.NumberFormat('fa-IR').format(Math.round(price))
    },
    handleImageError(event) {
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='
    },
    clearCart() {
      if (confirm('آیا مطمئن هستید که می‌خواهید همه محصولات را از سبد خرید حذف کنید؟')) {
        this.cartStore.clearCart()
      }
    },
    proceedToCheckout() {
      
      alert('صفحه پرداخت در حال توسعه است')
    }
  }
}
</script>
