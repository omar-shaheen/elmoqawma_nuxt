<template>
  <div class="lg:max-w-3xl mx-auto p-0 relative my-10 lg:mt-10">
    <div class="flex items-center flex-col lg:flex-row gap-5 justify-between">
      <button @click="ExamStore.exitExam()" type="button" class="btn_style4">
        <span class="mt-1 ms-2">{{ $t("show_course") }}</span>
      </button>
      <button @click="ExamStore.activeSection = 'questions'" type="button" class="btn_style4">
        <span class="mt-1 me-2">{{ $t("show_exam") }}</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
</script>
