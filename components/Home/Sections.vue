<template v-if="sections.length > 0">
  <Splide :options="options" class="splide_sections custom-arrow-slider">
    <SplideSlide class="" v-for="section in props.sections" :key="section.id">
      <nuxt-link :to="localePath(`/section/${section.id}`)"
        class="rounded-2xl relative z-20 hover:scale-105 transition-all group text-fp1 hover:text-fp3 dark:text-fp2 dark:hover:text-fp3">
        <!-- <p class="absolute z-10 inset-x-0 top-0 lg:-top-20 bg-white dark:bg-fpDark2 text-fp2 text-center text-xl lg:text-3xl font-bold py-2 transition-all lg:group-hover:top-0 whitespace-nowrap"
          v-text="section['name_' + currentLocale]"></p> -->
        <img :src="`${baseURL}/images/${section.photo}`" class="rounded-2xl" alt="post image" />
        <div class="p-3 pt-0">
          <p class="custom_btn1 hover:animate-gradient-xy !text-xl" v-text="section['name_' + currentLocale]"></p>
        </div>
        <!-- <p class="text-center text-xl font-bold py-2 transition-all"
          v-html="section['description_' + currentLocale].slice(0, 30)"></p> -->
      </nuxt-link>
    </SplideSlide>
  </Splide>
</template>
<script setup>
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const props = defineProps({
  sections: {
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
  pagination: false,
  perPage: 3,
  gap: "2rem",
  breakpoints: {
    768: {
      perPage: 2,
      gap: "1rem",
    },
    640: {
      perPage: 1,
      gap: "1rem",
      // pagination: true,
      arrows: false,
    },
  },
};
</script>
