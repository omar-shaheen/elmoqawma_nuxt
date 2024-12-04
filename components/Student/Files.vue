<template>
  <section>
    <div class="container mx-auto lg:my-10 lg:px-3">
      <div class="flex items-center gap-x-5 border-b mb-4 pb-4">
        <img src="/imgs/menu-icons/256/files.png" class="w-12" alt="">
        <h2 class="font-bold text-p-dark text-2xl lg:text-4xl text-center lg:text-start text-fpDark2 dark:text-fp1">{{
          $t("my_files") }}</h2>
      </div>
      <div class="lg:w-full" v-if="props.courses.length">
        <div class="shadow-lg border-t-2 border-fp2 py-4 rounded-lg space-y-4 mt-10" v-for="course in props.courses" :key="course.id">
          <h1 class="text-center text-3xl font-bold text_clip">{{ `${course.name} ` }}</h1>
          <button
            v-for="file in course.attachments"
            @click="globalStore.HashURLFile(`${baseURL}/images/${file.file}`, file.name)"
            class="flex justify-between items-center hover:bg-gray-200 p-4 cursor-pointer w-full"
            :key="file.id"
          >
            <div class="flex items-center text-fp2">
              <Icon class="text-3xl me-2" name="ic:baseline-insert-drive-file" />
              <p>{{ file.name }}</p>
            </div>
            <div class="flex items-center text-fp2 hover:text-fp2/80">
              <Icon class="text-3xl me-2" name="mdi:printer-check" />
              <p>{{ $t("download_file") }}</p>
            </div>
          </button>
          <Empty v-if="course.attachments.length == 0" :message="$t('not_files_courses')" />
        </div>
      </div>
      <Empty v-else :message="$t('not_subscibed_courses')" />
    </div>
  </section>
</template>
<script setup>
import {useGlobalStore} from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const {currentLocale, dir} = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const props = defineProps({
  courses: {
    type: Object,
    // required: true,
  },
});
</script>
