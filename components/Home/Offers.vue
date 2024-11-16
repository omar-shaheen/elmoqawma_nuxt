<template v-if="offers.length > 0">
  <Splide :options="options" class="custom-arrow-slider offers_pkg">
    <SplideSlide class="rounded-2xl overflow-hidden sm:pb-20" v-for="offer in props.offers" :key="offer.id">
      <div class="bg-white border rounded-xl overflow-hidden shadow-md group">
        <nuxt-link :to="localePath(`/offer/${offer.id}`)">
          <img :src="`${baseURL}/images/${offer.photo}`" alt="post image"
            class="w-full h-[250px] object-cover rounded-t-2xl" />
        </nuxt-link>
        <div class="bg-white">
          <div class="py-4 px-2">
            <div class="flex items-center gap-x-5">
              <span class="text-sm lg:text-base font-medium flex items-center gap-x-1">
                <Icon name="ph:student-duotone" class="size-5" />
                {{ $t("number_subscriptions") }}
                {{ offer.subscribers }}
              </span>
              <span class="text-sm lg:text-base font-medium flex items-center gap-x-1">
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
    </SplideSlide>
  </Splide>
</template>
<script setup>
import { useTostStore } from "@/store/TostStore";
const tost = useTostStore();
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();
const props = defineProps({
  offers: {
    type: Array,
    required: true,
  },
});
const options = {
  direction: dir.value,
  type: "loop",
  arrows: true,
  autoplay: false,
  interval: 4000,
  pagination: false,
  perPage: 3,
  gap: "1rem",
  breakpoints: {
    1299: {
      perPage: 3,
      gap: "1rem",
    },
    1024: {
      perPage: 2,
      gap: "1rem",
    },
    768: {
      perPage: 2,
      gap: "1rem",
    },
    640: {
      perPage: 1,
      gap: "1rem",
    },
  },
};
</script>
