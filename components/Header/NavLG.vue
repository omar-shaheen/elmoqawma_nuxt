<template>
  <nav class="dark:bg-fpDark2 dark:text-fpLightBack inset-y-0 end-0 z-50 w-9/12 px-4 hidden lg:block">
    <ul
      class="flex flex-row items-center dark:divide-fpDark2 text-sm font-bold whitespace-nowrap text-fp1 dark:text-gray-300">
      <li class="py-0">
        <nuxt-link :to="localePath('/')" @click="globalStore.closeMenu()"
          class="px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">
          {{ $t("home") }}
        </nuxt-link>
      </li>
      <li class="py-0">
        <nuxt-link :to="localePath('/sections')" @click="globalStore.closeMenu()"
          class="px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">
          {{ $t("classes") }}
        </nuxt-link>
      </li>
      <li class="py-0">
        <nuxt-link :to="localePath('/teachers')" @click="globalStore.closeMenu()"
          class="px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">
          {{ $t("teachers") }}
        </nuxt-link>
      </li>
      <li class="py-0">
        <nuxt-link :to="localePath('/subjects')" @click="globalStore.closeMenu()"
          class="px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">
          {{ $t("subjects") }}
        </nuxt-link>
      </li>

      <li class="py-0">
        <nuxt-link :to="localePath('/offers')" @click="globalStore.closeMenu()"
          class="offers px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">{{
            $t("offers") }}
        </nuxt-link>
      </li>

      <li class="py-0">
        <nuxt-link :to="localePath('/about')" @click="globalStore.closeMenu()"
          class="px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">
          {{ $t("about") }}
        </nuxt-link>
      </li>
      <li class="py-0">
        <nuxt-link :to="localePath('/review')" @click="globalStore.closeMenu()"
          class="reviews px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">{{
            $t("reviews") }}
        </nuxt-link>
      </li>

      <li class="py-0">
        <nuxt-link :to="localePath('/contact')" @click="globalStore.closeMenu()"
          class="px-2 xl:text-base text-sm text-[#003b3f] hover:text-fp1 dark:text-slate-300 dark:hover:text-fp1">
          {{ $t("contact") }}
        </nuxt-link>
      </li>
    </ul>
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
