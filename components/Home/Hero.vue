<template>
  <section class="lg:pt-5 relative hero-section">
    <!-- :style="`background-image: url('${baseURL}/images/${globalStore.appSettings.bg_hero}')`" -->
    <div class="container mx-auto flex flex-col lg:flex-row items-center relative z-10 h-full">
      <div class="lg:w-1/2 mt-8">
        <div class="flex flex-col justify-center" v-if="Object.keys(globalStore.appSettings).length > 0">
          <div class="mb-5">
            <h1 class="text-3xl lg:text-6xl !leading-[1.4] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              v-text="globalStore.appSettings.title_hero"></h1>
          </div>
          <h3 class="lg:text-2xl text-lg leading-tight font-medium text-gray-600 dark:text-slate-300">
            "انضم إلى منصة المقاومة في الفيزياء الآن، وابدأ رحلتك نحو التميز . مع دعم مستمر ومحتوى تعليمي متجدد، ستكون
            دائمًا على استعداد لتحقيق أفضل النتائج في مادة الفيزياء. تذكر، النجاح يبدأ من هنا!"
          </h3>
        </div>

        <div class="flex items-center flex-wrap sm:gap-y-6 gap-x-5 w-full mt-10">
          <nuxt-link v-if="!auth.isLoggedIn" :to="localePath('/login')"
            class="lg:hidden text-white whitespace-nowrap bg-fp2 hover:bg-fp3 dark:bg-fp1 dark:hover:bg-fp2 transition font-bold rounded-lg text-md lg:text-lg text-center px-4 py-2 lg:py-2.5 block focus:outline-none dark:focus:ring-fp2">
            {{ $t("login") }}
            <Icon name="mdi-lock-open" class="text-white text-xl -mt-1" />
          </nuxt-link>
          <nuxt-link v-if="!auth.isLoggedIn" :to="localePath('/register')"
            class="lg:hidden text-white whitespace-nowrap bg-fp2 hover:bg-fp3 dark:bg-fp1 dark:hover:bg-fp2 transition font-bold rounded-lg text-md lg:text-lg text-center px-5 lg:px-4 py-2 lg:py-2.5 block focus:outline-none dark:focus:ring-fp2">
            {{ $t("create_new_account") }}
            <Icon name="mdi-account-plus" class="text-white text-xl -mt-1" />
          </nuxt-link>
          <nuxt-link :to="localePath('/contact')" class="custom_btn1 hover:animate-gradient-xy !text-base !mx-0">
            {{ $t("contact") }}
            <Icon name="ic:outline-contact-mail" class="text-white text-xl -mt-1" />
          </nuxt-link>
          <nuxt-link :to="localePath('/sections')" class="custom_btn1 hover:animate-gradient-xy !text-base !mx-0">
            {{ $t("all_offers") }}
            <Icon name="ic:round-card-giftcard" class="text-white text-xl" />
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
