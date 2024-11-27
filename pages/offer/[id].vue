<template>
  <section class="mt-3" v-if="Object.keys(OfferStore.getOffer).length">
    <div class="lg:container lg:mx-auto my-24" v-if="Object.keys(OfferStore.getOffer).length == 0">
      <Skeleton type="image_text" :count="6" />
    </div>
    <div class="container mx-auto">
      <div
        class="py-16 px-8 bg-gray-100 dark:bg-fpDark2 rounded-xl sm:px-4 grid lg:grid-cols-5 relative z-[1] shadow-lg">
        <div
          class="absolute top-0 left-0 -z-[1] w-full h-full bg-cover bg-center opacity-[0.1] dark:opacity-[0.02] flex items-center justify-center pointer-events-none select-none"
          style="background-image: url(https://backend.handlephysics.com//attachments/settings/bg_course_offer.svg);">
        </div>

        <div class="lg:col-span-2 w-full relative">
          <div
            class="group bg-white dark:bg-fpDark2 shadow-lg shadow-gray-200 dark:shadow-slate-900 rounded-xl p-5 transition-all hover:shadow-gray-300 border-2 border-dashed border-slate-600">
            <div class="rounded-3xl lg:h-80 h-56">
              <img :src="`${baseURL}/images/${OfferStore.getOffer.photo}`" alt="image"
                class="rounded-xl w-full h-full object-cover relative z-10 shadow-lg shadow-stone-300 dark:shadow-slate-900">
            </div>
            <div class="pt-6 px-4 pb-2 gap-4">
              <div class="mb-2 text-center">
                <h4 class="font-manrope font-bold lg:text-2xl text-lg text_clip">
                  {{ OfferStore.getOffer["name_" + currentLocale] }}
                </h4>
                <p class="text-base font-medium text-gray-500 mb-4">
                  <span class="flex justify-center gap-x-1 mt-4">
                    <span class="lg:text-3xl text-2xl font-extrabold text_clip">
                      {{ OfferStore.getOffer.price }}
                      <small>{{ OfferStore.getOffer.currency.name }}</small>
                    </span>
                  </span>
                </p>
              </div>

              <button @click="PayStore.setValueOrder('offer', OfferStore.getOffer.id, OfferStore.getOffer.price)"
                v-if="OfferStore.getOffer.subscribed == 0" type="button" class="custom_btn1 w-full !text-lg !m-0">
                <span>{{ $t("subscription") }}</span>
              </button>
              <button v-else type="button" class="btn_subscriber w-full !text-lg !m-0">
                <i class="animation"></i>{{ $t("subscriber") }}<i class="animation"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 pb-6 px-6 lg:mt-0 mt-10">
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-y-8 gap-y-4 gap-x-4">
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/01.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-3xl block text_clip2"> {{ OfferStore.getOffer.subscribers }} </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold">
                {{ $t("number_subscriptions") }}
              </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/04.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-sm lg:text-base block text_clip2 !mt-5">
                <bdi> {{ OfferStore.getOffer.duration.replace(/-/g, "/") }} </bdi>
              </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold">
                {{ $t("duration") }}
              </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/06.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="block text_clip2">
                <Icon v-for="i in OfferStore.getOffer.stars" :key="i" class="text-2xl text-fp2"
                  name="solar:stars-minimalistic-bold-duotone" />
              </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("number_ratings") }} </p>
            </div>
          </div>

          <div class="mt-5">
            <h2 class="font-bold text-p-dark text-xl lg:text-2xl mb-3 pb-2 border-b"> {{ $t("about_offer") }} </h2>
            <p class="text-sm lg:text-lg font-medium dark:text-fpLightBack"
              v-html="OfferStore.getOffer['description_' + currentLocale]"></p>
          </div>
        </div>

      </div>

      <div class="my-10">
        <h1
          class="font-manrope font-bold lg:text-3xl text-lg text_clip my-5 border-b pb-3">
          {{ $t("courses_offer") }}</h1>
        <CourseCourses v-if="OfferStore.getOffer.courses.length" :courses="OfferStore.getOffer.courses" />
      </div>

    </div>

    <Transition name="lessons-down">
      <CourseModalPay v-if="PayStore.getPayData.show" />
    </Transition>

  </section>
</template>

<script setup>
import { useOfferStore } from "@/store/OfferStore";
import { useGlobalStore } from "@/store/GlobalStore";
import { usePayStore } from "@/store/PayStore";
const PayStore = usePayStore();
const globalStore = useGlobalStore();
const OfferStore = useOfferStore();
const { currentLocale } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();

await OfferStore.getOfferApi(route.params.id).then(res => {
  try {
    useHead({
      title: res["name_" + currentLocale.value],
      meta: [{ name: "title", content: res["name_" + currentLocale.value] }],
    });
  } catch (error) {
    console.log(error);
  }
});
</script>
