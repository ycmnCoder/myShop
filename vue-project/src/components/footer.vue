<template>
<footer class="bg-gray-900 dark:bg-gray-800 text-white py-12 px-8 mt-16 rounded-2xl">
  <div class="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-8"> 

    <div class="w-full lg:w-[30%]">
      <div class="text-lg font-bold mb-4">درباره کارین شاپ</div>
      <div class="font-light text-gray-400 leading-loose">
        در فروشگاه آنلاین ما، بهترین مدل‌های موبایل و لپ‌تاپ از برندهای معتبر جهانی را با کیفیت بالا و قیمتی مناسب برای شما فراهم آورده‌ایم. با انتخاب محصولات ما، تجربه‌ای حرفه‌ای و لذت‌بخش از فناوری را در خانه یا محل کار داشته باشید.
      </div>
    </div>

  
    <div class="w-full lg:w-[10%]">
      <div class="text-lg font-bold mb-4">دسترسی سریع</div>
      <div class="font-light text-gray-400 leading-loose flex flex-col gap-y-2">
        <div>صفحه اصلی</div>
        <div>فروشگاه</div>
        <div>تماس با ما</div>
        <div>سوالات متداول</div>
      </div>
    </div>

  
    <div class="w-full lg:w-[30%] max-w-xs">
      <div class="text-lg font-bold mb-4">تماس با ما</div>
      <div class="font-light text-gray-400 leading-loose flex flex-col gap-y-5">
        <div class="flex justify-between gap-x-6">
          <div>شماره تماس:</div>
          <div dir="ltr">012-345 678</div>
        </div>
        <div class="flex justify-between gap-x-6">
          <div>آدرس ایمیل:</div>
          <div dir="ltr">KarinShop@gmail.com</div>
        </div>
        <div class="flex justify-between gap-x-6">
          <div>آدرس:</div>
          <div dir="ltr">بلوار آزادی، استاد معین پلاک ۱۰</div>
        </div>
      </div>
    </div>

    <!-- logo-->
    <div class="w-full lg:w-auto flex flex-col justify-start items-center lg:items-end gap-y-6">
      <div class="flex gap-3 items-center justify-center">
        <span class="w-16 h-16 lg:w-20 lg:h-20 bg-base-100 flex items-center justify-center rounded-xl">
          <img src="../assets/pics/1.png" alt="" class="w-16 h-16">
        </span>
        <span class="w-16 h-16 lg:w-20 lg:h-20 bg-base-100 flex items-center justify-center rounded-xl">
          <img src="../assets/pics/2.png" alt="" class="w-16 h-16">
        </span>
      </div>

      <button 
        @click="scrollToTop"
        class="inline-flex items-center gap-2 bg-gray-800 border-3 border-gray-400 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors cursor-pointer"
      >
        <span>بازگشت به بالا</span>
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
    </div>
  </div>


  <div class="flex flex-wrap justify-center lg:justify-start items-center gap-4 my-4">
 
  </div>

 
  <div class="flex flex-col lg:flex-row justify-between bg-gray-950 dark:bg-gray-900 rounded-xl p-6 gap-y-4 lg:gap-y-0">
    <div class="flex items-center font-bold text-3xl cursor-pointer" @click="scrollToTop">
      <span class="text-primary">کارین</span>
      <span class="text-white">شاپ</span>
    </div>

    <div class="relative w-full lg:w-auto">
      <button 
        class="absolute left-1 top-1/2 -translate-y-1/2 bg-primary cursor-pointer text-white p-1 w-15 rounded-xl"
      >ثبت
      </button>
      <input 
        type="text" 
        placeholder="از جدیدترین تخفیف ها باخبر شوید" 
        class="w-full lg:w-90 bg-gray-800 p-2.5 rounded-xl  placeholder:font-light focus:outline-none placeholder-transparent sm:placeholder-gray-400 sm:placeholder:font-light"
      >
    </div>
  </div>


</footer>


       
        <div class="text-center text-gray-400 text-sm mt-3">
          Copyright © ۲۰۲۵ Karin. All rights reserved
        </div>

</template>

<script>
export default {
  name: 'Footer',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
