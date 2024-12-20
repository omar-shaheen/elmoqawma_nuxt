<template>
  <div :dir="dir == 'rtl' ? 'rtl' : 'ltr'"
    class="flex flex-wrap justify-center items-center gap-2 my-8">
    <button v-for="i in ExamStore.getDetailsQuestions.lenQuestions" :key="i"
      class="text-sm font-bold text-gray-700 flex h-fit w-fit flex-col items-center justify-center rounded-full py-2 px-5 duration-200 hover:-translate-y-[7%] "
      :class="ExamStore.getDetailsQuestions.step == i || ExamStore.getDetailsQuestions.step > i ? 'bg-gradient-to-r from-green-600  via-green-500 to-green-400 shadow-lg shadow-green-500/50 text-white' : 'bg-white/30'"
      @click="ExamStore.switchTaps(i)">
      <span v-if="ExamStore.getDetailsQuestions.step <= i">{{ i }}</span>
      <Icon v-else name="material-symbols:check" class="size-5" />
    </button>
  </div>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
const { currentLocale, dir } = useLang();
</script>
