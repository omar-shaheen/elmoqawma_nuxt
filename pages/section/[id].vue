<template>
  <section class="pb-8 lg:pb-24">
    <PageTitle :title="t('classes')" :linkUrl="localePath(`/sections`)"
      :currentPage="section['description_' + currentLocale]" />
    <div class="container mx-auto mt-10">
      <TransitionGroup name="taps-down">
        <div class="" v-show="showSection == 'subjects'">
          <Skeleton type="card" :count="3" v-if="!section.subjects" />
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-10 cursor-pointer">
            <div v-for="subject in section.subjects" :key="subject.id" @click="setData('teachers', subject.teachers)"
              class="rounded-2xl relative border overflow-hidden hover:shadow-lg transition-all">
              <div class="sm:mx-1 bg-white dark:bg-fpDark2 flex flex-col lg:pb-8">
                <div>
                  <img :src="`${baseURL}/images/${subject.photo}`" alt="post image"
                    class="w-full h-[300px] object-cover rounded-2xl" />
                </div>
                <div class="px-6 h-full text-center">
                  <b class="text-2xl dark:text-fpLightBack text-fp1 font-bold mt-6 block">{{ subject["name_" +
                    currentLocale] }}</b>
                </div>
                <button class="custom_btn1 hover:animate-gradient-xy !text-xl">
                  {{ $t("teachers") }}
                  <Icon :name="iconName ? iconName : `solar:map-arrow-left-line-duotone`" class="size-5 rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10" v-show="showSection == 'teachers'">
          <div class="flex items-center justify-between mb-10">
            <h2 class="text_clip md:text-4xl text-2xl font-extrabold">
              {{ $t("teachers") }}</h2>
            <button @click="showSection = 'subjects'" class="custom_btn1 !m-0 lg:!text-lg !text-base">
              <Icon name="ic:sharp-menu-book" class="text-white text-xl" />
              {{ $t("subjects") }}
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
            <button @click="setData('courses', teacher.courses)" v-for="teacher in teachers" :key="teacher.id"
              class="relative hover:-translate-y-1 shadow-sm rounded-lg transition-all overflow-hidden border border-gray-100 dark:border-slate-800">
              <div>
                <img :src="`${baseURL}/images/${teacher.photo}`" alt="post image" class="w-full rounded-t-2xl" />
              </div>
              <div class="px-6 pb-3">
                <div class="xl:text-xl text-base text-center mt-4 block font-extrabold text_clip">
                  {{ teacher["name_" + currentLocale] }}
                </div>
              </div>
            </button>
          </div>
        </div>
        <div class="mt-10" v-show="showSection == 'courses'">
          <div class="flex items-center justify-between mb-10">
            <h2 class="text_clip md:text-4xl text-2xl font-extrabold">
              {{ $t("courses") }}
            </h2>
            <button @click="showSection = 'teachers'" class="custom_btn1 !m-0 lg:!text-lg !text-base">
              <Icon name="ph:student-fill" class="text-white text-xl" />
              {{ $t("teachers") }}
            </button>
          </div>
          <CourseCourses v-if="Object.keys(courses).length" :courses="courses" />
        </div>

        <div class="text-center" v-show="courses.length == 0 && showSection === 'courses'">
          <img src="/imgs/no-data.svg" class="w-80 mx-auto" alt="" />
          <div class="mt-10">
            <h2 class="lg:text-3xl text-xl text-center text-black font-semibold leading-relaxed pb-1">
              {{ $t("not_found_courses") }}
            </h2>
          </div>
        </div>

      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { useTostStore } from "@/store/TostStore";

const { t } = useI18n();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();

const tost = useTostStore();

let section = ref([]);
let showSection = ref("subjects");
let teachers = ref([]);
let courses = ref([]);

const getSection = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/section/${route.params.id}`).then(res => {
    if (res.status) {
      section.value = res.data;
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
const setData = (type, data) => {
  if (type === "teachers") {
    teachers.value = data;
  } else if (type === "courses") {
    courses.value = data;
  }
  showSection.value = type;
};

</script>

<style scoped>
.link_classe:hover img {
  filter: saturate(1.7);
  transform: scale(1.1);
}
</style>
