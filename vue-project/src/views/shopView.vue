
<template>
    
  <div class="py-8">
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

      </div>


    <div class="">
      

      

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

      <!-- Products Grid -->
      <div v-else-if="products.length > 0" class="block space-y-6 md:flex">

        <div class="bg-base-200 rounded-xl py-4 gap-y-4 w-full hidden lg:block md:w-[430px] h-full sticky top-6 font-light shadow-sm">
<div class="flex justify-between items-center w-full px-2 xl:px-4">
<div class="text-lg font-medium">فیلترها</div>
  <div class="text-sm text-blue-500">حذف فیلترها</div>
</div>

<div class=" px-2 xl:px-4 pt-4 ">
<div class="collapse m-0 p-0">
  <div class="flex justify-between items-center collapse-title p-0 m-0">
  <div>دسته بندی</div>
  <div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg></div>
</div>
  <input type="checkbox" />
  <div class="collapse-content p-2 flex flex-col gap-y-4">
    <div class="mt-3">
      <input type="checkbox"  class="checkbox checkbox-primary" />

      &nbsp;&nbsp;
      همه کالاها
    </div>
    <div>
            <input type="checkbox"  class="checkbox checkbox-primary" />
      
             &nbsp;&nbsp;
            موبایل
    </div>
    <div>      <input type="checkbox"  class="checkbox checkbox-primary" />
      &nbsp;&nbsp;
      
      لپ تاپ </div>
    <div>      <input type="checkbox"  class="checkbox checkbox-primary" />


      &nbsp;&nbsp;
    هدست</div>
  </div>
</div>
</div>


<div class="flex justify-between items-center px-2 xl:px-4 mb-4 pt-3">
<div>فقط کالاهای موجود</div>
  <div><input
  type="checkbox"
  checked="checked"
  
  class="toggle toggle-md bg-blue-500 border-blue-500 text-white  checked:bg-success checked:text-white checked:border-success"
/></div>
</div>

<div class="flex justify-between items-center px-2 xl:px-4 pt-4 mb-4">
  <div class="flex items-center gap-2">
    <div>ارسال امروز</div>
    <img src="../assets/pics/time.png" alt="" class="size-5">
    
  </div>

  <div><input
  type="checkbox"
  checked="checked"
  
  class="toggle toggle-md bg-blue-500 border-blue-500 text-white  checked:bg-success checked:text-white checked:border-success"
/></div>
</div>

<div class="flex justify-between items-center px-2 xl:px-4 pt-4">
<div class="collapse m-0 p-0">
  <div class="flex justify-between items-center collapse-title p-0 m-0" >
  <div>محدوده قیمت</div>
  <div class=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg></div>
</div>
  <input type="checkbox" />
  <div class="collapse-content p-2 flex flex-col gap-y-4">
  <div class=" p-6 w-full" dir="ltr">
    

    
     

      <input
      
        type="range"
        id="price-range"
        class="w-full accent-blue-500"
        min="0"
        max="1000"
        :value="price"
        @input="updatePrice"
      />
    

    <div class="flex justify-between text-gray-500" >
      <span dir="rtl">{{ price }}  تومان</span>
      <span dir="rtl">1000 تومان</span>
    </div>
  </div>
  </div>
</div>
</div>

<div class="flex justify-between items-center px-2 xl:px-4 pt-4 mb-4">
  <div class="flex items-center gap-2">
    <div>ارسال فروشنده</div>
    <img src="../assets/pics/seller.svg" alt="" class="size-5">
    
  </div>

  <div><input
  type="checkbox"
  checked="checked"
  
  class="toggle toggle-md bg-blue-500 border-blue-500 text-white  checked:bg-success checked:text-white checked:border-success"
/></div>
</div>

<div class="flex justify-between items-center px-2 xl:px-4 pt-4 mb-4">
  <div class="flex items-center gap-2">
    <div>خرید حضوری در تهران</div>
    <img src="../assets/pics/shop.png" alt="" class="size-5">
    
  </div>

  <div><input
  type="checkbox"
  checked="checked"
  
  class="toggle toggle-md bg-blue-500 border-blue-500 text-white  checked:bg-success checked:text-white checked:border-success"
/></div>
</div>


        </div>


        <!-- products list -->
         <div class="flex flex-col w-full">
          <div class="mr-5 flex justify-between items-center mb-8">

            <div class="flex justify-center items-center lg:hidden">
              <button class="rounded-full border border-info flex items-center gap-1 font-light text-sm py-2 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-info">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
</svg>

                <span>مرتبط ترین</span>
              </button>



                            <button class="rounded-full border border-info flex items-center gap-1 font-light text-sm py-2 px-3">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-info">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
</svg>


                <span>فیلتر</span>
              </button>

            </div>

            <div class="hidden lg:flex items-center justify-center gap-5">


              <div class="flex items-center justify-center gap-2 text-gray-400 ">
                
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
</svg>
<span class="font-medium">مرتب سازی:</span>
                


              </div>
              <div class="text-blue-500 font-light cursor-pointer">محبوب ترین</div>
              <div class="text-gray-400 font-light cursor-pointer">پرفروش ترین</div>
              <div class="text-gray-400 font-light cursor-pointer">ارزان ترین</div>
              <div class="text-gray-400 font-light cursor-pointer">گران ترین</div>
            </div>



            <span class="font-light text-sm text-gray-400 ml-5">۱۳,۰۴۰ کالا</span>




          </div>
        <div class="flex flex-wrap gap-4 w-full justify-center items-center">

        <Card
          v-for="product in products" 
          :key="product.id" 
          :product="product"
        />
    </div>
    <div class="flex items-center justify-center w-full mt-8 gap-x-4 ">

<div class="size-8 rounded-lg shadow-sm bg-base-200 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out flex justify-center items-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</div>

<div class="size-8 rounded-lg shadow-sm bg-blue-500 text-white flex justify-center items-center ">
  <span>1</span>
</div>

<div class="size-8 rounded-lg shadow-sm bg-base-200 hover:bg-blue-500  hover:text-white transition-all duration-300 ease-in-out flex justify-center items-center ">
  <span>2</span>
</div>

<div class="size-8 rounded-lg shadow-sm bg-base-200 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out flex justify-center items-center ">
  <span>...</span>
</div>

<div class="size-8 rounded-lg shadow-sm bg-base-200 hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out flex justify-center items-center "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

</div>



    </div>
    </div>
      </div>


      <!-- Empty State -->
      <div v-else class="text-center py-20">
        <div class="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg max-w-md mx-auto">
          <h3 class="font-bold">No Products Found</h3>
          <p class="text-sm">There are no products available at the moment.</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import slider from '../components/slider.vue'
import cardSlider from '../components/cardSlider.vue'
export default {
  name: 'HomeView',

  components: {
    Card,
    slider,
    cardSlider,
  },
  data() {
    return {
      products: [],
      loading: true,
      price: 500,
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
    updatePrice(event) {
      this.price = event.target.value; // مقدار جدید را از input می‌گیرد
    },
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



