<template>
  <div :title="$t('notification_course_offer_post')" class="relative"
    @mouseenter="globalStore.hoverNotification = !globalStore.hoverNotification"
    @mouseleave="globalStore.hoverNotification = false" v-if="auth.isLoggedIn">
    <Icon name="line-md:bell-alert-loop" class="btn_actions_header hover:brightness-110 hover:animate-pulse p-1.5" />
    <div v-if="Object.keys(globalStore.notifications).length"
      class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
      {{ globalStore.notifications.length }}
    </div>
    <transition name="menu-down" v-show="globalStore.hoverNotification"
      v-if="Object.keys(globalStore.notifications).length > 0">
      <div style="display: none"
        class="bg-gray-50 dark:text-gray-300 dark:bg-fpDark1 fixed lg:absolute top-11 lg:top-10 end-0 w-full lg:w-72 z-[110] rounded-lg shadow-xl dark:border-t dark:border-t-fp2">
        <div class="flex items-center justify-between border-b border-b-fpLightGray dark:border-b-fpDark2 pb-2 p-4">
          <p class="text-gray-900 dark:text-gray-300 text-lg font-bold">{{ $t("notification") }}</p>
          <button @click="globalStore.markAsRead()" type="button" class="btn_custom2 !text-sm !py-1">
            {{ globalStore.notifications.length }} {{ $t("read_all") }}
          </button>
        </div>
        <ul class="flex flex-col divide-y divide-gray-200 dark:divide-fpDark2 max-h-[50vh] overflow-y-scroll">
          <li v-for="notification in globalStore.notifications" :key="notification.id">
            <!-- globalStore.HashURLFile(`${baseURL}/images/certificates/${notification.data.certificate.file}.pdf`); -->
            <button v-if="'certificate' in notification.data" @click="
              globalStore.removeNotificationUser('certificate', notification.id);
            globalStore.HashURLFile(`${baseURL}/images/certificates/${notification.data.certificate.file}.pdf`);
            " class="link_dropdown_link">
              <span class="flex flex-col text-start ms-2">
                <span class="text-base font-medium dark:text-fpLightBack"
                  v-text="`${notification.data.certificate.message ?? ''}`"></span>
              </span>
            </button>
            <button v-if="'message' in notification.data" @click="
              globalStore.removeNotificationUser('message', notification.id);
            globalStore.messageNotification = notification.data.message;
            globalStore.ModalMessage = true;
            " class="link_dropdown_link">
              <span class="flex flex-col text-start ms-2">
                <span class="text-base font-medium dark:text-fpLightBack">{{ $t("message_site") }}</span>
              </span>
            </button>
            <nuxt-link v-if="'course' in notification.data"
              @click="globalStore.removeNotificationUser('course', notification.id)"
              :to="localePath(`/course/${notification.data.course.id}`)" class="link_dropdown_link">
              <img :src="`${baseURL}/images/${notification.data.course.photo}`" alt="post image"
                class="w-8 h-8 rounded-full object-cover" />
              <span class="flex flex-col text-start ms-2">
                <span class="text-base font-medium dark:text-fpLightBack"
                  v-text="`${notification.data.course.message ?? ''}  ${notification.data.course.name}`"></span>
                <!-- <p class="mt-1 dark:text-gray-300 cut_text_css" v-html="String(notification.data.course['description_' + currentLocale])"></p> -->
              </span>
            </nuxt-link>
            <nuxt-link v-else-if="'offer' in notification.data"
              @click="globalStore.removeNotificationUser('offer', notification.id)"
              :to="localePath(`/offer/${notification.data.offer.id}`)" class="link_dropdown_link">
              <img :src="`${baseURL}/images/${notification.data.offer.photo}`" alt="post image"
                class="w-8 h-8 rounded-full object-cover" />
              <span class="flex flex-col text-start ms-2">
                <span class="text-base font-medium dark:text-fpLightBack"
                  v-text="`${notification.data.offer.message ?? ''}   ${notification.data.offer['name_' + currentLocale]}`"></span>
                <!-- <p class="mt-1 dark:text-gray-300 cut_text_css" v-html="String(notification.data.offer['description_' + currentLocale])"></p> -->
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const auth = useAuthStore();
const baseURL = useRuntimeConfig().public.baseURL;
const { currentLocale } = useLang();
</script>
