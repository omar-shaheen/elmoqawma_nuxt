<template>
  <section class="lg:pt-5 relative hero-section">
    <!-- :style="`background-image: url('${baseURL}/images/${globalStore.appSettings.bg_hero}')`" -->
    <div class="container mx-auto flex flex-col lg:flex-row items-center relative z-10 h-full">
      <div class="lg:w-1/2 md:mt-8 mt-4">
        <div class="flex flex-col justify-center" v-if="Object.keys(globalStore.appSettings).length > 0">
          <div class="mb-5">
            <h1
              class="md:text-6xl text-xl !leading-[1.4] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              v-text="globalStore.appSettings.title_hero"></h1>
          </div>
          <h3 class="md:text-2xl text-base leading-tight font-medium text-gray-600 dark:text-slate-300">
            "انضم إلى منصة المقاومة في الفيزياء الآن، وابدأ رحلتك نحو التميز . مع دعم مستمر ومحتوى تعليمي متجدد، ستكون
            دائمًا على استعداد لتحقيق أفضل النتائج في مادة الفيزياء. تذكر، النجاح يبدأ من هنا!"
          </h3>
        </div>

        <div class="flex items-center flex-wrap lg:justify-start justify-center md:gap-y-6 gap-y-1 md:gap-x-5 gap-x-4 w-full md:mt-10 mt-5">
          <nuxt-link v-if="!auth.isLoggedIn" :to="localePath('/login')"
            class="lg:hidden custom_btn1 hover:animate-gradient-xy md:!text-base !text-sm !mx-0 md:p-3 !p-1">
            {{ $t("login") }}
            <Icon name="mdi-lock-open" class="text-white md:text-xl text-base" />
          </nuxt-link>
          <nuxt-link v-if="!auth.isLoggedIn" :to="localePath('/register')"
            class="lg:hidden custom_btn1 hover:animate-gradient-xy md:!text-base !text-sm !mx-0 md:p-3 !p-1">
            {{ $t("create_new_account") }}
            <Icon name="mdi-account-plus" class="text-white md:text-xl text-base" />
          </nuxt-link>
          <nuxt-link :to="localePath('/contact')" class="custom_btn1 hover:animate-gradient-xy md:!text-base !text-sm !mx-0 md:p-3 !p-1">
            {{ $t("contact") }}
            <Icon name="ic:outline-contact-mail" class="text-white md:text-xl text-base" />
          </nuxt-link>
          <nuxt-link :to="localePath('/sections')" class="custom_btn1 hover:animate-gradient-xy md:!text-base !text-sm !mx-0 md:p-3 !p-1">
            {{ $t("all_offers") }}
            <Icon name="ic:round-card-giftcard" class="text-white md:text-xl text-base" />
          </nuxt-link>
        </div>
      </div>
      <div class="lg:w-1/2">
        <Splide :options="options" class="splide_sections custom-arrow-slider">
          <SplideSlide class="" v-for="i in 3" :key="i">
            <img :src="`${baseURL}/images/${globalStore.appSettings.avatar_hero}`" class="w-11/12 mx-auto lg:me-auto"
              alt="hero web" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useGlobalStore } from "@/store/GlobalStore";
const auth = useAuthStore();
const globalStore = useGlobalStore();
const baseURL = useRuntimeConfig().public.baseURL;

const { dir } = useLang();

const options = {
  direction: dir.value,
  type: "loop",
  arrows: true,
  autoplay: true,
  interval: 3000,
  pagination: false,
  perPage: 1,
};
</script>
