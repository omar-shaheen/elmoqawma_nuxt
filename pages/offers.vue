<template>
  <section class="pb-8 lg:pb-24">
    <PageTitle :title="t('all_offers')" />
    <div class="container mx-auto mt-10">
      <Skeleton type="card" :count="3" v-if="offers.length == 0" />
      <!-- <pre dir="ltr" class="text-gray-200">{{ offers }}</pre> -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-8 h-fit" v-if="offers.length > 0">
        <div class="bg-white dark:bg-fpDark2 border rounded-xl overflow-hidden shadow-md group" v-for="offer in offers"
          :key="offer.id">
          <nuxt-link :to="localePath(`/offer/${offer.id}`)">
            <img :src="`${baseURL}/images/${offer.photo}`" alt="post image"
              class="w-full h-[250px] object-cover rounded-t-2xl" />
          </nuxt-link>
          <div class="bg-white dark:bg-fpDark2">
            <div class="py-4 px-2">
              <div class="flex items-center gap-x-5">
                <span class="dark:text-slate-200 text-sm lg:text-base font-medium flex items-center gap-x-1">
                  <Icon name="ph:student-duotone" class="size-5" />
                  {{ $t("number_subscriptions") }}
                  {{ offer.subscribers }}
                </span>
                <span class="dark:text-slate-200 text-sm lg:text-base font-medium flex items-center gap-x-1">
                  <Icon name="solar:calendar-broken" class="size-5" />
                  <bdi>{{ offer.duration.replace(/-/g, "/") }}</bdi>
                </span>
              </div>
              <nuxt-link :to="localePath(`/offer/${offer.id}`)" class="mt-2 block text-xl font-extrabold text_clip">
                <span v-text="offer['name_' + currentLocale]"></span>
              </nuxt-link>
            </div>
            <div class="p-2 mb-4">
              <div class="border-t flex items-center justify-between p-1">
                <div>
                  <Icon v-for="i in offer.stars" :key="i" class="lg:text-xl text-base text-fp2 me-1"
                    name="solar:stars-minimalistic-bold-duotone" />
                </div>
                <span class="flex text-xl font-extrabold text_clip">{{ offer.price }} {{ offer.currency.name }} </span>
              </div>
              <div class="text-center">
                <nuxt-link :to="localePath(`/offer/${offer.id}`)"
                  class="custom_btn1 hover:animate-gradient-xy !inline-flex max-w-[80%] min-w-[80%]">
                  <Icon name="fluent-emoji-flat:magnifying-glass-tilted-left" class="text-white text-xl" />
                  {{ $t("go_course") }}
                </nuxt-link>
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
const tost = useTostStore();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();
let offers = ref([]);
const localePath = useLocalePath();
const { t } = useI18n();
useHead({
  title: t("offers"),
  meta: [{ name: "title", content: t("offers") }],
});

const getOffers = () => {
  $fetch(`${useRuntimeConfig().public.apiURL}/getOffers`).then(res => {
    if (res.status) {
      if (res.data.length === 0) {
        return navigateTo(localePath(`/sections`));
      }

      offers.value = res.data;
    } else {
      tost.add({
        type: "error",
        message: res.message,
      });
    }
  });
};
await useAsyncData("getOffers", async () => {
  return getOffers();
});
</script>
