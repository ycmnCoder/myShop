
<template>
    
  <div class="min-h-screen py-8">
      <div class="flex items-center font-light text-sm gap-2 mb-5 text-gray-300">
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


    <div class=" mx-auto px-4 ">
      

      

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
      <div v-else-if="products.length > 0" class="block space-y-6 md:flex gap-8 justify-center">

        <div class="bg-base-200  rounded-xl p-6 w-full md:w-[300px] h-fit sticky top-6 border border-info"></div>
        <div class="flex flex-wrap gap-5 w-full justify-center">

        <Card
          v-for="product in products" 
          :key="product.id" 
          :product="product"
        />
      </div>
      </div>


      <!-- bg-base-200  rounded-xl p-6 w-[350px] h-fit sticky top-6  -->
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


