<template>

  <!-- Navabar -->
    <div class="navbar bg-base-100 shadow-none py-5 px-0">
<div class="navbar-start relative">
    <div>
    <!-- hamburger menu   -->
    <button 
      @click="isOpen = true"
      class="rounded-full border border-info bg-base-200 p-2 transition-transform duration-300 xl:hidden"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

  <!-- blur backdrop -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 hidden sm:block"
      @click="isOpen = false"
    ></div>

  <!-- menu from right -->
    <div
      :class="[
        'fixed top-0 right-0 xs:-right-5  h-full w-full md:w-64 pr-5 bg-base-200 shadow-lg transform transition-transform duration-300 z-50',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <!--  close button -->
      <div class="flex justify-end p-3">
        <button @click="isOpen = false" class="p-1 text-gray-500 hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      
      <ul class="p-4 space-y-4 text-base font-light">
        <li><a href="http://localhost:5173/" class="hover:text-blue-500 transition-colors pr-4 ">صفحه اصلی</a></li>
        <li><div tabindex="0" class="collapse collapse-arrow my-0">
  <div class="collapse-title">دسته بندی</div>
  <div class="collapse-content text-sm flex flex-col gap-y-3 mr-3">
    <div>موبایل</div>
    <div>لپ تاپ</div>
    <div>تبلت</div>
    <div>هدفون</div>
    <div>تخفیف</div>
    <div>کامپیوتر</div>
  </div>
</div></li>
        <li><a href="http://localhost:5173/shop" class="hover:text-blue-500 transition-colors pr-4">فروشگاه</a></li>
        <li><a href="#" class="hover:text-blue-500 transition-colors pr-4">تماس با ما</a></li>
      </ul>
    </div>
  </div>
  <input 
    type="text" 
    placeholder="جستجو در کارین..." 
    class="hidden  xl:flex w-80 border border-info bg-base-200 p-2.5 pr-12 rounded-full placeholder:text-gray-400 placeholder:font-light focus:outline-none"
  >


  <button 
    class="absolute hidden  xl:flex lg:right-1  top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  </button>
</div>

  <div class="navbar-center">

   <a href="#" class="cursor-pointer flex flex-col items-center text-4xl">
  <div class="flex items-center font-bold">
    <span class="text-primary">کارین</span>
    <span>شاپ</span>
  </div>
  <span class="text-base text-gray-400 ">خرید موبایل و لپ تاپ</span>
</a>

  </div>


  <div class="navbar-end flex gap-3">
<div class="dropdown dropdown-hover group relative hidden lg:flex">
 
  <div
    tabindex="0"
    role=""
    class="flex items-center gap-1 border border-info rounded-full p-2 px-3.5 cursor-pointer transition-colors bg-base-200 duration-300 "
@click="goToAccount()"
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" stroke-width="1.5"
      stroke="currentColor" class="size-5">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 
           3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 
           7.5 0 0 1 14.998 0A17.933 17.933 0 0 
           1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
    <div class="font-light">حساب کاربری</div>
  </div>

  <!-- dropdown -->
  <ul
    tabindex="-1"
    :class="[
      'dropdown-content menu rounded-box z-[9999] w-52 p-2 shadow-sm opacity-0 translate-y-5 scale-95 transition-all duration-300 ease-in-out pointer-events-none group-hover:opacity-100 group-hover:translate-y-10 group-hover:scale-100 group-hover:pointer-events-auto left-1/2 -translate-x-1/2 mt-2 flex justify-center',
      isDark ? 'bg-base-300 text-white' : 'bg-base-100 text-black'
    ]"
  >
    <li><a class="hover:bg-primary hover:text-white transition-colors duration-200 "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>سفارشات من </a>
</li>
    <li><a class="hover:bg-primary hover:text-white transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
لیست پیام ها</a></li>
    <li @click="goToAccount()"><a class="hover:bg-primary hover:text-white transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
اطلاعات کاربری</a></li>
    <li><a class="hover:bg-red-500 hover:text-white transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
</svg>
خروج از حساب</a></li>
  </ul>
</div>

<button
  class="rounded-full border border-info bg-base-200 p-2 transition-transform duration-300"
  @click="toggleTheme"
  :aria-label="isDark ? 'تغییر به تم روشن' : 'تغییر به تم تاریک'"
>
  <span :class="['block transition-transform duration-300', isDark ? 'rotate-180' : 'rotate-0']">
    <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
  
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

  </span>
</button>



   <!-- shopping cart button  -->
   <div class="dropdown dropdown-end relative flex">
     <div 
       class="btn btn-ghost btn-circle relative cursor-pointer"
       @click.stop="cartStore.toggleCart()"
     >
       <div class="relative rounded-full bg-secondary p-2 inline-flex">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
         </svg>
         
         <!-- Badge -->
          
       <span 
  v-if="cartStore.getTotalItems() > 0"
  class="absolute inline-flex font-base -top-1 -right-0.5 bg-red-500 text-[10px] text-white font-base
         w-4 h-4 rounded-full items-center justify-center leading-none "
>
  {{ cartStore.getTotalItems() }}
</span>

       </div>
     </div>

         <!-- blur backdrop-->
    <div 
      v-if="cartStore.getState().isOpen"
      class="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]"
      @click="cartStore.closeCart()"
    ></div>


     <!-- Cart Dropdown -->
      
     <div 
       v-if="cartStore.getState().isOpen"
       class="fixed backdrop-blur-sm top-0 left-0 w-96 h-screen bg-base-100 shadow-xl border border-info z-[9999] flex flex-col"
       dir="rtl"
     >
       
       <div class="flex items-center justify-between p-4 border-b border-info" dir="ltr">
         <button 
           @click="cartStore.closeCart()"
           class="text-gray-400 hover:text-gray-600 transition-colors"
         >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
           </svg>
         </button>
         <div>
         <span class="text-lg font-semibold ">سبد خرید</span><span class="text-sm text-info" > ({{ cartStore.getTotalItems() }})</span><span  class="text-sm text-info">مورد</span>
         </div>
       </div>

       <!-- Cart Items -->
       <div class="flex-1 overflow-y-auto">
         <!-- Empty State -->
         <div v-if="cartStore.getState().items.length === 0" class="p-8 text-center text-gray-500">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto mb-4 text-gray-300">
             <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
           </svg>
           <p class="text-gray-500">سبد خرید شما خالی است</p>
         </div>

         <!-- Cart Items List -->
         <div v-else class="p-4 space-y-3">
           <div 
             v-for="item in cartStore.getState().items" 
             :key="item.id"
             class="flex items-center gap-3 p-3 bg-base-200 rounded-lg"
           >
             <!-- Product Image -->
             <div class="w-16 h-16  overflow-hidden flex-shrink-0">
               <img 
                 :src="getImageUrl(item.images[0])" 
                 :alt="item.title"
                 class="w-full h-full object-contain"
                 @error="handleImageError"
               />
             </div>

             <!-- Product Info -->
             <div class="flex-1 min-w-0">
               <h4 class="text-sm font-medium line-clamp-2">{{ item.title }}</h4>
               <p class="text-sm text-blue-600 font-semibold">{{ formatPrice(item.price_with_discount) }} تومان</p>
             </div>

             <!-- Quantity Controls -->
             <div class="flex items-center gap-1 border border-info rounded-lg py-0 px-2">
               <button 
                 @click="cartStore.updateQuantity(item.id, item.quantity - 1)"
                 class=" text-red-500 rounded text-xl flex items-center justify-center  "
               >
                 -
               </button>
               <span class="w-8 text-center text-sm font-semibold">{{ item.quantity }}</span>
               <button 
                 @click="cartStore.updateQuantity(item.id, item.quantity + 1)"
                 class="  text-green-500 rounded text-xl flex items-center justify-center  "
               >
                 +
               </button>
             </div>
           </div>
         </div>
       </div>

       <!-- Cart Footer -->
       <div v-if="cartStore.getState().items.length > 0" class="p-4 border-t border-gray-200 bg-base-200 flex-shrink-0">
         <div class="flex items-center justify-between mb-4">
           <span class="text-sm text-gray-500 ">مبلغ قابل پرداخت :</span>
           <span class="text-lg font-bold text-blue-600">{{ formatPrice(cartStore.getTotalPrice()) }} تومان</span>
         </div>
         <router-link 
           to="/cart"
           class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
         >
           مشاهده سبد خرید
         </router-link>
       </div>
     </div>
   </div>
  </div>
</div>


<!-- Navigation menu -->

<div class="rounded-full bg-base-300 w-full px-5 h-16 text-gray-200  justify-between items-center gap-10 hidden xl:flex">
        <ul class="menu menu-horizontal text-base font-light ">
          <!-- Navbar menu content here -->
          <li><a class="nav-link" href="http://localhost:5173/">صفحه اصلی</a></li>
          <li><a><div class="dropdown dropdown-hover group relative nav-link">
  
  <div
    tabindex="0"
    role="button"
    class="flex items-center gap-1 transition-colors duration-300 group"
  >
      <div class="font-light">دسته بندی ها</div>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 group-hover:rotate-180 duration-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>




  </div>

  <!-- dropdown -->
  <div
    tabindex="-1"
    :class="[
      'dropdown-content absolute right-0 rounded-box z-[9999] p-0 border-0 shadow-none opacity-0 translate-y-5 scale-95 transition-all duration-300 ease-in-out pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto translate-x-0 mt-6 flex h-[380px] w-[850px]',
      isDark ? 'bg-base-300 text-white' : 'bg-base-100 text-black'
    ]"
    @mouseenter="hoveredCategory = null"
  >
    <!-- Main Categories List -->
    <div class="w-[200px]  p-4">
      <ul class="bg-base-100 p-5 h-full rounded-lg space-y-4">
        <li 
          v-for="category in categories" 
          :key="category.id"
          class="flex justify-center rounded cursor-pointer transition-colors "
          :class="hoveredCategory === category.id ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white'"
          @mouseenter="hoveredCategory = category.id"
        >
        
          <span class="font-base">{{ category.name }}</span>
        </li>
      </ul>
    </div>

    <!-- Subcategories Panel -->
    <div v-if="hoveredCategory" class="flex-1 p-4">
      <a href="http://localhost:5173/shop" class="text-blue-600 text-sm mb-3 flex items-center gap-1">مشاهده همه <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</a>
      <div class="grid grid-cols-3 gap-0 w-full place-items-stretch ">
        <!-- Brands Column -->
        <div class="">
          
          <h4 class="font-semibold text-gray-900 mb-3">برندهای مختلف</h4>
          
          <ul class="space-y-1 ">
            <li v-for="brand in getCurrentCategory().subcategories.brands" :key="brand" class="text-base text-gray-400 hover:text-gray-700  cursor-pointer">
              {{ brand }}
            </li>
          </ul>
        </div>

        <!-- Price Column -->
        <div class="">
          <h4 class="font-semibold text-gray-900 mb-3">{{ getCurrentCategory().name }} بر اساس قیمت</h4>
          <ul class="space-y-1 ">
            <li v-for="price in getCurrentCategory().subcategories.price" :key="price" class="text-base text-gray-400 hover:text-gray-700 cursor-pointer">
              {{ price }}
            </li>
          </ul>
        </div>

        <!-- Accessories Column -->
        <div class="">
          <h4 class="font-semibold text-gray-900 mb-3">لوازم جانبی {{ getCurrentCategory().name }}</h4>
          <ul class="space-y-1 w-full">
            <li v-for="accessory in getCurrentCategory().subcategories.accessories" :key="accessory" class="text-base text-gray-400 hover:text-gray-700 cursor-pointer">
              {{ accessory }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div></a>
</li>
 <li><a class="nav-link" href="http://localhost:5173/shop">فروشگاه</a></li>
  <li><router-link to="/cart" class="nav-link">سبد خرید</router-link></li>
  <li><a class="nav-link">وبلاگ</a></li>
          <li><a><div class="dropdown dropdown-hover group relative nav-link">

  <div
    tabindex="0"
    role="button"
    class="flex items-center gap-1 transition-colors duration-300 "
  >
      <div class="font-light">منوی ساده</div>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 group-hover:rotate-180 duration-300">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>




  </div>

  <!-- dropdown -->
  <ul
    tabindex="-1"
    :class="[
      'dropdown-content menu rounded-box z-[9999] w-52 p-2 shadow-sm opacity-0 translate-y-5 scale-95 transition-all duration-400 ease-in-out pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto left-0 -translate-x-1/2 mt-8 flex justify-center',
      isDark ? 'bg-base-300 text-white' : 'bg-base-100 text-black'
    ]"
  >
    <li><a class="hover:bg-primary hover:text-white transition-colors duration-200 ">درباره ما</a>
</li>
    <li><a class="hover:bg-primary hover:text-white transition-colors duration-200">
سوالات متداول</a></li>
    <li><a class="hover:bg-primary hover:text-white transition-colors duration-200">
تماس با ما</a></li>
    <li><div class="dropdown dropdown-hover dropdown-right hover:bg-primary hover:text-white transition-colors ">
      <div class="flex justify-between items-center">
        <a  tabindex="0" class="">صفحات</a>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
 </div>
  <ul tabindex="-1" :class="['dropdown-content duration-400 ease-in-out menu rounded-box z-[9999] w-52 p-2 shadow-sm -translate-y-13 right-47', isDark ? 'bg-base-300 text-white' : 'bg-base-100 text-black']">
    <li><a  class="hover:bg-primary hover:text-white transition-colors  duration-200">فروشگاه</a></li>
    <li><a  class="hover:bg-primary hover:text-white transition-colors duration-200">جزئیات محصول</a></li>
        <li><a  class="hover:bg-primary hover:text-white transition-colors duration-200">پنل کاربری</a></li>
    <li><a  class="hover:bg-primary hover:text-white transition-colors duration-200">سبد خرید</a></li>
    <li><a  class="hover:bg-primary hover:text-white transition-colors duration-200">صفحه ورود</a></li>

  </ul>
</div></li>
  </ul>
</div></a>
</li>




        </ul>

<!-- blur dropdown -->

<div class="relative">

  <button tabindex="0" class=" m-1 peer z-20 relative cursor-pointer flex items-center justify-center gap-1 ml-3">
    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span>
   <span>آدرس خود را انتخاب کنید</span>
  </button>


  <div
    class="fixed inset-0 z-20 hidden peer-focus:block backdrop-blur-sm bg-black/10 transition-all duration-300"
  ></div>

  <ul
    :class="['absolute z-[9999] hidden bg-base-200 peer-focus:block menu rounded-lg shadow-sm w-52 py-2 px-3 left-1/2 -translate-x-1/2 mt-2', isDark ? ' text-white' : ' text-black']"
  >
  
    <div class="mb-2 relative"> 
      <input type="text" class="bg-gray-300 p-2 pr-6 rounded-lg text-right w-[190px] placeholder:pr-0" placeholder="جستجوی شهر...">
      <div class="absolute right-1 top-0 text-gray-500 translate-y-1.5 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
    </div>
  <span class="text-base mb-5">شهرهای پر تکرار:</span>

 <li class="mt-3">

    <div class="flex justify-between items-center hover:bg-blue-500 hover:text-white px-0.5">
      <div class="flex items-center justify-center">  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> <span>تهران</span></div>
  

  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</span>
</div>
 </li>

  <li class="mt-3">

    <div class="flex justify-between items-center hover:bg-blue-500 hover:text-white px-0.5">
      <div class="flex items-center justify-center">  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> <span>اصفهان</span></div>
  

  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</span>
</div>
 </li>
  <li class="mt-3">

    <div class="flex justify-between items-center hover:bg-blue-500 hover:text-white px-0.5">
      <div class="flex items-center justify-center">  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> <span>شیراز</span></div>
  

  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</span>
</div>
 </li>
 <li class="mt-3">

    <div class="flex justify-between items-center hover:bg-blue-500 hover:text-white px-0.5">
      <div class="flex items-center justify-center">  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> <span>تبریز</span></div>
  

  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</span>
</div>
 </li>

  <li class="mt-3">

    <div class="flex justify-between items-center hover:bg-blue-500 hover:text-white px-0.5">
      <div class="flex items-center justify-center">  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> <span>مشهد</span></div>
  

  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</span>
</div>
 </li>
  </ul>
</div>



</div>


</template>
<script>
import { cartStore } from '../stores/cart.js'


export default {
  name: 'Navbar',
  data() {
    return {
      isDark: false,
      cartStore,
      hoveredCategory: null,
      categories: [
        {
          id: 'mobile',
          name: 'موبایل',
          icon: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
          subcategories: {
            brands: ['گوشی آیفون', 'گوشی سامسونگ', 'گوشی هواووی', 'گوشی شیامی', 'گوشی نوکیا', 'گوشی آنر'],
            price: ['گوشی ارزان', 'گوشی موبایل قسطی', 'گوشی تا ۲ میلیون ', 'گوشی تا ۵ میلیون ', 'گوشی تا ۷ میلیون ', 'گوشی تا ۱۵ میلیون ', 'گوشی بالای ۱۵ میلیون '],
            accessories: ['شارژر گوشی', 'شارژر وایرلس', 'قاب و کاور گوشی', 'گلس گوشی', 'هولدر گوشی موبایل', 'کابل شارژ و مبدل', 'پاوربانک (شارژر همراه)']
          }
        },
        {
          id: 'laptop',
          name: 'لپتاپ',
          icon: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25',
          subcategories: {
            brands: ['لپتاپ ایسوس', 'لپتاپ لنوو', 'لپتاپ اچ پی', 'لپتاپ دل', 'لپتاپ اپل', 'لپتاپ سامسونگ'],
            price: ['لپتاپ ارزان', 'لپتاپ تا ۱۰ میلیون ', 'لپتاپ تا ۲۰ میلیون ', 'لپتاپ تا ۳۰ میلیون ', 'لپتاپ بالای ۳۰ میلیون '],
            accessories: ['کیبورد لپتاپ', 'ماوس لپتاپ', 'کیف لپتاپ', 'کول پد لپتاپ', 'شارژر لپتاپ', 'هارد اکسترنال']
          }
        },
        {
          id: 'tablet',
          name: 'تبلت',
          icon: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
          subcategories: {
            brands: ['تبلت آیپد', 'تبلت سامسونگ', 'تبلت هواووی', 'تبلت شیامی', 'تبلت لنوو'],
            price: ['تبلت ارزان', 'تبلت تا ۵ میلیون ', 'تبلت تا ۱۰ میلیون ', 'تبلت تا ۱۵ میلیون ', 'تبلت بالای ۱۵ میلیون '],
            accessories: ['کیف تبلت', 'قلم تبلت', 'شارژر تبلت', 'کابل تبلت', 'هولدر تبلت']
          }
        },
        {
          id: 'headphone',
          name: 'هدفون',
          icon: 'M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25V18.75m6 0a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25V18.75',
          subcategories: {
            brands: ['هدفون اپل', 'هدفون سونی', 'هدفون بوز', 'هدفون سامسونگ', 'هدفون هواووی'],
            price: ['هدفون ارزان', 'هدفون تا ۱ میلیون ', 'هدفون تا ۳ میلیون ', 'هدفون تا ۵ میلیون ', 'هدفون بالای ۵ میلیون '],
            accessories: ['کیف هدفون', 'کابل هدفون', 'آداپتور هدفون', 'پد هدفون']
          }
        },
        {
          id: 'discount',
          name: 'تخفیف',
          icon: '',
          subcategories: {
            brands: ['تخفیف ویژه', 'فروش ویژه', 'پیشنهاد ویژه'],
            price: ['تخفیف تا ۵۰٪', 'تخفیف تا ۷۰٪', 'تخفیف بالای ۷۰٪'],
            accessories: ['کالاهای تخفیف دار', 'پیشنهادات ویژه']
          }
        },
        {
          id: 'computer',
          name: 'کامپیوتر',
          icon: 'M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25',
          subcategories: {
            brands: ['کامپیوتر ایسوس', 'کامپیوتر لنوو', 'کامپیوتر اچ پی', 'کامپیوتر دل'],
            price: ['کامپیوتر ارزان', 'کامپیوتر تا ۱۵ میلیون ', 'کامپیوتر تا ۲۵ میلیون ', 'کامپیوتر بالای ۲۵ میلیون '],
            accessories: ['مانیتور', 'کیبورد', 'ماوس', 'اسپیکر', 'وب کم', 'هارد']
          }
        }
      ]
    }
  },
  created() {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      this.applyTheme('dark')
    } else if (saved === 'light') {
      this.applyTheme('light')
    } else {
      // default theme
      this.applyTheme('light')
    }
  },
  mounted() {
    // Close cart when clicking outside
    document.addEventListener('click', (event) => {
      const cartDropdown = this.$el.querySelector('.dropdown-content')
      const cartButton = this.$el.querySelector('[role="button"]')
      
      if (cartDropdown && cartButton && 
          !cartDropdown.contains(event.target) && 
          !cartButton.contains(event.target)) {
        this.cartStore.closeCart()
      }
    })
  },
  methods: {
    goToAccount() {
    this.$router.push('/account')
  },
    toggleTheme() {
      const next = this.isDark ? 'light' : 'dark'
      this.applyTheme(next)
    },
    applyTheme(theme) {
      this.isDark = theme === 'dark'
      const root = document.documentElement
      root.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
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
    getCurrentCategory() {
      return this.categories.find(cat => cat.id === this.hoveredCategory) || this.categories[0]
    }
  }
}
</script>
<script setup>
import { ref } from "vue";


const isOpen = ref(false);


</script>

