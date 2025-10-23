<template>
  <div
    class="w-[286px] h-[304px] cursor-pointer rounded-lg shadow-sm bg-base-200 p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-md group relative overflow-hidden"
  >
   
    <div class="relative overflow-hidden rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl">
      <img
        :src="image"
        alt=""
        class="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
      />

      
      <button
        class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >


        <span
          class="border-2 border-white text-white px-3 py-1 rounded-xl  shadow-md transition flex items-center gap-1 "
        >
          ادامه مطلب <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
        </span>
      </button>
    </div>

   
    <div class="font-semibold text-base my-5">{{ title }}</div>

    
    <div class="bg-gray-200 w-full h-0.25"></div>

    
    <div class="flex items-center justify-between mt-3">
      <div class="flex items-center gap-1 text-blue-500 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
        <span class="mt-1">1403/5/1</span>
      </div>

      <div class="flex items-center gap-0.5 text-gray-300 text-sm">
        <span>120</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image']
}
</script>
