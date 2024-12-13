<template>
  <div>
    <div class="container mx-auto lg:px-3 mt-5 pb-24">
      <div class="flex items-center gap-x-5 border-b mb-4 pb-4">
        <img src="/imgs/menu-icons/256/certificate.png" class="w-12" alt="">
        <h2 class="font-bold text-p-dark text-2xl lg:text-4xl text-center lg:text-start text-fpDark2 dark:text-fp1">{{
          $t("all_certificates") }}</h2>
      </div>
      <div v-if="certificates.length > 0">
        <div v-for="certificate in props.certificates" :key="certificate.id"
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-3 mt-5">
          <div v-if="certificate.status"
            class="shadow-lg border border-gray-200 rounded-xl p-6 dark:bg-fpDark3 flex flex-col justify-between">
            <div class="space-y-5 text-center">
              <img src="/imgs/menu-icons/256/certificate.png" class="lg:size-20 size-16 mx-auto" alt="">
              <span
                class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-sm font-medium bg-green-500 text-white shadow-sm">{{
                  $t("success_course") }}</span>
              <h2 class="text_clip text-xl font-bold">{{ `${certificate.course.name}` }}</h2>
            </div>
            <div class="flex justify-between items-center mt-4">
              <button @click="globalStore.HashURLFile(`${baseURL}/images/certificates/${certificate.file}.pdf`)"
                class="py-2.5 px-3 text-sm border border-gray-300 rounded-full shadow-xs bg-white font-semibold text-gray-900 transition-all bg-gradient-to-r hover:from-violet-600 hover:to-pink-600 hover:text-white flex items-center justify-center gap-x-2">
                {{ $t("certificate_pdf") }}
                <img src="/imgs/icons/pdf.png" class="shrink-0 size-6" alt="">
              </button>
              <button @click="globalStore.HashURLFile(`${baseURL}/images/certificates/${certificate.file}.png`)"
                class="py-2.5 px-3 text-sm border border-gray-300 rounded-full shadow-xs bg-white font-semibold text-gray-900 transition-all bg-gradient-to-r hover:from-violet-600 hover:to-pink-600 hover:text-white flex items-center justify-center gap-x-2">
                {{ $t("certificate_png") }}
                <img src="/imgs/icons/png.png" class="shrink-0 size-6" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
      <Empty v-else :message="$t('not_certificates')" />
    </div>
  </div>
</template>
<script setup>
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const baseURL = useRuntimeConfig().public.baseURL;
const props = defineProps({
  certificates: {
    type: Object,
    // required: true,
  },
});
</script>
