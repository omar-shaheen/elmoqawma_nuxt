<template>
  <section class="bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] privacy-policy">
    <!-- <BreadCrumbs :classes="'bg-breadcrumb h-28 lg:h-[500px] text-white'" :contents="['اﻷسئلة الشائعة']" /> -->
    <div class="container mx-auto py-5">

      <div class="bg-white dark:bg-gray-900 lg:p-10 p-5 rounded-lg shadow-custom1">
        
        <div class="flex items-center justify-center gap-7">
          <img src="/imgs/icons/person.png" class="w-16" alt="">
          <h1 class="font-bold lg:text-4xl py-6 text-lg text_clip text-center">اﻷسئلة الشائعة</h1>
          <img src="/imgs/icons/confused.png" class="w-16" alt="">
        </div>

        <div class="mt-20 space-y-3" v-show="asks.length > 0">
          <div v-for="ask in asks" :key="ask.id" class="rounded-lg">
            <h2 id="accordion-collapse-heading-1 ">
              <button @click="setValueActive(ask.id)" type="button"
                :class="[active[ask.id] == ask.id ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%]' : 'from-slate-500 to-slate-600']"
                class="flex items-center justify-between w-full py-3 px-5 rounded-lg font-medium text-white text-xl bg-gradient-to-r hover:from-violet-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-pink-500 hover:to-90% hover:bg-[length:400%] transition group">
                <div class="flex items-center gap-x-3">
                  <img src="/imgs/icons/light-bulb.png" class="size-8"
                    :class="[active[ask.id] == ask.id ? 'invert-0' : 'grayscale']" alt="">
                  <span v-text="ask['title_' + currentLocale]"></span>
                </div>
                <Icon :class="[active[ask.id] == ask.id ? 'rotate-0 text-white' : 'rotate-180 text-white']"
                  class="text-3xl transition-all duration-300" name="zondicons-cheveron-down" />
              </button>
            </h2>
            <div v-show="active[ask.id] == ask.id"
              class="bg-gray-50 dark:bg-neutral-800 mt-1 rounded-lg shadow-lg border border-gray-200">
              <div class="w-full overflow-hidden transition duration-300 p-5">
                <p class="mb-2 text-gray-500 dark:text-gray-300 lg:text-lg text-sm"
                  v-html="ask['description_' + currentLocale]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useTostStore } from "@/store/TostStore";
const { currentLocale, dir } = useLang();
const tost = useTostStore();
const { t } = useI18n();
useHead({
  title: t("Frequently_asked_questions"),
  meta: [{ name: "title", content: t("Frequently_asked_questions") }],
});
let active = reactive({});
let asks = ref([]);
let show = ref("1");
const getAsks = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/getAsks`).then(res => {
    if (res.status) {
      asks.value = res.data;
      active[asks.value[0].id] = asks.value[0].id;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};

await useAsyncData("getAsks", async () => {
  return getAsks();
});
const setValueActive = value => {
  if (active[value] == value) {
    delete active[value];
  } else {
    active[value] = value;
  }
};
</script>
<style>
.bg-breadcrumb {
  background-image: url("~/assets/images/home/hero.png");
  background-size: cover;
}
</style>
