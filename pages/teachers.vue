<template>
  <section class="pb-8 lg:pb-24">
    <Waves :title="t('teachers')" class2="text-center !justify-center" />
    <div class="container mx-auto">
      <div class="mt-10">
        <!-- <h2
          class="text-3xl lg:text-5xl text-fp2 dark:text-fp1 font-bold border-b-2 border-fp2 w-fit mx-auto pb-2 lg:pb-6 mb-16">
          {{ $t("teachers") }}</h2> -->
        <Skeleton type="image_text" :count="3" v-if="teachers.length == 0" />
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <NuxtLink :to="localePath(`/teacher/${teacher.id}`)" v-for="teacher in teachers" :key="teacher.id"
            class="relative hover:-translate-y-1 shadow-sm rounded-lg transition-all overflow-hidden border border-gray-100 dark:border-slate-800">
            <div>
              <img :src="`${baseURL}/images/${teacher.photo}`" alt="post image" class="w-full rounded-t-2xl" />
            </div>
            <div class="px-6">
              <div class="xl:text-xl text-base text-center mt-4 block font-extrabold text_clip">
                {{ teacher["name_" + currentLocale] }}
              </div>
            </div>
            <div class="flex items-center justify-center pb-3">
              <span class="text-xl text-fp3 font-bold" v-text="$t('subjects')"></span>
              <div class="flex items-center flex-wrap ms-2 whitespace-nowrap gap-x-2">
                <span class="text-fp1 xl:text-lg text-sm font-medium">
                  {{ teacher.courses
                    .map((subject) => subject["name_" + currentLocale])
                    .join(", ") }}
                </span>
              </div>
            </div>
          </NuxtLink>

        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { currentLocale, dir } = useLang();
const { t } = useI18n();
const baseURL = useRuntimeConfig().public.baseURL;
let teachers = ref([]);
const getTeachers = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/teachers`).then(res => {
    if (res.status) {
      teachers.value = res.data;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};

await useAsyncData("getTeachers", async () => {
  return getTeachers();
});
</script>
<style scoped>
.link_classe:hover img {
  filter: saturate(1.7);
  transform: scale(1.1);
}
</style>
