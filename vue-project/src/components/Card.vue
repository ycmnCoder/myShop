<template>
  <div 
    class="relative bg-base-200 rounded-xl shadow-lg w-[320px] h-[384px] flex flex-col p-5 font-dana overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300" 
    dir="rtl"
    @click="navigateToProduct"
  >

    <div v-if="product.price_with_discount < product.price" class="absolute top-0 left-0 flex items-start z-10">
      
      <span class="text-blue-500 px-3 py-2 text-sm  rounded-b-lg ml-2 mt-4 whitespace-nowrap">
        {{ Math.round(((product.price - product.price_with_discount) / product.price) * 100) }}% تخفیف
      </span>
      <div class="w-1 h-8 mt-4 bg-blue-500 rounded-br-sm rounded-tr-sm"></div>
    </div>

  
    <div class="absolute top-4 right-4 flex gap-2 z-10">
      <button @click.stop="addToCart" class="w-8 h-8 border border-info rounded-full bg-base-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
      </button>
      <button @click.stop="toggleFavorite" class="w-8 h-8 border border-info rounded-full bg-base-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all">
        <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>
      <button @click.stop="compareProduct" class="w-8 h-8 border border-info rounded-full bg-base-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all">
        <svg class="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
        </svg>

      </button>
    </div>

    <!-- Product Image -->
<div 
  class="flex-1 flex items-center justify-center my-5 relative"
  @mouseenter="isHovered = true"
  @mouseleave="isHovered = false"
>

  <img
    :src="getImageUrl(product.images[0])"
    :alt="product.title"
    class="max-w-full max-h-48 object-contain drop-shadow-lg absolute transition-opacity duration-700 ease-in-out transform "
    :class="isHovered ? 'opacity-0 ' : 'opacity-100' "
    @error="handleImageError"
  />

 
  <img
    :src="getImageUrl(product.images[1] || product.images[0])"
    :alt="product.title"
    class="max-w-full max-h-48 object-contain drop-shadow-lg absolute transition-opacity duration-700 ease-in-out transform "
    :class="isHovered ? 'opacity-100 ' : 'opacity-0 '"
    @error="handleImageError"
  />
</div>



    <!-- product details -->
    <div class="mt-auto">
      <h3 class="text-sm font-medium  text-right leading-relaxed line-clamp-2">
        {{ product.title }}
      </h3>
       <div class="w-full h-0.25 bg-gray-200 my-3 "></div>
      
      <div class="flex flex-row-reverse items-center gap-2">
        <button class="bg-blue-500 text-white px-2 py-1 text-xs font-light rounded-full hover:bg-blue-600 transition-colors">
          تومان
        </button>
        <span class="text-lg font-bold font-dana">
          {{ formatPrice(product.price_with_discount) }}
        </span>
       
        <span v-if="product.price_with_discount < product.price" class="text-sm text-gray-400 line-through font-dana">
          {{ formatPrice(product.price) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from '../stores/cart.js'

export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
      required: true,
      validator(value) {
        return value && 
               typeof value.id === 'number' &&
               typeof value.title === 'string' &&
               typeof value.price === 'number' &&
               typeof value.price_with_discount === 'number' &&
               typeof value.quantity === 'number';
      }
    }
  },
  data() {
    return {
      isHovered: false,
      cartStore
    }
  },
  methods: {
    getImageUrl(imagePath) {
  
      return `http://127.0.0.1:3000${imagePath}`;
    },
    formatPrice(price) {
     
      return new Intl.NumberFormat('fa-IR').format(Math.round(price));
    },
    handleImageError(event) {
      
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
    },
    navigateToProduct() {

      console.log('Navigating to product:', this.product.id)
      this.$router.push({ name: 'product-details', params: { id: this.product.id } });
    },
    addToCart() {

      this.cartStore.addItem(this.product, 1)
      console.log('Adding to cart:', this.product.id);
    },
    toggleFavorite() {

      console.log('Toggling favorite:', this.product.id);

    },
    compareProduct() {

      console.log('Adding to comparison:', this.product.id);

    }
  }
}
</script>

