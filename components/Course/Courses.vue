<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="bg-white dark:bg-fpDark2 border rounded-xl overflow-hidden shadow-md group" v-for="course in props.courses"
      :key="course.id">

      <!-- <div v-if="course.teacher.photo" class="flex items-center m-3">
        <img :src="`${baseURL}/images/${course.teacher.photo}`"
          class="sm:mb-4 object-cover w-10 h-10 rounded-full inline" alt="teacher photo" />
        <nuxt-link :to="localePath(`/teacher/${course.teacher.id}`)" class="font-extrabold text_clip ms-2">{{
          course.teacher["name_" + currentLocale] }}</nuxt-link>
      </div> -->

      <nuxt-link :to="localePath(`/course/${course.id}`)">
        <img :src="`${baseURL}/images/${course.photo}`" alt="post image"
          class="w-full h-[250px] object-cover rounded-t-2xl" />
      </nuxt-link>
      <div class="bg-white dark:bg-fpDark2">
        <div class="py-4 px-2">
          <div class="flex flex-col gap-2">
            <span class="dark:text-slate-200 text-sm lg:text-base font-medium flex items-center gap-x-1">
              <Icon name="ph:student-duotone" class="size-5" />
              {{ $t("number_subscriptions") }} {{
                course.subscribers }}
            </span>
            <span class="dark:text-slate-200 text-sm lg:text-base font-medium flex items-center gap-x-1">
              <Icon name="mingcute:classify-2-line" class="size-5" />
              {{ course.section["name_" + currentLocale] }}
            </span>
            <span class="dark:text-slate-200 text-sm lg:text-base font-medium flex items-center gap-x-1">
              <Icon name="ic:twotone-local-offer" class="size-5" />
              {{ $t("discount") }} {{ course.discount }}
              {{ course.currency.name }}
            </span>
          </div>
          <nuxt-link :to="localePath(`/course/${course.id}`)" class="mt-2 block text-xl font-extrabold text_clip">
            <span>{{ `${course.name} ` }}</span>
          </nuxt-link>
        </div>
        <div class="p-2 mb-4">
          <div class="border-t flex items-center justify-center p-1">
            <span class="flex text-xl font-extrabold text_clip" v-if="course.price != 0">
              <b class="whitespace-nowrap">{{ course.price }} {{ course.currency.name }}</b>
              <sub class="text-gray-400 ms-1 leading-10 whitespace-nowrap line-through">
                {{ course.sub_price }}
                {{ course.currency.name }}
              </sub>
            </span>
          </div>
          <div class="text-center">
            <nuxt-link :to="localePath(`/course/${course.id}`)"
              class="custom_btn1 hover:animate-gradient-xy !inline-flex max-w-[80%] min-w-[80%]">
              <Icon name="fluent-emoji-flat:magnifying-glass-tilted-left" class="text-white text-xl" />
              {{ course.price != 0 ? $t("go_course") : $t("free_lecture") }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const props = defineProps({
  courses: {
    type: Object,
    required: true,
  },
});
</script>
