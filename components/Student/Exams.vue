<template>
  <div>
    <section class="container mx-auto lg:px-3 mt-5 bg-white dark:bg-fpDark1 relative">
      <TransitionGroup name="taps-down">

        <div v-if="section == 'courses'" class="mb-10">
          <div class="flex items-center gap-x-5 border-b mb-4 pb-4">
            <img src="/imgs/menu-icons/256/test.png" class="w-12" alt="">
            <h2 class="font-bold text-p-dark text-2xl lg:text-4xl text-center lg:text-start text-fpDark2 dark:text-fp1">
              {{
                $t("my_all_exams") }}</h2>
          </div>
          <div v-if="Object.keys(props.courses).length"
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3 mt-5">
            <div class="shadow-lg border border-gray-200 rounded-xl p-6 dark:bg-fpDark3 flex flex-col justify-between"
              v-for="course in props.courses" :key="course.id">
              <div class="space-y-5 text-center">
                <img src="/imgs/exam.png" class="lg:size-20 size-16 mx-auto" alt="">
                <span
                  class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">{{
                    $t("course_exams") }}</span>
                <h2 class="text_clip text-xl font-bold">{{ `${course.name} ` }}</h2>
              </div>
              <button @click="getUserExams(course.id)" class="custom_btn1">
                {{ $t("course_exams") }}
                <Icon :name="currentLocale == 'ar' ? 'solar:arrow-left-up-broken' : 'solar:arrow-right-up-broken'"
                  class="text-white text-2xl -mt-1" />
              </button>
            </div>
          </div>
          <Empty v-else :message="$t('not_subscibed_courses')" />
        </div>

        <div v-if="section == 'exams'">
          <h2 class="font-bold text_clip pt-1 text-xl lg:text-3xl mb-5 text-center lg:text-start">
            {{ $t("all_course_exams") }} {{ courseExam["name_" + currentLocale] }}
          </h2>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:mt-10">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-white uppercase bg-gradient-to-r from-violet-500 to-pink-500">
                <tr class="text-lg">
                  <th scope="col" class="px-3 py-3">{{ $t("number") }}</th>
                  <th scope="col" class="px-3 py-3">{{ $t("score") }}</th>
                  <th scope="col" class="px-3 py-3">{{ $t("correct") }}</th>
                  <th scope="col" class="px-3 py-3">{{ $t("mistake") }}</th>
                  <th scope="col" class="px-3 py-3">{{ $t("result") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detailExam in detailExams" :key="detailExam.id"
                  class="whitespace-nowrap cursor-pointer bg-white text-gray-600 border-b dark:bg-fpDark1 dark:border-fpDark2 hover:bg-gray-50 dark:hover:bg-gray-600"
                  @click="userShowAnswers(detailExam.course_id, detailExam.id)">
                  <td class="px-6 py-4">
                    <button type='button' @click="userShowAnswers(detailExam.course_id, detailExam.id)"
                      class='py-2.5 px-6 text-sm bg-indigo-100 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 flex items-center gap-x-2 mx-auto'>
                      <img src="/imgs/icons/search.png" class="" alt="">
                      {{ detailExam.id }}
                    </button>
                  </td>
                  <td class="px-6 py-4">
                    <span class="py-2.5 px-6 text-sm rounded-full cursor-pointer font-semibold text-center shadow-xs"
                      :class="detailExam.score >= score ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'">
                      {{ detailExam.score }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="py-2.5 px-6 text-sm bg-green-100 text-green-600 rounded-full cursor-pointer font-semibold text-center shadow-xs">
                      {{ detailExam.correct }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="py-2.5 px-6 text-sm bg-red-50 text-red-500 rounded-full cursor-pointer font-semibold text-center shadow-xs">
                      {{ detailExam.mistake }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span class="py-2.5 px-6 text-sm rounded-full cursor-pointer font-semibold text-center shadow-xs"
                      :class="detailExam.score >= score ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'">
                      {{ detailExam.score >= score ? "إجتاز اﻹمتحان" : "لم يجتاز اﻹمتحان" }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div v-if="section == 'answers'" class="space-y-5 mb-5 w-full mx-auto">

          <h2 class="font-bold text_clip pt-1 text-xl lg:text-2xl mb-5 text-center lg:text-start">
            {{ $t("qutions") }} {{ `${course.name} ` }} {{ $t("number") }} => {{ examID }}
          </h2>

          <div class="bg-white rounded-lg shadow-custom1 p-5" v-for="question in questions" :key="question.id">
            <p class="text-xl lg:text-2xl text-fp1 font-semibold text-center mb-6"
              v-if="question['question_' + currentLocale]" v-html="question['question_' + currentLocale]"></p>

            <p class="text-xl lg:text-2xl text-fpDark2 font-semibold text-start mb-6"
              v-text="`${$t('note')}${question.Justify}`"></p>

            <ul class="flex flex-col space-y-1">
              <li v-for="answer in question.answers" :key="answer.id"
                class="inline-flex items-center gap-x-3.5 py-3 px-4 text-sm font-semibold bg-white border-2 border-gray-300 transition-all duration-300  text-gray-900 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg "
                :class="[(answersIDS.includes(answer.id) && answer.status == 1) || answer.status == 1 ? ' border-green-400 after:border-green-400 before:bg-green-400 text-green-400' : 'after:border-gray-300 before:bg-gray-300 dark:text-fpLightBack', answersIDS.includes(answer.id) && answer.status == 0 ? 'border-red-400 after:border-red-400 before:bg-red-400 text-red-400' : 'dark:text-fpLightBack',]">
                <div class="flex-none">
                  <img v-if="(answersIDS.includes(answer.id) && answer.status == 1) || answer.status == 1"
                    src="/imgs/icons/f-happy.png" class="size-10" alt="">
                  <img v-else-if="answersIDS.includes(answer.id) && answer.status == 0" src="/imgs/icons/f-sad.png"
                    class="size-10" alt="">
                  <img v-else src="/imgs/icons/f-smile.png" class="size-10" alt="">
                </div>

                <span v-if="answer.answer_type == 'text'" class="text-sm lg:text-xl" v-text="answer.answer"></span>

                <img v-else-if="answer.answer_type == 'image'" :src="`${baseURL}/images/${answer.answer}`"
                  class="w-20 object-cover pointer-events-none" />
              </li>
            </ul>
          </div>
        </div>

      </TransitionGroup>
    </section>
  </div>
</template>

<script setup>
import { useTostStore } from "@/store/TostStore";

const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const score = useRuntimeConfig().public.score;
const tost = useTostStore();
const { t } = useI18n();
const props = defineProps({
  courses: {
    type: Object,
    // required: true,
  },
});
let breadcrumbs = ref([{ text: t("my_all_exams"), section: "courses" }]);
let detailExams = ref([]);
let section = ref("courses");
let courseExam = ref({});
let questions = ref([]);
let answersIDS = ref([]);
let course = ref({});
let user = ref({});
let examID = ref(0);
const getUserExams = course_id => {
  $fetch(`${useRuntimeConfig().public.apiURL}/userExams`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
    body: { course_id },
  }).then(res => {
    if (res.status) {
      detailExams.value = res.data.detailExams;
      courseExam.value = res.data.course;
      breadcrumbs.value = [
        { text: t("my_all_exams"), section: "courses" },
        { text: `${t("all_course_exams")} ${res.data.course.subject["name_" + currentLocale.value]}`, section: "exams" },
      ];
      section.value = "exams";
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};
const userShowAnswers = (course_id, exam_id) => {
  $fetch(`${useRuntimeConfig().public.apiURL}/userShowAnswers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user")}`,
    },
    body: { course_id, exam_id },
  }).then(res => {
    if (res.status) {
      questions.value = res.data.questions;
      answersIDS.value = res.data.answersIDS;
      course.value = res.data.course;
      user.value = res.data.user;
      examID.value = exam_id;
      breadcrumbs.value = [
        { text: t("my_all_exams"), section: "courses" },
        { text: `${t("all_course_exams")} ${res.data.course.subject["name_" + currentLocale.value]}`, section: "exams" },
        { text: exam_id, section: "answers" },
      ];
      section.value = "answers";
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};
</script>
