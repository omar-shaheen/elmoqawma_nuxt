<template>
  <div :dir="dir == 'rtl' ? 'ltr' : 'rtl'"
    class="flex flex-wrap justify-center items-center gap-2 my-8">
    <button v-for="i in ExamStore.getDetailsQuestions.lenQuestions" :key="i"
      class="text-sm font-bold text-gray-700 flex h-fit w-fit flex-col items-center justify-center rounded-full px-[2em] py-[0.5em] duration-200 hover:-translate-y-[7%] "
      :class="ExamStore.getDetailsQuestions.step == i || ExamStore.getDetailsQuestions.step > i ? 'bg-[#F1ddcf] shadow-[inset_0px_2px_4px_0px_#f9f1eb,inset_0px_-2px_4px_0px_#e8c8b0,0px_-2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px_#f9f1eb,inset_0px_2px_4px_0px_#e8c8b0,0px_2px_16px_0px_#e8c8b0,0px_2px_16px_0px_#f9f1eb]' : 'bg-white/30'"
      @click="ExamStore.switchTaps(i)" v-text="i"></button>
  </div>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
const { currentLocale, dir } = useLang();
// const questions = ExamStore.getQuestions;
</script>
