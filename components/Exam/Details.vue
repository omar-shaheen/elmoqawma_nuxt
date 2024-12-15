<template>
  <section v-if="Object.keys(ExamStore.getCourse).length" class="">
    <img src="/imgs/q-03.png" class="absolute -top-32 end-1/2 -translate-x-1/2 lg:w-48 w-36" alt="QuizIntro" />
    <div class="">
      <h1 class="text-2xl lg:text-3xl text-center font-bold text-fp3 mb-5"> {{ `${course.name} ` }} </h1>
      <h2 class="text-2xl lg:text-4xl text-center font-bold text_clip"> {{ $t("increase_enthusiasm") }} </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-7 mt-24 mb-10">
      <div class="item_one">
        <div class="item_one_img">
          <img src="/imgs/questions/3d-alarm.png" class="w-full mx-auto" alt="">
        </div>
        <div class="space-y-3">
          <p class="lg:text-xl font-bold text_clip">{{ $t('duration_exam') }}</p>
          <strong class="block lg:text-3xl text-xl text_clip3">{{ lecture?.duration_exam }} {{ $t('minutes') }}</strong>
        </div>
      </div>
      <div class="item_two">
        <div class="item_two_img">
          <img src="/imgs/questions/question-mark.png" class="w-full mx-auto" alt="">
        </div>
        <div class="space-y-3">
          <p class="lg:text-xl font-bold text_clip">{{ $t('count_qutions') }}</p>
          <strong class="block lg:text-3xl text-xl text_clip3">{{ ExamStore.getDetailsQuestions?.lenQuestions }} {{
            $t('questions') }}</strong>
        </div>
      </div>
      <div class="item_three">
        <div class="item_three_img">
          <img src="/imgs/questions/time.png" class="w-full mx-auto" alt="">
        </div>
        <div class="space-y-3">
          <p class="lg:text-xl font-bold text_clip">{{ $t("try_number") }} </p>
          <strong class="block lg:text-3xl text-xl text_clip3">{{ lecture?.re_exam_count }} {{ $t('tries') }}</strong>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <button @click="ExamStore.questionStart()" type="button" class="custom_btn1 !text-2xl">
        {{ $t("start_test") }}
      </button>
    </div>
  </section>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
const ExamStore = useExamStore();
const course = ExamStore.getCourse;
const lecture = ExamStore.getLecture;
const { currentLocale, dir } = useLang();
</script>
<style scoped>
.justify-center {
  justify-content: center !important;
}
</style>
