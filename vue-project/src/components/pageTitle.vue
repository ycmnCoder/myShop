<template>
    <div class="block md:flex justify-between items-center mt-20">
        <div class="flex items-center">
            <div class="size-12 bg-base-200 shadow-lg rounded-lg flex justify-center items-center ml-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" :d="svgCode" />
</svg>
</div>
            <div>
<div class="text-2xl block sm:flex gap-1">
    <span>{{ title2 }}  </span>
    <span class="text-blue-500">{{ title1 }}</span>
</div>
<div class="text-sm font-light text-gray-400 ">{{ about }}</div>
            </div>
        </div>

<div v-on:click="goToShop();" class="mt-5 md:mt-0 ">
    <button class="bg-blue-600 rounded-xl px-3 py-1.5 text-white flex items-center justify-center gap-2 cursor-pointer">
    <span >مشاهده همه</span>
 <div class="rounded-full bg-blue-400 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

</div>

</button>
</div>

    </div>
</template>


<script>

export default {
    props:['title1','title2','about','svgCode']

}
</script>

<script setup>
function goToShop() {
  window.location.href = 'http://localhost:5173/shop';
}
</script>