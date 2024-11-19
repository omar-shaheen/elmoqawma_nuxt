<template>
  <div class="flex sm:flex-col justify-between gap-x-10">
    <div class="shadow-lg w-full lg:w-1/6 p-4 rounded-lg h-fit">
      <button @click="CourseStore.setTapFilesGroups('files')" :class="[
        CourseStore.TapFilesGroups == 'files' ? 'fill-fp1 text-fp1 dark:fill-fp1 dark:text-fp1 bg-gray-200 dark:bg-fpDark2 ' : ' dark:fill-fpLightGray dark:text-fpLightGray',
      ]"
        class="font-bold text-start px-2 hover:bg-gray-200 dark:hover:bg-fpDark2 w-full text-xl rounded-lg py-2 hover:fill-fp1 dark:hover:fill-fp1 dark:hover:text-fp1 hover:text-fp1 transition whitespace-nowrap">
        <Icon class="text-3xl" name="solar:folder-with-files-broken" /> {{ $t("files") }}
      </button>

      <button @click="CourseStore.setTapFilesGroups('groups')"
        :class="[CourseStore.TapFilesGroups == 'groups' ? 'fill-fp1 text-fp1 bg-gray-200 dark:bg-fpDark2' : 'dark:fill-fpLightGray dark:text-fpLightGray']"
        class="font-bold text-start px-2 mt-2 hover:bg-gray-200 dark:hover:bg-fpDark2 w-full text-xl rounded-lg py-2 hover:fill-fp1 dark:hover:fill-fp1 dark:hover:text-fp1 hover:text-fp1 transition whitespace-nowrap">
        <Icon class="text-3xl" name="ic:round-telegram" /> {{ $t("course_groups") }}
      </button>
    </div>
    <transition name="taps-right" v-if="CourseStore.TapFilesGroups == 'files'">
      <div class="w-full lg:w-5/6 sm:mt-10">
        <div class="shadow-lg border-t-2 border-fp1 rounded-lg divide-y">
          <div v-if="course.attachments.length == 0" class="lg:w-5/6 lg:ml-auto h-fit p-6">
            <h4 class="text-center text-2xl font-bold dark:text-white">{{ $t("sorry") }}</h4>
            <p class="text-center text-yellow-500 text-2xl mt-4">{{ $t("not_found_files") }}</p>
          </div>
          <div v-for="file in course.attachments" :key="file.id" class="py-2">
            <button v-if="course.subscribed"
              @click="globalStore.HashURLFile(`${baseURL}/images/${file.file}`, file.name)"
              class="flex justify-between items-center text-fpDark2 hover:text-fp1 px-4 cursor-pointer w-full">
              <div class="flex items-center gap-x-2 font-medium">
                <Icon class="size-7 -mt-1" name="solar:file-text-broken" />
                <p>{{ file.name }}</p>
              </div>
              <div
                class="flex flex-col items-center justify-center gap-y-1 py-2 px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-medium bg-slate-300 text-black hover:bg-slate-400 transition-all">
                <Icon class="size-7" name="solar:file-download-broken" />
                <p>{{ $t("download_file") }}</p>
              </div>
            </button>
            <button @click="notOpenFile()" v-else
              class="flex justify-between items-center text-fpDark2 hover:text-fp1 px-4 cursor-pointer w-full">
              <div class="flex items-center gap-x-2 font-medium">
                <Icon class="size-7 -mt-1" name="solar:file-text-broken" />
                <p>{{ file.name }}</p>
              </div>
              <div
                class="flex flex-col items-center justify-center gap-y-1 py-2 px-2 rounded-lg text-[10px] md:text-xs lg:text-sm font-medium bg-slate-300 text-black hover:bg-slate-400 transition-all">
                <Icon class="size-7" name="solar:file-download-broken" />
                <p>{{ $t("download_file") }}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <transition name="taps-right">
      <div class="w-full lg:w-5/6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-center sm:mt-10"
        v-if="CourseStore.TapFilesGroups == 'groups'">
        <div class="shadow-xl rounded-xl p-6">
          <a target="_blank" :href="`${course.whatsapp}`">
            <Icon class="text-fp1 text-8xl" name="ic:baseline-whatsapp" />
          </a>
          <h2 class="text-fp1 text-xl font-medium my-2">{{ $t("join_groups") }}</h2>
          <div class="flex justify-between items-center mt-4">
            <a :href="`${course.whatsapp}`" target="_blank"
              class="text-white whitespace-nowrap bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-md px-2 py-2 focus:outline-none block w-full">
              {{ $t("join_now") }}
              <Icon class="text-white text-2xl -mt-1" name="ic:baseline-whatsapp" />
            </a>
          </div>
        </div>
        <div class="shadow-xl rounded-xl p-6">
          <a target="_blank" :href="`${course.facebook}`">
            <Icon class="text-fp1 text-8xl" name="ic:baseline-facebook" />
          </a>
          <h2 class="text-fp1 text-xl font-medium my-2">{{ $t("join_facebook") }}</h2>
          <div class="flex justify-between items-center mt-4">
            <a :href="`${course.facebook}`" target="_blank"
              class="text-white whitespace-nowrap bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-md px-2 py-2 focus:outline-none block w-full">
              {{ $t("join_now") }}
              <Icon class="text-white text-2xl -mt-1" name="ic:baseline-whatsapp" />
            </a>
          </div>
        </div>
        <div class="shadow-xl rounded-xl p-6">
          <a target="_blank" :href="`${course.telegram}`">
            <Icon class="text-fp1 text-8xl" name="ic:baseline-telegram" />
          </a>
          <h2 class="text-fp1 text-xl font-medium my-2">{{ $t("join_telegram") }}</h2>
          <div class="flex justify-between items-center mt-4">
            <a :href="`${course.telegram}`" target="_blank"
              class="text-white whitespace-nowrap bg-gradient-to-b from-fp1 to-fp1/70 hover:bg-gradient-to-t transition font-bold rounded-lg text-md px-2 py-2 focus:outline-none block w-full">
              {{ $t("join_now") }}
              <Icon class="text-white text-2xl -mt-1" name="ic:baseline-telegram" />
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useCourseStore } from "@/store/CourseStore";
import { useGlobalStore } from "@/store/GlobalStore";
import { useTostStore } from "@/store/TostStore";
const tost = useTostStore();
const globalStore = useGlobalStore();
const CourseStore = useCourseStore();
const course = CourseStore.getCourse;
const baseURL = useRuntimeConfig().public.baseURL;
const notOpenFile = () => {
  tost.add({
    type: "error",
    message: "انت لست مشترك في الكورس",
  });
};
</script>
