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
          <h2 class="font-bold text-p-dark text-2xl lg:text-5xl mb-3 text-center lg:text-start dark:text-fp1">
            {{ $t("all_course_exams") }} {{ courseExam["name_" + currentLocale] }}
          </h2>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:mt-20">
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
                      class='py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100 flex items-center gap-x-2 mx-auto'>
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

        <div v-if="section == 'answers'">
          <h2 class="font-medium text-p-dark text-2xl lg:text-3xl mb-5 text-center lg:text-start dark:text-fp1">
            {{ $t("qutions") }} {{ `${course.name} ` }} {{ $t("number") }} => {{ examID }}
          </h2>
          <div v-for="(question, index) in questions" :key="question.id" class="lg:w-2/3 mx-auto shadow-xl p-6 h-auto">
            <p class="text-xl lg:text-2xl text-fp1 font-semibold text-center w-5/6 mx-auto mt-6"
              v-html="question['question_' + currentLocale]"></p>
            <p class="text-xl lg:text-2xl text-fp2 font-semibold text-start w-5/6 mx-auto mt-6"
              v-text="`${$t('note')}${question.Justify}`"></p>
            <div class="mt-10" v-for="(answer, indexAnswer) in question.answers" :key="answer.id">
              <button :class="[
                (answersIDS.includes(answer.id) && answer.status == 1) || answer.status == 1
                  ? ' border-green-400 after:border-green-400 before:bg-green-400 text-green-400'
                  : 'after:border-gray-300 before:bg-gray-300 dark:text-fpLightBack',
                answersIDS.includes(answer.id) && answer.status == 0 ? 'border-red-400 after:border-red-400 before:bg-red-400 text-red-400' : 'dark:text-fpLightBack',
              ]"
                class="block w-full text-start border-2 rounded-lg lg:rounded-full transition-all py-2 lg:py-4 ps-16 lg:ps-20 relative after:absolute after:start-5 lg:after:start-8 after:top-1/2 after:-translate-y-1/2 after:w-8 after:h-8 after:border-2 after:rounded-full after:border-dashed before:absolute before:start-7 lg:before:start-10 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full">
                <span class="text-sm lg:text-xl" v-text="answer.answer"></span>
              </button>
              <!-- {{ indexAnswer }} -->
              <!-- <div>
                <div v-if="activeAnswers[question.id] == answer.id && done == true && answer.status == 1">
                  <button class="flex items-center text-green-400 mt-10">
                    <span class="ms-3 -mb-1 text-2xl">
                      <svg width="42" height="42" class="inline" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.0232 22.2207L34.7128 8.53109C35.1441 8.09984 35.7441 7.879 36.3524 7.929C36.9607 7.97692 37.517 8.28942 37.8753 8.78525C37.8753 8.78525 37.9274 8.86025 37.9316 8.86442C40.3857 12.2832 41.8337 16.4728 41.8337 20.9998C41.8337 32.4978 32.4982 41.8332 21.0003 41.8332C9.50241 41.8332 0.166992 32.4978 0.166992 20.9998C0.166992 9.50192 9.50241 0.166504 21.0003 0.166504C24.3253 0.166504 27.4712 0.947754 30.2607 2.33734C31.292 2.84775 31.7107 4.09984 31.1982 5.129C30.6857 6.15817 29.4357 6.579 28.4066 6.0665C26.1753 4.95609 23.6587 4.33317 21.0003 4.33317C11.8024 4.33317 4.33366 11.8019 4.33366 20.9998C4.33366 30.1978 11.8024 37.6665 21.0003 37.6665C30.1982 37.6665 37.667 30.1978 37.667 20.9998C37.667 18.2373 36.9941 15.629 35.8003 13.3353L22.4982 26.6394C21.6837 27.454 20.3649 27.454 19.5503 26.6394L13.3003 20.3894C12.4878 19.5769 12.4878 18.2561 13.3003 17.4436C14.1149 16.6311 15.4337 16.6311 16.2482 17.4436L21.0232 22.2207Z"
                          fill="#3FDB77"
                        />
                      </svg>
                      رائع! أجابتك صحيحة :
                    </span>
                    <p class="text-sm lg:text-2xl text-green-400 ms-2" v-text="answer.answer"></p>
                  </button>
                </div>
                <div v-if="activeAnswers[question.id] != answer.id && done == true && answer.status == 1">
                  <button class="flex items-center text-red-500 mt-10">
                    <span class="ms-3 -mb-1 text-2xl text-red-500">
                      <svg width="42" height="42" viewBox="0 0 42 42" class="inline" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M16.5064 14.4088C16.2082 14.4092 15.9169 14.4984 15.6697 14.665C15.4224 14.8316 15.2305 15.0681 15.1183 15.3443C15.0061 15.6206 14.9787 15.9239 15.0398 16.2157C15.1008 16.5076 15.2474 16.7746 15.4609 16.9828L19.4749 20.9968L15.4609 25.0108C15.3176 25.1492 15.2033 25.3147 15.1247 25.4977C15.0461 25.6807 15.0047 25.8775 15.003 26.0767C15.0013 26.2759 15.0392 26.4733 15.1146 26.6577C15.1901 26.842 15.3014 27.0096 15.4423 27.1504C15.5831 27.2913 15.7506 27.4026 15.9349 27.478C16.1193 27.5534 16.3168 27.5914 16.516 27.5897C16.7151 27.588 16.912 27.5465 17.095 27.4679C17.278 27.3893 17.4435 27.275 17.5819 27.1318L21.5959 23.1179L25.6129 27.1318C25.7512 27.275 25.9167 27.3893 26.0998 27.4679C26.2828 27.5465 26.4796 27.588 26.6788 27.5897C26.8779 27.5914 27.0754 27.5534 27.2598 27.478C27.4441 27.4026 27.6116 27.2913 27.7525 27.1504C27.8933 27.0096 28.0047 26.842 28.0801 26.6577C28.1555 26.4733 28.1935 26.2759 28.1917 26.0767C28.19 25.8775 28.1486 25.6807 28.07 25.4977C27.9914 25.3147 27.8771 25.1492 27.7339 25.0108L23.7199 20.9968L27.7339 16.9828C27.9503 16.772 28.0981 16.5009 28.1578 16.2047C28.2175 15.9086 28.1864 15.6013 28.0685 15.3231C27.9507 15.0449 27.7516 14.8087 27.4973 14.6456C27.243 14.4825 26.9453 14.4 26.6434 14.4088C26.2541 14.4203 25.8845 14.5828 25.6129 14.8619L21.5959 18.8759L17.5819 14.8619C17.442 14.7183 17.2747 14.6042 17.09 14.5264C16.9052 14.4486 16.7068 14.4087 16.5064 14.4088Z"
                          fill="#ED2B2B"
                        />
                        <circle cx="21" cy="21" r="20" stroke="#ED2B2B" stroke-width="2" />
                      </svg>
                      خطاء الحل الصحيح هوا :
                    </span>
                    <p class="text-sm lg:text-3xl text-green-400 ms-2" v-text="answer.answer"></p>
                  </button>
                </div>
              </div> -->
            </div>
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
