<template>
  <nav
    class="bg-white dark:bg-fpDark2 dark:text-fpLightBack fixed inset-y-0 end-0 w-5/6 z-50 px-4 pt-4 flex flex-col overflow-y-scroll">
    <div class="lg:hidden">
      <div class="flex items-center justify-between gap-x-2">
        <button type="button" class="outline-gray-100 outline rounded-md"
          @click="globalStore.toggleMenu = !globalStore.toggleMenu">
          <Icon name="ic-round-close" class="text-4xl font-bold" />
        </button>
        <img src="~/assets/images/global/logo.png" alt="logo" class="w-16" />
      </div>
    </div>
    <ul class="flex flex-col divide-y dark:divide-fpDark2 mt-6 h-full text-sm font-normal">
      <li class="py-3">
        <nuxt-link :to="localePath('/')" @click="globalStore.closeMenu()"
          class="text-fpDark2 dark:text-gray-300 flex items-center justify-between">
          <span>{{ $t("home") }}</span>
          <!-- <Icon class="text-3xl ms-auto" name="ic-baseline-house" /> -->
          <img src="/imgs/icons/00.png" class="w-7" alt="">
        </nuxt-link>
      </li>
      <li class="py-3">
        <nuxt-link :to="localePath('/sections')" @click="globalStore.closeMenu()"
          class="text-fpDark2 dark:text-gray-300 flex items-center justify-between">
          <span>{{ $t("classes") }}</span>
          <!-- <Icon class="text-3xl" name="uis:window-section" /> -->
          <img src="/imgs/icons/07.png" class="w-7" alt="">
        </nuxt-link>
      </li>
      <li class="py-3">
        <nuxt-link :to="localePath('/teachers')" @click="globalStore.closeMenu()"
          class="text-fpDark2 dark:text-gray-300 flex items-center justify-between">
          <span>{{ $t("teachers") }}</span>
          <!-- <Icon class="text-3xl" name="game-icons:teacher" /> -->
          <img src="/imgs/icons/01.png" class="w-7" alt="">
        </nuxt-link>
      </li>
      <li class="py-3">
        <nuxt-link :to="localePath('/subjects')" @click="globalStore.closeMenu()"
          class="text-fpDark2 dark:text-gray-300 flex items-center justify-between">
          <span>{{ $t("subjects") }}</span>
          <!-- <Icon class="text-3xl" name="mdi:book-open-page-variant-outline" /> -->
          <img src="/imgs/icons/09.png" class="w-7" alt="">
        </nuxt-link>
      </li>
      <li class="py-3">
        <nuxt-link :to="localePath('/offers')" @click="globalStore.closeMenu()"
          class="offers text-fpDark2 dark:text-gray-300 flex items-center justify-between"><span>{{ $t("offers")
            }}</span>
          <!-- <Icon class="text-3xl" name="ic:baseline-card-giftcard" /> -->
          <img src="/imgs/menu-icons/coupon.png" class="w-7" alt="">
        </nuxt-link>
      </li>

      <li class="py-3">
        <nuxt-link :to="localePath('/about')" @click="globalStore.closeMenu()"
          class="text-fpDark2 dark:text-gray-300 flex items-center justify-between">
          <span>{{ $t("about") }}</span>
          <!-- <Icon class="text-3xl" name="mdi-account-box-multiple-outline" /> -->
          <img src="/imgs/icons/010.png" class="w-7" alt="">
        </nuxt-link>
      </li>
      <li class="py-3">
        <nuxt-link :to="localePath('/review')" @click="globalStore.closeMenu()"
          class="reviews text-fpDark2 dark:text-gray-300 flex items-center justify-between"><span>{{ $t("reviews")
            }}</span>
          <!-- <Icon class="text-3xl" name="ph-users-three-bold" /> -->
          <img src="/imgs/icons/06.png" class="w-7" alt="">
        </nuxt-link>
      </li>
      <li class="py-3">
        <nuxt-link :to="localePath('/contact')" @click="globalStore.closeMenu()"
          class="text-fpDark2 dark:text-gray-300 flex items-center justify-between">
          <span>{{ $t("contact") }}</span>
          <!-- <Icon class="text-3xl" name="ph-envelope-open-fill" /> -->
          <img src="/imgs/icons/012.png" class="w-7" alt="">
        </nuxt-link>
      </li>
    </ul>

    <div class="flex flex-col justify-center items-center gap-y-4 py-4">
      <nuxt-link v-if="!auth.isLoggedIn" :to="localePath('/login')" @click="globalStore.closeMenu()"
        class="custom_btn1 hover:animate-gradient-xy md:!text-base !text-sm !m-0 md:p-3 !p-1">
        <Icon name="mdi-lock-open" class="text-inherit text-2xl -mt-1 me-1" />
        {{ $t("login") }}
      </nuxt-link>
      <nuxt-link :to="localePath('/register')" v-if="!auth.isLoggedIn" @click="globalStore.closeMenu()"
        class="custom_btn1 hover:animate-gradient-xy md:!text-base !text-sm !m-0 md:p-3 !p-1">
        <Icon name="mdi-account-plus" class="text-inherit text-2xl -mt-1 me-1" />
        {{ $t("create_new_account") }}
      </nuxt-link>
      <button @click.stop="changelocal()" @click="globalStore.closeMenu()" type="button"
        class="flex items-center font-bold justify-center px-4 py-2 rounded-lg cursor-pointer text-fpDark1 dark:text-slate-50 hover:dark:text-white hover:text-fp1 relative z-50 transition align-middle text-sm">
        <Icon :name="locale == 'ar' ? 'emojione:flag-for-united-states' : 'emojione:flag-for-saudi-arabia'"
          class="text-2xl" />
        <span class="ms-1">{{ locale == "ar" ? "English" : "العربية" }} </span>
      </button>
      <ul class="flex items-center gap-x-3 justify-around border-t-2 pt-4 w-full">
        <li>
          <a :href="globalStore.appSettings.facebook" target="_blank">
            <Icon class="text-slate-800 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
              name="hugeicons:facebook-02" />
          </a>
        </li>
        <li>
          <a :href="globalStore.appSettings.instagram" target="_blank">
            <Icon class="text-slate-800 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
              name="hugeicons:instagram" />
          </a>
        </li>
        <li>
          <a :href="globalStore.appSettings.youtube" target="_blank">
            <Icon class="text-slate-800 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
              name="hugeicons:youtube" />
          </a>
        </li>
        <li>
          <a :href="`http://wa.me/${globalStore.appSettings.whatsapp}`" target="_blank">
            <Icon class="text-slate-800 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
              name="hugeicons:whatsapp-business" />
          </a>
        </li>
        <li>
          <a :href="`${globalStore.appSettings.telegram}`" target="_blank">
            <Icon class="text-slate-800 dark:text-white hover:text-fp3 transition hover:scale-110 lg:text-3xl text-2xl"
              name="hugeicons:telegram" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useGlobalStore } from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const auth = useAuthStore();
const { t, locale, setLocale } = useI18n();
const changelocal = () => {
  setLocale(locale.value == "ar" ? "en" : "ar");
};
</script>
