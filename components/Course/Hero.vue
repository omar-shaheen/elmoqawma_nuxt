<template>
  <div class="">
    <div class="container mx-auto">
      <div
        class="py-16 px-8 bg-gray-100 dark:sm:bg-fpDark1 rounded-xl sm:px-4 grid lg:grid-cols-5 relative z-[1] shadow-lg">
        <div
          class="absolute top-0 left-0 -z-[1] w-full h-full bg-cover bg-center opacity-[0.1] dark:opacity-[0.02] flex items-center justify-center pointer-events-none select-none"
          style="background-image: url(https://backend.handlephysics.com//attachments/settings/bg_course_offer.svg);">
        </div>
        <div class="lg:col-span-2 w-full relative">
          <div
            class="group bg-white shadow-lg shadow-gray-200 rounded-xl p-5 transition-all hover:shadow-gray-300 border-2 border-dashed border-slate-600">
            <div class="rounded-3xl ">
              <img :src="`${baseURL}/images/${course.photo}`" alt="image"
                class="rounded-xl w-full h-auto relative z-10 shadow-lg shadow-stone-300">
            </div>
            <div class="pt-6 px-4 pb-2 gap-4">
              <div class="mb-2">
                <h4 class="font-manrope font-bold lg:text-lg text-base text_clip">{{ `${course.name} ` }}</h4>
              </div>
              <p class="text-base font-medium text-gray-500 mb-4">
                <span class="flex justify-center gap-x-1 mt-4" v-if="course.price != 0">
                  <span class="text-3xl font-extrabold text_clip">{{ course.price }}
                    <small>{{ course.currency.name }}</small>
                  </span>
                  <sub class="text-gray-400 leading-10 line-through text-lg">
                    {{ course.sub_price }}
                    {{ course.currency.name }}
                  </sub>
                </span>
              </p>
              <div class="border-t my-4 pt-2 space-y-3">
                <div class="flex items-center gap-x-4">
                  <div class="flex items-center">
                    <Icon class="text-slate-500 me-2 size-7" name="solar:bill-list-line-duotone" />
                    <nuxt-link :to="localePath(`/section/${course.section.id}`)"
                      class="text-fpDark1 dark:sm:text-white text-sm font-bold hover:text-fp1">{{
                        course.section["name_" + currentLocale] }}</nuxt-link>
                  </div>
                  <b> / </b>
                  <div class="flex items-center">
                    <p class="text-fpDark1 dark:sm:text-white text-sm font-bold">{{
                      $t("subject") }} ({{ course.subject["name_" + currentLocale] }})</p>
                  </div>
                </div>
                <div class="flex items-center gap-x-2">
                  <img :src="`${baseURL}/images/${course.teacher.photo}`"
                    class="sobject-cover w-10 h-10 rounded-full inline" alt="">
                  <nuxt-link :to="localePath(`/teacher/${course.teacher.id}`)"
                    class="text-fpDark1 dark:sm:text-white text-sm font-bold hover:text-fp1">{{
                      $t("coach") }} {{ course.teacher["name_" + currentLocale] }}</nuxt-link>
                </div>
              </div>
              <button class="custom_btn1 w-full !text-lg !m-0">
                <span>{{ course.price != 0 ? $t("subscription") : $t("click_free_course") }}</span>
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="">
          <button @click="CourseStore.setValueTap('lectures')"
            class="bg-white overflow-hidden lg:rounded-lg shadow-xl transform hover:scale-105 duration-150 w-full">
            <img :src="`${baseURL}/images/${course.photo}`" class="h-[300px] w-full" />
          </button>
          <button @click="PayStore.setValueOrder('course', course.id, course.price)"
            v-if="CourseStore.getCourse.subscribed == 0"
            class="w-full whitespace-nowrap transition font-bold rounded-lg text-lg px-2 py-3 focus:outline-none mt-4 block text-center bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t text-white">
            <span>{{ course.price != 0 ? $t("subscription") : $t("click_free_course") }}</span>
            <Icon name="ic:baseline-check-circle-outline" class="text-xl -mt-1" />
          </button>
          <button v-else
            class="w-full whitespace-nowrap transition font-bold rounded-lg text-lg px-2 py-3 focus:outline-none mt-4 block text-center bg-green-600 text-green-200">
            <span>{{ $t("subscriber") }}</span>
            <Icon name="ic:baseline-check-circle-outline" class="text-xl -mt-1" />
          </button>
        </div> -->
        <div class="lg:col-span-3 pb-6 px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-8 gap-x-4">
            <div class="border-2 border-dashed border-slate-600 p-3 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center w-16 h-16 mx-auto">
                <img src="/imgs/icons/01.png" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text_clip text-lg lg:text-xl font-extrabold">{{ $t("number_subscriptions") }}
              </p>
              <strong class="text-2xl block"> {{ course.subscribers }} </strong>
            </div>
            <div class="border-2 border-dashed border-slate-600 p-3 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center w-16 h-16 mx-auto">
                <img src="/imgs/icons/02.png" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text_clip text-lg lg:text-xl font-extrabold">{{ $t("count_videos") }}</p>
              <strong class="text-2xl block"> {{ course.count_videos }} </strong>
            </div>
            <div class="border-2 border-dashed border-slate-600 p-3 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center w-16 h-16 mx-auto">
                <img src="/imgs/icons/03.png" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text_clip text-lg lg:text-xl font-extrabold">{{ $t("count_exams") }}</p>
              <strong class="text-2xl block"> {{ course.count_exams }} </strong>
            </div>
            <div class="border-2 border-dashed border-slate-600 p-3 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center w-16 h-16 mx-auto">
                <img src="/imgs/icons/04.png" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("exam_duration") }} </p>
              <strong class="text-2xl block"> {{ course.duration_exams }} {{ $t("minutes") }} </strong>
            </div>
            <div class="border-2 border-dashed border-slate-600 p-3 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center w-16 h-16 mx-auto">
                <img src="/imgs/icons/05.png" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("count_files") }} </p>
              <strong class="text-2xl block"> {{ course.count_attachments }} </strong>
            </div>
            <div class="border-2 border-dashed border-slate-600 p-3 rounded-lg text-center space-y-3">
              <div class="flex items-center justify-center w-16 h-16 mx-auto">
                <img src="/imgs/icons/06.png" class="w-full h-full object-contain" alt="">
              </div>
              <p class="text_clip text-lg lg:text-xl font-extrabold"> {{ $t("count_comments") }} </p>
              <strong class="text-2xl block"> {{ course.comments.length }} </strong>
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
