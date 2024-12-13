<template>
  <div class="pt-4 mt-4">
    <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 sm:pt-5">

      <!-- Tab Button "aboute" -->
      <div class="relative group cursor-pointer" @click="CourseStore.setValueTap('aboute')">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[CourseStore.showTap == 'aboute' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-center gap-3"
              :class="[CourseStore.showTap == 'aboute' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <img src="/imgs/icons/010.png" class="w-10" alt="">
              {{ $t("course_aboute") }}
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[CourseStore.showTap == 'aboute' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <!-- Tab Button "lectures" -->
      <div class="relative group cursor-pointer" @click="CourseStore.setValueTap('lectures')">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[CourseStore.showTap == 'lectures' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-center gap-3"
              :class="[CourseStore.showTap == 'lectures' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <img src="/imgs/icons/09.png" class="w-10" alt="">
              {{ $t("course_lectures") }}
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[CourseStore.showTap == 'lectures' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <!-- Tab Button "files" -->
      <div class="relative group cursor-pointer" @click="CourseStore.setValueTap('files')">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[CourseStore.showTap == 'files' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-center gap-3"
              :class="[CourseStore.showTap == 'files' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <img src="/imgs/icons/011.png" class="w-10" alt="">
              {{ $t("course_files") }}
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[CourseStore.showTap == 'files' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>
      <!-- Tab Button "comments" -->
      <div class="relative group cursor-pointer" @click="CourseStore.setValueTap('comments')">
        <div class="relative w-full h-16 opacity-90 overflow-hidden rounded-xl z-10">
          <div
            class="absolute z-10 -translate-x-44 ease-in-out transistion-all duration-700 h-full w-44 opacity-30 -skew-x-12"
            :class="[CourseStore.showTap == 'comments' ? 'translate-x-[30rem] bg-gradient-to-r from-gray-500 to-white/10' : '']">
          </div>

          <div
            class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%">
            <button name="text"
              class="font-semibold lg:text-lg text-base h-full opacity-90 w-full px-3 py-3 rounded-xl flex items-center justify-center gap-3"
              :class="[CourseStore.showTap == 'comments' ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90%' : 'bg-gradient-to-tl from-purple-700 to-pink-500']">
              <img src="/imgs/icons/06.png" class="w-10" alt="">
              {{ $t("course_comments") }}
            </button>
          </div>
          <div class="absolute duration-1000 w-full h-[100px]"
            :class="[CourseStore.showTap == 'comments' ? 'animate-spin bg-gradient-to-r from-pink-500 to-violet-500 blur-[25px]' : '']">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script setup>
import { useCourseStore } from "@/store/CourseStore";
const CourseStore = useCourseStore();
</script>
