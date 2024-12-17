<template>
  <div>
    <span @click="ExamStore.exit = !ExamStore.exit" :class="ExamStore.exit ? 'inset-0 bg-black/80 backdrop-blur-sm' : ''"
      class="overlay-leave fixed z-50 transition-all"></span>
      
    <div id="alert-leave" :class="ExamStore.exit ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'left-1/2 -translate-x-1/2 -bottom-2/4'"
      class="lg:w-auto w-4/5 alert-leave transition-all duration-300 flex flex-col justify-center fixed z-50 py-5 lg:px-20 px-5 rounded-2xl shadow-lg shadow-gray-400 bg-white dark:bg-fpDark2">
      <div class="text-center mb-12 space-y-5">
        <p class="text-3xl font-medium dark:text-fpLightBack">{{ $t("confirm_exit") }}</p>
        <span class="text-xl text-gray-500 block dark:text-fpLightGray">{{ $t("com_back_soon") }}</span>
      </div>
      <div class="grid grid-cols-2 items-center gap-4 mt-6 lg:mt-0">

        <button @click="ExamStore.exit = !ExamStore.exit" type="button" id="button-leave"
          class="relative inline-flex items-center justify-center p-4 px-3.5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-0 hover:ring-purple-500">
          <span
            class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span
            class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span class="relative text-white text-lg font-semibold flex flex-col items-center gap-y-2">
            <img src="/imgs/icons/happy-face.png" class="lg:size-10 size-7 animate-bounce transition-all" alt="">
            {{ $t("keep") }}
          </span>
        </button>

        <button @click="ExamStore.exitExam()" type="button"
          class="py-2.5 px-6 text-lg rounded-lg bg-red-50 text-red-500 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-100 hover:text-red-700 group">
          <span class="flex flex-col items-center gap-y-2">
            <img src="/imgs/icons/sad-face.png" class="lg:size-10 size-7 animate-pulse transition-all" alt="">
            {{ $t("exit") }}
          </span>
        </button>


      </div>
    </div>
  </div>
</template>

<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
</script>
