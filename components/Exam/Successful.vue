<template>
  <section>
    <button @click="globalStore.HashURLFile(`${baseURL}/${ExamStore.pathFile}.pdf`)" v-if="ExamStore.lecture.latest"
      class="lg:absolute sm:block sm:text-center start-8 top-8 text-white whitespace-nowrap bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-2xl px-2 py-2 lg:py-1.5 focus:outline-none">
      {{ $t("tha_certificate_pdf") }}
      <Icon name="ic:baseline-picture-as-pdf" class="text-white text-3xl lg:text-5xl -mt-1" />
    </button>
    <button v-if="ExamStore.lecture.latest" @click="globalStore.HashURLFile(`${baseURL}/${ExamStore.pathFile}.png`)"
      class="lg:absolute sm:block sm:mt-6 sm:text-center end-8 top-8 text-white whitespace-nowrap bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-2xl px-2 py-2 lg:py-1.5 focus:outline-none">
      {{ $t("tha_certificate_png") }}
      <Icon name="ic:baseline-photo-library" class="text-white text-3xl lg:text-5xl -mt-1" />
    </button>

    <img src="/imgs/student-success.png" alt="" class="block mx-auto w-52 lg:w-72 -mt-52 lg:-mt-72 mb-10" />

    <div class="">
      <span class="block text-2xl lg:text-3xl text-center font-bold text-fp1 mb-5">{{ $t("congratulations") }}!</span>
      <p class="text-2xl lg:text-4xl text-center font-bold text-violet-950">
        {{ $t("you_have") }} <span class="text_clip">{{ ExamStore.DetailsQuestions.score }} %</span>
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 mt-10">
      <div class="flex flex-col items-center justify-center bg-white lg:p-10 p-5 rounded-xl shadow-custom2">
        <img src="/imgs/icons/correct.png" class="lg:w-28 w-20 mx-auto block" alt="" />
        <span class="mt-5 text-3xl font-medium dark:text-fpLightBack">{{ ExamStore.getDetailsQuestions.trueLengs }} {{
          $t("qutions_correct") }}</span>
      </div>
      <div class="flex flex-col items-center justify-center bg-white lg:p-10 p-5 rounded-xl shadow-custom2">
        <img src="/imgs/icons/answer.png" class="lg:w-28 w-20 mx-auto block" alt="" />
        <span class="mt-5 text-3xl font-medium dark:text-fpLightBack">{{ ExamStore.DetailsQuestions.falseLengs }} {{
          $t("qutions_mistake") }}</span>
      </div>
      <div class="flex flex-col items-center justify-center bg-white lg:p-10 p-5 rounded-xl shadow-custom2">
        <img src="/imgs/icons/010.png" class="lg:w-28 w-20 mx-auto block" alt="" />
        <span class="mt-5 text-3xl font-medium dark:text-fpLightBack">{{ ExamStore.getDetailsQuestions.lenQuestions }}
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
