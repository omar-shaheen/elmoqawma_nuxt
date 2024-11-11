<template>
  <div class="w-full xl:w-2/12 flex justify-between xl:justify-end items-center gap-x-4">
    <button :title="t('change_language')" @click.stop="changelocal()" type="button"
      class="hidden lg:flex items-center font-bold justify-center px-4 py-2 rounded-lg cursor-pointer text-fpDark1 dark:text-slate-50 hover:dark:text-white hover:text-fp1 relative z-50 transition align-middle text-sm">
      <Icon :name="locale == 'ar'
        ? 'emojione:flag-for-united-states'
        : 'emojione:flag-for-saudi-arabia'
        " size="20" />
      <span class="ms-1 leading-3">{{ locale == "ar" ? "English" : "العربية" }} </span>
    </button>
    <button title="Dark mode and Light mode" :class="auth.isLoggedIn ? '' : 'ms-auto'"
      @click.stop="globalStore.toggleDarkmode()"
      class="bg-gray-200 hover:bg-fp1 dark:bg-fpDark2 xl:dark:bg-fpDark1 text-fp3 dark:text-fp2 hover:dark:text-white hover:text-white rounded-full p-2">
      <Icon class="text-2xl" name="ph-moon-fill" v-show="globalStore.mode == 'light'" />
      <Icon id="toggleMode" class="text-2xl" name="ph-sun-fill" v-show="globalStore.mode == 'dark'" />
    </button>
    <button v-if="auth.isLoggedIn" title="إشحن محفظتك الأن" type="button" @click.stop="auth.openModalWallet = true"
      class="text-fp3 dark:text-fp2 hover:dark:text-white hover:text-white bg-gray-50 dark:bg-fpDark2 xl:dark:bg-fpDark1 rounded-full p-2 grid place-content-center lg:hidden">
      <Icon name="ic:baseline-account-balance-wallet" class="text-2xl" :class="locale == 'ar' ? 'rotate-180' : ''" />
    </button>
    <HeaderNotifications />
    <HeaderProfile />

    <button :title="t('logout')" type="button" @click="auth.logout()"
      class="bg-gray-200 hover:bg-fp1 dark:bg-fpDark2 xl:dark:bg-fpDark1 text-fp3 dark:text-fp2 hover:dark:text-white hover:text-white rounded-full p-2 grid place-content-center"
      v-if="auth.isLoggedIn">
      <Icon name="ic-twotone-log-out" class="text-2xl" :class="locale == 'ar' ? 'rotate-180' : ''" />
    </button>
  </div>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const auth = useAuthStore();
const baseURL = useRuntimeConfig().public.baseURL;
const { currentLocale } = useLang();
const { t, locale, setLocale } = useI18n();
const changelocal = () => {
  setLocale(locale.value == "ar" ? "en" : "ar");
};
</script>
