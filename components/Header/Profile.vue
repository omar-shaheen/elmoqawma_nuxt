<template>
  <div :title="$t('profile')" class="relative" @mouseenter="globalStore.hoverProfile = !globalStore.hoverProfile"
    @mouseleave="globalStore.hoverProfile = false" v-if="auth.isLoggedIn">
    <Icon name="ph:user-duotone" class="btn_actions_header hover:brightness-110 hover:animate-pulse p-1" />
    <transition name="menu-down" v-show="globalStore.hoverProfile">
      <!-- style="display: none" -->
      <div
        class="bg-white dark:text-gray-300 dark:bg-fpDark1 fixed lg:absolute top-16 lg:top-10 end-0 lg:-end-20 w-full lg:w-72 z-[110] rounded-lg shadow-custom1">
        <div class="flex items-center gap-x-3 border-b-2 border-b-gray-200 dark:border-b-fpDark2 pb-2 p-4">
          <div>
            <img v-if="auth.user.photo" :src="`${baseURL}/images/${auth.user.photo}`"
              class="sm:mb-4 object-cover w-14 h-14 rounded-full inline" alt="user photo" />
            <img v-else src="/imgs/avatar.png"
              class="sm:mb-4 object-cover w-14 h-14 rounded-full inline" alt="user photo" />
          </div>
          <div>
            <p v-text="auth.user['name_' + currentLocale]" class="text-lg font-bold text_clip"></p>
            <p v-text="auth.user.email" class="text-sm text-start text-fpDarkGray"></p>
            <p class="mt-2 text-start text-base text-green-500">
              الرصيد :
              <span class="font-bold">{{ auth.user.balance }}</span>
              جنية
            </p>
          </div>
        </div>
        <!-- student -->
        <ul class="flex flex-col divide-y divide-gray-200 dark:divide-fpDark2 overflow-y-scroll no-scroll">
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('profile')"
              class="link_dropdown_link">
              <!-- <Icon name="ic:baseline-account-box" class="text-2xl" /> -->
               <img src="/imgs/menu-icons/student.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("profile") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('courses')"
              class="link_dropdown_link">
              <!-- <Icon name="ic:outline-ondemand-video" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/laptop.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("my_courses") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('offers')"
              class="link_dropdown_link">
              <!-- <Icon name="ic:baseline-card-giftcard" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/coupon.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("my_offers") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('files')"
              class="link_dropdown_link">
              <!-- <Icon name="ph:files-bold" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/files.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("my_files") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('certificates')"
              class="link_dropdown_link">
              <!-- <Icon name="fluent:certificate-24-regular" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/certificate.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("my_certificates") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('exams')"
              class="link_dropdown_link">
              <!-- <Icon name="ic:outline-help-center" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/test.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("my_exams") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('invoices')"
              class="link_dropdown_link">
              <!-- <Icon name="fa6-solid:file-invoice-dollar" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/bill.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("invoices") }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="localePath(`/student`)" @click="StudentStore.setValueStudentMenu('settings')"
              class="link_dropdown_link">
              <!-- <Icon name="ic:outline-settings" class="text-2xl" /> -->
              <img src="/imgs/menu-icons/control.png" class="w-6" alt="">
              <span class="text-base font-medium ms-2">{{ $t("settings") }}</span>
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
import { useStudentStore } from "@/store/StudentStore";
const StudentStore = useStudentStore();
const globalStore = useGlobalStore();
const auth = useAuthStore();
const baseURL = useRuntimeConfig().public.baseURL;
const { currentLocale } = useLang();
</script>
