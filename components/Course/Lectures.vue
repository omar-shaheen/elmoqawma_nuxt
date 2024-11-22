<template>
  <div class="bg-gray-200 dark:bg-gray-800 px-2 lg:px-4 py-4 rounded-lg shadow-lg">
    <h1 class="font-extrabold text-3xl text_clip p-4 line-right">{{ $t("lectures") }}</h1>
    <div v-for="chapter in CourseStore.getCourse.chapters" :key="chapter.id">
      <div class="relative z-50 p-1">
        <button type="button" @click="CourseStore.setActiveChapter(chapter.id)"
          class="flex items-center justify-between w-full py-3 px-5 font-medium text-white bg-gradient-to-r hover:from-violet-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-pink-500 hover:to-90% hover:bg-[length:400%] transition group rounded-lg"
          aria-expanded="true"
          :class="[CourseStore.activeChapter[chapter.id] == chapter.id ? 'from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%]' : 'from-fpDark1 to-fpDark3']">
          <div class="flex justify-between items-center gap-x-3">
            <Icon name="solar:clipboard-list-broken" class="text-base md:text-xl lg:text-3xl" />
            <span class="lg:text-2xl text-inherit font-bold">{{ chapter["name_" + currentLocale] }}</span>
          </div>
          <Icon name="fa6-solid:chevron-down" class="shrink-0 transition-all ease-in-out"
            :class="[CourseStore.activeChapter[chapter.id] == chapter.id ? 'rotate-0' : 'rotate-180']" />
        </button>
      </div>
      <transition name="lessons-down">
        <div v-if="CourseStore.activeChapter[chapter.id] == chapter.id" class="divide-y divide-gray-300">
          <div v-for="lecture in chapter.lectures" :key="lecture.id"
            class="relative py-4 px-2 flex items-center cursor-pointer transition">
            <button v-if="
              (lecture.type_video === 'youtube' || lecture.type_video === 'server' || lecture.type_video === 'server_id' || lecture.type_video === 'vimeo') && lecture.subscribed
            " @click="CourseStore.setValueShowVideo(true, lecture)" type="button"
              class="button_video absolute inset-0 z-50 w-full"></button>

            <button v-else-if="!lecture.subscribed" @click="PayStore.setValueOrder('lecture', lecture.id)" type="button"
              class="absolute inset-0"></button>
            <div class="flex sm:flex-col sm:gap-y-4 sm:py-2 justify-between items-center w-full">
              <div class="flex items-center sm:w-full sm:justify-between sm:px-4">
                <!-- <Icon name="ic-baseline-play-circle" class="text-3xl lg:ms-6 dark:text-white" /> -->
                <Icon :name="`${lecture.subscribed ? 'mdi-eye-outline' : 'ic-baseline-lock'}`"
                  class="text-xl lg:text-2xl text-gray-800" />
                <span class="font-bold ms-3 text-sm md:text-base text-fpDark2 lg:dark:text-gray-200">{{ lecture.title
                  }}</span>
                <span class="font-normal sm:text-md md:text-xl text-fp2 lg:ms-2"
                  v-if="lecture.price != 0 && !course.subscribed">({{ lecture.price }} {{
                    CourseStore.getCourse.currency.name }})</span>
                <Icon :name="`${lecture.subscribed ? 'mdi-eye-outline' : 'ic-baseline-lock'}`"
                  class="sm:dark:text-white text-xl lg:hidden" />
              </div>
              <div class="flex items-center gap-x-4 sm:w-full sm:justify-center sm:px-4">
                <nuxt-link
                  :to="{ path: localePath(`/exam/${course.id}`), query: { plan: encodeString(lecture.id), related: encodeString('exams') } }"
                  v-if="lecture.questions_count && lecture.subscribed"
                  class="ms-auto text-green-500 text-xl font-bold relative z-50">
                  <span
                    class="py-1 px-1 md:px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-bold bg-slate-300 text-black hover:bg-slate-400 transition-all">
                    <Icon name="healthicons:i-exam-multiple-choice-outline"
                      class="transition-all me-1 text-xl lg:text-2xl" />
                    {{ $t("exam_lecture") }}
                  </span>
                </nuxt-link>
                <nuxt-link
                  :to="{ path: localePath(`/exam/${course.id}`), query: { plan: encodeString(lecture.id), related: encodeString('assignments') } }"
                  v-if="lecture.assignments_count && lecture.subscribed"
                  class="ms-auto text-green-500 text-xl font-bold relative z-50">
                  <span
                    class="py-1 px-1 md:px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-bold bg-slate-300 text-black hover:bg-slate-400 transition-all">
                    <Icon name="hugeicons:task-edit-01" class="transition-all me-1 text-xl lg:text-2xl" />
                    {{ $t("assignments_lecture") }}
                  </span>
                </nuxt-link>
                <nuxt-link v-if="lecture.exam_google && lecture.subscribed"
                  :to="{ path: localePath(`/exam_google/${course.id}`), query: { plan: encodeString(lecture.exam_google) } }"
                  class="ms-auto text-green-500 text-xl font-bold relative z-50">
                  <span
                    class="py-1 px-1 md:px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-bold bg-slate-300 text-black hover:bg-slate-400 transition-all">
                    <Icon name="healthicons:i-exam-multiple-choice-outline"
                      class="transition-all me-1 text-xl lg:text-2xl" />
                    {{ $t("exam_google") }}
                  </span>
                </nuxt-link>
                <a v-if="lecture.type_video === 'zoom' || lecture.type_video === 'googleMeeting' || lecture.type_video === 'liveStream'"
                  class="ms-auto text-green-500 text-xl font-bold" :href="`${CourseStore.isDateNow(lecture.start_time) && !CourseStore.isDoneMeeting(lecture.start_time, lecture.duration) && lecture.subscribed
                    ? `${lecture.join_url}?username=${auth.user.name_ar}`
                    : 'javascript:;'
                    }`" target="_blank">
                  <span
                    v-if="CourseStore.isDateNow(lecture.start_time) && !CourseStore.isDoneMeeting(lecture.start_time, lecture.duration)"
                    class="text-white whitespace-nowrap bg-gradient-to-b from-green-400 to-green-500/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-sm px-2 py-2.5 focus:outline-none">
                    {{ $t("join_now") }}
                    <Icon name="logos:zoom-icon" class="text-white text-xl -mt-1" />
                  </span>
                  <span v-else-if="CourseStore.isDoneMeeting(lecture.start_time, lecture.duration)" class="-mb-2">
                    <Icon name="logos:zoom-icon" class="text-white text-xl me-2 -mt-1" />{{ $t("done_meeting") }}
                  </span>
                  <span v-else class="-mb-2">
                    <Icon name="logos:zoom-icon" class="text-white text-xl me-2 -mt-1" />{{
                      CourseStore.formatDate(lecture.start_time) }} {{ $t("with_time_cairo") }}
                  </span>
                </a>
                <button v-if="lecture.subscribed && lecture.attachments_count"
                  @click="CourseStore.setAttachments(lecture.attachments, lecture.title)"
                  class="text-green-500 text-xl font-bold relative z-50">
                  <span
                    class="py-1 px-1 md:px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-bold bg-slate-300 text-black hover:bg-slate-400 transition-all">
                    <Icon name="ph:files-light" class="transition-all me-1 text-xl lg:text-2xl" />
                    {{ $t("binding_assembly") }}
                  </span>
                </button>
                <span
                  class="py-1 px-1 md:px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-bold bg-slate-300 text-black hover:bg-slate-400 transition-all">
                  <Icon name="solar:clapperboard-play-broken" class="transition-all me-1 text-xl lg:text-2xl" />
                  {{ $t("view_video") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup>
import { useCourseStore } from "@/store/CourseStore";
import { usePayStore } from "@/store/PayStore";
import { useAuthStore } from "@/store/AuthStore";
const auth = useAuthStore();
const PayStore = usePayStore();
const CourseStore = useCourseStore();
const course = CourseStore.getCourse;
const { currentLocale, dir } = useLang();
const encodeString = string => {
  return btoa(string);
};
</script>
<style scoped>
.hidden {
  display: none !important;
}

@media (min-width: 1024px) {
  .lg\:block {
    display: block !important;
  }
}
</style>
