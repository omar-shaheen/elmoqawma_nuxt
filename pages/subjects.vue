<template>
  <section class="pb-8 lg:pb-24">
    <Waves :title="t('subjects')" class2="text-center !justify-center" />
    <div class="container mx-auto">
      <div class="mt-10">
        <Skeleton type="card" :count="3" v-if="subjects.length == 0" />
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          <div class="shadow-custom1 rounded-2xl bg-white border border-gray-200 dark:bg-fpDark2 lg:pb-8"
            v-for="subject in subjects" :key="subject.id">
            <nuxt-link :to="localePath(`/subject/${subject.id}`)">
              <img :src="`${baseURL}/images/${subject.photo}`" alt="post image"
                class="w-full object-cover rounded-t-2xl" />
            </nuxt-link>
            <div class="px-6 text-center lg:py-0 lg:pt-5 py-5">
              <nuxt-link :to="localePath(`/subject/${subject.id}`)"
                class="text-2xl dark:text-fpLightBack text-fp1 font-bold mb-5 block">{{
                  subject["name_" + currentLocale]
                }}</nuxt-link>
              <nuxt-link :to="localePath(`/subject/${subject.id}`)" class="custom_btn1 hover:animate-gradient-xy">
                <Icon name="fluent-emoji-flat:magnifying-glass-tilted-left" class="text-white text-xl" />
                {{ $t("go_course") }}
              </nuxt-link>
            </div>
          </div>
          <!-- <nuxt-link
            :to="localePath(`/subject/${subject.id}`)"
            v-for="subject in subjects"
            :key="subject.id"
            class="link_classe relative z-20 hover:scale-105 shadow-lg rounded-lg transition-all overflow-hidden border-0"
          >
            <div class="sm:mx-1 bg-white dark:bg-fpDark2 flex flex-col lg:pb-8">
              <nuxt-link :to="localePath(`/subject/${subject.id}`)">
                <img :src="`${baseURL}/images/${subject.photo}`" alt="post image" class="w-full h-[250px] object-cover rounded-t-2xl" />
              </nuxt-link>
              <div class="px-6 h-full">
                <nuxt-link :to="localePath(`/subject/${subject.id}`)" class="text-2xl dark:text-fpLightBack text-fp1 font-bold mt-6 block">{{
                  subject["name_" + currentLocale]
                }}</nuxt-link>
              </div>
              <nuxt-link
                :to="localePath(`/subject/${subject.id}`)"
                class="text-white whitespace-nowrap bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-sm px-2 py-2 sm:mb-4 mt-4 w-fit mx-auto focus:outline-none"
              >
                {{ $t("go_course") }}
                <Icon name="ic:baseline-check-circle-outline" class="text-white text-xl -mt-1" />
              </nuxt-link>
            </div>
          </nuxt-link> -->
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const { currentLocale, dir } = useLang();
const { t } = useI18n();
const baseURL = useRuntimeConfig().public.baseURL;
let subjects = ref([]);
const getsubjects = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/subjects`).then(res => {
    if (res.status) {
      subjects.value = res.data;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};

await useAsyncData("getsubjects", async () => {
  return getsubjects();
});
</script>
<style scoped>
.link_classe:hover img {
  filter: saturate(1.7);
  transform: scale(1.1);
}
</style>
