<template>
  <div>
    <h1 class="text-2xl lg:text-3xl font-bold text-start text-fp1">{{ `${course.name} ` }}</h1>
    <div class="mt-5">
      <NuxtLink :to="localePath(`/section/${course.section.id}`)" class="mb-6 text-xl dark:text-fpLightBack block">
        <span class="text-lg lg:text-xl font-bold">{{ $t("section") }}</span>: <span
          class="text-lg lg:text-xl font-medium text-fp1"
          v-text="currentLocale == 'ar' ? course.section.name_ar : course.name_en"></span>
      </NuxtLink>
      <hr />
    </div>

    <h6 class="mt-10 mb-5 text-2xl text-fpDark2 dark:text-gray-300 font-medium">{{ $t("comments") }} ({{
      course.comments.length }})</h6>

    <div class="space-y-4">
      <div
        class="flex justify-between items-start gap-3 bg-gray-50 dark:bg-fpDark2 p-3 rounded-xl shadow-md border border-gray-100 dark:border-fpDark2"
        v-for="comment in course.comments" :key="comment.id">
        <div class="flex gap-3">
          <div>
            <img v-if="comment.user.photo"
              :src="comment.user.oauth_type == null ? `${baseURL}/images/${comment.user.photo}` : `${comment.user.photo}`"
              alt="user photo" class="object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto" />
            <img v-else src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"
              alt="user photo" class="object-cover w-10 lg:w-20 h-10 lg:h-20 rounded-full inline lg:mx-auto" />
          </div>

          <div class="space-y-1">
            <span class="text-gray-600 dark:text-gray-300" v-text="CourseStore.formatDate(comment.created_at)"></span>
            <strong class="block text_clip text-lg" v-text="comment.user['name_' + currentLocale]"></strong>
            <p class="text-gray-600 dark:text-gray-300 text-lg font-medium" v-html="comment.comment"></p>
          </div>
        </div>
        <a href="#replay"
          class="flex items-center bg-gradient-to-r from-pink-500 to-violet-500 text-white gap-1 px-2 py-1 cursor-pointer font-semibold tracking-widest rounded-md duration-300 hover:gap-2 hover:translate-x-3">
          {{ $t("reply") }}
          <Icon name="stash:arrow-reply" class="size-7" />
        </a>
      </div>
    </div>

    <form class="mt-10" id="replay" @submit.prevent="sendComment()" method="post" action
      @keydown="errors.clear($event.target.name)">
      <b class="font-medium text-3xl text-fp1">{{ $t("leave_response_course") }}</b>
      <div class="w-full mt-10 mb-6">
        <div class="relative">
          <!-- <label for="message" class="mt-8 text-gray-500 dark:text-gray-300 mb-10 block sm:text-sm">{{ $t("leave_response_course") }}</label> -->
          <QuillEditor :options="options" ref="textEditor" toolbar="full" contentType="html" v-model:content="comment"
            class="dark:!text-white lg:!text-xl placeholder:dark:!text-gray-200" />

          <p v-if="errors.has('comment')" class="mt-2 text-sm text-red-500">{{ errors.get("comment") }}</p>
        </div>
      </div>

      <button type="submit" class="custom_btn1 !text-xl">
        {{ $t("add_comment") }}
      </button>
    </form>
  </div>
</template>
<script setup>
import { useCourseStore } from "@/store/CourseStore";
const CourseStore = useCourseStore();
const course = CourseStore.getCourse;
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const errors = reactive(useErrors());
let textEditor = ref(null);
let comment = ref("");
const { t, locale, setLocale } = useI18n();
let options = {
  theme: "snow",
  placeholder: `${t("write_comment_here")}`,
};
const sendComment = () => {
  CourseStore.commentCourse(comment.value);
  comment.value = "";
  textEditor.value.setHTML(comment.value);
};
</script>
