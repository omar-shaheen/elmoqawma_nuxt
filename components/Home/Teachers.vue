<template>
  <Splide :options="options" class="custom-arrow-slider overflow-hidden">
    <SplideSlide class="rounded-2xl sm:pb-10" v-for="teacher in props.teachers" :key="teacher.id">
      <div class="relative z-20 hover:-translate-y-1 shadow-sm rounded-lg transition-all overflow-hidden border border-gray-100 dark:border-slate-800">
        <nuxt-link :to="localePath(`/teacher/${teacher.id}`)">
          <img :src="`${baseURL}/images/${teacher.photo}`" alt="post image" class="w-full rounded-t-2xl" />
        </nuxt-link>
        <div class="px-6 h-full">
          <nuxt-link :to="localePath(`/teacher/${teacher.id}`)"
            class="xl:text-xl text-base text-center dark:text-fpLightBack text-fp1 font-bold mt-4 block">{{
              teacher["name_" + currentLocale]
            }}</nuxt-link>
        </div>
        <div class="flex items-center justify-center pb-3">
          <span class="text-2xl text-fp3 font-bold" v-text="$t('subjects')"></span>
          <div class="flex items-center flex-wrap ms-2 whitespace-nowrap gap-x-2">
            <span v-for="subject in teacher.courses" :key="subject.id" class="text-fp1 xl:text-xl text-sm">{{
              subject["name_" + currentLocale] }},</span>
          </div>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>
<script setup>
import { useTostStore } from "@/store/TostStore";
const tost = useTostStore();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const props = defineProps({
  teachers: {
    type: Array,
    required: true,
  },
});
const options = {
  direction: dir.value,
  type: "loop",
  arrows: true,
  autoplay: true,
  interval: 4000,
  pagination: true,
  perPage: 4,
  gap: "2rem",
  breakpoints: {
    991: {
      perPage: 2,
      gap: "1rem",
      pagination: true,
    },
    768: {
      perPage: 2,
      gap: "1rem",
      pagination: true,
    },
    640: {
      perPage: 1,
      gap: "2rem",
      pagination: true,
    },
  },
};
</script>
