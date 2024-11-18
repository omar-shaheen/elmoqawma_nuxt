<template>
  <div>
    <div class="grid md:grid-cols-2">
      <div>
        <img :src="`${baseURL}/images/${course.description_photo}`" class="w-full rounded-xl shadow-xl" />
      </div>

      <div class="md:p-4 p-2 mt-4 md:mt-0">
        <h1 class="font-bold text-lg md:text-3xl mb-2 md:mb-4 text_clip">
          {{ $t("course_aboute") }}</h1>
        <div class="text-sm md:text-lg !text-fpDark1 dark:!text-white" v-html="course['description_' + currentLocale]">
        </div>

        <div class="mt-10 border-t">
          <h2 class="font-bold text-lg md:text-xl mb-4 text_clip p-4">
            {{ $t("trainers") }}
          </h2>
          <div class="pb-4 mt-2 px-4">
            <nuxt-link :to="localePath(`/teacher/${course.teacher.id}`)" class="md:text-2xl text-lg text_clip font-bold flex items-center gap-4">
              <img v-if="course.teacher.photo" :src="`${baseURL}/images/${course.teacher.photo}`"
                class="w-12 lg:w-16 rounded-full shadow-xl" alt="" />
              <img v-else src="/imgs/avatar.png" alt="user photo" class="w-12 lg:w-16 rounded-full shadow-xl" />
              {{ course.teacher["name_" + currentLocale] }}
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { useCourseStore } from "@/store/CourseStore";
const CourseStore = useCourseStore();
const course = CourseStore.getCourse;
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
</script>
