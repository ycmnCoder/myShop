<template>
  <div class="relative bg-base-200 rounded-xl shadow-lg w-60 h-75 flex flex-col p-5 font-dana overflow-hidden" dir="rtl" @click="navigateToProduct">

    <div  class="absolute top-3 left-3 flex items-start justify-center gap-1 z-10 text-gray-400 font-light">
      <span>5.0</span> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
</span>
   
      
    </div>



  <img
    :src="getImageUrl(product.images[0])"
    :alt="product.title"
    class="max-w-full max-h-48 object-contain drop-shadow-lg absolute hover:scale-105 transition-transform duration-400 ease-in-out   "
    
    @error="handleImageError"
  />





    <!-- Product Details -->
    <div class="mt-auto">
      <h3 class="text-sm font-medium  mb-4 text-right leading-relaxed line-clamp-2">
        {{ product.title }}
      </h3>
      
      <div class="flex justify-between items-center gap-2"> 
        <div><span class="bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-2xl ml-2 whitespace-nowrap">
        {{ Math.round(((product.price - product.price_with_discount) / product.price) * 100) }}% 
      </span></div>
        <div>
        <span class="text-lg font-base font-dana">
          {{ formatPrice(product.price_with_discount) }}
        </span><span class="  py-1.5 text-xs font-base rounded-lg ">
          تومان
        </span></div> 

       
        
      
      </div>
    </div>
  </div>
</template>

<script>
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
      isHovered: false
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
  }
}
</script>

