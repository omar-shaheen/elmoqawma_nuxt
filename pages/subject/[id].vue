<template>
  <section class="pb-8 lg:pb-24">
    <PageTitle :title="t('subjects')" :currentPage="subject['name_' + currentLocale]" :linkUrl="localePath(`/subjects`)"
      :linkTitle="t('all_subjects')" />
    <div class="container mx-auto mt-10">
      <TransitionGroup name="taps-down">
        <div class="mt-10" v-show="showSection == 'teachers'">
          <h2 class="text_clip text-4xl font-extrabold mb-10">{{ $t("teachers") }}</h2>
          <Skeleton type="image_text" :count="3" v-if="Object.keys(subject).length == 0" />
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <button @click="setData('sections', teacher.sections)" v-for="teacher in subject.teachers" :key="teacher.id"
              class="rounded-2xl relative text-fp1 hover:text-fp3 dark:text-fp2 dark:hover:text-fp3">
              <img :src="`${baseURL}/images/${teacher.photo}`" class="rounded-2xl" alt="post image" />
              <div class="p-3 pt-0">
                <p class="custom_btn1 hover:animate-gradient-xy !text-xl" v-text="teacher['name_' + currentLocale]"></p>
              </div>
            </button>
          </div>
        </div>
        <div class="mt-10" v-show="showSection == 'sections'">
          <div class="flex items-center justify-between mb-10">
            <h2 class="text_clip text-4xl font-extrabold">
              {{ $t("classes") }}</h2>
            <button @click="showSection = 'teachers'" class="custom_btn1 !m-0 !text-lg">
              {{ $t("teachers") }}
              <Icon name="ph:student-fill" class="text-white text-xl" />
            </button>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-10">
            <button @click="setData('courses', section.courses)" v-for="section in sections" :key="section.id"
              class="link_classe relative z-20 hover:scale-105 shadow-lg transition-all overflow-hidden border-0">
              <img :src="`${baseURL}/images/${section.photo}`" alt="post image" class="object-cover rounded-2xl" />
            </button>
          </div>
          <p v-show="sections.length == 0 && showSection == 'sections'"
            class="text-center text-yellow-500 text-2xl lg:text-5xl font-bold mt-20 shadow-lg py-2">
            {{ $t("not_found_sections") }}
          </p>
        </div>
        <div class="mt-10" v-show="showSection == 'courses'">
          <div class="flex items-center justify-between mb-10">
            <h2 class="text_clip text-4xl font-extrabold">{{
              $t("course") }}</h2>
            <button @click="showSection = 'sections'" class="custom_btn1 !m-0 !text-lg">
              {{ $t("classes") }}
              <Icon name="ph:student-fill" class="text-white text-xl" />
            </button>
          </div>
          <CourseCourses v-if="Object.keys(courses).length" :courses="courses" />
        </div>
        <p v-show="courses.length == 0 && showSection == 'courses'"
          class="text-center text-yellow-500 text-2xl lg:text-5xl font-bold mt-20 shadow-lg py-2">
          {{ $t("not_found_courses") }}
        </p>
      </TransitionGroup>
    </div>
  </section>
</template>
<script setup>
const { currentLocale, dir } = useLang();
const { t } = useI18n();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();
let subject = ref([]);
let showSection = ref("teachers");
let courses = ref([]);
let sections = ref([]);
const getSection = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/subject/${route.params.id}`).then(res => {
    if (res.status) {
      subject.value = res.data;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};

await useAsyncData("getSection", async () => {
  return getSection();
});
const setData = (show, data) => {
  if (data != undefined) {
    if (show == "sections") {
      sections.value = data;
    } else if (show == "courses") {
      courses.value = data;
    }
  }
  showSection.value = show;
};
</script>
<style scoped>
.link_classe:hover img {
  filter: saturate(1.7);
  transform: scale(1.1);
}
</style>
