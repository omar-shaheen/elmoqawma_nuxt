<template>
  <div class="bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] py-5">
    <div class="container mx-auto">
      <section class="bg-white dark:bg-gray-900 lg:p-10 p-5 rounded-lg shadow-custom1">
        <div>
          <h1 class="text-xl lg:text-3xl !text-start text-fp1 font-bold border-b-2 border-gray-100 pb-2 mb-4">
            {{ $t("site_company") }}
          </h1>
          <div class="text-sm lg:text-xl !text-start font-medium dark:text-gray-300"
            v-html="globalStore.appSettings.site_company">
          </div>
        </div>
        <div class="mt-10">
          <h1 class="text-xl lg:text-3xl !text-start text-fp1 font-bold border-b-2 border-gray-100 pb-2 mb-4">
            {{ $t("about_company") }}
          </h1>
          <p class="text-sm lg:text-xl !text-start font-medium dark:text-gray-300"
            v-html="globalStore.appSettings.about_company">
          </p>
        </div>

        <div class="grid lg:grid-cols-3 grid-cols-1 mt-10 gap-5">
          <div class="border border-gray-200 p-5 rounded-lg text-center shadow-md">
            <img src="/imgs/about/01.svg" class="w-1/2 mx-auto block lg:mb-10 mb-5" alt="">
            <h2 class="text_clip text-3xl font-bold">{{ $t("see_us") }}</h2>
            <p class="text-sm lg:text-lg dark:text-gray-300 font-medium mt-4"
              v-html="globalStore.appSettings.our_vision">
            </p>
          </div>
          <div class="border border-gray-200 p-5 rounded-lg text-center shadow-md">
            <img src="/imgs/about/02.svg" class="w-1/2 mx-auto block lg:mb-10 mb-5" alt="">
            <h2 class="text_clip text-3xl font-bold">{{ $t("mission_us") }}</h2>
            <p class="text-sm lg:text-lg dark:text-gray-300 font-medium mt-4"
              v-html="globalStore.appSettings.our_mission">
            </p>
          </div>
          <div class="border border-gray-200 p-5 rounded-lg text-center shadow-md">
            <img src="/imgs/about/03.svg" class="w-1/2 mx-auto block lg:mb-10 mb-5" alt="">
            <h2 class="text_clip text-3xl font-bold">{{ $t("target_us") }}</h2>
            <p class="text-sm lg:text-lg dark:text-gray-300 font-medium mt-4"
              v-html="globalStore.appSettings.our_target">
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
const { currentLocale, dir } = useLang();
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const { t, localeLocation } = useI18n();
const localePath = useLocalePath();
// navigateTo(localePath("/"));
useHead({
  title: t("about"),
  meta: [{ name: "title", content: t("about") }],
});
</script>
