<template>
  <main class="bg-[url('/imgs/bg-qa.jpg')] bg-cover bg-center bg-repeat min-h-screen pb-20 lg:px-0 px-5"
    v-if="Object.keys(ExamStore.getQuestions).length">
    <ExamHeader />

    <section class="max-w-7xl mx-auto mt-10 mb-5 bg-white/80 p-10 pt-32 lg:pt-12 rounded-xl shadow-custom3 relative">
      <TransitionGroup name="questions">
        <ExamDetails v-if="ExamStore.activeSection == 'details'" />
        <ExamQuestions v-if="ExamStore.activeSection == 'questions'" />
        <ExamSuccessful v-if="ExamStore.activeSection == 'successful'" />
        <ExamFail v-if="ExamStore.activeSection == 'fail'" />
        <ExamSuccessfulFail v-if="ExamStore.activeSection == 'fail' || ExamStore.activeSection == 'successful'" />
      </TransitionGroup>
    </section>

    <ExamExit />
  </main>
</template>
<script setup>
import { useExamStore } from "@/store/ExamStore";
import { useGlobalStore } from "@/store/GlobalStore";
import { useTostStore } from "@/store/TostStore";
const tost = useTostStore();
const globalStore = useGlobalStore();
const ExamStore = useExamStore();
const route = useRoute();
const localePath = useLocalePath();
const { t } = useI18n();
if (route.query.plan == undefined || route.query.plan == "" || route.query.related == undefined || route.query.related == "") {
  navigateTo(localePath(`/course/${route.params.course_id}`));
}

globalStore.showHeaders = false;
await ExamStore.getQuestionsApi(route.params.course_id, atob(route.query.plan), atob(route.query.related)).then(res => {
  try {
    useHead({
      title: `${t("exam")} ${res.title}`,
      meta: [{ name: "title", content: res.title }],
    });
  } catch (error) {
    console.log(error);
  }
});

if (process.client) {
  if (localStorage.getItem("user") == null) {
    tost.add({
      type: "error",
      message: t("login_first"),
    });
    navigateTo(localePath("/login"));
  }
}
</script>
