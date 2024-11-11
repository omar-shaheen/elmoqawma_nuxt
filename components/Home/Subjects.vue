<template>
  <Splide :options="options_other_slider" class="custom-arrow-slider overflow-hidden pb-2">
    <SplideSlide class="rounded-2xl overflow-hidden sm:pb-10" v-for="subject in props.subjects" :key="subject.id">
      <div class="shadow-custom1 lg:my-10 rounded-lg bg-white border border-gray-200 dark:bg-fpDark2 lg:pb-8">
        <nuxt-link :to="localePath(`/subject/${subject.id}`)">
          <img :src="`${baseURL}/images/${subject.photo}`" alt="post image"
            class="w-full h-full object-cover rounded-t-2xl" />
        </nuxt-link>
        <div class="px-6 h-full text-center lg:py-0 lg:pt-5 py-5">
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
    </SplideSlide>
  </Splide>
</template>
<script setup>
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();
let subjects = ref([]);
const props = defineProps({
  subjects: {
    type: Array,
    required: true,
  },
});
const options_other_slider = {
  direction: dir.value,
  type: "loop",
  arrows: true,
  autoplay: false,
  interval: 4000,
  pagination: false,
  perPage: 4,
  gap: "1.5rem",
  breakpoints: {
    1299: {
      perPage: 3,
      gap: "1rem",
      pagination: true,
      arrows: false,
    },
    1024: {
      perPage: 2,
      gap: "1rem",
      pagination: true,
      arrows: false,
    },
    768: {
      perPage: 2,
      gap: "1rem",
    },
    640: {
      perPage: 1,
      gap: "1rem",
      pagination: false,
      arrows: false,
    },
  },
};
</script>
