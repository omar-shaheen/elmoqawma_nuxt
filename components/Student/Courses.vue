<template>
  <div>
    <section>
      <div class="container mx-auto mt-5 lg:px-3">
        <div class="flex items-center flex-col lg:flex-row shadow-lg rounded-3xl p-10 lg:py-4">
          <img src="~/assets/images/student/my_courses/books.svg" class="h-60" alt="" />
          <div class="lg:ms-20">
            <h1 class="text_clip py-3 text-xl lg:text-4xl font-bold mt-10 lg:mt-0 mb-6">{{ $t("desc_app_student") }}
            </h1>
            <span class="text-2xl lg:text-3xl dark:text-fpLightBack">{{ $t("download_app") }}</span>
            <div class="flex items-center gap-x-10 mt-5">
              <a href="#">
                <img src="~/assets/images/google-play.svg" alt="" class="w-28 lg:w-48" />
              </a>
              <a href="#">
                <img src="~/assets/images/app-store.svg" alt="" class="w-28 lg:w-48" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto py-8 lg:px-3">
        <div class="flex items-center gap-x-5 border-b mb-4 pb-4">
          <img src="/imgs/menu-icons/256/laptop.png" class="w-12" alt="">
          <h2
            class="font-bold text-p-dark text-2xl lg:text-4xl text-center lg:text-start text-fpDark2 dark:text-fp1">
            {{ $t("my_courses") }}</h2>
        </div>
        <CourseCourses v-if="Object.keys(props.courses).length" :courses="props.courses" />
        <Empty v-else :message="$t('not_subscibed_courses')" />
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  courses: {
    type: Object,
    // required: true,
  },
});
</script>
