<template>
  <section>
    <img src="/imgs/fail-exam.png" alt="" class="absolute -top-32 end-1/2 -translate-x-1/2 w-72" />
    <div class="pt-5 pb-10">

      <button v-if="ExamStore.failedAttempts" @click="ExamStore.reTest()" class="absolute start-2 lg:start-8 top-2 lg:top-8 group outline-none flex items-center justify-center h-16 pe-5 ps-9 rounded-xl cursor-pointer bg-gradient-to-tr from-[#efad21] to-[#ffd60f] border border-transparent shadow-md transition-transform duration-200 active:scale-95">
        <img src="/imgs/icons/refresh.png" alt="" class=" absolute z-10 h-6 w-6 group-hover:animate-spin transition-all duration-300 top-2 start-2 group-hover:h-10 group-hover:w-10 group-hover:top-3 group-hover:start-3" />
        <span class="font-extrabold text-white leading-none text-xl duration-200 group-hover:text-fpDark2 transition-all">
          {{ $t("re_test") }}
        </span>
      </button>


      <div class="">
        <span class="block text-2xl lg:text-3xl text-center font-bold text-fp3 mb-5">{{ $t("good_luck") }}</span>
        <p class="text-2xl lg:text-4xl text-center font-bold text-violet-950">
          {{ $t("you_have") }} <span class="text_clip">{{ ExamStore.DetailsQuestions.score }} %</span>
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 mt-10">
        <div class="flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow-custom2">
          <img src="/imgs/icons/correct.png" class="w-28 mx-auto block" alt="" />
          <span class="mt-5 text-3xl font-medium dark:text-fpLightBack">
            {{ ExamStore.getDetailsQuestions.trueLengs }}
            {{ $t("qutions_correct") }}
          </span>
        </div>
        <div class="flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow-custom2">
          <img src="/imgs/icons/answer.png" class="w-28 mx-auto block" alt="" />
          <span class="mt-5 text-3xl font-medium dark:text-fpLightBack">
            {{ ExamStore.DetailsQuestions.falseLengs }}
            {{ $t("qutions_mistake") }}
          </span>
        </div>
        <div class="flex flex-col items-center justify-center bg-white p-10 rounded-xl shadow-custom2">
          <img src="/imgs/icons/010.png" class="w-28 mx-auto block" alt="" />
          <span class="mt-5 text-3xl font-medium dark:text-fpLightBack">
            {{ ExamStore.getDetailsQuestions.lenQuestions }}
            {{ $t("qutions") }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
</script>
