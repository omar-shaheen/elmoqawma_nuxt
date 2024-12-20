<template>
  <section>

    <img src="/imgs/student-success.png" alt="" class="absolute -top-20 end-1/2 -translate-x-1/2 lg:w-48 w-36" />

    <div class="lg:block flex justify-center items-center gap-4">
      <button @click="globalStore.HashURLFile(`${baseURL}/${ExamStore.pathFile}.pdf`)" v-if="ExamStore.lecture.latest"
        class="lg:absolute relative lg:start-8 lg:top-8 inline-flex items-center justify-start px-3 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-lg group">
        <span
          class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span
          class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-lg group-hover:mb-12 group-hover:translate-x-0"></span>
        <span
          class="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex flex-col md:flex-row items-center gap-2 text-center">
          <img src="/imgs/icons/pdf.png" class="shrink-0 size-6" alt="">
          {{ $t("tha_certificate_pdf") }}
        </span>
      </button>

      <button v-if="ExamStore.lecture.latest" @click="globalStore.HashURLFile(`${baseURL}/${ExamStore.pathFile}.png`)"
        class="lg:absolute relative lg:end-8 lg:top-8 inline-flex items-center justify-start px-3 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-lg group">
        <span
          class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span
          class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-lg group-hover:mb-12 group-hover:translate-x-0"></span>
        <span
          class="relative w-full text-base font-semibold text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex flex-col md:flex-row items-center gap-2 text-center">
          <img src="/imgs/icons/png.png" class="shrink-0 size-6" alt="">
          {{ $t("tha_certificate_png") }}
        </span>
      </button>
    </div>


    <div class="lg:mt-20 mt-10">
      <span class="block text-2xl lg:text-3xl text-center font-bold text-fp1 mb-5">{{ $t("congratulations") }}!</span>
      <p class="text-2xl lg:text-4xl text-center font-bold text-violet-950">
        {{ $t("you_have") }} <span class="text_clip">{{ ExamStore.DetailsQuestions.score }} %</span>
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 mt-10">
      <div class="flex flex-col items-center justify-center bg-white lg:p-7 p-5 rounded-xl shadow-custom2">
        <img src="/imgs/icons/correct.png" class="lg:w-20 w-12 mx-auto block" alt="" />
        <span class="mt-5 lg:text-3xl text-lg font-medium">{{ ExamStore.getDetailsQuestions.trueLengs }} {{
          $t("qutions_correct") }}</span>
      </div>
      <div class="flex flex-col items-center justify-center bg-white lg:p-7 p-5 rounded-xl shadow-custom2">
        <img src="/imgs/icons/answer.png" class="lg:w-20 w-12 mx-auto block" alt="" />
        <span class="mt-5 lg:text-3xl text-lg font-medium">{{ ExamStore.DetailsQuestions.falseLengs }} {{
          $t("qutions_mistake") }}</span>
      </div>
      <div class="flex flex-col items-center justify-center bg-white lg:p-7 p-5 rounded-xl shadow-custom2">
        <img src="/imgs/icons/010.png" class="lg:w-20 w-12 mx-auto block" alt="" />
        <span class="mt-5 lg:text-3xl text-lg font-medium">{{ ExamStore.getDetailsQuestions.lenQuestions }}
          {{
            $t("qutions") }} </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useExamStore } from "@/store/ExamStore";
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const ExamStore = useExamStore();
const baseURL = useRuntimeConfig().public.baseURL;
</script>
