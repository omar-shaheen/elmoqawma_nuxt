<template>
  <header class="pt-5">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 items-center w-full">
        <div class="col-span-2">
          <nuxt-link :to="localePath('/')" class="">
            <img src="~/assets/images/global/logo.png" alt="" class="w-24" />
          </nuxt-link>
        </div>


        <div v-if="ExamStore.activeSection == 'questions'"
          class="col-span-8 h-4 lg:h-4 relative bg-fpLightBack dark:bg-fpDark2 rounded-full">
          <span
            :style="`width: ${(ExamStore.DetailsQuestions.step / ExamStore.getDetailsQuestions.lenQuestions) * 100}%;`"
            class="absolute inset-y-0 transition-all rounded-full" :class="`bg-gradient-to-r from-fp1 to-fp3`"></span>
          <span
            class="center-absolute bg-fpLightBack dark:bg-fpDark2 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center">
            <img src="~/assets/images/student/strong.svg" alt="" class="w-6 lg:w-auto" />
          </span>
          <span
            class="absolute end-0 top-1/2 -translate-y-1/2 bg-fpLightBack dark:bg-fpDark2 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center">
            <img src="~/assets/images/student/cup.svg" alt="" class="w-6 lg:w-auto" />
          </span>
        </div>

        <div class="text-end" :class="ExamStore.activeSection !== 'questions' ? 'col-span-10' : 'col-span-2'">
          <button
            class="p-1 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-red-100 text-red-800 hover:bg-red-200 focus:outline-none focus:bg-red-200 disabled:opacity-50 disabled:pointer-events-none"
            @click="ExamStore.exit = !ExamStore.exit">
            <Icon name="mi:close" class="lg:size-16 size-7" />
          </button>
        </div>
      </div>


    </div>
  </header>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
</script>
