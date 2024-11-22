<template>
  <section class="pb-8 lg:pb-24">
    <PageTitle :title="t('teachers')" :linkUrl="localePath(`/teachers`)" :linkTitle="t('all_teachers')" />
    <div class="container mx-auto mt-10">
      <div class="">
        <div class="grid lg:grid-cols-5 grid-cols-1 items-center">
          <div class="lg:col-span-1">
            <Skeleton type="image" v-if="Object.keys(teacher).length == 0" />
            <div class="w-52 h-52 rounded-full overflow-hidden shadow-lg">
              <img v-if="Object.keys(teacher).length != 0" :src="`${baseURL}/images/${teacher.photo}`" alt="postImage"
                class="w-full h-full object-cover rounded-t-2xl" />
            </div>
          </div>
          <div class="lg:col-span-4">
            <Skeleton type="text" v-if="Object.keys(teacher).length == 0" />
            <h1 class="text_clip font-extrabold text-2xl" v-text="teacher['name_' + currentLocale]"></h1>
            <!-- <p class="text-2xl lg:text-4xl text-fp3 mt-2" v-text="teacher['description_' + currentLocale]"></p> -->
          </div>
        </div>
      </div>
      <TransitionGroup name="taps-down">
        <div class="mt-10" v-show="!showSection">
          <h2 class="text_clip text-4xl font-extrabold mb-10">{{ $t("classes") }}</h2>
          <Skeleton type="image" :count="3" v-if="Object.keys(teacher).length == 0" />
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            <button @click="setData(section.courses)" v-for="section in teacher.sections" :key="section.id"
              class="rounded-2xl relative text-fp1 hover:text-fp3 dark:text-fp2 dark:hover:text-fp3">
              <img :src="`${baseURL}/images/${section.photo}`" class="rounded-2xl" alt="post image" />
              <div class="p-3 pt-0">
                <p class="custom_btn1 hover:animate-gradient-xy !text-xl" v-text="section['name_' + currentLocale]">
                </p>
              </div>
            </button>
          </div>
        </div>
        <div class="mt-10" v-show="showSection">
          <div class="flex items-center justify-between mb-10">
            <h2 class="text_clip text-4xl font-extrabold">{{
              $t("courses") }}</h2>
            <button @click="showSection = false"
              class="custom_btn1 !m-0 !text-lg">
              {{ $t("all_courses") }}
              <Icon name="ph:student-fill" class="text-white text-xl" />
            </button>
          </div>
          <CourseCourses v-if="Object.keys(courses).length" :courses="courses" />
        </div>
        <p v-show="courses.length == 0 && showSection"
          class="text-center text-yellow-500 text-2xl lg:text-5xl font-bold mt-20 shadow-lg py-2">{{
            $t("not_found_courses") }}</p>
      </TransitionGroup>
    </div>
  </section>
</template>
<script setup>
const { t } = useI18n();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();
let teacher = ref([]);
let showSection = ref(false);
let courses = ref([]);
const getTeacher = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/teacher/${route.params.id}`).then(res => {
    if (res.status) {
      teacher.value = res.data;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};
await useAsyncData("getTeacher", async () => {
  return getTeacher();
});
const setData = data => {
  courses.value = data;
  showSection.value = true;
};
</script>
<style scoped>
.link_classe:hover img {
  filter: saturate(1.7);
  transform: scale(1.1);
}
</style>
