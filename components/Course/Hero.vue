<template>
  <div class="mt-3">
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
              <img :src="`${baseURL}/images/${course.photo}`" alt="image"
                class="rounded-xl w-full h-full object-cover relative z-10 shadow-lg shadow-stone-300 dark:shadow-slate-900">
            </div>
            <div class="pt-6 px-4 pb-2 gap-4">
              <div class="mb-2">
                <h4 class="font-bold lg:text-lg text-lg text_clip">{{ `${course.name} ` }}</h4>
              </div>
              <p class="text-base font-medium text-gray-500 mb-4">
                <span class="flex justify-center gap-x-1 mt-4" v-if="course.price != 0">
                  <span class="lg:text-3xl text-2xl font-extrabold text_clip">{{ course.price }}
                    <small>{{ course.currency.name }}</small>
                  </span>
                  <sub class="text-gray-400 leading-10 line-through lg:text-lg">
                    {{ course.sub_price }}
                    {{ course.currency.name }}
                  </sub>
                </span>
              </p>
              <div class="border-t my-4 pt-2 space-y-3">
                <div class="flex items-center gap-x-2">
                  <img :src="`${baseURL}/images/${course.teacher.photo}`"
                    class="sobject-cover w-14 h-14 rounded-full inline" alt="">
                  <nuxt-link :to="localePath(`/teacher/${course.teacher.id}`)"
                    class="text-fpDark1 md:text-lg dark:text-white text-sm font-bold hover:text-fp1">{{
                      $t("coach") }} {{ course.teacher["name_" + currentLocale] }}</nuxt-link>
                </div>
              </div>
              <button v-if="CourseStore.getCourse.subscribed == 0"
                @click="PayStore.setValueOrder('course', course.id, course.price)" type="button"
                class="custom_btn1 w-full !text-lg !m-0">
                <span>{{ course.price != 0 ? $t("subscription") : $t("click_free_course") }}</span>
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
              <strong class="text-3xl block text_clip2"> {{ course.subscribers }} </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold">{{ $t("number_subscriptions") }}
              </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/02.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-3xl block text_clip2"> {{ course.count_videos }} </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold">{{ $t("count_videos") }}</p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/03.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-3xl block text_clip2"> {{ course.count_exams }} </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold">{{ $t("count_exams") }}</p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/04.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-3xl block text_clip2"> {{ course.duration_exams }} <b class="text-base">{{
                $t("minutes") }}</b> </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("exam_duration") }} </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/05.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-3xl block text_clip2"> {{ course.count_attachments }} </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("count_files") }} </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/06.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="text-3xl block text_clip2"> {{ course.comments.length }} </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("count_comments") }} </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/07.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="lg:text-2xl text-lg block text_clip2"> {{ course.section["name_" + currentLocale] }}
              </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold">
                {{ $t("class") }}
              </p>
            </div>
            <div
              class="lg:bg-white/40 lg:dark:bg-fpDark3 border-2 border-dashed border-slate-600 lg:py-4 py-2 px-2 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center md:w-18 md:h-18 w-16 h-16 mx-auto">
                <img src="/imgs/icons/08.png" class="w-full h-full object-contain" alt="">
              </div>
              <strong class="lg:text-2xl text-lg block text_clip2"> {{ course.subject["name_" + currentLocale] }}
              </strong>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("subject") }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCourseStore } from "@/store/CourseStore";
import { usePayStore } from "@/store/PayStore";
const PayStore = usePayStore();
const CourseStore = useCourseStore();
const course = CourseStore.getCourse;
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const route = useRoute();
const props = defineProps({
  bg_course: {
    type: String,
    required: true,
  },
});
</script>
