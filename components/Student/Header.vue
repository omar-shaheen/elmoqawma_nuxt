<template>
  <header class="body-font shadow-lg py-2 sticky top-0 start-0 bg-white dark:bg-fpDark1 z-50">
    <div class="container mx-auto">
      <div class="hidden lg:flex items-center gap-x-10">
        <nuxt-link :to="localePath(`/`)" class="flex items-center font-medium text-gray-900 lg:me-20">
          <img src="~/assets/images/global/logo.png" alt="" class="w-20 lg:w-24" />
        </nuxt-link>
        <div class="relative w-full">
          <div class="relative h-fit w-full mx-auto">
            <input type="text" id="simple-search"
              class="focus:outline-none bg-slate-50 focus:bg-slate-100 dark:bg-fpDark2 text-black dark:text-fpLightBack placeholder:text-fpLightGray rounded-xl p-6 py-2 font-medium text-lg w-full border dark:border-gray-600"
              :placeholder="$t('search')" />
            <Icon name="streamline:definition-search-book-solid"
              class="absolute bg-transparent h-full end-3 top-0 grid place-items-center text-3xl text-slate-400" />
          </div>
        </div>
        <div class="flex items-center gap-x-3">
          <div
            class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shadow-xl outline outline-4 outline-offset-2 outline-gray-200">
            <img v-if="auth.user.photo"
              :src="auth.user.oauth_type == null ? `${baseURL}/images/${auth.user.photo}` : `${auth.user.photo}`" alt=""
              class="w-full h-full object-cover" />
            <img v-else
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS8TjFE3RRsUZV9JietSrxIY8xke14UuulctZGjudNedC9oVgaJhQK9AE2nM8IXSXvls&usqp=CAU"
              alt="" class="w-full h-full object-cover" />
          </div>
          <div class="text-end dark:text-fpLightBack">
            <span class="font-bold whitespace-nowrap">{{ auth.user["name_" + currentLocale].slice(1, 0) }}</span>
            <!-- <p class="">{{ auth.user.email }}</p> -->
          </div>
        </div>
      </div>
      <div class="lg:hidden flex items-center justify-between">
        <nuxt-link :to="localePath(`/`)" class="flex items-center font-medium text-gray-900">
          <img src="~/assets/images/global/logo.png" alt="" class="w-14" />
        </nuxt-link>
        <!-- <button class="border-2 border-gray-400 rounded-full p-1.5 border-dotted relative">
          <span class="flex justify-center items-center w-4 h-4 bg-red-500 rounded-full absolute -top-1 start-0 text-white text-xs font-bold">2</span>
          <img src="~/assets/images/student/notification.svg" alt="" class="w-8" />
        </button> -->
        <button @click="globalStore.menuMobileScreen = !globalStore.menuMobileScreen"
          class="open-menu flex items-center font-medium text-gray-900">
          <img src="~/assets/images/student/menu.svg" alt="" class="w-12" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from "@/store/AuthStore";
import { useTostStore } from "@/store/TostStore";
import { useGlobalStore } from "@/store/GlobalStore";
const { currentLocale, dir } = useLang();
const baseURL = useRuntimeConfig().public.baseURL;
const apiURL = useRuntimeConfig().public.apiURL;
const globalStore = useGlobalStore();
const auth = useAuthStore();
const tost = useTostStore();
const { t } = useI18n();

const showInputImage = () => {
  document.getElementById("image").click();
};
const getImage = async e => {
  const file = e.target.files[0];
  if (!file) return;
  let formData = new FormData();
  formData.append("photo", file);
  // update image
  await useAsyncData("updateImage", () =>
    $fetch(`${apiURL}/auth/updateImage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`,
      },
      body: formData,
    }).then(res => {
      if (res.status) {
        auth.setUser(res.user);

        tost.add({
          type: "success",
          message: currentLocale.value == "ar" ? t("update_image_message") : `success update your image`,
        });
        document.getElementById("photo-user").src = res.user.photo;
      } else {
        console.log(res);
        let ob = {};
        for (const [key, value] of Object.entries(res.message)) {
          ob[key] = value[0];
          tost.add({
            type: "error",
            message: value[0],
          });
        }
        errors.record(ob);
      }
    })
  );
};
</script>
