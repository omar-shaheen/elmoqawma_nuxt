<template>
  <section class="bg-fp2/10 privacy-policy">
    <!-- <BreadCrumbs :classes="'bg-breadcrumb h-28 lg:h-[500px] text-white'" :contents="['سياسة الخصوصية']" /> -->
    <div class="container mx-auto py-5">
      <div v-html="globalStore.appSettings.privacy_policy" class="bg-white dark:bg-gray-900 p-10 rounded-lg shadow-custom1"></div>
    </div>
  </section>
</template>
<script setup>
import {useGlobalStore} from "@/store/GlobalStore";
const globalStore = useGlobalStore();
const {t} = useI18n();
useHead({
  title: t("privacy_policy"),
  meta: [{name: "title", content: t("privacy_policy")}],
});
</script>
<style>
.bg-breadcrumb {
  background-image: url("~/assets/images/home/hero.png");
  background-size: cover;
}
</style>
